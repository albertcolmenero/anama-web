import Image from "next/image";
import Link from "next/link";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden"
      aria-label="Inicio"
    >
      {/* Decorative illustration */}
      <Image
        src="/brand/illustrations/ilus-b.svg"
        alt=""
        aria-hidden
        width={420}
        height={420}
        className="hidden lg:block absolute -top-10 -right-20 w-[420px] opacity-60 pointer-events-none select-none"
      />
      <Image
        src="/brand/illustrations/ilus-d.svg"
        alt=""
        aria-hidden
        width={260}
        height={260}
        className="hidden lg:block absolute bottom-12 left-8 w-[200px] opacity-40 pointer-events-none select-none"
      />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 relative z-10">
          <p className="eyebrow reveal">{hero.eyebrow}</p>
          <h1 className="headline mt-6 text-[clamp(3rem,9vw,9rem)] text-clay reveal reveal-delay-1">
            {hero.titleStart}{" "}
            <span className="font-script text-terracotta italic">
              {hero.titleAccent}
            </span>
            {hero.titleEnd}
          </h1>
          <p className="mt-8 max-w-xl text-lg lg:text-xl text-clay/80 leading-relaxed reveal reveal-delay-2">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 reveal reveal-delay-3">
            <Link
              href={hero.primaryCta.href}
              className="btn-primary font-smallcaps text-[0.72rem] px-7 py-4 rounded-full"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="btn-ghost font-smallcaps text-[0.72rem] px-7 py-4 rounded-full text-clay"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <figure className="lg:col-span-5 relative reveal reveal-delay-2">
          <div className="image-frame">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/brand/photos/anna-portrait.jpg"
                alt={hero.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
