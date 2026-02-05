
import { SystemWork, ExperienceItem, CapabilityGroup, Product } from './types';

export const PERSON_NAME = "Sakthivel S";
export const HEADLINE = "Full Stack Web Developer | ERP & SaaS Products | 3 Years | PHP, MySQL, JavaScript, jQuery, React, HTML, CSS | Building Scalable Web Apps";

export const ABOUT_TEXT = `I am a Full Stack Web Developer with 3 years of experience working on real-world ERP and SaaS products, focused on building scalable, maintainable, and user-centric web applications.

Currently, I work at EssEmm Technologies, a product-based company, where I contribute to OIMS (Office Integrated Management System)—an end-to-end ERP platform used for business operations, presales, service management, reporting, and internal workflows. I work across both frontend and backend, with a strong focus on UI/UX improvements and product feature enhancements.

I enjoy working on complex workflows, improving usability, and translating business requirements into practical, production-ready solutions.`;

export const HOW_I_WORK_old = `I approach development by first understanding business workflows and operational requirements.
I focus on designing clear, usable UI/UX before implementing scalable backend logic.
My process emphasizes practical solutions, maintainability, and real-world usability over theoretical complexity.
I collaborate closely with stakeholders and team members, iterate based on feedback, and continuously improve existing systems.
I value clean code, clear structure, and long-term stability in product environments.`;

export const HOW_I_WORK = [
  "I approach development by first understanding business workflows and operational requirements.",
  "I focus on designing clear, usable UI/UX before implementing scalable backend logic.",
  "My process emphasizes practical solutions, maintainability, and real-world usability over theoretical complexity.",
  "I collaborate closely with stakeholders and team members, iterate based on feedback, and continuously improve existing systems.",
  "I value clean code, clear structure, and long-term stability in product environments."
]


export const TECHNICAL_CAPABILITIES = [
  {
    category: "Frontend Engineering",
    skills: [
      "HTML5, CSS3",
      "JavaScript (ES6+)",
      "jQuery, jQuery UI",
      "React.js",
      "Responsive and mobile-first design"
    ]
  },
  {
    category: "Backend & Data",
    skills: [
      "PHP",
      "MySQL",
      "REST APIs",
      "AJAX-based workflows",
      "Data validation and integrity"
    ]
  },
  {
    category: "Product & ERP Systems",
    skills: [
      "ERP module development",
      "Dashboard and reporting systems",
      "Ticketing and service workflows",
      "Internal tools and admin panels",
      "Role-based access control"
    ]
  },
  {
    category: "Modern Tooling",
    skills: [
      "Tailwind CSS",
      "Figma",
      "Laravel",
      "Git and version control",
      "UI/UX best practices"
    ]
  }
];


export const SYSTEM_THINKING_TEXT = `I approach system design by first understanding data flow, user roles, and operational constraints. I focus on building architectures that are easy to extend, debug, and maintain. Special attention is given to permission handling, data accuracy, performance, and long-term usability in ERP and SaaS products. My goal is to design systems that teams can confidently use and evolve over time.`;

export const INTERNAL_TOOLS_PHILOSOPHY_TEXT_v1 = `Internal tools are used daily by operations, sales, and support teams. My focus is building tools that reduce friction, improve clarity, and support real workflows instead of adding complexity. I prioritize reliability, usability, and consistency over visual noise.`;

export const INTERNAL_TOOLS_PHILOSOPHY_TEXT = `
Internal tools are used daily by operations, sales, and support teams, making reliability and clarity critical.
I focus on building tools that reduce friction, support real business workflows, and simplify day-to-day operations instead of adding unnecessary complexity.
I prioritize usability, consistency, and long-term stability over visual noise or short-term design trends.
`;


export const KEY_STRENGTHS = [
  "ERP and SaaS product development used in real operational environments",
  "UI/UX improvements for complex and legacy business systems",
  "Dashboard, reporting, and analytics module development for decision-making",
  "Workflow design for ticketing, service management, and presales systems",
  "Data accuracy, validation, and secure verification workflows",
  "Mobile-friendly web applications for field teams and internal operations"
];

export const CONFIDENTIAL_NOTICE = "Most of the ERP and internal system work showcased in this portfolio is part of a product-based organization. Due to confidentiality and company policies, project links, internal screenshots, and source code are not publicly shared. However, detailed explanations, workflows, and architectural decisions can be discussed during interviews.";

