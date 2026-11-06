"use client"

import TypeWriter from "@src/components/TypeWriter";
import Logo from "../Logo";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HomeSection() {
	const container = useRef(null)

	useGSAP(() => {
		gsap.fromTo(
			"#logo",
			{ y: -40, autoAlpha: 0 },
			{ y: 0, autoAlpha: 1, duration: 1, ease: "sine" }
		)
	}, { scope: container })

	return (
		<section
			id="home"
			className="flex h-screen items-center justify-center"
			ref={container}
		>
			<div className="flex flex-col items-center justify-center">
				<Logo id="logo" className="invisible w-72 text-gray-200 md:w-100 xl:w-125" />
				<p className="font-orbitron mx-10 mt-2 text-center text-lg text-gray-200/80 md:text-2xl">
					<TypeWriter
						content={
							"Building Beyond Boundaries, Pushing the limits of Innovation and Ingenuity"
						}
					/>
				</p>
			</div>
		</section>
	);
}
