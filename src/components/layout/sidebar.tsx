"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ChevronsLeft,
  ChevronsRight,
  HeartHandshake,
  LockKeyhole,
} from "lucide-react";

import { adminNavGroups } from "@/data/admin-navigation";

// Define which properties the parent can provide.
interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  onNavigate: () => void;
}

export default function Sidebar({
  collapsed,
  onToggleCollapse,
  onNavigate,
}: SidebarProps) {
  // Read the current URL to highlight the active link.
  const pathname = usePathname();

  return (
    <aside
      className={`
        flex h-full min-h-screen w-72 flex-col
        bg-[#073b30] text-white
        transition-[width] duration-200
        ${collapsed ? "lg:w-20" : "lg:w-72"}
      `}
    >
      {/* Organization branding */}
      <Link
        href="/dashboard"
        onClick={onNavigate}
        className="flex min-h-20 items-center gap-3 border-b border-white/15 px-4 focus-visible:outline-2 focus-visible:outline-white"
      >
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/15 text-emerald-100">
          <HeartHandshake size={25} aria-hidden="true" />
        </span>

        <span className={collapsed ? "lg:sr-only" : ""}>
          <strong className="block text-base tracking-wide">HopeBridge</strong>

          <span className="block text-xs text-emerald-100/75">
            NGO Administration
          </span>
        </span>
      </Link>

      {/* Scrollable navigation area */}
      <nav
        aria-label="Admin navigation"
        className="min-h-0 flex-1 space-y-5 overflow-y-auto px-3 py-5 [scrollbar-width:thin]"
      >
        {adminNavGroups.map((group) => (
          <div key={group.title}>
            {/* Group title */}
            <p
              className={`
                mb-2 px-3 text-[11px] font-bold
                uppercase tracking-widest text-emerald-100/50
                ${collapsed ? "lg:sr-only" : ""}
              `}
            >
              {group.title}
            </p>

            <ul className="space-y-1">
              {group.items.map((item) => {
                // Extract the icon component from configuration.
                const Icon = item.icon;

                // Match the current route with this menu link.
                const active =
                  pathname === item.href ||
                  (item.href !== "/dashboard" &&
                    pathname.startsWith(`${item.href}/`));

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      title={collapsed ? item.label : undefined}
                      aria-current={active ? "page" : undefined}
                      className={`
                        flex min-h-10 items-center gap-3
                        rounded-lg px-3 py-2 text-sm
                        transition-colors
                        focus-visible:outline-2
                        focus-visible:outline-white

                        ${collapsed ? "lg:justify-center lg:px-2" : ""}

                        ${
                          active
                            ? "bg-emerald-400/20 font-semibold text-white ring-1 ring-emerald-200/25"
                            : "text-emerald-50/75 hover:bg-white/10 hover:text-white"
                        }
                      `}
                    >
                      <Icon size={19} className="shrink-0" aria-hidden="true" />

                      <span
                        className={`
                          min-w-0 flex-1 truncate
                          ${collapsed ? "lg:sr-only" : ""}
                        `}
                      >
                        {item.label}
                      </span>

                      {/* Visual marker only; not real authorization. */}
                      {item.restricted && (
                        <LockKeyhole
                          size={14}
                          aria-label="Restricted module"
                          className={collapsed ? "lg:hidden" : ""}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Desktop collapse / expand button */}
      <div className="hidden border-t border-white/15 p-3 lg:block">
        <button
          type="button"
          onClick={onToggleCollapse}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!collapsed}
          className={`
            btn btn-ghost w-full justify-start
            border-none text-emerald-50
            hover:bg-white/10
            ${collapsed ? "justify-center px-0" : ""}
          `}
        >
          {collapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}

          {!collapsed && <span>Collapse menu</span>}
        </button>

        {!collapsed && (
          <p className="px-3 pt-2 text-xs text-emerald-100/55">
            Frontend demo · No real permissions
          </p>
        )}
      </div>
    </aside>
  );
}
