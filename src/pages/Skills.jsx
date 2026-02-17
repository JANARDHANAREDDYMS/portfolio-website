import { useState } from 'react';

function Skills() {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (title) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Outline-style SVG icons
  const icons = {
    Python: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c-1.7 0-3 .5-3.8 1.2C7.3 4 7 5 7 6v2h5v1H6c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h1v-2.5c0-1.4 1.1-2.5 2.5-2.5h5c1.4 0 2.5-1.1 2.5-2.5V6c0-2.2-1.8-4-5-4z"/><circle cx="9.5" cy="5.5" r=".5"/><path d="M12 22c1.7 0 3-.5 3.8-1.2.9-.8 1.2-1.8 1.2-2.8v-2h-5v-1h6c1.7 0 3-1.3 3-3v-2c0-1.7-1.3-3-3-3h-1v2.5c0 1.4-1.1 2.5-2.5 2.5h-5c-1.4 0-2.5 1.1-2.5 2.5V18c0 2.2 1.8 4 5 4z"/><circle cx="14.5" cy="18.5" r=".5"/></svg>,
    JavaScript: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8c0 1-1 2-2 2s-2-1-2-2"/><path d="M17 8c-1 0-2 .5-2 2s1 1.5 2 2 2 1 2 2-.5 2-2 2-2-1-2-2"/></svg>,
    TypeScript: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8h-4v1.5h1.5V18"/><path d="M17 8c-1 0-2 .5-2 2s1 1.5 2 2 2 1 2 2-.5 2-2 2-2-1-2-2"/></svg>,
    Java: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21s-1-1 2-2c3-1 6-1 8 1"/><path d="M9 18s-1-1 3-2c4-1 6 0 7 1"/><path d="M12 2c-4 4 4 7 0 11"/><path d="M8 8s-1 2 4 4c3 1 5 4 2 7"/></svg>,
    C: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 9a6 6 0 1 0 0 6"/></svg>,
    SQL: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>,
    'HTML/CSS': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 3l1.5 15L12 21l6.5-3L20 3H4z"/><path d="M8 8h8l-.5 5-3.5 1.5-3.5-1.5-.2-2"/></svg>,
    React: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>,
    'Node.js': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4.5v9L12 22l-8-4.5v-9L12 2z"/><path d="M12 7v10"/><path d="M8 9l4 2 4-2"/></svg>,
    Django: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h4v14c-2 1-4 1-4-2V3z"/><path d="M13 7c3 0 4 2 4 4s-1 4-4 4"/><path d="M17 3h3v4"/><path d="M17 17v4h3"/></svg>,
    Flask: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2h4v4l3 12c.5 2-1 4-3 4H10c-2 0-3.5-2-3-4l3-12V2z"/><path d="M8 14h8"/><circle cx="10" cy="17" r="1"/><circle cx="14" cy="17" r="1"/></svg>,
    Express: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16"/><path d="M4 8h8"/><path d="M4 16h8"/><path d="M16 8l4 4-4 4"/></svg>,
    'Tailwind CSS': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8c1-3 4-4 6-4 4 0 5 3 8 3 2 0 3-1 3-1"/><path d="M3 16c1-3 4-4 6-4 4 0 5 3 8 3 2 0 3-1 3-1"/></svg>,
    PyTorch: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L8 6l4 4"/><circle cx="12" cy="15" r="6"/><circle cx="12" cy="15" r="2"/></svg>,
    TensorFlow: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M12 6l6 3v6l-6 3"/><path d="M12 6L6 9v6l6 3"/></svg>,
    'VS Code': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3l5 3v12l-5 3-12-9 4-3 8 6V6l-8 6"/></svg>,
    Git: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M6 9v6c0 2 2 3 3 3h6"/><circle cx="18" cy="6" r="3"/><path d="M18 9v3"/></svg>,
    'Android Studio': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10a8 8 0 0 1 16 0v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8z"/><path d="M9 2l1 3"/><path d="M15 2l-1 3"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/><path d="M9 16h6"/></svg>,
    Linux: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="10" rx="6" ry="8"/><circle cx="10" cy="8" r="1"/><circle cx="14" cy="8" r="1"/><path d="M10 13c.5 1 1.5 1 2 1s1.5 0 2-1"/><path d="M6 18c-2 1-3 3-2 4h4"/><path d="M18 18c2 1 3 3 2 4h-4"/></svg>,
    AWS: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12a6 6 0 0 1 12 0"/><path d="M3 12h18"/><path d="M12 6v12"/><path d="M8 18l4 3 4-3"/></svg>,
    Kubernetes: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/><circle cx="12" cy="12" r="3"/><path d="M12 9V5"/><path d="M12 19v-4"/><path d="M9.5 10.5L6 8"/><path d="M14.5 10.5L18 8"/><path d="M9.5 13.5L6 16"/><path d="M14.5 13.5L18 16"/></svg>,
    Docker: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12c-1.5-1-3-1.5-5-1h-1V8h-3V5H9v3H6v3H3v3h11c2 0 4-.5 5-1 1.5 2 3 1 3 1"/><rect x="9" y="8" width="2" height="2"/><rect x="12" y="8" width="2" height="2"/><rect x="9" y="11" width="2" height="2"/><rect x="12" y="11" width="2" height="2"/><rect x="6" y="11" width="2" height="2"/></svg>,
  };

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', proficiency: 5 },
        { name: 'JavaScript', proficiency: 5 },
        { name: 'TypeScript', proficiency: 4 },
        { name: 'Java', proficiency: 4 },
        { name: 'C', proficiency: 3 },
        { name: 'SQL', proficiency: 4 },
        { name: 'HTML/CSS', proficiency: 5 },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'VS Code', proficiency: 5 },
        { name: 'Git', proficiency: 5 },
        { name: 'Android Studio', proficiency: 3 },
        { name: 'Linux', proficiency: 4 },
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'React', proficiency: 5 },
        { name: 'Node.js', proficiency: 4 },
        { name: 'Django', proficiency: 4 },
        { name: 'Flask', proficiency: 4 },
        { name: 'Express', proficiency: 4 },
        { name: 'Tailwind CSS', proficiency: 4 },
        { name: 'PyTorch', proficiency: 4 },
        { name: 'TensorFlow', proficiency: 3 },
      ],
    },
    {
      title: 'Cloud/DevOps',
      skills: [
        { name: 'AWS', proficiency: 4 },
        { name: 'Kubernetes', proficiency: 3 },
        { name: 'Docker', proficiency: 4 },
      ],
    },
  ];

  const ProficiencyBar = ({ level }) => {
    const colors = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#15803d'];
    return (
      <div className="flex w-full overflow-hidden rounded-sm border border-gray-900/30">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="h-1.5 flex-1"
            style={{
              backgroundColor: i <= level ? colors[i - 1] : 'rgba(0, 0, 0, 0.1)',
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-6 md:px-16 lg:px-24" style={{ backgroundColor: '#F3EDE5' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm tracking-widest text-gray-500 mb-2">MY SKILLS</p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="text-gray-900">What </span>
            <span style={{ color: '#00b8a9' }}>I can do</span>
          </h2>
        </div>

        {/* Skills Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Skills Categories */}
          <div className="space-y-6 lg:w-3/5">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                <div className="relative inline-block">
                {/* Collapsed View */}
                <div
                  className={`px-4 py-3 rounded-full border-2 border-gray-900 bg-transparent transition-all duration-50 ease-in-out ${
                    expandedCategories[category.title]
                      ? 'opacity-0 scale-95 absolute pointer-events-none'
                      : 'opacity-100 scale-100'
                  }`}
                >
                  <div className="flex gap-2 overflow-x-auto">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-medium whitespace-nowrap"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded View */}
                <div
                  className={`px-6 py-3 rounded-2xl border-2 border-gray-900 bg-transparent transition-all duration-50 ease-in-out ${
                    expandedCategories[category.title]
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 absolute pointer-events-none'
                  }`}
                >
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center w-20 p-3 rounded-xl hover:bg-white/80 transition-all duration-300"
                      >
                        <div className="text-gray-900 mb-2">
                          {icons[skill.name]}
                        </div>
                        <span className="text-xs font-medium text-gray-900 mb-2 text-center whitespace-nowrap">
                          {skill.name}
                        </span>
                        <ProficiencyBar level={skill.proficiency} />
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[68%] w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-gray-700 transition-transform duration-300 ${
                      expandedCategories[category.title] ? 'rotate-180' : ''
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
          </div>

          {/* Side Text */}
          <div className="lg:w-2/5 space-y-6 lg:pt-10">
            <p className="text-gray-700 leading-relaxed">
              As a developer, I have experience in JavaScript, HTML, React, NodeJs, and CSS.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This helps me work with the MERN stack, making me closer to becoming a Full Stack developer. My interests also lie in Machine Learning and you can find some of the projects I have done below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
