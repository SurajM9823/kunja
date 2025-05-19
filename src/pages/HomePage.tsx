import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import AcademicPrograms from '../components/AcademicPrograms';
import WhyChooseUs from '../components/WhyChooseUs';
import NewsEvents from '../components/NewsEvents';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import ContactInfo from '../components/ContactInfo';
import CallToAction from '../components/CallToAction';
import FacilitiesSection from '../components/FacilitiesSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <AcademicPrograms />
      <WhyChooseUs />
      <FacilitiesSection />
      <NewsEvents />
      <Gallery />
      <Testimonials />
      <CallToAction />
      <ContactInfo />
    </div>
  );
};

export default HomePage;