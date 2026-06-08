export function Newsletter() {
  return (
    <section className="container mt-16 rounded-lg bg-ink p-6 text-white md:p-10">
      <div className="grid gap-6 md:grid-cols-[1fr_420px] md:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-white/60">Daily brief</p>
          <h2 className="headline mt-3 text-3xl font-black md:text-5xl">The smartest OpenWire stories in one email.</h2>
        </div>
        <form action="/api/newsletter" method="post" className="flex gap-2 rounded-full bg-white p-2">
          <input required type="email" name="email" placeholder="you@example.com" className="min-w-0 flex-1 rounded-full px-4 text-sm text-ink outline-none" />
          <button className="rounded-full bg-wire px-5 py-3 text-sm font-black">Sign up</button>
        </form>
      </div>
    </section>
  );
}
