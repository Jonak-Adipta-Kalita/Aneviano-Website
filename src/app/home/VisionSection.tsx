"use client";

import { useGSAP } from "@gsap/react";
import { ShootingStars } from "@src/components/ui/shooting-stars";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// TODO: Animations to load all the content
// TODO: Vector Background instead of the Gradient

export default function VisionSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const gradientRef = useRef<HTMLDivElement>(null);

    useGSAP();

    return (
        <section
            ref={sectionRef}
            id="vision"
            className="relative min-h-dvh overflow-hidden bg-[#0e0e0d] text-gray-200"
        >
            <div id="vision-pin" />
            <div
                ref={gradientRef}
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 85% 45% at 55% 0%, rgba(56,150,220,0.28) 0%, rgba(40,100,160,0.10) 45%, transparent 75%)",
                }}
            />
            <div className="relative z-50 flex min-h-dvh w-full flex-col justify-center py-12 lg:py-0">
                <div className="space-y-8 md:space-y-12 lg:space-y-16 2xl:space-y-24">
                    <div className="font-orbitron space-y-2 p-5 font-semibold sm:p-6 lg:p-8 2xl:p-10">
                        <p className="text-2xl text-gray-200 sm:text-3xl lg:text-4xl 2xl:text-5xl">
                            Pushing the boundary of rocketry teams,
                        </p>
                        <p className="text-xl text-gray-200/50 sm:text-2xl lg:text-3xl 2xl:text-4xl">
                            be the fastest growing.
                        </p>
                    </div>
                    <div className="space-y-3 lg:space-y-4 2xl:space-y-5">
                        <p className="font-orbitron px-5 text-2xl font-bold text-gray-400 sm:px-6 sm:text-3xl lg:px-8 lg:text-4xl 2xl:px-10 2xl:text-5xl">
                            WORKING ON
                        </p>
                        <div>
                            {[
                                [
                                    "Liquid Propulsion",
                                    "Engines that burn liquid propellants",
                                ],
                                [
                                    "VTVL Launch Vehicle",
                                    "Vertical Take-Off & Vertical Landing",
                                ],
                            ].map((work, i) => (
                                <div
                                    key={work[0]}
                                    className="group cursor-pointer border-b border-gray-200/30 py-4 transition-all duration-150 ease-in-out sm:py-5 lg:py-7 2xl:py-10"
                                >
                                    <div className="flex w-full items-center gap-4 p-5 font-extrabold sm:gap-6 sm:p-6 lg:w-fit lg:gap-12 lg:p-8 2xl:gap-20 2xl:p-10">
                                        <p className="shrink-0 text-center font-mono text-2xl text-sky-300 sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
                                            {String(i + 1).padStart(2, "0")}
                                        </p>
                                        <div className="min-w-0 space-y-1 lg:space-y-2">
                                            <p className="font-ubuntu text-left text-2xl wrap-break-word sm:text-3xl md:text-4xl lg:text-center lg:text-5xl xl:text-6xl 2xl:text-7xl">
                                                {work[0]}
                                            </p>
                                            <p className="font-ubuntu text-center text-sm font-semibold text-sky-300 md:text-left md:text-lg lg:text-xl 2xl:text-2xl">
                                                {work[1]}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ShootingStars />
        </section>
    );
}
