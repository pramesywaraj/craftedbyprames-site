import Link from "next/link";
import Image from "next/image";

import { Button } from '@/components/ui/Button';

export default function Navbar() {
    return (
        <header className="px-16 py-3.5 bg-main border-2 border-border shadow-shadow flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2">
                <Image src="/logo.svg" alt="craftedByPrames logo" width={85} height={68} priority />
            </Link>
            <nav aria-label="Primary">
                <ul className="flex items-center gap-6">
                    <li><Link href="#home">Home</Link></li>
                    <li><Link href="#home">Journey</Link></li>
                    <li><Link href="#home">Projects</Link></li>
                    <li><Link href="#home">Tools</Link></li>
                    <li><Link href="#home">Let&apos;s Connect!</Link></li>
                    <Button className="bg-brand-3">My Resume</Button>
                </ul>
            </nav>
        </header>
    )
}