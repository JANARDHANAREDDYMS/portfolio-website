const experiences = [
  {
    id: 1,
    title: 'Teaching Assistant',
    company: 'New York University',
    location: 'New York, NY',
    duration: 'Sep 2025 – Present',
    description: 'Cloud Computing and Big Data (Graduate, Flagship Course)',
    bullets: [
      'Taught graduate-level classes on Apache Kafka, Apache Spark, and NoSQL databases, delivering live working demos on distributed data pipelines and cloud-native agentic architectures for 250 students.',
      'Mentored 12+ student teams on AI-powered capstone projects including NLP-driven research paper summarization and natural language based DevOps automation, guiding LLM integration, prompt engineering, and RAG pipeline design.',
      'Led weekly discussions on latest AI and cloud architecture research, synthesizing recent papers on LLM inference optimization, distributed training, and agentic system design.',
      'Built an automated PDF grading platform that reduced grading time from 10 hours to 45 minutes per cycle for 250 students, saving 20 hours of manual effort per week without being asked.',
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
      'Led a 10-member software team to build and deploy a fine-tuned YOLOv6 object detection model on industry-specific warehouse datasets, achieving 92% mAP for autonomous navigation of mini robots in industrial environments.',
      'Optimized model inference for embedded hardware deployment using low-level C++ systems programming, debugging GCC memory ordering issues in multi-threaded control systems managing concurrent sensor input, motor commands, and vision processing.',
      'Led team to win the Flipkart Grid Hackathon, competing against university teams across India with a fully integrated autonomous warehouse robot system combining deep learning perception and real-time embedded control.',
      'Architected the software system across 10 team members, defining module boundaries between computer vision, motor control, and sensor fusion components, enabling parallel development and clean integration across the full autonomous robot stack.',
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
