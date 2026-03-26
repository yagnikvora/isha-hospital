import Image from "next/image";
import { aboutOurValuesSection } from "@/app/data/siteData";

const valuesBackgroundImage =
  "/images/common/AboutUs_OurValue_Section_Background.png";

export default function OurValuesSection() {
  return (
    <section className="pb-12 sm:pb-14 lg:pb-16">
      <div className="mx-4">
        <div className="overflow-hidden rounded-b-2xl border border-border-light">
          <div className="grid min-h-[420px] grid-cols-1 lg:min-h-[446px] lg:grid-cols-[51.2%_48.8%]">
            <div className="flex items-center bg-primary px-7 py-12 text-text-light sm:px-10 lg:px-14 xl:pl-65 xl:pr-20">
              <div className="max-w-[560px]">
                <p className="text-[16px] font-semibold">{aboutOurValuesSection.subtitle}</p>
                <h2 className="mt-5 max-w-[20ch] text-[38px] leading-[1.18] font-bold">
                  {aboutOurValuesSection.title}
                </h2>
                <p className="mt-5 max-w-[48ch] text-[14px] leading-[1.7] text-text-light/92 sm:text-[15px] xl:text-[16px]">
                  {aboutOurValuesSection.description}
                </p>
              </div>
            </div>

            <div className="relative px-4 py-7 sm:px-6 sm:py-8 lg:px-0 lg:py-0">
              <Image
                src={valuesBackgroundImage}
                alt=""
                aria-hidden="true"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/12" />

              <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:absolute lg:top-1/2 lg:left-[-44px] lg:w-[500px] lg:-translate-y-1/2 lg:gap-3.5 xl:left-[-48px] xl:w-[500px]">
                {aboutOurValuesSection.cards.map((card) => {
                  return (
                    <article
                      key={card.id}
                      className="group h-[182px] rounded-[8px] bg-secondary p-5 shadow-[0_10px_26px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:bg-topbar-text"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center">
                          <Image
                            src={card.icon}
                            alt=""
                            aria-hidden="true"
                            width={25}
                            height={25}
                            className="group-hover:brightness-0 group-hover:invert"
                          />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-[17px] leading-[1.34] font-bold text-text-primary transition-colors duration-300 group-hover:text-text-light">
                            {card.title}
                          </h3>
                          <p className="mt-3 text-[14px] leading-[1.55] text-text-secondary transition-colors duration-300 group-hover:text-text-light/92">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
