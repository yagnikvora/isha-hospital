import Image from "next/image";
import { doctorsStaffSection } from "@/app/data/siteData";
import FadeIn from "../animations/FadeIn";

export default function DoctorsStaffSection() {
  return (
    <section className="pb-16 sm:pb-18 sm:pt-10 lg:pb-20 lg:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto flex max-w-[720px] flex-wrap items-center justify-center gap-x-9 gap-y-5 sm:gap-x-12">
            {doctorsStaffSection.highlights.map((highlight) => (
              <div key={highlight.label} className="flex items-center gap-7">
                  <Image
                    src={highlight.icon}
                    alt=""
                    aria-hidden="true"
                    width={24}
                    height={24}
                    className="h-15 w-15 object-contain"
                  />
                <div>
                  <p className="text-[30px] font-bold text-text-primary">
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

        <FadeIn className="mt-20 text-center">
          <p className="text-[16px] font-bold uppercase tracking-wide text-topbar-text">
            {doctorsStaffSection.subtitle}
          </p>
          <h2 className="mt-3 text-[35px] font-bold leading-tight text-text-primary">
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
