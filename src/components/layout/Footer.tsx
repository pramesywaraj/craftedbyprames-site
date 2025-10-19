import Image from "next/image";
import Link from "next/link";

import { Button, LinkButton } from "@/components/ui/Button";
import FOOTER_CTA_LINKS from "@/data/footer-cta";

export default function Footer() {
  return (
    <footer id="contacts" className="bg-main p-4 border-4 border-border flex flex-col gap-10">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="flex-1 gap-8">
          <div className="flex flex-col gap-4">
            <h2>Let&apos;s Connect! 🙌</h2>
            <p className="text-foreground mb-6">
              I&apos;m always open to chat about frontend, design systems, or
              cool side projects. You can always find me here:
            </p>
          </div>
          <div className="flex gap-4">
            {FOOTER_CTA_LINKS.map((item) => (
                <LinkButton key={item.alt} size="icon" className={`${item.color}`} href={item.link} target="_blank">
                    <Image src={item.icon} alt={item.alt} width={32} height={32} className="w-8 h-auto" />
                </LinkButton>
            ))}
            
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
                <h2>Quick Links</h2>
                <nav aria-label="Footer navigation">
                    <ul className="flex flex-wrap gap-4 mb-6">
                        <li><Link href="#home" className="text-foreground link-lift">Home</Link></li>
                        <li><span className="text-foreground">•</span></li>
                        <li><Link href="#journey" className="text-foreground link-lift">Journey</Link></li>
                        <li><span className="text-foreground">•</span></li>
                        <li><Link href="#projects" className="text-foreground link-lift">Projects</Link></li>
                        <li><span className="text-foreground">•</span></li>
                        <li><Link href="#tools" className="text-foreground link-lift">Tools</Link></li>
                    </ul>
                </nav>
            </div>
          
            <Button className="bg-brand-3 w-fit">My Resume</Button>
        </div>
      </div>
      <div className="pt-6 border-t-2 border-dashed border-border">
          <p className="text-center text-foreground text-sm">
            <span className="font-bold">© 2025 Pramesywara Jembar</span> | Built with Next.js, TailwindCSS, and a lot of coffee ☕
          </p>
        </div>
    </footer>
  );
}
