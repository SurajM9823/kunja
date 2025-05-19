import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');

  const news = [
    {
      id: 1,
      title: 'Annual Sports Meet 2023 Concludes with Grand Success',
      date: 'June 15, 2023',
      image: 'https://images.pexels.com/photos/8363755/pexels-photo-8363755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      excerpt: 'The annual sports meet concluded with students showcasing their athletic talents across various sports disciplines.',
      link: '/news/annual-sports-meet-2023'
    },
    {
      id: 2,
      title: 'Our Students Excel in Regional Science Olympiad',
      date: 'May 28, 2023',
      image: 'https://images.pexels.com/photos/8363700/pexels-photo-8363700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      excerpt: 'Five students from our school secured top positions in the Regional Science Olympiad held last week.',
      link: '/news/science-olympiad-winners'
    },
    {
      id: 3,
      title: 'New Science Laboratory Inaugurated',
      date: 'April 10, 2023',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      excerpt: 'State-of-the-art science laboratory with modern equipment was inaugurated to enhance practical learning.',
      link: '/news/new-science-laboratory'
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
      excerpt: 'Quarterly meeting to discuss student progress and address parent concerns.',
      link: '/events/parents-teachers-meeting'
    },
    {
      id: 2,
      title: 'Annual Cultural Program',
      date: 'September 5, 2023',
      time: '4:00 PM - 8:00 PM',
      location: 'School Ground',
      image: 'https://images.pexels.com/photos/8471800/pexels-photo-8471800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      excerpt: 'Showcasing the talents of our students through dance, music, drama, and other cultural performances.',
      link: '/events/annual-cultural-program'
    },
    {
      id: 3,
      title: 'Science Exhibition',
      date: 'October 12, 2023',
      time: '11:00 AM - 3:00 PM',
      location: 'School Hall',
      image: 'https://images.pexels.com/photos/8364736/pexels-photo-8364736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      excerpt: 'Students will display their innovative science projects and models.',
      link: '/events/science-exhibition'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#263B80] mb-4">News & Upcoming Events</h2>
          <div className="w-24 h-1 bg-[#E31B23] mx-auto mb-4"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Stay updated with the latest happenings and upcoming events at Shanti Nikunja English Boarding School.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-3 text-lg font-medium rounded-l-md ${
                activeTab === 'news'
                  ? 'bg-[#263B80] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-3 text-lg font-medium rounded-r-md ${
                activeTab === 'events'
                  ? 'bg-[#263B80] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Upcoming Events
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'news'
            ? news.map((item) => (
                <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Calendar size={16} className="mr-1" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#263B80] mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <Link 
                      to={item.link}
                      className="inline-flex items-center text-[#E31B23] hover:text-[#263B80] font-semibold transition-colors"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))
            : events.map((item) => (
                <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-1">
                      <Calendar size={16} className="mr-1" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Clock size={16} className="mr-1" />
                      <span>{item.time}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#263B80] mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-1">{item.excerpt}</p>
                    <p className="text-gray-600 font-medium mb-4">Location: {item.location}</p>
                    <Link 
                      to={item.link}
                      className="inline-flex items-center text-[#E31B23] hover:text-[#263B80] font-semibold transition-colors"
                    >
                      Event Details
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to={activeTab === 'news' ? '/news' : '/events'}
            className="inline-block bg-[#263B80] hover:bg-[#E31B23] text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
          >
            View All {activeTab === 'news' ? 'News' : 'Events'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;