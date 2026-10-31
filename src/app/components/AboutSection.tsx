import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section id="about" className="py-16" style={{ backgroundColor: '#F6F8FB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2C3186', fontSize: '32px' }}>
              About The Publican Secondary School
            </h2>
            <div className="space-y-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              <p>
                Founded with the vision of excellence in education, The Publican Secondary School has been nurturing young minds for decades. We believe in the motto "Carve Thy Destiny and Know Thyself" - empowering our students to discover their true potential.
              </p>
              <p>
                <strong>Our Mission:</strong> To provide holistic education that develops not just academic excellence but also character, creativity, and critical thinking skills.
              </p>
              <p>
                <strong>Our Values:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Excellence in all endeavors</li>
                <li>Integrity and moral uprightness</li>
                <li>Innovation and creative thinking</li>
                <li>Respect for diversity and inclusion</li>
                <li>Service to community and nation</li>
              </ul>
            </div>
          </div>

          {/* Image */}
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Students in classroom"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}