import Image from "next/image";
import { manifesto } from "@/lib/content";

export default function Manifesto() {
  return (
    <section
      aria-label="Manifiesto"
      className="bg-terracotta text-cream py-12 lg:py-16 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex items-center justify-center gap-8">
        <Image
          src="/brand/illustrations/ilus-c.svg"
          alt=""
          aria-hidden
          width={80}
          height={80}
          className="hidden md:block w-16 opacity-90 invert brightness-200"
        />
        <p className="font-serif italic text-center text-[clamp(1.5rem,3.5vw,2.75rem)] leading-tight max-w-3xl">
          {manifesto.line}
        </p>
        <Image
          src="/brand/illustrations/ilus-f.svg"
          alt=""
          aria-hidden
          width={80}
          height={80}
          className="hidden md:block w-16 opacity-90 invert brightness-200"
        />
      </div>
    </section>
  );
}
