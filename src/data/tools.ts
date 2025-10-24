export interface Tool {
    icon: string; // SVG filename or path
    name: string;
    appear_time: number; // delay in ms
}

export const tools: Tool[] = [
    { icon: "/icons/javascript.svg", name: "Javascript", appear_time: 0 },
    { icon: "/icons/typescript.svg", name: "Typescript", appear_time: 100 },
    { icon: "/icons/sql.svg", name: "SQL", appear_time: 200 },
    { icon: "/icons/react.svg", name: "React", appear_time: 300 },
    { icon: "/icons/nextjs.svg", name: "Next", appear_time: 400 },
    { icon: "/icons/react-native.svg", name: "React Native", appear_time: 500 },
    { icon: "/icons/vue.svg", name: "Vue", appear_time: 600 },
    { icon: "/icons/zustand.svg", name: "Zustand", appear_time: 700 },
    { icon: "/icons/redux.svg", name: "Redux", appear_time: 800 },
    { icon: "/icons/react-query.svg", name: "Tanstack", appear_time: 900 },
    { icon: "/icons/nestjs.svg", name: "NestJS", appear_time: 1000 },
    { icon: "/icons/prisma.svg", name: "Prisma", appear_time: 1100 },
    { icon: "/icons/typeorm.svg", name: "TypeORM", appear_time: 1200 },
    { icon: "/icons/vite.svg", name: "Vite", appear_time: 1300 },
    { icon: "/icons/webpack.svg", name: "Webpack", appear_time: 1400 },
    { icon: "/icons/jest.svg", name: "Jest", appear_time: 1500 },
    { icon: "/icons/vitest.svg", name: "Vitest", appear_time: 1600 },
];
