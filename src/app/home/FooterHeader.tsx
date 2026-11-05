"use client";

import { useLenis } from "lenis/react";

export const NAV_ITEMS = ["Home", "Team", "Vision", "Contact"];

export default function FooterHeader() {
    const lenis = useLenis();

    return (
        <div className="bg-base fixed bottom-0 left-1/2 z-50 mb-5 flex max-w-fit -translate-x-1/2 items-center justify-evenly space-x-3 rounded-2xl p-3">
            {NAV_ITEMS.map((nav) => (
                <p
                    onClick={() =>
                        lenis?.scrollTo(`#${nav.toLowerCase()}`, {
                            lock: false,
                            duration: 1.2,
                        })
                    }
                    key={nav}
                    className="font-orbitron cursor-pointer rounded-2xl px-5 py-3 text-2xl text-gray-400 underline-offset-4 transition-all ease-in-out hover:underline"
                >
                    {nav}
                </p>
            ))}
        </div>
    );
}
