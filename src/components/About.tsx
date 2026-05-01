import Image from "next/image";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section
      id="filosofia"
      aria-labelledby="filosofia-title"
      className="py-28 lg:py-40 bg-cream"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2
            id="filosofia-title"
            className="headline mt-6 text-[clamp(2.25rem,5.5vw,4.5rem)] text-clay max-w-xl"
          >
            {about.title}
          </h2>
          <div className="mt-10 space-y-6 max-w-xl text-clay/80 leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
        <figure className="lg:col-span-6 image-frame">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={about.imageSrc}
              alt={about.imageAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