export const PRODUCTS: Product[] = [

  {
    id: "saporitos-platform",
    name: "Saporitos Restaurant",
    tagline: "Modern Dining Experience",
    description: "A fully integrated website and menu management system for restaurant operations.",
    problemStatement: "The restaurant lacked a dynamic way to sync their digital menu with the public website in real-time.",
    solutionStatement: "Created a drag-and-drop CMS that updates the public site instantly through a unified database architecture.",
    impactStatement: "Improved operational speed and provided a seamless ordering experience for diners.",
    features: [
      "Drag-and-drop menu management",
      "Live website synchronization",
      "Category-wise dynamic pricing",
      "Interactive customer ordering flow",
      "Image upload and processing for menu items"
    ],
    developerContribution: "Developed both the public-facing restaurant website and the internal menu management backend. Focused on creating a visually appealing and responsive user experience.",
    techStack: ["PHP", "MySQL", "JavaScript", "jQuery", "CSS3"],
    status: "Live",
    liveLink: "https://saporitosonline.com/",
    isConfidential: false,
    gallery: [
      "./products/saporitos/home.png",
      "./products/saporitos/menu.png",
      "./products/saporitos/catering.png",
      "./products/saporitos/daily.png",
      "./products/saporitos/coupons.png",
      "./products/saporitos/about.png",
      "./products/saporitos/contact.png",
      "./products/saporitos/seo.png",
    ]
  },

  {
    id: "mirabella-app",
    name: "Mirabella Ministry",
    tagline: "Connecting Global Communities",
    description: "A centralized platform for ministry content, prayer requests, and community broadcasts.",
    problemStatement: "The organization needed a reliable, algorithm-independent way to reach a global audience and manage requests.",
    solutionStatement: "Developed a custom PWA featuring low-latency live broadcasts and a global submission architecture.",
    impactStatement: "Increased global engagement and community visibility without reliance on third-party social media.",
    features: [
      "Global prayer request submission system",
      "Live event broadcasts and media library",
      "Interactive community engagement features",
      "Responsive and intuitive navigation",
      "Multi-device content delivery"
    ],
    developerContribution: "Acted as Project Owner and Lead Full Stack Developer. Built the platform from ground up, focusing on high availability and low-latency interaction for a global user base.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "Tailwind CSS"],
    status: "Live",
    liveLink: "https://mirabellaapp.org/",
    isConfidential: false,
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "service-execution-app",
    name: "Service App",
    tagline: "Field Service Optimization",
    description: "Mobile-first solution for field technician scheduling and execution.",
    problemStatement: "Field technicians lacked real-time access to records and struggled with instant documentation of expenses and closures.",
    solutionStatement: "Engineered a mobile-first tracking system with OTP verification and offline-first data synchronization capabilities.",
    impactStatement: "Reduced manual effort for field teams and improved verification accuracy for service closures.",
    features: [
      "Real-time technician scheduling and dispatch",
      "Geo-location tracking for service verification",
      "OTP-based secure service closure",
      "Digital expense logging and approval",
      "Offline-capable data sync"
    ],
    developerContribution: "Designed the mobile-friendly UI and implemented the tracking and verification workflows. Optimized the API for performance on varying network conditions.",
    techStack: ["React.js", "PHP API", "MySQL", "PWA"],
    status: "In Production",
    isConfidential: true,
    gallery: [
      "https://images.unsplash.com/photo-1512428559083-a40ce44d8d06?auto=format&fit=crop&q=80&w=1200"
    ]
  },
];

