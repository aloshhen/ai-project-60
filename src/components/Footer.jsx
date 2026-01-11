import { cn } from '../utils.js'

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-coffee-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">☕ Coffee Haven</h3>
            <p className="text-coffee-cream/70">
              Premium coffee experience in a cozy ambiance.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-coffee-cream/80">Coffee</a></li>
              <li><a href="#" className="hover:text-coffee-cream/80">Desserts</a></li>
              <li><a href="#" className="hover:text-coffee-cream/80">Breakfast</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>📍 123 Coffee Street, City</li>
              <li>📞 +1 (234) 567-890</li>
              <li>📧 info@coffeehaven.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-coffee-cream/80">Instagram</a>
              <a href="#" className="hover:text-coffee-cream/80">Facebook</a>
              <a href="#" className="hover:text-coffee-cream/80">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-coffee-cream/20 text-center">
          <p>© {new Date().getFullYear()} Coffee Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}