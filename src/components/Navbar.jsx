import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <a href="#academics" className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors">Academics</a>
      <a href="#life" className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors">Campus Life</a>
      <a href="#admissions" className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors">Admissions</a>
      <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
    </>
  );

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

            <nav className="hidden md:flex items-center gap-2 text-sm">
              {navLinks}
            </nav>

            <div className="flex items-center gap-3">
              <a href="#admissions" className="hidden sm:inline-flex items-center rounded-xl bg-red-600 px-4 py-2 text-white shadow-sm hover:bg-red-700 transition-colors text-sm">Apply Now</a>
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-white/80"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="md:hidden border-t border-white/40"
              >
                <div className="px-4 py-2">
                  {navLinks}
                  <a href="#admissions" className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-4 py-2 text-white shadow-sm hover:bg-red-700 transition-colors text-sm">Apply Now</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
