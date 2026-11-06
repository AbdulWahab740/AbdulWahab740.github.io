export interface ProjectPanel {
  title: string;
  lines: string[];
  accentLines?: number[];
  columns?: boolean;
}

export type ProjectCategory = "generative" | "vision" | "ml";

export interface Project {
  name: string;
  spec: string;
  tag: string;
  tagAccent?: boolean;
  category: ProjectCategory;
  text: string;
  stack: string[];
  panel: ProjectPanel;
  footerMetric: string;
  footerMetricAccent?: boolean;
  footerAction: string;
}

export interface JobPoint {
  title: string;
  text: string;
}

export interface JobMetric {
  label: string;
  value: string;
  accent?: boolean;
}

export interface Job {
  code: string;
  role: string;
  org: string;
  when: string;
  domain: string;
  points: JobPoint[];
  metricsTitle: string;
  metrics: JobMetric[];
  stack: string;
}

export interface SkillDomain {
  code: string;
  title: string;
  items: string[];
  secondColumn?: string[];
  specialization: string;
  wide?: boolean;
}

export interface Honor {
  code: string;
  meta: string;
  title: string;
  text: string;
}

export interface Question {
  q: string;
  a: string;
  src: string[];
}

export interface TelemetryItem {
  label: string;
  value: string;
  note?: string;
  progress?: string;
  accentNote?: boolean;
  monoValue?: boolean;
}

export const me = {
  name: "Abdul Wahab",
  role: "Applied AI Engineer at Nexonic (Evyol Group)",
  city: "Multan, Pakistan",
  email: "abdulwahab41467@gmail.com",
  github: "https://github.com/AbdulWahab740",
  linkedin: "https://www.linkedin.com/in/abwahab07",
  book: "mailto:abdulwahab41467@gmail.com",
  orcid: "0009-0001-8304-1953",
  handle: "abdul.",
  spec: "AI ENGINEER / SPEC_01",
  status: "ACTIVE",
  node: "MULTAN_PK",
  p99: "<50ms",
  evalAcc: "99.4%",
  cgpa: "3.76 / 4.00",
  availability: "Q2/Q3 2025",
  focus: ["Deep Learning", "Computer Vision", "Agentic AI", "RAG Systems"],
};

export const telemetry: TelemetryItem[] = [
  {
    label: "RAG RETRIEVAL LATENCY",
    value: "3.00s",
    note: "[-50% FROM 6s]",
    progress: "50%",
  },
  {
    label: "RETRIEVAL NOISE REDUCTION",
    value: "-35% IRRELEVANT DOCS",
    note: "BM25 + DENSE + CROSS-ENCODER",
  },
  {
    label: "EDGE VISION BENCHMARK",
    value: "80% mAP@50 // -60% FP",
    note: "YOLO NPR + TEMPORAL VLM FIRE VERIFIER",
    accentNote: true,
  },
  {
    label: "ACADEMIC BENCHMARK",
    value: "SPRINGER SUBMITTED // 18 RUNS (3 SEEDS)",
    monoValue: true,
  },
];

