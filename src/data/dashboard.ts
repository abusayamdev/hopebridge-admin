// Allowed icon names for dashboard statistic cards.
export type StatIcon = "pages" | "projects" | "volunteers" | "donations";

// TypeScript interface for one statistic card.
export interface DashboardStat {
  id: number;
  title: string;
  value: string;
  description: string;
  icon: StatIcon;
}

// TypeScript interface for the activity list.
export interface RecentActivity {
  id: number;
  title: string;
  description: string;
  time: string;
}

// All figures below are fictional demo data.
// Later, these can be replaced with backend API results.
export const dashboardStats: DashboardStat[] = [
  {
    id: 1,
    title: "Published Pages",
    value: "24",
    description: "3 new this month",
    icon: "pages",
  },
  {
    id: 2,
    title: "Active Projects",
    value: "18",
    description: "Across 8 districts",
    icon: "projects",
  },
  {
    id: 3,
    title: "Volunteer Applications",
    value: "128",
    description: "12 awaiting review",
    icon: "volunteers",
  },
  {
    id: 4,
    title: "Recorded Donations",
    value: "৳ 1,24,500",
    description: "Sample finance data",
    icon: "donations",
  },
];

// Example CMS activities for our dashboard.
export const recentActivities: RecentActivity[] = [
  {
    id: 1,
    title: "New project draft created",
    description: "Youth Skills Development",
    time: "10 minutes ago",
  },
  {
    id: 2,
    title: "Volunteer application received",
    description: "Community Outreach Program",
    time: "45 minutes ago",
  },
  {
    id: 3,
    title: "News article updated",
    description: "Community Health Initiative",
    time: "2 hours ago",
  },
];
