import { useState } from 'react';

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
    title: 'SDE Intern',
    company: 'Toyota Kirloskar, Inc',
    location: 'Bangalore, KA',
    duration: 'Dec 2023 – Mar 2024',
    description: 'Software Development',
    bullets: [
      'Built a Django/PostgreSQL logistics incident management platform, developing REST APIs and workflow state transitions to digitize FIR reporting across suppliers and internal teams; reduced issue-resolution time by 30%.',
      'Designed role-based access control and granular authorization for sensitive logistics and FIR records, separating protected data and enforcing role-specific access for suppliers and internal stakeholders.',
      'Automated invoice approval and supplier-part validation for an inventory system processing 100,000+ parts and orders, resolving legacy validation inconsistencies and reducing processing time by 35% and errors by 15%.',
      'Implemented automated data validation and integrity checks across logistics pipelines to catch invalid supplier, part, and transaction records before downstream processing, eliminating 20 hours per week of manual verification.',
    ],
  },
  {
    id: 3,
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
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <section id="experience" className="py-20 px-6 md:px-16 lg:px-24" style={{ backgroundColor: '#F3EDE5' }}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs tracking-widest text-gray-500 mb-2 uppercase">Experience</p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="text-gray-900">Work &amp; </span>
            <span style={{ color: '#4A90D9' }}>Leadership</span>
          </h2>
        </div>

        {/* Horizontally scrollable experience cards */}
        <div
          className="experience-scroll flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
          onScroll={(event) => {
            const { scrollLeft, scrollWidth, clientWidth } = event.currentTarget;
            setScrollProgress(scrollLeft / Math.max(scrollWidth - clientWidth, 1));
          }}
        >
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="min-w-[88%] snap-start border border-gray-300 rounded-sm p-8 md:min-w-[48%]"
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
        <div className="mx-auto mt-3 h-1 w-28 overflow-hidden rounded-full bg-gray-300/70" aria-hidden="true">
          <div
            className="h-full w-[38%] rounded-full bg-gray-500 transition-[margin] duration-150"
            style={{ marginLeft: `${scrollProgress * 62}%` }}
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;
