import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/Hero";
import JourneySection from "@/components/sections/journey";
import ProjectSection from "@/components/sections/project";
import ToolsSection from "@/components/sections/Tools";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col gap-8 container-app">
                <HeroSection />
                <ToolsSection />
                <JourneySection />
                <ProjectSection />
            </main>
            <Footer />
        </>
    );
}
