"use client";

import { useState, type ReactNode } from "react";

import AdminNavbar from "@/components/layout/admin-navbar";
import Sidebar from "@/components/layout/sidebar";

// Types of properties received by AdminShell.
interface AdminShellProps {
  children: ReactNode;
}

export default function AdminShell({ children }: AdminShellProps) {
  // Controls whether the sidebar opens on mobile.
  const [mobileOpen, setMobileOpen] = useState(false);

  // Controls the icon-only sidebar on desktop.
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="drawer min-h-screen lg:drawer-open">
      {/* Keyboard accessibility: skip navigation links */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:p-3 focus:text-black"
      >
        Skip to main content
      </a>

      {/* DaisyUI drawer controller */}
      <input
        id="ngo-admin-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={mobileOpen}
        onChange={(event) => setMobileOpen(event.target.checked)}
        aria-label="Mobile navigation state"
      />

      {/* Main application content area */}
      <div className="drawer-content flex min-h-screen min-w-0 flex-col bg-base-200">
        {/* Shared top navigation */}
        <AdminNavbar onOpenMenu={() => setMobileOpen(true)} />

        {/* Server-rendered page content appears here */}
        <main
          id="main-content"
          className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8"
        >
          <div className="mx-auto max-w-screen-2xl">{children}</div>
        </main>

        {/* Shared admin footer */}
        <footer className="border-t border-base-300 bg-base-100 px-5 py-4 text-center text-xs text-base-content/55">
          HopeBridge Admin CMS · Frontend demonstration only · No live
          authentication or database
        </footer>
      </div>

      {/* Sidebar navigation */}
      <div className="drawer-side z-40">
        {/* Clicking the overlay closes mobile navigation */}
        <label
          htmlFor="ngo-admin-drawer"
          aria-label="Close navigation"
          className="drawer-overlay"
        />

        <Sidebar
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
          onNavigate={() => setMobileOpen(false)}
        />
      </div>
    </div>
  );
}
