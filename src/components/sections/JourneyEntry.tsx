"use client"

import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatUTCDateRange } from "@/lib/date";


interface JourneyEntryProps {
  title: string;
  company: string;
  dateStart: string;
  dateEnd: string;
  employmentType: string;
  location: string;
  isBordered?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

function JourneyEntry({ 
  title, 
  company, 
  dateStart,
  dateEnd, 
  employmentType, 
  location,
  isBordered = false,
  isSelected = false,
  onClick,
}: JourneyEntryProps) {
    const displayDuration = formatUTCDateRange(dateStart, dateEnd);

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex flex-col gap-3.5 p-4 hover:bg-gray-200 cursor-pointer",
        isBordered ? "border-b border-dashed border-border" : "",
        isSelected ? "bg-gray-200" : ""
      )}
    >
      {/* Job Title and Company */}
      <div className="flex justify-between">
        <p className="text-xl min-w-[60%] font-bold text-foreground">{title}</p>
        <span className="text-md font-bold text-foreground">{`@ ${company}`}</span>
      </div>

      {/* Duration and Employment Type */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">{displayDuration}</span>
        <span className="text-sm text-muted-foreground">•</span>
        <span className="text-sm text-muted-foreground">{employmentType}</span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4 text-foreground" />
        <span className="text-sm text-foreground">{location}</span>
      </div>
    </div>
  );
}

export default JourneyEntry;