import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16" style={{ backgroundColor: '#F6F8FB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#2C3186', fontSize: '32px' }}>
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with us for inquiries, admissions, or any questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle style={{ color: '#2C3186' }}>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter message subject" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Enter your message here..." 
                  rows={5}
                />
              </div>
              <Button 
                className="w-full text-white"
                style={{ backgroundColor: '#2C3186', borderColor: '#2C3186' }}
              >
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 mt-1" style={{ color: '#2C3186' }} />
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: '#2C3186' }}>Address</h3>
                    <p className="text-gray-600">
                      123 Education Street<br />
                      Academic District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 mt-1" style={{ color: '#2C3186' }} />
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: '#2C3186' }}>Phone</h3>
                    <p className="text-gray-600">
                      Main: +1 (555) 123-4567<br />
                      Admissions: +1 (555) 123-4568
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 mt-1" style={{ color: '#2C3186' }} />
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: '#2C3186' }}>Email</h3>
                    <p className="text-gray-600">
                      info@publicanschool.edu<br />
                      admissions@publicanschool.edu
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 mt-1" style={{ color: '#2C3186' }} />
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: '#2C3186' }}>Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}