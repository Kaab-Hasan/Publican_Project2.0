import { ExternalLink, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#2C3186', minHeight: '200px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-200 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-200 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-blue-200 transition-colors">
                  Academic Programs
                </a>
              </li>
              <li>
                <a href="#admission" className="hover:text-blue-200 transition-colors">
                  Admission
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-200 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#news-events" className="hover:text-blue-200 transition-colors">
                  News & Events
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-200 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-blue-200 transition-colors">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-200 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#portals" className="hover:text-blue-200 transition-colors">
                  Portal Access
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm">
              <p>123 Education Street</p>
              <p>Academic District</p>
              <p>City, State 12345</p>
              <p className="mt-4">Phone: +1 (555) 123-4567</p>
              <p>Email: info@publicanschool.edu</p>
            </div>
          </div>

          {/* Social & Trust */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-200 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
              
              <div className="space-y-2">
                <a 
                  href="#" 
                  className="flex items-center space-x-2 hover:text-blue-200 transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  <span>Alumni Trust Website</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center space-x-2 hover:text-blue-200 transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  <span>Student Portal</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-sm">
          <p>© 2024 The Publican Secondary School. All rights reserved.</p>
          <p className="mt-1">Carve Thy Destiny and Know Thyself</p>
        </div>
      </div>
    </footer>
  );
}