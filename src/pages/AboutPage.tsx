import React from 'react';
import { BookOpen, Award, Users, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-[#263B80]">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/8418227/pexels-photo-8418227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="School Building" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About Our School</h1>
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
            <span className="text-gray-600">About Us</span>
          </div>
        </div>
      </div>

      {/* School History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#263B80] mb-4">Our History</h2>
              <div className="w-16 h-1 bg-[#E31B23] mb-6"></div>
              <p className="text-gray-600 mb-4">
                Shanti Nikunja English Boarding School was established in 2053 BS (1996 AD) with a vision to provide quality education to the children of Golbazaar and surrounding areas. Started with just a handful of students and a few dedicated teachers, the school has now grown into one of the leading educational institutions in the region.
              </p>
              <p className="text-gray-600 mb-4">
                Over the past 25+ years, the school has expanded its infrastructure, enhanced its academic programs, and introduced modern teaching methodologies to keep pace with the evolving educational landscape.
              </p>
              <p className="text-gray-600">
                Throughout its journey, Shanti Nikunja has remained committed to its founding principles of academic excellence, character building, and holistic development of students.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="School History" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#FFDD00] p-4 rounded-lg text-[#263B80] font-bold">
                Est. 2053 BS (1996 AD)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#263B80] mb-4">Our Mission & Vision</h2>
            <div className="w-24 h-1 bg-[#E31B23] mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#263B80]">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#F0F4FF] rounded-full">
                  <BookOpen className="h-8 w-8 text-[#263B80]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#263B80] text-center mb-4">Our Mission</h3>
              <p className="text-gray-600 text-center">
                To provide quality education that nurtures intellectual, physical, and emotional growth, enabling students to become responsible citizens and lifelong learners who can contribute positively to society.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#E31B23]">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#FFF4F5] rounded-full">
                  <Star className="h-8 w-8 text-[#E31B23]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#263B80] text-center mb-4">Our Vision</h3>
              <p className="text-gray-600 text-center">
                To be a center of academic excellence that empowers students with knowledge, skills, and values, preparing them to meet the challenges of a rapidly changing world while preserving their cultural heritage.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#FFDD00]">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#FFFBEB] rounded-full">
                  <Award className="h-8 w-8 text-[#FFDD00]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#263B80] text-center mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mr-2"></span>
                  <span>Excellence in education</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mr-2"></span>
                  <span>Integrity and ethics</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mr-2"></span>
                  <span>Respect for diversity</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mr-2"></span>
                  <span>Innovation and creativity</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mr-2"></span>
                  <span>Social responsibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-1">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/5212665/pexels-photo-5212665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="School Principal" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#263B80] text-white p-4 text-center">
                  <h4 className="font-bold">Mr. Rajendra Kumar</h4>
                  <p className="text-sm">Principal</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#263B80] mb-4">Message from the Principal</h2>
              <div className="w-16 h-1 bg-[#E31B23] mb-6"></div>
              <p className="text-gray-600 mb-4 italic">
                "Dear Parents and Students,
              </p>
              <p className="text-gray-600 mb-4">
                Welcome to Shanti Nikunja English Boarding School! As we navigate through the ever-evolving landscape of education, our commitment remains steadfast in providing a learning environment that nurtures academic excellence, personal growth, and character development.
              </p>
              <p className="text-gray-600 mb-4">
                At Shanti Nikunja, we believe that education goes beyond textbooks and classrooms. It's about instilling values, fostering creativity, and preparing students to face the challenges of tomorrow with confidence and resilience.
              </p>
              <p className="text-gray-600 mb-4">
                Our dedicated faculty, comprehensive curriculum, and state-of-the-art facilities are designed to provide a holistic educational experience that caters to the diverse needs and aspirations of our students.
              </p>
              <p className="text-gray-600 italic">
                I invite you to join our school community and be a part of this enriching educational journey."
              </p>
              <div className="mt-4">
                <p className="font-bold text-[#263B80]">Mr. Rajendra Kumar</p>
                <p className="text-gray-600">Principal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Management */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#263B80] mb-4">School Management</h2>
            <div className="w-24 h-1 bg-[#E31B23] mx-auto mb-4"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our school is managed by a dedicated team of experienced professionals committed to maintaining high standards of education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Chairman */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="School Chairman" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#263B80] mb-1">Mr. Sunil Patel</h3>
              <p className="text-[#E31B23] font-medium mb-3">Chairman</p>
              <p className="text-gray-600 text-sm">
                Leading the school management committee since 2010, bringing valuable insights from his extensive experience in education.
              </p>
            </div>

            {/* Vice-Chairman */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="School Vice-Chairman" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#263B80] mb-1">Mrs. Anita Singh</h3>
              <p className="text-[#E31B23] font-medium mb-3">Vice-Chairman</p>
              <p className="text-gray-600 text-sm">
                A dedicated educationist with a passion for promoting quality education and holistic development.
              </p>
            </div>

            {/* Secretary */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="School Secretary" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#263B80] mb-1">Mr. Ravi Sharma</h3>
              <p className="text-[#E31B23] font-medium mb-3">Secretary</p>
              <p className="text-gray-600 text-sm">
                Oversees the administrative functions of the school with efficiency and dedication to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#263B80] mb-4">Our Achievements</h2>
            <div className="w-24 h-1 bg-[#E31B23] mx-auto mb-4"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Over the years, our school has achieved numerous milestones and accolades in various fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#E31B23]">
              <h3 className="text-xl font-bold text-[#263B80] mb-4">Academic Excellence</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">Consistently achieved 100% pass results in SEE (Secondary Education Examination) for the past 5 years.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">Over 80% of our students secure distinction in board examinations.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">Our students have been district toppers in SEE examinations for 3 consecutive years.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">Multiple students selected for prestigious national scholarships.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FFDD00]">
              <h3 className="text-xl font-bold text-[#263B80] mb-4">Co-Curricular Activities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">Champions in District Level Science Exhibition 2022.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">Winners of Regional Sports Tournament in Football and Basketball.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">First prize in National Level Art Competition 2021.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">Recognition for cultural performances at various district and national level events.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#263B80]">
              <h3 className="text-xl font-bold text-[#263B80] mb-4">Infrastructure Development</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">Expansion of school building with modern classrooms in 2018.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">Establishment of state-of-the-art science laboratories in 2020.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">Development of sports facilities including basketball court and indoor games hall.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">Modernization of library with digital resources and reading spaces.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#50C878]">
              <h3 className="text-xl font-bold text-[#263B80] mb-4">Community Engagement</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">Recognized for community service initiatives during COVID-19 pandemic.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">Annual scholarships for underprivileged students from the community.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">Regular health camps and awareness programs for local residents.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#E31B23] rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-600">Environmental conservation initiatives including tree plantation drives.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;