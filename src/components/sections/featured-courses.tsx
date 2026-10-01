import {CourseCard} from "@/components/cards/course-card";
import {Container} from "@/components/layout/container";

export type Course = {
    title: string;
    image: string;
    categories: string[];
    showStats?: boolean;
};

type FeaturedCoursesProps = {
    courses: Course[];
};

export function FeaturedCourses({courses}: FeaturedCoursesProps) {
    return (
        <section
            id="featured-courses"
            aria-label="Featured courses"
            className="bg-white pb-17"
        >
            <Container>
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {courses.length > 0 ? (
                        courses.map((course) => (
                            <CourseCard
                                key={course.title}
                                title={course.title}
                                image={course.image}
                                showStats={course.showStats}
                            />
                        ))
                    ) : (
                        <p className="col-span-full py-12 text-center text-lg text-muted">
                            No courses match your search yet.
                        </p>
                    )}
                </div>
            </Container>
        </section>
    );
}
