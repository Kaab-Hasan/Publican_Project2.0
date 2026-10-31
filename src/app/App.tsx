import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AcademicPrograms } from './components/AcademicPrograms';
import { AdmissionSection } from './components/AdmissionSection';
import { GallerySection } from './components/GallerySection';
import { NewsEventsSection } from './components/NewsEventsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AlumniTrust } from './components/AlumniTrust';
import { DonateSection } from './components/DonateSection';
import { DownloadsSection } from './components/DownloadsSection';
import { ContactSection } from './components/ContactSection';
import { PortalsSection } from './components/PortalsSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <AcademicPrograms />
        <AdmissionSection />
        <GallerySection />
        <NewsEventsSection />
        <TestimonialsSection />
        <AlumniTrust />
        <DonateSection />
        <DownloadsSection />
        <ContactSection />
        <PortalsSection />
      </main>
      <Footer />
    </div>
  );
}