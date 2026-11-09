import Image from "next/image";
import { getImage, type ImageKey } from "@/content/images";
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

/** Every image on the site renders through this, reading from the one registry. */
export function SiteImage({ name, className, sizes, priority, fill, alt }: Props) {
  const img = getImage(name);
  const position = "position" in img ? img.position : undefined;
  const resolvedAlt = alt ?? img.alt;
  if (fill) {
    return (
      <Image
        src={img.src}
        alt={resolvedAlt}
        fill
        sizes={sizes ?? "100vw"}
        priority={priority}
        className={cn("object-cover", className)}
        style={position ? { objectPosition: position } : undefined}
      />
    );
  }
  return (
    <Image
      src={img.src}
      alt={resolvedAlt}
      width={img.width}
      height={img.height}
      sizes={sizes}
      priority={priority}
      className={className}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}
