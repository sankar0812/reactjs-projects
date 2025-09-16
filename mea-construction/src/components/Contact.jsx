import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          Contact Us
        </motion.h2>
        <p className="text-gray-600 mb-6">Reach out to us for partnerships or project inquiries.</p>
        <a
          href="mailto:info@meaconstruction.com"
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
        >
          Email Us
        </a>
      </div>
    </section>
  );
}
