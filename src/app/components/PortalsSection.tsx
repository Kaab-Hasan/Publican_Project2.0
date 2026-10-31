import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Shield, Users, GraduationCap } from 'lucide-react';

export function PortalsSection() {
  const portals = [
    {
      icon: Shield,
      title: "Admin Portal",
      description: "Administrative access for school management, reports, and system administration.",
      buttonText: "Admin Login"
    },
    {
      icon: Users,
      title: "Staff Portal",
      description: "Teachers and staff access for curriculum, grades, attendance, and school resources.",
      buttonText: "Staff Login"
    },
    {
      icon: GraduationCap,
      title: "Student Portal",
      description: "Student access for assignments, grades, schedules, and school announcements.",
      buttonText: "Student Login"
    }
  ];

  return (
    <section id="portals" className="py-16" style={{ backgroundColor: '#2C3186' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white" style={{ fontSize: '32px' }}>
            Portal Access
          </h2>
          <p className="text-lg text-blue-100">
            Access your dedicated portal for school resources and information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {portals.map((portal, index) => {
            const IconComponent = portal.icon;
            return (
              <Card 
                key={index} 
                className="text-center transition-transform hover:scale-105 h-80 flex flex-col justify-between"
              >
                <CardHeader className="flex-shrink-0">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-blue-50 w-fit">
                    <IconComponent className="w-8 h-8" style={{ color: '#2C3186' }} />
                  </div>
                  <CardTitle className="text-lg" style={{ color: '#2C3186' }}>
                    {portal.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between space-y-4">
                  <p className="text-sm text-gray-600 text-center flex-grow flex items-center justify-center">
                    {portal.description}
                  </p>
                  <Button 
                    className="w-full text-white mt-auto"
                    style={{ backgroundColor: '#2C3186', borderColor: '#2C3186' }}
                  >
                    {portal.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}