"use client";

import { useLenis } from "lenis/react";

export const NAV_ITEMS = ["Home", "Team", "Vision", "Contact"];

export default function FooterHeader() {
	const lenis = useLenis();

	return (
		<nav className="bg-base fixed bottom-0 left-1/2 z-50 -translate-x-1/2 mb-5 flex max-w-fit items-center justify-evenly space-x-3 rounded-2xl p-3">
			{NAV_ITEMS.map((nav) => (
				<button
					key={nav}
					type="button"
					onClick={() =>
						lenis?.scrollTo(`#${nav.toLowerCase()}`, { lock: false, duration: 1.2 })
					}
					className="select-none touch-manipulation font-orbitron cursor-pointer rounded-2xl px-5 py-3 text-md md:text-2xl text-gray-400 underline-offset-4 transition-all ease-in-out hover:underline"
				>
					{nav}
				</button>
			))}
		</nav>
	);
}
