"use client";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React from "react";

import { cn } from "@/lib/utils";

type ScrollAreaProps = React.ComponentProps<typeof ScrollAreaPrimitive.Root> & {
    nativeOnIOS?: boolean;
};

function isIOS() {
    if (typeof navigator === "undefined") return false;
    const userAgent = navigator.userAgent || "";

    return (
        /iP(hone|ad|od)/i.test(userAgent) ||
        (/\bMacintosh\b/i.test(userAgent) && "ontouchend" in window)
    );
}

function ScrollArea({ className, children, nativeOnIOS = true, ...props }: ScrollAreaProps) {
    const isUseNative = nativeOnIOS && isIOS();

    if (isUseNative) {
        return (
            <div
                data-slot="scroll-area-native"
                className={cn(
                    "relative h-full w-full overflow-auto [-webkit-overflow-scrolling:touch] overscroll-contain",
                    className
                )}
            >
                {children}
            </div>
        );
    }

    return (
        <ScrollAreaPrimitive.Root
            data-slot="scroll-area"
            className={cn("relative overflow-hidden", className)}
            {...props}
        >
            <ScrollAreaPrimitive.Viewport className="h-full w-full font-base overflow-auto [-webkit-overflow-scrolling:touch] overscroll-contain">
                {children}
            </ScrollAreaPrimitive.Viewport>
            <ScrollBar />
            <ScrollAreaPrimitive.Corner />
        </ScrollAreaPrimitive.Root>
    );
}

function ScrollBar({
    className,
    orientation = "vertical",
    ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
    return (
        <ScrollAreaPrimitive.ScrollAreaScrollbar
            data-slot="scroll-area-scrollbar"
            orientation={orientation}
            className={cn(
                "flex touch-none select-none transition-colors",
                orientation === "vertical" && "h-full w-3 border-l border-l-transparent p-[1px]",
                orientation === "horizontal" &&
                    "h-2.5 flex-col border-t border-t-transparent p-[1px]",
                className
            )}
            {...props}
        >
            <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 bg-border w-full" />
        </ScrollAreaPrimitive.ScrollAreaScrollbar>
    );
}

export { ScrollArea, ScrollBar };
