"use client";

import {useState} from "react";
import {Container} from "@/components/layout/container";

const categoryRows = [
    [
        "Featured",
        "Music",
        "Drawing & Painting",
        "Marketing",
        "Animation",
        "Social Media",
        "UI/UX Design",
        "Creative Marketing",
    ],
    [
        "Digital Illustration",
        "Film & Video",
        "Crafts",
        "Freelance & Entrepreneurship",
        "Graphic Design",
        "Photography",
    ],
    ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export function CourseDiscovery() {
    const [activeCategory, setActiveCategory] = useState("Featured");

    return (
        <section
            aria-labelledby="course-discovery-heading"
            className="bg-white py-16 lg:pt-18 lg:pb-20"
        >
            <Container className="text-center">
                <h2
                    id="course-discovery-heading"
                    className="font-heading text-3xl leading-[1.3] font-semibold tracking-tight text-heading sm:text-4xl lg:text-[40px]"
                >
                    Discover Your Passion,
                    <br/> Build Your Skills
                </h2>

                <p className="mx-auto mt-5 max-w-240 text-base leading-7 text-muted">
                    At Bytespace Courses, we bring you closer to life-changing
                    knowledge. Explore a variety of courses across different fields,
                    from technology to the arts, and make a difference in your career
                    and life.
                </p>

                <div
                    aria-label="Course categories"
                    className="mx-auto mt-11 flex max-w-270 flex-col items-center gap-5"
                >
                    {categoryRows.map((row, rowIndex) => (
                        <div
                            key={row[0]}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            {row.map((category) => {
                                const isActive = category === activeCategory;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        aria-pressed={isActive}
                                        onClick={() => setActiveCategory(category)}
                                        className={`h-11 rounded-full px-4 text-base transition-colors focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2 ${
                                            isActive
                                                ? "bg-brand-lime text-heading"
                                                : "bg-surface text-body hover:bg-[#e9eaec]"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                );
                            })}

                            {rowIndex === categoryRows.length - 1 && (
                                <button
                                    type="button"
                                    className="h-11 px-1 text-base text-brand-blue transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2"
                                >
                                    + More
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
