"use client";

import { useEffect, useMemo, useState } from "react";
import { fetchJson } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

type TaskItem = {
  id: string;
  title: string;
  status: "PENDING" | "DONE" | "CLOSED";
  assignments?: { id: string; userId: string; user?: { fullName: string } }[];
};

type UserItem = {
  id: string;
  fullName: string;
  role: "ADMIN" | "MEMBER" | "VOLUNTEER";
};

export default function AssignTasksPage() {
  const router = useRouter();
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [users, setUsers] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionError, setActionError] = useState("");
  const [assigning, setAssigning] = useState<string | null>(null);

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
        const [tasksData, usersData] = await Promise.all([
          fetchJson<TaskItem[]>("/tasks", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetchJson<UserItem[]>("/users", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setTasks(tasksData);
        setUsers(usersData);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to load assignments.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [router]);

  const volunteers = useMemo(
    () => users.filter((user) => user.role === "VOLUNTEER"),
    [users]
  );

  const volunteerTaskCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    tasks.forEach((task) => {
      task.assignments?.forEach((assignment) => {
        counts[assignment.userId] = (counts[assignment.userId] ?? 0) + 1;
      });
    });
    return counts;
  }, [tasks]);

  const handleAssign = async (taskId: string, volunteerId: string) => {
    const token = getToken();
    if (!token) {
      router.push("/sign-in");
      return;
    }
    setAssigning(`${taskId}:${volunteerId}`);
    setActionError("");
    try {
      await fetchJson("/task-assignments", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: {
          task: { connect: { id: taskId } },
          user: { connect: { id: volunteerId } },
        },
      });
      const refreshed = await fetchJson<TaskItem[]>("/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(refreshed);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to assign volunteer.";
      setActionError(message);
    } finally {
      setAssigning(null);
    }
  };

  const handleUnassign = async (assignmentId: string) => {
    const token = getToken();
    if (!token) {
      router.push("/sign-in");
      return;
    }
    setAssigning(assignmentId);
    setActionError("");
    try {
      await fetchJson(`/task-assignments/${assignmentId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const refreshed = await fetchJson<TaskItem[]>("/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(refreshed);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to unassign volunteer.";
      setActionError(message);
    } finally {
      setAssigning(null);
    }
  };

  return (
    <div className="min-h-full bg-zinc-50 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Assign tasks
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Match volunteers to tasks
            </h1>
          </div>
          <Link
            href="/admin/dashboard"
            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:border-emerald-200 hover:text-emerald-700"
          >
            Back to dashboard
          </Link>
        </header>

        {error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {error}
          </div>
        ) : null}

        {actionError ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {actionError}
          </div>
        ) : null}

        {loading ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            Loading tasks...
          </div>
        ) : tasks.length === 0 ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            No tasks available.
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {tasks.map((task) => {
              const assignedIds = new Set(
                (task.assignments ?? []).map((assignment) => assignment.userId)
              );
              return (
                <div
                  key={task.id}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-lg font-semibold text-zinc-900">
                        {task.title}
                      </p>
                      <p className="mt-1 text-xs text-zinc-600">
                        Status: {task.status}
                      </p>
                    </div>
                    <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-600">
                      {task.assignments?.length ?? 0} assigned
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {volunteers.length === 0 ? (
                      <p className="text-sm text-zinc-600">
                        No volunteers available yet.
                      </p>
                    ) : (
                      volunteers.map((volunteer) => {
                        const isAssigned = assignedIds.has(volunteer.id);
                        const count = volunteerTaskCounts[volunteer.id] ?? 0;
                        const assignment = task.assignments?.find(
                          (item) => item.userId === volunteer.id
                        );
                        return (
                          <div
                            key={volunteer.id}
                            className="flex flex-col gap-2 rounded-xl border border-zinc-100 bg-zinc-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                          >
                            <div>
                              <p className="text-sm font-semibold text-zinc-900">
                                {volunteer.fullName}
                              </p>
                              <p className="text-xs text-zinc-600">
                                Assigned to {count} task{count === 1 ? "" : "s"}
                              </p>
                              {isAssigned ? (
                                <p className="text-xs font-semibold text-emerald-700">
                                  Already assigned to this task
                                </p>
                              ) : null}
                            </div>
                            {isAssigned && assignment?.id ? (
                              <button
                                onClick={() => handleUnassign(assignment.id)}
                                disabled={assigning === assignment.id}
                                className="rounded-lg border border-rose-200 px-3 py-1.5 text-xs font-semibold text-rose-700 hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-70"
                              >
                                {assigning === assignment.id ? "Removing..." : "Unassign"}
                              </button>
                            ) : (
                              <button
                                onClick={() => handleAssign(task.id, volunteer.id)}
                                disabled={assigning === `${task.id}:${volunteer.id}`}
                                className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
                              >
                                {assigning === `${task.id}:${volunteer.id}`
                                  ? "Assigning..."
                                  : "Assign"}
                              </button>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
