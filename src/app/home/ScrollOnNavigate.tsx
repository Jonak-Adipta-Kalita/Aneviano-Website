"use client";

import { useLayoutEffect } from "react";

export default function ScrollOnNavigate() {
    useLayoutEffect(() => {
        window.scrollTo(0, document.documentElement.scrollHeight);

        return () => {
            history.scrollRestoration = "auto";
        };
    }, []);

    return null;
}
