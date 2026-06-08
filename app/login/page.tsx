export const metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <section className="container mt-12 grid min-h-[60vh] place-items-center">
      <form action="/api/auth/callback/credentials" method="post" className="w-full max-w-md rounded-lg border border-black/10 bg-white p-6 shadow-lift">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-wire">Admin access</p>
        <h1 className="headline mt-2 text-4xl font-black">Sign in</h1>
        <label className="mt-6 block text-sm font-bold">Email</label>
        <input name="email" type="email" defaultValue="admin@openwire.today" className="mt-2 w-full rounded-lg border border-black/10 p-3" />
        <label className="mt-4 block text-sm font-bold">Password</label>
        <input name="password" type="password" defaultValue="ChangeMe123!" className="mt-2 w-full rounded-lg border border-black/10 p-3" />
        <button className="mt-6 w-full rounded-full bg-ink px-5 py-3 font-black text-white">Login</button>
        <p className="mt-4 text-xs text-muted">Credentials auth is configured in the API route; connect real sessions through NextAuth environment variables.</p>
      </form>
    </section>
  );
}
