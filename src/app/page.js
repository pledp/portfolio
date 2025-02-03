import Image from "next/image";
import Hero from "@/components/Hero";
import Projects from "@/components/projects"
import StaggeredGrid from "@/components/dot-grid-component";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="relative flex items-center flex-col mx-auto">
      <Hero />
      <Projects />
      <Footer />
    </main>
    
  );
}
