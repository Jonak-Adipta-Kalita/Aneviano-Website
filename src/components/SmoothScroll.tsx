"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LenisRef, ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollSync = () => {
    useLenis(() => ScrollTrigger.update());
    return null;
};

export default function SmoothScroll({
    children,
}: {
    children: React.ReactNode;
}) {
    const lenisRef = useRef<LenisRef | null>(null);

    useEffect(() => {
        const update = (time: number) =>
            lenisRef.current?.lenis?.raf(time * 1000);

        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        return () => gsap.ticker.remove(update);
    });

    return (
        <ReactLenis root ref={lenisRef} options={{ autoRaf: false }}>
            <ScrollSync />
            {children}
        </ReactLenis>
    );
}
