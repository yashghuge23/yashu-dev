export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  metrics?: { label: string; value: string }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  iconName: 'shopping-bag' | 'video' | 'heart-pulse';
  caseStudy?: CaseStudy;
}

export interface Skill {
  name: string;
  iconName: string;
  isSpecial?: boolean;
}

export interface TimelineItem {
  period: string;
  title: string;
  institution: string;
  description: string;
  isCurrent?: boolean;
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName: 'forum' | 'architecture' | 'terminal' | 'rocket_launch';
}
