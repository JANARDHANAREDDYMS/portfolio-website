import { useState, useEffect } from 'react';

function Hero() {
  const [showAvatar, setShowAvatar] = useState(true);
  const [navAtBottom, setNavAtBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleImage = () => {
    setShowAvatar(!showAvatar);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.1;
      setNavAtBottom(window.scrollY > scrollThreshold);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="px-4 py-8 md:px-16 md:py-12 lg:px-24 lg:min-h-screen lg:flex lg:items-center relative overflow-x-hidden" style={{ backgroundColor: '#F3EDE5' }}>
      {/* Nav - Always at bottom on mobile, moves to bottom on scroll for desktop */}
      <nav
        className={`fixed z-50 transition-all duration-500 ease-in-out ${
          isMobile || navAtBottom
            ? 'bottom-3 left-1/2 -translate-x-1/2 top-auto right-auto'
            : 'top-[50px] right-10 md:right-24 lg:right-36'
        }`}
      >
        <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/30 backdrop-blur-lg border border-white/20 shadow-xl">
          {[
            { id: 'home', href: '#home', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> },
            { id: 'experience', href: '#experience', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> },
            { id: 'projects', href: '#projects', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> },
            { id: 'skills', href: '#skills', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg> },
            { id: 'contact', href: '#contact', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> },
          ].map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="p-2.5 rounded-full transition-all duration-200 text-gray-600 hover:bg-black hover:text-[#F3EDE5] hover:scale-105"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto w-full">
        {/* Mobile: First screen with name, title, and picture */}
        <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center lg:hidden">
          {/* Name */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              JANARDHANA  REDDY
            </h1>
            <p className="text-lg text-gray-600">Graduate Student (CS), New York University</p>
          </div>

          {/* Profile Image - Mobile */}
          <div className="flex justify-center">
              <div className="relative">
                <div
                  className="w-[320px] h-[320px] border-[5px] overflow-hidden relative"
                  style={{ borderRadius: '60% 40% 45% 55% / 50% 55% 45% 50%', borderColor: '#1a2e44', backgroundColor: '#F3EDE5' }}
                >
                  {showAvatar ? (
                    <img
                      src="/avatar-placeholder.png"
                      alt="Avatar"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : (
                    <img
                      src="/profile-placeholder.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  )}
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <span className="absolute top-6 left-6 px-3 py-1.5 text-sm bg-gray-700/80 text-white rounded-md backdrop-blur-sm">
                    Preview
                  </span>
                </div>
                {/* Toggle Button */}
                <button
                  onClick={toggleImage}
                  className="absolute right-0 top-1/2 translate-x-3 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
                  aria-label="Toggle between avatar and photo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${showAvatar ? '' : 'rotate-180'}`}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
        </div>

        {/* Mobile: About Me section (below the fold) */}
        <div className="lg:hidden space-y-8 mt-8 pb-20">
            {/* About Me */}
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-gray-900">About Me</h2>

              <p className="text-gray-700 leading-relaxed">
                I am a Computer Science graduate student pursuing my Master's degree at{' '}
                <span className="underline decoration-gray-400 underline-offset-2 cursor-pointer hover:decoration-gray-600">
                  New York University
                </span>
                , with a strong passion for translating complex ideas into usable, real world products.
              </p>

              <p className="text-gray-700 leading-relaxed">
                My primary interests lie in{' '}
                <span
                  className="text-white font-medium px-2 py-1"
                  style={{
                    background: 'url("https://s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=1f2937")',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    margin: '-2px -6px',
                    padding: '2px 10px',
                  }}
                >
                  Agentic AI
                </span>
                ,{' '}
                <span
                  className="text-white font-medium px-2 py-1"
                  style={{
                    background: 'url("https://s2.svgbox.net/pen-brushes.svg?ic=brush-2&color=1f2937")',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    margin: '-2px -6px',
                    padding: '2px 10px',
                  }}
                >
                  Cloud Infrastructure
                </span>
                , and{' '}
                <span
                  className="text-white font-medium px-2 py-1"
                  style={{
                    background: 'url("https://s2.svgbox.net/pen-brushes.svg?ic=brush-3&color=1f2937")',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    margin: '-2px -6px',
                    padding: '2px 10px',
                  }}
                >
                  Backend Development
                </span>
                . I discovered my passion for building practical software products in high school and have continued to pursue it throughout my academic and professional journey. Diligence, ownership, and accountability are the three core principles I bring to every project I work on.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Currently, most of my time is spent preparing for recruitment, keeping up with the latest research in artificial intelligence, and problem solving. Outside of technology, I enjoy following politics and sports, working out, and cooking.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-2">
              {[
                { id: 'linkedin', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
                { id: 'gmail', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
                { id: 'github', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> },
                { id: 'instagram', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
              ].map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="p-1.5 rounded-full transition-all duration-200 text-gray-600 border-2 border-gray-600 hover:bg-black hover:text-[#F3EDE5] hover:border-black hover:scale-105"
                >
                  {item.icon}
                </a>
              ))}
            </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            {/* Name */}
            <div>
              <h1 className="text-4xl font-semibold text-gray-900 mb-2">
                JANARDHANA  REDDY
              </h1>
              <p className="text-lg text-gray-600">Graduate Student (CS), New York University</p>
            </div>

            {/* About Me */}
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-gray-900">About Me</h2>

              <p className="text-gray-700 leading-relaxed">
                I am a Computer Science graduate student pursuing my Master's degree at{' '}
                <span className="underline decoration-gray-400 underline-offset-2 cursor-pointer hover:decoration-gray-600">
                  New York University
                </span>
                , with a strong passion for translating complex ideas into usable, real world products.
              </p>

              <p className="text-gray-700 leading-relaxed">
                My primary interests lie in{' '}
                <span
                  className="text-white font-medium px-2 py-1"
                  style={{
                    background: 'url("https://s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=1f2937")',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    margin: '-2px -6px',
                    padding: '2px 10px',
                  }}
                >
                  Agentic AI
                </span>
                ,{' '}
                <span
                  className="text-white font-medium px-2 py-1"
                  style={{
                    background: 'url("https://s2.svgbox.net/pen-brushes.svg?ic=brush-2&color=1f2937")',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    margin: '-2px -6px',
                    padding: '2px 10px',
                  }}
                >
                  Cloud Infrastructure
                </span>
                , and{' '}
                <span
                  className="text-white font-medium px-2 py-1"
                  style={{
                    background: 'url("https://s2.svgbox.net/pen-brushes.svg?ic=brush-3&color=1f2937")',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    margin: '-2px -6px',
                    padding: '2px 10px',
                  }}
                >
                  Backend Development
                </span>
                . I discovered my passion for building practical software products in high school and have continued to pursue it throughout my academic and professional journey. Diligence, ownership, and accountability are the three core principles I bring to every project I work on.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Currently, most of my time is spent preparing for recruitment, keeping up with the latest research in artificial intelligence, and problem solving. Outside of technology, I enjoy following politics and sports, working out, and cooking.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {[
                { id: 'linkedin', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
                { id: 'gmail', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
                { id: 'github', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> },
                { id: 'instagram', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
              ].map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="p-1.5 rounded-full transition-all duration-200 text-gray-600 border-2 border-gray-600 hover:bg-black hover:text-[#F3EDE5] hover:border-black hover:scale-105"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="hidden lg:flex lg:w-1/2 justify-end">
            <div className="relative">
              {/* Profile Image - Organic blob shape */}
              <div
                className="w-[320px] h-[320px] md:w-[386px] md:h-[386px] border-[5px] overflow-hidden relative"
                style={{ borderRadius: '60% 40% 45% 55% / 50% 55% 45% 50%', borderColor: '#1a2e44', backgroundColor: '#F3EDE5' }}
              >
                {showAvatar ? (
                  <img
                    src="/avatar-placeholder.png"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : (
                  <img
                    src="/profile-placeholder.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                )}
                {/* Fallback placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>

                {/* Preview badge inside image */}
                <span className="absolute top-6 left-6 px-3 py-1.5 text-sm bg-gray-700/80 text-white rounded-md backdrop-blur-sm">
                  Preview
                </span>
              </div>

              {/* Toggle Button */}
              <button
                onClick={toggleImage}
                className="absolute right-0 top-1/2 translate-x-3 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
                aria-label="Toggle between avatar and photo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 ${showAvatar ? '' : 'rotate-180'}`}
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
