import Image from "next/image";
import { getImage } from "@/content/images";
import { business } from "@/content/business";
import { cn } from "@/lib/cn";

// The only logo asset is a 1080×1080 JPG with a white background and generous
// padding. We crop to the artwork (x 140–974, y 126–866) and multiply-blend so
// the white disappears on light backgrounds. Swap the file in content/images.ts
// (a transparent PNG/SVG will also work: remove the blend/crop here).
const CROP = { x: 140, y: 126, w: 834, h: 740, full: 1080 };

const sizes = {
  sm: "h-11",
  md: "h-14",
  lg: "h-24",
  xl: "h-36 md:h-44",
} as const;

type Props = {
  size?: keyof typeof sizes;
  className?: string;
  priority?: boolean;
};

export function Logo({ size = "md", className, priority }: Props) {
  const logo = getImage("logo");
  return (
    <span
      role="img"
      aria-label={`${business.name} logo`}
      className={cn("relative block shrink-0 overflow-hidden", sizes[size], className)}
      style={{ aspectRatio: `${CROP.w} / ${CROP.h}` }}
    >
      <Image
        src={logo.src}
        alt=""
        width={logo.width}
        height={logo.height}
        loading={priority ? "eager" : undefined}
        fetchPriority={priority ? "high" : undefined}
        unoptimized
        sizes="200px"
        className="absolute max-w-none mix-blend-multiply"
        style={{
          width: `${(CROP.full / CROP.w) * 100}%`,
          left: `${-(CROP.x / CROP.w) * 100}%`,
          top: `${-(CROP.y / CROP.h) * 100}%`,
          height: "auto",
        }}
      />
    </span>
  );
}
