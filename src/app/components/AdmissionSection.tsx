import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Download, FileText, Calendar, Users, GraduationCap, Quote } from 'lucide-react';

export function AdmissionSection() {
  const grades = [
    { level: "JSS 1", age: "11-12 years", subjects: "8 core subjects" },
    { level: "JSS 2", age: "12-13 years", subjects: "8 core subjects" },
    { level: "JSS 3", age: "13-14 years", subjects: "8 core subjects + BECE prep" },
    { level: "SSS 1", age: "14-15 years", subjects: "Core + Electives" },
    { level: "SSS 2", age: "15-16 years", subjects: "Core + Specialized tracks" },
    { level: "SSS 3", age: "16-17 years", subjects: "WASSCE preparation" }
  ];

  const requirements = [
    "Completed application form",
    "Birth certificate or age declaration",
    "Previous school report/transcript",
    "Passport photographs (4 copies)",
    "Medical certificate",
    "Parent/Guardian identification"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of JSS 2 Student",
      content: "The Publican Secondary School has exceeded our expectations. The teachers are dedicated and my daughter has grown both academically and personally.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Michael Okonkwo",
      role: "SSS 3 Graduate",
      content: "This school shaped my destiny. The motto 'Carve Thy Destiny and Know Thyself' became my life philosophy. I'm now studying engineering at university.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Mrs. Elizabeth Adebayo",
      role: "Parent of Twin Students",
      content: "Having both my children here has been a blessing. The school's values align with our family's beliefs, and the academic standards are excellent.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="admission" className="py-16" style={{ backgroundColor: '#EAF0FF', minHeight: '600px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#2C3186' }}>
            Admission Information
          </h2>
          <p className="text-xl text-gray-600">
            Join our community of learners and begin your journey to excellence
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Admission Information */}
          <div className="space-y-8">
            {/* Grades and Age Groups */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: '#2C3186' }}>
                  <GraduationCap className="w-5 h-5" />
                  Grade Levels & Age Groups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {grades.map((grade, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-white">
                      <Badge variant="outline" className="mb-2" style={{ borderColor: '#2C3186', color: '#2C3186' }}>
                        {grade.level}
                      </Badge>
                      <p className="text-sm text-gray-600">Age: {grade.age}</p>
                      <p className="text-sm text-gray-600">{grade.subjects}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Admission Process */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: '#2C3186' }}>
                  <Calendar className="w-5 h-5" />
                  Admission Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full text-xs flex items-center justify-center text-white" style={{ backgroundColor: '#2C3186' }}>1</span>
                    <span>Complete and submit online application form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full text-xs flex items-center justify-center text-white" style={{ backgroundColor: '#2C3186' }}>2</span>
                    <span>Submit required documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full text-xs flex items-center justify-center text-white" style={{ backgroundColor: '#2C3186' }}>3</span>
                    <span>Attend entrance examination (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full text-xs flex items-center justify-center text-white" style={{ backgroundColor: '#2C3186' }}>4</span>
                    <span>Interview with student and parents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full text-xs flex items-center justify-center text-white" style={{ backgroundColor: '#2C3186' }}>5</span>
                    <span>Admission decision and enrollment</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: '#2C3186' }}>
                  <FileText className="w-5 h-5" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2C3186' }}></div>
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Call to Action */}
          <div className="space-y-8">
            {/* Main CTA Card */}
            <Card className="shadow-lg border-2" style={{ borderColor: '#2C3186' }}>
              <CardHeader className="text-center" style={{ backgroundColor: '#2C3186' }}>
                <CardTitle className="text-white text-2xl">
                  Ready to Apply?
                </CardTitle>
                <p className="text-blue-100">
                  Start your admission journey today
                </p>
              </CardHeader>
              <CardContent className="p-8 text-center space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#2C3186' }}>
                    Application Deadline
                  </h3>
                  <p className="text-gray-600">
                    June 30, 2024 for September 2024 session
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full text-white text-lg py-3"
                    style={{ backgroundColor: '#2C3186', borderColor: '#2C3186' }}
                  >
                    Apply Online Now
                  </Button>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 flex-1"
                      style={{ borderColor: '#2C3186', color: '#2C3186' }}
                    >
                      <Download className="w-4 h-4" />
                      Download Application
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 flex-1"
                      style={{ borderColor: '#2C3186', color: '#2C3186' }}
                    >
                      <FileText className="w-4 h-4" />
                      Admission Guide
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-2">
                    Need help with your application?
                  </p>
                  <p className="text-sm" style={{ color: '#2C3186' }}>
                    📞 +1 (555) 123-4568<br />
                    ✉️ admissions@publicanschool.edu
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* School Image */}
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Students in school"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#2C3186' }}>
              What Our Community Says
            </h3>
            <p className="text-gray-600">
              Hear from parents and students about their experience
            </p>
          </div>

          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="mx-4">
                    <CardContent className="p-8 text-center">
                      <Quote className="w-8 h-8 mx-auto mb-4 text-gray-400" />
                      <p className="text-lg italic mb-6 text-gray-700">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="text-left">
                          <p className="font-semibold" style={{ color: '#2C3186' }}>
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}