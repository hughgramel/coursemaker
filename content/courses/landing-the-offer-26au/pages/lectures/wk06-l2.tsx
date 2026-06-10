import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Storage, caching, and scale",
  date: "Week 6, Lecture 2",
  week: 6,
  topics: [
    "SQL vs. NoSQL: what the access pattern tells you about which to choose, and how to justify the choice to an interviewer",
    "Three caching layers: client cache, CDN, application cache (Redis/Memcached) and when each is the right tool",
    "Sharding patterns: horizontal vs. vertical, range-based vs. hash-based, and the hotspot tradeoff",
    "Queues and async work: when to reach for a message queue (Kafka, SQS) and how it decouples producers from consumers",
    "CAP theorem in practice: how to state consistency vs. availability tradeoffs without getting philosophical",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk06-l2.pdf",
  readings: [
    {
      title: "Week 6 reading: designing a URL shortener end to end",
      href: "/c/landing-the-offer-26au/readings/wk06",
    },
    {
      title: "System Design 101 (ByteByteGoHq, GitHub)",
      href: "https://github.com/ByteByteGoHq/system-design-101",
    },
    {
      title: "Hussein Nasser: System designs playlist (YouTube)",
      href: "https://www.youtube.com/playlist?list=PLQnljOFTspQXSevtRqvMNycWfHM7cXc3d",
    },
  ],
  followups: [
    "The System Design Primer (Martin, 2017) says NoSQL may outperform SQL for specific access patterns. Name one access pattern where a key-value store beats a relational database, and one where a relational database beats a key-value store. For each, name a concrete product and explain why that access pattern dominates its workload.",
    "ByteByteGo System Design 101 (2023) diagrams the difference between a CDN, a load balancer, and a reverse proxy. Draw a request path for a static image in a social media feed that passes through all three. Label what each component does at each hop.",
    "Hussein Nasser (2021) argues that understanding how a database stores data on disk changes every decision you make about caching and sharding. Pick hash-based sharding and explain why the sharding key choice matters for write throughput. What happens when the key has low cardinality?",
    "You are designing a notification system that sends 10 million push notifications per day at unpredictable burst times. Why is a synchronous API call from the application server to the push provider a bad design? What does a message queue solve here, and what does it cost?",
    "A candidate says “I would use Redis for caching.” An interviewer asks why not Memcached. The candidate has no answer. Using the System Design Primer and ByteByteGo 101 as sources, write a two-sentence answer that names at least one concrete reason to choose Redis and one scenario where Memcached is the simpler choice.",
  ],
};

export function Wk06L2() {
  return <LecturePage spec={spec} />;
}

export const wk06L2SearchBody =
  "SQL NoSQL access pattern caching layers CDN Redis Memcached client cache application cache sharding horizontal vertical range hash hotspot queues async Kafka SQS CAP theorem consistency availability partition tolerance storage scale system design Week 6 Lecture 2 landing the offer";