export const projects: Project[] = [
  {
    name: "Tawreeq Platform",
    spec: "SPEC // PROD_01",
    tag: "ENTERPRISE",
    tagAccent: true,
    category: "vision",
    text: "Full-Stack AI Procurement Intelligence Platform. Integrated Mistral OCR for bilingual Arabic/English document parsing with automated value analysis for GCC procurement workflows.",
    stack: ["PYTHON", "FASTAPI", "REACT", "SUPABASE", "MISTRAL-OCR", "AWS ECS"],
    panel: {
      title: "CORE PIPELINE ARCHITECTURE",
      lines: [
        "[ Multi-page Arabic / English RFP PDFs ]",
        "  └───> [ Mistral OCR Ingestion Engine ]",
        "         └───> [ Automated Value Analysis & RFQ Extraction ]",
      ],
      accentLines: [1],
    },
    footerMetric: "ARABIC & EN OCR",
    footerMetricAccent: true,
    footerAction: "[ DOCKER // AWS ECS ]",
  },
  {
    name: "Hybrid-Search RAG",
    spec: "SPEC // PROD_02",
    tag: "LIVE // NEXONIC",
    tagAccent: true,
    category: "generative",
    text: "Sales & Procurement Assistant combining vector retrieval, BM25 keyword matching, and Cross-Encoder reranking for agricultural product catalogs and customer purchase queries.",
    stack: ["QDRANT", "BM25", "CROSS-ENCODER", "FASTAPI", "LANGGRAPH"],
    panel: {
      title: "PERFORMANCE TELEMETRY",
      lines: ["LATENCY: 6s → 3.0s", "NOISE REDUCTION: -35%"],
      accentLines: [1],
      columns: true,
    },
    footerMetric: "3.0s P99 // -35% NOISE",
    footerMetricAccent: true,
    footerAction: "[ RE-RANKING PIPELINE ]",
  },
  {
    name: "Neuro-Critics AI",
    spec: "SPEC // PROD_03",
    tag: "AGENTIC",
    category: "generative",
    text: "Multimodal Research Critique Agent analyzing 50+ neuroscience papers with multimodal LLMs, OCR on figures/diagrams, and automated methodology gap identification.",
    stack: ["LANGCHAIN", "FAISS", "STREAMLIT", "HF EMBEDDINGS", "GEMINI API"],
    panel: {
      title: "CAPABILITY SPECS",
      lines: ["50+ Research Papers Ingested • Diagram OCR Parsing • Gap Detection"],
    },
    footerMetric: "MULTIMODAL CRITIQUE",
    footerAction: "[ REPO HARNESS → ]",
  },
  {
    name: "Zarai Radar",
    spec: "SPEC // PROD_04",
    tag: "AGRI-INTELLIGENCE",
    category: "ml",
    text: "Crop Risk Intelligence Platform delivering location- and growth-stage-aware climate, disease, and pest risk alerts powered by rule-based agronomy and vectorized agricultural RAG.",
    stack: ["PYTHON", "FASTAPI", "REACT", "PGVECTOR", "WEATHER APIS"],
    panel: {
      title: "ALERT ARCHITECTURE",
      lines: ["Real-Time Weather Feeds • Growth Stage Models • Proactive Advisory"],
    },
    footerMetric: "MULTI-CROP ENGINE",
    footerAction: "[ AGRI ADVISORY → ]",
  },
  {
    name: "Industrial Fire & NPR Vision",
    spec: "SPEC // PROD_05",
    tag: "EDGE CCTV",
    tagAccent: true,
    category: "vision",
    text: "Multi-Stage Edge Vision Pipeline combining YOLO object tracking with temporal verification and VLM confirmation for fire detection, alongside custom-tuned YOLO NPR access control.",
    stack: ["YOLO", "OPENCV", "PYTORCH", "TENSORRT", "RTSP"],
    panel: {
      title: "BENCHMARK ACCURACY",
      lines: ["80% mAP@50 NPR // -60% FIRE FALSE POSITIVES"],
      accentLines: [0],
    },
    footerMetric: "80% mAP@50 // EDGE",
    footerMetricAccent: true,
    footerAction: "[ VISION TRACE → ]",
  },
  {
    name: "Supplier Negotiation Agent",
    spec: "SPEC // PROD_06",
    tag: "OLLAMA LOCAL",
    category: "generative",
    text: "Autonomous enterprise negotiation agent orchestrating 4-tier pricing protocols, counter-offer evaluation, and purchase order reconciliation with LangChain and local LLM execution.",
    stack: ["OLLAMA", "LANGCHAIN", "FASTAPI", "PYTHON"],
    panel: {
      title: "MEASURABLE ROI IMPACT",
      lines: ["Saved 20–30 Minutes Per Procurement Transaction"],
    },
    footerMetric: "4 WORKFLOWS AUTO",
    footerAction: "[ INSPECT AGENT → ]",
  },
];


