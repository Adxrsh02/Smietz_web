import Image from "next/image";
import { getImage, type ImageKey } from "@/content/images";
import { isCloudinary } from "@/lib/cloudinary";
import { cn } from "@/lib/cn";

type Props = {
  /** Key in content/images.ts. */
  name: ImageKey;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Fill the (relatively positioned) parent and crop with object-cover. */
  fill?: boolean;
  /** Pass "" to mark a purely decorative image. */
  alt?: string;
};

/**
 * Every image on the site renders through this, reading from the one registry.
 * Cloudinary URLs get automatic format/quality and responsive widths.
 */
export function SiteImage({ name, className, sizes, priority, fill, alt }: Props) {
  const img = getImage(name);
  const position = "position" in img ? img.position : undefined;
  const resolvedAlt = alt ?? img.alt;
  // Static export: only Cloudinary images go through the (custom) loader.
  const unoptimized = !isCloudinary(img.src);
  const style = position ? { objectPosition: position } : undefined;

  if (fill) {
    return (
      <Image
        src={img.src}
        alt={resolvedAlt}
        fill
        unoptimized={unoptimized}
        sizes={sizes ?? "100vw"}
        loading={priority ? "eager" : undefined}
        fetchPriority={priority ? "high" : undefined}
        className={cn("object-cover", className)}
        style={style}
      />
    );
  }
  return (
    <Image
      src={img.src}
      alt={resolvedAlt}
      unoptimized={unoptimized}
      width={img.width}
      height={img.height}
      sizes={sizes}
      loading={priority ? "eager" : undefined}
        fetchPriority={priority ? "high" : undefined}
      className={className}
      style={style}
    />
  );
}
