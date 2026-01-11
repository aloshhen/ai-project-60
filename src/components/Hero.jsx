import { motion } from 'framer-motion'
import { cn } from '../utils.js'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://source.unsplash.com/1600x900/?coffee,cafe"
          alt="Coffee shop"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/90 to-coffee-bean/90"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-coffee-bean to-coffee-dark bg-clip-text text-transparent tracking-tight">
            ☕ Coffee Haven
          </h1>
          <p className="mt-6 text-xl text-coffee-cream max-w-3xl mx-auto">
            Experience the perfect blend of artisanal coffee and cozy ambiance. Reserve your table now and enjoy our premium coffee menu.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#booking"
              className="px-8 py-4 bg-coffee-bean text-coffee-cream rounded-xl font-medium hover:bg-coffee-dark transition-colors transform hover:scale-105"
            >
              Book a Table
            </a>
            <a
              href="#menu"
              className="px-8 py-4 bg-coffee-cream/30 text-coffee-dark rounded-xl font-medium hover:bg-coffee-cream/50 transition-colors"
            >
              View Menu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}