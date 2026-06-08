export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <section className="container mt-12 max-w-3xl">
      <h1 className="headline text-5xl font-black">Contact Us</h1>
      <p className="mt-5 text-lg leading-8 text-muted">For editorial tips, partnerships, corrections, and advertising, email hello@openwire.today.</p>
      <form className="mt-8 grid gap-3">
        <input className="rounded-lg border border-black/10 bg-white p-4" placeholder="Name" />
        <input className="rounded-lg border border-black/10 bg-white p-4" placeholder="Email" />
        <textarea className="min-h-36 rounded-lg border border-black/10 bg-white p-4" placeholder="Message" />
        <button className="w-fit rounded-full bg-ink px-6 py-3 font-black text-white">Send message</button>
      </form>
    </section>
  );
}
