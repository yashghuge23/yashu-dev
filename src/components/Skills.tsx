import { SKILLS } from '../data';
import { 
  Terminal, 
  Binary, 
  Database, 
  Cpu, 
  FileCode, 
  Code, 
  Sparkles 
} from 'lucide-react';

export default function Skills() {
  // Map our custom iconName to a real Lucide Icon Component
  const getIcon = (iconName: string, isSpecial?: boolean) => {
    const iconClass = isSpecial ? "w-5 h-5 text-accent-electric animate-pulse" : "w-5 h-5 text-accent-electric";
    switch (iconName) {
      case 'code':
        return <Code className={iconClass} />;
      case 'analytics':
        return <Binary className={iconClass} />;
      case 'database':
        return <Database className={iconClass} />;
      case 'psychology':
        return <Cpu className={iconClass} />;
      case 'html':
        return <FileCode className={iconClass} />;
      case 'javascript':
        return <Terminal className={iconClass} />;
      case 'auto_awesome':
        return <Sparkles className={iconClass} />;
      case 'terminal':
        return <Terminal className={iconClass} />;
      default:
        return <Code className={iconClass} />;
    }
  };

  return (
    <section 
      className="py-16 md:py-24 max-w-[1200px] mx-auto px-6 border-t border-border-subtle"
      id="skills"
    >
      {/* Section Header */}
      <div className="mb-10 space-y-2">
        <span className="text-xs font-semibold tracking-widest text-accent-emerald uppercase font-mono">
          Expertise
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight" id="skills-heading">
          Skills & Technologies
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {SKILLS.map((skill, index) => {
          if (skill.isSpecial) {
            return (
              <div 
                key={index}
                className="group relative flex items-center gap-3 border border-accent-electric/50 rounded-xl p-4 bg-accent-electric/5 overflow-hidden shadow-[0_0_15px_rgba(102,252,241,0.05)] transition-transform hover:-translate-y-1"
                id={`skill-card-special-${index}`}
              >
                {/* Shimmer overlay effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-electric/15 to-transparent -translate-x-full animate-shimmer"
                  aria-hidden="true"
                />
                <div className="p-1 rounded-lg bg-accent-electric/10 shrink-0">
                  {getIcon(skill.iconName, true)}
                </div>
                <span className="text-sm font-mono font-bold text-white tracking-tight shrink-0">
                  {skill.name}
                </span>
              </div>
            );
          }

          return (
            <div 
              key={index}
              className="flex items-center gap-3 glass-card rounded-xl p-4 cursor-default"
              id={`skill-card-${index}`}
            >
              <div className="p-1 rounded-lg bg-white/5 group-hover:bg-accent-electric/10 transition-colors shrink-0">
                {getIcon(skill.iconName)}
              </div>
              <span className="text-sm font-mono font-semibold text-text-muted hover:text-white transition-colors tracking-tight shrink-0">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
