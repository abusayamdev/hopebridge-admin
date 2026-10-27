import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

// SEO metadata for our frontend application.
export const metadata: Metadata = {
  title: "HopeBridge | Admin CMS",
  description: "NGO Content Management Dashboard",
};

// Props accepted by the root layout.
type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen bg-base-200 text-base-content antialiased">
        {children}
      </body>
    </html>
  );
}