export const jobs: Job[] = [
  {
    code: "ROLE_01 // PRODUCTION ENGINEERING",
    role: "Applied AI Engineer",
    org: "Nexonic (Evyol Group) • Multan, Pakistan",
    when: "Mar 2026 – Present",
    domain: "ENTERPRISE AI & INTELLIGENT AUTOMATION",
    points: [
      {
        title: "Hybrid-Search RAG Sales Assistant:",
        text: "Developed a hybrid retrieval pipeline combining vector search, BM25, and Cross-Encoder reranking for agricultural sales operations. Improved retrieval relevance by reducing irrelevant results by 35% and cut response latency from 6 seconds to 3 seconds.",
      },
      {
        title: "Autonomous Supplier Negotiation Agent:",
        text: "Built an agentic negotiation workflow using LangChain and Ollama to automate four pricing and procurement communication workflows, reducing manual effort by an estimated 20–30 minutes per transaction.",
      },
      {
        title: "Edge-Based Number Plate Recognition:",
        text: "Fine-tuned YOLO-based object detection models on localized datasets for automated vehicle access control, achieving 80% mAP@50 in industrial and residential deployment scenarios.",
      },
      {
        title: "Industrial Fire Detection and Verification:",
        text: "Developed a multi-stage computer vision pipeline integrating object detection, temporal tracking, and Vision-Language Model (VLM) verification to reduce false-positive fire alerts by 60%.",
      },
      {
        title: "Agricultural Plant Disease Detection:",
        text: "Worked on computer vision-based plant disease detection workflows across wheat, cotton, and rice crops, supporting agricultural diagnosis and model evaluation.",
      },
    ],
    metricsTitle: "SELECTED ENGINEERING OUTCOMES",
    metrics: [
      { label: "RAG RESPONSE LATENCY", value: "6s → 3s (-50%)", accent: true },
      { label: "PROCUREMENT TIME SAVED", value: "20–30 MIN / TXN" },
      { label: "FIRE FALSE POSITIVES", value: "-60%", accent: true },
      { label: "EDGE NPR PERFORMANCE", value: "80% mAP@50" },
    ],
    stack: "PYTHON • LANGCHAIN • OLLAMA • LANGGRAPH • YOLO • VLM • OpenCV • PYTORCH • FASTAPI • SUPABASE]",
  },
  {
    code: "ROLE_02 // COMPUTER VISION & MACHINE LEARNING",
    role: "Computer Vision & Machine Learning",
    org: "Hybrid • Remote",
    when: "Jun 2025 – Sep 2025",
    domain: "COMPUTER VISION & DEEP LEARNING",
    points: [
      {
        title: "Dataset Preparation & Augmentation:",
        text: "Contributed to image annotation, data preprocessing, and augmentation pipelines to prepare datasets for computer vision and deep learning experiments.",
      },
      {
        title: "Image Segmentation:",
        text: "Implemented and experimented with U-Net and U2-Net segmentation architectures to identify and extract relevant regions from image datasets.",
      },
      {
        title: "Image Classification & Model Evaluation:",
        text: "Applied ResNet50, VGG16, and VGG19 classification architectures, evaluating model performance through comparative experiments and achieving over 95% accuracy in the reported classification evaluations.",
      },
    ],
    metricsTitle: "MACHINE LEARNING EXPERIMENTS",
    metrics: [
      { label: "CLASSIFICATION MODELS", value: "95%+ ACCURACY", accent: true },
      { label: "SEGMENTATION", value: "U-NET / U2-NET" },
      { label: "CLASSIFICATION", value: "RESNET50 / VGG16 / VGG19" },
    ],
    stack: "PYTHON • DEEP LEARNING • OPENCV • U-NET • U2-NET • RESNET50 • VGG16 • VGG19 • ROBOFLOW • TENSORFLOW",
  },
];


