import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Completed Buildings</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
