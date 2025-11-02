import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/60 backdrop-blur-xl shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-2">
              <span className="inline-block h-8 w-8 rounded-lg bg-red-500/90" />
              <span className="text-lg font-semibold tracking-tight">Aarav International School</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#academics" className="text-gray-700 hover:text-gray-900 transition-colors">Academics</a>
              <a href="#life" className="text-gray-700 hover:text-gray-900 transition-colors">Campus Life</a>
              <a href="#admissions" className="text-gray-700 hover:text-gray-900 transition-colors">Admissions</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
            </nav>
            <a href="#admissions" className="ml-4 inline-flex items-center rounded-xl bg-red-600 px-4 py-2 text-white shadow-sm hover:bg-red-700 transition-colors text-sm">Apply Now</a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
