"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type TaskUpdate = {
  id: string;
  message: string;
  taskId: string;
  userId: string;
  createdAt: string;
};

export default function TaskUpdatesPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [items, setItems] = useState<TaskUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentRole, setCurrentRole] = useState<string | null>(null);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/sign-in");
      return;
    }

    const load = async () => {
      try {
        const data = await fetchJson<TaskUpdate[]>("/task-updates", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setItems(data);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to load task updates.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [router]);

  useEffect(() => {
    const user = getUser();
    setCurrentRole(user?.role ?? null);
  }, []);
  return (
    <div className="min-h-full bg-zinc-50">
      <div className="grid w-full gap-0 lg:grid-cols-[220px_1fr]">
        <aside className="border-b border-zinc-200 bg-white pl-2 pr-3 py-3 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:border-b-0 lg:border-r">
          <nav className="space-y-1">
            <Link
              href="/tasks"
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                pathname === "/tasks"
                  ? "bg-slate-950 text-white"
                  : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
              }`}
            >
              Event tasks
            </Link>
            <Link
              href="/task-assignments"
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                pathname === "/task-assignments"
                  ? "bg-slate-950 text-white"
                  : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
              }`}
            >
              Task assignments
            </Link>
            <Link
              href="/task-updates"
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                pathname === "/task-updates"
                  ? "bg-slate-950 text-white"
                  : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
              }`}
            >
              Task updates
            </Link>
            <Link
              href={currentRole === "ADMIN" ? "/admin/profile" : "/me"}
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                pathname === "/me" || pathname === "/admin/profile"
                  ? "bg-slate-950 text-white"
                  : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
              }`}
            >
              My profile
            </Link></nav>
        </aside>

        <div className="px-4 py-6 sm:px-6 lg:px-10">
          <div className="flex w-full flex-col gap-8">
            <header className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Task updates
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
                Latest task notes
              </h1>
            </header>

            {loading ? (
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
                Loading task updates...
              </div>
            ) : error ? (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
                {error}
              </div>
            ) : items.length === 0 ? (
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
                No task updates found.
              </div>
            ) : (
              <div className="grid gap-4 lg:grid-cols-2">
                {items.map((update) => (
                  <div
                    key={update.id}
                    className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-zinc-900">
                      {update.message}
                    </p>
                    <div className="mt-3 space-y-1 text-xs text-zinc-600">
                      <p>Task ID: {update.taskId}</p>
                      <p>User ID: {update.userId}</p>
                    </div>
                    <p className="mt-3 text-xs text-zinc-500">
                      {new Date(update.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


