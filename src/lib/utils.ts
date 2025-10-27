import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function scrollToSection(
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
    callback?: () => void
) {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
        const navbar = document.querySelector("header");
        const navbarHeight = navbar ? navbar.offsetHeight - 16 : 100;

        const elementPosition = element.getBoundingClientRect().top;

        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
            top: id === "#home" ? 0 : offsetPosition,
            behavior: "smooth",
        });

        if (callback) callback();
    }
}
