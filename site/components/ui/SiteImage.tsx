import Image from "next/image";
import { getImage, type ImageKey } from "@/content/images";
import { isCloudinary } from "@/lib/cloudinary";
import { cn } from "@/lib/cn";
import { CloudinaryImage } from "./CloudinaryImage";

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
  const Component = isCloudinary(img.src) ? CloudinaryImage : Image;
  const style = position ? { objectPosition: position } : undefined;

  if (fill) {
    return (
      <Component
        src={img.src}
        alt={resolvedAlt}
        fill
        sizes={sizes ?? "100vw"}
        priority={priority}
        className={cn("object-cover", className)}
        style={style}
      />
    );
  }
  return (
    <Component
      src={img.src}
      alt={resolvedAlt}
      width={img.width}
      height={img.height}
      sizes={sizes}
      priority={priority}
      className={className}
      style={style}
    />
  );
}
