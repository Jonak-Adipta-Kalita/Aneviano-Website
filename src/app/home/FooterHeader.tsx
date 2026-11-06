"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import { useRef } from "react";

export const NAV_ITEMS = ["Home", "Vision", "Works", "Team", "Contact"];

export default function FooterHeader() {
	const lenis = useLenis();
	const container = useRef(null);

	useGSAP(() => {
		gsap.fromTo(
			".nav-btn",
			{ y: 24, autoAlpha: 0 },
			{
				y: 0,
				autoAlpha: 1,
				duration: 0.6,
				ease: "power3.out",
				stagger: 0.08,
				delay: 0.3,
			}
		);
	}, { scope: container });

	return (
		<nav
			ref={container}
			className="bg-base fixed bottom-0 left-1/2 z-50 mb-5 flex max-w-fit -translate-x-1/2 items-center justify-evenly space-x-3 rounded-2xl p-3"
		>
			{NAV_ITEMS.map((nav) => (
				<button
					key={nav}
					type="button"
					onClick={() =>
						lenis?.scrollTo(`#${nav.toLowerCase()}`, { lock: false, duration: 1.2 })
					}
					className="nav-btn invisible font-orbitron cursor-pointer touch-manipulation select-none rounded-2xl px-5 py-3 text-sm text-gray-400 underline-offset-4 transition-colors hover:underline md:text-2xl"
				>
					{nav}
				</button>
			))}
		</nav>
	);
}
