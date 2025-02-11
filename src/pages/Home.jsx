import React from 'react';
import Navigation from '../components/Navigation';
import TechStack from '../components/TechStack';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import MusicToggle from '../components/MusicToggle';

function Home() {
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    
    if (!validateEmail(email)) {
      console.log('Invalid email format');
      return;
    }
    
    // Get form data
    const formData = {
      name: e.target.name.value,
      email: email,
      subject: e.target.subject.value,
      message: e.target.message.value
    };

    // Log to console
    console.log('Form Submission:', formData);

    // Clear form after submission
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-6">
      <Navigation />

      {/* Hero Section */}
      <section id="about" className="max-w-3xl mx-auto pt-32 mb-20">
        <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
          <h1 className="text-4xl font-bold mb-2 font-instrument">Abhimat Dangi</h1>
          <p className="text-gray-400 mb-4">📍 Kathmandu, Nepal</p>
          <p className="text-gray-300">
            I'm a Full-Stack Web Developer and Video Editor. I have been editing videos for more than 2 years and recently started web development. I create professional websites and engaging video content.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a 
              href="https://www.linkedin.com/in/abhimatdangi/" 
              className="hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/abhimatdangi" 
              className="hover:text-blue-500 transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/prodbyabhimat/" 
              className="hover:text-blue-500 transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Rest of your sections */}
      <section id="tech" className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-8 font-instrument">What I work with</h2>
        <TechStack />
      </section>

      <section id="experience" className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-8 font-instrument">Experience</h2>
        <Experience />
      </section>

      <section id="projects" className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-8 font-instrument">Projects</h2>
        <Projects />
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-8 font-instrument">Get in Touch</h2>
        
        <div className="bg-[#111111] p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-[#0A0A0A] rounded-lg px-4 py-2 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-[#0A0A0A] rounded-lg px-4 py-2 text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-[#0A0A0A] rounded-lg px-4 py-2 text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full bg-[#0A0A0A] rounded-lg px-4 py-2 text-white resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <MusicToggle />
    </div>
  );
}

export default Home; 