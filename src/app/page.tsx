import ScrollOnNavigate from "./ScrollOnNavigate";

export default function Home() {
    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
						history.scrollRestoration = 'manual';
						document.documentElement.classList.add('start-bottom');
					`,
                }}
            />

            <ScrollOnNavigate />

            {/* body ;-; */}

            <script
                dangerouslySetInnerHTML={{
                    __html: `
						window.scrollTo(0, document.documentElement.scrollHeight);
						document.documentElement.classList.remove('start-bottom');
					`,
                }}
            />
        </>
    );
}
