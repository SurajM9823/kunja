import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#263B80] mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-[#E31B23] mx-auto mb-4"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            We're here to answer any questions you have about our school. Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#263B80] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#FFDD00] p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#263B80]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#263B80] mb-1">Address</h4>
                    <p className="text-gray-600">Shanti Nikunja English Boarding School</p>
                    <p className="text-gray-600">Golbazaar-7, Siraha, Nepal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#FFDD00] p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#263B80]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#263B80] mb-1">Phone</h4>
                    <p className="text-gray-600">+977-9815766415</p>
                    <p className="text-gray-600">+977-9852830667</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#FFDD00] p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#263B80]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#263B80] mb-1">Email</h4>
                    <p className="text-gray-600">jesusrpm09@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#FFDD00] p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-[#263B80]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#263B80] mb-1">School Hours</h4>
                    <p className="text-gray-600">Sunday to Friday: 8:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#263B80] mb-6">Send us a Message</h3>
              
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#263B80]"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#263B80]"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#263B80]"
                    placeholder="Message Subject"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#263B80]"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-[#E31B23] hover:bg-[#263B80] text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14303.299139308929!2d86.17499075!3d26.4828095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec4fa4baa13a3d%3A0x32d58fe93d6b81c3!2sGolbazar%2C%20Nepal!5e0!3m2!1sen!2sin!4v1654567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;