
export interface SystemWork {
  name: string;
  objective?: string;
  overview?: string;
  link?: string;
  role?: string;
  contribution?: string;
  impact?: string;
  features?: string[];
  technologies?: string[];
  note?: string;
  tags?: string[];
}

export interface Product {
  id: string;
  name: string;
  logo?: string;
  tagline: string;
  description: string;
  problemStatement: string;
  solutionStatement?: string;
  impactStatement?: string;
  features: string[];
  developerContribution: string;
  techStack: string[];
  status: 'Live' | 'In Production' | 'Internal Tool' | 'MVP / In Progress';
  liveLink?: string;
  githubLink?: string;
  isConfidential: boolean;
  gallery?: string[];
}

export interface ExperienceRole {
  title: string;
  duration: string;
  description?: string;
  highlights?: string[];
  details?: string[];
}

export interface ExperienceItem {
  company: string;
  location: string;
  department: string;
  roles: ExperienceRole[];
}

export interface CapabilityGroup {
  title: string;
  skills: string[];
}
