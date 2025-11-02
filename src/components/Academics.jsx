import { motion } from 'framer-motion';
import { BookOpen, FlaskConical, Palette, Globe2 } from 'lucide-react';

const items = [
  {
    icon: BookOpen,
    title: 'CBSE Curriculum',
    desc: 'Comprehensive and contemporary pedagogy aligned with national standards for holistic growth.',
  },
  {
    icon: FlaskConical,
    title: 'STEM Labs',
    desc: 'Hands-on labs for science, coding, and robotics to spark innovation and problem-solving.',
  },
  {
    icon: Palette,
    title: 'Arts & Culture',
    desc: 'Performing and visual arts programs celebrating Indian heritage and global perspectives.',
  },
  {
    icon: Globe2,
    title: 'Global Outlook',
    desc: 'Exchange programs, Model UN, and language clubs to build confident global citizens.',
  },
];

export default function Academics() {
  return (
    <section id="academics" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Academic Excellence</h2>
          <p className="mt-3 text-gray-600">A balanced approach that cultivates intellect, values, and life skills.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                {item.icon && <item.icon className="h-6 w-6" />}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
