"use client";

import FadeIn from "../animations/FadeIn";

export default function MapSection() {
  return (
    <section className="py-0">
      <FadeIn>
        <div className="w-full h-[400px] bg-bg-light">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2985!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjciTiA3MsKwNDknNTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
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
