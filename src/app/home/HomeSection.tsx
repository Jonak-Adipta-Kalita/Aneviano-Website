"use client"

import Typewriter from "@src/components/Typewriter";
import Logo from "../Logo";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomeSection() {
	const container = useRef<HTMLElement | null>(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			defaults: { ease: "none" },
			scrollTrigger: {
				trigger: container.current,
				scrub: true,
				start: "70% 80%",
				end: "bottom bottom",
				invalidateOnRefresh: true,
				markers: true,
				pin: true,
				anticipatePin: 1,
			},
		});

		tl.fromTo(container.current, { backgroundColor: "#FFFFF2" }, { backgroundColor: "transparent", duration: 0.25 })
			.fromTo(
				".zoom-logo",
				{ scale: 25, transformOrigin: "50% 50%" },
				{ scale: 1, transformOrigin: "50% 50%", ease: "power1" },
				0
			)
			.fromTo(
				".zoom-tagline",
				{ autoAlpha: 0 },
				{ autoAlpha: 1, duration: 0.3 },
				0.3
			);
	}, { scope: container })

	return (
		<section
			ref={container}
			id="home"
			className="relative flex h-screen items-center justify-center"
		>
			<div className="flex flex-col items-center justify-center">
				<div className="zoom-logo">
					<Logo id="logo" className="w-72 text-[#FFFFF2] md:w-100 xl:w-125" />
				</div>
				<p className="zoom-tagline font-orbitron mx-10 mt-2 text-center text-lg text-gray-200/80 md:text-2xl">
					<Typewriter
						content={
							"Building Beyond Boundaries, Pushing the limits of Innovation and Ingenuity"
						}
					/>
				</p>
			</div>
		</section>
	);
}
