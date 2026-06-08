export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return <Policy title="Privacy Policy" text="OpenWire collects only the information needed to operate subscriptions, newsletters, analytics, security, and account access. Production deployments should connect this template to your final privacy counsel and data retention practices." />;
}

function Policy({ title, text }: { title: string; text: string }) {
  return <section className="container mt-12 max-w-3xl"><h1 className="headline text-5xl font-black">{title}</h1><p className="mt-5 text-lg leading-8 text-muted">{text}</p></section>;
}
