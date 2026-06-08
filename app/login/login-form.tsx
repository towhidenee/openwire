"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export function LoginForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
      callbackUrl: "/admin"
    });

    setLoading(false);

    if (result?.ok) {
      window.location.href = result.url || "/admin";
      return;
    }

    setError("Login failed. Check the admin email, password, and Vercel environment variables.");
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md rounded-lg border border-black/10 bg-white p-6 shadow-lift">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-wire">Admin access</p>
      <h1 className="headline mt-2 text-4xl font-black">Sign in</h1>
      <label className="mt-6 block text-sm font-bold">Email</label>
      <input name="email" type="email" defaultValue="admin@openwire.today" className="mt-2 w-full rounded-lg border border-black/10 p-3" />
      <label className="mt-4 block text-sm font-bold">Password</label>
      <input name="password" type="password" defaultValue="ChangeMe123!" className="mt-2 w-full rounded-lg border border-black/10 p-3" />
      {error ? <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p> : null}
      <button disabled={loading} className="mt-6 w-full rounded-full bg-ink px-5 py-3 font-black text-white disabled:opacity-60">
        {loading ? "Signing in..." : "Login"}
      </button>
      <p className="mt-4 text-xs text-muted">Credentials auth is configured in the API route. Set matching Vercel environment variables before production use.</p>
    </form>
  );
}
