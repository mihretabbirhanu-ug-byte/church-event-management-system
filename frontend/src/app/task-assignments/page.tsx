"use client";

import { useEffect, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type TaskAssignment = {
  id: string;
  taskId: string;
  userId: string;
  assignedAt: string;
};

type TaskItem = {
  id: string;
  title: string;
};

type UserItem = {
  id: string;
  fullName: string;
};

export default function TaskAssignmentsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [items, setItems] = useState<TaskAssignment[]>([]);
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [users, setUsers] = useState<UserItem[]>([]);
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
        const [assignmentsData, tasksData, usersData] = await Promise.all([
          fetchJson<TaskAssignment[]>("/task-assignments", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetchJson<TaskItem[]>("/tasks", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetchJson<UserItem[]>("/users", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setItems(assignmentsData);
        setTasks(tasksData);
        setUsers(usersData);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to load task assignments.";
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

  const taskNameById = new Map(tasks.map((task) => [task.id, task.title]));
  const userNameById = new Map(users.map((user) => [user.id, user.fullName]));
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
                Task assignments
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
                Assigned volunteers
              </h1>
            </header>

            {loading ? (
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
                Loading task assignments...
              </div>
            ) : error ? (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
                {error}
              </div>
            ) : items.length === 0 ? (
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
                No task assignments found.
              </div>
            ) : (
              <div className="grid gap-4 lg:grid-cols-2">
                {items.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-zinc-900">
                      Task ID: {assignment.taskId}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-zinc-600">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>{taskNameById.get(assignment.taskId) ?? "Unknown task"}</span>
                    </p>
                    <p className="mt-2 text-xs text-zinc-600">
                      User ID: {assignment.userId}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-zinc-600">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21a8 8 0 0 0-16 0" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span>{userNameById.get(assignment.userId) ?? "Unknown user"}</span>
                    </p>
                    <p className="mt-3 text-xs text-zinc-500">
                      Assigned: {new Date(assignment.assignedAt).toLocaleString()}
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


