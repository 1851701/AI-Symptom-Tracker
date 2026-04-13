import Link from "next/link";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold tracking-tight transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]";

const variants = {
  primary:
    "bg-sky-600 text-white shadow-lg shadow-sky-500/25 hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-400/35 hover:ring-2 hover:ring-sky-300/50 focus-visible:outline-sky-500",
  secondary:
    "border border-slate-200/90 bg-white text-slate-900 shadow-sm hover:border-sky-200 hover:bg-sky-50/80 hover:shadow-md focus-visible:outline-sky-500",
  ghost:
    "border border-transparent bg-transparent text-sky-800 hover:bg-sky-50 focus-visible:outline-sky-500",
  onDarkPrimary:
    "border border-white/10 bg-white text-slate-900 shadow-lg shadow-slate-900/20 hover:bg-sky-50 hover:shadow-xl focus-visible:outline-white",
  onDarkSecondary:
    "border border-white/45 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 focus-visible:outline-white",
  minimal:
    "focus-visible:outline-white",
} as const;

export type ButtonVariant = keyof typeof variants;

type Common = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

export function Button(
  props: Common &
    (
      | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "children">)
      | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
    ),
) {
  const { variant = "primary", className, children, ...rest } = props;
  const cls = cn(base, variants[variant], className);

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} className={cls} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
