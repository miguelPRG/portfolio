"use client";

import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Technology from "./Technology";

export default function Photo({ image }: { image: StaticImageData }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative cursor-pointer mb-30"
      style={{ width: 350, height: 447, perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Frente - Foto */}
        <div
          className="absolute w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={image}
            alt="Foto de perfil de Miguel Gonçalves"
            width={350}
            className="rounded-2xl border-3 border-gray-200 object-cover"
          />
        </div>

        {/* Verso - Stack */}
        <div
          className="absolute w-full h-full from-gray-900 to-black rounded-2xl border-3 border-gray-200 grid grid-cols-2 gap-2 p-5"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Technology name="fastAPI" />
          <Technology name="react" />
          <Technology name="mongoDB" />
          <Technology name="nextJS" />
        </div>
      </motion.div>
    </div>
  );
}
