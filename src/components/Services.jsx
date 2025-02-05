import React from 'react';
import { FaSolarPanel, FaTools, FaLightbulb, FaBolt } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="px-6 py-16 bg-gradient-to-b from-yellow-400 to-yellow-300 text-gray-900">
      <div className="container max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10">Our Services</h2>
        <p className="text-lg max-w-2xl mx-auto mb-12">
          Empowering your journey with **sustainable and reliable solar solutions** tailored to your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center transition transform hover:scale-105">
            <FaSolarPanel className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Solar Equipment Rental</h3>
            <p className="text-gray-700">Rent premium solar panels, batteries, and accessories for reliable energy anywhere.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center transition transform hover:scale-105">
            <FaLightbulb className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Custom Energy Solutions</h3>
            <p className="text-gray-700">Get tailored solar setups for remote sites, off-grid homes, and business needs.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center transition transform hover:scale-105">
            <FaTools className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Maintenance & Support</h3>
            <p className="text-gray-700">Ensure uninterrupted energy with our expert maintenance and 24/7 support.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center transition transform hover:scale-105 sm:col-span-2 lg:col-auto">
            <FaBolt className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Reliable & Affordable</h3>
            <p className="text-gray-700">Enjoy cost-effective solar rentals with flexible payment options.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
