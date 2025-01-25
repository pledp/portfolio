import Image from "next/image";
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import StaggeredGrid from "@/components/DotGrid";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="relative flex items-center flex-col mx-auto">
      <Hero />
      <Projects />
      <Footer />
    </main>
    
  );
}
