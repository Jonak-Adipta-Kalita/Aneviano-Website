"use client";

import { useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ExperienceReverse() {
	const experienceRef = useRef<HTMLDivElement>(null);
	const middleRef = useRef<HTMLHeadingElement>(null);
	const boxRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			// The page is read bottom -> top, so scroll progress 0 is the *top* of
			// the pin range (finished effect) and 1 is the bottom (effect not started).
			// The timeline therefore runs from "finished" to "not started" and is
			// the mirror image of the original: total length 1.1, orange box takes
			// the first 0.5, the zoom takes the last 1.0.

			const exp = gsap.timeline({
				scrollTrigger: {
					trigger: experienceRef.current,
					start: "top top",
					end: "+=5000",
					scrub: true,
					markers: true, // remove in production
					pin: experienceRef.current,
				},
			});

			exp.fromTo(
				boxRef.current,
				{ scaleX: 1 },
				{ scaleX: 0, ease: "none", duration: 0.5 },
				0
			);

			exp.fromTo(
				middleRef.current,
				{ "--progress1": 1 },
				{ "--progress1": 0, ease: "none", duration: 1 },
				0.1
			);
		},
		{ scope: experienceRef }
	);

	return (
		<>
			{/* now ABOVE the experience */}
			<section className="mb-4 h-screen w-full shrink-0 text-[5rem] text-gray-200">
				another section
			</section>

			<div
				ref={experienceRef}
				className="experience relative z-10 h-screen w-full shrink-0 overflow-hidden bg-white"
			>
				<div
					ref={boxRef}
					className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-[orange] opacity-70"
				/>

				<div className="experience-show">
					<h1 className="absolute left-[2%] top-[1%] my-[0.67em] font-['bold'] font-bold text-[3rem]">
						Let Me show you
					</h1>

					<div className="flex h-screen w-full items-center justify-center">
						<h1
							ref={middleRef}
							className="my-[0.67em] origin-[48.2%] whitespace-nowrap font-['bold'] font-bold text-[15rem]"
							style={
								{
									"--progress1": 1,
									transform: "scale(calc(var(--progress1) * 30))",
								} as CSSProperties
							}
						>
							Enter My World
						</h1>
					</div>

					<h1 className="absolute bottom-[1%] right-[2%] my-[0.67em] font-['bold'] font-bold text-[3rem]">
						My Magic Trick
					</h1>
				</div>
			</div>
		</>
	);
}
