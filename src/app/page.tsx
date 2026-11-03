import ScrollOnNavigate from "./home/ScrollOnNavigate";
import Body from "./home/HomePage";

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

            <div className="relative z-10">
                <Body />
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
