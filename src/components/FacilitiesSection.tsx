import React from 'react';
import { BookOpen, DivideIcon as LucideIcon, Monitor, Leaf, Users, Library, Microscope, Trophy, Utensils, Bus } from 'lucide-react';

type FacilityProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Facility: React.FC<FacilityProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-2">
      <div className="p-3 bg-[#F0F4FF] inline-block rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#263B80] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FacilitiesSection: React.FC = () => {
  const facilities = [
    {
      icon: <Library className="h-8 w-8 text-[#263B80]" />,
      title: 'Modern Library',
      description: 'Well-stocked library with a wide range of books, journals, and digital resources.'
    },
    {
      icon: <Monitor className="h-8 w-8 text-[#263B80]" />,
      title: 'Computer Lab',
      description: 'State-of-the-art computer labs with latest technology and high-speed internet.'
    },
    {
      icon: <Microscope className="h-8 w-8 text-[#263B80]" />,
      title: 'Science Laboratory',
      description: 'Fully equipped labs for Physics, Chemistry and Biology with modern equipment.'
    },
    {
      icon: <Trophy className="h-8 w-8 text-[#263B80]" />,
      title: 'Sports Facilities',
      description: 'Indoor and outdoor sports facilities including basketball, volleyball, and cricket.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#263B80]" />,
      title: 'Smart Classrooms',
      description: 'Interactive smart classrooms with audio-visual aids for enhanced learning.'
    },
    {
      icon: <Users className="h-8 w-8 text-[#263B80]" />,
      title: 'Auditorium',
      description: 'Spacious auditorium for school events, performances and assemblies.'
    },
    {
      icon: <Utensils className="h-8 w-8 text-[#263B80]" />,
      title: 'Cafeteria',
      description: 'Clean and hygienic cafeteria serving nutritious meals and snacks.'
    },
    {
      icon: <Bus className="h-8 w-8 text-[#263B80]" />,
      title: 'Transportation',
      description: 'Safe and comfortable school bus service covering major routes.'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#263B80] mb-4">Our Facilities</h2>
          <div className="w-24 h-1 bg-[#E31B23] mx-auto mb-4"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            We provide state-of-the-art facilities to ensure a conducive learning environment for our students.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <Facility 
              key={index}
              icon={facility.icon}
              title={facility.title}
              description={facility.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;