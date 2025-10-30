"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/components/ui/Resizeable";
import { ScrollArea, ScrollBar } from "@/components/ui/ScrollArea";
import { IJourney, JOURNEY_ITEMS } from "@/data/journey";

import JourneyEntry from "./JourneyEntry";

function JourneyTable() {
    const [selectedJourney, setSelectedJourney] = useState<IJourney>(JOURNEY_ITEMS[0]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 744);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const onSelectJourney = (journey: IJourney) => {
        setSelectedJourney(journey);
    };

    return (
        <Card className="p-0 min-h-[80vh]">
            <ResizablePanelGroup
                direction={isMobile ? "vertical" : "horizontal"}
                className="flex-1 max-h-[90vh] md:max-h-[80vh]"
            >
                <ResizablePanel className="flex flex-col" minSize={30} defaultSize={40}>
                    <div className="p-4 border-border border-b-2">
                        <p className="font-semibold">Timeline</p>
                    </div>
                    <ScrollArea>
                        {JOURNEY_ITEMS.map((journey) => (
                            <JourneyEntry
                                key={journey.id}
                                title={journey.title}
                                company={journey.company}
                                dateStart={journey.date_start}
                                dateEnd={journey.date_end}
                                employmentType="Full-time"
                                location="Bandung, Indonesia (Remote)"
                                isSelected={journey.id === selectedJourney.id}
                                isBordered
                                onClick={() => onSelectJourney(journey)}
                            />
                        ))}
                    </ScrollArea>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel className="flex flex-col" defaultSize={60}>
                    <ScrollArea className="flex-1 p-4 prose max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {selectedJourney.content}
                        </ReactMarkdown>
                    </ScrollArea>
                    <ScrollArea className="w-full border-border border-t-2 whitespace-nowrap">
                        <div className="flex gap-2.5 p-4 w-max">
                            {selectedJourney.tech_stack.map((item, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <Badge
                                        key={`tech-${index + 1}`}
                                        color={isEven ? "brand2" : "brand3"}
                                        className="font-bold"
                                    >
                                        {item}
                                    </Badge>
                                );
                            })}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </ResizablePanel>
            </ResizablePanelGroup>
        </Card>
    );
}

export default JourneyTable;
