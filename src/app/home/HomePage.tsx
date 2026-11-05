import SmoothScroll from "@src/components/SmoothScroll";
import FooterHeader from "./FooterHeader";
import Logo from "./Logo";

export default function HomePage() {
    return (
        <div className="flex min-h-full flex-col-reverse">
            <SmoothScroll>
                <FooterHeader />
                <section
                    id="home"
                    className="flex h-screen items-center justify-center"
                >
                    <div className="flex flex-col items-center justify-center">
                        <Logo className="text-gray-200" width={500} />
                        <p className="font-orbitron mt-2 text-2xl text-gray-200/80">
                            Building Beyond Boundaries, Pushing the limits of
                            Innovation and Ingenuity
                        </p>
                    </div>
                </section>
                <section id="vision" className="h-screen"></section>
                <section id="team" className="h-screen"></section>
                <section id="contact" className="h-screen"></section>
            </SmoothScroll>
        </div>
    );
}
