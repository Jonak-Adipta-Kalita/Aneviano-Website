import Typewriter from "@src/components/Typewriter";
import Logo from "../Logo";

export default function HomeSection() {
    return (
        <section
            id="home"
            className="flex h-screen items-center justify-center"
        >
            <div className="flex flex-col items-center justify-center">
                <Logo
                    id="logo"
                    className="w-72 text-gray-200 md:w-100 xl:w-125"
                />
                <p className="font-orbitron mx-10 mt-2 text-center text-lg text-gray-200/80 md:text-2xl">
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
