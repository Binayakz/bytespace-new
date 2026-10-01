import Image from "next/image";
import Link from "next/link";

type LogoProps = {
    variant?: "light" | "dark";
    priority?: boolean;
    className?: string;
};

export function Logo({
                         variant = "dark",
                         priority = false,
                         className = "",
                     }: LogoProps) {
    const wordmarkColor =
        variant === "light" ? "text-white" : "text-heading";

    return (
        <Link
            href="/"
            aria-label="ByteSpace home"
            className={`inline-flex items-center gap-2.5 ${className}`}
        >
            <Image
                src="/logos/bytespace-mark.svg"
                alt=""
                width={29}
                height={32}
                priority={priority}
            />

            <span
                className={`font-brand text-[26px] leading-none font-bold tracking-[-0.02em] ${wordmarkColor}`}
            >
        ByteSpace
      </span>
        </Link>
    );
}
