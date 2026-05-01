import Link from "next/link";
import Image from "next/image";
import { cta } from "@/lib/content";

export default function CTA() {
  return (
    <section
      id="unete"
      aria-labelledby="unete-title"
      className="py-32 lg:py-44 bg-terracotta text-cream relative overflow-hidden"
    >
      <Image
        src="/brand/illustrations/ilus-a.svg"
        alt=""
        aria-hidden
        width={400}
        height={400}
        className="absolute -bottom-12 -left-12 w-64 lg:w-96 opacity-25 invert brightness-200"
      />
      <Image
        src="/brand/illustrations/ilus-f.svg"
        alt=""
        aria-hidden
        width={300}
        height={300}
        className="absolute top-10 right-10 w-48 lg:w-64 opacity-20 invert brightness-200"
      />
      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-12 text-center">
        <p className="font-smallcaps text-[0.72rem] tracking-[0.32em] text-cream/80">
          {cta.eyebrow}
        </p>
        <h2
          id="unete-title"
          className="headline mt-6 text-[clamp(3rem,8vw,7rem)] leading-[0.95]"
        >
          {cta.title}
        </h2>
        <p className="mt-8 max-w-xl mx-auto text-lg lg:text-xl text-cream/85 leading-relaxed">
          {cta.body}
        </p>
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link
            href={cta.primary.href}
            className="bg-cream text-terracotta hover:bg-clay hover:text-cream transition-all font-smallcaps text-[0.72rem] px-8 py-4 rounded-full"
          >
            {cta.primary.label}
          </Link>
          <Link
            href={cta.secondary.href}
            className="btn-ghost text-cream font-smallcaps text-[0.72rem] px-8 py-4 rounded-full"
          >
            {cta.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
