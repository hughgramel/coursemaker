import type { HeroAsset } from "@/types/course";

/**
 * Hero — renders the course-owned art file (usually an SVG) above the H1.
 * Uses a plain <img> so SVG animations + filters keep working.
 */
export function Hero({
  hero,
  legacyImage,
}: {
  hero?: HeroAsset | null;
  legacyImage?: string | null;
}) {
  const src = hero?.src ?? legacyImage;
  if (!src) return null;
  const alt = hero?.alt ?? "Course hero";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={hero?.width ?? 1200}
      height={hero?.height ?? 400}
      className="block w-full h-auto rounded"
    />
  );
}
