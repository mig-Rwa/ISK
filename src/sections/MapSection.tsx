import React from 'react';

export default function MapSection() {
  return (
    <section className="py-20 bg-gray-50" id="location">
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-3">Visit Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find our opening hours and directions to campus below.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Hours card */}
        <div className="bg-white rounded-lg shadow-md p-10 text-center relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            </svg>
          </div>
          <h3 className="uppercase text-xs tracking-widest text-gray-500 mb-8 mt-6">Office Hours</h3>

          <div className="space-y-10">
            <div>
              <p className="text-gray-500 text-xs">Monday – Friday</p>
              <p className="text-2xl font-semibold text-blue-900">08:00 – 17:00</p>
            </div>
            <div className="h-px bg-gray-200 mx-auto w-24" />
            <div>
              <p className="text-gray-500 text-xs">Weekends & Holidays</p>
              <p className="text-2xl font-semibold text-blue-900">09:00 – 13:00</p>
            </div>
          </div>
        </div>

        {/* Map card */}
        <div className="bg-white rounded-lg shadow-md p-10 text-center relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v10" />
            </svg>
          </div>

          <h3 className="uppercase text-xs tracking-widest text-gray-500 mb-4 mt-6">Map & Directions</h3>
          <p className="mb-6 text-blue-900 font-medium">KG 517 St, Kigali, Rwanda</p>

          <div className="overflow-hidden rounded-md border">
            <iframe
              src="https://maps.google.com/maps?q=34C5%2BFV%20Kigali&z=17&output=embed"
              loading="lazy"
              allowFullScreen
              className="w-full h-64 border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
