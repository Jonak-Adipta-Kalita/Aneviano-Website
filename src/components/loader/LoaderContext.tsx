"use client";

import { createContext, useContext, useState } from "react";

type LoaderContextValue = {
    scrolled: boolean;
    setScrolled: (v: boolean) => void;
    ready: boolean;
    setReady: (v: boolean) => void;
};

const LoaderContext = createContext<LoaderContextValue | null>(null);

export function useLoader(): LoaderContextValue {
    const ctx = useContext(LoaderContext);
    if (!ctx) throw new Error("useLoader must be used inside <LoaderProvider>");
    return ctx;
}

export function LoaderProvider({ children }: { children: React.ReactNode }) {
    const [scrolled, setScrolled] = useState(false);
    const [ready, setReady] = useState(false);

    return (
        <LoaderContext.Provider
            value={{ scrolled, setScrolled, ready, setReady }}
        >
            {children}
        </LoaderContext.Provider>
    );
}
