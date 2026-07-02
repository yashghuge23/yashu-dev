import { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import { ShoppingBag, Video, HeartPulse, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'shopping-bag':
        return <ShoppingBag className="w-12 h-12 text-accent-electric transition-transform group-hover:scale-110 duration-300" />;
      case 'video':
        return <Video className="w-12 h-12 text-accent-electric transition-transform group-hover:scale-110 duration-300" />;
      case 'heart-pulse':
        return <HeartPulse className="w-12 h-12 text-accent-electric transition-transform group-hover:scale-110 duration-300" />;
      default:
        return <ShoppingBag className="w-12 h-12 text-accent-electric" />;
    }
  };

  return (
    <section 
      className="py-16 md:py-24 max-w-[1200px] mx-auto px-6 border-t border-border-subtle"
      id="projects"
    >
      {/* Section Header */}
      <div className="mb-10 space-y-2">
        <span className="text-xs font-semibold tracking-widest text-accent-emerald uppercase font-mono">
          Portfolio
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight" id="portfolio-heading">
          Featured Work
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="glass-card rounded-2xl p-6 flex flex-col h-full group cursor-pointer"
            onClick={() => setSelectedProject(project)}
            id={`project-card-${project.id}`}
          >
            {/* Aspect Ratio Box (Visual representation) */}
            <div className="aspect-video mb-6 bg-surface-container-high rounded-xl overflow-hidden flex items-center justify-center relative border border-border-subtle/50">
              {getProjectIcon(project.iconName)}
              <div 
                className="absolute top-4 left-4 bg-accent-electric/15 border border-accent-electric/30 text-accent-electric font-mono text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-md"
                id={`project-category-${project.id}`}
              >
                {project.category}
              </div>
            </div>

            {/* Content Details */}
            <h3 className="text-xl font-bold text-white mb-3" id={`project-title-${project.id}`}>
              {project.title}
            </h3>
            
            <p className="text-text-muted text-sm mb-6 flex-grow leading-relaxed" id={`project-desc-${project.id}`}>
              {project.description}
            </p>

            {/* Tech tag row */}
            <div className="flex flex-wrap gap-2 mb-6" id={`project-tech-${project.id}`}>
              {project.tech.map((techItem, i) => (
                <span 
                  key={i} 
                  className="text-[10px] font-mono font-medium px-2.5 py-1 bg-surface-container-highest/60 border border-border-subtle/55 rounded-md text-text-muted"
                >
                  {techItem}
                </span>
              ))}
            </div>

            {/* Interaction Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProject(project);
              }}
              className="text-accent-electric inline-flex items-center gap-2 font-mono font-bold text-xs tracking-wider uppercase group/btn mt-auto self-start hover:text-white transition-colors"
              id={`project-btn-${project.id}`}
            >
              View Case Study
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Case Study Modal Overlay */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
