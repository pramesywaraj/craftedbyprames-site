interface IProject {
    title: string;
    description: string;
    tech_stack: string[];
    github_url?: string;
    live_url?: string;
    image_url?: string;
}

export const PROJECT_ITEMS: IProject[] = [
    {
        title: "Chonnect",
        description:
            "A real-time progressive web app (PWA) that empowers professionals to connect, chat, and collaborate seamlessly through instant messaging.",
        tech_stack: ["TypeScript", "Vue.js", "NestJS", "PostgreSQL", "TypeORM", "Socket.io"],
        github_url: "https://github.com/pramesywaraj/chonnect-frontend-vue",
        image_url: "/projects/chonnect.png",
    },
    {
        title: "Tanya Notaris",
        description:
            "A mobile-first responsive web application that provides seamless access to notary and legal services across smartphones and desktops.",
        tech_stack: ["React", "Next.js", "Tailwind CSS", "SWR", "Laravel"],
        github_url: "https://github.com/pramesywaraj/tanya-notaris-app",
        live_url: "https://tanyanotaris-demo.vercel.app/",
        image_url: "/projects/tanya-notaris.svg",
    },
    {
        title: "Bieon App",
        description:
            "A mobile app integrated with IoT for real-time measurement of salt quality parameters including NaCl levels, whiteness, moisture, and iodine with printable results and a web-based monitoring system for quality control.",
        tech_stack: ["React", "React Native"],
        github_url: "https://github.com/pramesywaraj/bieonapp",
        live_url: "https://play.google.com/store/apps/details?id=id.bieon.app",
        image_url: "/projects/bieon.svg",
    },
    {
        title: "CleaningServ",
        description:
            "An on-demand household cleaning platform that streamlines booking professional cleaning services with a responsive design for an optimal experience across all devices.",
        tech_stack: ["React", "React Hooks", "Sass", "Lumen"],
        github_url: "https://github.com/pramesywaraj/cleansheet_web",
        live_url: "https://cleansheet-demo-project.vercel.app/",
        image_url: "",
    },
];
