export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export interface Project {
  title: string;
  role: string;
  dateRange: string;
  description: string;
  metrics: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: "Medico — AI Medical Assistant Chatbot",
    role: "Gen AI Engineer",
    dateRange: "Jun 2026 – Jul 2026",
    description:
      "Production RAG assistant that ingests 100+ page medical PDFs and answers questions grounded strictly in retrieved evidence. Built end-to-end with a FastAPI backend, Pinecone vector store, and Streamlit UI — containerized with Docker and deployed on Render.",
    metrics: [
      "1,000+ indexed chunks",
      "~40% better retrieval accuracy",
      "~60% fewer hallucinations",
      "<3s response time",
    ],
    tags: ["LangChain", "FastAPI", "Pinecone", "Groq", "Streamlit", "Docker", "Render"],
    githubUrl: "https://github.com/krishcode11",
    liveUrl: "https://medico-docker-version-1.onrender.com/",
  },
  {
    title: "BrandGuardian AI — Multimodal LLMOps Compliance Platform",
    role: "Gen AI Engineer",
    dateRange: "Jun 2026 – Jul 2026",
    description:
      "Multimodal compliance auditing platform combining transcript analysis, OCR, and semantic retrieval across a 6-stage LangGraph workflow. Integrates Azure Video Indexer and Azure AI Search with full OpenTelemetry tracing for production observability.",
    metrics: [
      "1,000+ policy chunks indexed",
      "<3 min report generation",
      "6+ orchestrated workflow stages",
      "Full OpenTelemetry tracing",
    ],
    tags: ["Azure OpenAI", "Azure AI Search", "Azure Video Indexer", "LangGraph", "FastAPI", "OpenTelemetry"],
    githubUrl: "https://github.com/krishcode11",
    liveUrl: "https://github.com/krishcode11/LLMOPS-Project",
  },
  {
    title: "AgentFlow — Multi-Agent Research Assistant",
    role: "Agentic AI Engineer",
    dateRange: "May 2026 – Jun 2026",
    description:
      "4-agent research system that autonomously researches, analyzes, writes, and self-critiques reports using graph-based execution. Powered by Gemini 2.5 Flash Lite and Tavily search, generating comprehensive reports in under 2 minutes.",
    metrics: [
      "50+ sources per run",
      "<2 min report generation",
      "80%+ less manual research time",
    ],
    tags: ["LangGraph", "LangChain", "Gemini 2.5 Flash Lite", "Tavily", "Streamlit"],
    githubUrl: "https://github.com/krishcode11",
    liveUrl: "https://multi-agent-ai-research-system.streamlit.app/",
  },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "SQL"],
  },
  {
    category: "LLMs & Generative AI",
    skills: ["Gemini API", "OpenAI SDK", "Groq API", "Prompt Engineering", "Function Calling"],
  },
  {
    category: "Agentic AI",
    skills: ["LangGraph", "Multi-Agent Systems", "ReAct Pattern", "Tool Calling", "Agent Orchestration"],
  },
  {
    category: "RAG & Search",
    skills: ["RAG Architecture", "Semantic Search", "Embeddings", "Vector Search", "Chunking"],
  },
  {
    category: "Frameworks",
    skills: ["LangChain", "FastAPI", "Streamlit"],
  },
  {
    category: "Databases",
    skills: ["Pinecone", "Azure AI Search"],
  },
  {
    category: "Infra & Tools",
    skills: ["Docker", "Git", "GitHub", "Render", "Azure"],
  },
];

export interface Experience {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  highlights?: string[];
  techStack?: string[];
}

export const experienceData: Experience[] = [
  {
    title: "Self-Directed AI Engineering Path",
    subtitle: "Independent",
    period: "2024 – Present",
    description:
      "Transitioned into Generative AI and Agentic AI engineering through intensive self-study and shipping production projects. Built complete end-to-end systems covering RAG pipelines, multi-agent orchestration, vector search, and cloud deployment.",
    highlights: ["Medico — AI Medical Assistant Chatbot", "BrandGuardian AI — LLMOps Compliance Platform", "AgentFlow — Multi-Agent Research Assistant"],
  },
  {
    title: "Analyst",
    subtitle: "Business & Data Operations (Delhi NCR)",
    period: "2021 – 2022",
    description:
      "Drove data-backed decision-making by architecting analytical reporting workflows, managing cross-functional stakeholder requirements, and transforming raw operational data into actionable business intelligence.",
    highlights: [
      "Engineered automated MIS reporting dashboards, aggregating complex datasets to deliver high-level business intelligence to management and stakeholders.",
      "Conducted extensive data cleaning, validation, and transformation processes, ensuring high data integrity for critical operational metrics.",
      "Collaborated cross-functionally with clients and internal teams to gather and translate business requirements into technical reporting deliverables.",
      "Optimized existing reporting workflows, improving process efficiency and establishing robust systems for tracking key performance indicators (KPIs).",
      "Leveraged advanced analytical functions (VLOOKUP, XLOOKUP, Power Query) to synthesize large datasets and surface actionable business insights."
    ],
    techStack: ["Data Analysis", "SQL", "Power Query", "Excel", "MIS Reporting", "Business Analysis"],
  },
  {
    title: "Guru Gobind Singh Indraprastha University",
    subtitle: "Healthcare Technology & Image Processing",
    period: "2022 – 2024",
    description:
      "Coursework in healthcare technology and image processing before transitioning to software and AI engineering.",
  },
];
