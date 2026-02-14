
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
    name: "Saporito’s Italian Restaurant & Pizzeria",
    tagline: "A Responsive Website for Modern Dining",
    description: "A responsive and user-friendly restaurant website built to showcase menu offerings, restaurant information, locations, and online ordering options for Saporito’s Italian Restaurant & Pizzeria.",
    problemStatement: "The restaurant needed a clean and modern website to present its menu, special offers, and online ordering options clearly while ensuring a smooth experience across desktop and mobile devices.",
    solutionStatement: "Designed and developed a responsive restaurant website with structured navigation, clear call-to-action for online ordering, and visually organized content to improve customer engagement and accessibility.",
    impactStatement: "Enhanced the restaurant’s online presence, improved menu visibility, and enabled customers to easily explore offerings and place online orders from any device.",
    features: [
      "Responsive restaurant website for desktop and mobile",
      "Menu display with categories and visual hierarchy",
      "Online ordering (takeout and delivery) call-to-action flow",
      "Special offers and promotional content sections",
      "Restaurant information including location and contact details",
      "SEO-friendly structure and content layout"
    ],
    developerContribution: "Worked as a Full Stack Web Developer. Designed and developed the complete restaurant website, implemented menu and content sections, integrated online ordering navigation, and ensured responsive behavior and usability across devices.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "jQuery Template",
      "PHP",
      "MySQL",
      "Responsive Design"
    ],
    organization: "EssEmm Technologies",
    status: "Live",
    liveLink: "https://saporitosonline.com/",
    isConfidential: false,
    gallery: [
      "./products/saporitos/home.webp",
      "./products/saporitos/menu.webp",
      "./products/saporitos/catering.webp",
      "./products/saporitos/daily.webp",
      "./products/saporitos/coupons.webp",
      "./products/saporitos/about.webp",
      "./products/saporitos/contact.webp",
      "./products/saporitos/seo.webp"
    ]
  },
  {
    id: "mirabella-app",
    name: "Mirabella Ministry",
    tagline: "A Digital Platform for Global Faith & Community Outreach",
    description: "A full-stack web application built to support Mirabella Ministry, enabling the sharing of spiritual content, prayer requests, events, broadcasts, and ministry resources for a global audience.",
    problemStatement: "Mirabella Ministry required a centralized digital platform to manage spiritual content, community engagement, prayer requests, and event information without relying solely on social media platforms.",
    solutionStatement: "Designed and developed a custom web application that allows the ministry to publish devotionals, broadcasts, events, and resources, while enabling users worldwide to submit prayer requests and engage with the ministry online.",
    impactStatement: "Enabled Mirabella Ministry to strengthen global outreach, improve community engagement, and provide structured access to spiritual resources across devices.",
    features: [
      "Prayer request submission and management",
      "Devotionals and spiritual content publishing",
      "Event listings and ministry activity updates",
      "Broadcast and media sharing pages",
      "Testimonies and community engagement sections",
      "Structured navigation for ministry resources",
      "Responsive design for mobile and desktop"
    ],
    developerContribution: "Worked as Project Owner and Full Stack Web Developer. Designed the application architecture, developed backend and frontend features, implemented content and prayer request modules, and ensured responsive and user-friendly experiences across devices.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    organization: "EssEmm Technologies",
    status: "Live",
    liveLink: "https://mirabellaapp.org/",
    isConfidential: false,
    gallery: [
      "./products/mirabella/mockup.webp",
      "./products/mirabella/opening page.webp",
      "./products/mirabella/desktop mockup.webp"
    ]
  },
  {
    id: "service-execution-app",
    name: "Service Execution App",
    tagline: "Mobile-First Field Service Management",
    description: "A mobile-friendly service execution application built as an extension of the OIMS ERP system to support field engineers with real-time service tracking, reporting, and job execution.",
    problemStatement: "Field engineers and service teams needed a reliable mobile solution to access service tickets, execute jobs in real time, track activities, record expenses, and close service requests with proper verification while working in the field.",
    solutionStatement: "Designed and developed a mobile-first service application integrated with the OIMS ERP that enables technicians to manage service tickets, perform structured service execution, track locations, submit reports, log expenses, and securely close jobs using OTP-based verification.",
    impactStatement: "Improved operational efficiency for field service teams by reducing manual paperwork, ensuring accurate service execution tracking, and enabling secure and verifiable service closures.",
    features: [
      "Mobile-responsive service dashboard with category-wise service counts",
      "Card-based service ticket listing with detailed customer and job information",
      "Tab-based service status filtering (Open, In-Progress, Closed)",
      "Detailed service ticket view with service history and call logs",
      "Technician scheduling and assignment",
      "Structured service execution workflow with visit reports and file uploads",
      "Mandatory technician checklists for service compliance",
      "Geo-location tracking during job start and completion",
      "Service log and timeline tracking",
      "Multiple service closure methods including OTP-based verification",
      "Customer feedback and rating capture on service closure",
      "Expense tracking with document uploads for job-related costs"
    ],
    developerContribution: "Worked as UI/UX Developer and Full Stack Web Developer in the core engineering team. Designed mobile-first user interfaces, implemented service execution workflows, integrated geo-location and OTP-based verification, and developed expense tracking and service closure modules.",
    techStack: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"],
    organization: "EssEmm Technologies",
    status: "Live",
    isConfidential: true,
    gallery: [
      "confidential"
    ]
  }

];

