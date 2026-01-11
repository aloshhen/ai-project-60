import { cn } from '../utils.js'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl bg-coffee-cream/80 border-b border-coffee-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-coffee-dark tracking-tight">☕ Coffee Haven</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="#" className="text-coffee-dark hover:text-coffee-bean px-3 py-2 rounded-md text-sm font-medium transition-colors">Menu</a>
            <a href="#booking" className="text-coffee-dark hover:text-coffee-bean px-3 py-2 rounded-md text-sm font-medium transition-colors">Booking</a>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-coffee-dark hover:text-coffee-bean hover:bg-coffee-cream/50 focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-coffee-dark hover:text-coffee-bean hover:bg-coffee-cream/50">Menu</a>
            <a href="#booking" className="block px-3 py-2 rounded-md text-base font-medium text-coffee-dark hover:text-coffee-bean hover:bg-coffee-cream/50">Booking</a>
          </div>
        </div>
      )}
    </nav>
  )
}