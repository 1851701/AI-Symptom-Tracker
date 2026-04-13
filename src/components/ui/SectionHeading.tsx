import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2D5A27]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-4xl font-black uppercase tracking-tight text-[#2D5A27] [font-stretch:condensed] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-lg font-normal leading-relaxed text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
