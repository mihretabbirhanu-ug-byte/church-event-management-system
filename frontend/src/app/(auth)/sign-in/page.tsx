 "use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validate = () => {
    const nextErrors: { email?: string; password?: string } = {};
    if (!email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!password.trim()) {
      nextErrors.password = "Password is required.";
    } else if (password.length < 7 || password.length > 11) {
      nextErrors.password = "Password must be 7-11 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    router.push("/");
  };

  return (
    <div className="flex min-h-full flex-1 items-center justify-center bg-[radial-gradient(ellipse_at_t
    op,_var(--tw-gradient-stops))] from-amber-50 via-stone-50 to-zinc-100 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white/90 shadow-xl ring-1 ring-black/5 backdrop-blur">
        <div className="p-8 sm:p-10">
          <div className="mb-8">
            {/*<p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Event Manager
            </p>*/}
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">
              Sign in to your account
            </h1>
            <p className="mt-2 text-sm text-zinc-600">
              Welcome back. Let&#39;s get you to your events.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <label className="block text-sm font-medium text-zinc-700">
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
              {errors.email ? (
                <span className="mt-2 block text-xs text-rose-600">
                  {errors.email}
                </span>
              ) : null}
            </label>

            <label className="block text-sm font-medium text-zinc-700">
              Password
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
              {errors.password ? (
                <span className="mt-2 block text-xs text-rose-600">
                  {errors.password}
                </span>
              ) : null}
            </label>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-zinc-600">
                <input
                  type="checkbox"
                  name="remember"
                  className="h-4 w-4 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500"
                />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="font-medium text-emerald-700 hover:text-emerald-800"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center rounded-lg bg-emerald-600 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              Sign in
            </button>
          </form>

          <div className="mt-8 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-600">
            Don&#39;t have an account?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Create one
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
