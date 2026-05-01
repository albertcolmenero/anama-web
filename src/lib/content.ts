// ANAMA — Single source of truth for all site copy.
// Edit text here. Type-safe and consumed by every section.

export const site = {
  url: "https://anama.studio",
  name: "ANAMA",
  brand: "ANAMA · Pilates Studio",
  founder: "Anna Sans",
  instagram: "https://www.instagram.com/anama.studio",
  email: "hola@anama.studio",
  locale: "es_ES",
  lang: "es",
} as const;

export const seo = {
  title: "ANAMA · Pilates, Barré y Ritual con Anna Sans",
  description:
    "Un espacio de movimiento online para entrenar con intención: pilates, barré y ritual con Anna Sans. Mueve donde estés, con sentido.",
  keywords: [
    "pilates online",
    "barré online",
    "anna sans",
    "anama",
    "pilates flow",
    "ritual fascia",
    "movimiento consciente",
    "entrenamiento mujer",
  ],
  ogImage: "/brand/photos/anna-portrait.jpg",
} as const;

export const nav = {
  links: [
    { label: "Filosofía", href: "#filosofia" },
    { label: "Método", href: "#metodo" },
    { label: "Anna", href: "#anna" },
    { label: "Únete", href: "#unete" },
  ],
  cta: { label: "Empieza", href: "#unete" },
} as const;

export const hero = {
  eyebrow: "Pilates · Barré · Ritual",
  titleStart: "Mueve con",
  titleAccent: "intención",
  titleEnd: ".",
  subtitle:
    "Un espacio de movimiento donde el cuerpo se trabaja con sentido. Fuerza, fluidez y regulación, allá donde estés.",
  primaryCta: { label: "Empieza tu práctica", href: "#unete" },
  secondaryCta: { label: "Conoce el método", href: "#metodo" },
  imageAlt: "Anna Sans, creadora de ANAMA, retrato sobre fondo rosado",
} as const;

export const manifesto = {
  line: "No se trata de hacer más. Se trata de hacerlo con sentido.",
} as const;

export const about = {
  eyebrow: "Filosofía",
  title: "Un espacio para moverte con intención.",
  paragraphs: [
    "ANAMA es un espacio de movimiento donde el cuerpo se trabaja con intención, sin perder la exigencia pero sin caer en la sobrecarga. Está pensado para que te sientas fuerte, ágil y conectada, entendiendo que no todos los días el cuerpo responde igual, y que eso también forma parte del proceso.",
    "Las clases combinan control, fluidez y técnica. Hay momentos más activos, otros más precisos y otros más lentos, pero siempre con un objetivo claro: que el cuerpo trabaje bien y se sienta mejor después.",
  ],
  imageSrc: "/brand/photos/practice-2.jpg",
  imageAlt: "Práctica de pilates en estudio con luz natural",
} as const;

export const pillars = {
  eyebrow: "El Método",
  title: "Tres pilares, un mismo cuerpo.",
  intro:
    "La plataforma se organiza en tres bloques complementarios. Juntos, crean un trabajo completo: fuerza, movilidad y regulación.",
  items: [
    {
      id: "flow",
      symbol: "01",
      glyph: "🌀",
      name: "ANAMA Flow",
      logo: "/brand/logos/anama-pilates.svg",
      illustration: "/brand/illustrations/ilus-a.svg",
      description:
        "Un entrenamiento fluido que combina pilates y movimiento consciente en secuencias dinámicas y continuas. Trabajamos el cuerpo completo a través de transiciones, planchas y activación profunda del core, manteniendo siempre la conexión con la respiración.",
      tags: ["Fuerza", "Core", "Resistencia"],
    },
    {
      id: "barre",
      symbol: "02",
      glyph: "🎀",
      name: "ANAMA Barré",
      logo: "/brand/logos/anama-studio.svg",
      illustration: "/brand/illustrations/ilus-c.svg",
      description:
        "Una práctica basada en movimientos inspirados en el ballet, adaptados a todo tipo de público. Líneas elegantes y controladas, con foco en piernas, postura, brazos y core, sostenidas en pulsos y repeticiones.",
      tags: ["Tono", "Postura", "Control"],
    },
    {
      id: "ritual",
      symbol: "03",
      glyph: "🌙",
      name: "ANAMA Ritual",
      logo: "/brand/logos/anama-ritual.svg",
      illustration: "/brand/illustrations/ilus-e.svg",
      description:
        "Un espacio para bajar el ritmo y reconectar con el cuerpo. Clases enfocadas en fascia, respiración y regulación del sistema nervioso. Liberar tensión, reducir inflamación y mejorar movilidad.",
      tags: ["Fascia", "Respiración", "Regulación"],
    },
  ],
} as const;

