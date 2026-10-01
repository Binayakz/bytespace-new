"use client";

import {useEffect, useMemo, useState} from "react";
import {CourseDiscovery} from "@/components/sections/course-discovery";
import {FeaturedCourses, type Course} from "@/components/sections/featured-courses";

const courses: Course[] = [
    {
        title: "Learn Figma from Basic",
        image: "/images/courses/learn-figma-from-basic.jpg",
        categories: ["Design", "UI/UX Design", "Drawing & Painting"],
    },
    {
        title: "Build Digital Asset",
        image: "/images/courses/build-digital-asset.jpg",
        categories: ["Design", "Digital Illustration", "Creative Marketing"],
        showStats: false,
    },
    {
        title: "the Power of Big Data",
        image: "/images/courses/power-of-big-data.jpg",
        categories: ["Data Science", "IT & Software", "Business"],
    },
    {
        title: "Balancing Productivity and Work",
        image: "/images/courses/balancing-productivity.jpg",
        categories: ["Productivity", "Business"],
    },
    {
        title: "Mastering Money Management",
        image: "/images/courses/mastering-money-management.jpg",
        categories: ["Business", "Freelance & Entrepreneurship"],
    },
    {
        title: "From Idea to Startup Success",
        image: "/images/courses/from-idea-to-startup-success.jpg",
        categories: ["Business", "Marketing", "Freelance & Entrepreneurship"],
    },
];

export function CourseBrowser() {
    const [activeCategory, setActiveCategory] = useState("Featured");
    const [query, setQuery] = useState("");
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        function handleSearch(event: Event) {
            const searchEvent = event as CustomEvent<string>;
            setQuery(searchEvent.detail ?? "");
            setActiveCategory("Featured");
        }

        window.addEventListener("bytespace:course-search", handleSearch);
        return () => window.removeEventListener("bytespace:course-search", handleSearch);
    }, []);

    const visibleCourses = useMemo(() => {
        const normalizedQuery = query.toLowerCase();

        return courses.filter((course) => {
            const matchesCategory =
                activeCategory === "Featured" ||
                course.categories.includes(activeCategory);
            const matchesQuery =
                normalizedQuery.length === 0 ||
                course.title.toLowerCase().includes(normalizedQuery) ||
                course.categories.some((category) =>
                    category.toLowerCase().includes(normalizedQuery),
                );

            return matchesCategory && matchesQuery;
        });
    }, [activeCategory, query]);

    function handleCategoryChange(category: string) {
        setActiveCategory(category);
        setQuery("");
    }

    return (
        <>
            <CourseDiscovery
                activeCategory={activeCategory}
                showMore={showMore}
                onCategoryChange={handleCategoryChange}
                onToggleMore={() => setShowMore((current) => !current)}
            />
            <FeaturedCourses courses={visibleCourses}/>
        </>
    );
}
