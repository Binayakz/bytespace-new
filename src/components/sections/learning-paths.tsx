import Image from "next/image";
import {Container} from "@/components/layout/container";

const learningPaths = [
    {name: "Design", icon: "/icons/categories/design.svg"},
    {name: "Development", icon: "/icons/categories/development.svg"},
    {name: "IT & Software", icon: "/icons/categories/it-software.svg"},
    {name: "Business", icon: "/icons/categories/business.svg"},
    {name: "Marketing", icon: "/icons/categories/marketing.svg"},
    {name: "Photography", icon: "/icons/categories/photography.svg"},
];

export function LearningPaths() {
    return (
        <section
            aria-labelledby="learning-paths-heading"
            className="bg-white pb-30"
        >
            <Container className="text-center">
                <h2
                    id="learning-paths-heading"
                    className="font-heading text-3xl leading-[1.3] font-semibold tracking-[-0.025em] text-heading sm:text-4xl"
                >
                    Explore Diverse Learning Paths at Bytespace
                </h2>

                <p className="mx-auto mt-5 max-w-240 text-base leading-7 text-muted lg:text-lg">
                    At Bytespace, we believe in empowering individuals through
                    knowledge. Our diverse range of courses spans various fields,
                    ensuring there&apos;s something for everyone. Unleash your potential
                    and explore our carefully curated categories.
                </p>

                <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
                    {learningPaths.map((path) => (
                        <a
                            key={path.name}
                            href="#featured-courses"
                            className="flex aspect-square flex-col items-center justify-center rounded-3xl border border-border bg-white px-3 transition-colors hover:border-brand-blue focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2"
                        >
                            <span className="flex size-16 items-center justify-center rounded-full bg-brand-lime">
                                <Image
                                    src={path.icon}
                                    alt=""
                                    width={36}
                                    height={36}
                                />
                            </span>

                            <span className="mt-4 text-xl text-body">
                                {path.name}
                            </span>
                        </a>
                    ))}
                </div>
            </Container>
        </section>
    );
}
