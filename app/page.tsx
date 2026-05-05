import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="m-0 p-0">
        <Hero />
        <div
          aria-hidden
          className="box-border h-[9rem] w-full border-b border-[#707070]/20 bg-cream md:h-[7.375rem]"
        />
        <About />
        <Work />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
