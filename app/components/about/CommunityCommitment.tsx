import { aboutPageData } from "@/app/data/siteData";
import FadeIn from "../animations/FadeIn";

export default function CommunityCommitment() {
  const { community } = aboutPageData;

  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <FadeIn>
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {community.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            {community.title}
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-3xl mx-auto">
            {community.description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
