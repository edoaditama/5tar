import { motion } from "framer-motion";

function About() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center gap-6 p-8 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl text-4xl  md:text-5xl font-bold text-center "
      >
        About 5TAR
      </motion.div>
    </div>
  );
}

export default About;
