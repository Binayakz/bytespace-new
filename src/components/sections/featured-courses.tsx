import {CourseCard} from "@/components/cards/course-card";
import {Container} from "@/components/layout/container";

const courses = [
    {
        title: "Learn Figma from Basic",
        image: "/images/courses/learn-figma-from-basic.jpg",
    },
    {
        title: "Build Digital Asset",
        image: "/images/courses/build-digital-asset.jpg",
        showStats: false,
    },
    {
        title: "the Power of Big Data",
        image: "/images/courses/power-of-big-data.jpg",
    },
    {
        title: "Balancing Productivity and Work",
        image: "/images/courses/balancing-productivity.jpg",
    },
    {
        title: "Mastering Money Management",
        image: "/images/courses/mastering-money-management.jpg",
    },
    {
        title: "From Idea to Startup Success",
        image: "/images/courses/from-idea-to-startup-success.jpg",
    },
];

export function FeaturedCourses() {
    return (
        <section
            id="featured-courses"
            aria-label="Featured courses"
            className="bg-white pb-17"
        >
            <Container>
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {courses.map((course) => (
                        <CourseCard key={course.title} {...course}/>
                    ))}
                </div>
            </Container>
        </section>
    );
}
