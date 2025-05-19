import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Award, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#263B80] mb-4">Welcome to Shanti Nikunja</h2>
          <div className="w-24 h-1 bg-[#E31B23] mx-auto mb-4"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Established in 2053 BS, Shanti Nikunja English Boarding School has been providing quality education
            from nursery to class XII. Our holistic approach to education helps students excel academically while
            developing important life skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-[#263B80] mb-4">Our Education Philosophy</h3>
            <p className="text-gray-600 mb-4">
              At Shanti Nikunja, we believe in nurturing young minds through a balanced approach to education.
              Our curriculum is designed to promote critical thinking, creativity, and a love for learning.
            </p>
            <p className="text-gray-600 mb-6">
              We provide a supportive environment where students can discover their talents, develop their skills,
              and grow into responsible citizens with strong values and a global perspective.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <div className="bg-[#FFDD00] p-2 rounded-full mr-3">
                  <GraduationCap className="text-[#263B80] h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#263B80]">Quality Education</h4>
                  <p className="text-sm text-gray-600">Academic excellence is our priority</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FFDD00] p-2 rounded-full mr-3">
                  <Users className="text-[#263B80] h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#263B80]">Skilled Faculty</h4>
                  <p className="text-sm text-gray-600">Experienced and dedicated teachers</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FFDD00] p-2 rounded-full mr-3">
                  <Award className="text-[#263B80] h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#263B80]">Character Building</h4>
                  <p className="text-sm text-gray-600">Strong focus on values and ethics</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FFDD00] p-2 rounded-full mr-3">
                  <Globe className="text-[#263B80] h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#263B80]">Global Perspective</h4>
                  <p className="text-sm text-gray-600">Preparing students for the world</p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/about/history" 
              className="inline-block bg-[#263B80] hover:bg-[#E31B23] text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8473456/pexels-photo-8473456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Students at Shanti Nikunja School" 
                className="rounded-lg shadow-lg object-cover h-96 w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="border-r border-gray-200 pr-4">
                    <p className="text-4xl font-bold text-[#E31B23]">25+</p>
                    <p className="text-sm text-gray-600">Years of Excellence</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#E31B23]">1000+</p>
                    <p className="text-sm text-gray-600">Happy Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;