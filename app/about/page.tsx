export const metadata = { title: "About Us" };

export default function AboutPage() {
  return <InfoPage title="About OpenWire" body="OpenWire.today is an independent digital news platform built for clear reporting, practical context, and premium reading experiences across every screen. Our demo newsroom covers global affairs, politics, markets, technology, culture, sports, lifestyle, and the environment." />;
}

function InfoPage({ title, body }: { title: string; body: string }) {
  return (
    <section className="container mt-12 max-w-3xl">
      <h1 className="headline text-5xl font-black">{title}</h1>
      <p className="mt-5 text-lg leading-8 text-muted">{body}</p>
    </section>
  );
}
