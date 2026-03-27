"use client";

import { useState, FormEvent } from "react";
import SlideIn from "../animations/SlideIn";
import { contactInfo } from "@/app/data/siteData";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = formData.subject || "Contact from Website";

    const body = [
      "Hello Isha Hospital Team,",
      ``,
      "I am contacting you through your website contact form. Please find my details below:",
      ``,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `Subject: ${subject}`,
      ``,
      "My message:",
      formData.message,
      ``,
      "Please get back to me at your earliest convenience.",
      "",
      "Thank you.",
      `${formData.name}`,
    ].join("\n");

    const mailtoUrl =
      `mailto:${contactInfo.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const isMobileDevice = /Android|iPhone|iPad|iPod|Mobile/i.test(
      navigator.userAgent
    );

    // On mobile, prefer the native mail app chooser (includes Gmail app when installed).
    if (isMobileDevice) {
      window.location.href = mailtoUrl;
      return;
    }

    const gmailComposeUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactInfo.email)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const openedWindow = window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
    if (!openedWindow) {
      window.location.href = mailtoUrl;
    }
  };

  // Light grey input matching the design
  const inputClass =
    "w-full rounded-2xl border border-transparent bg-contact-input-bg px-5 py-3 text-sm text-text-primary placeholder:text-text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition duration-200 focus:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/15";

  return (
    <SlideIn direction="right">
      <div className="rounded-3xl bg-contact-card-bg p-5 shadow-[0_16px_45px_var(--color-contact-shadow)] sm:p-8 md:p-11">
        <h3 className="mb-7 text-[28px] font-bold leading-none text-text-primary sm:mb-8 sm:text-3xl">
          Send Us Email
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-6 md:gap-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="Email Address"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-text-primary">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="Your Subject"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-text-primary">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className={`${inputClass} resize-none`}
              placeholder="Your Message"
            />
          </div>

          <div className="pt-1">
            <button
              type="submit"
              className="inline-flex items-center gap-3 rounded-full bg-topbar-text px-7 py-3 text-[15px] font-semibold text-text-light transition duration-200 hover:bg-primary sm:px-9 sm:text-base"
            >
              Send Mail
              <svg
                className="h-4 w-4"
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
            </button>
          </div>
        </form>
      </div>
    </SlideIn>
  );
}
