"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

export default function Service({
  svg,
  title,
  para,
}: {
  svg: ReactNode;
  title: string;
  para: string;
}) {
  return (
    <motion.div
      className="p-5 rounded-lg text-center border border-gray-700 w-64"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-center mb-5">{svg}</div>
      <h4 className="mb-3">{title}</h4>
      <p>{para}</p>
    </motion.div>
  );
}
