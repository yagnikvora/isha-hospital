import { contactInfo } from "@/app/data/siteData";

export default function TopBar() {
  return (
    <div className="bg-secondary text-topbar-text text-sm">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-4 py-2 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
        <p className="leading-none text-center md:text-left">
          Support: 24/7 Emergency Call
        </p>
        <div className="text-center md:text-right">
          <a href={`mailto:${contactInfo.email}`} className="leading-none">
            Email Us: {contactInfo.email}
          </a>
        </div>
      </div>
    </div>
  );
}
