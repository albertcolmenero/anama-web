import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section
      aria-labelledby="experiencia-title"
      className="py-28 lg:py-36 bg-clay text-cream relative overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-3xl">
          <p
            className="font-smallcaps text-[0.72rem] tracking-[0.28em] text-sand"
          >
            {experience.eyebrow}
          </p>
          <h2
            id="experiencia-title"
            className="headline mt-6 text-[clamp(2.25rem,5vw,4rem)]"
          >
            {experience.title}
          </h2>
        </div>
        <ul className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {experience.items.map((item, i) => (
            <li key={item.title} className="border-t border-cream/20 pt-6">
              <span className="font-smallcaps text-[0.65rem] text-sand/80">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-serif text-2xl lg:text-3xl">{item.title}</h3>
              <p className="mt-4 text-cream/75 leading-relaxed text-[0.95rem]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
