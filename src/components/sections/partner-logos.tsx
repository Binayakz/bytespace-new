import Image from "next/image";
import {Container} from "@/components/layout/container";

const partnerLogos = [
    {src: "/logos/partner1.svg", width: 167, height: 41},
    {src: "/logos/partner2.svg", width: 168, height: 41},
    {src: "/logos/partner3.svg", width: 170, height: 41},
    {src: "/logos/partner4.svg", width: 170, height: 41},
    {src: "/logos/partner5.svg", width: 169, height: 42},
];

export function PartnerLogos() {
    return (
        <section
            aria-label="Learning partners"
            className="flex min-h-50.5 items-center bg-surface py-10 lg:py-0"
        >
            <Container>
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:flex-nowrap lg:justify-between lg:gap-0">
                    {partnerLogos.map((logo, index) => (
                        <Image
                            key={logo.src}
                            src={logo.src}
                            alt={`Learning partner ${index + 1}`}
                            width={logo.width}
                            height={logo.height}
                            className="h-auto w-auto max-w-35 sm:max-w-none"
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
