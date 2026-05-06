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
      <div className="mt-20 mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 [column-fill:_balance]">
          {gallery.images.map((img) => (
            <figure
              key={img.src}
              className="mb-4 lg:mb-6 break-inside-avoid overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-auto block gallery-img"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
