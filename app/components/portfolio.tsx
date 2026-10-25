"use client";

import {
  Activity,
  ArrowDownToLine,
  ArrowRight,
  Award,
  Blocks,
  BriefcaseBusiness,
  Braces,
  Bug,
  ChevronDown,
  ChevronRight,
  Cloud,
  Code2,
  Command,
  Cpu,
  Database,
  ExternalLink,
  FileCode2,
  FileText,
  Files,
  Folder,
  FolderOpen,
  GitBranch,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  Sun,
  Moon,
  UserRound,
  Workflow,
  X,
} from "lucide-react";
import Image from "next/image";
import {
  type SimpleIcon,
  siDocker,
  siFastapi,
  siJavascript,
  siLangchain,
  siLanggraph,
  siModelcontextprotocol,
  siNodedotjs,
  siOpentelemetry,
  siOpenapiinitiative,
  siPostgresql,
  siPython,
  siReact,
  siSplunk,
  siSqlalchemy,
  siTypescript,
} from "simple-icons";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  FormEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type View = "home" | "experience" | "projects" | "personal" | "skills" | "education" | "contact";

const github = "https://github.com/mahadev555";
const linkedin = "https://linkedin.com/in/mahadev-manerikar-7636a3207/";
const email = "mahadevmanerikar@gmail.com";
const phone = "+91 75883 73045";
const resume = "https://drive.google.com/uc?export=download&id=1011Ux6wUpv64ZsXen868oc-OV8gLo9Gz";
const formspreeEndpoint = "https://formspree.io/f/xnjqvrdg";

const views: { id: View; label: string; file: string; icon: typeof FileText }[] = [
  { id: "home", label: "Home", file: "me.md", icon: FileText },
  { id: "skills", label: "Skills", file: "skills.md", icon: Braces },
  { id: "experience", label: "Experience", file: "experience.md", icon: BriefcaseBusiness },
  { id: "projects", label: "Work Projects", file: "work-projects.tsx", icon: FileCode2 },
  { id: "personal", label: "Personal", file: "personal-projects.tsx", icon: Github },
  { id: "education", label: "Education", file: "education.md", icon: GraduationCap },
  { id: "contact", label: "Contact", file: "contact.md", icon: Mail },
];

const featuredProjects = [
  {
    title: "Content Discovery Workflow",
    icon: Workflow,
    color: "#b6ad9d",
    description:
      "Production content discovery workflow for an agentic recommendation platform, with optimized response time and measured search quality.",
    tags: ["LangChain", "Azure AI Search", "Cosmos DB"],
    impact: "15s → 6s response time",
    view: "projects" as View,
  },
  {
    title: "Continuum Control Plane",
    icon: Network,
    color: "#ce9178",
    description:
      "Multi-agent ServiceNow incident automation connecting support teams with Splunk signals and specialist agents.",
    tags: ["LangGraph", "MCP", "WebSockets"],
    impact: "Orchestrated incident workflows",
    view: "projects" as View,
  },
  {
    title: "DocVision-RAG",
    icon: Layers3,
    color: "#c586c0",
    description:
      "Multimodal retrieval for diagrams and screenshots, returning grounded answers with source pages and images.",
    tags: ["Multimodal RAG", "Vision", "SSE"],
    impact: "Searchable visual knowledge",
    view: "personal" as View,
  },
  {
    title: "Agent Orchestration Platform",
    icon: Cpu,
    color: "#4ec9b0",
    description:
      "Multi-user platform where database configurations become shareable, live agents and teams without redeployment.",
    tags: ["Agno", "FastAPI", "SSE"],
    impact: "Agents configured as data",
    view: "personal" as View,
  },
];

const experienceStages = [
  {
    title: "AI Engineer",
    summary: "Build production multi-agent and RAG systems on Azure. Focus on orchestration, search quality, evaluation, observability, and performance—reducing a workflow response from 15 seconds to 6 seconds and search hallucinations from 8.2% to 2.2%.",
    organization: "Equations Work · Pune",
    dates: "OCT 2024 — PRESENT",
    color: "#4ec9b0",
    icon: Sparkles,
    current: true,
    highlights: [
      "Moved the AVS Content Discovery Workflow from hosted agents to merged LangChain agents, reducing response time from 15 seconds to 6 seconds.",
      "Built agent evaluation and hallucination measurement; reduced the search tool hallucination rate from 8.2% to 2.2%.",
      "Designed specialist-agent orchestration for incident analysis, ServiceNow automation, and live chat streaming.",
      "Resolved production API timeouts at million-record scale with cursor-based pagination.",
    ],
    technologies: ["LangGraph", "Azure AI Foundry", "FastAPI", "MCP", "Azure AI Search"],
  },
  {
    title: "Trainee Software Engineer",
    summary: "Built Azure AI Foundry agents and Logic Apps integrations, and delivered proof-of-concept work for sales coaching and real-time vehicle tracking.",
    organization: "Equations Work · Pune",
    dates: "MAR 2024 — OCT 2024",
    color: "#c586c0",
    icon: Code2,
    current: false,
    highlights: [
      "Built three Azure AI Foundry agents for a sales coaching proof of concept.",
      "Connected Dynamics 365 and SQL Server workflows using Azure Logic Apps.",
      "Developed a real-time vehicle monitoring proof of concept with live tracking and PostgreSQL zone-duration logic.",
    ],
    technologies: ["Python", "Azure AI Foundry", "Logic Apps", "PostgreSQL"],
  },
];

