import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/8363775/pexels-photo-8363775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Students in classroom',
    category: 'Academic'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/8364722/pexels-photo-8364722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Students in science lab',
    category: 'Academic'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/8363707/pexels-photo-8363707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Sports day celebration',
    category: 'Sports'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/8363750/pexels-photo-8363750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Cultural program performance',
    category: 'Cultural'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/8363709/pexels-photo-8363709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'School annual function',
    category: 'Events'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Computer lab',
    category: 'Facilities'
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const getSelectedImage = () => {
    return galleryImages.find(img => img.id === selectedImage);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#263B80] mb-4">School Gallery</h2>
          <div className="w-24 h-1 bg-[#E31B23] mx-auto mb-4"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Take a visual journey through our school's activities, events, and facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer h-64"
              onClick={() => openLightbox(image.id)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <span className="bg-[#FFDD00] text-[#263B80] text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block">
                    {image.category}
                  </span>
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/gallery"
            className="inline-flex items-center bg-[#263B80] hover:bg-[#E31B23] text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
          >
            View Full Gallery
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-[#FFDD00] transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <div
              className="max-w-4xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={getSelectedImage()?.src} 
                alt={getSelectedImage()?.alt} 
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="text-white mt-4 text-center">
                <p className="font-medium">{getSelectedImage()?.alt}</p>
                <span className="bg-[#FFDD00] text-[#263B80] text-xs font-bold px-2 py-1 rounded-full mt-2 inline-block">
                  {getSelectedImage()?.category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;