import "lenis/dist/lenis.css";
import type { Metadata } from "next";
import { Ubuntu, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@src/lib/utils";
import { ShootingStars } from "@src/components/ui/shooting-stars";
import { StarsBackground } from "@src/components/ui/stars-background";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fontUbuntu = Ubuntu({
    weight: "500",
});

export const metadata: Metadata = {
    title: "ανεβαίνω",
    description: "To go up",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={cn(
                "h-full",
                "antialiased",
                fontUbuntu.className,
                "font-sans",
                geist.variable
            )}
            suppressHydrationWarning
        >
            <body className="bg-base text-fg relative flex min-h-full flex-col">
                {children}
                <ShootingStars />
                <StarsBackground />
            </body>
        </html>
    );
}
