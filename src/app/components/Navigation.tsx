import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100" style={{ height: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-semibold" style={{ color: '#2C3186' }}>
                The Publican Secondary School
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:underline transition-colors duration-200" style={{ color: '#2C3186', fontSize: '16px' }}>
                Home
              </a>
              <a href="#about" className="hover:underline transition-colors duration-200" style={{ color: '#2C3186', fontSize: '16px' }}>
                About
              </a>
              <a href="#programs" className="hover:underline transition-colors duration-200" style={{ color: '#2C3186', fontSize: '16px' }}>
                Programs
              </a>
              <a href="#admission" className="hover:underline transition-colors duration-200" style={{ color: '#2C3186', fontSize: '16px' }}>
                Admission
              </a>
              <a href="#gallery" className="hover:underline transition-colors duration-200" style={{ color: '#2C3186', fontSize: '16px' }}>
                Gallery
              </a>
              <a href="#news-events" className="hover:underline transition-colors duration-200" style={{ color: '#2C3186', fontSize: '16px' }}>
                News & Events
              </a>
              <a href="#downloads" className="hover:underline transition-colors duration-200" style={{ color: '#2C3186', fontSize: '16px' }}>
                Downloads
              </a>
              <a href="#contact" className="hover:underline transition-colors duration-200" style={{ color: '#2C3186', fontSize: '16px' }}>
                Contact
              </a>
              <a href="#portals" className="hover:underline transition-colors duration-200" style={{ color: '#2C3186', fontSize: '16px' }}>
                Portals
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="sm"
              className="p-2"
              style={{ color: '#2C3186' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 hover:bg-gray-50" style={{ color: '#2C3186' }}>
                Home
              </a>
              <a href="#about" className="block px-3 py-2 hover:bg-gray-50" style={{ color: '#2C3186' }}>
                About
              </a>
              <a href="#programs" className="block px-3 py-2 hover:bg-gray-50" style={{ color: '#2C3186' }}>
                Programs
              </a>
              <a href="#admission" className="block px-3 py-2 hover:bg-gray-50" style={{ color: '#2C3186' }}>
                Admission
              </a>
              <a href="#gallery" className="block px-3 py-2 hover:bg-gray-50" style={{ color: '#2C3186' }}>
                Gallery
              </a>
              <a href="#news-events" className="block px-3 py-2 hover:bg-gray-50" style={{ color: '#2C3186' }}>
                News & Events
              </a>
              <a href="#downloads" className="block px-3 py-2 hover:bg-gray-50" style={{ color: '#2C3186' }}>
                Downloads
              </a>
              <a href="#contact" className="block px-3 py-2 hover:bg-gray-50" style={{ color: '#2C3186' }}>
                Contact
              </a>
              <a href="#portals" className="block px-3 py-2 hover:bg-gray-50" style={{ color: '#2C3186' }}>
                Portals
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}