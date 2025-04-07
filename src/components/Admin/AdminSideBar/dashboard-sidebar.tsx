import type React from "react";

import {
  BarChart3,
  Calendar,
  FolderOpen,
  History,
  Home,
  LogOut,
  Package,
  Settings,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  {
    title: "Admin Dashboard",
    href: "/",
    icon: Home,
  },
  {
    title: "Appointment Request",
    href: "/appointments",
    icon: Calendar,
  },
  {
    title: "My Courses/LMS",
    href: "/courses",
    icon: FolderOpen,
  },
  {
    title: "All Courses",
    href: "/all-courses",
    icon: BarChart3,
  },
  {
    title: "History",
    href: "/history",
    icon: History,
  },
  {
    title: "Subscription Packages",
    href: "/packages",
    icon: Package,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function DashboardSidebar() {
  return (
    <aside className="flex w-96 flex-col border-r bg-white px-12">
      {/* <div className="flex flex-col items-center border-y py-6">
        <div className="relative h-20 w-20 overflow-hidden rounded-full">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocJYO2z0aV3cT15IeV9_txuD04rcmJOVffuQD2WhH9OHs75WOyk=s288-c-no"
            alt="Profile picture"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
        <h2 className="mt-4 font-semibold">EMMANUEL NONYE</h2>
        <p className="text-sm text-[#1B8D1B]">Developer (Certified)</p>
      </div> */}

      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              "hover:bg-[#1B8D1B]/10 hover:text-[#1B8D1B]",
              item.title === "Dashboard" &&
                "bg-[#1B8D1B] text-white hover:bg-[#1B8D1B] hover:text-white"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="p-4">
        <Button variant="ghost" className="w-full justify-start gap-3" asChild>
          <Link to="/logout">
            <LogOut className="h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </aside>
  );
}