export const SYSTEMS: SystemWork[] = [
  {
    name: "Custom ERP Dashboards & Reports Module",
    objective: "Provide actionable business insights and improve presales visibility within OIMS ERP.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Designed interactive dashboards, presales analytics, Kanban-based workflow controllers, and drill-down reports for sales and operations teams.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
  {
    name: "Presales Kanban & Workflow Controller",
    objective: "Visualize and manage presales progression across multiple workflow stages.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Designed a Kanban-based workflow controller to track cold, warm, and hot presales stages with drill-down views, document navigation, and status-based filtering for sales teams.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
  {
    name: "OIMS AZEE – Ticket Raising Module",
    objective: "Standardize and simplify internal and customer support ticket creation within ERP.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Designed a clean ticket creation interface supporting multiple request types, attachments, and mobile-friendly access with Telegram notification integration.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
  {
    name: "OIMS Ticket Analyzer",
    objective: "Centralize ticket analysis, communication history, and workflow visibility.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Developed tabular and Kanban views, advanced filters, inline editing, Telegram conversation archiving, printable reports, and analytical dashboards.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
  {
    name: "OIMS Time Analyzer (Activity & Effort Tracking)",
    objective: "Track, analyze, and report engineer time across tickets, services, and projects.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Designed hierarchical time tracking views, engineer-wise analysis, budget comparisons, exportable reports, and detailed activity logs.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
  {
    name: "OIMS FBO – Menu Management System",
    objective: "Modernize restaurant menu management while preserving existing workflows.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Rebuilt legacy menu pages, added image upload and edit features, drag-and-drop ordering, category-wise pricing, and printable menu templates.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS"]
  },
  {
    name: "Service App (Mobile-Friendly ERP Extension)",
    objective: "Enable field engineers to manage service execution, tracking, and reporting on mobile devices.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Designed mobile-first service dashboards, job execution flows, OTP-based closures, geo-location tracking, expense logging, and technician checklists.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
  {
    name: "OIMS Contact Verification System",
    objective: "Ensure secure and accurate customer and supplier data verification within ERP.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Built OTP-based phone and email verification workflows with prefilled data review, status tracking, and automated ERP updates.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
  {
    name: "Telecalling Dashboard (Presales Module)",
    objective: "Centralize and manage presales telecalling activities within the ERP system.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Designed and developed a presales telecalling dashboard with structured listings, activity tracking, call logs, follow-ups, and document-based views to improve presales workflow visibility.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
  {
    name: "Contract & Service Management Dashboard",
    objective: "Enhance contract management by integrating service and AMC tracking into a unified ERP view.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Designed and developed a document-based contract dashboard with integrated AMC workflows, service listings, visit history, and scheduling features.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "EssEmm Technologies",
    location: "Coimbatore, India",
    department: "Core Engineering",
    roles: [
      {
        title: "UIUX Developer",
        duration: "Jan 2024 – Present",
        description: "Working on OIMS (Office Integrated Management Solutions), a comprehensive ERP platform designed to support and streamline end-to-end business operations, including presales, service management, reporting, and internal workflows.",
        highlights: [
          "Designing and developing user-friendly web interfaces with a strong focus on usability, performance, and cross-browser compatibility.",
          "Handling both frontend and backend development using HTML5, CSS3, JavaScript, jQuery, PHP, and MySQL.",
          "Collaborating with cross-functional teams to gather requirements and deliver efficient, scalable ERP solutions.",
          "Maintaining and enhancing existing applications by fixing issues, improving UI/UX, and implementing new features.",
          "Actively contributing to product improvements in a production ERP environment used by real business teams."
        ],
        details: [
          "Custom ERP dashboards providing real-time business insights",
          "Presales and telecalling dashboards with task tracking and follow-ups",
          "Contract and service management workflows with AMC tracking",
          "Internal ERP tools to optimize business processes and usability",
          "Reports and analytics modules for business decision-making",
          "Document-based ERP views for structured data handling",
          "Service workflow tracking including scheduling and visit history",
          "UI/UX improvements across complex and legacy ERP systems"
        ]

      },
      {
        title: "Junior Developer",
        duration: "Jan 2023 – Jan 2024",
        highlights: [
          "Developed responsive web applications using HTML5, CSS3, JavaScript, and jQuery.",
          "Implemented AJAX-based features and integrated third-party APIs to improve user interactivity.",
          "Designed and maintained backend functionalities using PHP and MySQL.",
          "Collaborated with team members to troubleshoot issues and resolve technical problems.",
          "Contributed to database design and optimization to improve application performance.",
          "Assisted in maintaining and enhancing existing web applications and internal tools."
        ]
      }
    ]
  }
];

export const EDUCATION = [
  { degree: "Master of Computer Applications (MCA)", institution: "Anna University", period: "2021 – 2023" },
  { degree: "Bachelor of Computer Applications (BCA)", institution: "Periyar University", period: "2018 – 2021" },
  {degree: "Higher Secondary Certificate (HSC)", institution: "State Board", period: "2016 – 2018"}
];

export const AVAILABILITY = "I am actively open to Junior to Mid-level Full Stack or Web Developer roles, especially in ERP, SaaS, or product-based teams.";

export const CORE_TECH = ["PHP", "MySQL", "JavaScript", "jQuery", "React", "HTML", "CSS", "AJAX"];
export const INDEPENDENT_TECH = ["React.js", "Laravel", "Tailwind CSS"];
