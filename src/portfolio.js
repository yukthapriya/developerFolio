/* Personalized portfolio for Yuktha Priya Masupalli
   - Corrected and cleaned up exports, preserved talkSection (hidden by default) so the app compiles
   - Ensure the referenced images exist in src/assets/images:
     tamu.png, jntua.png, azure_badge.png, aaai.png, lfmbio.png, wacv.png
*/

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // keep or replace with your custom animation

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// Summary And Greeting Section
const illustration = {
  animated: true,
};

const greeting = {
  username: "Yuktha Priya Masupalli",
  title: "Hi all, I'm Yuktha Priya Masupalli",
  subTitle: emoji("Software Engineer • AI/ML Researcher • Full‑stack Engineer 🚀"),
  resumeLink: "",
  displayGreeting: true,
};

// Social Media & Research Links
const socialMediaLinks = {
  github: "https://github.com/yukthapriya",
  linkedin: "https://www.linkedin.com/in/yukthapriya",
  gmail: "myukthapriya@gmail.com",
  googleScholar: "https://scholar.google.com/citations?hl=en&user=UkX-bOYAAAAJ",
  researchGate: "https://www.researchgate.net/profile/Yuktha-Priya-Masupalli",
  website: "",
  display: true,
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "I build research-driven ML systems and production-grade full‑stack applications — from prototypes to deployed services.",
  skills: [
    emoji(
      "⚡ Research & engineering on probabilistic vision–language retrieval (medical imaging) and model robustness"
    ),
    emoji("⚡ Production GenAI agents and conversational assistants using LangChain and modern LLMs"),
    emoji("⚡ End‑to‑end full‑stack systems, real‑time platforms, and MLOps pipelines for reliable deployment"),
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Neo4j", fontAwesomeClassname: "fas fa-database" },
  ],
  display: true,
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Texas A&M University–San Antonio",
      logo: require("./assets/images/tamu.png"),
      subHeader: "MS in Computer Science",
      duration: "Aug 2024 - Dec 2025",
      desc: "Graduate coursework in applied machine learning, distributed systems and advanced algorithms.",
      descBullets: [],
    },
    {
      schoolName: "JNTUA College of Engineering",
      logo: require("./assets/images/jntua.png"),
      subHeader: "B.Tech in Computer Science",
      duration: "Nov 2020 - May 2023",
      desc: "Undergraduate degree in Computer Science and Engineering.",
      descBullets: [],
    },
  ],
};

// Tech stack visualization
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Machine Learning / AI", progressPercentage: "85%" },
    { Stack: "Full Stack Development", progressPercentage: "80%" },
    { Stack: "Cloud & DevOps", progressPercentage: "70%" },
  ],
  displayCodersrank: false,
};

// Work experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Graduate Research Assistant",
      company: "Texas A&M University–San Antonio",
      companylogo: require("./assets/images/tamu.png"),
      date: "Feb 2025 – May 2025",
      desc:
        "Research on probabilistic vision–language retrieval and robustness of multimodal models for medical imaging.",
      descBullets: [
        "Designed MedProbCLIP: probabilistic vision–language retrieval system for uncertainty-aware medical retrieval (300k+ samples).",
        "Improved calibration and robustness across COCO and CXR‑CLIP benchmarks with probabilistic embeddings.",
        "Led ablation studies, robustness evaluations, and cross-modal LLM fine-tuning for improved semantic alignment.",
      ],
    },
    {
      role: "Associate Data Engineer",
      company: "Digitalsoft AI Solutions India Pvt. Ltd (DAIS)",
      companylogo:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=640&q=80&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a7f0b6c5e8b8a7f6a6a8f7e6f8b7a4d",
      date: "July 2023 - Jun 2024",
      desc:
        "Built production ML services, GenAI assistants and scalable backend microservices on AWS.",
      descBullets: [
        "Developed GenAI chat assistants using LangChain and LLMs to enable agentic workflows.",
        "Built microservice-based APIs and deployed containerized services for high-availability.",
        "Contributed frontend/UX improvements by integrating React components and performance optimizations.",
      ],
    },
  ],
};

/* Open Source Section */
const openSource = {
  showGithubProfile: "true",
  display: true,
};

