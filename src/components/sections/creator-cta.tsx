import Image from "next/image";
import {buttonStyles} from "@/components/ui/button";
import {Container} from "@/components/layout/container";

export function CreatorCta() {
    return (
        <section
            id="creators"
            className="relative min-h-122 overflow-hidden bg-brand-blue py-16 text-white md:h-122 md:py-0"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        'url("/images/decorations/hero-grid.svg")',
                    backgroundPosition: "center top",
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "1442px 1026px",
                }}
            />

            <Image
                src="/images/features/course-creator-decoration.png"
                alt=""
                width={434}
                height={432}
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -left-13 hidden w-65 md:block"
            />
            <Image
                src="/images/decorations/squiggle-gray-small.png"
                alt=""
                width={313}
                height={313}
                aria-hidden="true"
                className="pointer-events-none absolute top-8 left-75 hidden w-44 md:block"
                style={{filter: "grayscale(1) brightness(1.9)"}}
            />
            <Image
                src="/images/decorations/pyramid-gray-large.png"
                alt=""
                width={2500}
                height={2500}
                aria-hidden="true"
                className="pointer-events-none absolute top-4 right-41 hidden w-39 md:block"
                style={{
                    filter: "sepia(1) saturate(8) hue-rotate(25deg) brightness(1.35)",
                }}
            />
            <Image
                src="/images/decorations/cylinder-gray-large.png"
                alt=""
                width={2500}
                height={2500}
                aria-hidden="true"
                className="pointer-events-none absolute top-10 -right-25 hidden w-67 md:block"
                style={{filter: "grayscale(1) brightness(2)"}}
            />
            <Image
                src="/images/decorations/cone-black-small.png"
                alt=""
                width={625}
                height={625}
                aria-hidden="true"
                className="pointer-events-none absolute top-84 -left-14 hidden w-46 md:block"
                style={{filter: "grayscale(1) invert(1) brightness(1.25)"}}
            />
            <Image
                src="/images/decorations/torus-black-large.png"
                alt=""
                width={2500}
                height={2500}
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-43 left-12 hidden w-73 md:block"
                style={{
                    filter: "sepia(1) saturate(8) hue-rotate(25deg) brightness(1.35)",
                }}
            />
            <Image
                src="/images/features/professional-growth-decoration.png"
                alt=""
                width={434}
                height={432}
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -bottom-22 hidden w-56 md:block"
            />

            <Container className="relative z-10 flex h-full flex-col items-center justify-center text-center md:justify-start md:pt-21">
                <h2 className="max-w-190 font-heading text-4xl leading-[1.25] font-semibold tracking-[-0.03em] lg:text-[40px]">
                    Unlock Your Potential as a
                    <br className="hidden sm:block"/> Creator with ByteSpace
                </h2>

                <p className="mt-8 max-w-245 text-base leading-7 text-white/90 md:mt-14 lg:text-lg">
                    Experience the collaboration of numerous creators and an expanding
                    selection of courses. Register now and become a part of a community
                    comprising over 10,000 local and international creators. Utilize
                    our Course Editor, and showcase your expertise by publishing your
                    finest course on the ByteSpace Course Library.
                </p>

                <a
                    href="#newsletter"
                    className={buttonStyles({
                        className: "mt-9 min-w-43",
                    })}
                >
                    Join as Creator
                </a>
            </Container>
        </section>
    );
}
