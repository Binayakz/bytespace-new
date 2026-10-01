import {Header} from "@/components/layout/header";
import {Hero} from "@/components/sections/hero";
import {PartnerLogos} from "@/components/sections/partner-logos";

export default function Home() {
    return (
        <main id="main-content">
            <div
                id="home"
                className="relative isolate overflow-hidden bg-brand-blue"
            >
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                        backgroundImage:
                            'url("/images/decorations/hero-grid.svg")',
                        backgroundPosition: "center top",
                        backgroundRepeat: "repeat-x",
                        backgroundSize: "1442px 1026px",
                    }}
                />

                <Header/>
                <Hero/>
            </div>

            <PartnerLogos/>
        </main>
    );
}
