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

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-10 md:px-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.08fr_1fr] lg:gap-14">
            <ContactInfo />
            <ContactForm />
          </div>
      <MapSection />
        </div>
      </section>

    </>
  );
}
