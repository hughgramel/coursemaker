import { LinkIcon } from "./icons";
import { cn } from "@/lib/cn";

interface AnchorHeadingProps {
  as: "h1" | "h2" | "h3" | "h4";
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function AnchorHeading({ as, id, className, children }: AnchorHeadingProps) {
  const Tag = as;
  return (
    <Tag id={id} className={cn("group", className)}>
      <a
        href={`#${id}`}
        className="anchor-heading"
        aria-label={`Permalink to ${typeof children === "string" ? children : id}`}
      >
        <LinkIcon />
      </a>
      <span>{children}</span>
    </Tag>
  );
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}
