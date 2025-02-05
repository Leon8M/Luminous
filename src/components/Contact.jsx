import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="px-6 py-20 bg-[#f4f4f4]">
      <div className="container max-w-screen-md mx-auto">
        <h2 className="text-4xl font-bold text-[#1D3557] text-center mb-10">Get in Touch</h2>
        <p className="text-center text-lg text-gray-600 mb-8">Request a quote or ask us to call you back.</p>
        <form onSubmit={handleSubmit} className="p-8 bg-white rounded-xl shadow-xl">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F67E17] focus:border-[#F67E17] outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F67E17] focus:border-[#F67E17] outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F67E17] focus:border-[#F67E17] outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F67E17] focus:border-[#F67E17] outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#F67E17] hover:bg-[#FF9933] text-white font-semibold py-3 rounded-lg transition-all shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
