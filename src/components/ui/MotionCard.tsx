"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  className?: string;
};

export function MotionCard({ children, className, ...rest }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
      className={cn(
        "rounded-[1.35rem] border border-slate-200/70 bg-white shadow-[0_22px_60px_-28px_rgba(15,23,42,0.12)]",
        className,
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
