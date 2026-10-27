"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bell, ChevronDown, Menu, Search, ShieldCheck, X } from "lucide-react";
import { adminNavItems } from "@/data/admin-navigation";

interface AdminNavbarProps {
  onOpenMenu: () => void;

}

export default function AdminNavbar({ onOpenMenu }: AdminNavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Controls the search text.
  const [query, setQuery] = useState("");

  // On mobile, search is hidden until requested.
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  // Identify the currently selected module.
  const currentPage = adminNavItems.find((item) => item.href === pathname);

  const normalizedQuery = query.trim().toLowerCase();

  // Only filter our local CMS navigation.
  // This is not a real global website search.
  const matches = normalizedQuery

    ? adminNavItems
        .filter((item) =>
          `${item.label} ${item.description}`
            .toLowerCase()
            .includes(normalizedQuery),
        )

        .slice(0, 7)

    : [];

  // Pressing Enter navigates to the first match.
  function navigateToFirstMatch() {
    if (!matches.length) return;

    router.push(matches[0].href);
    setQuery("");
    setMobileSearchOpen(false);
  }

  return (
    <header className="sticky top-0 z-30 border-b border-base-300 bg-base-100/95 shadow-sm backdrop-blur">
      
      <div className="flex min-h-20 flex-wrap items-center gap-3 px-4 py-3 md:px-6 lg:px-8">
        {/* Mobile sidebar opening button */}
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Open navigation menu"
          className="btn btn-ghost btn-square lg:hidden"
        >
          <Menu size={23} />
        </button>

        {/* Current page title */}
        <div className="mr-auto min-w-0">
          <p className="hidden text-xs text-base-content/55 sm:block">
            Admin / {currentPage?.label ?? "Workspace"}
          </p>

          <h1 className="truncate text-lg font-bold tracking-tight">
            {currentPage?.label ?? "HopeBridge CMS"}
          </h1>
        </div>

        {/* Mobile search toggle */}
        <button
          type="button"
          aria-label={mobileSearchOpen ? "Hide search" : "Show search"}
          onClick={() => setMobileSearchOpen((prev) => !prev)}
          className="btn btn-ghost btn-square md:hidden"
        >
          {mobileSearchOpen ? <X size={20} /> : <Search size={20} />}
        </button>

        {/* Local navigation search */}
        <div
          className={`
            relative order-last w-full
            md:order-none md:w-64 xl:w-80
            ${mobileSearchOpen ? "block" : "hidden md:block"}
          `}
        >
          <label className="input input-bordered flex w-full items-center gap-2 bg-base-200">
            <Search
              size={17}
              className="shrink-0 text-base-content/55"
              aria-hidden="true"
            />

            <input
              type="search"
              className="min-w-0 grow"
              placeholder="Find a CMS module..."
              aria-label="Find a CMS module"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  navigateToFirstMatch();
                }

                if (event.key === "Escape") {
                  setQuery("");
                }
              }}
            />
          </label>

          {/* Display matching navigation items */}
          {normalizedQuery && (
            <div className="absolute inset-x-0 top-full z-50 mt-2 rounded-xl border border-base-300 bg-base-100 p-2 shadow-xl">
              <p className="px-3 py-2 text-xs text-base-content/60">
                Navigation search · Sample UI
              </p>

              {matches.length ? (
                matches.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-base-200"
                      onClick={() => {
                        setQuery("");
                        setMobileSearchOpen(false);
                      }}
                    >
                      <Icon size={17} className="text-primary" />

                      <span>{item.label}</span>
                    </Link>
                  );
                })
              ) : (
                <p className="px-3 py-3 text-sm text-base-content/60">
                  No matching module found.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Notification dropdown with fictional alerts */}
        <details className="dropdown dropdown-end">
          <summary
            aria-label="View sample notifications"
            className="btn btn-ghost btn-square relative list-none"
          >
            <Bell size={20} />

            <span className="absolute right-2 top-2 size-2 rounded-full bg-warning" />
          </summary>

          <div className="dropdown-content z-50 mt-3 w-72 rounded-xl border border-base-300 bg-base-100 p-4 shadow-xl sm:w-80">
            <p className="font-semibold">Notifications</p>

            <p className="mb-3 text-xs text-base-content/55">
              Fictional demonstration alerts
            </p>

            <div className="space-y-3 text-sm">
              <p className="border-b border-base-200 pb-3">
                New volunteer application received.
              </p>

              <p className="border-b border-base-200 pb-3">
                A project update needs review.
              </p>

              <p>Monthly donation summary is ready to preview.</p>
            </div>
          </div>
        </details>

        {/* Admin demo profile dropdown */}
        <details className="dropdown dropdown-end">
          <summary className="btn btn-ghost gap-2 px-2 normal-case">
            <span className="grid size-9 place-items-center rounded-full bg-primary/10 font-bold text-primary">
              AD
            </span>

            <span className="hidden text-left sm:block">
              <span className="block text-sm font-semibold leading-tight">
                Demo Admin
              </span>

              <span className="block text-xs font-normal text-base-content/55">
                UI preview only
              </span>
            </span>

            <ChevronDown size={16} className="hidden sm:block" />
          </summary>

          <div className="dropdown-content z-50 mt-3 w-64 rounded-xl border border-base-300 bg-base-100 p-4 shadow-xl">
            <p className="flex items-center gap-2 font-semibold">
              <ShieldCheck size={18} className="text-primary" />
              Demonstration account
            </p>

            <p className="mt-1 text-xs text-base-content/60">
              No real login, session or permission check exists.
            </p>

            <div className="divider my-2" />

            <Link
              href="/dashboard"
              className="btn btn-ghost btn-sm w-full justify-start"
            >
              Go to Dashboard
            </Link>

            <button
              type="button"
              disabled
              className="btn btn-ghost btn-sm w-full justify-start"
            >
              Sign out (not available)
            </button>
          </div>
        </details>
      </div>
    </header>
  );
}
