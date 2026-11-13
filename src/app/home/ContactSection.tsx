export default function ContactSection() {
    return (
        <section id="contact" className="h-screen">
            <div id="contact-pin" />
            <div className="flex h-full w-full items-center justify-center space-x-10">
                <div>
                    <input className="contactInput" />
                    <input className="contactInput" />
                    <input className="contactInput" />
                </div>
                <div className="" /> {/* Separator */}
                <div></div> {/* Our Socials */}
            </div>
        </section>
    );
}
