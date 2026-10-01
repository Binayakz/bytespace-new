import Image from "next/image";
import {Container} from "@/components/layout/container";

const testimonials = [
    {
        name: "Sarah M.",
        role: "Enthusiastic Learner",
        image: "/images/testimonials/sarah-m.png",
        quote:
            '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    },
    {
        name: "James L.",
        role: "Lifelong Learner",
        image: "/images/testimonials/james-l.png",
        quote:
            '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    },
    {
        name: "Alex B.",
        role: "Inspired Creator",
        image: "/images/testimonials/alex-b.png",
        quote:
            '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    },
];

export function Testimonials() {
    return (
        <section
            aria-labelledby="testimonials-heading"
            className="min-h-196 bg-[radial-gradient(circle_at_56%_33%,rgba(212,251,32,0.48),transparent_31%),radial-gradient(circle_at_100%_58%,rgba(212,251,32,0.38),transparent_29%),radial-gradient(circle_at_0%_100%,rgba(190,207,255,0.72),transparent_34%)] py-20"
        >
            <Container>
                <div className="grid gap-10 lg:grid-cols-2">
                    <h2
                        id="testimonials-heading"
                        className="pt-10 font-heading text-4xl leading-[1.22] font-semibold tracking-[-0.035em] text-heading lg:text-5xl"
                    >
                        Discover What Our
                        <br/> Community Is Saying
                    </h2>

                    <p className="max-w-140 text-base leading-8 text-body lg:text-lg">
                        At ByteSpace, our vibrant community of learners and creators is
                        at the heart of what we do. Hear directly from those who have
                        experienced the transformative journey of learning and creating
                        on our platform. Explore testimonials that reflect the diverse
                        perspectives of enthusiastic learners and accomplished creators.
                    </p>
                </div>

                <div className="mt-14 grid items-start gap-10 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.name}
                            className="rounded-3xl bg-white p-6"
                        >
                            <Image
                                src={testimonial.image}
                                alt={`${testimonial.name}, ${testimonial.role}`}
                                width={80}
                                height={80}
                                className="rounded-full"
                            />

                            <h3 className="mt-7 font-heading text-[22px] font-semibold text-heading">
                                {testimonial.name}
                            </h3>
                            <p className="mt-1 text-xl text-brand-blue">
                                {testimonial.role}
                            </p>
                            <blockquote className="mt-10 text-lg leading-8 text-body">
                                {testimonial.quote}
                            </blockquote>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
