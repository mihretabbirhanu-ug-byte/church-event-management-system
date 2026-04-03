"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type EventItem = {
  id: string;
  title: string;
  startDate: string;
  location?: string | null;
  imageUrl?: string | null;
  category?: string | null;
  registrations?: { id: string }[];
};

type TaskItem = {
  id: string;
  status: "PENDING" | "DONE" | "CLOSED";
  createdAt?: string;
};

type UserItem = {
  id: string;
  role: "ADMIN" | "MEMBER" | "VOLUNTEER";
  createdAt?: string;
};

export default function AdminOverviewPage() {
  const router = useRouter();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [users, setUsers] = useState<UserItem[]>([]);
  const [registrationsCount, setRegistrationsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [chartReady, setChartReady] = useState(false);
  const registrationsChartRef = useRef<HTMLDivElement | null>(null);
  const monthlyChartRef = useRef<HTMLDivElement | null>(null);
  const [registrationsChartSize, setRegistrationsChartSize] = useState({ width: 0, height: 0 });
  const [monthlyChartSize, setMonthlyChartSize] = useState({ width: 0, height: 0 });
  const [showAllNotifications, setShowAllNotifications] = useState(false);

  useEffect(() => {
    setChartReady(true);
  }, []);

  useEffect(() => {
    const regNode = registrationsChartRef.current;
    const monthNode = monthlyChartRef.current;
    if (!regNode || !monthNode) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = Math.floor(entry.contentRect.width);
        const height = Math.floor(entry.contentRect.height);
        if (entry.target === regNode) {
          setRegistrationsChartSize({ width, height });
        } else if (entry.target === monthNode) {
          setMonthlyChartSize({ width, height });
        }
      }
    });

    resizeObserver.observe(regNode);
    resizeObserver.observe(monthNode);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const token = getToken();
    const user = getUser();
    if (!token || !user) {
      router.push("/sign-in");
      return;
    }
    if (user.role !== "ADMIN") {
      router.push("/events");
      return;
    }

    const load = async () => {
      try {
        const [eventsData, tasksData, usersData, registrationsData] = await Promise.all([
          fetchJson<EventItem[]>("/events", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetchJson<TaskItem[]>("/tasks", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetchJson<UserItem[]>("/users", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetchJson<unknown[]>("/registrations", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setEvents(eventsData);
        setTasks(tasksData);
        setUsers(usersData);
        setRegistrationsCount(registrationsData.length);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unable to load dashboard.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [router]);

  const stats = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const previousMonthDate = new Date(currentYear, currentMonth - 1, 1);
    const previousMonth = previousMonthDate.getMonth();
    const previousYear = previousMonthDate.getFullYear();

    const isInMonth = (dateValue: string | undefined, month: number, year: number) => {
      if (!dateValue) return false;
      const date = new Date(dateValue);
      return date.getMonth() === month && date.getFullYear() === year;
    };

    const percentChange = (current: number, previous: number) => {
      if (previous === 0) return current === 0 ? 0 : 100;
      return ((current - previous) / previous) * 100;
    };

    const totalEvents = events.length;
    const currentMonthEvents = events.filter((event) => isInMonth(event.startDate, currentMonth, currentYear)).length;
    const previousMonthEvents = events.filter((event) => isInMonth(event.startDate, previousMonth, previousYear)).length;

    const currentMonthRegistrations = events
      .filter((event) => isInMonth(event.startDate, currentMonth, currentYear))
      .reduce((sum, event) => sum + (event.registrations?.length ?? 0), 0);
    const previousMonthRegistrations = events
      .filter((event) => isInMonth(event.startDate, previousMonth, previousYear))
      .reduce((sum, event) => sum + (event.registrations?.length ?? 0), 0);

    const pendingTasksTotal = tasks.filter((task) => task.status === "PENDING").length;
    const tasksWithDates = tasks.some((task) => Boolean(task.createdAt));
    const currentMonthTasks = tasksWithDates
      ? tasks.filter((task) => task.status === "PENDING" && isInMonth(task.createdAt, currentMonth, currentYear)).length
      : pendingTasksTotal;
    const previousMonthTasks = tasksWithDates
      ? tasks.filter((task) => task.status === "PENDING" && isInMonth(task.createdAt, previousMonth, previousYear)).length
      : pendingTasksTotal;

    const volunteersTotal = users.filter((user) => user.role === "VOLUNTEER").length;
    const usersWithDates = users.some((user) => Boolean(user.createdAt));
    const currentMonthVolunteers = usersWithDates
      ? users.filter((user) => user.role === "VOLUNTEER" && isInMonth(user.createdAt, currentMonth, currentYear)).length
      : volunteersTotal;
    const previousMonthVolunteers = usersWithDates
      ? users.filter((user) => user.role === "VOLUNTEER" && isInMonth(user.createdAt, previousMonth, previousYear)).length
      : volunteersTotal;

    return [
      {
        label: "Total Events",
        value: totalEvents,
        trend: percentChange(currentMonthEvents, previousMonthEvents),
        description: "Active events this month",
        icon: "calendar" as const,
      },
      {
        label: "Total Registrations",
        value: registrationsCount,
        trend: percentChange(currentMonthRegistrations, previousMonthRegistrations),
        description: "Registrations linked to events",
        icon: "users" as const,
      },
      {
        label: "Active Tasks",
        value: pendingTasksTotal,
        trend: percentChange(currentMonthTasks, previousMonthTasks),
        description: "Pending tasks to complete",
        icon: "tasks" as const,
      },
      {
        label: "Volunteers",
        value: volunteersTotal,
        trend: percentChange(currentMonthVolunteers, previousMonthVolunteers),
        description: "Volunteer members in system",
        icon: "star" as const,
      },
    ];
  }, [events, registrationsCount, tasks, users]);

  const eventRegistrationData = useMemo(() => {
    return events.map((event) => ({
      title: event.title,
      registrations: event.registrations?.length ?? 0,
    }));
  }, [events]);

  const monthlyEventData = useMemo(() => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const counts = new Array(12).fill(0);

    events.forEach((event) => {
      const month = new Date(event.startDate).getMonth();
      if (month >= 0 && month <= 11) {
        counts[month] += 1;
      }
    });

    return months.map((label, index) => ({ month: label, events: counts[index] }));
  }, [events]);

  const upcomingEvents = useMemo(() => {
    return [...events]
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
      .slice(0, 4);
  }, [events]);

  const activityItems = useMemo(() => {
    const base = [...events]
      .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
      .map((event, index) => {
        const registrations = event.registrations?.length ?? 0;
        const title = registrations > 0
          ? `New event registration: ${event.title}`
          : `Event updated: ${event.title}`;
        return {
          id: event.id,
          title,
          time: `${(index + 1) * 2} hours ago`,
          tone:
            index % 3 === 0 ? "bg-amber-500" : index % 3 === 1 ? "bg-blue-500" : "bg-emerald-500",
        };
      });

    return base;
  }, [events]);

  const visibleActivityItems = showAllNotifications ? activityItems : activityItems.slice(0, 4);

  return (
    <div className="min-h-full bg-white px-6 py-4 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
        <header className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-normal tracking-tight text-zinc-950">Dashboard Overview</h1>
            <p className="mt-2 text-base text-zinc-600">Welcome back! Here's what's happening with your events.</p>
          </div>
          <Link
            href="/admin/profile"
            className="inline-flex rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-900"
          >
            My Profile
          </Link>
        </header>

        {error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{error}</div>
        ) : null}

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold text-zinc-900">{stat.label}</p>
                <span className="text-zinc-500">
                  {stat.icon === "calendar" ? (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  ) : stat.icon === "users" ? (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ) : stat.icon === "tasks" ? (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 16.8 5.5 21 7.5 13.5 2 9 9 9 12 2" />
                    </svg>
                  )}
                </span>
              </div>
              {loading ? (
                <div className="mt-6 space-y-2">
                  <div className="shimmer h-10 w-20 rounded-md" />
                  <div className="shimmer h-4 w-40 rounded-md" />
                  <div className="shimmer h-4 w-36 rounded-md" />
                </div>
              ) : (
                <>
                  <p className="mt-8 text-4xl font-bold text-zinc-900">{stat.value.toLocaleString()}</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-emerald-600">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 14l5-5 4 4 5-5" />
                      <path d="M14 8h5v5" />
                    </svg>
                    <span className="text-[11px] font-medium">
                      {`${stat.trend >= 0 ? "+" : ""}${stat.trend.toFixed(1)}% from last month`}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{stat.description}</p>
                </>
              )}
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2">
          <div className="min-w-0 rounded-2xl border border-zinc-200 bg-white px-6 pt-6 pb-2 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">Event Registrations</h2>
            <div ref={registrationsChartRef} className="mt-10 h-72 min-h-[18rem] min-w-0">
              {loading ? (
                <div className="shimmer h-full w-full rounded-xl" />
              ) : !chartReady ? (
                <p className="text-sm text-zinc-500">Preparing chart...</p>
              ) : registrationsChartSize.width <= 0 || registrationsChartSize.height <= 0 ? (
                <p className="text-sm text-zinc-500">Sizing chart...</p>
              ) : eventRegistrationData.length === 0 ? (
                <p className="text-sm text-zinc-500">No events yet.</p>
              ) : (
                <BarChart
                  width={Math.max(registrationsChartSize.width, 280)}
                  height={Math.max(registrationsChartSize.height, 240)}
                  data={eventRegistrationData}
                  margin={{ top: 8, right: 8, left: -20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
                  <XAxis
                    dataKey="title"
                    tick={{ fontSize: 11, fill: "#71717a" }}
                    interval={0}
                    angle={-20}
                    textAnchor="end"
                    height={64}
                    tickFormatter={(value) => String(value).slice(0, 14)}
                  />
                  <YAxis tick={{ fontSize: 11, fill: "#71717a" }} allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="registrations" radius={[6, 6, 0, 0]} fill="#0f172a" />
                </BarChart>
              )}
            </div>
          </div>

          <div className="min-w-0 rounded-2xl border border-zinc-200 bg-white px-6 pt-6 pb-2 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">Events Per Month</h2>
            <div ref={monthlyChartRef} className="mt-10 h-72 min-h-[18rem] min-w-0">
              {loading ? (
                <div className="shimmer h-full w-full rounded-xl" />
              ) : !chartReady ? (
                <p className="text-sm text-zinc-500">Preparing chart...</p>
              ) : monthlyChartSize.width <= 0 || monthlyChartSize.height <= 0 ? (
                <p className="text-sm text-zinc-500">Sizing chart...</p>
              ) : (
                <BarChart
                  width={Math.max(monthlyChartSize.width, 280)}
                  height={Math.max(monthlyChartSize.height, 240)}
                  data={monthlyEventData}
                  margin={{ top: 8, right: 8, left: -20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#71717a" }} height={64} />
                  <YAxis tick={{ fontSize: 11, fill: "#71717a" }} allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="events" radius={[6, 6, 0, 0]} fill="#0f172a" />
                </BarChart>
              )}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-normal text-zinc-900">Upcoming Events</h2>
              <Link
                href="/admin/browse-events"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-4 py-2 text-[11px] font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                View All
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            <div className="mt-6 space-y-4">
              {loading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="rounded-xl border border-zinc-200 bg-white p-4">
                    <div className="flex items-start gap-4">
                      <div className="shimmer h-16 w-16 rounded-xl" />
                      <div className="w-full space-y-2">
                        <div className="shimmer h-5 w-2/3 rounded-md" />
                        <div className="shimmer h-4 w-1/2 rounded-md" />
                        <div className="shimmer h-4 w-2/5 rounded-md" />
                      </div>
                    </div>
                  </div>
                ))
              ) : upcomingEvents.length === 0 ? (
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">No upcoming events yet.</div>
              ) : (
                upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-4">
                    <div className="h-16 w-16 overflow-hidden rounded-xl bg-zinc-200">
                      {event.imageUrl ? (
                        <img src={event.imageUrl} alt={event.title} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-slate-900 text-lg font-semibold text-white">
                          {event.title.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <p className="line-clamp-1 text-lg font-normal text-zinc-900">{event.title}</p>
                        <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                          {event.category || "event"}
                        </span>
                      </div>
                      <div className="mt-1 space-y-1 text-xs text-zinc-600">
                        <p className="flex items-center gap-2">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          {new Date(event.startDate).toLocaleDateString()}
                        </p>
                        <p className="flex items-center gap-2">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {event.location || "Location not set"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <svg className="h-6 w-6 text-zinc-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
                <path d="M9 17a3 3 0 0 0 6 0" />
              </svg>
              <h2 className="text-lg font-normal text-zinc-900">Recent Activity</h2>
            </div>

            <div className="mt-6 space-y-4">
              {loading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="rounded-xl border border-zinc-200 bg-zinc-100 p-4">
                    <div className="shimmer h-4 w-3/4 rounded-md" />
                    <div className="mt-2 shimmer h-3 w-1/4 rounded-md" />
                  </div>
                ))
              ) : visibleActivityItems.length === 0 ? (
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">No recent activity yet.</div>
              ) : (
                visibleActivityItems.map((activity) => (
                  <div key={activity.id} className="rounded-xl border border-zinc-200 bg-zinc-100 p-4">
                    <p className="flex items-start gap-3 text-sm font-normal text-zinc-900">
                      <span className={`mt-2 h-2.5 w-2.5 rounded-full ${activity.tone}`} />
                      <span>{activity.title}</span>
                    </p>
                    <p className="ml-5 mt-1 text-xs text-zinc-500">{activity.time}</p>
                  </div>
                ))
              )}
            </div>

            {!loading && activityItems.length > 4 ? (
              <button
                type="button"
                onClick={() => setShowAllNotifications((prev) => !prev)}
                className="mt-5 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-[11px] font-normal text-zinc-900 hover:bg-zinc-50"
              >
                {showAllNotifications ? "Show Less Notifications" : "View All Notifications"}
              </button>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
}
