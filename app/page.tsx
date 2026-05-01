import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="m-0 p-0">
        <Hero />
      </main>
    </>
  );
}