const personalProjects = [
  {
    title: "agno-agents-hub",
    subtitle: "Agent Orchestration Platform",
    image: "https://opengraph.githubassets.com/dfe72cd25895ad9c62fa87b1970135f6a02bb01f3a8d0766bcb00201a8ced070/Mahadev555/agno-agents-hub",
    imageAlt: "GitHub link preview for the agno-agents-hub repository",
    repository: `${github}/agno-agents-hub`,
    repositoryLabel: "View repository",
    description:
      "A multi-user platform where agent and team configurations live in a database and become runnable at request time, without redeploying.",
    details: [
      "Users configure agent roles, instructions, tools, and model settings, then compose teams with a coordinator and ordered members.",
      "Runs execute outside the HTTP request and stream output over SSE; status, token usage, duration, and ownership are tracked.",
    ],
    tags: ["Agno", "FastAPI", "SSE", "Multi-user"],
  },
  {
    title: "DocVision-RAG",
    subtitle: "Multimodal document search",
    image: "https://opengraph.githubassets.com/ea9ac47463fc85a99cdee444528feca721f883ec789f203f33c698b52f61c355/Mahadev555/docvision-rag",
    imageAlt: "GitHub link preview for the docvision-rag repository",
    repository: `${github}/docvision-rag`,
    repositoryLabel: "View repository",
    description:
      "A RAG platform that makes PDF diagrams, flowcharts, and screenshots searchable alongside document text.",
    details: [
      "Converts PDFs to Markdown, analyzes extracted images with a vision model, and places image analysis back in its original context.",
      "Uses header-aware chunking and cosine vector search to return cited pages and source images.",
    ],
    tags: ["Python", "Vision models", "RAG", "Async ingestion"],
  },
  {
    title: "ServiceNow MCP Server",
    subtitle: "Agent-ready ticket workflows",
    image: "https://opengraph.githubassets.com/88d40f9a1da5978e81c0b70acb969c3acaf004c2316bdb3ae56268b72bce587a/Mahadev555/servicenow-mcp",
    imageAlt: "GitHub link preview for the ServiceNow MCP repository",
    repository: `${github}/servicenow-mcp`,
    repositoryLabel: "View repository",
    description:
      "An MCP server that gives AI assistants tools to retrieve and update ServiceNow incidents, with both stdio and SSE transports.",
    details: [
      "Provides incident lookup and update tools through local stdio integration or an HTTP-based SSE server.",
    ],
    tags: ["MCP", "ServiceNow", "SSE", "Python"],
  },
  {
    title: "Ingress AI",
    subtitle: "Unified LLM gateway",
    image: "https://opengraph.githubassets.com/61040350260dc38c20f717f514d44e59b38224028752f55ab92e4120ce3f476d/Mahadev555/ingress-ai",
    imageAlt: "GitHub link preview for the Ingress AI repository",
    repository: `${github}/ingress-ai`,
    repositoryLabel: "View repository",
    description:
      "An OpenAI-compatible gateway that routes requests across LLM providers through one API, without changing client code.",
    details: [
      "Routes models across providers with retries and automatic failover, plus caching and rate limits.",
      "Uses virtual keys and records token usage and costs in a shared ledger.",
    ],
    tags: ["LLM Gateway", "OpenAI-compatible API", "Routing", "Cost tracking"],
  },
];

