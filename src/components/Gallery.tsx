import Image from "next/image";
import { gallery } from "@/lib/content";

export default function Gallery() {
  return (
    <section
      aria-labelledby="galeria-title"
      className="py-28 lg:py-36 bg-cream"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow">{gallery.eyebrow}</p>
          <h2
            id="galeria-title"
            className="headline mt-6 text-[clamp(2.25rem,5vw,4rem)] text-clay"
          >
            {gallery.title}
          </h2>
        </div>
      </div>
      <div className="mt-20 mx-auto max-w-[1500px] px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-4 auto-rows-[180px] lg:auto-rows-[240px]">
        {gallery.images.map((img, i) => {
          const layouts = [
            "lg:col-span-5 lg:row-span-2",
            "lg:col-span-3 lg:row-span-1",
            "lg:col-span-4 lg:row-span-1",
            "lg:col-span-3 lg:row-span-1",
            "lg:col-span-4 lg:row-span-2",
            "lg:col-span-5 lg:row-span-1",
          ];
          return (
            <figure
              key={img.src}
              className={`relative overflow-hidden ${layouts[i % layouts.length]}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 50vw"
                className="object-cover gallery-img"
                loading="lazy"
              />
            </figure>
          );
        })}
      </div>
    </section>
  );
}
