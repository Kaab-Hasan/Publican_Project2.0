import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Download, FileText, Search, Calendar, BookOpen, Users, GraduationCap, FileImage } from 'lucide-react';
import { useState } from 'react';

export function DownloadsSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const downloadCategories = [
    { id: 'academic', name: 'Academic', icon: BookOpen, count: 12 },
    { id: 'admission', name: 'Admission', icon: GraduationCap, count: 8 },
    { id: 'forms', name: 'Forms', icon: FileText, count: 15 },
    { id: 'policies', name: 'Policies', icon: Users, count: 6 },
    { id: 'newsletters', name: 'Newsletters', icon: FileImage, count: 4 }
  ];

  const downloadItems = [
    // Academic Documents
    {
      id: 1,
      title: "JSS 1-3 Curriculum Guide",
      description: "Comprehensive curriculum outline for Junior Secondary School classes",
      category: "academic",
      fileSize: "2.3 MB",
      fileType: "PDF",
      dateAdded: "April 20, 2024",
      downloadCount: 156,
      featured: true
    },
    {
      id: 2,
      title: "SSS Subject Selection Guide",
      description: "Guide to help students choose appropriate subjects for Senior Secondary School",
      category: "academic",
      fileSize: "1.8 MB",
      fileType: "PDF",
      dateAdded: "April 15, 2024",
      downloadCount: 203,
      featured: false
    },
    {
      id: 3,
      title: "WASSCE Preparation Timeline",
      description: "Important dates and preparation schedule for WASSCE examinations",
      category: "academic",
      fileSize: "950 KB",
      fileType: "PDF",
      dateAdded: "March 30, 2024",
      downloadCount: 89,
      featured: false
    },

    // Admission Documents
    {
      id: 4,
      title: "Admission Application Form",
      description: "Official application form for new student admissions",
      category: "admission",
      fileSize: "1.2 MB",
      fileType: "PDF",
      dateAdded: "April 25, 2024",
      downloadCount: 342,
      featured: true
    },
    {
      id: 5,
      title: "Admission Requirements Checklist",
      description: "Complete list of documents required for admission",
      category: "admission",
      fileSize: "680 KB",
      fileType: "PDF",
      dateAdded: "April 22, 2024",
      downloadCount: 278,
      featured: false
    },
    {
      id: 6,
      title: "School Fee Structure 2024/2025",
      description: "Detailed breakdown of school fees for the academic session",
      category: "admission",
      fileSize: "1.1 MB",
      fileType: "PDF",
      dateAdded: "April 10, 2024",
      downloadCount: 412,
      featured: true
    },

    // Forms
    {
      id: 7,
      title: "Student Medical Form",
      description: "Medical information form to be completed by all students",
      category: "forms",
      fileSize: "520 KB",
      fileType: "PDF",
      dateAdded: "April 18, 2024",
      downloadCount: 134,
      featured: false
    },
    {
      id: 8,
      title: "Permission Slip for Excursions",
      description: "Parental consent form for educational trips and excursions",
      category: "forms",
      fileSize: "430 KB",
      fileType: "PDF",
      dateAdded: "April 12, 2024",
      downloadCount: 97,
      featured: false
    },
    {
      id: 9,
      title: "Leave of Absence Application",
      description: "Form for requesting extended leave from school",
      category: "forms",
      fileSize: "380 KB",
      fileType: "PDF",
      dateAdded: "March 28, 2024",
      downloadCount: 45,
      featured: false
    },

    // Policies
    {
      id: 10,
      title: "Student Code of Conduct",
      description: "Guidelines for student behavior and disciplinary procedures",
      category: "policies",
      fileSize: "1.5 MB",
      fileType: "PDF",
      dateAdded: "April 8, 2024",
      downloadCount: 267,
      featured: true
    },
    {
      id: 11,
      title: "Anti-Bullying Policy",
      description: "School's comprehensive policy on preventing and addressing bullying",
      category: "policies",
      fileSize: "890 KB",
      fileType: "PDF",
      dateAdded: "March 25, 2024",
      downloadCount: 178,
      featured: false
    },

    // Newsletters
    {
      id: 12,
      title: "Publican Newsletter - April 2024",
      description: "Monthly newsletter featuring school updates and achievements",
      category: "newsletters",
      fileSize: "3.2 MB",
      fileType: "PDF",
      dateAdded: "April 1, 2024",
      downloadCount: 89,
      featured: false
    }
  ];

  const getIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return <FileText className="w-8 h-8 text-red-500" />;
      case 'doc':
      case 'docx':
        return <FileText className="w-8 h-8 text-blue-500" />;
      default:
        return <FileText className="w-8 h-8 text-gray-500" />;
    }
  };

  const filteredItems = downloadItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="downloads" className="py-16" style={{ backgroundColor: '#F8FAFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#2C3186' }}>
            Downloads Center
          </h2>
          <p className="text-xl text-gray-600">
            Access important documents, forms, and resources
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {downloadCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <IconComponent className="w-8 h-8 mx-auto mb-2" style={{ color: '#2C3186' }} />
                  <h3 className="font-semibold text-sm mb-1" style={{ color: '#2C3186' }}>
                    {category.name}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {category.count} files
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="admission">Admission</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
            <TabsTrigger value="newsletters">Newsletters</TabsTrigger>
          </TabsList>

          {['all', ...downloadCategories.map(cat => cat.id)].map((tabValue) => (
            <TabsContent key={tabValue} value={tabValue}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {(tabValue === 'all' ? filteredItems : filteredItems.filter(item => item.category === tabValue))
                  .map((item) => (
                  <Card 
                    key={item.id} 
                    className={`shadow-lg hover:shadow-xl transition-shadow ${item.featured ? 'border-2' : ''}`}
                    style={item.featured ? { borderColor: '#2C3186' } : {}}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          {getIcon(item.fileType)}
                        </div>
                        
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold truncate" style={{ color: '#2C3186' }}>
                              {item.title}
                            </h3>
                            {item.featured && (
                              <Badge style={{ backgroundColor: '#2C3186' }}>
                                Popular
                              </Badge>
                            )}
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {item.description}
                          </p>
                          
                          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {item.dateAdded}
                            </span>
                            <span>{item.fileSize}</span>
                            <span>{item.downloadCount} downloads</span>
                          </div>
                          
                          <Button 
                            size="sm" 
                            className="w-full text-white"
                            style={{ backgroundColor: '#2C3186', borderColor: '#2C3186' }}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download {item.fileType}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Help Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle style={{ color: '#2C3186' }}>
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for? Contact our administrative office for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  variant="outline"
                  style={{ borderColor: '#2C3186', color: '#2C3186' }}
                >
                  Contact Admin
                </Button>
                <Button 
                  variant="outline"
                  style={{ borderColor: '#2C3186', color: '#2C3186' }}
                >
                  Request Document
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}