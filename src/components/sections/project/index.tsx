import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/Carousel";
import { Section, SectionContainer, SectionTitle } from "@/components/ui/SectionComp";
import { PROJECT_ITEMS } from "@/data/projects";

import ProjectCard from "./ProjectCard";

function ProjectSection() {
    return (
        <Section id="projects" ariaLabelledBy="project-title">
            <SectionContainer>
                <SectionTitle>Things I&apos;ve Built 📦</SectionTitle>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="py-4">
                        {PROJECT_ITEMS.map((item, index) => (
                            <CarouselItem
                                key={`project-${index + 1}`}
                                className="md:basis-1/2 lg:basis-1/3"
                            >
                                <ProjectCard
                                    title={item.title}
                                    image={item.image_url}
                                    description={item.description}
                                    techStack={item.tech_stack}
                                    githubUrl={item.github_url}
                                    liveUrl={item.live_url}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="p-4 flex gap-4 justify-end">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </SectionContainer>
        </Section>
    );
}

export default ProjectSection;
