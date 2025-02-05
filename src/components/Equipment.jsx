import React from 'react';

const Equipment = () => {
  const equipmentList = [
    { name: 'Solar Panels', description: 'High-efficiency solar panels for various energy needs.', image: '/1.jpg' },
    { name: 'Battery Storage Units', description: 'Reliable battery solutions for off-grid energy storage.', image: '/1.jpg' },
    { name: 'Inverters', description: 'Efficient inverters for converting solar energy.', image: '/1.jpg' },
    { name: 'Portable Generators', description: 'Backup power solutions for remote locations.', image: '/1.jpg' },
    { name: 'Lighting Kits', description: 'Complete solar lighting kits for various applications.', image: '/1.jpg' },
  ];

  return (
    <section id="equipment" className="px-6 py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-10">Our Equipment</h2>
        <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-300">
          Explore our **premium solar equipment**, designed to provide reliable and sustainable energy solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentList.map((item, index) => (
            <div 
              key={index} 
              className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center text-center transition transform hover:scale-105"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-28 h-28 mb-4 rounded-full object-cover shadow-lg border-4 border-yellow-400"
              />
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{item.name}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
