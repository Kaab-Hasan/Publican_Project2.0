import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Heart } from 'lucide-react';

export function AlumniTrust() {
  return (
    <section id="alumni" className="py-16" style={{ backgroundColor: '#EAF0FF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2C3186', fontSize: '32px' }}>
              The Publican Alumni Trust
            </h2>
            <div className="space-y-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              <p>
                Our alumni network spans across the globe, comprising successful professionals, entrepreneurs, and leaders who continue to make significant contributions to society. The Alumni Trust serves as a bridge connecting past, present, and future students.
              </p>
              <p>
                <strong>Our Mission:</strong> To support current students through scholarships, mentorship programs, and infrastructure development while fostering lifelong connections among alumni.
              </p>
              <p>
                <strong>Our Goals:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Provide educational scholarships for deserving students</li>
                <li>Support school infrastructure and facility improvements</li>
                <li>Create mentorship opportunities between alumni and students</li>
                <li>Organize professional development workshops and career guidance</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                className="flex items-center gap-2"
                style={{ backgroundColor: '#2C3186', borderColor: '#2C3186' }}
              >
                <ExternalLink className="w-4 h-4" />
                Visit Trust Site
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                style={{ borderColor: '#2C3186', color: '#2C3186' }}
              >
                <Heart className="w-4 h-4" />
                Sponsor a Student
              </Button>
            </div>
          </div>

          {/* Image */}
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Alumni gathering"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}