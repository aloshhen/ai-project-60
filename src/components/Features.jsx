import { motion } from 'framer-motion'
import { cn } from '../utils.js'
import { Coffee, Utensils, Clock, Sparkles } from 'lucide-react'

export default function Features() {
  return (
    <section id="menu" className="py-24 bg-coffee-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-coffee-dark tracking-tight">Our Menu Highlights</h2>
          <p className="mt-4 text-coffee-dark/70 max-w-2xl mx-auto">
            Discover our signature coffee blends and artisanal dishes crafted with love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-coffee-dark/10 hover:shadow-2xl hover:shadow-coffee-bean/20 transition-all"
          >
            <div className="bg-coffee-bean/20 p-3 rounded-xl inline-block mb-4">
              <Coffee className="w-8 h-8 text-coffee-bean" />
            </div>
            <h3 className="text-2xl font-bold text-coffee-dark mb-2">☕ Signature Coffee</h3>
            <p className="text-coffee-dark/70">
              Our premium coffee blends made from single-origin beans, roasted to perfection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-coffee-dark/10 hover:shadow-2xl hover:shadow-coffee-bean/20 transition-all"
          >
            <div className="bg-coffee-bean/20 p-3 rounded-xl inline-block mb-4">
              <Utensils className="w-8 h-8 text-coffee-bean" />
            </div>
            <h3 className="text-2xl font-bold text-coffee-dark mb-2">🍰 Artisanal Desserts</h3>
            <p className="text-coffee-dark/70">
              Handmade pastries and desserts that pair perfectly with our coffee.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-coffee-dark/10 hover:shadow-2xl hover:shadow-coffee-bean/20 transition-all"
          >
            <div className="bg-coffee-bean/20 p-3 rounded-xl inline-block mb-4">
              <Clock className="w-8 h-8 text-coffee-bean" />
            </div>
            <h3 className="text-2xl font-bold text-coffee-dark mb-2">🕒 Quick Service</h3>
            <p className="text-coffee-dark/70">
              We prioritize speed without compromising quality - your order in minutes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}