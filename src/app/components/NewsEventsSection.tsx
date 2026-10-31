import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, MapPin, ArrowRight, Bell, Users } from 'lucide-react';

export function NewsEventsSection() {
  const newsItems = [
    {
      id: 1,
      title: "New STEM Laboratory Inaugurated",
      excerpt: "The school proudly announces the opening of our state-of-the-art STEM laboratory, equipped with modern technology to enhance science education.",
      image: "https://images.unsplash.com/photo-1581726690015-c9861fa5057f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 25, 2024",
      category: "Announcement",
      urgent: false
    },
    {
      id: 2,
      title: "Mid-Term Examination Schedule Released",
      excerpt: "The mid-term examination timetable for all classes has been published. Students and parents are advised to check the schedule carefully.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 20, 2024",
      category: "Academic",
      urgent: true
    },
    {
      id: 3,
      title: "Alumni Success Story: Medical School Graduate",
      excerpt: "We celebrate our alumnus Dr. Michael Thompson who recently graduated from Harvard Medical School with honors.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 18, 2024",
      category: "Alumni",
      urgent: false
    },
    {
      id: 4,
      title: "COVID-19 Health Protocols Update",
      excerpt: "Updated health and safety guidelines for the upcoming term. All students and staff must adhere to the new protocols.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 15, 2024",
      category: "Health",
      urgent: true
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Sports Day",
      description: "A day of athletic competitions, team spirit, and community celebration featuring track and field events, team sports, and fun activities for all ages.",
      date: "May 15, 2024",
      time: "8:00 AM - 4:00 PM",
      location: "Main Sports Complex",
      category: "Sports",
      attendees: "All Students & Parents",
      featured: true
    },
    {
      id: 2,
      title: "Parent-Teacher Conference",
      description: "An opportunity for parents to meet with teachers to discuss their child's academic progress and development.",
      date: "May 8, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Individual Classrooms",
      category: "Academic",
      attendees: "Parents & Teachers",
      featured: false
    },
    {
      id: 3,
      title: "Science Exhibition",
      description: "Students showcase their scientific projects and experiments in an interactive exhibition open to the school community.",
      date: "May 22, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Main Hall",
      category: "Academic",
      attendees: "All Students",
      featured: true
    },
    {
      id: 4,
      title: "Alumni Homecoming",
      description: "Former students return to reconnect with classmates, teachers, and share their success stories with current students.",
      date: "June 1, 2024",
      time: "11:00 AM - 6:00 PM",
      location: "School Campus",
      category: "Alumni",
      attendees: "Alumni & Current Students",
      featured: false
    }
  ];

  return (
    <section id="news-events" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#2C3186' }}>
            News & Events
          </h2>
          <p className="text-xl text-gray-600">
            Stay updated with the latest announcements and upcoming activities
          </p>
        </div>

        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="news" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Latest News
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Upcoming Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Featured News */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <ImageWithFallback
                        src={newsItems[0].image}
                        alt={newsItems[0].title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge style={{ backgroundColor: '#2C3186' }}>
                          {newsItems[0].category}
                        </Badge>
                        <span className="text-sm text-gray-600">{newsItems[0].date}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3" style={{ color: '#2C3186' }}>
                        {newsItems[0].title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {newsItems[0].excerpt}
                      </p>
                      <Button 
                        variant="outline"
                        className="flex items-center gap-2"
                        style={{ borderColor: '#2C3186', color: '#2C3186' }}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Other News */}
              {newsItems.slice(1).map((news) => (
                <Card key={news.id} className="shadow-lg overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <ImageWithFallback
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    {news.urgent && (
                      <Badge className="absolute top-3 left-3 bg-red-500">
                        Urgent
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge 
                        variant="outline"
                        style={{ borderColor: '#2C3186', color: '#2C3186' }}
                      >
                        {news.category}
                      </Badge>
                      <span className="text-sm text-gray-600">{news.date}</span>
                    </div>
                    <h3 className="font-bold mb-2" style={{ color: '#2C3186' }}>
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {news.excerpt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <Card 
                  key={event.id} 
                  className={`shadow-lg ${event.featured ? 'border-2' : ''}`}
                  style={event.featured ? { borderColor: '#2C3186' } : {}}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      {/* Date Block */}
                      <div 
                        className="flex-shrink-0 text-center p-4 rounded-lg text-white w-24"
                        style={{ backgroundColor: '#2C3186' }}
                      >
                        <div className="text-2xl font-bold">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-sm">
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold" style={{ color: '#2C3186' }}>
                            {event.title}
                          </h3>
                          {event.featured && (
                            <Badge style={{ backgroundColor: '#2C3186' }}>
                              Featured
                            </Badge>
                          )}
                          <Badge variant="outline" style={{ borderColor: '#2C3186', color: '#2C3186' }}>
                            {event.category}
                          </Badge>
                        </div>
                        
                        <p className="text-gray-600 mb-3">
                          {event.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" style={{ color: '#2C3186' }} />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" style={{ color: '#2C3186' }} />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" style={{ color: '#2C3186' }} />
                            <span>{event.attendees}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="flex-shrink-0">
                        <Button 
                          variant="outline"
                          style={{ borderColor: '#2C3186', color: '#2C3186' }}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}