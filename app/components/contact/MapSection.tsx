"use client";

import FadeIn from "../animations/FadeIn";

export default function MapSection() {
  return (
    <section className="pb-10 pt-20">
      <FadeIn>
        <div className="w-full h-[400px] bg-bg-light rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.4246515335576!2d70.8252033750693!3d22.299774179687038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b5747ef7be8f%3A0xfc6f077d5185f494!2sIsha%20Hospital%2C%20Dr%20Kamal%20Bhatt!5e0!3m2!1sen!2sin!4v1774371658002!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Isha Hospital Location"
          />
        </div>
      </FadeIn>
    </section>
  );
}