export const skillDomains: SkillDomain[] = [
  {
    code: "DOMAIN_01 // INTELLIGENCE",
    title: "AI Systems & GenAI",
    items: [
      "LLM Applications & Agent Loops",
      "Retrieval-Augmented Generation (RAG)",
      "Tool Calling & Schema Enforcers",
      "LangChain & LangGraph Topologies",
      "LLM Evaluation & Tracking (Langfuse, LangSmith)",
    ],
    specialization: "SPECIALIZATION: AGENTIC ROUTING",
  },
  {
    code: "DOMAIN_02 // STORAGE & RETRIEVAL",
    title: "Retrieval & Data",
    items: [
      "Hybrid Search (BM25 + Dense)",
      "Cross-Encoder Re-Ranking",
      "Qdrant, FAISS & pgvector",
      "PostgreSQL & Supabase",
      "MySQL & Neo4j Graph DBs",
    ],
    specialization: "SPECIALIZATION: SUB-SECOND RECIPROCAL RANK",
  },
  {
    code: "DOMAIN_03 // SERVING & APIS",
    title: "Backend & Application",
    items: [
      "Python & Pydantic Typing",
      "FastAPI & High-Throughput REST APIs",
      "Asynchronous Event Processing",
      "Redis In-Memory Caching",
      "Dockerized Microservices",
    ],
    specialization: "SPECIALIZATION: LOW-LATENCY REST ENDPOINTS",
  },
  {
    code: "DOMAIN_04 // PERCEPTION",
    title: "ML & Computer Vision",
    items: [
      "PyTorch & TensorFlow/Keras",
      "OpenCV & RTSP Ingestion",
      "YOLO Family (YOLO26-L)",
      "Detection Transformers (RT-DETR-L, RF-DETR-L)",
      "CNN & U-Net Segmentation",
    ],
    specialization: "SPECIALIZATION: EDGE INFERENCE & BENCHMARKING",
  },
  {
    code: "DOMAIN_05 // INFRASTRUCTURE & LIFECYCLE",
    title: "Infrastructure & Tools",
    items: [
      "Docker Container Orchestration",
      "Git & GitHub Collaborative Workflows",
      "AWS ECS Cluster Deployment",
    ],
    secondColumn: [
      "Continuous Integration & CI/CD",
      "Ollama Local Model Runtime",
      "Multimodal Vision-Language Serving",
    ],
    specialization: "SPECIALIZATION: REPRODUCIBLE DEPLOYMENT PROTOCOLS",
    wide: true,
  },
];

export const research = {
  paper: {
    title: "Cross-Family Benchmark of Plant Disease Detection Models",
    venue: "International Journal of Machine Learning and Cybernetics (Springer)",
    authors: "Abdul Wahab (Lead Author & Experimental Evaluator)",
    text: "Conducted empirical performance comparison across modern object detection model families—YOLO26-L, RT-DETR-L, and RF-DETR-L—on rice-leaf and cotton disease datasets. Designed a controlled experimental pipeline spanning 18 training runs across 3 random seeds. Findings indicate RF-DETR-L achieved highest mAP and F1 score, while YOLO26-L demonstrated superior inference throughput for field deployment.",
  },
  protocol: {
    title: "Comparative Architecture Findings: YOLO26-L vs. RT-DETR-L vs. RF-DETR-L",
    winner: {
      label: "DETECTION ACCURACY & F1 WINNER",
      value: "RF-DETR-L",
      text: "Delivered highest mAP and F1 score across multi-class cotton foliar disease manifestations.",
    },
    throughput: {
      label: "FIELD INFERENCE THROUGHPUT WINNER",
      value: "YOLO26-L",
      text: "Superior FPS latency envelope optimal for lightweight edge deployment on mobile field diagnostic rigs.",
    },
  },
};

export const about = {
  degree: {
    label: "ACADEMIC DEGREE // ACTIVE",
    when: "SEP 2023 – SEP 2027",
    title: "Bachelor of Science in Computer Science",
    org: "MNS-University of Agriculture • Multan, Pakistan",
    gpaLabel: "CUMULATIVE GPA:",
    gpa: "3.76 / 4.00",
  },
  headline:
    "I engineer production-grade AI systems, real-time agent loops, and deterministic retrieval architectures.",
  text: "Grounded in formal computer science and applied machine learning research. My standard of success is not benchmark scores on synthetic toys—it is measurable ROI, low tail latency (P99 < 50ms), zero unhandled edge failures, and mathematically verifiable bounds on model hallucinations in mission-critical environments.",
  honors: [
    {
      code: "HONOR_01 // STANFORD UNIVERSITY",
      meta: "2026 // SECTION LEADER",
      title: "Stanford Code in Place (2026)",
      text: "Globally selected Section Leader. Mentored international cohorts of 20+ students on Pythonic programming paradigms, algorithmic thinking, and foundational computer systems.",
    },
    {
      code: "HONOR_02 // COMPETITIVE CODING",
      meta: "2025 // 1ST PLACE WINNER",
      title: "Speed Programming Competition — BZU Multan",
      text: "Awarded First Place among competitive programmers solving complex algorithmic optimization and data structure challenges under strict time constraints.",
    },
    {
      code: "HONOR_03 // ACM-W CHAPTER",
      meta: "2025 // 2ND PLACE WINNER",
      title: "ACM-W Speed Programming — Air University",
      text: "Second Place in inter-university competitive programming contest testing dynamic programming, graph traversals, and algorithmic complexity bounds.",
    },
 {
  code: "HONOR_04 // CODING HAWKS",
  meta: "2026 // AI TEAM LEAD",
  title: "AI Team Lead — Coding Hawks",
  text: "Led AI-focused project development and mentored 50+ students, guiding teams through practical machine learning and AI engineering challenges while contributing to a collaborative technical community.",
},
  ] as Honor[],
  hash: "8f92-c011-aa9b",
};