export const SYSTEMS: SystemWork[] = [
  {
    id: "reports module",
    name: "Custom ERP Dashboards & Reports Module",
    objective: "Provide actionable business insights and improve presales visibility within OIMS ERP.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Designed interactive dashboards, presales analytics, Kanban-based workflow controllers, and drill-down reports for sales and operations teams.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
  {
    id: "presales dashboard",
    name: "Presales Kanban & Workflow Controller",
    objective: "Visualize and manage presales progression across multiple workflow stages.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Designed a Kanban-based workflow controller to track cold, warm, and hot presales stages with drill-down views, document navigation, and status-based filtering for sales teams.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
  {
    id: "oims azee",
    name: "OIMS AZEE – Ticket Raising Module",
    objective: "Standardize and simplify internal and customer support ticket creation within ERP.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Designed a clean ticket creation interface supporting multiple request types, attachments, and mobile-friendly access with Telegram notification integration.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
  {
    id: "ticket analyzer",
    name: "OIMS Ticket Analyzer",
    objective: "Centralize ticket analysis, communication history, and workflow visibility.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Developed tabular and Kanban views, advanced filters, inline editing, Telegram conversation archiving, printable reports, and analytical dashboards.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
  {
    id: "time analyzer",
    name: "OIMS Time Analyzer (Activity & Effort Tracking)",
    objective: "Track, analyze, and report engineer time across tickets, services, and projects.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Designed hierarchical time tracking views, engineer-wise analysis, budget comparisons, exportable reports, and detailed activity logs.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
  {
    id: "oims fbo",
    name: "OIMS FBO – Menu Management System",
    objective: "Modernize restaurant menu management while preserving existing workflows.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Rebuilt legacy menu pages, added image upload and edit features, drag-and-drop ordering, category-wise pricing, and printable menu templates.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS"]
  },
  {
    id: "service app",
    name: "Service App (Mobile-Friendly ERP Extension)",
    objective: "Enable field engineers to manage service execution, tracking, and reporting on mobile devices.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Designed mobile-first service dashboards, job execution flows, OTP-based closures, geo-location tracking, expense logging, and technician checklists.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
  {
    id: "contact verification",
    name: "OIMS Contact Verification System",
    objective: "Ensure secure and accurate customer and supplier data verification within ERP.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Built OTP-based phone and email verification workflows with prefilled data review, status tracking, and automated ERP updates.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
  {
    id: "telecalling dashboard",
    name: "Telecalling Dashboard (Presales Module)",
    objective: "Centralize and manage presales telecalling activities within the ERP system.",
    role: "UI/UX Developer (Full Stack Web Developer)",
    contribution:
      "Designed and developed a presales telecalling dashboard with structured listings, activity tracking, call logs, follow-ups, and document-based views to improve presales workflow visibility.",
    technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "AJAX"]
  },
  {
    id: "contract dashboard",
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
  { 
    degree: "Master of Computer Applications (MCA)", 
    university: "Anna University",
    institution: "Hindusthan College of Engineering & Technology", 
    city: "Coimbatore", 
    period: "2021 – 2023",
    percentage: "78%" 
  },
  { 
    degree: "Bachelor of Computer Applications (BCA)", 
    university: "Periyar University",
    institution: "Government Arts College",
    city: "Dharmapuri", 
    period: "2018 – 2021",
    percentage: "79%" 
  },
  // {
  //   degree: "Higher Secondary Certificate (HSC)", 
  //   university: "State Board",
  //   institution: "",
  //   city: "", 
  //   period: "2016 – 2018",
  //   percentage: "89%"
  // }
];

export const AVAILABILITY = "I am actively open to Junior to Mid-level Full Stack or Web Developer roles, especially in ERP, SaaS, or product-based teams.";
export const CORE_TECH = ["PHP", "MySQL", "JavaScript", "jQuery", "React", "HTML", "CSS", "AJAX"];
export const INDEPENDENT_TECH = ["React.js", "Laravel", "Tailwind CSS"];
