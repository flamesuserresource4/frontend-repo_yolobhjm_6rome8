import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Nurturing Bright Futures in India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
            className="mt-4 text-lg sm:text-xl text-gray-700 max-w-xl"
          >
            Aarav International School blends rigorous academics with values-driven education, fostering curiosity, creativity, and character from Kindergarten to Grade 12.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="mt-8 flex gap-3"
          >
            <a href="#admissions" className="inline-flex items-center rounded-xl bg-red-600 px-5 py-3 text-white shadow-md hover:bg-red-700 transition-colors">
              Start Admissions
            </a>
            <a href="#academics" className="inline-flex items-center rounded-xl bg-white/80 backdrop-blur px-5 py-3 text-gray-900 shadow-sm hover:bg-white">
              Explore Academics
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white" />
    </section>
  );
}
