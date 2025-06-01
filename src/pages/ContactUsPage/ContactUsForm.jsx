
const ContactUsForm = () => {
  return (
    <section data-aos='fade-right' className=" md:py-20  flex items-center justify-center px-4 ">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 ">
        {/* Contact Form Section */}
        <div className="w-full  bg-gray-200 rounded-xl shadow-xl p-8 py-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Contact Us
          </h2>
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
