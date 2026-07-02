import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { 
  X, 
  CircleCheck, 
  ShoppingBag, 
  Video, 
  HeartPulse, 
  TrendingUp, 
  Clock, 
  Gauge, 
  ShieldCheck 
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project || !project.caseStudy) return null;

  const { caseStudy } = project;

  // Select suitable icons for metrics dynamically
  const getMetricIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('rate') || l.includes('revenue') || l.includes('booking')) return <TrendingUp className="w-5 h-5 text-accent-electric" />;
    if (l.includes('time') || l.includes('duration')) return <Clock className="w-5 h-5 text-accent-electric" />;
    if (l.includes('speed') || l.includes('load')) return <Gauge className="w-5 h-5 text-accent-electric" />;
    return <ShieldCheck className="w-5 h-5 text-accent-electric" />;
  };

  const getProjectIcon = () => {
    switch (project.iconName) {
      case 'shopping-bag':
        return <ShoppingBag className="w-12 h-12 text-accent-electric" />;
      case 'video':
        return <Video className="w-12 h-12 text-accent-electric" />;
      case 'heart-pulse':
        return <HeartPulse className="w-12 h-12 text-accent-electric" />;
      default:
        return <ShoppingBag className="w-12 h-12 text-accent-electric" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background-deep/80 backdrop-blur-md"
          id="modal-backdrop"
        />

        {/* Modal Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-surface-container border border-border-subtle rounded-2xl overflow-hidden shadow-2xl z-10"
          id="modal-card"
        >
          {/* Top Decorative Border */}
          <div className="h-1.5 w-full bg-gradient-to-r from-accent-electric to-accent-emerald" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full border border-border-subtle bg-surface-container-high text-text-muted hover:text-text-primary hover:border-accent-electric transition-colors"
            aria-label="Close modal"
            id="modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-xl bg-surface-container-high border border-border-subtle flex items-center justify-center">
                {getProjectIcon()}
              </div>
              <div>
                <span className="text-xs font-semibold tracking-wider text-accent-emerald uppercase bg-accent-emerald/10 border border-accent-emerald/20 px-2.5 py-1 rounded">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-text-primary mt-2" id="modal-project-title">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Metrics Ribbon */}
            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-3 md:gap-4 p-4 rounded-xl bg-surface-container-low border border-border-subtle mb-8">
                {caseStudy.metrics.map((metric, i) => (
                  <div key={i} className="text-center flex flex-col items-center justify-center">
                    <div className="mb-1">{getMetricIcon(metric.label)}</div>
                    <div className="text-xl md:text-2xl font-black text-accent-electric" id={`modal-metric-val-${i}`}>
                      {metric.value}
                    </div>
                    <div className="text-[10px] md:text-xs text-text-muted font-mono uppercase tracking-wider mt-0.5">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Body Sections */}
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-text-muted">
              {/* Overview */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-accent-electric font-mono mb-2">
                  Project Overview
                </h4>
                <p id="modal-overview-text">{caseStudy.overview}</p>
              </div>

              {/* Problem / Challenge */}
              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-border-subtle/50">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-rose-400 font-mono mb-2">
                    The Challenge
                  </h4>
                  <p className="text-sm leading-relaxed" id="modal-problem-text">{caseStudy.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-accent-emerald font-mono mb-2">
                    Our Solution
                  </h4>
                  <p className="text-sm leading-relaxed" id="modal-solution-text">{caseStudy.solution}</p>
                </div>
              </div>

              {/* Key Features List */}
              <div className="pt-4 border-t border-border-subtle/50">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-accent-electric font-mono mb-3">
                  Technical Architecture & Key Features
                </h4>
                <ul className="grid md:grid-cols-2 gap-3" id="modal-features-list">
                  {caseStudy.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CircleCheck className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Footer */}
              <div className="pt-6 border-t border-border-subtle/50 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-text-muted">Tech Stack:</span>
                {project.tech.map((techItem, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-mono px-2.5 py-1 bg-surface-container-high border border-border-subtle rounded text-accent-electric"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
