import FadeIn from "../animations/FadeIn";
import Button from "./Button";

type CTABannerProps = {
  heading: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
};

export default function CTABanner({
  heading,
  description,
  buttonText,
  buttonHref,
}: CTABannerProps) {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {heading}
          </h2>
          {description && (
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              {description}
            </p>
          )}
          <Button variant="secondary" size="lg" href={buttonHref}>
            {buttonText}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
