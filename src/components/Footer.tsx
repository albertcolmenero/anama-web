import Image from "next/image";
import Link from "next/link";
import { footer, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-clay text-cream/80 py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <Image
            src="/brand/logos/anama-principal.svg"
            alt="ANAMA Studio"
            width={130}
            height={32}
            className="h-8 w-auto"
          />
          <span className="font-script italic text-cream/60 text-lg">
            {footer.tagline}
          </span>
        </div>
        <ul className="flex gap-8 font-smallcaps text-[0.65rem]">
          {footer.links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="hover:text-cream transition-colors"
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="font-smallcaps text-[0.6rem] text-cream/50">
          {footer.copyright}
        </p>
      </div>
      <div className="sr-only">{site.name}</div>
    </footer>
  );
}
