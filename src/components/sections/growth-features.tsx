import Image from "next/image";
import {CourseCard} from "@/components/cards/course-card";
import {Container} from "@/components/layout/container";

const happyStudentAvatars = [
    "/images/avatars/student-avatar-01.png",
    "/images/avatars/student-avatar-02.png",
    "/images/avatars/student-avatar-03.png",
    "/images/avatars/student-avatar-04.png",
    "/images/avatars/student-avatar-05.png",
    "/images/avatars/course-avatar-01.png",
];

const creatorBenefits = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
];

function LearningProgressCard() {
    return (
        <div className="absolute top-66 right-0 z-30 w-62 rounded-2xl bg-white p-5 text-body shadow-xl lg:top-91 lg:-right-34">
            <p className="text-sm font-medium">Learning Progress</p>
            <p className="mt-2 font-heading text-5xl leading-none font-semibold">
                55%
            </p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface">
                <div className="h-full w-[55%] rounded-full bg-brand-lime"/>
            </div>
        </div>
    );
}

function RevenueCards() {
    return (
        <div className="absolute top-28 left-0 z-10 flex flex-col gap-8 text-white lg:top-32 lg:left-3">
            <div className="w-52 rounded-2xl bg-brand-blue p-4 shadow-lg">
                <p className="text-base">Total Revenue</p>
                <p className="text-xs text-white/80">July 1-28</p>
                <p className="mt-2 font-heading text-2xl font-semibold">$120.29</p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/80">
                    <div className="h-full w-[55%] rounded-full bg-brand-lime"/>
                </div>
            </div>

            <div className="w-37 rounded-2xl bg-brand-blue p-4 shadow-lg">
                <p className="text-sm">Year to Date</p>
                <p className="text-xs text-white/80">2023</p>
                <p className="mt-2 font-heading text-xl font-semibold">$1,200.38</p>
                <span className="mt-3 inline-flex rounded-full bg-brand-lime px-2 py-1 text-xs text-heading">
                    +12%
                </span>
            </div>
        </div>
    );
}

function HappyStudentsCard() {
    return (
        <div className="absolute right-0 bottom-10 z-30 w-71 rounded-2xl bg-white p-4 text-body shadow-xl lg:right-4 lg:bottom-17">
            <p className="font-medium">Happy Students</p>
            <p className="text-xs text-muted">
                4.5 (240) <span className="text-brand-lime">★</span>
            </p>

            <div className="mt-3 flex items-center">
                {happyStudentAvatars.map((avatar, index) => (
                    <Image
                        key={avatar}
                        src={avatar}
                        alt=""
                        width={36}
                        height={36}
                        className={`rounded-full border-2 border-white ${
                            index === 0 ? "" : "-ml-2"
                        }`}
                    />
                ))}
                <span className="-ml-2 flex size-11 items-center justify-center rounded-full border-2 border-white bg-brand-lime text-sm font-medium text-heading">
                    2K+
                </span>
            </div>
        </div>
    );
}

export function GrowthFeatures() {
    return (
        <section
            aria-label="ByteSpace learning and creator benefits"
            className="overflow-hidden bg-[radial-gradient(circle_at_18%_5%,rgba(212,251,32,0.42),transparent_30%),radial-gradient(circle_at_96%_6%,rgba(219,227,255,0.72),transparent_34%),radial-gradient(circle_at_8%_94%,rgba(212,251,32,0.38),transparent_28%),radial-gradient(circle_at_91%_92%,rgba(194,211,255,0.7),transparent_34%)]"
        >
            <Container>
                <div className="grid lg:h-182.5 lg:grid-cols-2">
                    <div className="pt-20 lg:pt-50 lg:pl-3">
                        <h2 className="max-w-150 font-heading text-4xl leading-[1.18] font-semibold tracking-[-0.03em] text-heading lg:text-5xl">
                            Your Path to Professional
                            <br/> Growth Starts Here!
                        </h2>

                        <p className="mt-10 max-w-120 text-base leading-8 text-body lg:text-lg">
                            Explore our curated selection of courses tailored to enhance
                            your capabilities and accelerate your career journey. Whether
                            you are looking to sharpen specific skills, gain industry
                            expertise, or embark on a new career path entirely, we have the
                            resources you need.
                        </p>

                        <dl className="mt-10 flex gap-12 sm:gap-16">
                            <div>
                                <dt className="font-heading text-4xl font-medium text-brand-blue">12K</dt>
                                <dd className="mt-1 text-lg text-body">Students</dd>
                            </div>
                            <div>
                                <dt className="font-heading text-4xl font-medium text-brand-blue">70+</dt>
                                <dd className="mt-1 text-lg text-body">Courses</dd>
                            </div>
                            <div>
                                <dt className="font-heading text-4xl font-medium text-brand-blue">16</dt>
                                <dd className="mt-1 text-lg text-body">Creators</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="relative h-150 lg:h-full">
                        <div className="absolute top-16 left-0 z-0 w-101 lg:top-32 lg:left-26">
                            <CourseCard
                                title="Learn Figma from Basic"
                                image="/images/courses/learn-figma-from-basic.jpg"
                            />
                        </div>

                        <Image
                            src="/images/features/professional-growth-student.png"
                            alt="Student developing professional skills online"
                            width={1444}
                            height={1030}
                            className="absolute top-28 left-7 z-20 w-145 max-w-none lg:top-45 lg:left-30 lg:w-190"
                        />

                        <Image
                            src="/images/features/professional-growth-decoration.png"
                            alt=""
                            width={434}
                            height={432}
                            aria-hidden="true"
                            className="absolute top-20 -right-14 z-20 w-36 lg:top-57 lg:-right-36"
                        />

                        <LearningProgressCard/>
                    </div>
                </div>

                <div className="grid lg:h-182.5 lg:grid-cols-2">
                    <div className="relative h-165 lg:h-full">
                        <RevenueCards/>

                        <Image
                            src="/images/features/course-creator.png"
                            alt="Course creator holding a tablet"
                            width={1158}
                            height={1438}
                            className="absolute top-20 left-2 z-20 w-125 max-w-none lg:top-20 lg:left-8 lg:w-145"
                        />

                        <Image
                            src="/images/features/course-creator-decoration.png"
                            alt=""
                            width={434}
                            height={432}
                            aria-hidden="true"
                            className="absolute top-52 right-0 z-20 w-36 lg:top-61 lg:right-14"
                        />

                        <HappyStudentsCard/>
                    </div>

                    <div className="pb-20 lg:-mr-10 lg:pt-50 lg:pb-0 lg:pl-22">
                        <h2 className="font-heading text-4xl leading-[1.18] font-semibold tracking-[-0.03em] text-heading lg:text-5xl">
                            Create &amp; Manage
                            <br/> Courses Easily.
                        </h2>

                        <p className="mt-10 max-w-135 text-base leading-8 text-body lg:text-lg">
                            <strong className="font-semibold">ByteSpace</strong> supports
                            individuals or entities in the creation, publication, and
                            administration of educational courses.
                        </p>

                        <ul className="mt-10 space-y-4 text-lg text-body">
                            {creatorBenefits.map((benefit) => (
                                <li key={benefit} className="flex items-center gap-3">
                                    <span className="flex size-6 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                                        ✓
                                    </span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
