import React from 'react';
import { CheckCircle, Calendar, FileText, Download, Clock, CreditCard } from 'lucide-react';

const AdmissionsPage: React.FC = () => {
  const admissionSteps = [
    {
      title: 'Submit Application',
      description: 'Complete the online application form with all required information and documents.',
      icon: <FileText className="h-6 w-6" />,
      timeline: '1-2 days'
    },
    {
      title: 'Document Verification',
      description: 'School administration verifies submitted documents and academic records.',
      icon: <CheckCircle className="h-6 w-6" />,
      timeline: '2-3 days'
    },
    {
      title: 'Entrance Test',
      description: 'Students take an entrance test to assess their academic level.',
      icon: <Calendar className="h-6 w-6" />,
      timeline: '1 day'
    },
    {
      title: 'Interview',
      description: 'Personal interview with student and parents.',
      icon: <Clock className="h-6 w-6" />,
      timeline: '1 day'
    },
    {
      title: 'Fee Payment',
      description: 'Upon selection, complete the admission by paying the required fees.',
      icon: <CreditCard className="h-6 w-6" />,
      timeline: '1-2 days'
    }
  ];

  const requiredDocuments = [
    'Completed application form',
    'Birth certificate',
    'Previous school transfer certificate',
    'Last two years\' academic records',
    'Passport size photographs',
    'Parent/Guardian ID proof',
    'Residence proof',
    'Medical fitness certificate'
  ];

  const feeStructure = [
    {
      grade: 'Nursery - KG',
      admission: 25000,
      monthly: 3000,
      annual: 15000
    },
    {
      grade: 'Grades 1-5',
      admission: 30000,
      monthly: 3500,
      annual: 18000
    },
    {
      grade: 'Grades 6-8',
      admission: 35000,
      monthly: 4000,
      annual: 20000
    },
    {
      grade: 'Grades 9-10',
      admission: 40000,
      monthly: 4500,
      annual: 22000
    },
    {
      grade: 'Grades 11-12',
      admission: 45000,
      monthly: 5000,
      annual: 25000
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-[#263B80]">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/8617541/pexels-photo-8617541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Admissions" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Admissions</h1>
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
            <span className="text-gray-600">Admissions</span>
          </div>
        </div>
      </div>

      {/* Admission Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#263B80] mb-4">Admission Process</h2>
            <div className="w-24 h-1 bg-[#E31B23] mx-auto mb-4"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our admission process is designed to be straightforward and transparent. 
              Follow these steps to enroll your child in our school.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {admissionSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#263B80]">
                <div className="flex items-center mb-4">
                  <div className="bg-[#FFDD00] p-2 rounded-full mr-3">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#263B80]">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Timeline: {step.timeline}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="/admissions/apply" 
              className="inline-block bg-[#E31B23] hover:bg-[#263B80] text-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#263B80] mb-4">Required Documents</h2>
            <div className="w-24 h-1 bg-[#E31B23] mx-auto mb-4"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Please ensure you have all the required documents ready before starting the admission process.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <ul className="space-y-4">
              {requiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#E31B23] mr-3 mt-0.5" />
                  <span className="text-gray-600">{doc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-center">
              <a 
                href="/documents/checklist.pdf" 
                className="inline-flex items-center text-[#263B80] hover:text-[#E31B23] font-semibold"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Document Checklist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#263B80] mb-4">Fee Structure</h2>
            <div className="w-24 h-1 bg-[#E31B23] mx-auto mb-4"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our fee structure is designed to be transparent and competitive while ensuring quality education.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-[#263B80] text-white">
                    <th className="px-6 py-4 text-left">Grade Level</th>
                    <th className="px-6 py-4 text-right">Admission Fee</th>
                    <th className="px-6 py-4 text-right">Monthly Fee</th>
                    <th className="px-6 py-4 text-right">Annual Charges</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium">{fee.grade}</td>
                      <td className="px-6 py-4 text-right">NPR {fee.admission.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right">NPR {fee.monthly.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right">NPR {fee.annual.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-sm text-gray-600">
              <p className="mb-2">* Admission fee is one-time payment</p>
              <p className="mb-2">* Monthly fee includes tuition and basic facilities</p>
              <p>* Annual charges cover examination fees, library, laboratory, and other facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#263B80] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Our admission team is here to help you with any questions you may have about the admission process.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="tel:+977-9815766415" 
                className="bg-[#E31B23] hover:bg-[#FFDD00] hover:text-[#263B80] text-white px-8 py-3 rounded-md transition-colors duration-300"
              >
                Call Us
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

export default AdmissionsPage;