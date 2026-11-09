import { ShootingStars } from "@src/components/ui/shooting-stars";

export default function VisionSection() {
	return (
		<section
			id="vision"
			className="relative h-screen bg-[#0e0e0d] text-gray-200"
		>
			<div id="vision-pin" />
			<ShootingStars />

			<div className="w-full h-full">
				<div className="flex min-h-dvh w-full items-center justify-center overflow-hidden">
					<p
						className="select-none text-center font-bold leading-none tracking-tighter text-transparent opacity-[0.22] [-webkit-text-stroke:2px_#A9D4FF]"
						style={{ fontSize: "clamp(80px, 18vw, 300px)" }}
						aria-hidden="true"
					>
						THE VISION
					</p>
				</div>
			</div>
		</section>
	);
}
