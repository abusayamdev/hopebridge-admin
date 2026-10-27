import type { ReactNode } from "react";

import AdminShell from "@/components/layout/admin-shell";

// This layout is shared by every page
// inside the (admin) route group.
export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
