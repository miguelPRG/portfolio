"use client";

import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Technology from "./Technology";

export default function Photo({ image }: { image: StaticImageData }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="mb-30"
      style={{ width: 350, height: 447, perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full"
        style={{ transformStyle: "preserve-3d", position: "relative" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Frente - Foto */}
        <div className="backface-hidden absolute w-full h-full">
          <Image
            src={image}
            alt="Foto de perfil de Miguel Gonçalves"
            width={350}
            className="rounded-2xl border-3 border-gray-200 object-cover"
          />
        </div>

        {/* Verso - Stack */}
        <div
          className="absolute w-full h-full rounded-2xl border-3 border-gray-200 from-gray-900 to-black backface-hidden transform rotate-y-180 flex flex-col items-center justify-center p-6"
          style={{ height: 520 }}
        >
          <h1 className="text-white text-2xl font-bold mb-15">My Frameworks</h1>
          <div className="grid grid-cols-2 gap-20 place-items-center">
            <Technology name="fastAPI" />
            <Technology name="react" />
            <Technology name="mongoDB" />
            <Technology name="nextJS" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
