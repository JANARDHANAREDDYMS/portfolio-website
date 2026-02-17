import { useEffect, useRef, useState } from 'react';

// Tech stack icons
const techIcons = {
  MCP: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>,
  DynamoDB: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>,
  OpenSearch: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  EKS: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/><circle cx="12" cy="12" r="3"/></svg>,
  ECS: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  Django: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h4v14c-2 1-4 1-4-2V3z"/><path d="M13 7c3 0 4 2 4 4s-1 4-4 4"/></svg>,
  PostgreSQL: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>,
  'AWS EKS': <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/><circle cx="12" cy="12" r="3"/></svg>,
  Docker: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12c-1.5-1-3-1.5-5-1h-1V8h-3V5H9v3H6v3H3v3h11c2 0 4-.5 5-1 1.5 2 3 1 3 1"/><rect x="9" y="8" width="2" height="2"/><rect x="12" y="8" width="2" height="2"/></svg>,
  GCP: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.5 14.5L18 12l1.5-2.5L17 8l-2.5 1.5L12 8l-2.5 1.5L7 8 5.5 9.5 4 12l1.5 2.5L7 16l2.5-1.5L12 16l2.5-1.5L17 16l2.5-1.5z"/></svg>,
  Pandas: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="4" height="16" rx="1"/><rect x="10" y="8" width="4" height="8" rx="1"/><rect x="16" y="4" width="4" height="16" rx="1"/></svg>,
  'scikit-learn': <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>,
  PyTorch: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L8 6l4 4"/><circle cx="12" cy="15" r="6"/><circle cx="12" cy="15" r="2"/></svg>,
  OpenCV: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/></svg>,
  YoloPose: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"/><path d="M12 8v8"/><path d="M8 12h8"/><path d="M9 21l3-5 3 5"/></svg>,
  Homography: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
  DeepSORT: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
};

// Project icons
const projectIcons = {
  'Code Sensei': (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="2" y1="20" x2="22" y2="20"></line>
      <polyline points="8 10 6 12 8 14"></polyline>
      <polyline points="16 10 18 12 16 14"></polyline>
      <line x1="12" y1="9" x2="12" y2="15"></line>
    </svg>
  ),
  'NYU Enrolls': (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      <circle cx="12" cy="8" r="2"></circle>
      <path d="M15 13H9"></path>
      <path d="M15 16H9"></path>
    </svg>
  ),
  'Crowd Monitoring System': (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="4"></circle>
      <line x1="12" y1="9" x2="12" y2="9.01"></line>
    </svg>
  ),
};

const projects = [
  {
    id: 1,
    title: 'Code Sensei',
    date: 'May 2025',
    description: 'Built an agentic AI powered interview platform that generates personalized technical assessments by reasoning over user prompts and historical performance, using multi-agent LLM workflows with explicit role separation, contextual memory, and constrained generation.',
    bullets: [
      'Designed end-to-end CI/CD pipelines using AWS CodePipeline and CodeBuild to automatically test, build Docker images, and deploy Django microservices to EKS.',
      'Created a context aware hinting and code execution system using ECS Fargate, combining tool calling LLM agents with isolated execution environments to support 10,000+ concurrent users.',
    ],
    tech: ['MCP', 'DynamoDB', 'OpenSearch', 'EKS', 'ECS'],
    color: '#E63946',
  },
  {
    id: 2,
    title: 'NYU Enrolls',
    date: 'Dec 2025',
    description: 'Developed and optimized a course enrollment system using Django and PostgreSQL, incorporating natural language search, resulting in 30% faster enrollment processing.',
    bullets: [
      'Integrated data analytics pipelines using Pandas, scikit-learn, and seaborn on pre-registration data, enabling administrators to adjust 100+ courses per semester.',
      'Improved system scalability through Docker-based containerization and orchestration with AWS EKS, supporting 10,000+ concurrent users.',
      'Resolved correctness issues in the waitlisting system using a priority queue–based approach and collaborated with NYU IT to integrate the solution.',
    ],
    tech: ['Django', 'PostgreSQL', 'AWS EKS', 'Docker', 'GCP', 'Pandas', 'scikit-learn'],
    color: '#457B9D',
  },
  {
    id: 3,
    title: 'Crowd Monitoring System',
    date: 'May 2024',
    description: 'Developed a deep learning system for crowd monitoring at college events by Finetuning YOLOPosev8 on biased datasets, achieving 90% mAP@0.5 for human detection.',
    bullets: [
      'Designed an automated homography pipeline, improving inter-person distance accuracy by 30% via 3D-to-2D scene mapping.',
      'Enhanced crowd monitoring by integrating real-time alerts and generating density maps to monitor violations per event.',
    ],
    tech: ['PyTorch', 'OpenCV', 'YoloPose', 'Homography', 'DeepSORT'],
    color: '#2A9D8F',
  },
];

