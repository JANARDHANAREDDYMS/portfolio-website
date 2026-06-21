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
    demoVideo: '/projects/projectcerebro/spark_pipeline_diagram_1.html',
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
    demoVideo: '/projects/lead-ai/leadOS_pipeline_animated.html',
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
    resources: [
      {
        label: 'Live App',
        href: '/paradecam/',
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
