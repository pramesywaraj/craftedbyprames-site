export interface IJourney {
    id: string;
    content: string;
    title: string;
    company: string;
    employment_type: string;
    location: string;
    date_start: string;
    date_end: string;
    tech_stack: string[];
}

export const JOURNEY_ITEMS: IJourney[] = [
    {
        id: "exp-01",
        title: "Mid. Frontend Engineer",
        company: "eFishery",
        employment_type: "Full-time",
        location: "Bandung, West Java, Indonesia",
        date_start: "Sep 2022",
        date_end: "Feb 2025",
        content:
            "Applies frontend engineering expertise to design, develop, and optimize enterprise web applications supporting eFishery’s upstream and downstream aquaculture supply chain. Works in an Agile Scrum environment with two-week sprints, collaborating closely with cross-functional teams to iteratively deliver scalable, maintainable, and user-centered solutions. Focused on building tools that streamline operations across quality control, traceability, and procurement-to-fulfillment workflows while ensuring high code quality and smooth product delivery.\n\n**Key Contributions**\n - **Led optimization of field operation applications** by implementing lazy loading, code splitting, compression, and caching, which resulted in a **20% performance boost** and smoother user experience in low-connectivity areas.\n - **Implemented modular architecture and reusable components**, reducing development time and ensuring consistent UI patterns across internal tools.\n - **Improved code quality and system stability** through proactive testing practices using *Vitest*, *Jest*, and *React Testing Library*, achieving **over 80% test coverage** and reducing production defects.\n - **Collaborated with DevOps engineers** to establish **CI/CD pipelines via Bitbucket**, resulting in a **50% increase in deployment speed** and greater release reliability.\n - **Mentored junior frontend engineers** through 1-on-1 guidance, code reviews, and knowledge sharing to **improve overall team efficiency and code quality**.",

        tech_stack: [
            "React",
            "TypeScript",
            "Refine",
            "Vitest",
            "Jest",
            "Chakra UI",
            "Ant Design",
            "GraphQL",
            "Sonarqube",
            "Bitbucket Pipelines",
        ],
    },
    {
        id: "exp-02",
        title: "Mobile Engineer",
        company: "Pahamify",
        employment_type: "Full-time",
        location: "Bogor, West Java, Indonesia",
        date_start: "Sep 2020",
        date_end: "Aug 2022",
        content:
            "Pahamify is an education technology company that provides high-quality learning content — including hundreds of premium animated videos, quizzes, and summaries. By combining filmmaking, gamification, and intuitive user experience, Pahamify makes learning more engaging for Indonesian students.\n\nAs part of the tech squad, I helped develop and maintain Pahamify’s e-learning ecosystem across mobile (iOS & Android), desktop, and web platforms, helping students discover their learning potential through interactive digital experiences.\n\n📱 **Mobile Apps (React Native)**\n\n - Developed and maintained *Pahamify Live Class*, one of the company’s core online learning products, integrating Zoom SDK for seamless real-time sessions.  \n - Refactored and optimized the mobile app codebase, reducing technical debt and bundle size while improving load speed by **20%**.  \n- Integrated **Google Payments**, enabling smooth in-app transactions via mobile credit, improving payment success rates.  \n- Implemented **Firebase Crashlytics** and **Analytics** for real-time monitoring, debugging, and product insights — enabling faster issue detection and reducing bug-fix response time.  \n- Contributed to **PEGASUS (adaptive learning MVP)**, enabling personalized learning experiences for students.  \n- Developed **in-app tutorial (user tour)**, enhancing new-user experience and engagement.  \n\n💻 **Desktop Apps (Electron + React)**\n\n- Developed and maintained *Pahamify Live Class* for desktop, integrating Zoom SDK to ensure consistency with the mobile experience.  \n- Refactored and optimized the Electron app codebase, improving performance by **30%** and maintainability.  \n- Managed release cycles and updates, ensuring stable and smooth deployments.  \n\n🌐 **Web App (React.js & Next.js)**\n\n- Developed the **RIASEC Test** platform in collaboration with *LearningX (by LG)* using Next.js and Tailwind CSS.",
        tech_stack: [
            "React Native",
            "React",
            "Next.js",
            "Electron",
            "Redux",
            "Firebase",
            "Supabase",
            "Crashlytics",
            "Zoom SDK",
            "Google Payments API",
            "GraphQL",
            "TailwindCSS",
            "CleverTap",
        ],
    },
    {
        id: "exp-03",
        title: "Frontend Engineer",
        company: "Halofina",
        employment_type: "Freelance",
        location: "Bandung, West Java, Indonesia",
        date_start: "Mar 2020",
        date_end: "Apr 2020",
        content:
            "Halofina is an AI-based personal financial planning assistant application (robo-advisor) that helps users manage finances and build investment strategies.\n\nI joined the Halofina development team to develop features for its mobile application using Vue.js and its mobile app builder framework, Quasar. My responsibilities included crafting UI designs into functional components aligned with the app’s business flow and integrating several modules with APIs.",
        tech_stack: ["Vue.js", "Quasar Framework", "JavaScript", "Vuex", "API Integration"],
    },
    {
        id: "exp-04",
        title: "Frontend Engineer",
        company: "Codepanda",
        employment_type: "Self-employed",
        location: "Bogor",
        date_start: "Jan 2018",
        date_end: "Jun 2020",
        content:
            "Codepanda is a software house community created to help freshmen of the Computer Science program at IPB University gain hands-on experience in real-world software development. It also serves as a platform to bring digital technology ideas from concept to realization.\n\nAs a Frontend Engineer at Codepanda, I was responsible for designing and developing user interfaces that are visually appealing and provide great user experiences. I collaborated with other developers to build modern web applications using React.js, Angular, and Ionic frameworks.",
        tech_stack: [
            "React.js",
            "React Hooks",
            "Angular",
            "Ionic Framework",
            "JavaScript",
            "HTML5",
            "CSS",
            "Adobe XD",
        ],
    },
    {
        id: "exp-05",
        title: "Full Stack Engineer",
        company: "Domiqado.com",
        employment_type: "Self-employed",
        location: "Bogor, Indonesia",
        date_start: "2018-01",
        date_end: "2019-04",
        content:
            "Domiqado is an Indonesian online marketplace that provides customizable gift products for customers (*Domi’s*). The platform also offers an integrated gift-box feature so users can conveniently purchase gifts that are already packaged and ready to send.\n\nAs a **Full Stack Engineer**, I was responsible for maintaining and developing both frontend and backend systems using **Laravel**. I collaborated with a small team to deliver new features, optimize web performance, and ensure a seamless and consistent user experience across the platform.",
        tech_stack: ["Laravel", "PHP", "JavaScript", "HTML5", "CSS"],
    },
    {
        id: "exp-06",
        title: "Internship Trainee",
        company: "PT Kilang Pertamina Internasional",
        employment_type: "Internship",
        location: "Cilacap, Central Java, Indonesia",
        date_start: "2018-06",
        date_end: "2018-08",
        content:
            "Participated in an internship program organized by **IPB University** in collaboration with **PT. Kilang Pertamina Internasional RU-IV Cilacap**. During this internship, I contributed to the digitalization of internal processes by designing and developing web-based tools to support the company’s administrative and operational needs.\n\n**Key Contributions:**\n- Redesigned the official homepage of Pertamina RU IV Cilacap using **Figma**, improving its visual consistency and aligning it with Pertamina’s corporate branding.\n- Developed an internal admin web tool using **.NET Framework (C#)** to automate employee salary deduction fund management, enhancing data accuracy and operational efficiency.",
        tech_stack: [".NET Framework", "C#", "Figma", "Software Development"],
    },
];
