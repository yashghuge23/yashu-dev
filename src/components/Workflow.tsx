import { WORKFLOW } from '../data';
import { 
  MessageSquare, 
  Compass, 
  Code, 
  Rocket 
} from 'lucide-react';

export default function Workflow() {
  const getWorkflowIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-accent-electric";
    switch (iconName) {
      case 'forum':
        return <MessageSquare className={iconClass} />;
      case 'architecture':
        return <Compass className={iconClass} />;
      case 'terminal':
        return <Code className={iconClass} />;
      case 'rocket_launch':
        return <Rocket className={iconClass} />;
      default:
        return <Code className={iconClass} />;
    }
  };

  return (
    <section 
      className="py-16 md:py-24 max-w-[1200px] mx-auto px-6 border-t border-border-subtle"
      id="workflow"
    >
      {/* Section Header */}
      <div className="mb-10 space-y-2">
        <span className="text-xs font-semibold tracking-widest text-accent-emerald uppercase font-mono">
          Workflow
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight" id="workflow-heading">
          How I Work
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" id="workflow-grid">
        {WORKFLOW.map((step) => (
          <div 
            key={step.stepNumber}
            className="glass-card p-6 rounded-xl relative overflow-hidden group"
            id={`workflow-card-${step.stepNumber}`}
          >
            {/* Design Watermark Accent Number */}
            <span 
              className="text-6xl font-black text-accent-electric/5 absolute -right-2 -bottom-2 select-none pointer-events-none transition-all group-hover:scale-110 group-hover:text-accent-electric/10 duration-500"
              aria-hidden="true"
            >
              {step.stepNumber}
            </span>

            {/* Icon Wrapper */}
            <div className="w-12 h-12 bg-accent-electric/10 border border-accent-electric/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent-electric/15 transition-colors">
              {getWorkflowIcon(step.iconName)}
            </div>

            {/* Core Text Info */}
            <h4 className="text-base font-extrabold text-white mb-2" id={`workflow-title-${step.stepNumber}`}>
              {step.title}
            </h4>
            
            <p className="text-text-muted text-sm leading-relaxed max-w-xs" id={`workflow-desc-${step.stepNumber}`}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
