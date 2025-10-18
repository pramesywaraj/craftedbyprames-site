import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/Hero";
import ToolsSection from "@/components/sections/Tools";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-8">
        <HeroSection />
        <ToolsSection />
      </main>
    </>
  );
}
