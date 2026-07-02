import { Project, Skill, TimelineItem, WorkflowStep } from './types';

export const SKILLS: Skill[] = [
  { name: 'Python', iconName: 'code' },
  { name: 'Data Science', iconName: 'analytics' },
  { name: 'Firebase', iconName: 'database' },
  { name: 'Prompt Eng.', iconName: 'psychology' },
  { name: 'HTML / CSS', iconName: 'html' },
  { name: 'JavaScript', iconName: 'javascript' },
  { name: 'Vibe Coding', iconName: 'auto_awesome', isSpecial: true },
  { name: 'Kotlin/Java', iconName: 'terminal' },
];

export const PROJECTS: Project[] = [
  {
    id: 'shoppyhub',
    title: 'Shoppyhub',
    category: 'E-COMMERCE',
    description: 'A comprehensive marketing-focused e-commerce platform designed for high conversion. Features dynamic product displays, integrated promotional banners, and a seamless checkout experience optimized for mobile users.',
    tech: ['React', 'Firebase', 'Tailwind'],
    iconName: 'shopping-bag',
    caseStudy: {
      overview: 'Shoppyhub was built to address the critical friction points in mobile shopping. By designing a mobile-first, ultra-responsive storefront with instantaneous page loads, we helped bridge the gap between product discovery and purchasing.',
      problem: 'Most mobile e-commerce platforms suffer from heavy image loading delays, complex multi-step checkout processes, and rigid layouts that fail to guide user attention to promotional items, resulting in high shopping cart abandonment rates.',
      solution: 'We engineered a highly optimized single-page store leveraging Firebase for real-time stock synchronization and lightweight dynamic catalogs. The interface focuses on smooth, animated transitions and a one-tap checkout simulation.',
      features: [
        'Dynamic visual product customizers and interactive carousels',
        'One-click direct checkout flow reducing visual distraction',
        'Real-time automated inventory level alerts powered by Firebase',
        'Intelligent contextual promotional banner placement',
        'Fully responsive design with touch-gesture optimizations'
      ],
      metrics: [
        { label: 'Conversion Rate', value: '+34%' },
        { label: 'Checkout Time', value: '-60s' },
        { label: 'Page Load Speed', value: '0.6s' }
      ]
    }
  },
  {
    id: 'clipcraft',
    title: 'ClipCraft',
    category: 'MARKETPLACE',
    description: 'A specialized marketplace for digital content creators. It provides advanced features like preview snippets, seller dashboards, secure licensing systems, and automated asset delivery for video editors and graphic designers.',
    tech: ['Next.js', 'PostgreSQL', 'Stripe'],
    iconName: 'video',
    caseStudy: {
      overview: 'ClipCraft is a dual-sided digital marketplace that simplifies how video editors, motion designers, and graphic artists publish, license, and deliver premium assets to clients worldwide.',
      problem: 'Existing platforms charge exorbitant fees, offer poor file security prior to licensing, and lack embedded preview players that allow creators to present video and audio templates smoothly in-browser.',
      solution: 'Developed a robust system with auto-generated lightweight watermarked previews, secure file storage with signed token access upon payment confirmation, and a detailed analytics dashboard for content sellers.',
      features: [
        'Automatic server-side watermarking and snippet slicing',
        'Interactive analytics dashboard tracking sales, views, and downloads',
        'Secure asset delivery using expiring cryptographic URLs',
        'Multi-tier licensing select engine (Personal, Commercial, Enterprise)',
        'Stripe Connect split-payment infrastructure integration'
      ],
      metrics: [
        { label: 'Creator Revenue', value: '+45%' },
        { label: 'Asset Delivery Rate', value: '100%' },
        { label: 'License Verification', value: '<1s' }
      ]
    }
  },
  {
    id: 'kusum-homeopathy',
    title: 'Kusum Homeopathy',
    category: 'HEALTH TECH',
    description: 'A professional medical services platform for Kusum Homeopathy Clinic. Streamlines patient engagement through online consultation bookings, symptom tracking forms, and an educational resource center for homeopathic treatments.',
    tech: ['WordPress', 'Custom UI', 'SEO'],
    iconName: 'heart-pulse',
    caseStudy: {
      overview: 'A digital patient-care ecosystem designed for Kusum Homeopathy Clinic to provide seamless remote consultations and educate users on holistic, natural homeopathic remedies.',
      problem: 'Traditional clinics face challenges in managing patient queues, collecting comprehensive pre-consultation symptom reports, and maintaining patient follow-ups effectively over distance.',
      solution: 'Created an elegant portal that combines a customized booking calendar with an structured interactive symptom classifier and a rich, searchable directory of holistic health guidance.',
      features: [
        'Intelligent patient symptom-logging form with dynamic classification',
        'Automated slot reservation and instant email reminders',
        'Secure clinical resource center indexed for high SEO visibility',
        'Interactive holistic remedy finder search engine',
        'Fully compliant, secure, and highly accessible patient dashboard'
      ],
      metrics: [
        { label: 'Online Bookings', value: '+120%' },
        { label: 'Symptom Entry Time', value: '4 min' },
        { label: 'User Satisfaction', value: '4.9/5' }
      ]
    }
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    period: '2023 — 2026',
    title: 'Diploma in Computer Engineering',
    institution: "Vidya Pratishthan’s Polytechnic College, Indapur, Pune",
    description: 'Completed with a strong focus on core programming concepts, database management systems, computer networks, and fundamental web development architectures.'
  },
  {
    period: '2022 — 2023',
    title: 'SSC ',
    institution: 'Mahatma Phule High School, Tembhurni, Maharashtra',
    description: 'Built a rigorous foundation in Mathematics and Science, cultivating a deep interest in software engineering and algorithmic problem-solving.'
  }
];

export const WORKFLOW: WorkflowStep[] = [
  {
    stepNumber: '01',
    title: 'Discuss',
    description: 'Understanding your vision, project goals, and technical requirements in detail to align expectations.',
    iconName: 'forum'
  },
  {
    stepNumber: '02',
    title: 'Plan',
    description: 'Creating an actionable technical roadmap with state diagrams, wireframes, and incremental milestones.',
    iconName: 'architecture'
  },
  {
    stepNumber: '03',
    title: 'Build',
    description: 'Writing clean, well-tested, modular code with regular progress check-ins and open feedback loops.',
    iconName: 'terminal'
  },
  {
    stepNumber: '04',
    title: 'Deliver',
    description: 'Rigorous validation, fluid visual styling, seamless production deployment, and clear support handover.',
    iconName: 'rocket_launch'
  }
];
