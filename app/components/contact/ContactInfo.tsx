import { contactInfo } from "@/app/data/siteData";
import SlideIn from "../animations/SlideIn";

export default function ContactInfo() {
  return (
    <SlideIn direction="left">
      <div>
        <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          Contact Us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
          Feel Free To Contact Us
        </h2>
        <p className="text-text-secondary leading-relaxed mb-8">
          Get in touch for appointments, inquiries, or to learn more about our
          healthcare services.
        </p>

        {/* Working Hours */}
        <div className="mb-6">
          <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Working Hours
          </h3>
          <div className="space-y-1 text-text-secondary text-sm pl-7">
            <p>{contactInfo.workingHours.morning}</p>
            <p>{contactInfo.workingHours.evening}</p>
          </div>
        </div>

        {/* Info Contact */}
        <div className="mb-6">
          <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Info Contact
          </h3>
          <div className="space-y-2 text-text-secondary text-sm pl-7">
            <p className="flex items-center gap-2">
              <span className="font-medium">Phone:</span> {contactInfo.phone}
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium">Email:</span> {contactInfo.email}
            </p>
          </div>
        </div>

        {/* Team Photo */}
        <div className="mt-8">
          <div className="relative w-full h-48 rounded-xl overflow-hidden bg-accent">
            <div className="absolute inset-0 bg-[url('/images/doctors/team-photo.jpg')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </SlideIn>
  );
}
