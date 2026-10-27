import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

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
            className={`${fontUbuntu.className} h-full antialiased`}
            suppressHydrationWarning
        >
            <body className="bg-bg text-fg flex min-h-full flex-col">
                {children}
            </body>
        </html>
    );
}
