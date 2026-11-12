"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// TODO: Animations to load all the content

export default function VisionSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const gradientRef = useRef<HTMLDivElement>(null);

	return (
		<section ref={sectionRef}
			id="vision"
			className="relative h-screen overflow-hidden bg-[#0e0e0d] text-gray-200"
		>
			<div id="vision-pin" />
			<div
				ref={gradientRef}
				className="pointer-events-none absolute inset-0 z-0"
				style={{
					background:
						"radial-gradient(ellipse 85% 45% at 55% 0%, rgba(56,150,220,0.28) 0%, rgba(40,100,160,0.10) 45%, transparent 75%)",
				}}
			/>
			<div className="z-50 flex h-full w-full flex-col justify-center">
				<div className="space-y-24">
					<div className="font-ubuntu max-w-dvh space-y-2 p-10 font-semibold">
						<p className="text-5xl text-gray-200">
							Pushing the boundary of rocketry teams,
						</p>
						<p className="text-4xl text-gray-200/50">
							be the fastest growing.
						</p>
					</div>
					<div className="space-y-5">
						<p className="font-orbitron px-10 text-5xl font-bold text-gray-400">
							WORKING ON
						</p>
						<div className="">
							{[
								[
									"Liquid Propulsion",
									"Engines that burn liquid propellants",
								],
								[
									"VTVL Launch Vehicle",
									"Vertical Take-Off & Vertical Landing",
								],
							].map((work, i) => (
								<div
									key={work[0]}
									className="group cursor-pointer border-b-[0.1] border-gray-200/30 py-10 transition-all duration-150 ease-in-out hover:bg-sky-200/10"
								>
									<div className="flex w-fit items-center p-10 font-extrabold">
										<p className="mr-20 text-center font-mono text-6xl text-sky-500">
											{String(i + 1).padStart(2, "0")}
										</p>
										<div className="space-y-2">
											<p className="font-ubuntu text-center text-7xl">
												{work[0]}
											</p>
											<p className="font-ubuntu text-2xl font-semibold text-sky-500">
												{work[1]}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
