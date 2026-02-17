function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      company: 'Company Name',
      duration: 'Jun 2024 - Aug 2024',
      description: 'Description of your role and responsibilities.',
      bullets: [
        'Accomplishment or responsibility 1',
        'Accomplishment or responsibility 2',
        'Accomplishment or responsibility 3',
      ],
    },
    {
      id: 2,
      title: 'Teaching Assistant',
      company: 'New York University',
      duration: 'Sep 2024 - Present',
      description: 'Description of your role and responsibilities.',
      bullets: [
        'Accomplishment or responsibility 1',
        'Accomplishment or responsibility 2',
      ],
    },
    {
      id: 3,
      title: 'Software Lead',
      company: 'Robotion Club',
      duration: 'Duration',
      description: 'Led software development initiatives for the robotics club.',
      bullets: [
        'Accomplishment or responsibility 1',
        'Accomplishment or responsibility 2',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-16 lg:px-24" style={{ backgroundColor: '#F3EDE5' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm tracking-widest text-gray-500 mb-2">EXPERIENCE</p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="text-gray-900">Work & </span>
            <span style={{ color: '#00b8a9' }}>Leadership</span>
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-8 border-l-2 border-gray-300"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-gray-900" />

              <div className="pb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-gray-500">{exp.duration}</span>
                </div>
                <p className="text-gray-600 font-medium mb-3">{exp.company}</p>
                <p className="text-gray-700 mb-3">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2 text-gray-600">
                      <span>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
