import Image from "next/image";

const courseAvatars = [
    "/images/avatars/course-avatar-01.png",
    "/images/avatars/course-avatar-02.png",
    "/images/avatars/course-avatar-03.png",
    "/images/avatars/course-avatar-04.png",
];

type CourseCardProps = {
    title: string;
    image: string;
    showStats?: boolean;
};

export function CourseCard({
                               title,
                               image,
                               showStats = true,
                           }: CourseCardProps) {
    return (
        <article className="rounded-3xl border border-border bg-white p-4">
            <div className="relative aspect-[682/391] overflow-hidden rounded-xl">
                <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 373px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                />

                {showStats && (
                    <div className="absolute right-2 bottom-3 left-2 flex items-center justify-between gap-1 text-[10px] text-body sm:right-3 sm:bottom-4 sm:left-3 sm:gap-2 sm:text-sm">
                        <span className="whitespace-nowrap rounded-full bg-white/75 px-2 py-1.5 backdrop-blur-sm sm:px-3">
                            17 Lessons
                        </span>
                        <span className="whitespace-nowrap rounded-full bg-white/75 px-2 py-1.5 backdrop-blur-sm sm:px-3">
                            2 hours 16 mins
                        </span>
                        <span className="whitespace-nowrap rounded-full bg-white/75 px-2 py-1.5 backdrop-blur-sm sm:px-3">
                            59 Comments
                        </span>
                    </div>
                )}
            </div>

            <div className="mt-5 flex min-w-0 items-center gap-3">
                <h3 className="min-w-0 flex-1 truncate font-heading text-[22px] leading-7 font-semibold tracking-[-0.025em] text-heading">
                    {title}
                </h3>

                <div
                    aria-label="Rated 4.5 out of 5"
                    className="flex shrink-0 items-center gap-1 text-xl text-body"
                >
                    <span>4.5</span>
                    <Image
                        src="/icons/course-rating-star.svg"
                        alt=""
                        width={24}
                        height={24}
                    />
                </div>
            </div>

            <p className="mt-0.5 text-base leading-5 text-muted">
                by <span className="text-brand-blue">purepearl studio</span>
            </p>

            <div className="mt-4 flex items-center justify-between gap-4">
                <span className="flex h-8 items-center gap-2 rounded-full bg-surface px-4 text-base text-body">
                    <Image
                        src="/icons/course-level.svg"
                        alt=""
                        width={20}
                        height={20}
                    />
                    Beginner
                </span>

                <div className="flex items-center" aria-label="More than 26 learners">
                    {courseAvatars.map((avatar, index) => (
                        <Image
                            key={avatar}
                            src={avatar}
                            alt=""
                            width={32}
                            height={32}
                            className={`rounded-full border border-white ${
                                index === 0 ? "" : "-ml-2"
                            }`}
                        />
                    ))}
                    <span className="-ml-2 flex size-8 items-center justify-center rounded-full border border-white bg-brand-lime text-base text-heading">
                        26+
                    </span>
                </div>
            </div>

            <p className="mt-4 leading-none">
                <span className="font-heading text-[28px] font-semibold text-brand-blue">
                    $25
                </span>
                <span className="text-base text-muted">/lifetime</span>
            </p>
        </article>
    );
}
