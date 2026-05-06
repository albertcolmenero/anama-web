import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { seo, site } from "@/lib/content";

const timesNow = localFont({
  src: [
    { path: "../../public/fonts/times-now-extralight.otf", weight: "200", style: "normal" },
    { path: "../../public/fonts/times-now-light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/times-now-semilight-italic.otf", weight: "400", style: "italic" },
  ],
  variable: "--font-times-now",
  display: "swap",
});

const bonVivant = localFont({
  src: [{ path: "../../public/fonts/bon-vivant.ttf", weight: "400", style: "italic" }],
  variable: "--font-bon-vivant",
  display: "swap",
});

const sweetSans = localFont({
  src: [
    { path: "../../public/fonts/sweet-sans-light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/sweet-sans-medium.otf", weight: "500", style: "normal" },
  ],
  variable: "--font-sweet-sans",
  display: "swap",
});

const suisse = localFont({
  src: [
    { path: "../../public/fonts/suisse-light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/suisse-regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-suisse",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: seo.title, template: "%s · ANAMA" },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: site.founder }],
  creator: site.founder,
  alternates: { canonical: "/" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/",
    siteName: site.name,
    images: [{ url: seo.ogImage, width: 1200, height: 1500, alt: "ANAMA · Anna Sans" }],
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#954627",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: "ANAMA Studio",
    description: seo.description,
    url: site.url,
    logo: `${site.url}/brand/logos/anama-principal.svg`,
    image: `${site.url}${seo.ogImage}`,
    sameAs: [site.instagram],
    founder: { "@type": "Person", name: site.founder, jobTitle: "Pilates & Barré Instructor" },
    areaServed: "Online",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.founder,
    jobTitle: "Pilates & Barré Instructor",
    worksFor: { "@type": "Organization", name: "ANAMA Studio" },
    sameAs: [site.instagram],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "es",
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={site.lang}
      className={`${timesNow.variable} ${bonVivant.variable} ${sweetSans.variable} ${suisse.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-clay">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