const workProjects = [
  {
    title: "Content Discovery Workflow",
    description: "Production agent workflow for personalized content recommendations.",
    details: [
      "Moved from hosted agents to a merged LangChain architecture, reducing response time from 15 seconds to 6 seconds.",
      "Built agent evaluation and hallucination measurement, reducing the search tool hallucination rate from 8.2% to 2.2%.",
      "Added semantic search, language-based index selection, conversation state, and per-agent cost tracking.",
    ],
    tags: ["LangChain", "Azure AI Search", "Cosmos DB", "Application Insights"],
  },
  {
    title: "Incident Automation Platform",
    description: "Coordinated agents that help support engineers investigate and resolve cloud incidents.",
    details: [
      "Built specialist workflows for log analysis, incident similarity, root cause analysis, severity scoring, and ticket updates.",
      "Connected ServiceNow workflows through MCP services with streaming chat and operational observability.",
    ],
    tags: ["LangGraph", "MCP", "FastAPI", "WebSockets", "Azure"],
  },
  {
    title: "Enterprise Knowledge Assistant",
    description: "Hybrid retrieval assistant for enterprise documents, with automated index ingestion.",
    details: [
      "Combined vector and keyword retrieval across more than 1,000 documents to improve relevance and reduce hallucinations.",
      "Automated document ingestion and index updates with cloud functions and blob storage.",
    ],
    tags: ["RAG", "Azure AI Search", "Azure Functions", "Blob Storage"],
  },
  {
    title: "Property Intelligence Platform",
    description: "AI-assisted property and investor research with automated reporting.",
    details: [
      "Built data extraction, ETL, and ranking pipelines for financial and property insights.",
      "Automated investor-ready reports, saving more than eight hours of manual work per week.",
    ],
    tags: ["Agentic AI", "ETL", "Docker", "Azure DevOps"],
  },
  {
    title: "Sales Coaching Assistant",
    description: "A proof of concept using specialized agents to support sales coaching workflows.",
    details: [
      "Created orchestration, sentiment analysis, and email assistant agents.",
      "Connected Dynamics 365 and SQL Server data with workflow automation.",
    ],
    tags: ["Azure AI Foundry", "Logic Apps", "Dynamics 365"],
  },
  {
    title: "Real-Time Vehicle Tracking",
    description: "Live vehicle monitoring dashboard with event-driven updates and notifications.",
    details: [
      "Implemented live tracking, automated email notifications, and an event-refreshing dashboard.",
      "Added a PostgreSQL procedure to calculate time spent in each zone.",
    ],
    tags: ["PostgreSQL", "Real-time", "Dashboard"],
  },
];

const skillGroups = [
  {
    label: "AI & Agent Systems",
    icon: Cpu,
    color: "#c586c0",
    skills: [
      "LLMs",
      "Agentic & Multi-Agent Systems",
      "LangGraph",
      "LangChain",
      "MCP",
      "Microsoft Agent Framework",
      "Agno",
      "Azure AI Foundry",
      "Prompt Engineering",
      "Guardrails",
    ],
  },
  {
    label: "Retrieval & Evaluation",
    icon: Search,
    color: "#b6ad9d",
    skills: [
      "RAG",
      "Embeddings & Vector Search",
      "Azure AI Search",
      "PGVector",
      "LLM-as-a-Judge",
      "Azure AI Evaluation SDK",
      "Relevance & Groundedness",
    ],
  },
  {
    label: "Backend & Data",
    icon: Database,
    color: "#4ec9b0",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Node.js",
      "React",
      "WebSockets",
      "SSE",
      "SQLAlchemy",
      "PostgreSQL",
      "SQL Server",
      "Cosmos DB",
    ],
  },
  {
    label: "Azure & DevOps",
    icon: Cloud,
    color: "#dcdcaa",
    skills: [
      "Azure Container Apps",
      "Azure Functions",
      "Logic Apps",
      "App Service",
      "APIM",
      "Key Vault",
      "Managed Identity",
      "MSAL",
      "Blob Storage",
      "Docker",
      "Azure DevOps CI/CD",
    ],
  },
  {
    label: "Observability",
    icon: Activity,
    color: "#f08c91",
    skills: [
      "OpenTelemetry",
      "Azure Application Insights",
      "Azure Monitor",
      "Splunk",
      "Cost & Latency Tracing",
    ],
  },
  {
    label: "Languages",
    icon: Braces,
    color: "#b6ad9d",
    skills: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
];

const skillBrandIcons: Record<string, SimpleIcon> = {
  LangGraph: siLanggraph,
  LangChain: siLangchain,
  Python: siPython,
  FastAPI: siFastapi,
  "REST APIs": siOpenapiinitiative,
  "Node.js": siNodedotjs,
  React: siReact,
  SQLAlchemy: siSqlalchemy,
  PostgreSQL: siPostgresql,
  PGVector: siPostgresql,
  MCP: siModelcontextprotocol,
  Docker: siDocker,
  OpenTelemetry: siOpentelemetry,
  Splunk: siSplunk,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
};

const skillGenericIcons: Record<string, typeof Code2> = {
  "Relevance & Groundedness": ShieldCheck,
  SSE: Activity,
  "Cost & Latency Tracing": Activity,
  SQL: Braces,
};

const azureServiceLogos: Record<string, string> = {
  "Azure AI Foundry": "/skills/azure-ai-foundry.svg",
  "Azure AI Search": "/skills/azure-ai-search.svg",
  "Azure Container Apps": "/skills/azure-container-apps.svg",
  "Azure Functions": "/skills/azure-functions.svg",
  "Logic Apps": "/skills/azure-logic-apps.svg",
  "App Service": "/skills/azure-app-service.svg",
  APIM: "/skills/azure-api-management.svg",
  "Key Vault": "/skills/azure-key-vault.svg",
  "Managed Identity": "/skills/azure-managed-identities.svg",
  MSAL: "/skills/azure-msal.svg",
  "Blob Storage": "/skills/azure-blob-storage.svg",
  "Azure DevOps CI/CD": "/skills/azure-devops.svg",
  "Azure Application Insights": "/skills/azure-application-insights.svg",
  "Azure Monitor": "/skills/azure-monitor.svg",
  "Cosmos DB": "/skills/azure-cosmos-db.svg",
};

