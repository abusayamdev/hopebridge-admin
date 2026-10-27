import { FileText, FolderKanban, UsersRound, HandHeart } from "lucide-react";

import type { DashboardStat } from "@/data/dashboard";

// Map our data icon names to real Lucide icons.
const iconMap = {
  pages: FileText,
  projects: FolderKanban,
  volunteers: UsersRound,
  donations: HandHeart,
};

// Define the props this component receives.
interface StatCardProps {
  stat: DashboardStat;
}

// Reusable UI component for one dashboard statistic.
export default function StatCard({ stat }: StatCardProps) {
  // Select the correct icon based on mock data.
  const Icon = iconMap[stat.icon];

  return (
    <article className="card border border-base-300 bg-base-100 shadow-sm">
      <div className="card-body gap-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-base-content/65">
            {stat.title}
          </p>

          <div className="rounded-xl bg-primary/10 p-3 text-primary">
            <Icon size={22} aria-hidden="true" />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight">{stat.value}</h2>

          <p className="mt-2 text-sm text-base-content/60">
            {stat.description}
          </p>
        </div>
      </div>
    </article>
  );
}
