import Image from "next/image";
import { anna } from "@/lib/content";

export default function Anna() {
  return (
    <section
      id="anna"
      aria-labelledby="anna-title"
      className="py-28 lg:py-40 bg-cream relative overflow-hidden"
    >
      <Image
        src="/brand/illustrations/ilus-e.svg"
        alt=""
        aria-hidden
        width={300}
        height={300}
        className="hidden lg:block absolute top-20 right-12 w-56 opacity-30"
      />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-center">
        <figure className="lg:col-span-6 order-1 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={anna.imageSrc}
              alt={anna.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="object-cover"
            />
          </div>
        </figure>
        <div className="lg:col-span-6 order-2 lg:order-2 lg:pl-8">
          <p className="eyebrow">{anna.eyebrow}</p>
          <h2
            id="anna-title"
            className="headline mt-6 text-[clamp(2.25rem,5.5vw,4.5rem)] text-clay"
          >
            {anna.title}
          </h2>
          <div className="mt-8 space-y-5 text-clay/80 leading-relaxed text-lg max-w-xl">
            {anna.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <blockquote className="mt-12 border-l-2 border-terracotta pl-6">
            <p className="font-script italic text-terracotta text-[clamp(1.5rem,3vw,2.5rem)] leading-tight">
              “{anna.pullquote}”
            </p>
            <footer className="mt-4 font-smallcaps text-[0.7rem] text-clay/90">
              {anna.signature}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
