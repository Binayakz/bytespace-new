"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {Logo} from "@/components/brand/logo";
import {Container} from "./container";

const navigation = [
    {label: "Home", href: "#home"},
    {label: "Courses", href: "#featured-courses"},
    {label: "Creators", href: "#creators"},
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header className="relative z-50 text-white">
            <Container className="flex h-20 items-center justify-between lg:h-30">
                <Logo variant="light" priority/>

                <nav
                    aria-label="Primary navigation"
                    className="hidden items-center gap-8 lg:flex"
                >
                    {navigation.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-base transition-colors hover:text-brand-lime focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-brand-lime focus-visible:outline-offset-4"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden items-center gap-7 lg:flex">
                    <button
                        type="button"
                        disabled
                        title="Sign in is available as a bonus feature"
                        className="cursor-not-allowed text-base"
                    >
                        Sign In
                    </button>

                    <button
                        type="button"
                        disabled
                        title="Registration is available as a bonus feature"
                        className="cursor-not-allowed text-base"
                    >
                        Join Us
                    </button>

                    <button
                        type="button"
                        disabled
                        aria-label="View shopping cart"
                        title="Shopping cart is available as a bonus feature"
                        className="inline-flex size-11 cursor-not-allowed items-center justify-center rounded-full"
                    >
                        <Image
                            src="/icons/shopping-bag-light.svg"
                            alt=""
                            width={16}
                            height={20}
                        />
                    </button>
                </div>

                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen((current) => !current)}
                    className="flex size-11 flex-col items-center justify-center gap-1.5 rounded-full transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-brand-lime focus-visible:outline-offset-2 lg:hidden"
                >
          <span
              className={`h-0.5 w-5 bg-white transition-transform ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
          />
                    <span
                        className={`h-0.5 w-5 bg-white transition-opacity ${
                            isMenuOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`h-0.5 w-5 bg-white transition-transform ${
                            isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                        }`}
                    />
                </button>
            </Container>

            {isMenuOpen && (
                <div
                    id="mobile-navigation"
                    className="absolute inset-x-0 top-full border-t border-white/15 bg-brand-blue shadow-xl lg:hidden"
                >
                    <Container className="flex flex-col py-6">
                        <nav aria-label="Mobile navigation" className="flex flex-col">
                            {navigation.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="border-b border-white/10 py-4 font-medium transition-colors hover:text-brand-lime"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-6 flex gap-3">
                            <button
                                type="button"
                                disabled
                                className="inline-flex h-11 flex-1 cursor-not-allowed items-center justify-center rounded-full border border-white/30 font-medium"
                            >
                                Sign In
                            </button>

                            <button
                                type="button"
                                disabled
                                className="inline-flex h-11 flex-1 cursor-not-allowed items-center justify-center rounded-full bg-brand-lime font-medium text-heading"
                            >
                                Join Us
                            </button>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}
