"use client"
import { useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Experience() {
	const experienceRef = useRef<HTMLDivElement>(null);
	const middleRef = useRef<HTMLHeadingElement>(null);
	const boxRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
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

			exp.to(middleRef.current, {
				"--progress1": 1,
				ease: "none",
			});

			exp.from(
				boxRef.current,
				{
					scaleX: 0,
					ease: "none",
				},
				"-=0.4"
			);
		},
		{ scope: experienceRef }
	);

	return (
		<>
			<div
				ref={experienceRef}
				className="experience relative z-10 h-screen w-full overflow-hidden bg-white"
			>
				{/* orange overlay */}
				<div
					ref={boxRef}
					className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-[orange] opacity-70"
				/>

				<div className="experience-show">
					<h1 className="absolute left-[2%] top-[1%] font-['bold'] font-bold my-[0.67em] text-[3rem]">
						Let Me show you
					</h1>

					<div className="flex h-screen w-full items-center justify-center">
						<h1
							ref={middleRef}
							className="origin-[48.2%] whitespace-nowrap font-['bold'] font-bold my-[0.67em] text-[15rem]"
							style={
								{
									"--progress1": 0,
									transform: "scale(calc(var(--progress1) * 30))",
								} as CSSProperties
							}
						>
							Enter My World
						</h1>
					</div>

					<h1 className="absolute bottom-[1%] right-[2%] font-['bold'] font-bold my-[0.67em] text-[3rem]">
						My Magic Trick
					</h1>
				</div>
			</div>

			<section className="mt-4 h-screen w-full text-[5rem]">
				another section
			</section>
		</>
	);
}
