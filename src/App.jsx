import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Academics from './components/Academics';
import CampusLife from './components/CampusLife';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key="home"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Hero />
          <Academics />
          <CampusLife />
          <section id="admissions" className="relative overflow-hidden bg-gradient-to-b from-white to-red-50 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Admissions Open 2025–26</h2>
                  <p className="mt-3 text-gray-600">Seats are limited across grades. Apply early to secure your child’s place in our vibrant community.</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="#contact" className="inline-flex items-center rounded-xl bg-red-600 px-5 py-3 text-white shadow-md hover:bg-red-700 transition-colors">Book a Campus Tour</a>
                    <a href="#academics" className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-gray-900 shadow-sm hover:bg-gray-50">Download Prospectus</a>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-red-200/60 via-white to-red-100/60 blur-xl" />
                  <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <dl className="grid grid-cols-2 gap-6">
                      <div>
                        <dt className="text-sm text-gray-600">Student–Teacher Ratio</dt>
                        <dd className="mt-1 text-3xl font-bold">18:1</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-gray-600">Board Results (Avg)</dt>
                        <dd className="mt-1 text-3xl font-bold">92%</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-gray-600">Co-curricular Clubs</dt>
                        <dd className="mt-1 text-3xl font-bold">30+</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-gray-600">Transport Routes</dt>
                        <dd className="mt-1 text-3xl font-bold">45</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
