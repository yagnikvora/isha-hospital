import Image from "next/image";
import { aboutPageData } from "@/app/data/siteData";
import SlideIn from "../animations/SlideIn";
import FadeIn from "../animations/FadeIn";

export default function AboutContent() {
  const { aboutContent } = aboutPageData;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <SlideIn direction="left" className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md h-80 md:h-[450px]">
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-2xl" />
              <Image
                src="/images/about/about-doctor.jpg"
                alt="About Isha Hospital"
                fill
                className="object-cover rounded-2xl relative"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </SlideIn>

          {/* Content */}
          <FadeIn className="flex-1">
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              {aboutContent.subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
              {aboutContent.title}
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              {aboutContent.description}
            </p>
            <p className="text-text-secondary leading-relaxed">
              {aboutContent.description2}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
