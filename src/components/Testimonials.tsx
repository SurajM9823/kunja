import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Parent of Class 10 Student',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'Shanti Nikunja has provided an excellent educational foundation for my child. The teachers are dedicated and the overall environment is conducive to learning. I\'ve seen remarkable growth in my child\'s academic and personal development.'
  },
  {
    id: 2,
    name: 'Sunita Thapa',
    role: 'Former Student (Batch of 2018)',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'My years at Shanti Nikunja were transformative. The school not only prepared me academically but also instilled values that continue to guide me. The supportive teachers and diverse extracurricular activities helped me discover my potential.'
  },
  {
    id: 3,
    name: 'Deepak Adhikari',
    role: 'Local Community Member',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'Shanti Nikunja has been a cornerstone of our community for decades. The school consistently produces well-rounded individuals who contribute positively to society. Their commitment to quality education and values is truly commendable.'
  },
  {
    id: 4,
    name: 'Priya Rai',
    role: 'Parent of Primary School Students',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'As a parent with two children in Shanti Nikunja, I appreciate the individual attention each child receives. The school creates a nurturing environment where children can explore their interests while maintaining academic excellence.'
  }
];

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#263B80] mb-4">What People Say About Us</h2>
          <div className="w-24 h-1 bg-[#E31B23] mx-auto mb-4"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Hear from our community about their experiences with Shanti Nikunja English Boarding School.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-32 h-32 rounded-full object-cover border-4 border-[#FFDD00]"
                        />
                        <div className="absolute -bottom-3 -right-3 bg-white p-1 rounded-full shadow">
                          <div className="bg-[#FFDD00] p-1 rounded-full">
                            <Star className="h-5 w-5 text-[#263B80] fill-[#263B80]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                      <div className="text-[#E31B23] text-6xl font-serif leading-none mb-4">"</div>
                      <p className="text-gray-600 italic mb-4">
                        {testimonial.quote}
                      </p>
                      <div>
                        <h4 className="font-bold text-[#263B80]">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white hover:bg-[#FFDD00] text-[#263B80] p-3 rounded-full shadow-md transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white hover:bg-[#FFDD00] text-[#263B80] p-3 rounded-full shadow-md transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-[#E31B23]' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;