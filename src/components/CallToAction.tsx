import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#263B80] to-[#1A2A60] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our School Community?</h2>
            <p className="text-lg opacity-90 mb-6">
              Admissions are open for the academic year 2023-24. Take the first step towards a bright future for your child.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/admissions/process"
                className="inline-flex items-center bg-[#E31B23] hover:bg-[#FFDD00] hover:text-[#263B80] text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
              >
                Admission Process
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/admissions/apply"
                className="inline-flex items-center bg-transparent hover:bg-white text-white hover:text-[#263B80] font-bold py-3 px-6 rounded-md border-2 border-white transition-colors duration-300"
              >
                Apply Online
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#263B80] mb-4">Contact Admissions Office</h3>
              <div className="text-gray-600">
                <p className="mb-2"><span className="font-semibold">Phone:</span> +977-9815766415</p>
                <p className="mb-2"><span className="font-semibold">Email:</span> jesusrpm09@gmail.com</p>
                <p className="mb-4"><span className="font-semibold">Office Hours:</span> Sun-Fri, 9:00 AM - 3:00 PM</p>
              </div>
              <Link 
                to="/contact"
                className="inline-block w-full text-center bg-[#FFDD00] hover:bg-[#263B80] text-[#263B80] hover:text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;