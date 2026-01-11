import { motion } from 'framer-motion'
import { cn } from '../utils.js'

export default function CTA() {
  return (
    <section id="booking" className="py-24 bg-coffee-bean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-coffee-cream tracking-tight">Ready to Sip?</h2>
          <p className="mt-4 text-coffee-cream/80 max-w-2xl mx-auto">
            Reserve your table now and experience the perfect coffee blend in our cozy café.
          </p>
          <div className="mt-10">
            <a
              href="#booking-form"
              className="px-8 py-4 bg-coffee-cream text-coffee-bean rounded-xl font-medium hover:bg-coffee-cream/90 transition-colors transform hover:scale-105"
            >
              Book a Table
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}