// Selected projects (9+)
const bigProjects = {
  title: "Selected Projects",
  subtitle: "Research and production projects that demonstrate full‑stack + ML expertise",
  projects: [
    {
      image: "", // replace with require("./assets/images/interviewflow.png")
      projectName: "InterviewFlow",
      projectDesc:
        "Real‑time technical interview platform with collaborative coding, in‑session chat, and low‑latency execution sandbox.",
      footerLink: [{ name: "GitHub", url: "https://github.com/yukthapriya/InterviewFlow" }],
      technologies: ["React", "Node.js", "Socket.io", "Prisma", "Postgres"],
    },
    {
      image: "",
      projectName: "MedProbCLIP — Probabilistic Adaptation of Vision–Language Foundation Model",
      projectDesc:
        "Probabilistic adaptation of vision–language foundation models for reliable radiograph–report retrieval (MedProbCLIP).",
      footerLink: [
        { name: "GitHub", url: "https://github.com/FOURM-LAB/MedProbCLIP.git" },
        { name: "Preprint / Paper", url: "https://arxiv.org/abs/your_medprobclip_preprint" },
      ],
      technologies: ["PyTorch", "CLIP", "Probabilistic Embeddings", "MLOps"],
    },
    {
      image: "",
      projectName: "Rust Vulnerability Detector (ML + Static Analysis)",
      projectDesc:
        "Hybrid pipeline combining Rust static analysis, LLVM IR feature extraction, and ML classifiers to detect unsafe code patterns.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/yukthapriya/Rust-vuln-detector-ML-and-Static-Analysis" },
      ],
      technologies: ["Rust", "LLVM", "linfa", "Docker"],
    },
    {
      image: "",
      projectName: "University Recommendation System",
      projectDesc:
        "Personalized recommendation engine using Neo4j graph embeddings + KNN to suggest universities based on profile and preferences.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/yukthapriya/University-Recommendation-System-using-Neo4j-and-ML.git" },
      ],
      technologies: ["Neo4j", "Python", "Flask", "ML"],
    },
    {
      image: "",
      projectName: "JagCoach — Multimodal Feedback Assistant",
      projectDesc:
        "Audio–video analysis pipelines and feedback generation for oral presentations; deployed ML services on GCP.",
      footerLink: [{ name: "Project", url: "" }],
      technologies: ["Speech-to-Text", "Computer Vision", "GCP", "Docker"],
    },
    {
      image: "",
      projectName: "Agentic AI Defense Framework",
      projectDesc:
        "Prototype multi-agent monitoring and guardrails to mitigate prompt-injection and adversarial attacks on chatbots.",
      footerLink: [{ name: "Repository", url: "https://github.com/yukthapriya/agentic-ai-chatbot-defense.git" }],
      technologies: ["LangChain", "BERT classifier", "Anomaly detection", "Streamlit"],
    },
  ],
  display: true,
};

// Achievements & Certifications
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Selected recognitions and certifications",
  achievementsCards: [
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      subtitle: "Fundamentals of AI on Azure — credential available on Credly.",
      image: require("./assets/images/azure_badge.png"),
      imageAlt: "Azure AI Fundamentals",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.credly.com/badges/d6dbbe88-14df-4d67-be3c-3f54c55fd2ea/public_url",
        },
      ],
    },
    {
      title: "LFMBio 2026 — Paper Acceptance",
      subtitle:
        "MedProbCLIP accepted to Workshop on Large Foundation Models in Biology and Biomedicine (LFMBio 2026), co-located with WACV 2026 (Tucson, AZ). Presentation: March 6, 2026.",
      image: require("./assets/images/lfmbio.png"),
      imageAlt: "LFMBio 2026",
      footerLink: [{ name: "Workshop website", url: "" }],
    },
    {
      title: "AAAI Workshop Paper (Accepted)",
      subtitle: "Benchmarking the Robustness of Contrastive Learning Models for Medical Image-Report Retrieval",
      image: require("./assets/images/aaai.png"),
      imageAlt: "AAAI Workshop",
      footerLink: [{ name: "Paper", url: "https://doi.org/10.48550/arXiv.2501.09134" }],
    },
  ],
  display: true,
};

