import Image from "next/image";

import { Card, CardContent } from "@/components/ui/Card";
import { Section, SectionContainer, SectionTitle } from "@/components/ui/SectionComp";
import { tools } from "@/data/tools";

export default function ToolsSection({}: React.ComponentProps<"div">) {
    return (
        <Section id="tools" ariaLabelledBy="tools-title">
            <SectionContainer>
                <SectionTitle>Tools of the Trade 🛠</SectionTitle>
                <Card>
                    <CardContent className="flex flex-wrap justify-center gap-8">
                        {tools.map((tool) => (
                            <div
                                key={tool.name}
                                className="flex gap-2 items-center justify-center flex-grow-0 flex-shrink w-[calc(25%-0.75rem)] md:w-[calc(20%-0.8rem)] lg:w-[calc(16.666%-0.83rem)] animate-fade-in-up motion-reduce:animate-none"
                                style={{ animationDelay: `${tool.appear_time}ms` }}
                            >
                                <Image
                                    src={tool.icon}
                                    alt={`${tool.name} logo`}
                                    width={32}
                                    height={32}
                                    className="h-8 w-8"
                                />
                                <span>{tool.name}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </SectionContainer>
        </Section>
    );
}
