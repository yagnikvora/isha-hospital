import Image from "next/image";
import Link from "next/link";

export default function FindRightCare() {
  return (
    <section className="relative z-[99] bg-secondary px-3 pb-0 pt-7 sm:px-4 sm:pt-8">
      <div className="mx-auto max-w-[1460px]">
        <div className="relative mx-auto -mb-[100px] max-w-[820px] overflow-visible rounded-[14px] border border-primary/25 bg-surface-soft shadow-[0_10px_30px_rgba(0,0,0,0.11)]">
          <div className="relative grid grid-cols-1 items-end md:grid-cols-[1.08fr_0.92fr]">
            <div className="px-7 pb-8 pt-9 sm:px-9 sm:pb-9 sm:pt-10">
              <h2 className="max-w-[320px] text-[22px] font-bold leading-[1.28] text-text-primary sm:text-[24px]">
                Let&apos;s Help You Find the Right Care
              </h2>

              <Link
                href="/contact"
                className="mt-6 inline-flex min-w-[168px] items-center justify-center gap-4 rounded-full bg-topbar-text px-7 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                <span>Contact Us</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="relative h-[160px] sm:h-[170px] md:h-[184px]">
              <div className="pointer-events-none absolute bottom-0 right-2 h-[210px] w-[192px] sm:h-[228px] sm:w-[208px] md:right-4 md:h-[266px] md:w-[244px]">
                <Image
                  src="/images/common/Homepage(HeroSection).png"
                  alt="Doctor"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 192px, 244px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
