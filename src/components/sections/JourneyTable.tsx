"use client"

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";

import { Card } from "@/components/ui/Card";
import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/components/ui/Resizeable";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { Badge } from "@/components/ui/Badge";

import JourneyEntry from "./JourneyEntry";

import { IJourney, JOURNEY_ITEMS, } from '@/data/journey';

function JourneyTable() {
    const [selectedJourney, setSelectedJourney] = useState<IJourney>(JOURNEY_ITEMS[0]);

    const onSelectJourney = (journey: IJourney) => {
        setSelectedJourney(journey);
    };

    return (
      <Card className="p-0">
        <ResizablePanelGroup direction="horizontal" className="max-h-[50vh]">
          <ResizablePanel
            className="flex flex-col"
            minSize={30}
            defaultSize={40}
          >
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
          <ResizablePanel className="flex flex-col">
            <ScrollArea className="flex-1 p-4 prose max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {selectedJourney.content}
                </ReactMarkdown>
            </ScrollArea>
            <div className="flex gap-2.5 p-4 border-border border-t-2 flex-wrap">
                {selectedJourney.tech_stack.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <Badge key={`tech-${index + 1}`} color={isEven ? 'brand2' : 'brand3'}>{item}</Badge>
                    )
                })}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </Card>
    );
}

export default JourneyTable;