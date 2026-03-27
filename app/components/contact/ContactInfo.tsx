import { contactInfo } from "@/app/data/siteData";
import SlideIn from "../animations/SlideIn";
import Image from "next/image";

function WorkingHoursIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mt-2 me-2 h-6 w-6 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.4844 3.51562C20.4844 3.51562 19.8984 2.92969 18.7266 1.75781C17.5547 0.585938 15.3125 0 12 0C8.6875 0 5.85938 1.17188 3.51562 3.51562C1.17188 5.85938 0 8.6875 0 12C0 15.3125 1.17188 18.1406 3.51562 20.4844C5.85938 22.8281 8.6875 24 12 24C15.3125 24 18.1406 22.8281 20.4844 20.4844C22.8281 18.1406 24 15.3125 24 12C24 8.6875 22.8281 5.85938 20.4844 3.51562ZM4.92188 4.92188C4.92188 4.92188 5.40885 4.4349 6.38281 3.46094C7.35677 2.48698 9.22917 2 12 2C14.7708 2 17.1302 2.97396 19.0781 4.92188C21.026 6.86979 22 9.22917 22 12C22 14.7708 21.026 17.1302 19.0781 19.0781C17.1302 21.026 14.7708 22 12 22C9.22917 22 6.86979 21.026 4.92188 19.0781C2.97396 17.1302 2 14.7708 2 12C2 9.22917 2.97396 6.86979 4.92188 4.92188ZM11 4V13H18V11H13V4H11Z"
        fill="#E31E25"
      />
    </svg>
  );
}

function PhoneNumberIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mt-2 me-2 h-[27px] w-[27px] flex-shrink-0"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.15257 0.53125C6.71507 0.177084 6.22549 0 5.68382 0C5.14216 0 4.65257 0.177084 4.21507 0.53125L4.15257 0.5625L4.12132 0.59375L0.996324 3.8125L1.02757 3.84375C0.548407 4.28125 0.235907 4.8125 0.0900735 5.4375C-0.0557598 6.0625 -0.0245098 6.65625 0.183824 7.21875V7.25C0.746324 8.875 1.62653 10.7031 2.82445 12.7344C4.02237 14.7656 5.55882 16.7188 7.43382 18.5938C10.5172 21.6771 14.2984 24.0938 18.7776 25.8438H18.8088C20.0797 26.2812 21.2359 26.0521 22.2776 25.1562L25.4338 22C25.8505 21.5833 26.0588 21.0677 26.0588 20.4531C26.0588 19.8385 25.8505 19.3229 25.4338 18.9062L21.3713 14.8438L21.3401 14.7812C20.9234 14.3646 20.4026 14.1562 19.7776 14.1562C19.1526 14.1562 18.6317 14.3646 18.2151 14.7812L16.2151 16.7812C14.6734 16.0312 13.3088 15.0938 12.1213 13.9688C10.9755 12.8854 10.0484 11.5312 9.34007 9.90625L11.3401 7.90625C11.7567 7.48958 11.9651 6.97917 11.9651 6.375C11.9651 5.77083 11.7463 5.26042 11.3088 4.84375L11.3401 4.8125L11.2463 4.71875L7.21507 0.5625L7.15257 0.53125ZM5.46507 2.09375C5.54841 2.03125 5.62132 2 5.68382 2C5.74632 2 5.81924 2.03125 5.90257 2.09375L9.99632 6.28125C10.0588 6.34375 10.038 6.41667 9.93382 6.5L7.43382 9L6.96507 9.4375L7.18382 10.0625C7.26716 10.2917 7.39737 10.599 7.57445 10.9844C7.75153 11.3698 8.14737 12.0365 8.76195 12.9844C9.37653 13.9323 10.038 14.75 10.7463 15.4375L10.9651 15.625C11.6526 16.25 12.4182 16.8385 13.2619 17.3906C14.1057 17.9427 14.7776 18.3333 15.2776 18.5625L16.0276 18.9062L16.6526 19.1875L19.6213 16.2188C19.7047 16.1354 19.7567 16.0938 19.7776 16.0938C19.7984 16.0938 19.8505 16.1354 19.9338 16.2188L24.0276 20.3125C24.1109 20.3958 24.1526 20.4427 24.1526 20.4531C24.1526 20.4635 24.1109 20.5104 24.0276 20.5938L20.9651 23.6562C20.5276 24.0312 20.0172 24.125 19.4338 23.9375C15.2047 22.2708 11.6734 20.0208 8.84007 17.1875C7.09007 15.4375 5.65257 13.599 4.52757 11.6719C3.40257 9.74479 2.57966 8.04167 2.05882 6.5625C1.87132 6.04167 1.97549 5.60417 2.37132 5.25L2.43382 5.1875L5.46507 2.09375Z"
        fill="#E31E25"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mt-2 me-2 h-[22px] w-6 flex-shrink-0"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0V1.90625L0 5.8125V22H24V5.8125L18 1.90625V0H6ZM8 2H16V9.6875L12 12.2812L8 9.6875V2ZM9 4V6H15V4H9ZM6 4.28125V8.375L2.84375 6.34375L6 4.28125ZM18 4.28125L21.1562 6.34375L18 8.375V4.28125ZM9 7V9H15V7H9ZM2 8.1875L12 14.6562L22 8.1875V20H2V8.1875Z"
        fill="#E31E25"
      />
    </svg>
  );
}

