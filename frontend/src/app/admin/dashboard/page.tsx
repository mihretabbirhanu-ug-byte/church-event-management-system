const stats = [
  { label: "Total events", value: "18" },
  { label: "Registrations", value: "462" },
  { label: "Active tasks", value: "37" },
  { label: "Volunteers", value: "86" },
];

const upcomingEvents = [
  {
    title: "Easter Prayer Night",
    date: "Apr 03, 2026",
    location: "Main Sanctuary",
    registrations: 128,
  },
  {
    title: "Community Outreach",
    date: "Apr 10, 2026",
    location: "City Park",
    registrations: 74,
  },
  {
    title: "Youth Worship Service",
    date: "Apr 17, 2026",
    location: "Youth Hall",
    registrations: 59,
  },
];

const tasks = [
  { title: "Confirm guest speaker", status: "PENDING", event: "Easter Prayer Night" },
  { title: "Finalize outreach supplies", status: "DONE", event: "Community Outreach" },
  { title: "Publish volunteer schedule", status: "PENDING", event: "Youth Worship Service" },
  { title: "Close March attendance report", status: "CLOSED", event: "All events" },
];

const quickActions = [
  { label: "Create event", description: "Add a new church event.", href: "/admin/events" },
  { label: "Manage users", description: "Assign volunteer roles.", href: "/admin/users" },
  { label: "Invite volunteers", description: "Send invite links.", href: "/event-invite-links" },
  { label: "Review registrations", description: "Track attendance status.", href: "/registrations" },
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-full bg-zinc-50 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Admin dashboard
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Overview of church events and operations
          </h1>
          <p className="max-w-2xl text-sm text-zinc-600">
            Track registrations, manage events, and coordinate volunteer tasks all in one place.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                {stat.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-zinc-900">{stat.value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-zinc-900">Upcoming events</h2>
              <button className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                View all
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="flex flex-col gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">{event.title}</p>
                    <p className="mt-1 text-xs text-zinc-600">
                      {event.date} · {event.location}
                    </p>
                  </div>
                  <div className="text-sm font-semibold text-emerald-700">
                    {event.registrations} registrations
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-900">Quick actions</h2>
            <div className="mt-5 space-y-4">
              {quickActions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className="block rounded-xl border border-zinc-100 bg-zinc-50 p-4 transition hover:border-emerald-200 hover:bg-emerald-50"
                >
                  <p className="text-sm font-semibold text-zinc-900">{action.label}</p>
                  <p className="mt-1 text-xs text-zinc-600">{action.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-900">Task updates</h2>
            <button className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
              View tasks
            </button>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {tasks.map((task) => (
              <div
                key={`${task.title}-${task.status}`}
                className="flex items-start justify-between rounded-xl border border-zinc-100 bg-zinc-50 p-4"
              >
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{task.title}</p>
                  <p className="mt-1 text-xs text-zinc-600">{task.event}</p>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    task.status === "DONE"
                      ? "bg-emerald-100 text-emerald-700"
                      : task.status === "CLOSED"
                      ? "bg-zinc-200 text-zinc-600"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
