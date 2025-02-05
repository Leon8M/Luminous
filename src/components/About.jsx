import React from 'react';
import { FaSolarPanel } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="px-6 py-16 bg-[#FFFBEB]">
      <div className="container max-w-screen-lg mx-auto text-center">
        {/* Icon and Heading */}
        <div className="flex flex-col items-center mb-8">
          <FaSolarPanel className="text-[#FFC107] text-5xl mb-3" />
          <h2 className="text-4xl font-bold text-[#1D3557]">About Us</h2>
          <p className="text-lg text-gray-700 italic">Reliable and Affordable Solar Solutions for Every Journey</p>
        </div>

        {/* Description */}
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-6">
            At <span className="font-semibold text-[#1D3557]">Luminous Solutions</span>, we provide high-quality solar rental solutions for individuals and businesses operating in remote locations. 
            Our mission is to deliver cost-effective, eco-friendly power solutions that ensure uninterrupted energy supply wherever you go.
          </p>
          <p className="mb-6">
            Whether you're embarking on an off-grid adventure or need a reliable power source for a remote work site, our solar equipment is designed to meet your energy needs efficiently. 
            With flexible rental plans, you get access to top-tier solar technology without the high upfront costs.
          </p>
          <p className="font-medium text-[#1D3557]">
            Explore our wide range of solar rental options and experience hassle-free, sustainable energy solutions tailored to your requirements. 
            At <span className="font-semibold text-[#1D3557]">Luminous Solutions</span>, we empower your journey with clean and dependable energy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
