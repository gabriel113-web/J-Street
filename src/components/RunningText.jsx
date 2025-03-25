import { motion } from "framer-motion";

const RunningText = () => {
  return (
    <div className="w-full bg-black py-5 overflow-hidden">
      <motion.div
        className="text-white text-7xl font-light whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        FOLLOW US • FOLLOW US • FOLLOW US • FOLLOW US • FOLLOW US
      </motion.div>
      <div className="w-full flex flex-col gap-3 mt-10">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 text-center bg-black text-white text-2xl font-bold uppercase hover:bg-gray-400 transition"
        >
          Instagram
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 text-center  bg-black text-white text-2xl font-bold uppercase hover:bg-gray-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 text-center  bg-black text-white text-2xl font-bold uppercase hover:bg-gray-400 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 text-center  bg-black text-white text-2xl font-bold uppercase hover:bg-gray-400 transition"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default RunningText;
