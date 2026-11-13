"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { useLoader } from "./loader/LoaderContext";

export default function Typewriter({
    content,
}: {
    content: string;
    delay?: number;
}) {
    const [display, setDisplay] = useState("");
    const counter = useRef({ i: 0 });
    const { ready } = useLoader();

    useGSAP(
        () => {
            if (ready) return;

            counter.current.i = 0;
            gsap.to(counter.current, {
                i: content.length,
                duration: content.length * 0.02,
                ease: "none",
                onUpdate: () =>
                    setDisplay(content.slice(0, Math.round(counter.current.i))),
                scrollTrigger: {}, // TODO
            });
        },
        { dependencies: [content] }
    );

    return display;
}
