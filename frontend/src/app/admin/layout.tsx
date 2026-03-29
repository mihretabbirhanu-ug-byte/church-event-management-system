"use client";

import { getUser } from "@/lib/auth";
import { fetchJson } from "@/lib/api";
import { getToken, setUser as setStoredUser } from "@/lib/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  description: string;
  badge?: string;
};

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/admin/dashboard", description: "Overview and stats" },
  { label: "Create Event", href: "/admin/events", description: "Add a new church event" },
  { label: "Manage Users", href: "/admin/users", description: "Assign volunteer roles" },
  { label: "Assign Tasks", href: "/admin/assign-tasks", description: "Match volunteers to tasks" },
  { label: "Event Goals", href: "/admin/event-goals", description: "Define event objectives" },
  { label: "Event Notes", href: "/admin/event-notes", description: "Add internal event notes" },
  { label: "Invite Links", href: "/admin/event-invite-links", description: "Generate invite links" },
  { label: "Registrations", href: "/admin/registrations", description: "Track attendance status" },
];

function initialsFromName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).slice(0, 2);
  if (parts.length === 0) return "A";
  return parts.map((part) => part[0]?.toUpperCase() ?? "").join("");
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [user, setCurrentUser] = useState<ReturnType<typeof getUser> | null>(null);

  useEffect(() => {
    const localUser = getUser();
    const token = getToken();
    setCurrentUser(localUser);

    if (!localUser || !token) {
      return;
    }

    fetchJson<NonNullable<ReturnType<typeof getUser>>>(`/users/${localUser.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((freshUser) => {
        setCurrentUser(freshUser);
        setStoredUser(freshUser);
      })
      .catch(() => {
        // Keep local cached user if refresh fails.
      });
  }, []);

  useEffect(() => {
    const syncUser = () => {
      setCurrentUser(getUser());
    };

    window.addEventListener("storage", syncUser);
    window.addEventListener("profile-user-updated", syncUser as EventListener);
    return () => {
      window.removeEventListener("storage", syncUser);
      window.removeEventListener("profile-user-updated", syncUser as EventListener);
    };
  }, []);

  const displayName = user?.fullName || "Ava Sinclair";
  const roleName =
    user?.role === "ADMIN"
      ? "Admin"
      : user?.role === "VOLUNTEER"
      ? "Volunteer"
      : user?.role === "MEMBER"
      ? "Member"
      : "Member";
  const initials = useMemo(() => initialsFromName(displayName), [displayName]);

  return (
    <div className="min-h-screen bg-zinc-100 lg:grid lg:grid-cols-[320px_1fr]">
      <aside className="border-r border-zinc-200 bg-zinc-50 p-5 lg:h-screen lg:overflow-y-auto">
        <div className="rounded-2xl bg-linear-to-br from-indigo-900 via-blue-700 to-cyan-500 p-4 shadow-sm ring-1 ring-indigo-200/60">
          <p className="bg-linear-to-r from-yellow-200 via-orange-100 to-white bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
            Your Events
          </p>
          <p className="text-sm font-medium text-white/90">Admin Panel</p>
        </div>

        <Link
          href="/admin/profile"
          className="mt-6 block rounded-xl border border-zinc-200 bg-white p-3 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
        >
            <div className="flex items-center gap-3">
            {user?.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt={`${displayName} profile`}
                className="h-11 w-11 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-orange-200 via-rose-300 to-fuchsia-400 text-sm font-bold text-white">
                {initials}
              </div>
            )}
            <div>
              <p className="text-xl font-semibold leading-tight text-indigo-950">{displayName}</p>
              <p className="text-sm text-zinc-500">{roleName}</p>
            </div>
          </div>
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Main Menu
        </p>

        <nav className="mt-3 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                }`}
              >
                <div>
                  <p className="text-base font-semibold">{item.label}</p>
                  <p className="text-xs opacity-80">{item.description}</p>
                </div>
                {item.badge ? (
                  <span className="rounded-full bg-orange-500 px-2 py-0.5 text-xs font-semibold text-white">
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main>{children}</main>
    </div>
  );
}