export const anna = {
  eyebrow: "¿Quién soy?",
  title: "Soy Anna, creadora de ANAMA.",
  paragraphs: [
    "Desde pequeña quise ser bailarina. Dediqué muchos años al ballet clásico y a otras disciplinas, y ahí empezó mi relación con el movimiento y con el cuerpo. Con el tiempo, ese camino evolucionó hacia el pilates y hacia una forma más consciente de entrenar.",
    "Soy madre de dos hijos y, como muchas, he pasado por etapas en las que el cuerpo cambia, se carga o no responde igual. Nacida y criada en España, la vida me ha llevado a vivir fuera durante muchos años, primero en Alemania y ahora en México con mi familia.",
    "Por eso creé ANAMA: para que puedas moverte estés donde estés, con una práctica que te acompañe y se adapte a ti.",
  ],
  pullquote: "Quiero que vuelvas a confiar en tu cuerpo.",
  signature: "— Anna",
  imageSrc: "/brand/photos/anna-portrait.jpg",
  imageAlt: "Anna Sans, fundadora de ANAMA Studio",
} as const;

export const experience = {
  eyebrow: "La experiencia",
  title: "Pensado para acompañarte.",
  items: [
    {
      title: "Música",
      body: "Acompaña el ritmo de cada clase y sostiene el movimiento, ya sea en sesiones dinámicas o cuando toca bajar revoluciones.",
    },
    {
      title: "Materiales",
      body: "Pesas, polainas, pelota, bloque o aro: usados con intención, nunca por exceso.",
    },
    {
      title: "Adaptable",
      body: "Cada clase se ajusta a tu nivel y a tu energía. No hay una única forma de entrenar.",
    },
    {
      title: "Sin impacto",
      body: "Cuidamos articulaciones y alineación. Construir un cuerpo fuerte sin sobrecargarlo.",
    },
  ],
} as const;

export const gallery = {
  eyebrow: "El estudio",
  title: "Un cuerpo fuerte, ligero y en equilibrio.",
  images: [
    { src: "/brand/photos/practice-1.jpg", alt: "Detalle de práctica de pilates" },
    { src: "/brand/photos/lifestyle-1.jpg", alt: "Lifestyle de movimiento consciente" },
    { src: "/brand/photos/studio-2.jpg", alt: "Estudio ANAMA, ambiente de luz cálida" },
    { src: "/brand/photos/practice-3.jpg", alt: "Movimiento de barré" },
    { src: "/brand/photos/lifestyle-2.jpg", alt: "Editorial de práctica diaria" },
    { src: "/brand/photos/practice-4.jpg", alt: "Trabajo de core y respiración" },
  ],
} as const;

export const cta = {
  eyebrow: "Únete",
  title: "Empieza tu práctica.",
  body: "Bienvenida a un espacio donde la exigencia convive con el cuidado. Reconecta, mueve y respira.",
  primary: { label: "Comienza ahora", href: "#" },
  secondary: { label: "Escríbeme", href: "mailto:hola@anama.studio" },
} as const;

export const footer = {
  tagline: "Movimiento con intención.",
  copyright: `© ${new Date().getFullYear()} ANAMA Studio · Anna Sans`,
  links: [
    { label: "Instagram", href: "https://www.instagram.com/anama.studio" },
    { label: "Email", href: "mailto:hola@anama.studio" },
  ],
} as const;

export const content = {
  site,
  seo,
  nav,
  hero,
  manifesto,
  about,
  pillars,
  anna,
  experience,
  gallery,
  cta,
  footer,
};
