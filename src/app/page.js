import Image from "next/image";
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"


export default function Home() {
  return (
    <main className="relative flex items-center flex-col mx-auto">
      <Hero />
      <Projects />
    </main>
  );
}
