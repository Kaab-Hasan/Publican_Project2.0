import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote, Star, GraduationCap, Users, Heart } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      role: "Class of 2015, Now Pediatrician",
      category: "alumni",
      content: "The Publican Secondary School didn't just educate me; it transformed me. The motto 'Carve Thy Destiny and Know Thyself' became my life philosophy. The dedicated teachers and rigorous academic environment prepared me for medical school and beyond.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      achievement: "Harvard Medical School Graduate"
    },
    {
      id: 2,
      name: "Mrs. Jennifer Adebayo",
      role: "Parent of Current SSS 2 Student",
      category: "parent",
      content: "Choosing Publican for my daughter was the best decision we made. The school's holistic approach to education, combined with strong moral values, has helped her excel both academically and personally. The teachers genuinely care about each student's success.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      achievement: "Daughter leads debate team"
    },
    {
      id: 3,
      name: "Michael Thompson",
      role: "Class of 2018, Software Engineer",
      category: "alumni",
      content: "The computer science program at Publican laid the foundation for my career in tech. The hands-on learning approach and supportive environment helped me develop both technical skills and leadership qualities that serve me well today at Google.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      achievement: "Software Engineer at Google"
    },
    {
      id: 4,
      name: "Mr. David Okonkwo",
      role: "Mathematics Teacher (10 years)",
      category: "staff",
      content: "Teaching at Publican has been incredibly rewarding. The school's commitment to excellence and innovation allows us to implement creative teaching methods. Seeing students grow and succeed makes every day worthwhile.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      achievement: "Teacher of the Year 2023"
    },
    {
      id: 5,
      name: "Grace Emeka",
      role: "Current SSS 3 Student",
      category: "student",
      content: "Publican has been my second home for six years. The friendships I've made, the knowledge I've gained, and the confidence I've built here will stay with me forever. I'm ready to pursue my dreams in engineering because of the foundation this school has given me.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      achievement: "School Valedictorian 2024"
    },
    {
      id: 6,
      name: "Prof. Anthony Lagos",
      role: "Class of 2008, University Professor",
      category: "alumni",
      content: "The analytical thinking and research skills I developed at Publican were instrumental in my academic journey. From JSS to earning my PhD, the school's emphasis on critical thinking set me apart. I now teach at the University of Lagos and often share lessons I learned here.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      achievement: "Professor of Chemistry, UNILAG"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'alumni':
        return <GraduationCap className="w-4 h-4" />;
      case 'parent':
        return <Heart className="w-4 h-4" />;
      case 'staff':
        return <Users className="w-4 h-4" />;
      case 'student':
        return <Star className="w-4 h-4" />;
      default:
        return <Quote className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'alumni':
        return '#2C3186';
      case 'parent':
        return '#059669';
      case 'staff':
        return '#DC2626';
      case 'student':
        return '#7C3AED';
      default:
        return '#6B7280';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#2C3186' }}>
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our students, parents, alumni, and staff about their Publican experience
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#2C3186' }}>
              500+
            </div>
            <div className="text-gray-600">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#2C3186' }}>
              95%
            </div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#2C3186' }}>
              1000+
            </div>
            <div className="text-gray-600">Successful Alumni</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#2C3186' }}>
              20+
            </div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge 
                        variant="outline" 
                        className="flex items-center gap-1 capitalize"
                        style={{ 
                          borderColor: getCategoryColor(testimonial.category), 
                          color: getCategoryColor(testimonial.category) 
                        }}
                      >
                        {getCategoryIcon(testimonial.category)}
                        {testimonial.category}
                      </Badge>
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="flex-grow">
                      <Quote className="w-8 h-8 text-gray-300 mb-3" />
                      <p className="text-gray-700 italic mb-4 line-clamp-5">
                        "{testimonial.content}"
                      </p>
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-4 pt-4 border-t">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-grow">
                        <h4 className="font-semibold" style={{ color: '#2C3186' }}>
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                        <p className="text-xs font-medium" style={{ color: getCategoryColor(testimonial.category) }}>
                          {testimonial.achievement}
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

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto" style={{ borderColor: '#2C3186' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2C3186' }}>
                Join Our Success Stories
              </h3>
              <p className="text-gray-600 mb-6">
                Be part of a community that nurtures excellence, builds character, and creates leaders for tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-6 py-2 rounded-md text-white font-medium transition-colors"
                  style={{ backgroundColor: '#2C3186' }}
                >
                  Apply for Admission
                </button>
                <button
                  className="px-6 py-2 rounded-md border font-medium transition-colors hover:bg-blue-50"
                  style={{ borderColor: '#2C3186', color: '#2C3186' }}
                >
                  Share Your Story
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}