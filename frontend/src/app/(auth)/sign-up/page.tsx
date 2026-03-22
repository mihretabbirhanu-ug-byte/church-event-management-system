"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { fetchJson } from "@/lib/api";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validate = () => {
    const nextErrors: {
      name?: string;
      phone?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};

    if (!name.trim()) {
      nextErrors.name = "Full name is required.";
    }

    if (!phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    }

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

    if (!confirmPassword.trim()) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (confirmPassword !== password) {
      nextErrors.confirmPassword = "Passwords do not match.";
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
      await fetchJson("/auth/register", {
        method: "POST",
        body: {
          fullName: name,
          phone,
          email,
          password,
          role: "MEMBER",
        },
      });
      router.push("/sign-in");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to create account.";
      setFormError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-amber-50 via-stone-50 to-zinc-100 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white/90 shadow-xl ring-1 ring-black/5 backdrop-blur">
        <div className="p-8 sm:p-10">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-zinc-600">
              Discover upcoming events.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            {formError ? (
              <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                {formError}
              </div>
            ) : null}
            <label className="block text-sm font-medium text-zinc-700">
              Full name
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
              {errors.name ? (
                <span className="mt-2 block text-xs text-rose-600">
                  {errors.name}
                </span>
              ) : null}
            </label>

            <label className="block text-sm font-medium text-zinc-700">
              Phone number
              <input
                type="tel"
                name="phone"
                placeholder="09xx xxx xxx"
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
              {errors.phone ? (
                <span className="mt-2 block text-xs text-rose-600">
                  {errors.phone}
                </span>
              ) : null}
            </label>

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
                placeholder="Create a password"
                autoComplete="new-password"
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

            <label className="block text-sm font-medium text-zinc-700">
              Confirm password
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter your password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
              {errors.confirmPassword ? (
                <span className="mt-2 block text-xs text-rose-600">
                  {errors.confirmPassword}
                </span>
              ) : null}
            </label>

            <label className="flex items-start gap-2 text-sm text-zinc-600">
              <input
                type="checkbox"
                name="terms"
                className="mt-1 h-4 w-4 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span>
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="font-medium text-emerald-700 hover:text-emerald-800"
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-emerald-700 hover:text-emerald-800"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center rounded-lg bg-emerald-600 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={submitting}
            >
              {submitting ? "Creating account..." : "Create account"}
            </button>
          </form>

          <div className="mt-8 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-600">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
