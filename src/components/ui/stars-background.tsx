"use client";
import { cn } from "@src/lib/utils";
import React, { useEffect, useRef } from "react";

interface StarsBackgroundProps {
    starDensity?: number;
    className?: string;
}

export const StarsBackground: React.FC<StarsBackgroundProps> = ({
    starDensity = 0.0005,
    className,
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const draw = () => {
            const { width, height } = canvas.getBoundingClientRect();
            canvas.width = width;
            canvas.height = height;

            const numStars = Math.floor(width * height * starDensity);

            for (let i = 0; i < numStars; i++) {
                ctx.beginPath();
                ctx.arc(
                    Math.random() * width,
                    Math.random() * height,
                    Math.random() * 0.05 + 0.6,
                    0,
                    Math.PI * 2
                );
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`;
                ctx.fill();
            }
        };

        draw();

        const resizeObserver = new ResizeObserver(draw);
        resizeObserver.observe(canvas);

        return () => resizeObserver.disconnect();
    }, [starDensity]);

    return (
        <canvas
            ref={canvasRef}
            className={cn("absolute inset-0 h-full w-full", className)}
        />
    );
};
