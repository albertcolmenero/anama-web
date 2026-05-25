import { pillars } from "@/lib/content";

const cardTones = [
  { bg: "bg-cream", text: "text-clay", border: "border-sand" },
  { bg: "bg-sand", text: "text-clay", border: "border-rose/40" },
  { bg: "bg-rose", text: "text-cream", border: "border-cream/30" },
];

export default function Pillars() {
  return (
    <section
      id="metodo"
      aria-labelledby="metodo-title"
      className="py-28 lg:py-40 bg-bone"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow">{pillars.eyebrow}</p>
          <h2
            id="metodo-title"
            className="headline mt-6 text-[clamp(2.25rem,5.5vw,4.5rem)] text-clay"
          >
            {pillars.title}
          </h2>
          <p className="mt-8 text-lg lg:text-xl text-clay/75 leading-relaxed max-w-2xl">
            {pillars.intro}
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.items.map((item, idx) => {
            const tone = cardTones[idx];
            return (
              <article
                key={item.id}
                className={`pillar-card relative overflow-hidden rounded-sm border ${tone.bg} ${tone.text} ${tone.border} p-8 lg:p-10 flex flex-col min-h-[480px]`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-smallcaps text-[0.65rem] opacity-90">
                    {item.symbol}
                  </span>
                  <span
                    aria-hidden
                    className="text-[2.5rem] leading-none drop-shadow-sm"
                  >
                    {item.glyph}
                  </span>
                </div>

                <h3 className="mt-14 font-serif text-[clamp(2.25rem,3.6vw,3.25rem)] leading-none tracking-tight">
                  {item.name.replace("ANAMA ", "")}
                </h3>
                <p className="mt-2 font-smallcaps text-[0.62rem] opacity-85">
                  ANAMA · {item.tags[0]}
                </p>

                <p className="mt-6 text-base leading-relaxed opacity-100 flex-1">
                  {item.description}
                </p>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <li
                      key={t}
                      className="font-smallcaps text-[0.6rem] px-3 py-1.5 rounded-full border border-current/60 opacity-100"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
