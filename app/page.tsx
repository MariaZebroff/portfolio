import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="m-0 p-0">
        <Hero />
        <div
          aria-hidden
          className="box-border h-[9rem] w-full border-b border-[#707070]/20 bg-cream md:h-[4.375rem]"
        />
      </main>
    </>
  );
}
