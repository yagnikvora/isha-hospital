type SectionHeadingProps = {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  subtitle,
  title,
  description,
  alignment = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = alignment === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} mb-12`}>
      {subtitle && (
        <span
          className={`text-sm font-semibold uppercase tracking-wider ${
            light ? "text-white/80" : "text-primary"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold mt-2 ${
          light ? "text-white" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            alignment === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-text-secondary"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
