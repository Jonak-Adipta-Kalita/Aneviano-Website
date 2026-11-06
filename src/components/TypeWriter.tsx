"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

export default function TypeWriter({ content }: { content: string }) {
    const [display, setDisplay] = useState("");
    const counter = useRef({ i: 0 });

    useGSAP(
        () => {
            counter.current.i = 0;
            gsap.to(counter.current, {
                i: content.length,
                duration: content.length * 0.02,
                ease: "none",
                onUpdate: () =>
                    setDisplay(content.slice(0, Math.round(counter.current.i))),
            });
        },
        { dependencies: [content] }
    );

    return display;
}
