import Image from "next/image";
import { aboutTestimonialsSection } from "@/app/data/siteData";

const testimonialCardImage =
  "/images/testimonials/AboutUs_Testimonial_Section_Background.webp";

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-xl text-center">
          <p className="text-[16px] font-semibold uppercase tracking-wide text-topbar-text">
            {aboutTestimonialsSection.subtitle}
          </p>
          <h2 className="mt-3 text-[30px] font-bold text-text-primary sm:text-[36px]">
            {aboutTestimonialsSection.title}
          </h2>
          <p className="mx-auto mt-3 text-[14px] text-text-secondary">
            {aboutTestimonialsSection.description}
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-3 md:gap-4 lg:gap-5">
          {aboutTestimonialsSection.cards.map((card) => {
            return (
              <article key={card.id} className="group">
                <div
                  className="relative overflow-hidden rounded-[16px] border border-border-light bg-accent p-5 pb-6 text-center text-text-primary transition-all duration-300 hover:-translate-y-1 sm:p-7 sm:pb-8"
                  style={{ minHeight: "300px" }}
                >
                  <Image
                    src={testimonialCardImage}
                    alt=""
                    aria-hidden="true"
                    fill
                    className="pointer-events-none object-cover object-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-image-tint opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div className="relative z-10">
                    <div className="flex justify-center">
                      <Image
                        src="/svgs/Testimonials/quotes.svg"
                        alt=""
                        aria-hidden="true"
                        width={40}
                        height={40}
                        className="h-[40px] w-[40px] transition duration-300 group-hover:brightness-0 group-hover:invert"
                      />
                    </div>

                    <p
                      className="mt-8 min-h-[124px] text-[15px] leading-[1.8] italic text-text-primary transition-colors duration-300 group-hover:text-text-light"
                    >
                      &ldquo;{card.quote}&rdquo;
                    </p>

                    <div className="mt-5 flex items-center justify-center gap-1.5">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Image
                          key={index}
                          src={
                            index < card.rating
                              ? "/svgs/Testimonials/filled_star.svg"
                              : "/svgs/Testimonials/empty_star.svg"
                          }
                          alt=""
                          aria-hidden="true"
                          width={20}
                          height={20}
                          className="h-5 w-5"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative z-20 -mt-7 flex flex-col items-center text-center">
                  <Image
                    src="/svgs/Testimonials/user.svg"
                    alt=""
                    aria-hidden="true"
                    width={50}
                    height={50}
                    className="h-[50px] w-[50px]"
                  />
                  <h3 className="mt-4 text-[18px] font-bold text-text-primary">
                    {card.name}
                  </h3>
                  <p className="mt-1 text-[12px] text-text-secondary">{card.role}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
