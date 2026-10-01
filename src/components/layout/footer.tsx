import {Logo} from "@/components/brand/logo";
import {Container} from "@/components/layout/container";

const footerColumns = [
    [
        ["Featured Courses", "#featured-courses"],
        ["Featured Categories", "#featured-categories"],
        ["Business", "#featured-categories"],
        ["IT", "#featured-categories"],
        ["Design", "#featured-categories"],
    ],
    [
        ["Development", "#featured-categories"],
        ["Marketing", "#featured-categories"],
        ["Photography", "#featured-categories"],
        ["Finance", "#featured-categories"],
        ["Sport", "#featured-categories"],
    ],
    [
        ["Become a Creator", "#newsletter"],
        ["Affiliate Program", "#newsletter"],
        ["Contact", "mailto:hello@bytespace.com"],
        ["Help", "#home"],
        ["About", "#home"],
    ],
];

export function Footer() {
    return (
        <footer id="newsletter" className="min-h-131.25 bg-white">
            <Container className="pt-17.5 pb-8">
                <div className="grid gap-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
                    <div>
                        <Logo/>
                        <p className="mt-7 text-base text-body">
                            Stay Up to date with our latest features and releases by
                            joining our newsletter.
                        </p>

                        <form className="mt-12 flex max-w-132.5 gap-6">
                            <label className="sr-only" htmlFor="newsletter-email">
                                Email address
                            </label>
                            <input
                                id="newsletter-email"
                                name="email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="h-13 min-w-0 flex-1 rounded-full border border-border px-7 text-base outline-none placeholder:text-body focus:border-brand-blue"
                            />
                            <button
                                type="submit"
                                className="h-13 rounded-full bg-brand-lime px-7 text-base text-heading transition-colors hover:bg-[#c5eb16] focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2"
                            >
                                Search
                            </button>
                        </form>

                        <p className="mt-7 max-w-130 text-sm leading-6 text-body">
                            By subscribing, you agree to our Privacy Policy and consent to
                            receive updates from our company.
                        </p>
                    </div>

                    <nav
                        aria-label="Footer navigation"
                        className="grid grid-cols-2 gap-10 sm:grid-cols-3"
                    >
                        {footerColumns.map((column) => (
                            <ul key={column[0][0]} className="space-y-7 text-base text-body">
                                {column.map(([label, href]) => (
                                    <li key={label}>
                                        <a className="hover:text-brand-blue" href={href}>
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </nav>
                </div>

                <div className="mt-32 border-t border-border pt-8 text-sm text-body sm:flex sm:items-center sm:justify-between">
                    <p>@ 2023 ByteSpace. All rights reserved.</p>
                    <div className="mt-5 flex flex-wrap gap-8 sm:mt-0">
                        <a href="#newsletter" className="hover:text-brand-blue">Privacy Policy</a>
                        <a href="#newsletter" className="hover:text-brand-blue">Terms of Service</a>
                        <a href="#newsletter" className="hover:text-brand-blue">Cookies Settings</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
