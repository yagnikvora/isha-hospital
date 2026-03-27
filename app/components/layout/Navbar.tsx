"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks } from "@/app/data/siteData";

type NavbarProps = {
  embedded?: boolean;
  className?: string;
};

export default function Navbar({ embedded = false, className = "" }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isContactPage = pathname === "/contact";

  const navClass = embedded
    ? "relative z-30"
    : "bg-secondary shadow-sm border-b border-border sticky top-0 z-50";

  const desktopLinkClass = (active: boolean) => {
    if (embedded) {
      return `text-sm font-medium transition-colors py-2 ${
        active
          ? "bg-secondary text-primary px-4 rounded-full"
          : "text-text-light hover:text-secondary"
      }`;
    }

    return `text-sm font-medium transition-colors relative py-2 ${
      active ? "text-primary" : "text-text-secondary hover:text-primary"
    }`;
  };

  return (
    <nav className={`${navClass} ${className}`.trim()}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-7">
        <div className="flex h-[68px] items-center justify-between lg:h-[76px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.svg"
              alt="Isha Hospital Logo"
              width={280}
              height={92}
              className="h-12 w-auto md:h-[4.25rem]"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={desktopLinkClass(pathname === link.href)}
              >
                {link.label}
                {!embedded && pathname === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block min-w-[166px]">
            {!isContactPage && (
              <Link
                href="/contact"
                className="bg-topbar-text text-text-light px-6 py-4 rounded-full text-sm font-semibold hover:bg-primary transition-all"
              >
                Get In Touch
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 ${embedded ? "text-text-light" : "text-text-primary"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {embedded && <div className="h-px bg-secondary/30" />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className={`md:hidden overflow-hidden border-t ${
              embedded
                ? "bg-secondary/94 backdrop-blur-md border-secondary/40"
                : "bg-secondary border-border"
            }`}
          >
            <motion.div
              className="space-y-2 px-4 py-4"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
                show: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: -6 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-text-secondary hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {!isContactPage && (
                <motion.div
                  variants={{ hidden: { opacity: 0, y: -6 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="mt-3 block rounded-full bg-topbar-text px-7 py-3 text-center text-sm font-semibold text-text-light transition-colors hover:bg-primary"
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
