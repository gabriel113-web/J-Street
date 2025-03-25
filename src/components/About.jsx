import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="p-10 bg-black text-white">
      <motion.h2
        className="text-7xl font-semibold mb-6 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our<h2 className="text-7xl font-light"> Philosophy</h2>
      </motion.h2>

      <motion.p
        className="text-lg max-w-lg text-center leading-8 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        In our team, developers work alongside designers, strategists, and
        analysts. Cuberto doesn't do cookie-cutter solutions—we build products
        exactly as they were designed, with no shortcuts or simplifications.
        We're driven by user‑centered design that drives productivity and
        increases revenue. Our expertise and ingenuity are remarkable, yet we
        always strive to outdo and outperform our previous achievements.
      </motion.p>
    </section>
  );
};

export default About;
