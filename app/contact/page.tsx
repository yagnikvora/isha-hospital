import type { Metadata } from "next";
import PageHeroBanner from "../components/shared/PageHeroBanner";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import MapSection from "../components/contact/MapSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Isha Hospital for appointments, inquiries, or to learn more about our healthcare services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroBanner
        title="Contact Us"
        description="Reach out to our team for appointments, medical assistance, and any healthcare-related inquiries."
      />

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
}
