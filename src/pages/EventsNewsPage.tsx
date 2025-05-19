import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Search } from 'lucide-react';

const EventsNewsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');
  const [searchTerm, setSearchTerm] = useState('');

  const news = [
    {
      id: 1,
      title: 'Annual Sports Meet 2023 Concludes with Grand Success',
      date: 'June 15, 2023',
      image: 'https://images.pexels.com/photos/8363755/pexels-photo-8363755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Sports',
      content: 'The annual sports meet concluded with students showcasing their athletic talents across various sports disciplines. The event featured track and field events, team sports, and individual competitions.',
      author: 'Sports Department'
    },
    {
      id: 2,
      title: 'Our Students Excel in Regional Science Olympiad',
      date: 'May 28, 2023',
      image: 'https://images.pexels.com/photos/8363700/pexels-photo-8363700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Academics',
      content: 'Five students from our school secured top positions in the Regional Science Olympiad. The competition saw participation from over 50 schools across the region.',
      author: 'Science Department'
    },
    {
      id: 3,
      title: 'New Science Laboratory Inaugurated',
      date: 'April 10, 2023',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Infrastructure',
      content: 'State-of-the-art science laboratory with modern equipment was inaugurated to enhance practical learning experience for students.',
      author: 'Admin Department'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Parents-Teachers Meeting',
      date: 'August 15, 2023',
      time: '10:00 AM - 2:00 PM',
      location: 'School Auditorium',
      image: 'https://images.pexels.com/photos/8363045/pexels-photo-8363045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Academic',
      description: 'Quarterly meeting to discuss student progress and address parent concerns.',
      registration: true
    },
    {
      id: 2,
      title: 'Annual Cultural Program',
      date: 'September 5, 2023',
      time: '4:00 PM - 8:00 PM',
      location: 'School Ground',
      image: 'https://images.pexels.com/photos/8471800/pexels-photo-8471800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Cultural',
      description: 'Showcasing the talents of our students through dance, music, drama, and other cultural performances.',
      registration: true
    },
    {
      id: 3,
      title: 'Science Exhibition',
      date: 'October 12, 2023',
      time: '11:00 AM - 3:00 PM',
      location: 'School Hall',
      image: 'https://images.pexels.com/photos/8364736/pexels-photo-8364736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Academic',
      description: 'Students will display their innovative science projects and models.',
      registration: false
    }
  ];

  const filteredContent = activeTab === 'news' 
    ? news.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : events.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-[#263B80]">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/8471800/pexels-photo-8471800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Events and News" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Events & News</h1>
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
            <span className="text-gray-600">Events & News</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setActiveTab('news')}
                  className={`px-6 py-2 rounded-md ${
                    activeTab === 'news'
                      ? 'bg-[#263B80] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Latest News
                </button>
                <button
                  onClick={() => setActiveTab('events')}
                  className={`px-6 py-2 rounded-md ${
                    activeTab === 'events'
                      ? 'bg-[#263B80] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Upcoming Events
                </button>
              </div>
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md pl-10"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      item.category === 'Academic' ? 'bg-blue-100 text-blue-800' :
                      item.category === 'Cultural' ? 'bg-purple-100 text-purple-800' :
                      item.category === 'Sports' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#263B80] mb-2">{item.title}</h3>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar size={16} className="mr-1" />
                    <span>{item.date}</span>
                  </div>

                  {'time' in item && (
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Clock size={16} className="mr-1" />
                      <span>{item.time}</span>
                    </div>
                  )}

                  {'location' in item && (
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <MapPin size={16} className="mr-1" />
                      <span>{item.location}</span>
                    </div>
                  )}

                  <p className="text-gray-600 mb-4">
                    {'content' in item ? item.content : item.description}
                  </p>

                  {'author' in item && (
                    <p className="text-sm text-gray-500 mb-4">By {item.author}</p>
                  )}

                  {'registration' in item && item.registration && (
                    <button className="w-full bg-[#E31B23] hover:bg-[#263B80] text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 mb-4">
                      Register Now
                    </button>
                  )}

                  <a 
                    href={`/${activeTab}/${item.id}`}
                    className="inline-flex items-center text-[#263B80] hover:text-[#E31B23] font-semibold transition-colors"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsNewsPage;