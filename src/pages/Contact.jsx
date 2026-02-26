import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-[80vh] px-6 py-16 md:px-16 lg:px-24 flex items-center"
        style={{ backgroundColor: '#CC785C' }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            {/* Left - LET'S TALK */}
            <div className="lg:w-1/2">
              <h2
                className="text-7xl md:text-8xl lg:text-9xl font-light tracking-wide"
                style={{ color: 'rgba(255, 255, 255, 0.3)' }}
              >
                LET'S
              </h2>
              <h2
                className="text-7xl md:text-8xl lg:text-9xl font-light tracking-wide -mt-4"
                style={{ color: 'rgba(255, 255, 255, 0.3)' }}
              >
                TALK
              </h2>
            </div>

            {/* Right - Form */}
            <div className="lg:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-sm mb-2">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-4 rounded-lg bg-transparent border-2 text-white placeholder-white/50 focus:outline-none focus:border-white/80 transition-colors"
                    style={{ borderColor: '#BCB88A' }}
                  />
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-4 rounded-lg bg-transparent border-2 text-white placeholder-white/50 focus:outline-none focus:border-white/80 transition-colors"
                    style={{ borderColor: '#BCB88A' }}
                  />
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">Message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows={4}
                    className="w-full px-4 py-4 rounded-lg bg-transparent border-2 text-white placeholder-white/50 focus:outline-none focus:border-white/80 transition-colors resize-none"
                    style={{ borderColor: '#BCB88A' }}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#BCB88A', color: '#1a1a2e' }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="pt-16 pb-28 px-6 md:px-16 lg:px-24" style={{ backgroundColor: '#F3EDE5' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Janardhana Reddy M S
          </h3>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-32 md:w-48 h-px bg-gray-900"></div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-gray-900 rotate-45"></div>
              <div className="w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
            <div className="w-32 md:w-48 h-px bg-gray-900"></div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6">
            {[
              { id: 'instagram', href: 'https://www.instagram.com/john.reddy.ms/', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
              { id: 'twitter', href: 'https://x.com/janardhannnnnn', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> },
              { id: 'github', href: 'https://github.com/JANARDHANAREDDYMS', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> },
              { id: 'linkedin', href: 'https://www.linkedin.com/in/janardhan-reddy-ms/', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
              { id: 'email', href: 'mailto:janardhanareddyms@gmail.com', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
            ].map((social) => (
              <a
                key={social.id}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
