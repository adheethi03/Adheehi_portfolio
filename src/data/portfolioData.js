/**
 * ============================================================
 *  CENTRAL DATA FILE  —  Edit all your content here.
 *  Every section of the portfolio reads from this file.
 * ============================================================
 */

export const portfolioData = {

  // ── Personal ───────────────────────────────────────────────
  personal: {
    name:      "Adheethi K.S.",
    initials:  "AKS",
    title:     "Computer Science Engineer",
    tagline:   "Full-Stack Developer  ·  MERN Stack  ·  AI Enthusiast",
    summary:
      "A Computer Science Engineering graduate with a solid foundation in full-stack web development. I build scalable, responsive applications using the MERN stack and actively leverage AI tooling to accelerate development and explore emerging solutions. I care about clean architecture, intuitive interfaces, and technology that solves real problems.",
    location:  "Malappuram, Kerala, India",
    phone:     "+91 6238261049",
    email:     "adheethiks@gmail.com",
    linkedin:  "https://www.linkedin.com/in/adheethiks",
    github:    "https://github.com/adheethiks",   // update if different
    resume:    "/resume.pdf",                       // place your PDF in public/resume.pdf
    avatar:    "/profile.jpg",                         // profile photo
  },

  // ── Navigation ─────────────────────────────────────────────
  nav: ["Home", "About", "Skills", "Experience", "Projects", "Resume", "Contact"],

  // ── Skills ─────────────────────────────────────────────────
  skills: [
    {
      category: "Frontend",
      items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Responsive Design", "UI/UX Design"],
    },
    {
      category: "Backend & Database",
      items: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "MySQL"],
    },
    {
      category: "Languages",
      items: ["JavaScript", "Python", "Java", "C"],
    },
    {
      category: "Tools & Practices",
      items: ["Git", "VS Code", "Version Control", "Debugging", "Clean Code", "Problem Solving"],
    },
    {
      category: "Leadership & Soft Skills",
      items: ["Team Collaboration", "Technical Coordination", "Project Management", "Public Speaking", "Event Organisation"],
    },
  ],

  // ── Experience ─────────────────────────────────────────────
  experience: [
    {
      type:    "Internship",
      role:    "MERN Stack Developer",
      company: "Camerin Folks",
      period:  "2026",
      summary:
        "Contributed to the full-stack development lifecycle of production-grade web applications in a professional team environment.",
      highlights: [
        "Built and maintained component-driven React.js interfaces for client-facing applications.",
        "Developed RESTful APIs with Node.js and Express.js, integrating them with MongoDB collections.",
        "Collaborated with the team on code reviews, debugging sessions, and iterative deployment cycles.",
        "Strengthened proficiency in agile workflows, version control, and collaborative software development.",
      ],
    },
  ],

  // ── Volunteer / Leadership ─────────────────────────────────
  volunteer: [
    {
      role:         "Web Master",
      organisation: "IEEE SB MESCE",
      period:       "2025 – 2026",
      highlights: [
        "Designed and maintained the organisation's dynamic web presence using the MERN stack.",
        "Coordinated with cross-functional teams to ensure consistent functionality and design quality.",
      ],
    },
    {
      role:         "Marketing Lead",
      organisation: "MATRICS, MESCE",
      period:       "2025 – 2026",
      highlights: [
        "Spearheaded marketing campaigns and developed creative strategies to amplify brand visibility.",
        "Managed digital outreach across social media platforms and coordinated campus-level promotions.",
      ],
    },
    {
      role:         "Technical Coordinator",
      organisation: "MATRICS, MESCE",
      period:       "2024 – 2025",
      highlights: [
        "Planned and executed technical workshops and events focused on student skill development.",
        "Led collaborative teams to drive meaningful technical engagement across the campus community.",
      ],
    },
  ],

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      degree:      "B.Tech — Computer Science Engineering",
      institution: "MES College of Engineering, Kuttipuram",
      period:      "2022 – 2026",
    },
    {
      degree:      "Full Stack Web Development",
      institution: "Entri Elevate",
      period:      "2025",
    },
    {
      degree:      "Higher Secondary Education",
      institution: "MIC HSS Valluvambram",
      period:      "2019 – 2021",
    },
    {
      degree:      "High School Education",
      institution: "NSS EM HSS Manjeri",
      period:      "",
    },
  ],

  // ── Projects ───────────────────────────────────────────────
  projects: [
    {
      id:       1,
      name:     "Evaluation.AI",
      tagline:  "AI-powered automated handwritten answer sheet evaluation system",
      summary:
        "An intelligent platform that eliminates the manual burden of paper evaluation. Leveraging OCR technology and reasoning-based scoring algorithms, the system processes handwritten answer sheets, compares responses against reference keys, and delivers structured grading results — instantly.",
      highlights: [
        "OCR pipeline converts scanned handwritten text into structured digital content.",
        "Reasoning-based marking engine evaluates semantic correctness, not just keyword matching.",
        "Role-based web interface for uploading sheets, managing subjects, and reviewing scores.",
      ],
      tech:     ["React.js", "Node.js", "Express.js", "MongoDB", "OCR", "AI/ML"],
      tagline2: "A step toward faster, fairer, and scalable academic evaluation.",
      github:   "",   // add your GitHub URL
      demo:     "",   // add your live demo URL
      featured: true,
    },
    {
      id:       2,
      name:     "Chroplex",
      tagline:  "Full-stack movie review and discovery platform",
      summary:
        "A community-driven movie review application where users can browse, rate, and review films in a personalised environment. Built with security-first principles using JWT authentication and a responsive, component-based React frontend.",
      highlights: [
        "JWT-based authentication flow with protected routes and session management.",
        "Dynamic movie listing with user-specific review creation and rating system.",
        "MongoDB-backed REST API handling user data, movie records, and review entries.",
      ],
      tech:     ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bootstrap"],
      tagline2: "Where every opinion shapes the conversation.",
      github:   "",
      demo:     "",
      featured: true,
    },
    {
      id:       3,
      name:     "TaskFlow",
      tagline:  "Kanban-style project and task management system",
      summary:
        "A team-oriented task management application built around Kanban principles. TaskFlow enables teams to organise work visually across stages, assign responsibilities, track progress, and collaborate efficiently — all within a clean, purpose-built interface.",
      highlights: [
        "Drag-and-drop Kanban board with customisable stages (To Do, In Progress, Done).",
        "Team management module for adding members, assigning tasks, and tracking ownership.",
        "Real-time task state persistence via RESTful API and MongoDB backend.",
      ],
      tech:     ["React.js", "Node.js", "Express.js", "MongoDB"],
      tagline2: "Clarity in collaboration, structure in execution.",
      github:   "",
      demo:     "",
      featured: false,
    },
  ],

  // ── Languages ──────────────────────────────────────────────
  languages: ["English", "Malayalam"],
};
