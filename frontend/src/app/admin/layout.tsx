"use client";

import { fetchJson } from "@/lib/api";
import { getToken } from "@/lib/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type EventItem = {
  startDate: string;
};

const navItems: NavItem[] = [
  {
    label: "Overview",
    href: "/admin/overview",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12l9-9 9 9" />
        <path d="M5 10v10h14V10" />
      </svg>
    ),
  },
  {
    label: "Browse Events",
    href: "/admin/browse-events",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    label: "Manage Users",
    href: "/admin/users",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Tasks",
    href: "/admin/tasks",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    label: "Invite Links",
    href: "/admin/event-invite-links",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11 4" />
        <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 1 0 7.07 7.07L13 19" />
      </svg>
    ),
  },
  {
    label: "Registrations",
    href: "/admin/registrations",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 2h12v20l-6-3-6 3V2z" />
      </svg>
    ),
  },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [activeEvents, setActiveEvents] = useState(0);
  const [totalRegistrations, setTotalRegistrations] = useState(0);
  const [statsLoading, setStatsLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setStatsLoading(false);
      return;
    }

    const loadSidebarStats = async () => {
      try {
        const [eventsData, registrationsData] = await Promise.all([
          fetchJson<EventItem[]>("/events", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetchJson<unknown[]>("/registrations", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        const now = Date.now();
        setActiveEvents(eventsData.filter((event) => new Date(event.startDate).getTime() >= now).length);
        setTotalRegistrations(registrationsData.length);
      } catch {
        setActiveEvents(0);
        setTotalRegistrations(0);
      } finally {
        setStatsLoading(false);
      }
    };

    loadSidebarStats();
  }, []);

  return (
    <div className="min-h-screen bg-white lg:grid lg:grid-cols-[220px_1fr]">
      <aside className="border-r border-zinc-200 bg-white p-3 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
        <div className="px-2 py-2">
          <h1 className="text-xl font-normal tracking-tight text-zinc-950">EventDash</h1>
          <p className="text-xs text-zinc-500">Event Management Dashboard</p>
        </div>

        <nav className="mt-5 space-y-1">
          {navItems.map((item) => {
            const isTasksItem = item.href === "/admin/tasks";
            const isActive = isTasksItem
              ? pathname === "/admin/tasks" ||
                pathname.startsWith("/admin/tasks/") ||
                pathname === "/admin/assign-tasks" ||
                pathname.startsWith("/admin/assign-tasks/")
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-950 text-white"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <section className="mt-6 rounded-xl border border-zinc-200 bg-zinc-100 px-3 py-3">
          <h2 className="text-xs font-semibold text-zinc-900">Quick Stats</h2>
          <div className="mt-2 space-y-1.5 text-xs">
            <div className="flex items-center justify-between text-zinc-600">
              <span>Active Events</span>
              <span className="font-semibold text-zinc-900">{statsLoading ? "-" : activeEvents}</span>
            </div>
            <div className="flex items-center justify-between text-zinc-600">
              <span>Total Registrations</span>
              <span className="font-semibold text-zinc-900">{statsLoading ? "-" : totalRegistrations}</span>
            </div>
          </div>
        </section>
      </aside>

      <main className="min-h-screen">{children}</main>
    </div>
  );
}

