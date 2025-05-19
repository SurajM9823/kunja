import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, BookText, GraduationCap, Calculator, Flag as Flare } from 'lucide-react';

const AcademicPrograms: React.FC = () => {
  const programs = [
    {
      id: 1,
      title: 'Nursery to KG',
      description: 'Nurturing young minds with fun-based learning activities and foundational skills development.',
      icon: <BookOpen className="h-8 w-8 text-white" />,
      color: '#FFDD00',
      textColor: '#263B80',
      link: '/academics/nursery-kg',
      image: 'https://images.pexels.com/photos/8617541/pexels-photo-8617541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Primary (1-5)',
      description: 'Building a strong foundation in core subjects while encouraging creativity and critical thinking.',
      icon: <BookText className="h-8 w-8 text-white" />,
      color: '#E31B23',
      textColor: 'white',
      link: '/academics/primary',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Middle School (6-8)',
      description: 'Expanding knowledge horizons with a comprehensive curriculum and personality development.',
      icon: <Flare className="h-8 w-8 text-white" />,
      color: '#263B80',
      textColor: 'white',
      link: '/academics/middle-school',
      image: 'https://images.pexels.com/photos/8423026/pexels-photo-8423026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      title: 'Secondary (9-10)',
      description: 'Preparing students for board examinations with focused academic preparation and skill enhancement.',
      icon: <Calculator className="h-8 w-8 text-white" />,
      color: '#FFDD00',
      textColor: '#263B80',
      link: '/academics/secondary',
      image: 'https://images.pexels.com/photos/8422214/pexels-photo-8422214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      title: 'Higher Secondary (11-12)',
      description: 'Specialized education in Science, Management, and Humanities to prepare for higher studies and career.',
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      color: '#E31B23',
      textColor: 'white',
      link: '/academics/higher-secondary',
      image: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#263B80] mb-4">Academic Programs</h2>
          <div className="w-24 h-1 bg-[#E31B23] mx-auto mb-4"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Shanti Nikunja offers a comprehensive education from nursery to class XII, ensuring a solid foundation
            and continuous growth throughout a student's academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2"
            >
              <div className="relative h-48">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute top-4 right-4 p-2 rounded-full"
                  style={{ backgroundColor: program.color }}
                >
                  {program.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#263B80] mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Link 
                  to={program.link}
                  className="inline-block text-[#E31B23] hover:text-[#263B80] font-semibold transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/academics"
            className="inline-block bg-[#263B80] hover:bg-[#E31B23] text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;