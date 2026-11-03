import SmoothScroll from "@src/components/SmoothScroll"
import Sidebar from "./Sidebar";

export default function HomePage() {
	return (
		<SmoothScroll>
			<Sidebar />
			<div className="flex min-h-full flex-col-reverse">
				<section id="home" className="h-screen"></section>
				<section id="home" className="h-screen"></section>
				<section id="home" className="h-screen"></section>
				<section id="home" className="h-screen"></section>
			</div>
		</SmoothScroll>
	);
}
