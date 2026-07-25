const experiences = [
  {
    id: 1,
    title: 'Teaching Assistant',
    company: 'New York University',
    location: 'New York, NY',
    duration: 'Sep 2025 – Present',
    description: 'Cloud Computing and Big Data (Graduate, Flagship Course)',
    bullets: [
      'Taught graduate level classes on NoSQL databases, Apache Kafka, and Apache Spark, delivering live demonstrations for a flagship Cloud Computing and Big Data systems course.',
      'Mentored student teams on cloud based system design projects, including NLP driven research paper summarization and natural language based DevOps automation systems.',
      'Guided students in designing distributed cloud architectures, containerization, data flow design, consistency trade offs, scalability considerations, and deployment strategies.',
    ],
  },
  {
    id: 2,
    title: 'Vice President – Software',
    company: 'Robolution Club',
    location: '',
    duration: 'Feb 2022 – Apr 2023',
    description: 'Software Division',
    bullets: [
      'Spearheaded a 10 student team to develop a deep learning model using computer vision for object detection, achieving 97% accuracy in identifying warehouse items.',
      'Designed system architecture, selecting and fine-tuning deep learning models for object detection, and improving warehouse navigation robots.',
      'Enhanced cross-functional collaboration, partnering with other clubs to integrate software components across 4 projects, improving overall system functionality.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-16 lg:px-24" style={{ backgroundColor: '#F3EDE5' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs tracking-widest text-gray-500 mb-2 uppercase">Experience</p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="text-gray-900">Work &amp; </span>
            <span style={{ color: '#4A90D9' }}>Leadership</span>
          </h2>
        </div>

        {/* Two cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="border border-gray-300 rounded-sm p-8"
              style={{ backgroundColor: '#EDE8E0' }}
            >
              <p className="text-xs tracking-widest text-gray-500 mb-2 uppercase">{exp.duration}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
              <p className="text-sm font-medium text-gray-700 mb-0.5">{exp.company}{exp.location ? ` · ${exp.location}` : ''}</p>
              <p className="text-sm text-gray-500 italic mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
