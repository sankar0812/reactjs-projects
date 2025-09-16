import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Building Dreams with MEA Construction</h1>
        <p className="text-lg text-gray-300 mb-6">Quality. Innovation. Reliability.</p>
        <a href="#projects" className="px-6 py-3 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition">
          View Our Projects
        </a>
      </motion.div>
    </section>
  );
}
