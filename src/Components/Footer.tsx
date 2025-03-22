
import { Building2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 sm:py-12 md:py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
              <span className="ml-2 text-xl sm:text-2xl font-bold text-white">Studio65</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-6">
              Creating exceptional architectural experiences through innovative design and
              unwavering commitment to quality.
            </p>
          </div>
          
          <div className="mt-2 sm:mt-0">
            <h4 className="text-white text-base sm:text-lg font-bold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-4">
              <li><a href="#" className="text-sm sm:text-base hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm sm:text-base hover:text-orange-500 transition-colors">Our Projects</a></li>
              <li><a href="#" className="text-sm sm:text-base hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#" className="text-sm sm:text-base hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="mt-2 sm:mt-0">
            <h4 className="text-white text-base sm:text-lg font-bold mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-4">
              <li><a href="#" className="text-sm sm:text-base hover:text-orange-500 transition-colors">Architectural Design</a></li>
              <li><a href="#" className="text-sm sm:text-base hover:text-orange-500 transition-colors">Interior Design</a></li>
              <li><a href="#" className="text-sm sm:text-base hover:text-orange-500 transition-colors">Project Management</a></li>
              <li><a href="#" className="text-sm sm:text-base hover:text-orange-500 transition-colors">Consultation</a></li>
            </ul>
          </div>
          
          <div className="mt-6 sm:mt-0">
            <h4 className="text-white text-base sm:text-lg font-bold mb-4 sm:mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full sm:flex-1 px-4 py-2 rounded-t sm:rounded-tr-none sm:rounded-l bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 text-sm"
              />
              <button className="w-full sm:w-auto bg-orange-500 text-white px-4 py-2 rounded-b sm:rounded-bl-none sm:rounded-r hover:bg-orange-600 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
            © 2025 Studio 65. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-y-2 gap-x-4 sm:gap-x-6">
            <a href="#" className="text-xs sm:text-sm hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs sm:text-sm hover:text-orange-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs sm:text-sm hover:text-orange-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
