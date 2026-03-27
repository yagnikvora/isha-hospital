import Image from "next/image";
import Link from "next/link";
import FindRightCare from "@/app/components/shared/FindRightCare";
import { contactInfo, footerData } from "@/app/data/siteData";
import FadeIn from "../animations/FadeIn";
import SlideIn from "../animations/SlideIn";

export default function Footer() {
  return (
    <>
      <FindRightCare />
      <footer className="bg-secondary pt-0 pb-3 sm:px-2 sm:pb-4">
        <div className="relative mx-2 overflow-hidden rounded-[14px] bg-primary text-text-light sm:mx-3">
        <Image
          src="/images/common/Footer_and_Faq_and_Why_Choose_Us_background_Image.png"
          alt="Footer background"
          fill
          priority={false}
          className="object-cover object-center opacity-[0.9]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--color-image-tint)", opacity: 0.20 }}
        />

          <div className="relative mx-auto max-w-[1060px] px-4 pb-4 pt-[130px] sm:px-8 sm:pt-[158px] lg:px-10 lg:pt-[170px]">
          <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_0.8fr] lg:gap-7">
            <SlideIn direction="left" delay={0.05}>
              <div className="min-w-0">
                <Link href="/" className="inline-flex items-center">
                  <Image
                    src="/Logo.svg"
                    alt="Isha Hospital logo"
                    width={210}
                    height={89}
                    className="h-auto w-[170px] sm:w-[182px]"
                  />
                </Link>
                <p className="mt-6 max-w-[300px] text-[12.5px] leading-7 text-white/85 sm:mt-7 sm:text-[11.5px]">
                  {footerData.description}
                </p>
              </div>
            </SlideIn>

            <FadeIn delay={0.12}>
              <div className="min-w-0">
                <h3 className="text-[23px] font-semibold leading-none">Contact Us</h3>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center text-white/90">
                      <svg
                        className="h-[18px] w-[18px]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M3 7.5A1.5 1.5 0 0 1 4.5 6h15A1.5 1.5 0 0 1 21 7.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-11z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M7.5 10.5h9M7.5 14h9"
                        />
                      </svg>
                    </span>
                    <p className="max-w-[236px] text-[12.5px] leading-7 text-white/90 sm:text-[11.5px]">
                      {contactInfo.address}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center text-white/90">
                      <svg
                        className="h-[18px] w-[18px]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .95.69l1.5 4.49a1 1 0 0 1-.5 1.21l-2.26 1.13a11.04 11.04 0 0 0 5.52 5.52l1.13-2.26a1 1 0 0 1 1.21-.5l4.49 1.5a1 1 0 0 1 .69.94V19a2 2 0 0 1-2 2h-1C9.72 21 3 14.28 3 6V5z"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[12.5px] leading-6 text-white/90 sm:text-[11.5px]">For Emergency Call</p>
                      <a
                        href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                        className="mt-1 inline-block break-words text-[23px] font-semibold leading-none text-white"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="min-w-0">
                <h3 className="text-[23px] font-semibold leading-none">Our Treatments</h3>
                <ul className="mt-6 space-y-[14px]">
                  {footerData.treatments.map((treatment, index) => (
                    <li key={`${treatment}-${index}`}>
                      <FadeIn delay={0.24 + index * 0.05} duration={0.45} direction="none">
                        <button
                          type="button"
                          className="group inline-flex items-center text-left text-[12.5px] leading-none text-white/90 transition-colors hover:text-white sm:text-[11.5px]"
                        >
                          <span>{treatment}</span>
                        </button>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <SlideIn direction="right" delay={0.2}>
              <div className="min-w-0">
                <h3 className="text-[23px] font-semibold leading-none">Quick Links</h3>
                <ul className="mt-6 space-y-[14px]">
                  {footerData.quickLinks.slice(0, 3).map((link, index) => (
                    <li key={link.href}>
                      <FadeIn delay={0.24 + index * 0.06} duration={0.45} direction="none">
                        <Link
                          href={link.href}
                          scroll
                          className="text-[12.5px] leading-none text-white/90 transition-colors hover:text-white sm:text-[11.5px]"
                        >
                          {link.label}
                        </Link>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideIn>
          </div>

            <FadeIn delay={0.3} direction="none">
              <div className="mt-12 border-t border-red-700 pt-[16px]">
                <p className="text-center text-[11px] text-white/[0.82]">
                  Nytrox (info@nytrox.com) &copy; 2026. All rights reserved
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </footer>
    </>
  );
}
