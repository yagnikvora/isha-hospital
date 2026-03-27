import Image from "next/image";
import { doctorsStaffSection } from "@/app/data/siteData";
import FadeIn from "../animations/FadeIn";

export default function DoctorsStaffSection() {
  return (
    <section className="pt-8 pb-7 sm:pt-10 lg:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto grid max-w-[860px] grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {doctorsStaffSection.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="mx-auto flex w-full max-w-[250px] items-center justify-center gap-4 sm:max-w-none sm:justify-center sm:gap-5"
              >
                  <Image
                    src={highlight.icon}
                    alt=""
                    aria-hidden="true"
                    width={24}
                    height={24}
                    className="h-12 w-12 object-contain sm:h-15 sm:w-15"
                  />
                <div className="min-w-[128px]">
                  <p className="text-[24px] font-bold text-text-primary sm:text-[30px]">
                    {highlight.value}
                  </p>
                  <p className="mt-1 text-[13px] text-text-secondary">
                    {highlight.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="mt-14 text-center sm:mt-20">
          <p className="text-[16px] font-bold uppercase tracking-wide text-topbar-text">
            {doctorsStaffSection.subtitle}
          </p>
          <h2 className="mt-3 text-[30px] font-bold leading-tight text-text-primary sm:text-[35px]">
            {doctorsStaffSection.title}
          </h2>
        </FadeIn>

        <div className="mx-auto mt-10 grid max-w-[860px] grid-cols-1 gap-8 sm:mt-12 md:grid-cols-2">
          {doctorsStaffSection.doctors.map((doctor) => (
            <FadeIn
              key={doctor.name}
              className="overflow-hidden rounded-[18px] bg-secondary shadow-[0_10px_30px_var(--color-contact-shadow)]"
            >
              <div className="relative h-[400px] w-full">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>
              <div className="bg-secondary px-6 py-7 text-center">
                <h3 className="text-[20px] font-bold leading-tight text-text-primary sm:text-[23px]">
                  {doctor.name}
                </h3>
                <p className="mt-2 text-[16px] text-text-secondary">
                  {doctor.qualification}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
