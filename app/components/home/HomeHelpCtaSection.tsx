import Link from "next/link";
import Image from "next/image";
import FadeIn from "../animations/FadeIn";
import { contactInfo, homeHelpCtaSection } from "@/app/data/siteData";

export default function HomeHelpCtaSection() {
	return (
		<section className="bg-secondary pb-12 pt-0 sm:pb-16 lg:pb-20">
			<div className="bg-primary">
				<div className="relative mx-auto max-w-[1260px] px-4 sm:px-6 lg:h-[300px] lg:px-10">
					<FadeIn className="rounded-b-2xl border-x border-b border-primary/35 bg-white p-6 sm:p-8 lg:absolute lg:left-8 lg:top-0 lg:z-20 lg:h-[350px] lg:w-[34%] lg:p-12">
						<h3 className="text-[22px] font-bold leading-[1.18] text-text-primary sm:text-[25px]">
							{homeHelpCtaSection.leftTitle}
						</h3>

						<p className="mt-4 text-[13px] leading-[1.75] text-text-secondary">
							{homeHelpCtaSection.leftDescription}
						</p>

						<div className="mt-6 space-y-5">
							<div className="flex items-start gap-4">
								<span className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-topbar-text text-text-light">
									<Image
										src="/Call_icon.svg"
										alt="Call"
										width={20}
										height={20}
										className="h-13 w-13 object-contain"
									/>
								</span>

								<div>
									<p className="text-[14px] text-text-secondary">For Emergency Call</p>
									<a
										href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
										className="mt-1 inline-block text-[18px] font-bold leading-none text-text-primary"
									>
										{contactInfo.phone}
									</a>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<span className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-topbar-text text-text-light">
									<Image
										src="/Email_icon.svg"
										alt="Email"
										width={20}
										height={20}
										className="h-13 w-13 object-contain"
									/>
								</span>

								<div>
									<p className="text-[14px] text-text-secondary">Send Us Email</p>
									<a
										href={`mailto:${contactInfo.email}`}
										className="mt-1 inline-block break-all text-[18px] font-bold leading-[1.05] text-text-primary"
									>
										{contactInfo.email}
									</a>
								</div>
							</div>
						</div>
					</FadeIn>

					<FadeIn className="px-1 pb-10 pt-8 text-text-light sm:px-2 sm:pb-12 sm:pt-12 lg:ml-[44%] lg:px-0 lg:pt-14">
						<p className="text-[14px] font-semibold tracking-wide text-text-light/90">
							{homeHelpCtaSection.rightEyebrow}
						</p>
						<h2 className="mt-3 max-w-[28ch] text-[26px] font-bold leading-[1.2] text-text-light sm:text-[30px]">
							{homeHelpCtaSection.rightTitle}
						</h2>
						<Link
							href={homeHelpCtaSection.rightButtonHref}
							scroll
							className="mt-7 inline-flex min-w-[190px] items-center justify-center gap-4 rounded-full bg-secondary px-6 py-3 text-[15px] font-semibold text-topbar-text transition-colors duration-300 hover:bg-accent sm:mt-8 sm:min-w-[210px] sm:px-7 sm:text-[16px]"
						>
							<span>{homeHelpCtaSection.rightButtonLabel}</span>
							<svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path
									d="M5 12h14m-5-5 5 5-5 5"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</Link>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
