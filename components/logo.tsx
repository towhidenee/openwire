import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="OpenWire home">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-black text-white">OW</span>
      <span>
        <span className="block text-2xl font-black leading-none tracking-tight">OpenWire</span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-muted">today</span>
      </span>
    </Link>
  );
}
