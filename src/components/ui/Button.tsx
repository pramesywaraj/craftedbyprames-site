"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "cursor-pointer inline-flex items-center justify-center whitespace-nowrap font-base ring-offset-white transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "text-main-foreground bg-main border-2 border-border shadow-shadow-button hover:translate-x-button-boxShadowX hover:translate-y-button-boxShadowY hover:shadow-none active:translate-x-button-boxShadowX active:translate-y-button-boxShadowY active:shadow-none",
                noShadow: "text-main-foreground bg-main border-2 border-border",
                neutral:
                    "bg-secondary-background text-foreground border-2 border-border shadow-shadow-button hover:translate-x-button-boxShadowX hover:translate-y-button-boxShadowY hover:shadow-none active:translate-x-button-boxShadowX active:translate-y-button-boxShadowY active:shadow-none",
                reverse:
                    "text-main-foreground bg-main border-2 border-border hover:translate-x-button-reverseBoxShadowX hover:translate-y-button-reverseBoxShadowY hover:shadow-shadow-button active:translate-x-button-reverseBoxShadowX active:translate-y-button-reverseBoxShadowY active:shadow-shadow-button",
            },
            size: {
                default: "px-4 py-3",
                sm: "h-9 px-3",
                lg: "h-11 px-8",
                icon: "p-2",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

function LinkButton({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"a"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "a";

    return (
        <Comp
            data-slot="a"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Button, LinkButton, buttonVariants };