export const questions: Question[] = [
   {
    q: "What kind of AI systems do you actually build?",
    a: `I build AI systems that go beyond model demos and solve practical engineering problems.

My work focuses on agentic AI, retrieval-augmented generation (RAG), computer vision, and data-driven automation.

I enjoy working across the complete system: understanding the problem, designing the architecture, integrating models and APIs, and making the workflow useful in real-world environments.

For me, good AI engineering isn't just about making a model work. It's about making the entire system work.`,
    src: ["Agentic AI", "RAG Systems", "Computer Vision"],
  },
  {
    q: "How are you using AI to improve procurement?",
    a: `Supplier quotations often arrive in different formats: PDFs, emails, spreadsheets, and WhatsApp images. Comparing them manually can become a time-consuming process.

That's the problem I'm addressing with Tawreeq.

It transforms unstructured supplier quotations into structured information, extracts relevant details, and normalizes offers so purchasing teams can compare them more easily.

The real challenge isn't simply extracting text. It's understanding different supplier formats and turning that information into meaningful purchasing decisions.

I'm building Tawreeq as an AI-powered procurement layer for businesses.`,
    src: ["Tawreeq", "Document Intelligence", "AI Automation"],
  },
  {
    q: "How do you approach building reliable RAG systems?",
    a: `I see RAG as an end-to-end retrieval engineering problem, not simply connecting an LLM to a vector database.

The quality of a response depends on several stages: document processing, chunking, metadata design, embeddings, retrieval, ranking, and context construction.

I work with tools and approaches across this pipeline, including LangChain, vector databases, hybrid search, and reranking.

My focus is on improving the quality of information that reaches the model, because even a powerful LLM cannot reliably answer a question if the retrieved context is incomplete or irrelevant.`,
    src: ["RAG Systems", "Hybrid Search", "Retrieval Engineering"],
  },
  {
    q: "What is TwinGuard, and what problem does it solve?",
    a: `Imagine an inventory AI agent recommending a purchase using ERP data that contains outdated stock quantities, duplicate records, or unconfirmed goods receipts.

The recommendation might look reasonable, but the underlying data could be unreliable.

TwinGuard explores a decision-safety layer that evaluates business data before AI-driven inventory actions are executed.

It assesses data reliability, validates operational constraints, evaluates proposed actions, and determines whether an action should proceed, be blocked, or require human approval.

I'm developing it as a research-driven prototype to explore how AI systems can make safer operational decisions.`,
    src: ["TwinGuard", "Data Reliability", "AI Decision Safety"],
  },
  {
    q: "What have you learned from benchmarking computer vision models?",
    a: `One important lesson from my computer vision work is that the best-performing model isn't necessarily the best model for every application.

I've worked on comparing YOLO, RT-DETR, and RF-DETR architectures for plant disease detection across rice and cotton datasets.

The experiments examine detection performance and inference speed, highlighting the trade-offs between model accuracy and computational efficiency.

The results also showed that model performance can vary across datasets.

This experience reinforced my approach to applied machine learning: evaluate models using multiple meaningful metrics and choose based on the actual problem, not just a headline accuracy score.`,
    src: ["Plant Disease Benchmark", "Object Detection", "Applied ML"],
  },
  {
    q: "What kind of engineering challenges are you interested in?",
    a: `I'm most interested in problems where AI meets real business operations.

That includes intelligent automation, enterprise RAG systems, document-heavy workflows, decision-support systems, computer vision, and data reliability.

I enjoy turning ambiguous problems into working systems: understanding the requirements, designing the architecture, building the components, integrating the workflow, and evaluating the outcome.

I'm particularly interested in collaborating with teams and businesses that want to move beyond AI prototypes and build systems that deliver practical value.`,
    src: ["Engineering Experience", "AI Systems", "Collaboration"],
  },
];