"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";

export default function Project({
  image,
  title,
  para,
}: {
  image: StaticImageData | string;
  title: string;
  para: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const hasImage = Boolean(image);

  return (
    <div
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 20, rotateY: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="backface-hidden">
          <div className="bg-gray-400 p-3 rounded-lg text-left h-auto">
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
          </div>
        </div>

        <div className="absolute inset-0 bg-gray-700 text-white rounded-lg backface-hidden transform rotate-y-180 p-6 flex flex-col items-center justify-center gap-3">
          <p className="text-xl font-semibold text-center">Mensagem fixe para quem passa por aqui</p>
          <p className="text-sm text-center text-gray-200 max-w-md">
            Obrigado por dar uma olhada neste projeto. Fica desse lado se quiseres saber mais!
          </p>
        </div>
      </motion.div>
    </div>
  );
}
