import Image from "next/image";
import { aboutPageData } from "@/app/data/siteData";
import FadeIn from "../animations/FadeIn";
import SlideIn from "../animations/SlideIn";

export default function DeliverySection() {
  const { delivery } = aboutPageData;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <FadeIn className="flex-1">
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              {delivery.subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
              {delivery.title}
            </h2>
            <ul className="space-y-4">
              {delivery.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-secondary leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Image */}
          <SlideIn direction="right" className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md h-80 md:h-[400px]">
              <Image
                src="/images/about/delivery.jpg"
                alt="Quality healthcare delivery"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
