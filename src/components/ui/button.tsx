import type {ButtonHTMLAttributes} from "react";

const variantStyles = {
    primary:
        "bg-brand-lime text-heading hover:bg-[#c5eb16] focus-visible:outline-brand-lime",
    blue:
        "bg-brand-blue text-white hover:bg-[#0033c2] focus-visible:outline-brand-blue",
    dark:
        "bg-heading text-white hover:bg-body focus-visible:outline-heading",
    outline:
        "border border-border bg-transparent text-heading hover:bg-surface focus-visible:outline-heading",
} as const;

const sizeStyles = {
    small: "h-11 px-5 text-sm",
    default: "h-14 px-7 text-base",
} as const;

export type ButtonVariant = keyof typeof variantStyles;
export type ButtonSize = keyof typeof sizeStyles;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
};

export function Button({
                           variant = "primary",
                           size = "default",
                           className = "",
                           type = "button",
                           ...props
                       }: ButtonProps) {
    return (
        <button
            type={type}
            className={[
                "inline-flex items-center justify-center rounded-full font-medium",
                "transition-colors duration-200",
                "focus-visible:outline-2 focus-visible:outline-offset-2",
                "disabled:pointer-events-none disabled:opacity-50",
                variantStyles[variant],
                sizeStyles[size],
                className,
            ].join(" ")}
            {...props}
        />
    );
}
