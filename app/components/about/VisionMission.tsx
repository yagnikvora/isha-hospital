import { aboutPageData } from "@/app/data/siteData";
import FadeIn from "../animations/FadeIn";
import SlideIn from "../animations/SlideIn";

export default function VisionMission() {
  const { visionMission } = aboutPageData;

  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {visionMission.subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2">
              {visionMission.title}
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <SlideIn direction="left">
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed">{visionMission.vision}</p>
            </div>
          </SlideIn>

          <SlideIn direction="right">
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed">{visionMission.mission}</p>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
