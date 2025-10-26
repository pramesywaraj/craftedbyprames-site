"use client";

import { LucideMenu, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { cn } from "@/lib/utils";

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

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            const navbar = document.querySelector("header");
            const navbarHeight = navbar ? navbar.offsetHeight + 16 : 100;

            const elementPosition = element.getBoundingClientRect().top;

            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }

            window.scrollTo({
                top: id === "#home" ? 0 : offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <header
            className={cn(
                "navbar-container z-50 p-4 md:px-12 md:py-3 lg:px-16 lg:py-3.5 bg-main border-2 border-border flex items-center justify-between transition-all duration-300 shadow-mobile md:shadow-shadow",
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
                    className={cn("w-12 md:w-20 h-auto", isScrolled ? "md:w-16" : "")}
                    priority
                />
            </Link>
            <nav aria-label="Primary" className="hidden md:block">
                <ul className="flex items-center gap-6">
                    <li>
                        <Link
                            href="#home"
                            onClick={(e) => scrollToSection(e, "#home")}
                            className="link-lift font-semibold"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#journey"
                            onClick={(e) => scrollToSection(e, "#journey")}
                            className="link-lift font-semibold"
                        >
                            Journey
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#projects"
                            onClick={(e) => scrollToSection(e, "#projects")}
                            className="link-lift font-semibold"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#tools"
                            onClick={(e) => scrollToSection(e, "#tools")}
                            className="link-lift font-semibold"
                        >
                            Tools
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#contacts"
                            onClick={(e) => scrollToSection(e, "#contacts")}
                            className="link-lift font-semibold"
                        >
                            Let&apos;s Connect!
                        </Link>
                    </li>
                    <Button className="bg-brand-3">My Resume</Button>
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
                            onClick={(e) => scrollToSection(e, "#home")}
                            className="link-lift font-semibold"
                        >
                            Home
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link
                            href="#journey"
                            onClick={(e) => scrollToSection(e, "#journey")}
                            className="link-lift font-semibold"
                        >
                            Journey
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link
                            href="#projects"
                            onClick={(e) => scrollToSection(e, "#projects")}
                            className="link-lift font-semibold"
                        >
                            Projects
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link
                            href="#tools"
                            onClick={(e) => scrollToSection(e, "#tools")}
                            className="link-lift font-semibold"
                        >
                            Tools
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link
                            href="#contacts"
                            onClick={(e) => scrollToSection(e, "#contacts")}
                            className="link-lift font-semibold"
                        >
                            Let&apos;s Connect!
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Button className="bg-brand-3">My Resume</Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}
