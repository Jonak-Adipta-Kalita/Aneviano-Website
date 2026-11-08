"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLoader } from "./LoaderContext";
import { useRef, useState } from "react";
import Logo from "@src/app/Logo";

gsap.registerPlugin(useGSAP);

export default function Loader() {
    const { scrolled, setReady } = useLoader();
    const ref = useRef<HTMLDivElement>(null);
    const [gone, setGone] = useState(false);

    useGSAP(
        () => {
            if (!scrolled || !ref.current) return;

            gsap.to(ref.current, {
                autoAlpha: 0,
                duration: 0.4,
                ease: "sine",
                onComplete: () => {
                    setGone(true);
                    setReady(true);
                },
            });
        },
        { scope: ref, dependencies: [scrolled] }
    );

    if (gone) return null;

    return (
        <div
            ref={ref}
            className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-neutral-950"
        >
            <Logo className="w-72 text-[#FFFFF2] md:w-100 xl:w-125" />
            <p className="font-orbitron mx-10 mt-2 text-center text-lg text-gray-200/80 md:text-2xl">
                Loading...
            </p>
        </div>
    );
}
