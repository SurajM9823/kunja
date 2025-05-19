import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Welcome to Shanti Nikunja English Boarding School',
    subtitle: 'Providing quality education from nursery to class XII since 2053 BS',
    buttonText: 'Learn More',
    buttonLink: '/about/history',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/8471756/pexels-photo-8471756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Holistic Education Approach',
    subtitle: 'Nurturing young minds through academics, sports, arts, and cultural activities',
    buttonText: 'Explore Programs',
    buttonLink: '/academics',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/8617773/pexels-photo-8617773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Admissions Open for 2023-24',
    subtitle: 'Join our community of learners from nursery to class XII',
    buttonText: 'Apply Now',
    buttonLink: '/admissions/apply',
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 animate-fadeIn animation-delay-200">
                {slide.subtitle}
              </p>
              <Link
                to={slide.buttonLink}
                className="inline-block bg-[#E31B23] hover:bg-[#FFDD00] hover:text-[#263B80] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 animate-fadeIn animation-delay-400"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;