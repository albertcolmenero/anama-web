import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Anna from "@/components/Anna";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <About />
        <Pillars />
        <Anna />
        <Experience />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
