import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 text-lg max-w-3xl mx-auto"
        >
          MEA Construction is dedicated to delivering high-quality building solutions with cutting-edge
          technology and sustainable designs. Our team has successfully completed a variety of residential,
          commercial, and industrial projects.
        </motion.p>
      </div>
    </section>
  );
}
