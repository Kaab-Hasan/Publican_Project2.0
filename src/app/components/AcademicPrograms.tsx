import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { BookOpen, Calculator, Atom, Globe, Palette, Music } from 'lucide-react';

export function AcademicPrograms() {
  const programs = [
    {
      icon: BookOpen,
      title: "Languages & Literature",
      description: "Comprehensive English, Literature, and local language studies fostering communication skills and cultural appreciation."
    },
    {
      icon: Calculator,
      title: "Mathematics & Sciences",
      description: "Advanced mathematics, physics, chemistry, and biology programs preparing students for STEM careers."
    },
    {
      icon: Globe,
      title: "Social Studies",
      description: "History, geography, government, and economics courses developing informed global citizens."
    },
    {
      icon: Atom,
      title: "Science & Technology",
      description: "Modern laboratory facilities and technology integration preparing students for the digital age."
    },
    {
      icon: Palette,
      title: "Creative Arts",
      description: "Visual arts, drama, and creative writing programs nurturing artistic expression and creativity."
    },
    {
      icon: Music,
      title: "Music & Performance",
      description: "Comprehensive music education including choir, band, and individual instrument instruction."
    }
  ];

  return (
    <section id="programs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold" style={{ color: '#2C3186', fontSize: '32px' }}>
            Academic Programs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive curriculum designed to prepare students for success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={index} className="h-full transition-shadow hover:shadow-lg" style={{ width: '100%', maxWidth: '240px', height: '300px', margin: '0 auto' }}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full" style={{ backgroundColor: '#EAF0FF', width: 'fit-content' }}>
                    <IconComponent className="w-8 h-8" style={{ color: '#2C3186' }} />
                  </div>
                  <CardTitle className="text-lg" style={{ color: '#2C3186' }}>
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}