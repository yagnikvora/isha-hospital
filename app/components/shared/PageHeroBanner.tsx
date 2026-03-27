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
    <section className="relative mt-2 mx-2 overflow-hidden rounded-[1.1rem] bg-primary sm:mx-8 sm:rounded-[1.25rem] lg:mx-5 lg:rounded-[1.5rem]">
      <div className="absolute inset-0">
        <Image
          src="/images/common/AboutUs_and_Contact_Us_Hero_Section_Background.webp"
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 text-center sm:py-20 md:py-24">
        <h1 className="mb-4 text-3xl font-bold text-secondary sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mb-5 max-w-xl text-secondary/85 text-sm leading-relaxed md:text-base">
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
