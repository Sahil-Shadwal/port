import Hero from "@/components/Hero";
// import { Header } from "@/sections/Header";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  return (
    <div className="bg-slate-950">
      {/* <Header /> */}
      <Hero />
      {/* <TapeSection /> */}
      <ProjectsSection />
      <TapeSection />
    </div>
  );
}