const skillAssetLogos: Record<string, string> = {
  LLMs: "/skills/llm.svg",
  "Agentic & Multi-Agent Systems": "/skills/agentic-systems.svg",
  "Microsoft Agent Framework": "/skills/microsoft-agent-framework.svg",
  Agno: "/skills/agno.png",
  "Prompt Engineering": "/skills/prompt-engineering.svg",
  "LLM-as-a-Judge": "/skills/ai-evaluation.svg",
  Guardrails: "/skills/guardrails.svg",
  RAG: "/skills/rag.svg",
  "Embeddings & Vector Search": "/skills/vector-search.svg",
  WebSockets: "/skills/websockets.svg",
  "SQL Server": "/skills/microsoft-sql-server.svg",
};

function SkillLogo({ name }: { name: string }) {
  const azureServiceLogo = azureServiceLogos[name];
  if (azureServiceLogo) {
    return <Image className="skill-logo" src={azureServiceLogo} alt="" aria-hidden="true" width={18} height={18} />;
  }

  const assetLogo = skillAssetLogos[name];
  if (assetLogo) {
    return <Image className="skill-logo skill-asset-logo" src={assetLogo} alt="" aria-hidden="true" width={18} height={18} />;
  }

  const brandIcon = skillBrandIcons[name];
  if (brandIcon) {
    return (
      <svg className="skill-logo" viewBox="0 0 24 24" aria-hidden="true">
        <path fill={brandIcon.hex === "000000" ? "#b6ad9d" : `#${brandIcon.hex}`} d={brandIcon.path} />
      </svg>
    );
  }

  const Icon = skillGenericIcons[name] ?? Code2;
  return <Icon className="skill-logo skill-generic-logo" aria-hidden="true" />;
}

const commands: { label: string; description: string; view: View }[] = [
  { label: "/projects", description: "Explore professional projects", view: "projects" },
  { label: "/personal", description: "Explore personal projects", view: "personal" },
  { label: "/experience", description: "See my experience", view: "experience" },
  { label: "/skills", description: "Browse my technical stack", view: "skills" },
  { label: "/education", description: "Education, awards & certifications", view: "education" },
  { label: "/contact", description: "Get in touch", view: "contact" },
  { label: "/home", description: "Return to portfolio overview", view: "home" },
];

