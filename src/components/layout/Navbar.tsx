import Link from "next/link";
import Image from "next/image";

import { Button } from '@/components/ui/Button';

export default function Navbar() {
    return (
        <header className="px-16 py-3.5 bg-main border-2 border-border shadow-shadow flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 link-lift">
                <Image src="/logo.svg" alt="craftedByPrames logo" width={85} height={68} priority />
            </Link>
            <nav aria-label="Primary">
                <ul className="flex items-center gap-6">
                    <li><Link href="#home" className="link-lift font-semibold">Home</Link></li>
                    <li><Link href="#journey" className="link-lift font-semibold">Journey</Link></li>
                    <li><Link href="#projects" className="link-lift font-semibold">Projects</Link></li>
                    <li><Link href="#tools" className="link-lift font-semibold">Tools</Link></li>
                    <li><Link href="#contacts" className="link-lift font-semibold">Let&apos;s Connect!</Link></li>
                    <Button className="bg-brand-3">My Resume</Button>
                </ul>
            </nav>
        </header>
    )
}