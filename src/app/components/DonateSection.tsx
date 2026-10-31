import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { DollarSign, Heart, Users } from 'lucide-react';

export function DonateSection() {
  const options = [
    {
      icon: DollarSign,
      title: "Donate",
      description: "Support our school's mission through financial contributions that help improve facilities and provide resources.",
      buttonText: "Make a Donation",
      color: "#2C3186"
    },
    {
      icon: Heart,
      title: "Sponsor a Child",
      description: "Change a student's life by sponsoring their education, covering tuition, books, and other essential needs.",
      buttonText: "Sponsor Now",
      color: "#059669"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Share your skills and time by volunteering for school events, mentorship programs, or teaching assistance.",
      buttonText: "Join as Volunteer",
      color: "#7C3AED"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#2C3186', fontSize: '32px' }}>
            Get Involved
          </h2>
          <p className="text-lg text-gray-600">
            Join us in building a brighter future for our students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Card key={index} className="text-center h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 rounded-full bg-gray-50 w-fit">
                    <IconComponent className="w-8 h-8" style={{ color: option.color }} />
                  </div>
                  <CardTitle className="text-xl" style={{ color: '#2C3186' }}>
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm">
                    {option.description}
                  </CardDescription>
                  <Button 
                    className="w-full rounded-full text-white"
                    style={{ backgroundColor: option.color, borderColor: option.color }}
                  >
                    {option.buttonText}
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