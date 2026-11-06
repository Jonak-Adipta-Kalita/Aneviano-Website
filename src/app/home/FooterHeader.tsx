"use client";

import { useGSAP } from "@gsap/react";
import { useLoader } from "@src/components/loader/LoaderContext";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import { useRef } from "react";

export const NAV_ITEMS = [
    "Home",
    "Vision",
    "Works",
    "Team",
    "Contact",
] as const;

export default function FooterHeader() {
    const lenis = useLenis();
    const container = useRef(null);
    const { ready } = useLoader();

    useGSAP(
        () => {
            if (ready) return;

            gsap.fromTo(
                "#nav-btn",
                { y: 24, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.6,
                    ease: "power1.out",
                    stagger: 0.08,
                    delay: 0.4,
                }
            );
        },
        { scope: container }
    );

    return (
        <nav
            ref={container}
            className="bg-base fixed bottom-0 left-1/2 z-50 mb-5 flex max-w-fit -translate-x-1/2 items-center justify-evenly space-x-3 rounded-2xl p-3"
        >
            {NAV_ITEMS.map((nav) => (
                <button
                    key={nav}
                    type="button"
                    onClick={() =>
                        lenis?.scrollTo(`#${nav.toLowerCase()}`, {
                            lock: false,
                            duration: 1.2,
                        })
                    }
                    id="nav-btn"
                    className="font-orbitron invisible relative cursor-pointer touch-manipulation rounded-2xl px-2 py-3 text-sm text-gray-400 transition-colors select-none after:absolute after:right-5 after:bottom-2 after:left-5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:text-gray-200 hover:after:scale-x-100 md:px-5 md:text-2xl"
                >
                    {nav}
                </button>
            ))}
        </nav>
    );
}
