import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Recruiters, applications, take-homes, on-sites",
  date: "Week 9, Lecture 1",
  week: 9,
  topics: [
    "Cold messages that get replies: the two-sentence InMail that gives a recruiter something to act on",
    "The referral path: how to ask a contact to route you, not just refer you in name",
    "Application cadence: how many applications per week, when to start, and how to avoid the October cliff",
    "Take-homes worth doing: deciding when the upside justifies the time cost",
    "On-site logistics: travel, scheduling windows, and the pre-loop brief",
    "The follow-up that strengthens the close: timing, specificity, and what not to say",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk09-l1.pdf",
  readings: [
    {
      title: "Week 9 reading: total compensation, leveling, and negotiation",
      href: "/c/landing-the-offer-26au/readings/wk09",
    },
    {
      title: "Gergely Orosz and Blake Stockman: Confessions of a big tech recruiter",
      href: "https://newsletter.pragmaticengineer.com/p/confessions-of-a-big-tech-recruiter",
    },
    {
      title: "Tech Interview Handbook: negotiation rules (Yangshun Tay)",
      href: "https://www.techinterviewhandbook.org/negotiation-rules/",
    },
  ],
  followups: [
    "Orosz and Stockman (2025) report that recruiters respond to InMails that are specific about the role and give the recruiter something to act on in the first two sentences. Write a two-sentence cold message to a recruiter at a company on your target list. What specific role are you naming, and what is the one thing you are asking them to do?",
    "A referral from a friend who says &ldquo;you should apply&rdquo; is weaker than one where the friend submits your resume through the internal portal with a written endorsement. What is the difference from the hiring team&rsquo;s perspective, and how do you ask for the stronger version without putting your friend in an uncomfortable position?",
    "Most new-grad application windows open in August and September for the following summer. If you are graduating in June and want to start work that same month, sketch the application calendar backwards: when do offers typically expire, when do on-sites happen, and when do you need to have submitted applications?",
    "A take-home assignment is estimated at 8-10 hours and will be evaluated by a team of three engineers. You have three competing applications at earlier stages that also need your attention this week. How do you decide whether to do the take-home or decline it?",
    "You finish a five-round on-site on a Friday. Write a follow-up email that is specific, short, and adds something to your candidacy rather than just restating your enthusiasm. What should it contain and what should it avoid?",
    "HW 5 (STAR story bank) is due this week. Make sure your twelve stories cover the leadership principles you mapped in Week 7.",
  ],
};

export function Wk09L1() {
  return <LecturePage spec={spec} />;
}

export const wk09L1SearchBody =
  "cold message InMail recruiter reply referral path application cadence take-home on-site logistics follow-up close pipeline management application channels recruiting calendar Week 9 Lecture 1 landing the offer";
