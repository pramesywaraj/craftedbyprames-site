"use client";

import { LucideMenu, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { LinkButton, Button } from "@/components/ui/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { RESUME_URL } from "@/config/app";
import { cn, scrollToSection } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 100) {
                setIsScrolled(false);
                setIsVisible(true);
            } else {
                setIsScrolled(true);

                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const onScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        scrollToSection(e, id);

        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={cn(
                "navbar-container z-50 p-3 md:px-12 md:py-3 lg:px-16 lg:py-3.5 bg-main border-2 border-border flex items-center justify-between transition-all duration-300 shadow-mobile md:shadow-shadow",
                isScrolled
                    ? "sticky translate-y-0 top-0 backdrop-blur-sm w-full md:px-8 md:py-2"
                    : "",
                !isVisible && isScrolled && "transform -translate-y-[calc(100%+40px)]"
            )}
        >
            <Link href="/" className="inline-flex items-center gap-2 link-lift">
                <Image
                    src="/logo.svg"
                    alt="craftedByPrames logo"
                    width={85}
                    height={68}
                    className={cn(
                        "w-12 md:w-20 h-auto rotate-[-10deg]",
                        isScrolled ? "md:w-16" : ""
                    )}
                    priority
                />
            </Link>
            <nav aria-label="Primary" className="hidden md:block">
                <ul className="flex items-center gap-6">
                    <li>
                        <Link
                            href="#home"
                            onClick={(e) => onScrollToSection(e, "#home")}
                            className="link-lift font-semibold"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#journey"
                            onClick={(e) => onScrollToSection(e, "#journey")}
                            className="link-lift font-semibold"
                        >
                            Journey
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#projects"
                            onClick={(e) => onScrollToSection(e, "#projects")}
                            className="link-lift font-semibold"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#tools"
                            onClick={(e) => onScrollToSection(e, "#tools")}
                            className="link-lift font-semibold"
                        >
                            Tools
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#contacts"
                            onClick={(e) => onScrollToSection(e, "#contacts")}
                            className="link-lift font-semibold"
                        >
                            Let&apos;s Connect!
                        </Link>
                    </li>
                    <LinkButton
                        className="bg-brand-3 rotate-[-3deg]"
                        href={RESUME_URL}
                        target="_blank"
                    >
                        My Resume
                    </LinkButton>
                </ul>
            </nav>

            <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <DropdownMenuTrigger asChild className="md:hidden">
                    <Button size="icon">
                        {isMobileMenuOpen ? <XIcon size={16} /> : <LucideMenu size={16} />}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-fit">
                    <DropdownMenuItem>
                        <Link
                            href="#home"
                            onClick={(e) => onScrollToSection(e, "#home")}
                            className="link-lift font-semibold"
                        >
                            Home
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link
                            href="#journey"
                            onClick={(e) => onScrollToSection(e, "#journey")}
                            className="link-lift font-semibold"
                        >
                            Journey
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link
                            href="#projects"
                            onClick={(e) => onScrollToSection(e, "#projects")}
                            className="link-lift font-semibold"
                        >
                            Projects
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link
                            href="#tools"
                            onClick={(e) => onScrollToSection(e, "#tools")}
                            className="link-lift font-semibold"
                        >
                            Tools
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link
                            href="#contacts"
                            onClick={(e) => onScrollToSection(e, "#contacts")}
                            className="link-lift font-semibold"
                        >
                            Let&apos;s Connect!
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <LinkButton
                            className="bg-brand-3 rotate-[-3deg]"
                            href={RESUME_URL}
                            target="_blank"
                        >
                            My Resume
                        </LinkButton>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}