function Projects() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const windowHeight = window.innerHeight;
      const currentIsMobile = window.innerWidth < 768;

      // Calculate scroll progress within the container
      const scrollStart = -windowHeight * 0.2;
      const scrollEnd = -container.offsetHeight + windowHeight;
      const scrollProgress = Math.max(0, Math.min(1, (scrollStart - containerTop) / (scrollStart - scrollEnd)));

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const offsetPerCard = currentIsMobile ? 20 : 30;
        const stackOffset = index * offsetPerCard;

        // First card is always visible and fixed
        if (index === 0) {
          if (currentIsMobile) {
            card.style.transform = `translateY(${stackOffset}px)`;
          } else {
            card.style.transform = `translateX(${stackOffset}px)`;
          }
          card.style.opacity = 1;
          return;
        }

        const cardProgress = Math.max(0, Math.min(1, (scrollProgress * (projects.length - 1) - (index - 1))));

        // Collapse expanded card when next card starts appearing
        if (cardProgress > 0.1 && expandedCard === projects[index - 1]?.id) {
          setExpandedCard(null);
        }

        if (currentIsMobile) {
          // Mobile: Vertical stacking (bottom to top)
          const startY = windowHeight * 0.8;
          const endY = stackOffset;
          const currentY = startY - (startY - endY) * cardProgress;
          card.style.transform = `translateY(${currentY}px)`;
        } else {
          // Desktop: Horizontal stacking (right to left)
          const startX = window.innerWidth * 0.8;
          const endX = stackOffset;
          const currentX = startX - (startX - endX) * cardProgress;
          card.style.transform = `translateX(${currentX}px)`;
        }

        card.style.opacity = cardProgress > 0 ? 1 : 0;
      });
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [expandedCard]);

  // Mobile layout - simple vertical stack
  if (isMobile) {
    return (
      <section id="projects" className="px-4 py-12" style={{ backgroundColor: '#F3EDE5' }}>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>
        <div className="space-y-6">
          {projects.map((project) => {
            const isExpanded = expandedCard === project.id;
            return (
              <div
                key={project.id}
                className="rounded-3xl p-4 pb-8 shadow-xl relative"
                style={{ backgroundColor: project.color }}
              >
                <div className="flex flex-col text-white">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0"
                          style={{ color: project.color }}
                        >
                          {projectIcons[project.title]}
                        </div>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                      </div>
                      <span className="text-xs font-medium opacity-80">{project.date}</span>
                    </div>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {project.description}
                    </p>
                    {isExpanded && project.bullets && (
                      <ul className="mt-3 space-y-2 text-sm opacity-85">
                        {project.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-2">
                            <span>•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                      >
                        {techIcons[tech]}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile expand button */}
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
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
                    className={`text-gray-700 transition-transform duration-300 ${isExpanded ? '-rotate-90' : 'rotate-90'}`}
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  // Desktop layout - sticky scroll animation
  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative px-6 md:px-16 lg:px-24"
      style={{ backgroundColor: '#F3EDE5', height: '150vh' }}
    >
      <div className="sticky top-0 h-screen pt-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Projects</h2>

        <div className="relative">
          {projects.map((project, index) => {
            const isLastCard = index === projects.length - 1;
            const isExpanded = isLastCard || expandedCard === project.id;
            return (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="absolute top-0 left-0 rounded-3xl p-8 shadow-2xl transition-all duration-500 ease-out h-[495px]"
                style={{
                  backgroundColor: project.color,
                  zIndex: index + 1,
                  opacity: index === 0 ? 1 : 0,
                  transform: index === 0 ? 'translateX(0px)' : 'translateX(100vw)',
                  width: isExpanded ? '900px' : '500px',
                }}
              >
                <div className="h-full flex flex-col justify-between text-white overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center flex-shrink-0"
                          style={{ color: project.color }}
                        >
                          {projectIcons[project.title]}
                        </div>
                        <h3 className="text-3xl font-bold">{project.title}</h3>
                      </div>
                      <span className="text-sm font-medium opacity-80">{project.date}</span>
                    </div>
                    <p className="text-base opacity-90 leading-relaxed">
                      {project.description}
                    </p>
                    {isExpanded && project.bullets && (
                      <ul className="mt-3 space-y-2 text-sm opacity-85">
                        {project.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-2">
                            <span>•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                      >
                        {techIcons[tech]}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expand Arrow Button - hidden for last card */}
                {!isLastCard && (
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
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
                      className={`text-gray-700 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
