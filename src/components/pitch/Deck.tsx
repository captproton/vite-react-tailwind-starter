import React, { useState } from 'react';

const Deck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Utah Business Directory Platform",
      subtitle: "Strategic Partnership Opportunity for TcBarter.com",
      content: (
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-blue-800 mb-4">Vision</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>Creating Utah's premier crypto-friendly business directory</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>Bridge the gap between local commerce and digital currency</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>Strategic integration with TcBarter.com</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>10,000+ daily active users by Q4 2025</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Market Opportunity",
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-4">The Landscape</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>280,000+ Utah businesses</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Growing crypto adoption</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>No existing integrated solution</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-4">Our Edge</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>First mover advantage</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Exclusive TcBarter.com partnership</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Built-in user base via UtahDNA.xyz</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "User Acquisition",
      content: (
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="text-center space-y-6">
            <div className="p-4 bg-blue-100 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800">10,000</h3>
              <p>Monthly Active Users</p>
            </div>
            <div className="text-4xl text-blue-500">↓</div>
            <div className="p-4 bg-blue-200 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800">15-20%</h3>
              <p>Conversion Rate</p>
            </div>
            <div className="text-4xl text-blue-500">↓</div>
            <div className="p-4 bg-blue-300 rounded-lg">
              <h3 className="text-xl font-bold text-white">1,500+</h3>
              <p className="text-white">Monthly TcBarter.com Transactions</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Budget Overview",
      content: (
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-bold text-blue-800 mb-6 text-xl">Investment Breakdown</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold text-blue-800 mb-2">Total Budget</h4>
              <p className="text-2xl font-bold text-blue-600">$50,000 - $75,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold text-blue-800 mb-2">Development</h4>
              <ul className="space-y-2">
                <li>Core Platform Development</li>
                <li>API Integrations</li>
                <li>Security Implementation</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Timeline",
      content: (
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mb-2">Feb</div>
              <p className="text-sm">Discovery</p>
            </div>
            <div className="flex-1 h-1 bg-blue-200 mx-2"></div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center mb-2">Mar</div>
              <p className="text-sm">Design</p>
            </div>
            <div className="flex-1 h-1 bg-blue-300 mx-2"></div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mb-2">May</div>
              <p className="text-sm">Launch</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold">Development Phase</h4>
              <p className="text-sm text-gray-600">Apr-May 2025</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold">Post-Launch</h4>
              <p className="text-sm text-gray-600">June-Sep 2025</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Next Steps",
      content: (
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-blue-800 mb-2">Immediate Actions</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Partnership Agreement</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Technical Planning</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Timeline Confirmation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold text-blue-800 mb-4">Contact Information</h4>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Ready to move forward?</p>
                <p className="text-sm text-gray-600">Contact us to schedule a detailed discussion.</p>
                <div className="mt-4 p-4 bg-blue-50 rounded">
                  <p className="font-semibold">Contact Details:</p>
                  <div className="space-y-1 mt-2">
                    <p className="text-sm text-gray-700">Name: Michael Tanner</p>
                    <p className="text-sm text-gray-700">Phone: (385) 451-7387</p>
                    <p className="text-sm text-gray-700">Email: mike@dicemediagroup.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-900 mb-2">{slides[currentSlide].title}</h1>
          {slides[currentSlide].subtitle && (
            <h2 className="text-xl text-blue-700">{slides[currentSlide].subtitle}</h2>
          )}
        </div>
        
        <div className="min-h-96 mb-8">
          {slides[currentSlide].content}
        </div>
        
        <div className="flex justify-between items-center">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="px-4 py-2 rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <div className="text-sm text-gray-600">
            Slide {currentSlide + 1} of {slides.length}
          </div>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="px-4 py-2 rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deck;
