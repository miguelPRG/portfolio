"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { StaticImageData } from "next/image";

export default function Project({
  image,
  title,
  para,
}: {
  image: StaticImageData | string;
  title: string;
  para: string;
}) {
  const hasImage = Boolean(image);

  return (
    <motion.div
      className="bg-gray-400 p-3 rounded-lg text-left h-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div
        className="relative w-full overflow-hidden rounded-lg mb-5"
        style={{ aspectRatio: "16 / 9" }}
      >
        {hasImage ? (
          <Image
            src={image}
            alt={`${title} image`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300" aria-hidden />
        )}
      </div>
      <h3 className="mb-3">{title}</h3>
      <p>{para}</p>
    </motion.div>
  );
}