// Publications — updated entries
const publications = [
  {
    title:
      "MedProbCLIP: Probabilistic Adaptation of Vision–Language Foundation Model for Reliable Radiograph–Report Retrieval",
    authors: "Yuktha Priya Masupalli, et al.",
    venue: "Workshop on Large Foundation Models in Biology and Biomedicine (LFMBio 2026), co-located with WACV 2026",
    year: 2026,
    note: "Accepted for presentation — March 6, 2026, Tucson, AZ",
    url: "",
  },
  {
    title: "Improving Medical Imaging Model Calibration through Probabilistic Embedding",
    authors: "Bonian Han, Yuktha Priya Masupalli, Xin Xing, Gongbo Liang",
    venue: "2024 IEEE International Conference on Big Data (BigData)",
    year: 2024,
    pages: "pp. 4490-4496",
    doi: "10.1109/BigData62323.2024.10825661",
    links: [
      {
        name: "IEEE Xplore",
        url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10825661&isnumber=10824942",
      },
      { name: "PDF (arXiv if available)", url: "" },
    ],
    abstract:
      "Neural network model calibration is crucial in medical imaging, where accurate probabilistic predictions are essential for informed decision-making. Existing calibration techniques often introduce additional complexity and may not fully capture the inherent uncertainty associated with the tasks. To address these challenges, we propose a novel approach based on probabilistic embedding that models uncertainty through a Gaussian distribution. By embedding the model’s predictions into a probabilistic space, the proposed method enables effective uncertainty quantification. We demonstrate the effectiveness of our approach on multiple medical imaging tasks. The experimental result shows our method outperforms existing techniques in terms of both calibration and accuracy.",
  },
  {
    title:
      "Benchmarking the Robustness of Contrastive Learning Models for Medical Image-Report Retrieval under Occlusion Attacks",
    authors: "Demetrio Deanda, Yuktha Priya Masupalli, Jeong Yang, Young Lee, Zechun Cao, Gongbo Liang",
    venue: "AAAI Workshop (39th Annual AAAI Conference) — Workshop paper",
    year: 2025,
    month: "March 2025",
    links: [{ name: "arXiv / DOI", url: "https://doi.org/10.48550/arXiv.2501.09134" }],
    abstract:
      "This study benchmarks robustness of contrastive learning models (CLIP, CXR-RePaiR, MedCLIP, CXR-CLIP) for radiograph–report retrieval under occlusion-based corruption. Results show models are sensitive to out-of-distribution occlusion, stressing the need for robustness-focused methods.",
  },
  {
    title:
      "Probabilistic Embedding for Enhancing Medical Imaging Model Trustworthiness Through Calibration via Gaussian Distribution",
    authors: "Yuktha Priya Masupalli",
    venue: "IEEE Pulse",
    year: 2025,
    volume: "16",
    issue: "1",
    pages: "26-28",
    doi: "10.1109/MPULS.2025.3526485",
    url: "https://doi.org/10.1109/MPULS.2025.3526485",
    abstract:
      "Short overview of Gaussian-based probabilistic embedding techniques to improve calibration and trustworthiness of medical imaging models; emphasizes practical deployment considerations and evaluation metrics.",
  },
  {
    title: "MedProbCLIP: Probabilistic Vision–Language Retrieval for Medical Reports (Technical Report)",
    authors: "Yuktha Priya Masupalli, et al.",
    venue: "arXiv / Technical report",
    year: 2024,
    url: "https://arxiv.org/abs/your_medprobclip_preprint",
    abstract:
      "Code and reproducible experiments for MedProbCLIP; includes evaluation on large-scale chest x-ray datasets.",
  },
  {
    title: "Hybrid Vulnerability Detection in Rust Using ML and Static Analysis",
    authors: "Yuktha Priya Masupalli",
    venue: "Workshop on Software Security (peer-reviewed workshop)",
    year: 2024,
    url: "https://example.org/rust-vuln-paper",
    abstract:
      "Combines static analysis with ML classifiers on LLVM IR for automated vulnerability flagging in Rust codebases.",
  },
];

// Showcase / Highlights — recruiter-friendly bullets and quick metrics
const showcase = {
  highlights: [
    {
      title: "Publications & Research",
      detail:
        "Multiple peer-reviewed and accepted workshop/journal publications; MedProbCLIP accepted to LFMBio 2026.",
    },
    {
      title: "Open Source & Code",
      detail:
        "Active GitHub projects: InterviewFlow, Rust vulnerability detector, University Recommendation engine — see repos for tests, CI and READMEs.",
    },
    {
      title: "Production Experience",
      detail:
        "Built and deployed GenAI agents and microservices on AWS/GCP; experience with containerized CI/CD and monitoring (Prometheus).",
    },
    {
      title: "Google Scholar",
      detail: socialMediaLinks.googleScholar,
    },
    {
      title: "ResearchGate",
      detail: socialMediaLinks.researchGate,
    },
  ],
  metrics: {
    publications: publications.length,
    githubRepos: 12,
    citations: "—",
    projectsDeployed: 3,
  },
};

const blogSection = {
  title: "Blogs",
  subtitle: "Technical writing and research notes.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false,
};

// Restored talkSection (hidden by default so UI components don't break)
const talkSection = {
  title: "Talks",
  subtitle: emoji("Talks and workshops"),
  talks: [
    // Add talk objects here when slides / recordings are available
  ],
  display: false,
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Interviews and podcasts",
  podcast: [],
  display: false,
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Available for internships and full‑time roles in AI/ML, MLOps and full‑stack engineering.",
  number: "+1 (830) 318-5495",
  email_address: "myukthapriya@gmail.com",
};

const twitterDetails = {
  userName: "",
  display: false,
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  publications,
  showcase,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};