import type { LabelVariant } from "@/types/course";
import { cn } from "@/lib/cn";

interface LabelProps {
  variant?: LabelVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClass: Record<LabelVariant, string> = {
  purple: "label-purple",
  red: "label-red",
  blue: "label-blue",
  green: "label-green",
  yellow: "label-yellow",
};

export function Label({ variant = "purple", children, className }: LabelProps) {
  return <span className={cn("label", variantClass[variant], className)}>{children}</span>;
}
