const talentRadarProject = {
    id: 7,
    slug: 'talentradar',
    title: 'TalentRadar',
    date: 'Jul 2026',
    repo: '#',
    description:
      'Built an AI-powered job search intelligence platform on Palantir Foundry that helps F1-OPT and international students find high-fit roles, visa-friendly companies, warm contacts, and personalized outreach in one workflow.',
    bullets: [
      'Ingested live job postings from 35+ top tech companies by detecting each company\'s ATS provider across Lever, Greenhouse, and Ashby, producing a continuously updated dataset of 3,600+ structured roles.',
      'Modeled Jobs, Candidates, MatchScores, and Contacts as Palantir Foundry ontology objects so search, scoring, caching, and downstream workflows operate on governed structured data.',
      'Built resume parsing with PDF.js and an AIP Logic function that extracts skills, target titles, education, and previous employer directly from uploaded PDFs.',
      'Created AI matching and outreach workflows that score every eligible job, explain skill overlaps and gaps, flag visa compatibility, discover warm contacts, and draft personalized LinkedIn messages.',
    ],
    tech: ['Palantir Foundry', 'AIP Logic', 'Python', 'PDF.js', 'Ontology', 'People Data Labs'],
    color: '#2F6F73',
    assetsBase: '/projects/talentradar',
    demoVideo: 'https://youtu.be/aSHw1Lkzvpo',
    architectureImage: '/projects/talentradar/architecture.jpg',
    sourceCode: '#',
    resources: [],
    detail: {
      headline: 'An AI-powered job search intelligence platform on Palantir Foundry for international students navigating the US job market.',
      overview:
        'TalentRadar replaces blind job applications with a data-driven workflow for fit, sponsorship signal, networking, and outreach. Built entirely on Palantir Foundry, it combines live ATS job ingestion, ontology-backed candidate and job objects, AI match scoring, contact discovery, and personalized outreach drafting into a two-minute workflow for F1-OPT and international students.',
      achievement:
        'The main achievement is turning a fragmented, hours-long job search process into one integrated Foundry workflow: 3,600+ live roles from 35+ companies, resume-derived candidate profiles, ranked job matches, warm contact discovery, and ready-to-send outreach drafts.',
      architecture:
        'TalentRadar runs on Palantir Foundry. A Python ingestion pipeline detects each target company\'s ATS provider across Lever, Greenhouse, and Ashby, pulls live jobs through their APIs, and writes structured Job objects into the Foundry ontology. Candidate profiles are created from uploaded resumes using PDF.js and the extractResumeInfo AIP Logic function. The matchScorer and outreachDrafter AIP Logic functions operate over Candidate, Job, MatchScore, and Contact ontology objects, while People Data Labs powers contact discovery for alumni, previous-company connections, and engineers at the target company.',
      demo:
        'The demo shows a user moving from resume upload and company search to ranked job matches, visa-aware recommendations, discovered contacts, and a personalized LinkedIn outreach draft.',
      docs: [
        'Palantir Foundry ontology for Jobs, Candidates, MatchScores, and Contacts',
        'Python ATS ingestion across Lever, Greenhouse, Ashby, and custom web scraper',
        'Resume parsing with PDF.js and extractResumeInfo AIP Logic',
        'Parallel match scoring with skill gaps, visa compatibility, and Apply, Stretch, or Skip recommendations',
        'People Data Labs contact discovery for alumni, previous-company ties, and target-company engineers',
        'Personalized LinkedIn outreach generation with outreachDrafter',
      ],
      docDetails: {
        'Palantir Foundry ontology for Jobs, Candidates, MatchScores, and Contacts': [
          'TalentRadar\'s ontology is the backbone of the platform: four interconnected object types that store, relate, and serve all data flowing through the system.',
          'Job is the primary object type, ingested continuously from major companies across ATS platforms. Each object stores title, company, location, department, description, visa sponsorship, ATS source, work type, and job ID. The job URL is used as the primary key, which keeps pipeline reruns idempotent and prevents duplicate postings.',
          'Candidate stores the job seeker profile: name, skills, resume text, preferred roles, preferred locations, visa status, and years of experience. matchScorer and outreachDrafter both read from this object, so updating a profile immediately affects future scoring and outreach.',
          'MatchScore caches AI results with score, recommendation, skill overlap, skill gaps, title match, location match, visa flag, and job ID. Contact stores discovered people from People Data Labs, including role, company, category, LinkedIn URL, school overlap, and relevance score.',
          'The main tradeoff is strict primary-key matching on job URLs and fallback handling for Foundry datasource suffixes. The benefit is a clean ontology model that can support future Workshop dashboards and analytics without schema changes.',
        ],
        'Python ATS ingestion across Lever, Greenhouse, Ashby, and custom web scraper': [
          'The job_discovery.py pipeline is built to cover standard ATS APIs and proprietary job boards. It auto-detects the ATS for each company and falls back to a custom scraper when no supported ATS endpoint is available.',
          'For each company, the pipeline probes Lever, Greenhouse, then Ashby. The first endpoint returning a valid response is used, so adding a new company usually means adding its name to a list instead of writing company-specific ingestion logic.',
          'For proprietary careers pages, a Firecrawl-powered scraper extracts listings and normalizes them into the same schema as ATS-sourced roles. That keeps TalentRadar from being limited to only companies using Lever, Greenhouse, or Ashby.',
          'All sources are normalized into job ID, title, company, location, department, description, requirements, work type, visa sponsorship, ATS source, and fetched timestamp. HTML-heavy descriptions are cleaned before storage.',
          'Visa sponsorship is inferred from explicit language in each description. Positive sponsorship phrases map to YES, restrictive language maps to NO, and everything else is UNCLEAR so users see honest signal rather than false certainty.',
        ],
        'Resume parsing with PDF.js and extractResumeInfo AIP Logic': [
          'Resume parsing uses client-side text extraction followed by server-side AI structuring in Palantir AIP Logic.',
          'When a user uploads a resume PDF, PDF.js runs in the browser, reads the file as an ArrayBuffer, iterates through the pages, and concatenates text content into one resume string. That text is saved to the Candidate object through updateCandidateProfile.',
          'extractResumeInfo then reads candidate.resume_text and returns a typed struct with skills, recommended titles, education, and previousCompany. The React frontend uses that result to auto-populate profile fields without manual entry.',
          'Running the LLM step through AIP Logic keeps credentials server-side, provides audit logging, and lets the extraction logic evolve independently of the frontend.',
          'The result is a resume-to-profile flow that fills skills, target roles, education, and recent employer in under 10 seconds.',
        ],
        'Parallel match scoring with skill gaps, visa compatibility, and Apply, Stretch, or Skip recommendations': [
          'Match scoring is the core intelligence layer. Every eligible job is scored against the candidate profile through matchScorer, then cached in the Foundry ontology for instant repeat searches.',
          'Before any AI call, TalentRadar applies hard filters: jobs that explicitly reject sponsorship are removed, jobs outside preferred locations are removed unless remote, and senior roles are removed for candidates with too little experience.',
          'matchScorer takes a Candidate object and Job object and returns score, recommendation, skill overlap, skill gaps, title match, location match, experience match, and visa flag. It reads the full resume and job description for role-specific scoring rather than shallow keyword matching.',
          'Jobs are scored in parallel batches of five with Promise.all. The UI updates progress as each batch completes and re-sorts results by score, so the strongest roles surface before the full scoring run finishes.',
          'Scores are saved as MatchScore objects keyed by job ID. Cached scores load instantly on later searches, while a force-rescore path can bypass the cache and overwrite stale results after a profile change. Scores 7+ map to Apply, 5-6 to Stretch, and below 5 to Skip.',
        ],
        'People Data Labs contact discovery for alumni, previous-company ties, and target-company engineers': [
          'Contact discovery turns cold outreach into warmer outreach by finding people with a real connection to the candidate before a message is drafted.',
          'TalentRadar runs three People Data Labs searches for each target company: alumni from the candidate\'s university, people who previously worked at the candidate\'s last employer, and general engineers at the company as a fallback.',
          'Queries use PDL Elasticsearch syntax against job_company_website, such as palantir.com, instead of company name. That avoids false matches and gives cleaner results for companies with similar names.',
          'Results are deduplicated by PDL person ID and kept in priority order: alumni first, previous-company connections second, engineers third. Each contact receives a category badge so the user understands why that person was surfaced.',
          'Contacts are saved as Contact objects through createContact. Repeat company visits load contacts from Foundry instead of calling PDL again, saving API credits and reducing lookup latency.',
        ],
        'Personalized LinkedIn outreach generation with outreachDrafter': [
          'outreachDrafter generates LinkedIn messages that are specific to the role, the recipient, and the candidate\'s actual background.',
          'The function takes Candidate, Contact, and Job objects as inputs and returns a structured draft with subject, greeting, opening line, optional alumni line, four fit points, and closing.',
          'If the contact is tagged as an alum, the draft includes a short shared-school acknowledgment. If there is no alumni connection, that line is omitted rather than forced.',
          'The four fit points are generated from the job description and resume text. Each point references a concrete project or metric and connects it to a stated job requirement, avoiding generic lines like simply claiming strong Python skills.',
          'The UI presents the message with Copy and Open LinkedIn actions side by side, turning job discovery, contact selection, and a ready-to-send message into a workflow that can be completed in under two minutes.',
        ],
      },
    },
};

