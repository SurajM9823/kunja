import React from 'react';
import { Users, Lightbulb, Building, Award, BookOpen, Laptop } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Users className="h-12 w-12 text-[#FFDD00]" />,
      title: 'Experienced Faculty',
      description: 'Our dedicated teachers bring years of experience and expertise to ensure quality education.'
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-[#FFDD00]" />,
      title: 'Holistic Development',
      description: 'We focus on academic, physical, emotional, and social development of every student.'
    },
    {
      icon: <Building className="h-12 w-12 text-[#FFDD00]" />,
      title: 'Modern Facilities',
      description: 'Our school features well-equipped classrooms, labs, library, and sports facilities.'
    },
    {
      icon: <Award className="h-12 w-12 text-[#FFDD00]" />,
      title: 'Proven Track Record',
      description: 'Consistently excellent results in board examinations and various competitions.'
    },
    {
      icon: <BookOpen className="h-12 w-12 text-[#FFDD00]" />,
      title: 'Comprehensive Curriculum',
      description: 'Curriculum that balances academic rigor with co-curricular activities.'
    },
    {
      icon: <Laptop className="h-12 w-12 text-[#FFDD00]" />,
      title: 'Technology Integration',
      description: 'Modern teaching methods incorporating technology for enhanced learning experiences.'
    }
  ];

  return (
    <section className="py-16 bg-[#263B80] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Shanti Nikunja?</h2>
          <div className="w-24 h-1 bg-[#FFDD00] mx-auto mb-4"></div>
          <p className="max-w-3xl mx-auto opacity-80">
            For over 25 years, we have been committed to providing quality education and nurturing young minds to excel in all aspects of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-[#1E2C60] p-6 rounded-lg transform transition-transform hover:-translate-y-2 hover:bg-[#152050]"
            >
              <div className="mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="opacity-80">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;