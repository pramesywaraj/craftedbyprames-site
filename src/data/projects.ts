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
            "A progressive web app (PWA) for real-time professional networking and mentoring. Features instant messaging using WebSockets, enabling professionals to connect, discuss, and collaborate seamlessly in their respective fields.",
        tech_stack: ["TypeScript", "Vue.js", "NestJS", "PostgreSQL", "TypeORM", "Socket.io"],
        github_url: "https://github.com/pramesywaraj/chonnect-frontend-vue",
        image_url: "",
    },
    {
        title: "Tanya Notaris",
        description:
            "A responsive legal service web application built with mobile-first approach. Enables users to access notary services conveniently from both smartphones and desktops with seamless user experience.",
        tech_stack: ["React", "Next.js", "Tailwind CSS", "SWR", "Laravel"],
        github_url: "https://github.com/pramesywaraj/tanya-notaris-app",
        live_url: "https://tanyanotaris-demo.vercel.app/",
        image_url: "",
    },
    {
        title: "Bieon App",
        description:
            "A mobile application for measuring salt quality parameters including NaCl levels, whiteness, water content, and iodine. Features real-time IoT integration, printable results, and web-based monitoring system for quality control.",
        tech_stack: ["React", "React Native"],
        github_url: "https://github.com/pramesywaraj/bieonapp",
        live_url: "https://play.google.com/store/apps/details?id=id.bieon.app",
        image_url: "",
    },
    {
        title: "Cleansheet",
        description:
            "An on-demand household cleaning service platform that simplifies booking professional cleaning services. Built with responsive design to provide optimal experience across all devices.",
        tech_stack: ["React", "React Hooks", "Sass", "Lumen"],
        github_url: "https://github.com/pramesywaraj/cleansheet_web",
        live_url: "https://cleansheet-demo-project.vercel.app/",
        image_url: "",
    },
];
