import React from 'react';

const ContactUsForm = () => {
  return (
    <section className="min-h-screen  flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        
    {/* Images Section */}
<div className="relative w-full md:w-1/2 flex justify-center items-center">
  <div className="relative w-[400px] h-[400px]">
    {/* الكوكب الكبير */}
    <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl" />

    {/* الكوكب الصغير يدور */}
    <div className="orbit w-full h-full absolute animate-spin-slow">
      <div className="w-16 h-16 bg-yellow-300 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 shadow-md" />
    </div>
  </div>
</div>


        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 bg-gray-200 rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
          className="w-full bg-neon py-2 px-4 rounded-2xl hover:text-star hover:scale-95 duration-500 delay-100 hover:shadow hover:shadow-black  transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
