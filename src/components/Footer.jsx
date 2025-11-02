import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-gray-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Aarav International School</h4>
            <p className="mt-2 text-sm text-gray-600">Bengaluru, Karnataka, India</p>
            <p className="mt-1 text-sm text-gray-600">+91 80 1234 5678</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-gray-900">Admissions</h5>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>How to Apply</li>
              <li>Fees & Scholarships</li>
              <li>Important Dates</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-gray-900">Academics</h5>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>Primary School</li>
              <li>Middle School</li>
              <li>Senior Secondary</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-gray-900">Connect</h5>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>hello@aaravschool.in</li>
              <li>@aaravschool</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-gray-500">© {new Date().getFullYear()} Aarav International School. All rights reserved.</div>
      </div>
    </motion.footer>
  );
}
