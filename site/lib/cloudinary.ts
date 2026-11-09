/** True for images hosted on our Cloudinary account (resized via lib/image-loader.ts). */
export function isCloudinary(src: string): boolean {
  return src.startsWith("https://res.cloudinary.com/");
}
