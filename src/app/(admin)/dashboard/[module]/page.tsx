import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft, Construction, LockKeyhole } from "lucide-react";

import { adminNavItems } from "@/data/admin-navigation";

// Next.js dynamic route params.
interface PlaceholderPageProps {
  params: Promise<{
    module: string;
  }>;
}

// Reusable page for upcoming CMS modules.
export default async function ModulePlaceholderPage({
  params,
}: PlaceholderPageProps) {
  // Read the dynamic URL segment.
  const { module } = await params;

  // Find the matching module configuration.
  const item = adminNavItems.find(
    (entry) => entry.href === `/dashboard/${module}`,
  );

  // Unknown modules should return a real 404.
  if (!item) {
    notFound();
  }

  const Icon = item.icon;

  return (
    <section className="mx-auto max-w-3xl space-y-6">
      {/* Return to main dashboard */}
      <Link href="/dashboard" className="btn btn-ghost btn-sm gap-2">
        <ArrowLeft size={16} />
        Back to Dashboard
      </Link>

      <div className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body items-start gap-5 p-6 sm:p-10">
          {/* Module icon */}
          <span className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
            <Icon size={28} />
          </span>

          {/* Module description */}
          <div>
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-primary">
              <Construction size={17} />
              Upcoming CMS Module
            </p>

            <h2 className="text-2xl font-bold sm:text-3xl">{item.label}</h2>

            <p className="mt-3 text-base-content/65">{item.description}</p>
          </div>

          {/* Confidential module warning */}
          {item.restricted && (
            <div className="alert border border-warning/30 bg-warning/10 text-sm">
              <LockKeyhole size={19} />
              This module requires real server-enforced authorization before
              production. No case records are stored or displayed here.
            </div>
          )}

          {/* Explain that this is an upcoming screen */}
          <p className="rounded-xl bg-base-200 p-4 text-sm text-base-content/70">
            This destination demonstrates navigation only. Tables, forms,
            approvals and other workflows will be developed in later frontend
            lessons using fictional data.
          </p>
        </div>
      </div>
    </section>
  );
}
