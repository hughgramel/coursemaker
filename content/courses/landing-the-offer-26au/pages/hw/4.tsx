import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW4, System design write-up for a well-known product",
  tagline: "Design a real system end to end before the interview so the conversation is about tradeoffs, not hand-waving.",
  outDate: "Week 6",
  dueDate: "Week 8",
  overview: [
    "System design rewards a specific arc: requirements, capacity, API, data model, storage, caching, scale, edge cases. Skipping steps or reordering them is the single most common mistake candidates make. Doing the full sequence once on paper, before you sit across from an interviewer, is the difference between a vague hand-wave at “we’d just use Kafka” and a real back-and-forth about why Kafka is the right choice for this particular write volume and consumer fan-out. The write-up format forces you to commit to a decision, write down the reasoning, and expose the gaps yourself before the interviewer finds them.",
    "Pick ONE product from this list and design it end to end: URL shortener, rate limiter, Twitter feed, Instagram, WhatsApp chat, Uber dispatch, Dropbox file sync, Netflix video streaming, web crawler. The product should be unfamiliar enough to stretch you but not so exotic that you have no intuition for the usage patterns. A good system design write-up reads like a technical memo, not a bullet list: it states the constraints first, derives the numbers, proposes an interface, picks storage with a reason, and ends with the hard questions a senior engineer would push on.",
  ],
  goals: [
    "Apply the system design rubric in the correct order: requirements before any component choice.",
    "Analyze tradeoffs between SQL and NoSQL, push vs. pull feeds, strong vs. eventual consistency.",
    "Evaluate sharding and caching strategies against a concrete capacity estimate.",
    "Create a Mermaid component diagram that reflects the architecture you described in prose.",
  ],
  instructions: [
    {
      title: "Pick one product and write requirements",
      body: "Choose one product from the list in the overview. Write functional requirements (what the system must do) and non-functional requirements (latency targets, availability SLA, consistency guarantees, scale targets). Keep the combined requirements section under one page. Defining scope here is not busywork, it is the constraint that makes every downstream decision defensible. A “URL shortener” that must handle 10 QPS and one that must handle 100,000 QPS are different systems. Say which one you are building.",
      steps: [
        "List 4-6 functional requirements. Each is a user-facing behavior the system provides.",
        "List 3-5 non-functional requirements: read/write latency p99, availability (e.g., 99.99%), consistency model, geographic scope.",
        "State one explicit out-of-scope decision and why (e.g., “We do not support analytics in this design; that is a separate service.”).",
      ],
    },
    {
      title: "Capacity estimate",
      body: "Show the arithmetic. State your DAU assumption, derive QPS from it, and project storage consumed per year and peak bandwidth. Engineers respect numbers that come from stated assumptions, not numbers pulled from nowhere. If you later find a component that can’t handle the load you projected, the estimate exposes the bottleneck early.",
      steps: [
        "State DAU and your read/write ratio assumption.",
        "Derive average QPS and peak QPS (assume peak is 3x average).",
        "Estimate storage per object, objects per year, and total storage at three years.",
        "Estimate bandwidth in and out at peak QPS.",
      ],
    },
    {
      title: "API design",
      body: "Define 5-10 REST or RPC endpoints. For each, name the method and path (or procedure name), list the important fields in the request, and describe the response shape and status codes. The API surface is the contract everything else is built against. If you are unsure whether two operations belong in one endpoint or two, err toward separation, you can always merge later, but a combined endpoint that does too much is hard to version.",
      steps: [
        "For each endpoint: method + path, required request fields with types, response shape (key fields only), and the primary error codes.",
        "Identify which endpoints are on the critical read path and which are write-heavy. Note any that require idempotency keys.",
      ],
    },
    {
      title: "Data model",
      body: "List the core entities, their primary keys, and the indexes you would create. Then commit to SQL or NoSQL and defend the choice in two or three sentences. “NoSQL scales better” is not a defense. “The access pattern is always a single-key lookup by user ID, the schema will evolve frequently, and we do not need multi-row transactions” is.",
      steps: [
        "Draw out each entity as a table or document schema with field names and types.",
        "List the primary key and at least two secondary indexes per entity, with the query each index serves.",
        "State SQL or NoSQL (name the specific engine, e.g., PostgreSQL, DynamoDB, Cassandra) and give the one-paragraph justification.",
      ],
    },
    {
      title: "Storage architecture",
      body: "Describe how data is distributed and how you protect against failure. Pick a sharding key and explain why it minimizes hot spots. Describe replication: how many replicas, synchronous or asynchronous, and what the failover path looks like.",
      steps: [
        "State the sharding key. Explain what access pattern it optimizes and what hot-spot risk it introduces.",
        "Describe the replication factor and whether writes are synchronous or asynchronous to secondaries.",
        "Identify the one most likely hot spot in your design and propose a mitigation (e.g., key salting, read replicas, write buffering).",
      ],
    },
    {
      title: "Caching strategy",
      body: "Identify where a cache saves the most latency or database load. Name the layer (CDN, app-level, DB read replica), what you cache (the key and value), the TTL, and the eviction policy. Then describe your cache invalidation approach. Cache invalidation is notoriously hard; naming the strategy forces you to think through its failure modes.",
      steps: [
        "List 2-3 cache entries: key, value, TTL, and the read pattern that justifies caching it.",
        "Choose an eviction policy (LRU, LFU, TTL-only) and explain the tradeoff for your access pattern.",
        "Describe how you invalidate stale entries on a write. Be explicit about the failure mode if invalidation is delayed.",
      ],
    },
    {
      title: "Edge cases",
      body: "End with 3-5 edge cases a senior engineer would push on in a real interview. For each, state the scenario, why your current design handles it poorly or not at all, and your proposed mitigation. Examples: thundering herd on cache miss, write amplification under fan-out, clock skew between nodes, large object uploads that exceed API gateway limits, cascading failures when a downstream dependency is slow.",
    },
    {
      title: "Mermaid component diagram",
      body: "Include one Mermaid diagram at the end of the write-up (or in an appendix). Use the C4 component or a standard architecture diagram style. The diagram should show the major components, the data stores, and the primary request flows. It does not need to show every component, only the ones you discussed. A diagram that contradicts the prose is worse than no diagram; make them consistent.",
    },
  ],
  deliverables: [
    "A 5-8 page write-up (PDF or Markdown) covering all seven sections above: requirements, capacity, API, data model, storage, caching, and edge cases.",
    "One Mermaid component diagram embedded in or appended to the write-up.",
    "A brief cover paragraph (3-5 sentences) naming the product you chose and stating the one design decision you found hardest to make.",
  ],
  rubric: [
    { dimension: "Requirements", points: 15, notes: "Functional and non-functional requirements are present, specific, and internally consistent." },
    { dimension: "Capacity math", points: 15, notes: "DAU, QPS, storage, and bandwidth all shown with arithmetic. Numbers follow from stated assumptions." },
    { dimension: "API design", points: 15, notes: "5-10 endpoints with request/response shapes and error codes. Idempotency addressed where needed." },
    { dimension: "Data model", points: 15, notes: "Entities, keys, and indexes defined. SQL vs. NoSQL choice defended with a concrete reason." },
    { dimension: "Storage choices", points: 15, notes: "Sharding key chosen and justified. Replication strategy stated. Hot-spot risk identified." },
    { dimension: "Caching", points: 10, notes: "At least two cache entries with TTL and eviction. Invalidation strategy named." },
    { dimension: "Edge cases", points: 10, notes: "3-5 edge cases that expose real failure modes, not trivial input validation." },
    { dimension: "Polish", points: 5, notes: "Diagram is consistent with prose. Write-up is readable and within the page budget." },
  ],
  hints: [
    "Read Donne Martin’s system-design-primer (https://github.com/donnemartin/system-design-primer) before you start. The order-of-operations section is the most important part.",
    "ByteByteGo (https://bytebytego.com) has visual walkthroughs of most of the products on the list. Use them to check your design after you draft your own.",
    "Hussein Nasser’s YouTube channel covers the protocol-level details (why TCP head-of-line blocking matters for video, how Postgres MVCC affects write throughput) that make the difference between a surface-level answer and a real one.",
    "Do NOT optimize before requirements. Every component choice must trace back to a constraint you stated in section one.",
    "The order of operations matters more than any individual component. A candidate who does requirements, then capacity, then API is recognizably prepared. A candidate who jumps to “we’d use a microservices architecture” before stating a single requirement has already lost points.",
    "If you pick Twitter feed or Instagram, you have to address fan-out on write vs. fan-out on read. That decision alone can fill a paragraph.",
  ],
  late: "Late submissions lose 10% per day, up to three days. After three days, no credit. The diagram alone is not a submission; all seven sections must be present.",
};

export function Hw4() { return <ProjectPage spec={spec} />; }
export const hw4SearchBody = "HW4 system design write-up requirements capacity API data model storage caching sharding edge cases Mermaid diagram";
