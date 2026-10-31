import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin, Users, X } from 'lucide-react';

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', count: 24 },
    { id: 'events', name: 'School Events', count: 8 },
    { id: 'academics', name: 'Academics', count: 6 },
    { id: 'sports', name: 'Sports', count: 5 },
    { id: 'facilities', name: 'Facilities', count: 5 }
  ];

  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Annual Science Fair 2024",
      category: "events",
      date: "March 15, 2024",
      location: "Main Hall"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Students in Laboratory",
      category: "academics",
      date: "February 28, 2024",
      location: "Science Lab"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Basketball Championship",
      category: "sports",
      date: "April 10, 2024",
      location: "Sports Complex"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Library Study Session",
      category: "academics",
      date: "March 20, 2024",
      location: "Main Library"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "School Campus Overview",
      category: "facilities",
      date: "January 15, 2024",
      location: "Main Campus"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Cultural Day Celebration",
      category: "events",
      date: "May 1, 2024",
      location: "Main Hall"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1581726690015-c9861fa5057f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Computer Lab Session",
      category: "academics",
      date: "March 5, 2024",
      location: "IT Center"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Football Training",
      category: "sports",
      date: "April 20, 2024",
      location: "Football Field"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Modern Classroom",
      category: "facilities",
      date: "February 10, 2024",
      location: "Academic Block"
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#2C3186' }}>
            School Gallery
          </h2>
          <p className="text-xl text-gray-600">
            Capturing moments and memories from our vibrant school community
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id 
                  ? 'text-white' 
                  : 'text-gray-700 border-gray-300 hover:border-blue-400'
              }`}
              style={selectedCategory === category.id ? { backgroundColor: '#2C3186', borderColor: '#2C3186' } : {}}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden transition-transform hover:scale-105 shadow-lg">
                  <div className="relative">
                    <ImageWithFallback
                      src={item.src}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                        Click to view
                      </div>
                    </div>
                    <Badge 
                      className="absolute top-3 left-3 capitalize"
                      style={{ backgroundColor: '#2C3186' }}
                    >
                      {item.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2" style={{ color: '#2C3186' }}>
                      {item.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {item.location}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                <div className="relative">
                  <ImageWithFallback
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#2C3186' }}>
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {item.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {item.location}
                      </div>
                      <Badge 
                        className="capitalize"
                        style={{ backgroundColor: '#2C3186' }}
                      >
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            style={{ borderColor: '#2C3186', color: '#2C3186' }}
            className="hover:bg-blue-50"
          >
            Load More Photos
          </Button>
        </div>
      </div>
    </section>
  );
}