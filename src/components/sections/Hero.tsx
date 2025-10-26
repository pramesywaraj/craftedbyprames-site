import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/SectionComp";

export default function HeroSection() {
    return (
        <Section id="home" ariaLabelledBy="home-title" className="min-h-[90vh] flex flex-col">
            <div className="flex flex-col-reverse md:flex-row items-center gap-4 flex-1">
                <div className="flex flex-col gap-3 md:gap-5 flex-1">
                    <p className="text-xl md:text-3xl animate-fade-in [animation-delay:0ms] motion-reduce:animate-none">
                        Hello there! 👊 🙌 👋
                    </p>
                    <h1 className="text-2xl md:text-4xl animate-fade-in-up [animation-delay:400ms] motion-reduce:animate-none">
                        I’m <span className="font-bold">Pramesywara Jembar,</span>
                    </h1>
                    <p className="text-justify animate-fade-in-up [animation-delay:800ms] motion-reduce:animate-none">
                        a Software Engineer with over{" "}
                        <span className="font-bold">5 years of experience</span> developing web and
                        mobile applications across fintech, edtech, and aquaculture sectors. I love
                        crafting intuitive and human-centered digital experiences with empathy and
                        creativity — building products that not only work, but also connect with
                        people in meaningful ways.
                    </p>
                    <div className="flex gap-2 md:gap-4 mt-3 animate-fade-in-up [animation-delay:1500ms] motion-reduce:animate-none">
                        <Button className="bg-brand-2">Let&apos;s Connect with Me!</Button>
                        <Button className="bg-brand-3">My Resume</Button>
                    </div>
                </div>
                <Image
                    src="/hero-illustration.svg"
                    alt="craftedByPrames hero illustration"
                    priority
                    className="max-w-[70vw] md:h-auto md:w-full md:max-w-[404px] animate-fade-in-up [animation-delay:400ms] motion-reduce:animate-none"
                    sizes="(min-width: 1120px) 404px, (min-width: 744px) 360px, 320px"
                    height={448}
                    width={404}
                />
            </div>
        </Section>
    );
}
