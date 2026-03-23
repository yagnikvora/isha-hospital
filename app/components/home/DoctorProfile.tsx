import Image from "next/image";
import { doctorProfile } from "@/app/data/siteData";
import FadeIn from "../animations/FadeIn";
import SlideIn from "../animations/SlideIn";
import Button from "../shared/Button";

export default function DoctorProfile() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <SlideIn direction="left" className="flex-1 flex justify-center">
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-3" />
              <Image
                src={doctorProfile.image}
                alt={doctorProfile.name}
                fill
                className="object-cover rounded-2xl relative"
                sizes="(max-width: 768px) 288px, 320px"
              />
            </div>
          </SlideIn>

          {/* Content */}
          <FadeIn className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Staff Doctors & Self Care
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {doctorProfile.name}
            </h2>
            <p className="text-primary font-medium mb-3">
              {doctorProfile.role}
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              {doctorProfile.description}
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Book Appointment
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
      </div>
    </section>
  );
}
