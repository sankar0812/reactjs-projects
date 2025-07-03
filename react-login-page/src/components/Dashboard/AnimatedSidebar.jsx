
import { motion } from "framer-motion";

const menuItems = [
  { label: "Dashboard", view: "dashboard" },
  { label: "Add User", view: "add" },
  { label: "View Users", view: "list" },
  { label: "Dashboard Graph", view: "graph" },
];

const sidebarVariants = {
  hidden: { x: -250 },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function AnimatedSidebar({ onViewChange, onLogout }) {
  return (
    <motion.div
      className="w-64 bg-gray-800 text-white h-screen p-6 fixed"
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
    >
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      {menuItems.map((item) => (
        <motion.button
          key={item.view}
          variants={itemVariants}
          className="block w-full text-left px-4 py-2 mb-2 hover:bg-gray-700 rounded"
          onClick={() => onViewChange(item.view)}
        >
          {item.label}
        </motion.button>
      ))}
      <motion.button
        variants={itemVariants}
        className="block w-full text-left px-4 py-2 mt-8 bg-red-500 hover:bg-red-600 rounded"
        onClick={onLogout}
      >
        Logout
      </motion.button>
    </motion.div>
  );
}
