"use client";

import Typewriter from "@src/components/Typewriter";
import Logo from "../Logo";
import { CSSProperties, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomeSection() {
    const container = useRef<HTMLElement | null>(null);
    const layerRef = useRef<HTMLDivElement | null>(null);
    const logoRef = useRef<SVGSVGElement | null>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "+=5000",
                    scrub: true,
                    pin: container.current,
                    pinSpacing: true,
                    markers: false,
                },
            });

            tl.fromTo(
                layerRef.current,
                { scaleX: 1 },
                { scaleX: 0, ease: "none", duration: 0.7 },
                0
            );

            tl.fromTo(
                logoRef.current,
                { "--progress1": 1 },
                { "--progress1": 0, ease: "none", duration: 1 },
                0.5
            );

            tl.fromTo(
                logoRef.current,
                { color: "#0e0e0d" },
                { color: "#e5e7eb", ease: "none", duration: 1 },
                1
            );
        },
        { scope: container }
    );

    return (
        <>
            <section
                ref={container}
                id="home"
                className="relative flex h-screen shrink-0 items-center justify-center overflow-hidden"
            >
                <div
                    ref={layerRef}
                    className="pointer-events-none absolute top-0 left-0 z-50 h-full w-full bg-[#0e0e0d]"
                />

                <div
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    id="home-body"
                >
                    <Logo
                        className="w-72 md:w-100 xl:w-125"
                        ref={logoRef}
                        style={
                            {
                                "--progress1": 0,
                                transform:
                                    "scale(calc(1 + var(--progress1) * 30))",
                            } as CSSProperties
                        }
                    />
                    <p className="font-orbitron mx-10 mt-2 text-center text-lg text-gray-200/80 md:text-2xl">
                        <Typewriter
                            content={
                                "Building Beyond Boundaries, Pushing the limits of Innovation and Ingenuity"
                            }
                        />
                    </p>
                </div>
            </section>
            <div id="home-bottom" />
        </>
    );
}
