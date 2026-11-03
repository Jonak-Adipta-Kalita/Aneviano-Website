import SmoothScroll from "@src/components/SmoothScroll";
import FooterHeader from "./FooterHeader";

export default function HomePage() {
	return (
		<div className="flex min-h-full flex-col-reverse">
			<SmoothScroll>
				<section id="home" className="h-screen">
				</section>
				<section id="team" className="h-screen"></section>
				<section id="recent-work" className="h-screen"></section>
				<section id="contact-us" className="h-screen"></section>
			</SmoothScroll>
			<FooterHeader />
		</div>
	);
}
