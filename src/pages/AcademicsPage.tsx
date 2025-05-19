import React from 'react';
import { BookOpen, Users, Award, Star, Calendar, Clock } from 'lucide-react';

const AcademicsPage: React.FC = () => {
  const programs = [
    {
      level: 'Early Childhood Education',
      grades: 'Nursery to KG',
      description: 'Our early childhood program focuses on developing fundamental skills through play-based learning, creative activities, and basic numeracy and literacy.',
      features: [
        'Age-appropriate learning activities',
        'Development of motor skills',
        'Introduction to basic concepts',
        'Social interaction skills'
      ],
      schedule: '8:00 AM - 2:00 PM',
      curriculum: [
        'Language Development',
        'Number Concepts',
        'Environmental Awareness',
        'Creative Activities'
      ]
    },
    {
      level: 'Primary Education',
      grades: 'Grades 1-5',
      description: 'Primary education builds a strong foundation in core subjects while encouraging creativity and critical thinking skills.',
      features: [
        'Core subject focus',
        'Regular assessments',
        'Extra-curricular activities',
        'Personal development'
      ],
      schedule: '8:00 AM - 3:00 PM',
      curriculum: [
        'English',
        'Mathematics',
        'Science',
        'Social Studies',
        'Computer Science'
      ]
    },
    {
      level: 'Middle School',
      grades: 'Grades 6-8',
      description: 'Middle school program prepares students for higher education with advanced concepts and specialized subjects.',
      features: [
        'Advanced core subjects',
        'Laboratory practices',
        'Project-based learning',
        'Sports activities'
      ],
      schedule: '8:00 AM - 3:30 PM',
      curriculum: [
        'Advanced Mathematics',
        'General Science',
        'English Literature',
        'Social Sciences',
        'Information Technology'
      ]
    },
    {
      level: 'Secondary Education',
      grades: 'Grades 9-10',
      description: 'Secondary education focuses on preparing students for board examinations while developing analytical and practical skills.',
      features: [
        'Board exam preparation',
        'Career counseling',
        'Practical sessions',
        'Specialized training'
      ],
      schedule: '8:00 AM - 4:00 PM',
      curriculum: [
        'Physics',
        'Chemistry',
        'Biology',
        'Computer Science',
        'Optional Subjects'
      ]
    },
    {
      level: 'Higher Secondary',
      grades: 'Grades 11-12',
      description: 'Higher secondary education offers specialized streams with focused preparation for university education.',
      features: [
        'Stream specialization',
        'University preparation',
        'Advanced laboratories',
        'Career guidance'
      ],
      schedule: '8:00 AM - 4:00 PM',
      curriculum: [
        'Science Stream',
        'Management Stream',
        'Humanities Stream',
        'Computer Science'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-[#263B80]">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/8423026/pexels-photo-8423026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Academic Programs" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Academic Programs</h1>
            <div className="w-24 h-1 bg-[#FFDD00] mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <a href="/" className="text-[#263B80] hover:text-[#E31B23] transition-colors">Home</a>
            <span className="mx-2">›</span>
            <span className="text-gray-600">Academics</span>
          </div>
        </div>
      </div>

      {/* Academic Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#263B80] mb-4">Our Academic Programs</h2>
            <div className="w-24 h-1 bg-[#E31B23] mx-auto mb-4"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              We offer comprehensive education from early childhood to higher secondary level, 
              focusing on academic excellence and holistic development.
            </p>
          </div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#FFDD00] p-2 rounded-full mr-3">
                        <BookOpen className="h-6 w-6 text-[#263B80]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#263B80]">{program.level}</h3>
                        <p className="text-[#E31B23] font-medium">{program.grades}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#263B80] mb-2 flex items-center">
                          <Star className="h-4 w-4 mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {program.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-600 flex items-center">
                              <span className="w-2 h-2 bg-[#E31B23] rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#263B80] mb-2 flex items-center">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Core Curriculum
                        </h4>
                        <ul className="space-y-2">
                          {program.curriculum.map((subject, idx) => (
                            <li key={idx} className="text-gray-600 flex items-center">
                              <span className="w-2 h-2 bg-[#E31B23] rounded-full mr-2"></span>
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-8">
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#263B80] mb-4 flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Class Schedule
                      </h4>
                      <p className="text-gray-600">{program.schedule}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#263B80] mb-4 flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Class Size
                      </h4>
                      <p className="text-gray-600">Maximum 30 students per class</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#263B80] mb-4 flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Academic Calendar
                      </h4>
                      <ul className="space-y-2">
                        <li className="text-gray-600">Term 1: April - July</li>
                        <li className="text-gray-600">Term 2: July - December</li>
                        <li className="text-gray-600">Term 3: January - March</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#263B80] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Academic Community?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Take the first step towards quality education. Apply now for admission or contact us to learn more about our programs.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="/admissions/apply" 
                className="bg-[#E31B23] hover:bg-[#FFDD00] hover:text-[#263B80] text-white px-8 py-3 rounded-md transition-colors duration-300"
              >
                Apply Now
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white hover:bg-white hover:text-[#263B80] text-white px-8 py-3 rounded-md transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;