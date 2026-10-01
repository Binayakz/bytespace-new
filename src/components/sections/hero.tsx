"use client";

import Image from "next/image";
import {type CSSProperties, type FormEvent, useState} from "react";
import {Container} from "@/components/layout/container";

const studentAvatars = [
    "/images/avatars/student-avatar-01.png",
    "/images/avatars/student-avatar-02.png",
    "/images/avatars/student-avatar-03.png",
    "/images/avatars/student-avatar-04.png",
];

type LimeDecorationProps = {
    src: string;
    className: string;
    mirrored?: boolean;
};

function LimeDecoration({src, className, mirrored = false}: LimeDecorationProps) {
    const maskStyle: CSSProperties = {
        backgroundColor: "#d4fb20",
        WebkitMaskImage: `url("${src}")`,
        maskImage: `url("${src}")`,
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
    };

    return (
        <div className={className}>
            <span
                className={`absolute inset-0 ${mirrored ? "scale-x-[-1]" : ""}`}
                style={maskStyle}
            />
            <Image
                src={src}
                alt=""
                width={2500}
                height={2500}
                className={`absolute inset-0 size-full opacity-22 mix-blend-multiply ${
                    mirrored ? "scale-x-[-1]" : ""
                }`}
            />
            <Image
                src={src}
                alt=""
                width={2500}
                height={2500}
                className={`absolute inset-0 size-full opacity-65 mix-blend-screen ${
                    mirrored ? "scale-x-[-1]" : ""
                }`}
            />
        </div>
    );
}

export function Hero() {
    const [query, setQuery] = useState("");

    function handleSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        window.dispatchEvent(
            new CustomEvent("bytespace:course-search", {detail: query.trim()}),
        );
        document
            .getElementById("featured-courses")
            ?.scrollIntoView({behavior: "smooth", block: "start"});
    }

    return (
        <section
            aria-labelledby="hero-heading"
            className="relative min-h-195 overflow-hidden text-white lg:min-h-226.5"
        >
            <Container className="relative z-20 flex flex-col items-center pt-12 text-center lg:pt-12">
                <h1
                    id="hero-heading"
                    className="w-full max-w-225 font-heading text-4xl leading-[1.14] font-semibold tracking-[-0.035em] sm:text-5xl lg:text-[72px]"
                >
                    Get Access to Hundreds
                    <br className="hidden sm:block"/> Courses Available
                </h1>

                <p className="mt-8 w-full max-w-190 text-base leading-7 text-white/90 sm:mt-10 lg:text-lg">
                    Unlock your creativity, gain valuable knowledge, and grow your
                    business with our wide range of courses.
                </p>

                <form
                    role="search"
                    onSubmit={handleSearch}
                    className="mt-8 flex w-full max-w-145.5 flex-col gap-4 sm:flex-row"
                >
                    <label className="flex h-14 flex-1 items-center gap-3 rounded-full bg-white px-6">
                        <span className="sr-only">Search courses</span>

                        <Image
                            src="/icons/search-muted.svg"
                            alt=""
                            width={18}
                            height={18}
                        />

                        <input
                            type="search"
                            name="query"
                            placeholder="Course, topic, creator"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            className="min-w-0 flex-1 bg-transparent text-base text-body outline-none"
                        />
                    </label>

                    <button
                        type="submit"
                        className="h-14 rounded-full bg-brand-lime px-7 text-base font-medium text-heading transition-colors hover:bg-[#c5eb16] focus-visible:outline-2 focus-visible:outline-brand-lime focus-visible:outline-offset-2"
                    >
                        Search
                    </button>
                </form>
            </Container>

            {/* Anchor the large ornaments to the viewport edges. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden lg:block"
            >
                <LimeDecoration
                    src="/images/decorations/squiggle-black-large.png"
                    className="absolute top-29 -left-22 size-90 rotate-[-18deg]"
                />

                <LimeDecoration
                    src="/images/decorations/cylinder-black-large.png"
                    mirrored
                    className="absolute top-33 -right-28 size-94 rotate-[-12deg]"
                />
            </div>

            {/* Artwork composition */}
            <div className="absolute bottom-0 left-1/2 h-98 w-full max-w-page -translate-x-1/2 lg:h-122.5">
                <Image
                    src="/images/decorations/hero-accent-circle.svg"
                    alt=""
                    width={1149}
                    height={1149}
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-177.5 left-1/2 max-w-none -translate-x-1/2"
                />

                <Image
                    src="/images/decorations/squiggle-gray-small.png"
                    alt=""
                    width={313}
                    height={313}
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-15.25 left-16 hidden w-44 lg:block"
                    style={{ filter: "grayscale(1) brightness(1.8)" }}
                />

                <Image
                    src="/images/decorations/pyramid-gray-large.png"
                    alt=""
                    width={2500}
                    height={2500}
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-16.5 right-10 hidden w-44 lg:block"
                    style={{ filter: "grayscale(1) brightness(1.8)" }}
                />

                <Image
                    src="/images/decorations/torus-black-large.png"
                    alt=""
                    width={2500}
                    height={2500}
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-11 -left-25 hidden w-80 lg:block"
                    style={{
                        filter: "grayscale(1) invert(1) brightness(1.25)",
                    }}
                />

                <Image
                    src="/images/decorations/squiggle-gray-large-a.png"
                    alt=""
                    width={2500}
                    height={2500}
                    loading="eager"
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-33 bottom-7 hidden w-82 lg:block"
                    style={{ filter: "grayscale(1) brightness(1.8)" }}
                />

                <Image
                    src="/images/hero-student.png"
                    alt="Student learning while wearing headphones"
                    width={516}
                    height={483}
                    priority
                    className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
                />

                {/* UI/UX course card */}
                <div
                    className="absolute top-26 left-[calc(50%-320px)] z-20 hidden w-52 rounded-2xl bg-white px-4 py-3 text-left text-body shadow-lg md:block">
                    <p className="font-medium">UI/UX Design</p>
                    <p className="mt-0.5 text-xs text-muted">
                        200 Courses&nbsp; • &nbsp;1000+ Students
                    </p>
                </div>

                {/* Learning progress card */}
                <div
                    className="absolute top-29 left-[calc(50%+120px)] z-20 hidden w-58.5 rounded-2xl bg-white p-4 text-left text-body shadow-lg md:block">
                    <p className="text-sm font-medium">Learning Progress</p>

                    <p className="mt-1 font-heading text-5xl leading-none font-semibold">
                        55%
                    </p>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface">
                        <div className="h-full w-[55%] rounded-full bg-brand-lime"/>
                    </div>
                </div>

                {/* Happy students card */}
                <div
                    className="absolute bottom-29 left-[calc(50%-396px)] z-20 hidden w-68 rounded-2xl bg-white p-4 text-left text-body shadow-lg md:block">
                    <div className="flex items-center gap-4">
                        <div className="flex">
                            {studentAvatars.map((avatar, index) => (
                                <Image
                                    key={avatar}
                                    src={avatar}
                                    alt=""
                                    width={36}
                                    height={36}
                                    className={`rounded-full border-2 border-white ${
                                        index === 0 ? "" : "-ml-3"
                                    }`}
                                />
                            ))}
                        </div>

                        <div>
                            <p className="font-medium">Happy Students</p>
                            <p className="text-xs text-muted">
                                4.5 (240) <span className="text-brand-lime">★</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
