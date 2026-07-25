import { useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6" />
    <path d="M10 14L21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const ChevronIcon = ({ direction }) => (
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
    className={direction === 'up' ? '-rotate-90' : 'rotate-90'}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

function ScrollableDiagram({ src, title }) {
  const iframeRef = useRef(null);

  const scrollDiagram = (amount) => {
    const frameWindow = iframeRef.current?.contentWindow;
    frameWindow?.scrollBy({ top: amount, behavior: 'smooth' });
  };

  return (
    <div className="relative mt-3">
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        className="h-[360px] w-full border border-gray-200 bg-white"
        style={{ borderRadius: '8px' }}
      />
      <div className="absolute right-0 top-4 flex translate-x-1/2 flex-col gap-2">
        <button
          type="button"
          onClick={() => scrollDiagram(-260)}
          className="flex h-10 w-10 items-center justify-center border border-gray-300 bg-white text-gray-900 shadow-lg transition-colors hover:bg-gray-100"
          style={{ borderRadius: '999px' }}
          aria-label="Scroll diagram up"
        >
          <ChevronIcon direction="up" />
        </button>
        <button
          type="button"
          onClick={() => scrollDiagram(260)}
          className="flex h-10 w-10 items-center justify-center border border-gray-300 bg-white text-gray-900 shadow-lg transition-colors hover:bg-gray-100"
          style={{ borderRadius: '999px' }}
          aria-label="Scroll diagram down"
        >
          <ChevronIcon direction="down" />
        </button>
      </div>
    </div>
  );
}

function PlaceholderMedia({ title, label, children }) {
  return (
    <div className="border border-gray-300 bg-white/45 p-5 md:p-6" style={{ borderRadius: '8px' }}>
      <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</div>
      <div className="mt-3 min-h-[220px] border border-dashed border-gray-300 bg-[#F8F4EE] p-5 flex items-center justify-center text-center" style={{ borderRadius: '8px' }}>
        <div>
          <div className="text-lg font-semibold text-gray-900">{title}</div>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">{children}</p>
        </div>
      </div>
    </div>
  );
}

function ArchitecturePanel({ project }) {
  if (project.architectureImage?.endsWith('.html')) {
    return (
      <div className="border border-gray-300 bg-white/45 p-5 md:p-6" style={{ borderRadius: '8px' }}>
        <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Architecture</div>
        <ScrollableDiagram src={project.architectureImage} title={`${project.title} architecture diagram`} />
        <p className="mt-3 text-sm leading-6 text-gray-600">{project.detail.architecture}</p>
      </div>
    );
  }

  if (project.architectureImage?.endsWith('.svg')) {
    return (
      <div className="border border-gray-300 bg-white/45 p-5 md:p-6" style={{ borderRadius: '8px' }}>
        <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Architecture</div>
        <div className="mt-3 overflow-hidden border border-gray-200 bg-white" style={{ borderRadius: '8px' }}>
          <img src={project.architectureImage} alt={`${project.title} architecture diagram`} className="h-auto w-full" />
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-600">{project.detail.architecture}</p>
      </div>
    );
  }

  return (
    <PlaceholderMedia title="Architecture diagram placeholder" label="Architecture">
      {project.detail.architecture}
    </PlaceholderMedia>
  );
}

function DemoPanel({ project }) {
  if (project.pipelineDiagram?.endsWith('.html')) {
    return (
      <div className="border border-gray-300 bg-white/45 p-5 md:p-6" style={{ borderRadius: '8px' }}>
        <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Pipeline</div>
        <ScrollableDiagram src={project.pipelineDiagram} title={`${project.title} pipeline diagram`} />
        <p className="mt-3 text-sm leading-6 text-gray-600">{project.detail.demo}</p>
      </div>
    );
  }

  return (
    <PlaceholderMedia title="Working demo video placeholder" label="Demo">
      {project.detail.demo}
    </PlaceholderMedia>
  );
}

function ResourceList({ resources = [] }) {
  if (resources.length === 0) {
    return null;
  }

  return (
    <section className="mt-8 border border-gray-300 bg-white/45 p-5 md:p-6" style={{ borderRadius: '8px' }}>
      <h2 className="text-2xl font-bold text-gray-950">Resources</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {resources.map((resource) => (
          <a
            key={resource.label}
            href={resource.href}
            target={resource.href.startsWith('http') ? '_blank' : undefined}
            rel={resource.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group border border-gray-200 bg-[#F8F4EE] p-4 transition-colors hover:border-gray-400 hover:bg-white"
            style={{ borderRadius: '8px' }}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-gray-950">{resource.label}</h3>
              <ExternalLinkIcon />
            </div>
            <p className="mt-2 text-sm leading-6 text-gray-600">{resource.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen px-4 py-6 md:px-16 md:py-10 lg:px-24" style={{ backgroundColor: '#F3EDE5' }}>
      <div className="mx-auto max-w-6xl">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-950">
          <ArrowLeftIcon />
          Back to projects
        </Link>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 text-sm font-semibold text-white" style={{ backgroundColor: project.color, borderRadius: '999px' }}>
                {project.date}
              </span>
              <span className="text-sm font-medium text-gray-600">{project.slug}</span>
            </div>
            <h1 className="mt-5 text-4xl font-bold text-gray-950 md:text-6xl">{project.title}</h1>
            <p className="mt-5 max-w-3xl text-xl leading-relaxed text-gray-700">{project.detail.headline}</p>
            <p className="mt-5 max-w-3xl leading-8 text-gray-700">{project.detail.overview}</p>
            {project.detail.achievement && (
              <div className="mt-6 max-w-3xl border-l-4 bg-white/55 p-4" style={{ borderColor: project.color, borderRadius: '0 8px 8px 0' }}>
                <div className="text-sm font-bold uppercase tracking-wide text-gray-600">Key Achievement</div>
                <p className="mt-2 leading-7 text-gray-800">{project.detail.achievement}</p>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm font-semibold text-gray-800 bg-white/70 border border-gray-200" style={{ borderRadius: '999px' }}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.sourceCode !== '#' && (
                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800" style={{ borderRadius: '8px' }}>
                  Source code
                  <ExternalLinkIcon />
                </a>
              )}
              {project.documentation && (
                <a href={project.documentation} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gray-950 px-4 py-2.5 text-sm font-semibold text-gray-950 hover:bg-white/70" style={{ borderRadius: '8px' }}>
                  Project documentation
                  <ExternalLinkIcon />
                </a>
              )}
              {project.demoVideo && (
                <a href={project.demoVideo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gray-950 px-4 py-2.5 text-sm font-semibold text-gray-950 hover:bg-white/70" style={{ borderRadius: '8px' }}>
                  Demo Video
                  <ExternalLinkIcon />
                </a>
              )}
            </div>
          </div>

          <div className="border border-gray-300 bg-white/50 p-5 shadow-sm" style={{ borderRadius: '8px' }}>
            <h2 className="text-lg font-bold text-gray-950">Case Study Sections</h2>
            <ul className="mt-4 space-y-3">
              {project.detail.docs.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-gray-700">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: project.color }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <ArchitecturePanel project={project} />
          <DemoPanel project={project} />
        </section>

        <ResourceList resources={project.resources} />

        <section className="mt-8 border border-gray-300 bg-white/45 p-5 md:p-6" style={{ borderRadius: '8px' }}>
          <h2 className="text-2xl font-bold text-gray-950">Detailed Documentation</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {project.detail.docs.map((item) => (
              <div key={item} className="border border-gray-200 bg-[#F8F4EE] p-4" style={{ borderRadius: '8px' }}>
                <h3 className="font-semibold text-gray-950">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Placeholder documentation block. Add diagrams, screenshots, implementation details, tradeoffs, metrics, and links for this section later.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProjectDetail;
