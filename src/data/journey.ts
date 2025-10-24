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
            "I contributed to eFishery's mission by developing and optimizing internal tools that enhance operational efficiency across the upstream and downstream supply chain. My role involved designing, building, and maintaining web applications that support quality control for shrimp and fish businesses, a traceability app for international shrimp export, and procurement to fulfillment processes.\n\n### Key Contributions\n\n- Developed scalable enterprise-level web apps using React, TypeScript, Refine, Vitest, Chakra UI, and Ant Design, improving efficiency in supply chain operations.\n- Implemented modular architecture and reusable components to enhance maintainability and accelerate development.\n- Ensured 80%+ code coverage with unit tests using Vitest & React Testing Library, reducing production bugs.\n- Conducted self-testing based on QA test cases (Qase & Xray) to minimize defects before formal QA testing.\n- Integrated RESTful & GraphQL APIs for seamless frontend-backend communication.\n- Collaborated with DevOps to implement CI/CD pipelines (Bitbucket Pipelines) for faster, reliable deployments.\n- Optimized deployment scripts across staging, UAT, and production, ensuring smooth releases.\n- Worked closely with UI/UX designers, engineers (BE & TE), and product teams to build user-centric solutions.\n- Conducted design grooming sessions with UI/UX teams on Figma to ensure structured and intuitive implementations.\n- Partnered with QA engineers to address bugs, troubleshoot, and maintain app stability.\n- Conducted on-site testing and user interviews, along with UI/UX and product teams, practicing empathy-driven development to align solutions with real user needs.\n- Defined data structures and API specs with backend engineers for seamless integration.\n- Authored technical documentation (RFCs) for maintainability and knowledge sharing.\n- Mentored junior developers and facilitated knowledge-sharing sessions to foster team growth.",
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
            "Pahamify is an education technology company that provides high-quality content, including hundreds of premium animated learning videos, quizzes, and summaries. By combining filmmaking, gamification, and an intuitive user experience, Pahamify makes learning more engaging for Indonesian students.\n\nAs part of Pahamify’s tech squad, we developed e-learning applications for mobile (iOS & Android) and desktop, helping students discover their learning potential in a fun and interactive way.\n\n### Mobile Apps (React Native)\n- Developed and maintained Pahamify’s Live Class, one of its core products for online learning and teaching, including Zoom SDK integration.\n- Revamped user registration and login flow while refactoring legacy code.\n- Integrated Google Payments, enabling transactions via mobile credit.\n- Implemented Firebase Crashlytics for real-time error monitoring and debugging.\n- Contributed to the PEGASUS project (adaptive learning feature) by developing the MVP for mobile apps.\n- Designed and developed an in-app tutorial (user tour) to guide new users.\n- Revamped the user profile update form for a better experience.\n\n### Desktop Apps (Electron + React)\n- Developed and maintained Pahamify’s Live Class on desktop, integrating Zoom SDK for seamless virtual learning.\n- Refactored and optimized the codebase, improving maintainability and performance.\n- Managed app releases and updates, ensuring smooth deployments.\n\n### Web Apps (React.js & Next.js)\n- Built a web-based Zoom SDK integration to support Desktop App redirection.\n- Developed the RIASEC Test web platform in collaboration with LearningX (by LG) using Next.js and Tailwind CSS.",
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
