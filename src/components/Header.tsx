import Link from "next/link";
import Image from "next/image";
import { nav } from "@/lib/content";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-cream/70 border-b border-sand/40">
      <nav
        aria-label="Principal"
        className="mx-auto max-w-[1400px] px-6 lg:px-12 h-16 flex items-center justify-between"
      >
        <Link href="#top" className="flex items-center gap-2" aria-label="ANAMA inicio">
          <Image
            src="/brand/logos/anama-principal-clay.svg"
            alt="ANAMA"
            width={110}
            height={28}
            priority
            className="h-7 w-auto"
          />
        </Link>
        <ul className="hidden md:flex items-center gap-10">
          {nav.links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-smallcaps text-[0.68rem] text-clay hover:text-terracotta transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={nav.cta.href}
          className="btn-primary font-smallcaps text-[0.68rem] px-5 py-2.5 rounded-full"
        >
          {nav.cta.label}
        </Link>
      </nav>
    </header>
  );
}
