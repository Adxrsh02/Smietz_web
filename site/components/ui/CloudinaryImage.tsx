"use client";

import Image, { type ImageProps } from "next/image";
import { cloudinaryLoader } from "@/lib/cloudinary";

/**
 * next/image with the Cloudinary loader. A loader function cannot be passed from a
 * Server Component, so this thin client wrapper owns it.
 */
export function CloudinaryImage(props: Omit<ImageProps, "loader">) {
  return <Image {...props} alt={props.alt} loader={cloudinaryLoader} />;
}