export default function ContactInfo() {
  return (
    <SlideIn direction="left">
      <div className="max-w-none">
        <span className="mb-4 block font-semibold uppercase text-topbar-text">
          Contact Us
        </span>

        <h2 className="mb-5 text-[30px] font-bold leading-[1.12] text-text-primary sm:text-[38px] lg:whitespace-nowrap">
          Feel Free To Contact Us
        </h2>

        <p className="mb-8 text-[15px] leading-relaxed text-text-secondary sm:text-[16px]">
          Contact our team for appointments, assistance,
          <br />
          and trusted medical support.
        </p>

        <div className="mb-8">
          <h3 className="mb-4 text-[18px] font-bold text-text-primary">
            Working Hours
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <WorkingHoursIcon />
              <div>
                <p className="text-[14px] leading-none text-text-secondary">Morning</p>
                <p className="mt-1.5 text-[18px] font-bold leading-none text-text-primary sm:text-[20px] md:text-[18px]">
                  {contactInfo.workingHours.morning}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <WorkingHoursIcon />
              <div>
                <p className="text-[14px] leading-none text-text-secondary">Evening</p>
                <p className="mt-1.5 text-[18px] font-bold leading-none text-text-primary sm:text-[20px] md:text-[18px]">
                  {contactInfo.workingHours.evening}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-9">
          <h3 className="mb-4 text-[18px] font-bold text-text-primary">
            Info Contact
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <PhoneNumberIcon />
              <div>
                <p className="text-[14px] leading-none text-text-secondary">Phone Number</p>
                <p className="mt-1.5 text-[18px] font-bold leading-none text-text-primary sm:text-[20px] md:text-[18px]">
                  {contactInfo.phone}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <EmailIcon />
              <div>
                <p className="text-[14px] leading-none text-text-secondary">Send Us Email</p>
                <p className="mt-1.5 break-all text-[18px] font-bold leading-none text-text-primary sm:text-[20px] md:text-[18px]">
                  {contactInfo.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="relative w-full [mask-image:linear-gradient(to_bottom,black_76%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_76%,transparent_100%)]">
            <Image
              src="/images/common/Homepage_Contact_Us_Process_Section.webp"
              alt="Our Medical Team"
              width={1100}
              height={620}
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="h-auto w-full object-cover object-bottom"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-contact-section-bg blur-sm" />
        </div>
      </div>
    </SlideIn>
  );
}
