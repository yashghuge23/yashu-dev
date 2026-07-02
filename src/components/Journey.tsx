import { TIMELINE } from '../data';

export default function Journey() {
  return (
    <section 
      className="py-16 md:py-24 max-w-[1200px] mx-auto px-6 border-t border-border-subtle"
      id="journey"
    >
      {/* Section Header */}
      <div className="mb-12 space-y-2">
        <span className="text-xs font-semibold tracking-widest text-accent-emerald uppercase font-mono">
          Background
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight" id="journey-heading">
          Education &amp; Experience
        </h2>
      </div>

      {/* Timeline Layout */}
      <div className="max-w-3xl relative border-l border-accent-electric/20 ml-3 md:ml-4 space-y-12 pl-8 py-2">
        {TIMELINE.map((item, index) => (
          <div key={index} className="relative group" id={`timeline-item-${index}`}>
            {/* Timeline Bullet Ring */}
            <div 
              className={`absolute -left-[39px] top-1 w-4 h-4 rounded-full border-4 border-background-deep transition-all duration-300 ${
                index === 0 
                  ? 'bg-accent-electric scale-110 shadow-[0_0_10px_rgba(102,252,241,0.5)]' 
                  : 'bg-accent-electric/40 group-hover:bg-accent-electric group-hover:scale-105'
              }`}
              aria-hidden="true"
            />

            {/* Entry Details */}
            <div className="space-y-2">
              <span className="inline-block text-accent-electric font-mono font-bold text-sm tracking-wider" id={`timeline-period-${index}`}>
                {item.period}
              </span>
              
              <h3 className="text-xl font-bold text-white tracking-tight" id={`timeline-title-${index}`}>
                {item.title}
              </h3>
              
              <p className="text-sm text-text-muted font-medium" id={`timeline-inst-${index}`}>
                {item.institution}
              </p>
              
              <p className="text-sm md:text-base text-text-muted/80 leading-relaxed font-sans max-w-2xl pt-1" id={`timeline-desc-${index}`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
