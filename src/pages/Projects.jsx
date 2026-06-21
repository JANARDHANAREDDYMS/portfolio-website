import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

  const SvgIcon = ({ children, size = 14 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );

  const techIcons = {
    MCP: <SvgIcon><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93
  4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93
  19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></SvgIcon>,
    DynamoDB: <SvgIcon><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/
  ><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></SvgIcon>,
    OpenSearch: <SvgIcon><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></
  SvgIcon>,
    EKS: <SvgIcon><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/><circle cx="12" cy="12" r="3"/></SvgIcon>,
    ECS: <SvgIcon><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect
  x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></SvgIcon>,
    Django: <SvgIcon><path d="M9 3h4v14c-2 1-4 1-4-2V3z"/><path d="M13 7c3 0 4 2 4 4s-1 4-4 4"/></SvgIcon>,
    PostgreSQL: <SvgIcon><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-
  3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></SvgIcon>,
    'AWS EKS': <SvgIcon><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/><circle cx="12" cy="12" r="3"/></SvgIcon>,
    Docker: <SvgIcon><path d="M22 12c-1.5-1-3-1.5-5-1h-1V8h-3V5H9v3H6v3H3v3h11c2 0 4-.5 5-1 1.5 2 3 1 3 1"/
  ><rect x="9" y="8" width="2" height="2"/><rect x="12" y="8" width="2" height="2"/></SvgIcon>,
    GCP: <SvgIcon><path d="M19.5 14.5L18 12l1.5-2.5L17 8l-2.5 1.5L12 8l-2.5 1.5L7 8 5.5 9.5 4 12l1.5 2.5L7
  16l2.5-1.5L12 16l2.5-1.5L17 16l2.5-1.5z"/></SvgIcon>,
    Pandas: <SvgIcon><rect x="4" y="4" width="4" height="16" rx="1"/><rect x="10" y="8" width="4" height="8"
  rx="1"/><rect x="16" y="4" width="4" height="16" rx="1"/></SvgIcon>,
    'scikit-learn': <SvgIcon><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></
  SvgIcon>,
    PyTorch: <SvgIcon><path d="M12 2L8 6l4 4"/><circle cx="12" cy="15" r="6"/><circle cx="12" cy="15" r="2"/
  ></SvgIcon>,
    OpenCV: <SvgIcon><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93
  4.93l2.83 2.83"/><path d="M16.24 16.24l2.83-2.83"/></SvgIcon>,
    YoloPose: <SvgIcon><circle cx="12" cy="5" r="3"/><path d="M12 8v8"/><path d="M8 12h8"/><path d="M9 21l3-
  5 3 5"/></SvgIcon>,
    Homography: <SvgIcon><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9
  21V9"/></SvgIcon>,
    DeepSORT: <SvgIcon><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/
  ><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></SvgIcon>,
    Spark: <SvgIcon><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></SvgIcon>,
    'Delta Lake': <SvgIcon><path d="M12 3l9 16H3L12 3z"/><path d="M12 8l4.5 8h-9L12 8z"/></SvgIcon>,
    FastAPI: <SvgIcon><circle cx="12" cy="12" r="10"/><path d="M13 2L7 13h5l-1 9 6-12h-5l1-8z"/></SvgIcon>,
    LangGraph: <SvgIcon><circle cx="5" cy="12" r="3"/><circle cx="19" cy="5" r="3"/><circle cx="19" cy="19"
  r="3"/><path d="M8 11l8-5"/><path d="M8 13l8 5"/></SvgIcon>,
    Kafka: <SvgIcon><circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18"
  r="3"/><path d="M8.5 10.5l7-3"/><path d="M8.5 13.5l7 3"/></SvgIcon>,
    MLflow: <SvgIcon><path d="M4 19V5"/><path d="M4 19h16"/><path d="M7 15l4-4 3 3 5-7"/></SvgIcon>,
    pgvector: <SvgIcon><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v8c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/
  ><path d="M8 20l8-8"/><path d="M16 12v6h-6"/></SvgIcon>,
    HTML: <SvgIcon><path d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3z"/><path d="M8 8h8"/><path d="M8.5 12h7L15 17l-3 1-3-1-.2-2"/></SvgIcon>,
    CSS: <SvgIcon><path d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3z"/><path d="M8 8h8l-.4 4H9"/><path d="M15.2 12l-.4 5-2.8 1-2.8-1-.2-2"/></SvgIcon>,
    JavaScript: <SvgIcon><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 8v7a2 2 0 0 1-2 2"/><path d="M14 17c1.5 0 3-.7 3-2 0-2.5-4-1.5-4-4 0-1.3 1.2-2 2.7-2"/></SvgIcon>,
    Leaflet: <SvgIcon><path d="M12 21s-7-4.5-7-11a7 7 0 0 1 14 0c0 6.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/><path d="M5 21h14"/></SvgIcon>,
    'NYC DOT': <SvgIcon><path d="M4 20V9l8-5 8 5v11"/><path d="M8 20v-7h8v7"/><path d="M10 9h4"/><path d="M12 13v7"/></SvgIcon>,
  };

  const projectIcons = {
    ProjectCerebro: (
      <SvgIcon size={28}>
        <path d="M9 4a4 4 0 0 0-4 4v1a4 4 0 0 0 0 6v1a4 4 0 0 0 6 3"/>
        <path d="M15 4a4 4 0 0 1 4 4v1a4 4 0 0 1 0 6v1a4 4 0 0 1-6 3"/>
        <path d="M9 8h6"/>
        <path d="M8 12h8"/>
        <path d="M9 16h6"/>
        <circle cx="7" cy="12" r="1"/>
        <circle cx="17" cy="12" r="1"/>
      </SvgIcon>
    ),
    'Lead AI': (
      <SvgIcon size={28}>
        <path d="M4 19V5"/>
        <path d="M4 19h16"/>
        <path d="M7 15l4-4 3 3 5-7"/>
        <circle cx="17" cy="7" r="2"/>
      </SvgIcon>
    ),
    'Parade Cam': (
      <SvgIcon size={28}>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
        <path d="M8 21l8-8"/>
        <path d="M15 7h3"/>
      </SvgIcon>
    ),
    'Code Sensei': (
      <SvgIcon size={28}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
        <polyline points="8 10 6 12 8 14"/>
        <polyline points="16 10 18 12 16 14"/>
        <line x1="12" y1="9" x2="12" y2="15"/>
      </SvgIcon>
    ),
    'NYU Enrolls': (
      <SvgIcon size={28}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <circle cx="12" cy="8" r="2"/>
        <path d="M15 13H9"/>
        <path d="M15 16H9"/>
      </SvgIcon>
    ),
    'Crowd Monitoring System': (
      <SvgIcon size={28}>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
        <line x1="12" y1="9" x2="12" y2="9.01"/>
      </SvgIcon>
    ),
  };

  function ProjectCard({ project }) {
    return (
      <article
        className="min-h-[520px] w-full p-5 shadow-2xl transition-colors duration-300 md:p-8 lg:min-h-[500px]"
        style={{ backgroundColor: project.color, borderRadius: '24px' }}
      >
        <div className="flex h-full flex-col justify-between text-white">
          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-15 flex-shrink-0 items-center justify-center bg-white" style={{ color: project.color, borderRadius: '14px' }}>
                  {projectIcons[project.title]}
                </div>
                <h3 className="text-3xl font-bold leading-tight">{project.title}</h3>
              </div>
              <span className="text-sm font-medium text-white/80">{project.date}</span>
            </div>

            <p className="mt-3 max-w-4xl text-sm leading-6 text-white/90 md:text-base">
  {project.description}
</p>

            {project.bullets?.length > 0 && (
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/85 lg:grid-cols-1">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/80" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-7">
            <div className="flex flex-wrap gap-6">
              {project.tech.map((tech) => (
                <span
                  className="flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium"
                  style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                >
                  {techIcons[tech]}
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link to={`/projects/${project.slug}/`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-white/80 transition-colors">
                View details
                <SvgIcon><polyline points="9 18 15 12 9 6" /></SvgIcon>
              </Link>
              {project.repo !== '#' && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-white/75 hover:text-white transition-colors">
                  <SvgIcon><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></SvgIcon>
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  function Projects() {
    const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);
    const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? projects[0];

    return (
      <section id="projects" className="px-4 py-12 md:px-16 lg:px-24 lg:py-20" style={{ backgroundColor: '#F3EDE5' }}>
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">Projects</h2>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
            <div className="flex gap-3 overflow-x-auto pb-2 lg:w-[15%] lg:min-w-[170px] lg:flex-col lg:justify-center lg:overflow-visible lg:pb-0">
              {projects.map((project) => {
                const isSelected = selectedProject.id === project.id;

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setSelectedProjectId(project.id)}
                    className={`flex min-w-[190px] items-center gap-3 border px-3 py-3 text-left transition-all duration-200 lg:min-w-0 ${
                      isSelected
                        ? 'border-gray-950 bg-gray-950 text-white shadow-lg'
                        : 'border-gray-300 bg-white/55 text-gray-800 hover:border-gray-500 hover:bg-white'
                    }`}
                    style={{ borderRadius: '8px' }}
                    aria-pressed={isSelected}
                  >
                    <span
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-white"
                      style={{ color: project.color, borderRadius: '8px' }}
                    >
                      {projectIcons[project.title]}
                    </span>
                    <span className="min-w-0 text-sm font-semibold leading-5">{project.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="min-w-0 flex-1">
              <ProjectCard project={selectedProject} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default Projects;
