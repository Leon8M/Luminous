import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-center bg-cover"
      style={{
        backgroundImage: "url('/4657.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
      <div className="container relative z-10 flex flex-col items-start justify-center h-full px-4 mx-auto">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          Reliable Solar Solutions for Remote Adventures
        </h1>
        <p className="mb-8 text-lg text-white md:text-xl">
          Power your journey with our high-quality solar rentals, designed for individuals and businesses in remote locations.
        </p>
        <a
          href="#about"
          className="bg-[#FFC107] hover:bg-[#FFB300] text-white font-semibold py-3 px-6 rounded-md transition-colors"
        >
          Explore Rentals
        </a>
      </div>
    </section>
  );
};

export default Hero;
