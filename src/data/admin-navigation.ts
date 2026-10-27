import type { LucideIcon } from "lucide-react";

import {
  LayoutDashboard,
  FileStack,
  ListTree,
  GalleryVerticalEnd,
  Images,
  Sprout,
  FolderKanban,
  Newspaper,
  CalendarDays,
  BookOpen,
  ClipboardList,
  UsersRound,
  Handshake,
  ChartNoAxesCombined,
  CircleHelp,
  HandHeart,
  Target,
  UserRoundCheck,
  IdCard,
  BriefcaseBusiness,
  Mail,
  Send,
  ShieldAlert,
  Languages,
  SearchCheck,
  ArrowLeftRight,
  UserCog,
  History,
  DatabaseBackup,
  Settings,
} from "lucide-react";

// Define the structure of a sidebar link.
export interface AdminNavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  description: string;
  restricted?: boolean;
}

// Group related sidebar links together.
export interface AdminNavGroup {
  title: string;
  items: AdminNavItem[];
}

// Central navigation configuration.
// Pages not yet built will show a demo placeholder.
export const adminNavGroups: AdminNavGroup[] = [
  {
    title: "Workspace",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
        description: "Overview and activity",
      },
    ],
  },
  {
    title: "Content Management",
    items: [
      {
        label: "Pages",
        href: "/dashboard/pages",
        icon: FileStack,
        description: "Website pages and page builder",
      },
      {
        label: "Menus",
        href: "/dashboard/menus",
        icon: ListTree,
        description: "Navigation and menu links",
      },
      {
        label: "Banners",
        href: "/dashboard/banners",
        icon: GalleryVerticalEnd,
        description: "Homepage and campaign banners",
      },
      {
        label: "Media Library",
        href: "/dashboard/media",
        icon: Images,
        description: "Images, files and alt text",
      },
    ],
  },
  {
    title: "Programs & Publishing",
    items: [
      {
        label: "Programs",
        href: "/dashboard/programs",
        icon: Sprout,
        description: "Thematic programs and activities",
      },
      {
        label: "Projects",
        href: "/dashboard/projects",
        icon: FolderKanban,
        description: "Projects, updates and results",
      },
      {
        label: "News & Articles",
        href: "/dashboard/news",
        icon: Newspaper,
        description: "News and article publishing",
      },
      {
        label: "Events",
        href: "/dashboard/events",
        icon: CalendarDays,
        description: "Events and registrations",
      },
      {
        label: "Gallery",
        href: "/dashboard/gallery",
        icon: Images,
        description: "Photo and video albums",
      },
      {
        label: "Publications",
        href: "/dashboard/publications",
        icon: BookOpen,
        description: "Reports and downloadable documents",
      },
      {
        label: "Notices",
        href: "/dashboard/notices",
        icon: ClipboardList,
        description: "Notices and circulars",
      },
      {
        label: "Team & Board",
        href: "/dashboard/team",
        icon: UsersRound,
        description: "Team and governance content",
      },
      {
        label: "Partners",
        href: "/dashboard/partners",
        icon: Handshake,
        description: "Partners and testimonials",
      },
      {
        label: "Impact Metrics",
        href: "/dashboard/impact",
        icon: ChartNoAxesCombined,
        description: "Impact numbers and results",
      },
      {
        label: "FAQs",
        href: "/dashboard/faqs",
        icon: CircleHelp,
        description: "Frequently asked questions",
      },
    ],
  },
  {
    title: "People & Finance",
    items: [
      {
        label: "Donations",
        href: "/dashboard/donations",
        icon: HandHeart,
        description: "Donation records and receipts",
      },
      {
        label: "Campaigns",
        href: "/dashboard/campaigns",
        icon: Target,
        description: "Fundraising campaign management",
      },
      {
        label: "Volunteers",
        href: "/dashboard/volunteers",
        icon: UserRoundCheck,
        description: "Volunteer applications",
      },
      {
        label: "Membership",
        href: "/dashboard/membership",
        icon: IdCard,
        description: "Membership applications",
      },
      {
        label: "Careers",
        href: "/dashboard/careers",
        icon: BriefcaseBusiness,
        description: "Jobs and applications",
      },
      {
        label: "Contact Inbox",
        href: "/dashboard/messages",
        icon: Mail,
        description: "Public contact messages",
      },
      {
        label: "Newsletter",
        href: "/dashboard/newsletter",
        icon: Send,
        description: "Subscriber list",
      },
    ],
  },
  {
    title: "Safeguarding",
    items: [
      {
        label: "Confidential Cases",
        href: "/dashboard/cases",
        icon: ShieldAlert,
        description: "Restricted case-management interface",
        restricted: true,
      },
    ],
  },
  {
    title: "Administration",
    items: [
      {
        label: "Translations",
        href: "/dashboard/translations",
        icon: Languages,
        description: "Bangla and English content",
      },
      {
        label: "SEO",
        href: "/dashboard/seo",
        icon: SearchCheck,
        description: "Metadata and search appearance",
      },
      {
        label: "Redirects",
        href: "/dashboard/redirects",
        icon: ArrowLeftRight,
        description: "Permanent URL redirects",
      },
      {
        label: "Users & Roles",
        href: "/dashboard/users",
        icon: UserCog,
        description: "Staff roles and permissions",
      },
      {
        label: "Audit Logs",
        href: "/dashboard/audit",
        icon: History,
        description: "Administrative change records",
      },
      {
        label: "Backups",
        href: "/dashboard/backups",
        icon: DatabaseBackup,
        description: "Database and media backup planning",
      },
      {
        label: "Site Settings",
        href: "/dashboard/settings",
        icon: Settings,
        description: "Organization and site configuration",
      },
    ],
  },
];

// Flat list for finding modules and searching navigation.
export const adminNavItems = adminNavGroups.flatMap((group) => group.items);
