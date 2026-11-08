"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoader } from "@src/components/loader/LoaderContext";

const nextFrame = () =>
    new Promise<void>((r) => requestAnimationFrame(() => r()));

export default function StartAtBottom() {
    const lenis = useLenis();
    const { setScrolled, ready } = useLoader();

    useEffect(() => {
        if (!lenis) return;

        lenis.stop();
        let cancelled = false;

        const maxScroll = () =>
            document.documentElement.scrollHeight - window.innerHeight;

        const toBottom = () => {
            lenis.resize();
            lenis.scrollTo("#home-bottom", { immediate: true, force: true });
            ScrollTrigger.update();
        };

        const run = async () => {
            await document.fonts?.ready;
            if (cancelled) return;

            ScrollTrigger.refresh();
            toBottom();

            let stable = 0;
            for (let i = 0; i < 120 && stable < 5 && !cancelled; i++) {
                await nextFrame();
                const atBottom = Math.abs(window.scrollY - maxScroll()) < 2;
                if (atBottom) {
                    stable++;
                } else {
                    stable = 0;
                    toBottom();
                }
            }

            if (!cancelled) setScrolled(true);
        };

        void run();

        return () => {
            cancelled = true;
        };
    }, [lenis, setScrolled]);

    useEffect(() => {
        if (ready) lenis?.start();
    }, [ready, lenis]);

    return null;
}
