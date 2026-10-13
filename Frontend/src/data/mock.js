export const user = {
  name: "Jordan Lee", handle: "@jordan", email: "jordan.lee@nexus.dev",
  initials: "JL", role: "Developer", batch: "Full Stack Foundations A",
  streak: 12, progress: 74, milestones: 10
};
export const dashboardCards = [
  { label: "Learning progress", value: "74%",  meta: "Across 6 sample skills", tone: "accent" },
  { label: "Strongest skill",   value: "React", meta: "Consistent component patterns", tone: "success" },
  { label: "Focus skill",       value: "Testing", meta: "Integration confidence needs practice", tone: "warn" },
  { label: "Milestones",        value: "10",   meta: "Illustrative completed milestones", tone: "muted" }
];
export const stack = ["React", "TypeScript", "Node.js", "Testing", "Accessibility", "Git"];
export const skillRows = [
  { name: "React",      status: "Improving", value: 82, tone: "improving" },
  { name: "TypeScript", status: "Focus",     value: 64, tone: "focus" },
  { name: "Testing",    status: "Focus",     value: 58, tone: "focus" }
];
export const strengthsFocus = [
  { kind: "strength", title: "Strength: React component composition",
    body: "Reusable state patterns appear consistently in recent sample projects." },
  { kind: "focus", title: "Focus: test intent and integration setup",
    body: "One mistake is not treated as proof of low proficiency; patterns guide the recommendation." }
];
export const difficultyCategories = ["Async state", "Fixture design", "Generic constraints"];
export const leaderboard = [
  { rank: 1, name: "Ava Chen",    meta: "Accessibility · 14 milestones", initials: "AC", tone: "gold" },
  { rank: 2, name: "Maya Singh",  meta: "Backend APIs · 12 milestones",  initials: "MS", tone: "silver" },
  { rank: 3, name: "Owen Wright", meta: "Testing · 11 milestones",       initials: "OW", tone: "bronze" },
  { rank: 4, name: "You",         meta: "React · 10 milestones",         initials: "JL", tone: "self" }
];
export const courses = [
  { id: 1, title: "Advanced React Patterns",    level: "Intermediate", progress: 72, lessons: 24, duration: "6h 20m", tag: "React" },
  { id: 2, title: "Testing React Applications", level: "Intermediate", progress: 38, lessons: 18, duration: "4h 45m", tag: "Testing" },
  { id: 3, title: "TypeScript for React Devs",  level: "Advanced",     progress: 55, lessons: 22, duration: "5h 10m", tag: "TypeScript" },
  { id: 4, title: "Accessibility Foundations",  level: "Beginner",     progress: 20, lessons: 12, duration: "2h 30m", tag: "A11y" },
  { id: 5, title: "State Management Deep Dive", level: "Advanced",     progress: 0,  lessons: 16, duration: "4h 00m", tag: "React" },
  { id: 6, title: "Node.js API Design",         level: "Intermediate", progress: 90, lessons: 20, duration: "5h 30m", tag: "Node" }
];
export const experts = [
  { id: 1, name: "Amara Osei",    initials: "AO", role: "Senior Frontend Engineer", domain: "React · State management", proficiency: 96, status: "active",  reason: "Highest match because the problem involves React state ownership, reducer updates, and modal lifecycle." },
  { id: 2, name: "Noah Kim",      initials: "NK", role: "Backend Engineer",        domain: "Node.js · APIs",           proficiency: 91, status: "busy",    reason: "Deep API design experience and strong track record on auth and rate-limiting problems." },
  { id: 3, name: "Priya Raman",   initials: "PR", role: "Testing Specialist",      domain: "Testing · Vitest",         proficiency: 88, status: "active",  reason: "Extensive fixture and integration test experience across web apps." },
  { id: 4, name: "Diego Alvarez", initials: "DA", role: "TypeScript Architect",    domain: "TypeScript · Generics",    proficiency: 94, status: "offline", reason: "Matched on advanced generic constraint patterns and type-level inference." },
  { id: 5, name: "Lena Fischer",  initials: "LF", role: "Accessibility Lead",      domain: "A11y · WCAG",              proficiency: 89, status: "active",  reason: "Relevant on keyboard focus, ARIA roles, and screen-reader behavior." },
  { id: 6, name: "Kai Tanaka",    initials: "KT", role: "Frontend Engineer",       domain: "React · Performance",      proficiency: 85, status: "offline", reason: "Matched on memoization, render profiling, and suspense-boundary tuning." }
];
export const notifications = [
  { id: 1, title: "New course assigned", body: "Testing React Applications was assigned to you.", time: "2h ago", unread: true },
  { id: 2, title: "Expert replied",      body: "Amara Osei responded in your Human API thread.",   time: "5h ago", unread: true },
  { id: 3, title: "Milestone reached",   body: "You completed 10 milestones this batch.",          time: "1d ago", unread: false }
];
export const adminUsers = [
  { id: 1, name: "Jordan Lee",    handle: "@jordan", email: "jordan.lee@nexus.dev", role: "Trainee", joined: "2026-01-12", progress: 74, status: "active" },
  { id: 2, name: "Amara Osei",    handle: "@amara",  email: "amara.osei@nexus.dev", role: "Expert",  joined: "2025-11-04", progress: 96, status: "active" },
  { id: 3, name: "Noah Kim",      handle: "@noah",   email: "noah.kim@nexus.dev",   role: "Expert",  joined: "2025-10-22", progress: 91, status: "active" },
  { id: 4, name: "Priya Raman",   handle: "@priya",  email: "priya.r@nexus.dev",    role: "Trainee", joined: "2026-02-01", progress: 62, status: "active" },
  { id: 5, name: "Diego Alvarez", handle: "@diego",  email: "diego.a@nexus.dev",    role: "Expert",  joined: "2025-09-15", progress: 94, status: "inactive" }
];
