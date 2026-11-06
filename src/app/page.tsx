import ScrollOnNavigate from "./ScrollOnNavigate";
import SmoothScroll from "@src/components/SmoothScroll";
import FooterHeader from "./home/FooterHeader";
import HomeSection from "./home/HomeSection";
import TeamSection from "./home/TeamSection";
import VisionSection from "./home/VisionSection";
import WorksSection from "./home/WorksSection";
import ContactSection from "./home/ContactSection";

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

            <div className="relative z-10 flex min-h-full flex-col-reverse">
                <SmoothScroll>
                    <FooterHeader />
                    <HomeSection />
                    <VisionSection />
                    <TeamSection />
                    <WorksSection />
                    <ContactSection />
                </SmoothScroll>
            </div>

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
