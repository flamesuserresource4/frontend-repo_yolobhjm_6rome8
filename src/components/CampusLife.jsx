import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, Building2 } from 'lucide-react';

const items = [
  {
    icon: Trophy,
    title: 'Sports & Fitness',
    desc: 'Cricket, football, basketball, athletics, yoga, and a structured fitness program for all grades.',
  },
  {
    icon: Users,
    title: 'Clubs & Societies',
    desc: 'Robotics, debate, literature, music, dance, photography, eco-club and more to fuel passions.',
  },
  {
    icon: Calendar,
    title: 'Events & Festivals',
    desc: 'Assembly leadership, MUN, science fairs, arts showcases, and cultural festivals that celebrate India.',
  },
  {
    icon: Building2,
    title: 'Smart Campus',
    desc: 'Digital classrooms, well-stocked library, maker spaces, safe transport and a healthy cafeteria.',
  },
];

export default function CampusLife() {
  return (
    <section id="life" className="relative bg-gradient-to-b from-red-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Life at Aarav</h2>
          <p className="mt-3 text-gray-600">Beyond classrooms, students discover themselves through community, creativity, and competition.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
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
