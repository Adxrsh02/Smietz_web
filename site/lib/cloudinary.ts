/** True for images hosted on our Cloudinary account. */
export function isCloudinary(src: string): boolean {
  return src.startsWith("https://res.cloudinary.com/");
}

/**
 * next/image loader for Cloudinary: automatic format and quality, resized to the
 * requested width, never upscaled (c_limit). next/image calls this once per
 * srcset width, so each device downloads an appropriately sized file.
 */
export function cloudinaryLoader({ src, width }: { src: string; width: number; quality?: number }): string {
  const marker = "/upload/";
  const i = src.indexOf(marker);
  if (i === -1) return src;
  const head = src.slice(0, i + marker.length);
  const tail = src.slice(i + marker.length);
  return `${head}f_auto,q_auto,c_limit,w_${width}/${tail}`;
}
