import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 6 section: system design lab",
  tagline:
    "Sketch a URL shortener or rate limiter from scratch in 60 minutes, then critique a peer&rsquo;s design against the senior-engineer rubric.",
  outDate: "Week 6",
  dueDate: "Week 6 (bring nothing, produce everything in section)",
  overview: [
    "This section is a structured design sprint. You will pick one of two problems (URL shortener or rate limiter), spend 45 minutes sketching a design from scratch using the order of operations from lecture, and then spend the remaining time giving and receiving peer critique grounded in the rubric.",
    "The goal is not a complete or correct design. The goal is a design that shows a legible process: requirements clarified, capacity estimated, components named, tradeoffs stated. An interviewer reading your whiteboard at minute 45 should be able to reconstruct your reasoning even if they joined late.",
    "HW 4 goes out this week: a written system design for a well-known product of your choice, due week 8. The work you do in section today is direct preparation for that assignment. The peer critique rubric below is a close match for the HW 4 grading rubric.",
  ],
  goals: [
    "Apply the order of operations under time pressure: requirements, capacity, API, data model, diagram, deep dive",
    "Produce a one-page system sketch that names components and data flow clearly enough for a stranger to read",
    "Give a peer specific, rubric-grounded critique that identifies the highest-leverage gap in their design",
    "Receive critique and revise at least one design decision before the section ends",
    "Identify one sharding or caching tradeoff in your own design and state it explicitly",
  ],
  instructions: [
    {
      title: "Pick your problem (0-2 min)",
      body: "Choose one problem for the full session. Do not switch mid-session.",
      steps: [
        "Option A: URL shortener. Core features: given a long URL, return a short code; given a short code, redirect to the original URL. Target scale: 100 million redirects per day.",
        "Option B: Rate limiter. Core features: given a user ID and an API endpoint, allow or deny the request based on a configurable rate limit (e.g. 100 requests per minute per user). Target scale: 10,000 requests per second across all users.",
      ],
    },
    {
      title: "Requirements and capacity (2-10 min)",
      body: "Write your requirements and capacity estimates before drawing anything. Use the back-of-envelope format from lecture.",
      steps: [
        "Functional requirements: what must the system do? List 3-5 user-facing behaviors.",
        "Non-functional requirements: scale, latency, durability, consistency. Name at least three with numbers where possible.",
        "Capacity estimate: QPS (reads and writes separately), storage per year, bandwidth. Show the arithmetic, not just the answer.",
        "Identify at least one requirement you are explicitly NOT supporting (scope boundary).",
      ],
    },
    {
      title: "API and data model (10-20 min)",
      body: "Sketch the public API and the primary data model before drawing infrastructure.",
      steps: [
        "API: write 2-3 endpoint signatures. Include method, path, key parameters, and response shape.",
        "Data model: draw the primary table or document. Name the primary key and at least two other fields. State whether you would use SQL or NoSQL and why, in one sentence.",
        "Sharding or replication decision: state your sharding key or replication strategy and the tradeoff it makes.",
      ],
    },
    {
      title: "High-level diagram (20-35 min)",
      body: "Draw the component diagram. Every box needs a label. Every arrow needs a direction.",
      steps: [
        "Required components to name: client, load balancer, application server(s), cache layer (name the technology), primary database, and any async queue if applicable.",
        "Label the data flow for the core read path and the core write path separately.",
        "Mark any component that is a single point of failure and note how you would address it.",
      ],
    },
    {
      title: "Deep dive (35-45 min)",
      body: "Pick one component or tradeoff and go one level deeper. This is where interviewers separate good from great.",
      steps: [
        "Choose one: the sharding strategy, the caching invalidation policy, the rate-limiting algorithm (token bucket vs. leaky bucket vs. sliding window log), or the redirect redirect lookup path for the URL shortener.",
        "Write 3-4 sentences explaining the chosen topic: what it does, what it costs, and what failure mode it introduces.",
        "State one thing you would change if the scale requirement was 10x larger.",
      ],
    },
    {
      title: "Peer critique (45-60 min)",
      body: "Swap designs with a peer. Read their sketch silently for 3 minutes, then give 7 minutes of structured feedback.",
      steps: [
        "Requirements: are functional and non-functional requirements written down? Is there a clear scope boundary?",
        "Capacity: is the estimate present? Does it use real numbers? Does it inform any design decision visibly?",
        "Components: is the diagram legible? Can you trace the read and write paths? Is there a named cache layer?",
        "Tradeoffs: does the design state at least one explicit tradeoff (SQL vs. NoSQL, sharding key, cache policy)? If not, name the tradeoff they left implicit.",
        "Highest-leverage gap: name the single change that would most improve the design. Be specific about what to add or change and why.",
      ],
    },
  ],
  deliverables: [
    "One completed sketch (on paper or a shared whiteboard) with requirements, capacity estimates, API signatures, data model, and component diagram",
    "Written notes from one peer critique received: at least the five rubric points and the &ldquo;highest-leverage gap&rdquo; note",
    "One documented revision: something you changed in your design based on peer feedback, and one sentence explaining why",
  ],
  rubric: [
    {
      dimension: "Requirements: functional and non-functional written with numbers",
      points: 20,
      notes:
        "Both functional and non-functional requirements present. Non-functional requirements include at least one scale number (QPS, DAU, or storage). Scope boundary stated.",
    },
    {
      dimension: "Capacity: back-of-envelope estimate present and used",
      points: 15,
      notes:
        "Read QPS and write QPS computed separately. Storage estimate present. Estimate visibly informs at least one design decision (cache size, shard count, etc.).",
    },
    {
      dimension: "API and data model: endpoint signatures and primary schema sketched",
      points: 20,
      notes:
        "At least two endpoint signatures with method, path, and response type. Data model names primary key. SQL vs. NoSQL choice stated with one-sentence rationale.",
    },
    {
      dimension: "Diagram: all required components labeled, paths traceable",
      points: 25,
      notes:
        "Load balancer, app server, cache layer, and database all named. Read path and write path both traceable. Single points of failure identified.",
    },
    {
      dimension: "Tradeoff: one sharding or caching tradeoff stated explicitly",
      points: 20,
      notes:
        "The tradeoff names what is gained and what is lost. A sharding key choice, cache invalidation policy, or consistency level all qualify. &ldquo;I chose Redis because it is fast&rdquo; does not qualify.",
    },
  ],
  hints: [
    "Start with requirements. Every minute you spend on requirements saves two minutes of backtracking after you draw the wrong box.",
    "The capacity estimate does not have to be exact. It has to be reasonable and it has to connect to your design. If you estimate 1 TB of storage per year, your diagram should show something that stores 1 TB.",
    "Name your cache technology. &ldquo;A cache&rdquo; is less credible than &ldquo;Redis&rdquo; or &ldquo;Memcached.&rdquo; The name signals that you have used these tools.",
    "For the URL shortener, the most common gap is the redirect lookup path. Trace it explicitly: client &rarr; DNS &rarr; load balancer &rarr; app server &rarr; cache hit/miss &rarr; database &rarr; 301 redirect.",
    "For the rate limiter, the most common gap is what happens when the app server is stateless but the rate limit is per-user across servers. That is the problem Redis solves here.",
    "During peer critique, the most useful feedback is specific and negative in the constructive sense: &ldquo;your capacity estimate does not connect to your cache size decision&rdquo; is useful. &ldquo;Looks good&rdquo; is not.",
  ],
  late: "Section work cannot be made up. Attendance and completion are required for full credit.",
};

export function Wk06Section() {
  return <ProjectPage spec={spec} />;
}

export const wk06SectionSearchBody =
  "system design lab URL shortener rate limiter requirements clarification capacity estimation API design data model SQL NoSQL sharding caching peer critique rubric HW4 order of operations components diagram tradeoffs token bucket leaky bucket sliding window Week 6 section landing the offer";
