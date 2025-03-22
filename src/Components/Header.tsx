import { Building2, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-20 relative">
          <div className="absolute left-0 flex items-center">
            <Building2 className="h-8 w-8 text-orange-500" />
            <span className={`${isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'
              } ml-2 text-2xl font-bold`}>
              STUDIO65
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav className="flex space-x-12">
              <Link
                to="/"
                className={`${isScrolled ? 'text-gray-900' : 'text-white'
                  } hover:text-orange-500 font-medium md:text-lg transition-colors duration-200`}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className={`${isScrolled ? 'text-gray-900' : 'text-white'
                  } hover:text-orange-500 font-medium md:text-lg transition-colors duration-200`}
              >
                Projects
              </Link>
              <Link
                to="/studio"
                className={`${isScrolled ? 'text-gray-900' : 'text-white'
                  } hover:text-orange-500 font-medium md:text-lg transition-colors duration-200`}
              >
                Studio
              </Link>
              <Link
                to="/contactus"
                className={`${isScrolled ? 'text-gray-900' : 'text-white'
                  } hover:text-orange-500 font-medium md:text-lg transition-colors duration-200`}
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="absolute right-0 md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 py-6">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-900 hover:text-orange-500 font-medium text-lg transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-900 hover:text-orange-500 font-medium text-lg transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                to="/studio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-900 hover:text-orange-500 font-medium text-lg transition-colors duration-200"
              >
                Studio
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}