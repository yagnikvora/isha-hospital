import Link from "next/link";
import Image from "next/image";
import Navbar from "../layout/Navbar";

type PageHeroBannerProps = {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
};

export default function PageHeroBanner({
  title,
  description,
  breadcrumbs,
}: PageHeroBannerProps) {
  return (
    <section className="relative bg-primary overflow-hidden mx-5 sm:mx-8 lg:mx-12 mt-2 rounded-[1.25rem] lg:rounded-[1.5rem]">
      <div className="absolute inset-0">
        <Image
          src="/images/common/AboutUs & Contact Us(Hero Section Background).png"
          alt="Hospital Ward Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 hero-overlay-page" />

      <div className="relative z-10">
        <Navbar embedded />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
          {title}
        </h1>
        {description && (
          <p className="max-w-xl mx-auto text-secondary/85 text-sm md:text-base leading-relaxed mb-5">
            {description}
          </p>
        )}
        {breadcrumbs && (
          <nav className="flex justify-center items-center gap-2 text-sm text-secondary/80">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {index > 0 && <span className="text-secondary/50">&gt;</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-secondary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-secondary">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
