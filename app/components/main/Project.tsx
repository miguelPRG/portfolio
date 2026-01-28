"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

export default function Project({
  image,
  title,
  para,
  link,
}: {
  image: StaticImageData | string;
  title: string;
  para: string;
  link: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 20, rotateY: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Frente do cartão */}
        <div className="backface-hidden">
          <div className="bg-gray-400 p-3 rounded-lg text-left h-auto min-h-120 max-h-200 relative">
            <div
              className="relative w-full overflow-hidden rounded-lg mb-5"
              style={{ aspectRatio: "16 / 9" }}
            >
              {image ? (
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

            {/* Ícone clicável no canto inferior direito */}
            <button
              onClick={() => setIsFlipped(true)}
              className="absolute bottom-3 right-3 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-100 transition cursor-pointer"
              aria-label="Virar cartão"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 4v6h6M23 20v-6h-6" />
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64M3.51 15A9 9 0 0 0 18.36 18.36" />
              </svg>
            </button>
          </div>
        </div>

        {/* Trás do cartão */}
        <div className="absolute inset-0 bg-gray-700 text-white rounded-lg backface-hidden transform rotate-y-180 p-6 flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              Watch this project live!
              <svg
                className="w-6 h-6 text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.403 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.403a3.01 3.01 0 0 1-1.743-1.612l-3.025 3.025A3 3 0 1 1 9.99 9.768l3.025-3.025A3.01 3.01 0 0 1 11.403 5Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M13.232 4a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v5.768a1 1 0 1 1-2 0V6.414l-6.182 6.182a1 1 0 0 1-1.414-1.414L17.586 5h-3.354a1 1 0 0 1-1-1Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </p>

          {/* Ícone de voltar */}
          <button
            onClick={() => setIsFlipped(false)}
            className="absolute bottom-3 right-3 bg-white p-2 rounded-full text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            aria-label="Voltar"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M1 4v6h6M23 20v-6h-6" />
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64M3.51 15A9 9 0 0 0 18.36 18.36" />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