export const projects = [
  {
    id: 4,
    slug: 'projectcerebro',
    title: 'ProjectCerebro',
    date: 'May 2026',
    repo: 'https://github.com/JANARDHANAREDDYMS/projectcerebro',
    description:
      'Built a real-time cross-hardware EEG Brain-Computer Interface that decodes left hand, right hand, and rest motor imagery signals with Spark, MNE, PyTorch, Kafka, and LangGraph agents.',
    bullets: [
      'Processed 162 subjects and 36,586 labeled epochs from three independent EEG hardware platforms into a unified 5-channel, 512-sample epoch format using Apache Spark, MNE, and Delta Lake.',
      'Achieved 73.9% mean macro-F1 across all 9 BCI IV-2a test subjects after 50 calibration trials per class, a 27-point improvement over zero-shot transfer and the project\'s strongest result.',
      'Reached up to 87% accuracy on high-quality signal subjects and rescued near-zero right-hand recall cases to 62-67% F1 after brief subject-specific calibration.',
      'Built a seven-layer real-time system with Kafka streaming, FastAPI inference, MLflow tracking, polyglot storage, and six LangGraph agents for quality, prediction, monitoring, curation, HPO, and reporting.',
    ],
    tech: ['PyTorch', 'Spark', 'Delta Lake', 'FastAPI', 'LangGraph', 'Kafka', 'MLflow', 'pgvector'],
    color: '#5B5F97',
    assetsBase: '/projects/projectcerebro',
    demoVideo: 'https://youtu.be/gODvKyDaOHo',
    architectureImage: '/projects/projectcerebro/projectcerebro_architecture.html',
    pipelineDiagram: '/projects/projectcerebro/spark_pipeline_diagram_1.html',
    sourceCode: 'https://github.com/JANARDHANAREDDYMS/projectcerebro',
    documentation: '/projects/projectcerebro/main.pdf',
    resources: [
      {
        label: 'Source Code',
        href: 'https://github.com/JANARDHANAREDDYMS/projectcerebro',
        description: 'GitHub repository for the ProjectCerebro implementation.',
      },
      {
        label: 'Architecture Diagram',
        href: '/projects/projectcerebro/projectcerebro_architecture.html',
        description: 'Interactive ProjectCerebro system architecture diagram.',
      },
      {
        label: 'Spark Pipeline',
        href: '/projects/projectcerebro/spark_pipeline_diagram_1.html',
        description: 'Interactive diagram for the EEG Spark and Delta Lake processing pipeline.',
      },
      {
        label: 'Project Documentation',
        href: '/projects/projectcerebro/main.pdf',
        description: 'ProjectCerebro report and detailed technical documentation.',
      },
    ],
    detail: {
      headline: 'A production-grade real-time EEG Brain-Computer Interface that generalizes motor-imagery decoding across different EEG hardware platforms.',
      overview:
        'ProjectCerebro decodes left hand, right hand, and rest motor imagery from EEG brain signals in real time. The system spans raw EEG acquisition, distributed preprocessing, deep learning, few-shot subject adaptation, agentic AI, and live streaming inference across PhysioNet EEGMMIDB, BCI Competition IV-2a, and Cho 2017 datasets. Across these three hardware platforms, it processes 162 subjects and 36,586 labeled epochs through a unified Spark and MNE pipeline.',
      achievement:
        'The key achievement is cross-hardware transfer learning: a pretrained ShallowConvNet transfers to unseen subjects from a different EEG device with 50.4% macro-F1 zero-shot, then reaches 73.9% mean macro-F1 across all 9 BCI IV-2a test subjects after only 50 calibration trials per class. That is a 27 percentage point improvement, with up to 87% accuracy on high-quality signal subjects.',
      architecture:
        'ProjectCerebro uses a seven-layer architecture: MNE and Spark preprocessing, Delta Lake versioned epoch storage, MongoDB/Cassandra/Redis/pgvector polyglot storage, EEGNet and ShallowConvNet training, FastAPI inference, Kafka streaming, and six LangGraph agents for signal quality, prediction, session monitoring, data curation, HPO advice, and report generation.',
      demo:
        'The Spark pipeline diagram shows how raw EEG data moves through preprocessing, epoch generation, Delta Lake storage, model-ready feature preparation, and downstream inference workflows.',
      docs: [
        'Cross-hardware transfer learning and few-shot subject adaptation',
        '162-subject EEG corpus across PhysioNet, BCI IV-2a, and Cho 2017',
        'Two-stage Spark and MNE preprocessing pipeline',
        'Delta Lake epoch storage and polyglot operational storage',
        'EEGNet, ShallowConvNet, MLflow, and reproducible evaluation',
        'Kafka, FastAPI, LangGraph agents, and sub-500ms live inference',
      ],
    },
  },
  {
    id: 5,
    slug: 'lead-ai',
    title: 'Lead AI',
    date: 'TBD',
    repo: 'https://github.com/JANARDHANAREDDYMS/LeadAI',
    description:
      'Built an inbound lead enrichment and automation platform for EliseAI sales teams that researches prospects, scores ICP fit across five dimensions, and generates personalized outreach in under 90 seconds.',
    bullets: [
      'Automated SDR research across ICP qualification, current pain signals, and personalized first-touch outreach, reducing a roughly 45-minute manual workflow to under 90 seconds.',
      'Integrated 8 public APIs including Exa AI, SEC EDGAR, Adzuna Jobs, Census ACS, FRED, HUD Fair Market Rents, NewsAPI, and WalkScore for company, market, property, and hiring intelligence.',
      'Built 7 LangGraph agents for identity, company, market, property, values, scoring, and outreach, including a Claude Sonnet tool-calling loop that plans and stops its own company research.',
      'Shipped a full-stack system with FastAPI, React + Vite, PostgreSQL, SSE live streaming, APScheduler, and 16 representative test leads across target and disqualified segments.',
    ],
    tech: ['FastAPI', 'LangGraph', 'PostgreSQL', 'React', 'Vite'],
    color: '#8A5A44',
    assetsBase: '/projects/lead-ai',
    demoVideo: 'https://youtu.be/HjB5horbqjc',
    architectureImage: '/projects/lead-ai/leadOS_system_architecture_v2.svg',
    pipelineDiagram: '/projects/lead-ai/leadOS_pipeline_animated.html',
    sourceCode: 'https://github.com/JANARDHANAREDDYMS/LeadAI',
    documentation: '/projects/lead-ai/LeadAI-WriteupSubmission-Janrdhan.pdf',
    resources: [
      {
        label: 'Source Code',
        href: 'https://github.com/JANARDHANAREDDYMS/LeadAI',
        description: 'GitHub repository for the Lead AI implementation.',
      },
      {
        label: 'Architecture Diagram',
        href: '/projects/lead-ai/leadOS_system_architecture_v2.svg',
        description: 'System architecture diagram covering the frontend, backend, LangGraph pipeline, PostgreSQL, and external APIs.',
      },
      {
        label: 'Lead Enrichment Pipeline',
        href: '/projects/lead-ai/leadOS_pipeline_animated.html',
        description: 'Animated HTML diagram for the Lead AI enrichment pipeline.',
      },
      {
        label: 'Project Documentation',
        href: '/projects/lead-ai/LeadAI-WriteupSubmission-Janrdhan.pdf',
        description: 'Full Lead AI project writeup and submission document.',
      },
    ],
    detail: {
      headline: 'An inbound lead enrichment platform that turns sparse lead data into scored, researched, personalized outreach.',
      overview:
        'LeadAI starts with basic lead information such as name, email, company, and property address, then researches the prospect, verifies whether the company fits EliseAI\'s residential property management ICP, identifies relevant operating pain, and drafts a personalized first email grounded in verifiable public signals.',
      architecture:
        'LeadAI has four layers working together: a React frontend, a FastAPI backend with PostgreSQL, a LangGraph pipeline orchestrator, and 8 external public APIs for company, market, jobs, property, economic, rent, news, and walkability intelligence.',
      demo:
        'The pipeline diagram shows how a lead flows through enrichment, agent research, scoring, and outreach generation with live progress streaming back to the UI.',
      docs: [
        'Inbound lead intake and enrichment workflow',
        'ICP qualification for residential property management',
        'Pain research using public market, hiring, news, and property signals',
        'LangGraph multi-agent orchestration and Claude tool-calling loop',
        'Five-dimension fit scoring and outreach generation',
        'Production upgrade path from free-tier APIs',
      ],
    },
  },
  {
    id: 6,
    slug: 'paradecam',
    title: 'Parade Cam',
    date: 'Jun 2026',
    repo: '#',
    description:
      'Built a Knicks parade camera viewer after I could not find a good place to watch the parade online, using NYC traffic camera feeds so my friend and I could follow the route live.',
    bullets: [
      'Created a standalone live-viewing page at janardhanr.com/paradecam with a main camera, secondary camera strip, route map, clock, and event status indicator.',
      'Integrated NYC traffic camera image endpoints with automatic cache-busting refreshes, error states, and retry behavior for unreliable live camera feeds.',
      'Mapped parade-adjacent camera locations with Leaflet, letting viewers switch feeds from either the map markers or the secondary camera panels.',
      'Designed a Knicks-themed responsive interface with desktop and mobile backgrounds, zoom and pan controls, and quick visual context for each selected camera.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Leaflet', 'NYC DOT'],
    color: '#006BB6',
    assetsBase: '/paradecam',
    demoVideo: '/paradecam/index.html',
    pipelineDiagram: '/paradecam/index.html',
    sourceCode: '#',
    liveUrl: 'https://janardhanr.com/paradecam/',
    resources: [
      {
        label: 'Live App',
        href: 'https://janardhanr.com/paradecam/',
        description: 'Standalone Knicks Parade Cam viewer using NYC traffic camera feeds.',
      },
    ],
    detail: {
      headline: 'A quick-build live camera hub for watching the Knicks parade through NYC traffic cameras.',
      overview:
        'Parade Cam came from a practical problem: I could not find a reliable place to watch the Knicks parade online, so I built a small web app that let me and my friend follow the route through NYC traffic camera feeds. The page combines live-refreshing camera images, a route map, camera switching, and Knicks-themed event UI into one shareable link.',
      achievement:
        'The main win was speed and usefulness: a standalone viewer that turned scattered NYC DOT camera endpoints into one simple parade-watching experience at janardhanr.com/paradecam.',
      architecture:
        'Parade Cam is a static HTML, CSS, and JavaScript app served from the portfolio public directory. It uses Leaflet for the map, predefined NYC traffic camera endpoints for live images, timed refreshes for current frames, and client-side state to switch the main feed, update secondary feeds, and handle camera load errors.',
      demo:
        'The embedded app shows the full Parade Cam experience: a main camera feed, secondary cameras, parade route map, live status, camera labels, and zoom controls.',
      docs: [
        'NYC traffic camera feed integration',
        'Leaflet route map and camera markers',
        'Main and secondary camera switching',
        'Auto-refresh, cache busting, and retry behavior',
        'Knicks-themed responsive event interface',
        'Standalone static deployment under /paradecam',
      ],
    },
  },
  {
    id: 1,
    slug: 'code-sensei',
    title: 'Code Sensei',
    date: 'May 2025',
    repo: 'https://github.com/JANARDHANAREDDYMS/CodeSensei',
    description:
      'Built an agentic AI-powered interview platform that generates personalized technical assessments by reasoning over user prompts and historical performance, using multi-agent LLM workflows with explicit role separation, contextual memory, and constrained generation.',
    bullets: [
      'Designed end-to-end CI/CD pipelines using AWS CodePipeline and CodeBuild to automatically test, build Docker images, and deploy Django microservices to EKS.',
      'Created a context-aware hinting and code execution system using ECS Fargate, combining tool-calling LLM agents with isolated execution environments to support 10,000+ concurrent users.',
    ],
    tech: ['MCP', 'DynamoDB', 'OpenSearch', 'EKS', 'ECS'],
    color: '#E63946',
    assetsBase: '/projects/code-sensei',
    demoVideo: '/projects/code-sensei/demo.mp4',
    architectureImage: '/projects/code-sensei/architecture.png',
    sourceCode: 'https://github.com/JANARDHANAREDDYMS/CodeSensei',
    detail: {
      headline: 'An agentic technical interview platform with isolated execution and personalized assessment flows.',
      overview: 'Placeholder overview for the Code Sensei project case study.',
      architecture: 'Placeholder architecture notes for the web app, agent workflows, execution service, search, persistence, and deployment pipeline.',
      demo: 'Placeholder for a working demo video.',
      docs: ['Assessment generation', 'Code execution sandboxing', 'Hinting workflow', 'Deployment and scaling notes'],
    },
  },
  talentRadarProject,
  {
    id: 2,
    slug: 'nyu-enrolls',
    title: 'NYU Enrolls',
    date: 'Dec 2025',
    repo: 'https://github.com/JANARDHANAREDDYMS/nyuenrolls',
    description:
      'Developed and optimized a course enrollment system using Django and PostgreSQL, incorporating natural language search, resulting in 30% faster enrollment processing.',
    bullets: [
      'Integrated data analytics pipelines using Pandas and scikit-learn on pre-registration data, enabling administrators to adjust 100+ courses per semester.',
      'Improved system scalability through Docker-based containerization and orchestration with AWS EKS, supporting 10,000+ concurrent users.',
      'Resolved correctness issues in the waitlisting system using a priority queue-based approach and collaborated with NYU IT to integrate the solution.',
    ],
    tech: ['Django', 'PostgreSQL', 'AWS EKS', 'Docker', 'GCP', 'Pandas', 'scikit-learn'],
    color: '#457B9D',
    assetsBase: '/projects/nyu-enrolls',
    demoVideo: '/projects/nyu-enrolls/demo.mp4',
    architectureImage: '/projects/nyu-enrolls/architecture.png',
    sourceCode: 'https://github.com/JANARDHANAREDDYMS/nyuenrolls',
    detail: {
      headline: 'A scalable enrollment platform with search, waitlisting, analytics, and administrative tooling.',
      overview: 'Placeholder overview for the NYU Enrolls project case study.',
      architecture: 'Placeholder architecture notes for Django services, PostgreSQL, analytics jobs, deployment, and integration points.',
      demo: 'Placeholder for a working demo video.',
      docs: ['Enrollment workflow', 'Waitlist correctness', 'Search and analytics', 'Deployment notes'],
    },
  },
  {
    id: 3,
    slug: 'crowd-monitoring-system',
    title: 'Crowd Monitoring System',
    date: 'May 2024',
    repo: 'https://github.com/JANARDHANAREDDYMS/yoloposemodel',
    description:
      'Developed a deep learning system for crowd monitoring at college events by fine-tuning YOLOPosev8 on biased datasets, achieving 90% mAP@0.5 for human detection.',
    bullets: [
      'Designed an automated homography pipeline, improving inter-person distance accuracy by 30% via 3D-to-2D scene mapping.',
      'Enhanced crowd monitoring by integrating real-time alerts and generating density maps to monitor violations per event.',
    ],
    tech: ['PyTorch', 'OpenCV', 'YOLOPose', 'Homography', 'DeepSORT'],
    color: '#2A9D8F',
    assetsBase: '/projects/crowd-monitoring-system',
    demoVideo: '/projects/crowd-monitoring-system/demo.mp4',
    architectureImage: '/projects/crowd-monitoring-system/architecture.png',
    sourceCode: 'https://github.com/JANARDHANAREDDYMS/yoloposemodel',
    detail: {
      headline: 'A computer vision system for event crowd density, distancing, and alert monitoring.',
      overview: 'Placeholder overview for the Crowd Monitoring System case study.',
      architecture: 'Placeholder architecture notes for video ingestion, pose detection, tracking, homography mapping, density analytics, and alerts.',
      demo: 'Placeholder for a working demo video.',
      docs: ['Model training', 'Tracking pipeline', 'Homography calibration', 'Alerting workflow'],
    },
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
