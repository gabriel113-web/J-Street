import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex justify-center items-center bg-black text-white">
      <motion.h1
        className="text-6xl font-semibold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        We Are a digital
        <h2 className="text-6xl font-light">design and</h2>
        motion agency
      </motion.h1>
    </section>
  );
}
