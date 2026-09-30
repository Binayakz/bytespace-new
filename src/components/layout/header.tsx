"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {Logo} from "@/components/brand/logo";
import {buttonStyles} from "@/components/ui/button";
import {Container} from "./container";

const navigation = [
    {label: "Home", href: "#home"},
    {label: "Courses", href: "#courses"},
    {label: "About Us", href: "#about"},
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header className="relative z-50 bg-brand-blue text-white">
            <Container className="flex h-20 items-center justify-between">
                <Logo variant="light" priority/>

                <nav
                    aria-label="Primary navigation"
                    className="hidden items-center gap-9 lg:flex"
                >
                    {navigation.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-[15px] font-medium transition-colors hover:text-brand-lime focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-brand-lime focus-visible:outline-offset-4"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden items-center gap-6 lg:flex">
                    <Link
                        href="/cart"
                        aria-label="View shopping cart"
                        className="inline-flex size-11 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-brand-lime focus-visible:outline-offset-2"
                    >
                        <Image
                            src="/icons/shopping-bag-light.svg"
                            alt=""
                            width={16}
                            height={20}
                        />
                    </Link>

                    <Link
                        href="/login"
                        className="text-[15px] font-medium transition-colors hover:text-brand-lime focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-brand-lime focus-visible:outline-offset-4"
                    >
                        Log in
                    </Link>

                    <Link
                        href="/signup"
                        className={buttonStyles({
                            size: "small",
                            className: "min-w-25",
                        })}
                    >
                        Sign up
                    </Link>
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
                        <nav
                            aria-label="Mobile navigation"
                            className="flex flex-col"
                        >
                            {navigation.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="border-b border-white/10 py-4 text-base font-medium transition-colors hover:text-brand-lime"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-6 flex items-center gap-3">
                            <Link
                                href="/login"
                                onClick={closeMenu}
                                className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-white/30 font-medium transition-colors hover:bg-white/10"
                            >
                                Log in
                            </Link>

                            <Link
                                href="/signup"
                                onClick={closeMenu}
                                className={buttonStyles({
                                    size: "small",
                                    className: "flex-1",
                                })}
                            >
                                Sign up
                            </Link>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}
