import ScrollOnNavigate from "@src/components/loader/ScrollOnNavigate";
import SmoothScroll from "@src/components/SmoothScroll";
import FooterHeader from "./home/FooterHeader";
import HomeSection from "./home/HomeSection";
import TeamSection from "./home/TeamSection";
import VisionSection from "./home/VisionSection";
import WorksSection from "./home/WorksSection";
import ContactSection from "./home/ContactSection";
import StartAtBottom from "@src/components/loader/StartAtBottom";
import Loader from "@src/components/loader/Loader";
import { LoaderProvider } from "@src/components/loader/LoaderContext";

export default function Home() {
	return (
		<>
			<script
				dangerouslySetInnerHTML={{
					__html: `
						history.scrollRestoration = "manual";
						document.documentElement.classList.add("start-bottom");
					`,
				}}
			/>

			<ScrollOnNavigate />

			<LoaderProvider>
				<Loader />
				<ScrollOnNavigate />

				<div className="relative z-10 flex min-h-full flex-col">
					<SmoothScroll>
						<ContactSection />
						<WorksSection />
						<TeamSection />
						<VisionSection />
						<HomeSection />
						<FooterHeader />
						<div id="bottom" />
						<StartAtBottom />
					</SmoothScroll>
				</div>
			</LoaderProvider>

			<script
				dangerouslySetInnerHTML={{
					__html: `
						window.scrollTo(0, document.documentElement.scrollHeight);
						document.documentElement.classList.remove("start-bottom");
					`,
				}}
			/>
		</>
	);
}
