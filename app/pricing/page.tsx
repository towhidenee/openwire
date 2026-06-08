import Link from "next/link";

export const metadata = { title: "Pricing and Subscription" };

const plans = [
  ["Reader", "$6", "Daily brief, saved stories, and subscriber newsletters."],
  ["Pro", "$14", "Full archive, premium analysis, and ad-light reading."],
  ["Team", "$49", "Shared access, invoice billing, and newsroom briefings."]
];

export default function PricingPage() {
  return (
    <section className="container mt-12">
      <h1 className="headline text-5xl font-black">Subscribe to OpenWire</h1>
      <p className="mt-4 max-w-2xl text-muted">Flexible plans for readers, professionals, and teams who rely on clear reporting.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {plans.map(([name, price, description]) => (
          <div key={name} className="rounded-lg border border-black/10 bg-white p-6">
            <h2 className="text-2xl font-black">{name}</h2>
            <p className="mt-4 text-5xl font-black">{price}<span className="text-base text-muted">/mo</span></p>
            <p className="mt-4 text-sm leading-6 text-muted">{description}</p>
            <Link href="/login" className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-black text-white">Start now</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
