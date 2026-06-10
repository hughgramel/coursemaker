import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";
import { Mermaid } from "@/components/Mermaid";

export function Wk06Reading() {
  return (
    <ReadingPage
      id="wk06"
      title="Week 6: designing a URL shortener end to end"
      kicker="Landing the Offer: SWE Job Search for Senior CS Students &middot; Autumn 2026 &middot; Reading"
    >
      <ReadingFraming>
        <p>
          This reading walks through one complete system design from the first
          clarifying question to the final tradeoff statement. By the end you
          will be able to apply the order of operations to a real problem: state
          requirements with numbers, estimate capacity from first principles,
          choose between SQL and a key-value store for a given access pattern,
          pick a sharding key and name what it costs, and explain a caching
          strategy that a senior engineer would actually deploy. The URL
          shortener is the canonical learning vehicle because it is simple enough
          to finish in 45 minutes but rich enough to exercise every component of
          the system design rubric.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Week 1 of this course (the
          interview loop anatomy and where system design sits in the loop) and
          Week 3 (code quality signal and complexity analysis). This reading
          introduces the following new concepts: system-design-rubric,
          requirements-clarification, capacity-estimation, sql-vs-nosql,
          caching, load-balancing, sharding, queues, and cap-theorem.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-what-the-interviewer-is-scoring">
        1. What the interviewer is scoring
      </AnchorHeading>
      <p>
        A system design interview is not a trivia test. There is no canonical
        URL shortener diagram that earns a passing grade. The interviewer is
        scoring a process: do you clarify before committing? Do your capacity
        numbers inform your component choices? Do you state tradeoffs explicitly
        rather than defending a design as obviously correct?
      </p>
      <p>
        ByteByteGo (2023) describes a four-step framework: understand the
        problem and establish scope; propose a high-level design and get
        buy-in; design the deep dive; wrap up. The first step is where most
        candidates lose points. They skip requirements and start drawing
        components within the first two minutes. The interviewer sees a
        candidate who cannot slow down and think before acting. That signal
        matters more than the quality of the diagram they eventually produce.
      </p>
      <p>
        The System Design Primer (Martin, 2017) captures this in its opening
        framing: the interview is a chance to show how you approach a problem,
        not just what solutions you know. A candidate who asks four sharp
        requirements questions, computes a back-of-envelope estimate, and then
        draws a straightforward diagram with explicit tradeoff statements will
        outscore a candidate who draws a sophisticated distributed system
        without ever stating what problem it is solving.
      </p>

      <AnchorHeading as="h2" id="2-requirements-clarification">
        2. Requirements clarification
      </AnchorHeading>
      <p>
        Requirements come before any design work. The interviewer expects you
        to ask questions. Silence followed by drawing is a red flag.
      </p>
      <p>
        <strong>Functional requirements</strong> name what the system does.
        For a URL shortener:
      </p>
      <ul>
        <li>
          Given a long URL, the system returns a short code (e.g.,
          <code>sho.rt/abc123</code>).
        </li>
        <li>
          Given a short code, the system redirects the user to the original
          long URL.
        </li>
        <li>
          Short URLs expire after a configurable TTL (or never expire, if
          the user does not specify).
        </li>
        <li>
          Users can optionally specify a custom alias (e.g.,
          <code>sho.rt/my-campaign</code>).
        </li>
      </ul>
      <p>
        <strong>Non-functional requirements</strong> name how the system
        performs. These are where numbers live:
      </p>
      <ul>
        <li>Scale: 100 million redirect requests per day.</li>
        <li>Read-to-write ratio: approximately 100:1.</li>
        <li>Latency: p99 redirect latency under 100ms.</li>
        <li>Availability: 99.9% uptime (about 8.7 hours of downtime per year).</li>
        <li>Durability: a short URL, once created, must not disappear.</li>
      </ul>
      <p>
        You should also state a scope boundary: what you are explicitly
        not designing. For this session: no analytics dashboard on click
        counts, no link previews, no team collaboration features. Naming
        what is out of scope demonstrates engineering judgment. It tells
        the interviewer you understand that every feature is a cost.
      </p>

      <AnchorHeading as="h2" id="3-capacity-estimation">
        3. Capacity estimation
      </AnchorHeading>
      <p>
        Back-of-envelope estimation is a credibility signal. It tells the
        interviewer you have thought hard about real systems. The goal is
        not precision. The goal is an order-of-magnitude answer that
        informs a concrete design decision.
      </p>
      <p>
        Starting from the non-functional requirements above:
      </p>
      <pre>{`Scale: 100 million redirects/day

Reads per second:
  100,000,000 / 86,400 seconds ≈ 1,160 reads/sec

Read-to-write ratio: 100:1, so:
  Writes per day: 100,000,000 / 100 = 1,000,000 new URLs/day
  Writes per second: 1,000,000 / 86,400 ≈ 12 writes/sec

Storage for one year:
  1,000,000 writes/day × 365 days = 365,000,000 URLs
  Each row: ~500 bytes (short_code + long_url + created_at + user_id)
  365,000,000 × 500 bytes ≈ 182 GB

Bandwidth (reads):
  1,160 reads/sec × 500 bytes/response ≈ 580 KB/sec outbound
  (small; not the bottleneck)`}</pre>
      <p>
        Now connect the numbers to design decisions. 1,160 reads per second
        with a p99 latency requirement of 100ms: a single database without
        a cache layer cannot serve this, because even an SSD-backed
        PostgreSQL instance will show latency variance above 100ms at that
        read rate under contention. A cache layer is required. The 182 GB
        storage estimate fits comfortably on a single modern server, which
        means sharding is optional in year one. The 12 writes per second is
        not the bottleneck; the write path can be simpler than the read path.
        Every number drives a decision. That is the point of the estimate.
      </p>

      <Callout title="The estimate does not have to be exact">
        <p>
          A factor-of-two error in a back-of-envelope estimate is
          acceptable. What is not acceptable is a design where no component
          size is motivated by any number. If you estimate 182 GB of storage
          but your design does not show anything that stores 182 GB, the
          estimate was decorative. Connect every estimate to at least one
          design decision.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="4-api-design">
        4. API design
      </AnchorHeading>
      <p>
        Sketch the public API before drawing infrastructure. The API shape
        reveals what queries the database must answer.
      </p>
      <pre>{`POST /urls
  Body: { long_url: string, custom_alias?: string, ttl_days?: number }
  Response: { short_code: string, short_url: string, expires_at?: string }
  Use: create a new short URL

GET /{short_code}
  Response: HTTP 301 redirect to long_url
            HTTP 404 if not found or expired
  Use: resolve a short code to its destination

DELETE /urls/{short_code}
  Response: HTTP 204 No Content
  Use: delete a short URL (owner only)`}</pre>
      <p>
        The redirect endpoint is the most read-heavy by far (100:1
        read-to-write). Its access pattern is a single primary-key lookup:
        given a <code>short_code</code>, return a <code>long_url</code>.
        This access pattern determines the data model choice in the next
        section.
      </p>
      <p>
        One design choice worth stating aloud: the redirect should return
        a <strong>301 (permanent redirect)</strong> or a <strong>302
        (temporary redirect)</strong>. A 301 tells the browser to cache
        the redirect client-side, which reduces server load. A 302 forces
        the browser to ask the server on every visit, which enables
        analytics (you count the server hits) and allows you to update the
        destination. For a URL shortener with analytics requirements, 302
        is the correct choice even though it generates more server load.
        For a URL shortener without analytics, 301 reduces load by offloading
        repeat visitors to the browser cache. State the tradeoff; let the
        interviewer weigh in.
      </p>

      <AnchorHeading as="h2" id="5-data-model-and-sql-vs-nosql">
        5. Data model and SQL vs. NoSQL
      </AnchorHeading>
      <p>
        The primary entity is the URL mapping. A minimal schema:
      </p>
      <pre>{`TABLE urls
  short_code  VARCHAR(8)   PRIMARY KEY
  long_url    TEXT         NOT NULL
  user_id     BIGINT       (nullable for anonymous creation)
  created_at  TIMESTAMP    NOT NULL
  expires_at  TIMESTAMP    (nullable = never expires)`}</pre>
      <p>
        The dominant read access pattern is a lookup by <code>short_code</code>.
        This is a single primary-key read. Both SQL and NoSQL handle it well.
        The choice turns on what else the system needs:
      </p>
      <ul>
        <li>
          <strong>PostgreSQL (SQL):</strong> ACID transactions, easy joins
          for analytics (&ldquo;all URLs created by user X this month&rdquo;),
          schema evolution is straightforward, a single primary-key lookup
          is fast with the index on <code>short_code</code>. Handles 182 GB
          and 1,160 reads/sec without sharding in year one.
        </li>
        <li>
          <strong>DynamoDB or Cassandra (NoSQL, key-value):</strong> partition
          key is <code>short_code</code>, value is the full row. Lookup is
          O(1), extremely low latency at massive scale, scales horizontally
          to billions of rows without manual sharding. No joins: analytics
          require a separate data store (e.g., a Redshift table for batch
          analytics).
        </li>
      </ul>
      <p>
        For this design, SQL is the better initial choice. The scale does
        not require sharding in year one, analytics are desirable, and
        PostgreSQL&rsquo;s ACID guarantees make the custom alias uniqueness
        constraint simple to enforce. ByteByteGo 101 (2023) frames this
        well: the correct database is the one that matches the access
        pattern and the consistency requirement, not the one that sounds
        the most distributed.
      </p>

      <AnchorHeading as="h2" id="6-sharding">
        6. Storage and sharding
      </AnchorHeading>
      <p>
        At 182 GB per year, sharding is not required in year one on a
        modern NVMe-backed database server. But an interviewer will often
        ask: &ldquo;how does your design handle 10x scale?&rdquo; You
        should have an answer.
      </p>
      <p>
        The two dominant sharding strategies:
      </p>
      <pre>{`Range-based sharding:
  Shard 0: short_codes starting with a-g
  Shard 1: short_codes starting with h-n
  Shard 2: short_codes starting with o-z

  Problem: if short codes are generated sequentially, new writes
  cluster on one shard. Hotspot.

Hash-based sharding:
  Shard = hash(short_code) % num_shards

  Benefit: writes distributed uniformly across shards.
  Problem: range queries across short codes require scanning
  all shards. For a URL shortener, there are no range queries
  by short code, so this cost is zero.`}</pre>
      <p>
        Hash-based sharding on <code>short_code</code> is the correct choice
        for a URL shortener. The access pattern is always a point lookup
        by <code>short_code</code>, never a range scan. The hash distributes
        write load evenly and the absence of range queries means you pay
        no query overhead. Hussein Nasser (2021) emphasizes this point:
        the sharding key decision only makes sense after you understand the
        access pattern. The key is not a performance tuning parameter; it is
        a data routing decision, and the routing must match the queries.
      </p>

      <AnchorHeading as="h2" id="7-caching-strategy">
        7. Caching strategy
      </AnchorHeading>
      <p>
        The capacity estimate showed 1,160 reads per second with a p99
        latency target of 100ms. A cache is necessary. There are three
        layers to consider.
      </p>
      <p>
        <strong>Layer 1: client cache.</strong> For 301 redirects, the
        browser caches the result and never asks the server again for
        repeat visits. This is free server-side latency reduction for
        repeat users. For 302 redirects (analytics mode), this layer does
        not apply.
      </p>
      <p>
        <strong>Layer 2: CDN.</strong> A CDN edge node close to the user
        can cache the redirect response, absorbing the redirect lookup
        before it reaches the origin. Useful for viral short URLs that
        receive millions of hits from a single geographic region. Pull
        CDN is simpler to operate: the CDN fetches from origin on the
        first miss and caches the result.
      </p>
      <p>
        <strong>Layer 3: application cache (Redis).</strong> Redis sits in
        front of PostgreSQL. The cache key is <code>short_code</code>; the
        value is the <code>long_url</code>. On a redirect request, the
        application checks Redis first. On a cache hit, it returns the
        redirect without touching the database. On a miss, it reads from
        PostgreSQL and writes the result to Redis with a TTL matching the
        URL expiry. Martin (2017) calls this the cache-aside pattern.
      </p>
      <p>
        Cache sizing: if a hot 20% of URLs account for 80% of traffic
        (a reasonable Pareto assumption), then 20% of 365 million URLs
        is 73 million rows. At 500 bytes each, that is about 36 GB of
        hot data. A Redis instance with 48 GB RAM holds the entire hot
        tier. At 1,160 reads per second, a single Redis node is more than
        sufficient (Redis handles 100,000+ operations per second on a
        single core).
      </p>
      <p>
        <strong>Cache invalidation:</strong> when a short URL is deleted or
        expires, the cache entry must be evicted. For deletion, issue an
        explicit <code>DEL short_code</code> to Redis at delete time. For
        expiry, set the Redis TTL to match the <code>expires_at</code> field
        in PostgreSQL so the cache entry self-evicts. This avoids serving
        expired redirects from cache while eliminating the need for a
        background sweeper.
      </p>

      <AnchorHeading as="h2" id="8-component-diagram">
        8. Component diagram
      </AnchorHeading>
      <p>
        The diagram below shows the complete read and write paths for the
        URL shortener. The read path (redirect) passes through the CDN,
        load balancer, application server, Redis cache, and PostgreSQL.
        The write path (shorten a URL) bypasses the CDN and cache, writing
        directly to the application server and database.
      </p>

      <Mermaid
        alt="URL shortener component diagram: client to CDN to load balancer to API servers to Redis cache to PostgreSQL, with an async worker queue for background tasks"
        chart={`flowchart LR
  Client["Client\n(browser / app)"]
  CDN["CDN\n(redirect cache)"]
  LB["Load balancer"]
  API["API servers\n(stateless)"]
  Cache["Redis\n(redirect cache)"]
  DB["PostgreSQL\n(primary + replicas)"]
  Queue["Message queue\n(async jobs)"]
  Worker["Worker service\n(expiry, analytics)"]

  Client -->|"GET /{code}"| CDN
  CDN -->|cache miss| LB
  LB --> API
  API -->|cache lookup| Cache
  Cache -->|miss| DB
  DB -->|row| Cache
  Cache -->|long_url| API
  API -->|301/302 redirect| Client

  Client -->|"POST /urls"| LB
  LB --> API
  API -->|write| DB
  API -->|enqueue expiry job| Queue
  Queue --> Worker
  Worker -->|expire / analytics| DB

  classDef store fill:#f0f4ff,stroke:#4f6ef7,color:#1a1a2e
  classDef infra fill:#fff7ed,stroke:#f59e0b,color:#1a1a2e
  class DB,Cache store
  class LB,CDN,Queue,Worker infra`}
      />

      <p>
        The application servers are stateless: they hold no session state
        themselves. All per-request state lives in Redis or PostgreSQL.
        This means the load balancer can route requests to any server
        without sticky sessions, and new server instances can be added
        behind the load balancer without coordination.
      </p>

      <AnchorHeading as="h2" id="9-edge-cases">
        9. Edge cases worth naming
      </AnchorHeading>
      <p>
        An interviewer will probe edge cases after the high-level diagram.
        Naming a few proactively signals that you think like an engineer
        who has operated a production system, not just one who has read
        about them.
      </p>
      <ul>
        <li>
          <strong>Short code collision.</strong> If short codes are generated
          randomly (e.g., 6 alphanumeric characters = 62^6 = 56 billion
          combinations), collisions are rare but possible. Check for existence
          before inserting. PostgreSQL&rsquo;s unique constraint on
          <code>short_code</code> makes this a failed insert that the
          application retries with a new code. At 1 million URLs per day,
          the birthday-problem collision probability is negligible until the
          table exceeds tens of billions of rows.
        </li>
        <li>
          <strong>Custom alias conflicts.</strong> Two users request the same
          custom alias simultaneously. Resolve with a database-level unique
          constraint and optimistic concurrency: the first commit wins, the
          second receives a 409 Conflict.
        </li>
        <li>
          <strong>Malicious URLs.</strong> A URL shortener that accepts any
          long URL will be used to shorten phishing links. Options: a
          third-party safe-browsing API check at creation time, a blocklist
          of known malicious domains, or a report mechanism. For an interview,
          naming the problem and one mitigation is sufficient.
        </li>
        <li>
          <strong>Hot URLs.</strong> A single viral short URL receives
          10 million redirects in one hour. The CDN absorbs most of this
          without touching the origin. If the CDN is not in front of the
          system, Redis alone absorbs it (100,000+ ops/sec per node).
          The application servers and PostgreSQL never see the full spike.
        </li>
        <li>
          <strong>Database failure.</strong> The PostgreSQL primary goes down.
          Read replicas continue serving redirects for cached URLs. Uncached
          URLs return 503 until the primary recovers or a replica is promoted.
          With 36 GB of hot data in Redis, the vast majority of traffic is
          served from cache during the outage.
        </li>
      </ul>

      <AnchorHeading as="h2" id="10-cap-theorem-applied">
        10. CAP theorem applied
      </AnchorHeading>
      <p>
        CAP theorem states that a distributed system can guarantee at most
        two of three properties: Consistency, Availability, and Partition
        tolerance. In practice, network partitions occur. The real choice
        is between consistency (CP) and availability (AP) during a partition.
      </p>
      <p>
        For a URL shortener, the consistency requirements are modest. If
        a redirect returns a slightly stale long URL during a partition, the
        user still reaches the right destination 99.9% of the time. The cost
        of returning a stale answer is low. The cost of returning an error
        during a partition is a broken user experience. This is an AP system.
        Martin (2017) uses exactly this kind of product reasoning to classify
        system consistency requirements: the right choice is always the one
        that matches the business cost of each failure mode, not the one that
        sounds more correct in the abstract.
      </p>
      <p>
        For the custom alias creation path, stronger consistency matters:
        two users should not get the same alias. Here, the PostgreSQL unique
        constraint enforces consistency at the write path. During a partition
        that prevents a write from reaching the primary, the system returns
        an error rather than silently creating a duplicate. This single
        endpoint is CP. The redirect endpoints are AP. A real system can have
        different consistency postures for different operations.
      </p>

      <AnchorHeading as="h2" id="11-worked-sequence">
        11. Worked sequence: a redirect request end to end
      </AnchorHeading>
      <p>
        Trace a single <code>GET /abc123</code> redirect request through
        the complete system:
      </p>
      <pre>{`1. Client sends GET /abc123 to https://sho.rt/abc123.

2. DNS resolves sho.rt to the CDN edge node closest to the client.

3. CDN checks its cache for /abc123.
   Hit: CDN returns 302 redirect to long_url. Done. ~5ms.
   Miss: CDN forwards request to load balancer.

4. Load balancer routes the request to one of N stateless API servers
   using round-robin (or least-connections).

5. API server calls Redis: GET short_code:abc123.
   Hit: Redis returns long_url. API server returns 302. ~10ms.
   Miss: proceed to step 6.

6. API server queries PostgreSQL:
   SELECT long_url, expires_at FROM urls WHERE short_code = 'abc123'
   If not found or expired: return 404.
   If found: proceed to step 7.

7. API server writes result to Redis:
   SET short_code:abc123 <long_url> EX <ttl_seconds>

8. API server returns 302 redirect to the client.
   CDN caches the result for future requests.

Total latency (cache miss, no CDN): ~25-40ms.
Total latency (Redis hit): ~10-15ms.
Total latency (CDN hit): ~5ms.`}</pre>
      <p>
        The layered caching strategy means that most requests never reach
        PostgreSQL. The database serves cold traffic and background writes.
        The cache layers handle the hot read path.
      </p>

      <AnchorHeading as="h2" id="12-exercises">12. Exercises</AnchorHeading>

      <Exercise n={1}>
        <p>
          Write the functional and non-functional requirements for a rate
          limiter that enforces 100 requests per minute per user across a
          distributed API. Include at least four non-functional requirements
          with numbers. Then compute the storage required to hold rate-limit
          counters for 10 million active users in Redis, assuming each counter
          is 16 bytes (user ID + count + TTL). Show your arithmetic.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          A social network stores user posts. The feed is assembled by fetching
          the 20 most recent posts from each of the user&rsquo;s 500 followees.
          Compare a SQL design (normalized tables with JOINs) to a pre-computed
          feed in a key-value store (one entry per user, value is a serialized
          list of post IDs). For each design, name the access pattern it
          optimizes, the tradeoff it makes, and one failure mode that the other
          design handles better.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Draw the request path for a viral short URL that receives 1 million
          redirects in 10 minutes. Your diagram should show where each caching
          layer absorbs traffic. Estimate the request rate that each layer
          handles (CDN, Redis, PostgreSQL). At what point does a single Redis
          node become the bottleneck, and what is your mitigation?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          You are designing a distributed rate limiter that tracks per-user
          request counts across 20 stateless API servers. The count must be
          accurate within 1 second across all servers (strong consistency).
          Why is a local in-memory counter per server insufficient? Design a
          solution using Redis. State the tradeoff your design makes on the
          CAP spectrum and explain why it is correct for a rate limiter.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          The URL shortener&rsquo;s database has grown to 2 billion rows over
          five years. Query latency has increased. Your engineering manager
          asks you to evaluate sharding. Write a two-paragraph recommendation
          that: (1) names the sharding key you would choose and why, and
          (2) names the operational cost of adding sharding to an existing
          production database. Reference the access pattern in your reasoning.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="13-going-deeper">13. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> System design lab: sketch a URL
          shortener or rate limiter from scratch in 45 minutes, then give and
          receive peer critique against the senior-engineer rubric. The section
          rubric matches the HW 4 grading criteria.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers the interview rubric,
          requirements clarification, capacity estimation, and the order of
          operations in more detail. The follow-up questions from lecture
          include a worked capacity estimation exercise.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers SQL vs. NoSQL access
          patterns, three caching layers, sharding strategies, queues and async
          work, and how to apply CAP theorem in an interview.
        </li>
        <li>
          <strong>HW 4 (out this week, due week 8).</strong> A written system
          design for a well-known product of your choice. The structure of this
          reading is a close match for the HW 4 format: requirements, capacity,
          API, data model, diagram, edge cases.
        </li>
      </ul>

      <Takeaways>
        <li>
          Start every system design with requirements. Functional requirements
          name what the system does. Non-functional requirements name numbers.
          A scope boundary names what you are not building.
        </li>
        <li>
          Back-of-envelope capacity estimates drive design decisions.
          1,160 reads per second demands a cache. 182 GB of storage does not
          require sharding. Every number should change at least one box in
          your diagram.
        </li>
        <li>
          Choose SQL or NoSQL based on access pattern. A primary-key point
          lookup at moderate scale is well served by SQL. A single-access-pattern
          workload at billions of rows favors a key-value store.
        </li>
        <li>
          Three caching layers serve different parts of the traffic curve:
          client cache (repeat users, free), CDN (geographic hot traffic),
          application cache (all hot traffic before the database). Size the
          cache against the hot tier, not the full dataset.
        </li>
        <li>
          CAP is a product decision. A URL shortener can tolerate stale
          redirects during a partition (AP). A custom alias creation cannot
          tolerate duplicates (CP). A single system can have different
          consistency postures for different operations.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          ByteByteGo (Alex Xu). &ldquo;System Design Interview: A Step-By-Step
          Guide.&rdquo; YouTube, 2023.{" "}
          <a href="https://www.youtube.com/watch?v=i7twT3x5yv8">
            youtube.com/watch?v=i7twT3x5yv8
          </a>
          . The four-step interview framework: scope, high-level design, deep
          dive, wrap-up. The source for the observation that requirements
          clarification is where most candidates lose points before drawing
          anything.
        </p>
        <p>
          ByteByteGoHq (Alex Xu &amp; Sahn Lam). &ldquo;System Design
          101.&rdquo; GitHub, 2023.{" "}
          <a href="https://github.com/ByteByteGoHq/system-design-101">
            github.com/ByteByteGoHq/system-design-101
          </a>
          . Visual companion covering SQL vs. NoSQL tradeoffs, caching
          strategies, load balancers, message queues, and real-world
          architecture case studies. The framing that the correct answer is
          always &ldquo;it depends&mdash;here is what it depends on&rdquo;
          comes from this source.
        </p>
        <p>
          Hussein Nasser. &ldquo;System Designs.&rdquo; YouTube playlist, 2021.{" "}
          <a href="https://www.youtube.com/playlist?list=PLQnljOFTspQXSevtRqvMNycWfHM7cXc3d">
            youtube.com/playlist?list=PLQnljOFTspQXSevtRqvMNycWfHM7cXc3d
          </a>
          . Backend engineering lectures on database internals, sharding,
          caching layers, and connection pooling. The source for the observation
          that understanding disk storage changes every decision about caching
          and sharding.
        </p>
        <p>
          Martin, Donne. &ldquo;System Design Primer.&rdquo; GitHub, 2017.{" "}
          <a href="https://github.com/donnemartin/system-design-primer">
            github.com/donnemartin/system-design-primer
          </a>
          . The canonical free study guide covering scalability, availability,
          consistency, load balancing, CDNs, caching strategies, SQL vs.
          NoSQL, CAP theorem, and worked system design walk-throughs including
          a URL shortener. The primary reference for this reading.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk06ReadingSearchBody =
  "system design URL shortener requirements clarification functional non-functional capacity estimation QPS reads per second writes storage bandwidth API design data model SQL NoSQL PostgreSQL DynamoDB key-value sharding hash-based range-based hotspot caching layers CDN Redis Memcached cache-aside write-through write-back invalidation load balancer stateless component diagram edge cases CAP theorem consistency availability partition tolerance message queue async worker ByteByteGo System Design Primer Hussein Nasser Week 6 reading landing the offer";
