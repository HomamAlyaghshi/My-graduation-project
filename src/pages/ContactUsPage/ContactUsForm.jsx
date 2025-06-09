import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';

const ContactUsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    if (!name || !email || !message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000); // Clear error after 3 seconds
      return;
    }

    // Basic email format validation (more robust can be added with regex)
    if (!email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    try {
      // Simulate API call for sending message
      // In a real application, you would replace this with a fetch or axios call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, message }),
      // });
      // const data = await response.json();
      // if (response.ok && data.success) {
      //   setStatus('success');
      //   // Optionally clear form fields on success
      //   setName('');
      //   setEmail('');
      //   setMessage('');
      //   // Optional: Redirect or show a modal
      // } else {
      //   setStatus('error');
      // }

      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

      // Assume success for now
      setStatus('success');
      setName(''); // Clear form fields
      setEmail('');
      setMessage('');
      console.log('Message sent:', { name, email, message });

      // Optional: Redirect after a successful message
      // setTimeout(() => navigate('/thank-you'), 2000);

    } catch (err) {
      console.error('Failed to send message:', err);
      setStatus('error');
    }
  };

  return (
    <section data-aos='fade-right' className="py-12 md:py-20 flex items-center w-full justify-center px-4 sm:px-6 lg:px-8">
      {/* The main container for the content, but we'll apply max-width directly to the form's div for better control */}
      <div className="w-full flex flex-col items-center justify-center gap-8"> {/* Removed max-w-6xl from here */}
        {/* Contact Form Section - Directly apply max-width and w-full */}
        <div className="w-full max-w-lg bg-spaceMid bg-opacity-80 rounded-xl shadow-2xl shadow-neon/40 p-8 py-12 border border-neon/30"> {/* Added max-w-lg here */}
          <h2 className="text-3xl font-bold font-Orbitron text-lightText mb-6 text-center">
            Contact Us
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Status Messages */}
            {status === 'success' && (
              <p className="bg-green-700 bg-opacity-30 text-green-300 p-3 rounded-md text-center border border-green-500">
                Message sent successfully! We'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="bg-red-700 bg-opacity-30 text-red-300 p-3 rounded-md text-center border border-red-500">
                Failed to send message. Please try again.
              </p>
            )}

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-lightText mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-4 py-2 bg-spaceDark bg-opacity-70 text-lightText border border-spaceMid rounded-md focus:outline-none focus:ring-2 focus:ring-neon focus:border-neon transition-all duration-300 placeholder-subText"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-lightText mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 bg-spaceDark bg-opacity-70 text-lightText border border-spaceMid rounded-md focus:outline-none focus:ring-2 focus:ring-neon focus:border-neon transition-all duration-300 placeholder-subText"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-lightText mb-1">
                Your Message
              </label>
              <textarea
                rows="4"
                id="message"
                placeholder="Type your message here..."
                className="w-full px-4 py-2 bg-spaceDark bg-opacity-70 text-lightText border border-spaceMid rounded-md focus:outline-none focus:ring-2 focus:ring-neon focus:border-neon transition-all duration-300 placeholder-subText resize-y"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-neon text-spaceDark py-3 px-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2
                         hover:bg-opacity-80 hover:scale-[0.98] duration-300 transition-all
                         focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-spaceDark
                         shadow-lg hover:shadow-neon/60"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;