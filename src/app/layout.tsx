import "lenis/dist/lenis.css";
import type { Metadata } from "next";
import { Ubuntu, Geist, Orbitron } from "next/font/google";
import "./globals.css";
import { cn } from "@src/lib/utils";
import { StarsBackground } from "@src/components/ui/stars-background";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fontUbuntu = Ubuntu({
    weight: "500",
});

const fontOrbitron = Orbitron({
    subsets: ["latin"],
    variable: "--font-orbitron",
});

export const metadata: Metadata = {
    title: "ανεβιάνο",
    description: "To go up",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={cn(
                "scrollbar-hidden scrollbar-hover:scrollbar-thumb-neutral-700 h-full scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent",
                "antialiased",
                fontUbuntu.className,
                fontOrbitron.className,
                "font-sans",
                geist.variable
            )}
            suppressHydrationWarning
        >
            <body className="bg-base relative min-h-full">
                {children}
                <StarsBackground />
            </body>
        </html>
    );
}
