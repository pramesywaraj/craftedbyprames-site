import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center justify-center border-2 border-border px-2.5 py-0.5 text-xs font-base w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] overflow-hidden",
    {
        variants: {
            variant: {
                default: "text-main-foreground",
                neutral: "text-foreground",
            },
            color: {
                default: "bg-main",
                neutral: "bg-secondart-background",
                brand1: "bg-brand-1",
                brand2: "bg-brand-2",
                brand3: "bg-brand-3",
            },
        },
        defaultVariants: {
            variant: "default",
            color: "default",
        },
    }
);

function Badge({
    className,
    variant,
    color,
    asChild = false,
    ...props
}: React.ComponentProps<"span"> &
    VariantProps<typeof badgeVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "span";

    return (
        <Comp
            data-slot="badge"
            className={cn(badgeVariants({ variant, color }), className)}
            {...props}
        />
    );
}

export { Badge, badgeVariants };
