import { Activity, CheckCircle2, LayoutDashboard } from "lucide-react";


import { dashboardStats, recentActivities } from "@/data/dashboard";
import StatCard from "@/components/stat-card";

// This remains a Server Component.
// Shared navigation is provided by AdminLayout.
export default function DashboardPage() {
  return (
    <div className="space-y-7">
      {/* Dashboard heading */}
      <section>
        <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          <LayoutDashboard size={18} />
          Dashboard Overview
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Welcome to HopeBridge
            </h2>

            <p className="mt-2 text-sm text-base-content/60">
              Your NGO workspace at a glance. All data shown is fictional.
            </p>
          </div>

          <span className="badge badge-warning badge-outline">Demo Mode</span>
        </div>
      </section>

      {/* Reusable statistic cards from Module 01 */}
      <section
        aria-label="Dashboard statistics"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {dashboardStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </section>

      {/* Main dashboard information area */}
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        {/* Activity list */}
        <article className="card border border-base-300 bg-base-100 shadow-sm xl:col-span-2">
          <div className="card-body">
            <h3 className="card-title">
              <Activity className="text-primary" size={21} />
              Recent Activity
            </h3>

            <div className="divide-y divide-base-300">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex flex-wrap items-start gap-3 py-4 sm:flex-nowrap"
                >
                  <span className="rounded-full bg-success/10 p-2 text-success">
                    <CheckCircle2 size={18} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{activity.title}</p>

                    <p className="text-sm text-base-content/60">
                      {activity.description}
                    </p>
                  </div>

                  <time className="text-xs text-base-content/50">
                    {activity.time}
                  </time>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Project development status */}
        <aside className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h3 className="card-title">Project Progress</h3>

            <p className="text-sm text-base-content/60">
              Frontend implementation milestones
            </p>

            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-success" size={18} />
                Project foundation
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-success" size={18} />
                Reusable statistic cards
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-success" size={18} />
                Responsive navigation shell
              </li>
            </ul>

            <p className="alert mt-5 text-sm">
              Other sidebar destinations are upcoming UI screens.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
