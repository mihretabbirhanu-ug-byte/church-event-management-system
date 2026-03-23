"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { fetchJson } from "@/lib/api";
import { setToken, setUser } from "@/lib/auth";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    setSubmitting(true);
    setFormError("");
    try {
      const data = await fetchJson<{ access_token: string; user: any }>(
        "/auth/login",
        {
          method: "POST",
          body: { email, password },
        }
      );
      setToken(data.access_token);
      setUser(data.user);
      if (data.user?.role === "ADMIN") {
        router.push("/admin/dashboard");
      } else if (data.user?.role === "VOLUNTEER") {
        router.push("/tasks");
      } else {
        router.push("/events");
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to sign in.";
      setFormError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f6f5]">
      {/* Outer container */}
      <div className="flex w-full max-w-6xl items-stretch rounded-xl overflow-hidden shadow-xl">
        
        {/* Left promo image panel (1/3 width) */}
        <div className="relative flex-1 h-170 bg-[url('/pexels-dan-borges-2090916.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8">
            <h1 className="text-3xl font-bold">Church Event Management System</h1>
            <p className="mt-4 text-base max-w-sm leading-relaxed">
              Plan, organize, and manage your church events with confidence.
              Invite members, track volunteers, and streamline your ministry
              activities — all in one place.
            </p>
          </div>
        </div>

        {/* Right sign-in box (2/3 width) */}
        <div className="flex-2 flex flex-col justify-center bg-white p-10 h-170">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-8">
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">
                Sign in to your account
              </h1>
              <p className="mt-2 text-sm text-zinc-600">
                Welcome back. Let&#39;s get you to your events.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              {formError ? (
                <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                  {formError}
                </div>
              ) : null}
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
                className="flex h-12 w-full items-center justify-center rounded-lg bg-emerald-600 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={submitting}
              >
                {submitting ? "Signing in..." : "Sign in"}
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
    </div>
  );
}
