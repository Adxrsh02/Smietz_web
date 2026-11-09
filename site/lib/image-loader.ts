/**
 * Global next/image loader (static export has no image optimizer).
 * Cloudinary URLs get automatic format + quality and the requested width, never upscaled.
 * Anything else is returned untouched; local images are rendered with `unoptimized`.
 */
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }): string {
  const marker = "/upload/";
  if (!src.startsWith("https://res.cloudinary.com/")) return src;
  const i = src.indexOf(marker);
  if (i === -1) return src;
  return `${src.slice(0, i + marker.length)}f_auto,q_auto,c_limit,w_${width}/${src.slice(i + marker.length)}`;
}
