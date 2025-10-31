import type { Metadata, Viewport } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
    variable: "--font-public-sans",
    subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.craftedbyprames.dev";
const siteName = "craftedByPrames";
const siteDescription =
    "Hi! My name is Prames, and i'm a Software Engineer with 5+ years of experience in web and mobile development.";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: "#FFD93D",
};

export const metadata: Metadata = {
    title: {
        default: "craftedByPrames | Pramesywara Jembar's Works",
        template: `${siteName} | %s`,
    },
    description: siteDescription,
    keywords: [
        "Pramesywara Jembar",
        "Software Engineer",
        "Frontend",
        "Frontend Engineer",
        "Web Developer",
        "Mobile Developer",
        "Mobile Engineer",
        "UI Engineer",
        "Full Stack",
        "JavaScript",
        "TypeScript",
        "React",
        "React Native",
        "Next.js",
        "Vue.js",
        "NestJS",
    ],
    authors: [{ name: "Pramesywara Jembar", url: "https://github.com/pramesywaraj" }],
    creator: "Pramesywara Jembar",
    publisher: "craftedByPrames",
    category: "Portfolio",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: baseUrl,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: baseUrl,
        siteName,
        title: "craftedByPrames | Pramesywara Jembar's Works",
        description: siteDescription,
        emails: ["jembarpanalar21@gmail.com"],
        images: [
            {
                url: `${baseUrl}/craftedbyprames-og.png`,
                width: 1200,
                height: 630,
                alt: "craftedByPrames - Pramesywara Jembar's Works",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        site: "@panalaaar",
        creator: "@panalaaar",
        title: "craftedByPrames - Pramesywra Jembar's Works",
        description: siteDescription,
        images: [`${baseUrl}/craftedbyprames-og.png`],
    },
    applicationName: siteName,
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: siteName,
    },
    metadataBase: new URL(baseUrl),
    verification: {
        google: "eKmtKPXx3IbCWNkIIM2F1keJNyWq3l5HIGXGx4GgFqc", // Get from Google Search Console
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${publicSans.variable} antialiased mx-auto w-full h-fit`}>
                {children}
            </body>
        </html>
    );
}
