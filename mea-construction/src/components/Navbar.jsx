import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-700">MEA Construction</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
}
