import Image from "next/image";

import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    image?: string;
    githubUrl?: string;
    liveUrl?: string;
}

function ProjectCard({
    title,
    description,
    techStack,
    image,
    githubUrl,
    liveUrl,
}: ProjectCardProps) {
    return (
        <Card className="p-0 overflow-hidden max-w-sm">
            {/* Image placeholder */}
            <div className="w-full aspect-video bg-secondary-background border-b-2 border-border">
                {image ? (
                    <div className="relative w-full h-full">
                        <Image src={image} alt={title} fill className="object-cover" />
                    </div>
                ) : (
                    <div className="w-full h-full" />
                )}
            </div>

            {/* Title, Description, Tech Stack, and CTA Container */}
            <div className="px-4 pb-4 flex flex-col gap-4">
                {/* Title and Description */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-heading font-bold">{title}</h3>
                    <p className="text-sm text-foreground leading-relaxed line-clamp-4">
                        {description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => {
                        const colors = ["brand1", "brand2", "brand3"] as const;
                        const colorIndex = index % colors.length;
                        return (
                            <Badge key={tech} color={colors[colorIndex]}>
                                {tech}
                            </Badge>
                        );
                    })}
                </div>

                {/* Action Icons */}

                {(githubUrl || liveUrl) && (
                    <div className="flex mt-2 gap-3 justify-end">
                        {githubUrl && (
                            <LinkButton
                                size="icon"
                                className="bg-brand-1"
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View on Github"
                            >
                                <Image
                                    src="/icons/github.svg"
                                    alt={`${title} github repo`}
                                    width={24}
                                    height={24}
                                    className="w-6 h-auto"
                                />
                            </LinkButton>
                        )}
                        {liveUrl && (
                            <LinkButton
                                size="icon"
                                className="bg-brand-3"
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View on external link"
                            >
                                <Image
                                    src="/icons/link.svg"
                                    alt={`${title} site`}
                                    width={24}
                                    height={24}
                                    className="w-6 h-auto"
                                />
                            </LinkButton>
                        )}
                    </div>
                )}
            </div>
        </Card>
    );
}

export default ProjectCard;