const bottomTabs = ["TERMINAL", "OUTPUT", "PROBLEMS", "DEBUG CONSOLE", "PORTS", "GITLENS"] as const;
type BottomTab = (typeof bottomTabs)[number];
type TerminalEntry = { command: string; output: string[] };
const terminalHelpOutput = [
  "Available: help, clear, " + commands.map(({ label }) => label).join(", "),
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-heading">
      <div className="eyebrow">{"// "}{eyebrow}</div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function Tags({ values }: { values: string[] }) {
  return (
    <div className="tag-row">
      {values.map((tag) => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || formspreeEndpoint;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint || sending) return;
    setSending(true);
    setStatus("");
    const form = event.currentTarget;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Formspree did not accept the message.");
      form.reset();
      setSent(true);
    } catch {
      setStatus("Could not send your message right now. Please email me directly.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="project-detail contact-success" role="status">
        <h2>Thank you!</h2>
        <p>Thanks for reaching out! I’ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="project-detail contact-form" onSubmit={handleSubmit}>
      <label className="field">
        YOUR NAME
        <input name="name" autoComplete="name" placeholder="How should I address you?" required />
      </label>
      <label className="field">
        EMAIL ADDRESS
        <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
      </label>
      <label className="field">
        SUBJECT
        <input name="_subject" placeholder="Project inquiry" required />
      </label>
      <label className="field">
        MESSAGE
        <textarea name="message" placeholder="Tell me what you have in mind..." required />
      </label>
      <button className="button primary" type="submit" disabled={!endpoint || sending}>
        <Send size={13} />
        {sending ? "Sending..." : "Send message"}
      </button>
      <p className="form-status error" role="alert" aria-live="polite">
        {status}
      </p>
    </form>
  );
}

export default function Portfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeView, setActiveView] = useState<View>("home");
  const [activeBottomTab, setActiveBottomTab] = useState<BottomTab>("TERMINAL");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<TerminalEntry[]>([
    { command: "help", output: terminalHelpOutput },
  ]);
  const [openSections, setOpenSections] = useState<string[]>(["about", "experience", "projects", "skills", "contact"]);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedCommand, setSelectedCommand] = useState(0);
  const paletteInput = useRef<HTMLInputElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme-v2");
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme-v2", theme);
  }, [theme]);

  const navigate = useCallback((view: View) => {
    setActiveView(view);
    setPaletteOpen(false);
    setQuery("");
    editorRef.current?.querySelector<HTMLElement>(`#${view}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    function onKeyDown(event: globalThis.KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
      if (event.key === "Escape") setPaletteOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (paletteOpen) paletteInput.current?.focus();
  }, [paletteOpen]);

  useEffect(() => {
    const root = editorRef.current;
    if (!root) return;
    const updateActiveSection = () => {
      const marker = root.getBoundingClientRect().top + Math.min(100, root.clientHeight * 0.3);
      const sections = Array.from(root.querySelectorAll<HTMLElement>(".page-section"));
      const activeSection = sections.filter((section) => section.getBoundingClientRect().top <= marker).pop();
      if (activeSection && views.some((view) => view.id === activeSection.id)) {
        setActiveView(activeSection.id as View);
      }
    };
    root.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    return () => root.removeEventListener("scroll", updateActiveSection);
  }, []);

  const filteredCommands = useMemo(
    () => commands.filter((command) => `${command.label} ${command.description}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  function toggleSection(section: string) {
    setOpenSections((sections) =>
      sections.includes(section) ? sections.filter((item) => item !== section) : [...sections, section],
    );
  }

  function onPaletteKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedCommand((index) => Math.min(index + 1, filteredCommands.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedCommand((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && filteredCommands[selectedCommand]) {
      navigate(filteredCommands[selectedCommand].view);
    }
  }

  function onTerminalSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const command = terminalInput.trim();
    if (!command) return;

    setTerminalInput("");
    if (command.toLowerCase() === "clear") {
      setTerminalHistory([]);
      return;
    }

    if (command.toLowerCase() === "help") {
      setTerminalHistory((history) => [
        ...history,
        { command, output: terminalHelpOutput },
      ]);
      return;
    }

    const requestedView = command.replace(/^\//, "").toLowerCase();
    const destination = commands.find(
      ({ label, view }) => label.slice(1) === requestedView || view === requestedView,
    );
    if (destination) {
      setTerminalHistory((history) => [
        ...history,
        { command, output: [`Opening ${destination.view}...`] },
      ]);
      navigate(destination.view);
      return;
    }

    setTerminalHistory((history) => [
      ...history,
      { command, output: [`Command not found: ${command}. Type help to see available commands.`] },
    ]);
  }

  return (
    <main className="workspace">
      <header className="titlebar">
        <div className="window-dots" aria-hidden="true"><span /><span /><span /></div>
        <div className="brand-mark">MM</div>
        <div className="brand-copy">
          <strong>MAHADEV MANERIKAR</strong>
          <small>AI ENGINEER PORTFOLIO</small>
        </div>
        <button className="titlebar-search" onClick={() => setPaletteOpen(true)} aria-label="Open command palette">
          <Search size={13} />
          <span>Search projects, skills, or run a command...</span>
          <kbd>Ctrl K</kbd>
        </button>
        <div className="window-actions">
          <button
            className="theme-toggle"
            onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <span className="online-chip"><i /> Available</span>
        </div>
      </header>

      <nav className="activity-bar" aria-label="Main navigation">
        <button className={activeView === "home" ? "selected" : ""} onClick={() => navigate("home")} aria-label="Explorer — Home" title="Explorer"><Files size={20} strokeWidth={1.6} /></button>
        <button onClick={() => setPaletteOpen(true)} aria-label="Search" title="Search"><Search size={20} strokeWidth={1.6} /></button>
        <button className={activeView === "projects" ? "selected" : ""} onClick={() => navigate("projects")} aria-label="Source Control — Projects" title="Source Control"><GitBranch size={20} strokeWidth={1.6} /></button>
        <button className={activeView === "experience" ? "selected" : ""} onClick={() => navigate("experience")} aria-label="Run and Debug — Experience" title="Run and Debug"><Bug size={20} strokeWidth={1.6} /></button>
        <button className={activeView === "skills" ? "selected" : ""} onClick={() => navigate("skills")} aria-label="Extensions — Skills" title="Extensions"><Blocks size={20} strokeWidth={1.6} /></button>
        <button className="push-bottom" onClick={() => navigate("contact")} aria-label="Accounts — Contact" title="Accounts"><UserRound size={20} strokeWidth={1.6} /></button>
        <button className="activity-profile" onClick={() => navigate("home")} aria-label="Home">
          <Image src="/mahadev-manerikar.png" alt="" fill sizes="24px" />
        </button>
        <button onClick={() => setPaletteOpen(true)} aria-label="Settings and commands"><Settings size={18} /></button>
      </nav>

      <aside className="explorer" aria-label="Portfolio explorer">
        <div className="explorer-heading"><span>EXPLORER</span><span>···</span></div>
        <div className="tree-root"><ChevronDown size={12} /><FolderOpen size={14} color="#dcb67a" /> MAHADEV-PORTFOLIO</div>
        {[
          { name: "about", files: [{ label: "me.md", view: "home" as View }, { label: "education.md", view: "education" as View }] },
          { name: "skills", files: [{ label: "skills.md", view: "skills" as View }] },
          { name: "experience", files: [{ label: "experience.md", view: "experience" as View }, { label: "highlights.md", view: "experience" as View }] },
          { name: "projects", files: [{ label: "work-projects.tsx", view: "projects" as View }, { label: "personal-projects.tsx", view: "personal" as View }, { label: "agno-agents-hub/", view: "personal" as View }, { label: "docvision-rag/", view: "personal" as View }, { label: "servicenow-mcp/", view: "personal" as View }] },
          { name: "contact", files: [{ label: "contact.md", view: "contact" as View }] },
        ].map((section) => {
          const expanded = openSections.includes(section.name);
          return (
            <div className="tree-section" key={section.name}>
              <button className="tree-section-title" onClick={() => toggleSection(section.name)}>
                {expanded ? <ChevronDown size={11} /> : <ChevronRight size={11} />}
                {section.name === "projects" ? <Folder size={13} color="#dcb67a" /> : <FolderOpen size={13} color="#dcb67a" />}
                {section.name}
              </button>
              {expanded && (
                <div className="tree-items">
                  {section.files.map((file) => (
                    <button className={`tree-file ${activeView === file.view && (section.name === "about" || section.name === activeView) ? "active" : ""}`} key={file.label} onClick={() => navigate(file.view)}>
                      {file.label.endsWith("/") ? <span className="file-mark folder" /> : <span className="file-mark">{file.label.endsWith(".tsx") ? "TS" : "M"}</span>}
                      {file.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        <div className="favorites">
          <div className="explorer-heading">FAVORITES</div>
          <a href={resume} download><FileText size={13} color="#e78391" /> Resume.pdf</a>
          <a href={github} target="_blank" rel="noreferrer"><Github size={13} /> GitHub <ExternalLink size={10} /></a>
          <a href={linkedin} target="_blank" rel="noreferrer"><ExternalLink size={13} color="#b6ad9d" /> LinkedIn <ExternalLink size={10} /></a>
          <a href={`mailto:${email}`}><Mail size={13} color="#b6ad9d" /> Email Me <ExternalLink size={10} /></a>
        </div>
      </aside>

      <section className="editor">
        <div className="tabs" role="tablist" aria-label="Open portfolio pages">
          {views.map((view) => (
            <button className={`tab ${activeView === view.id ? "active" : ""}`} key={view.id} role="tab" aria-selected={activeView === view.id} onClick={() => navigate(view.id)}>
              <view.icon size={12} /> {view.file} {activeView === view.id && <X className="tab-x" size={11} />}
            </button>
          ))}
        </div>
        <nav className="mobile-nav" aria-label="Portfolio pages">
          {views.map((view) => (
            <button className={activeView === view.id ? "active" : ""} key={view.id} onClick={() => navigate(view.id)}>{view.label}</button>
          ))}
        </nav>
        <div className="editor-scroll" ref={editorRef}>
          <div className="editor-content">
            <section id="home" className="page-section">
              <section className="hero">
                <div className="hero-portrait">
                  <Image src="/mahadev-manerikar.png" alt="Mahadev Manerikar" fill priority sizes="(max-width: 560px) 110px, (max-width: 900px) 180px, 320px" />
                </div>
                <div className="hero-content">
                  <p className="eyebrow">AI Engineer&nbsp; | &nbsp;Backend-focused developer</p>
                  <h1><span>Hi, I’m</span><span className="hero-name">Mahadev<br />Manerikar</span></h1>
                  <p className="hero-lead">I build <strong>production-grade AI systems</strong>, multi-agent platforms, and scalable backend APIs on Azure.</p>
                  <p className="hero-location"><MapPin size={12} /> Pune, India <span>·</span> Open to opportunities</p>
                  <div className="hero-actions">
                    <button className="button primary" onClick={() => navigate("projects")}>Explore work <ArrowRight size={13} /></button>
                    <a className="button" href={resume} target="_blank" rel="noreferrer"><ArrowDownToLine size={13} /> Download resume</a>
                    <a className="button" href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={14} /></a>
                    <a className="button" href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={14} /></a>
                  </div>
                </div>
                <div className="stats">
                  <div className="stat"><strong>2.6+</strong><span>Years building</span></div>
                  <div className="stat"><strong>2K+</strong><span>Documents ingested</span></div>
                  <div className="stat"><strong>60%</strong><span>Latency reduction · 15s to 6s</span></div>
                  <div className="stat"><strong>Azure</strong><span>Production cloud</span></div>
                </div>
              </section>
              <div className="section-bar">
                <h2><Folder size={15} color="#dcb67a" /> Featured work</h2>
                <button onClick={() => navigate("projects")}>Explore work <ArrowRight size={12} /></button>
              </div>
              <div className="project-grid">
                {featuredProjects.map((project) => {
                  const Icon = project.icon;
                  return (
                    <article className="project-card" key={project.title}>
                      <div className="project-icon" style={{ color: project.color, backgroundColor: `${project.color}12` }}><Icon size={17} /></div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <Tags values={project.tags} />
                      <div className="impact"><Activity size={11} />{project.impact}</div>
                      <button className="card-link" onClick={() => navigate(project.view)}>Open details <ArrowRight size={11} /></button>
                    </article>
                  );
                })}
              </div>
            </section>

            <section id="skills" className="page-section">
              <SectionHeading eyebrow="toolbox" title="Technical stack" description="The tools I use to design, build, evaluate, and operate production AI and backend systems." />
              <div className="content-pad skill-groups">
                {skillGroups.map((group) => {
                  const Icon = group.icon;
                  return (
                    <section className="skill-group" key={group.label}>
                      <h3 style={{ color: group.color }}><Icon size={15} /> {group.label}</h3>
                      <div className="skill-list">
                        {group.skills.map((skill) => (
                          <span className="skill-chip" key={skill}>
                            <SkillLogo name={skill} />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </section>

            <section id="experience" className="page-section">
              <SectionHeading eyebrow="experience" title="Experience" description="Equations Work · Pune, India" />
              <div className="content-pad">
                <div className="career-intro"><p>AI and software engineering, from early prototypes to production systems.</p></div>
                <div className="career-path">
                  <div className="career-rail" aria-hidden="true">
                    <motion.div className="career-rail-fill" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.1, ease: "easeOut" }} />
                  </div>
                  {experienceStages.map((stage, index) => {
                    const Icon = stage.icon;
                    return (
                      <motion.article
                        className="career-stage"
                        key={stage.title}
                        style={{ "--node-color": stage.color } as React.CSSProperties}
                        initial={reduceMotion ? false : { opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.18 }}
                        transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.12 }}
                      >
                        <span className="career-node" />
                        <div className={`career-card ${stage.current ? "current" : ""}`}>
                          <div className="career-card-top">
                            <div className="career-title">
                              <span className="career-symbol"><Icon size={17} /></span>
                              <div><h3>{stage.title}</h3><p>{stage.organization}</p></div>
                            </div>
                            <span className="career-dates">{stage.dates}</span>
                          </div>
                          <p className="career-summary">{stage.summary}</p>
                          <ul className="career-bullets">{stage.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                          <Tags values={stage.technologies} />
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
                <div className="experience-projects-cta">
                  <p>Want more detail on the systems I’ve delivered at Equations Work?</p>
                  <button className="button primary" onClick={() => navigate("projects")}>Explore Equations Work projects <ArrowRight size={13} /></button>
                </div>
              </div>
            </section>

            <section id="projects" className="page-section">
              <SectionHeading eyebrow="professional-projects" title="Equations Work projects" description="Selected AI and software projects delivered as part of my professional experience." />
              <div className="content-pad project-list">
                {workProjects.map((project) => (
                  <article className="project-detail" key={project.title}>
                    <h3>{project.title}</h3><p>{project.description}</p>
                    <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                    <Tags values={project.tags} />
                  </article>
                ))}
                <button className="button personal-projects-link" onClick={() => navigate("personal")}>View my personal projects <ArrowRight size={13} /></button>
              </div>
            </section>

            <section id="personal" className="page-section">
              <SectionHeading eyebrow="independent-work" title="Personal projects" description="Independent builds and experiments. Open a repository to explore the code." />
              <div className="content-pad personal-project-grid">
                {personalProjects.map((project) => (
                  <article className="personal-project-card" key={project.title}>
                    <a className="personal-project-cover" href={project.repository} target="_blank" rel="noreferrer" aria-label={`Open ${project.repositoryLabel}`}>
                      <Image src={project.image} alt={project.imageAlt} width={1200} height={600} unoptimized />
                    </a>
                    <div className="personal-project-copy">
                      <h2>{project.title}</h2>
                      <p className="personal-project-subtitle">{project.subtitle}</p>
                      <p>{project.description}</p>
                      <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                      <Tags values={project.tags} />
                      <a className="button github-project-link" href={project.repository} target="_blank" rel="noreferrer">
                        <Github size={13} /> {project.repositoryLabel} <ExternalLink size={11} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="education" className="page-section">
              <SectionHeading eyebrow="education-and-recognition" title="Education, awards & certifications" description="The foundations behind the systems I build today." />
              <div className="content-pad education-list">
                <article className="education-card"><h3><GraduationCap size={15} color="#b6ad9d" /> B.E. Computer Engineering</h3><p>Zeal College of Engineering and Research, Pune · 2020–2024 · CGPA 8.90/10</p></article>
                <article className="education-card"><h3><GraduationCap size={15} color="#b6ad9d" /> Higher Secondary Certificate</h3><p>SVM & Jr College of Science, Kudase, Sindhudurg · 2018–2020 · 77.23%</p></article>
                <article className="education-card"><h3><Award size={15} color="#dcdcaa" /> Unstoppable Contributor Award · 2025–26</h3><p>Equations Work · Recognized for contributions to a production agentic AI project, including latency reduction, evaluation, and production defect resolution.</p></article>
                <article className="education-card"><h3><ShieldCheck size={15} color="#4ec9b0" /> Certifications</h3><p>Anthropic — Introduction to Model Context Protocol<br />DeepLearning.AI — LangChain for LLM Application Development (2024)</p></article>
              </div>
            </section>

            <section id="contact" className="page-section">
              <SectionHeading eyebrow="contact" title="Let’s build something that ships." description="Open to AI engineering and backend opportunities. Send a note or connect through one of the links." />
              <div className="content-pad contact-layout">
                <ContactForm />
                <div className="contact-links">
                  <div className="contact-intro">
                    <h2>Let’s build something amazing</h2>
                    <p>Interested in collaborating on an AI project, have questions about my work, or want to discuss technology? Feel free to reach out.</p>
                  </div>
                  <a className="contact-link" href={`mailto:${email}`}><Mail size={15} /><span><small>EMAIL</small>{email}</span></a>
                  <a className="contact-link" href="tel:+917588373045"><Phone size={15} /><span><small>PHONE</small>{phone}</span></a>
                  <a className="contact-link" href={linkedin} target="_blank" rel="noreferrer"><ExternalLink size={15} /><span><small>LINKEDIN</small>mahadev-manerikar</span></a>
                  <a className="contact-link" href={github} target="_blank" rel="noreferrer"><Github size={15} /><span><small>GITHUB</small>mahadev555</span></a>
                  <div className="contact-link"><MapPin size={15} /><span><small>LOCATION</small>Pune, India</span></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="bottom-panels">
        <div className="bottom-panel">
          <div className="bottom-tabs" role="tablist" aria-label="Bottom panel">
            {bottomTabs.map((tab) => (
              <button
                className={activeBottomTab === tab ? "active" : ""}
                key={tab}
                role="tab"
                aria-selected={activeBottomTab === tab}
                onClick={() => setActiveBottomTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          {activeBottomTab === "TERMINAL" && (
            <div className="terminal" role="tabpanel" aria-label="Portfolio command terminal">
              <div className="terminal-history" aria-live="polite">
                {terminalHistory.map((entry, index) => (
                  <div key={`${index}-${entry.command}`}>
                    <div><span className="prompt">mahadev@portfolio</span>:<span className="terminal-path">~</span>$ {entry.command}</div>
                    {entry.output.map((line) => <div className="terminal-output" key={line}>{line}</div>)}
                  </div>
                ))}
              </div>
              <form className="terminal-form" onSubmit={onTerminalSubmit}>
                <label className="prompt" htmlFor="terminal-command">mahadev@portfolio</label>
                <span className="terminal-path">:~$</span>
                <input
                  id="terminal-command"
                  value={terminalInput}
                  onChange={(event) => setTerminalInput(event.target.value)}
                  aria-label="Enter a portfolio command"
                  autoComplete="off"
                  spellCheck={false}
                />
              </form>
            </div>
          )}
          {activeBottomTab === "OUTPUT" && (
            <div className="terminal" role="tabpanel">
              <div><span className="output-label">[portfolio]</span> Static portfolio ready.</div>
              <div><span className="output-label">[navigation]</span> Command palette initialized.</div>
              <div><span className="output-label">[motion]</span> Reduced-motion preferences respected.</div>
            </div>
          )}
          {activeBottomTab === "PROBLEMS" && (
            <div className="terminal panel-empty" role="tabpanel"><span className="output-label">✓</span> No problems have been detected in this workspace.</div>
          )}
          {activeBottomTab === "DEBUG CONSOLE" && (
            <div className="terminal panel-empty" role="tabpanel"><span className="prompt">Debug console</span> &nbsp; Waiting for a debug session to start...</div>
          )}
          {activeBottomTab === "PORTS" && (
            <div className="terminal panel-empty" role="tabpanel">No forwarded ports. Production portfolio is statically rendered.</div>
          )}
          {activeBottomTab === "GITLENS" && (
            <div className="terminal panel-empty" role="tabpanel"><span className="prompt">Current project</span> &nbsp; Mahadev Manerikar · AI Engineer Portfolio</div>
          )}
        </div>
      </section>

      <footer className="statusbar">
        <span>⌁ main &nbsp;|&nbsp; Mahadev Manerikar</span>
        <span className="status-right"><span>UTF-8</span><span>TypeScript JSX</span><span>Ln 1, Col 1</span><span>⎇ Pune, India</span></span>
      </footer>

      <AnimatePresence>
        {paletteOpen && (
          <motion.div className="palette-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setPaletteOpen(false); }}>
            <motion.div className="palette" initial={reduceMotion ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: reduceMotion ? 0 : 0.16 }}>
              <div className="palette-search"><Command size={15} /><input ref={paletteInput} value={query} onChange={(event) => { setQuery(event.target.value); setSelectedCommand(0); }} onKeyDown={onPaletteKeyDown} placeholder="Search pages or run a command..." aria-label="Command palette search" /><button onClick={() => setPaletteOpen(false)} aria-label="Close command palette"><X size={15} /></button></div>
              <div className="palette-results">
                {filteredCommands.map((command, index) => (
                  <button className={selectedCommand === index ? "current" : ""} key={command.label} onMouseEnter={() => setSelectedCommand(index)} onClick={() => navigate(command.view)}>
                    <span><code>{command.label}</code>&nbsp; {command.description}</span><ArrowRight size={13} />
                  </button>
                ))}
                {filteredCommands.length === 0 && <div className="palette-hint">No matching portfolio pages.</div>}
              </div>
              <div className="palette-hint">↑↓ navigate &nbsp; ENTER open &nbsp; ESC close</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
