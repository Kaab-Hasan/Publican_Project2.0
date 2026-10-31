import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gray-50" style={{ height: '600px' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="School campus"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ color: '#2C3186', fontSize: '48px' }}>
            Carve Thy Destiny and Know Thyself
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto" style={{ fontSize: '24px', fontWeight: '300' }}>
            Empowering students to discover their potential, pursue excellence, and make meaningful contributions to society through quality education and character development.
          </p>
          <Button 
            size="lg" 
            className="px-8 py-3 text-white text-lg"
            style={{ backgroundColor: '#2C3186', borderColor: '#2C3186' }}
          >
            Explore Our Portals
          </Button>
        </div>
      </div>
    </section>
  );
}