import { cn } from "@/lib/utils";

interface SectionProp extends React.ComponentProps<"div"> {
    id: string;
    ariaLabelledBy: string;
}

export function SectionContainer({ children }: React.ComponentProps<"div">) {
    return <div className="w-full flex flex-col gap-6">{children}</div>;
}

export function SectionTitle({ children }: React.ComponentProps<"div">) {
    return (
        <div className="link-lift w-full md:w-1/2 py-6 bg-main border-[3px] border-border shadow-shadow text-center">
            <h2>{children}</h2>
        </div>
    );
}

export function Section({ children, className, ariaLabelledBy, id, ...props }: SectionProp) {
    return (
        <section
            id={id}
            aria-labelledby={ariaLabelledBy}
            className={cn("flex-1 py-8", className)}
            {...props}
        >
            {children}
        </section>
    );
}
