import Image from "next/image";
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"


export default function Home() {
  return (
    <main className="relative bg-black-100 flex items-center flex-col overflow-hidden mx-auto">
      <Hero />
      <Projects />
      <Hero />
      <Hero />
    </main>
  );
}
