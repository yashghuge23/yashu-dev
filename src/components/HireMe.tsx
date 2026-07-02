import { Layout, Globe, RefreshCw, Check, ArrowUpRight } from 'lucide-react';

export default function HireMe() {
  const services = [
    {
      title: 'Landing Pages',
      icon: <Layout className="w-5 h-5 text-accent-electric" />,
      description: 'Clean, fast-loading pages designed to convert visitors — great for businesses, events, or personal brands.',
      bullets: [
        'Responsive design',
        'Custom sections & layout',
        'Contact form included'
      ]
    },
    {
      title: 'Multi-page Websites',
      icon: <Globe className="w-5 h-5 text-accent-electric" />,
      description: 'Full websites with multiple pages — home, about, services, contact — built with HTML, CSS, and JS.',
      bullets: [
        'Up to 5 pages',
        'Smooth navigation',
        'Cross-browser tested'
      ]
    },
    {
      title: 'Redesigns & Fixes',
      icon: <RefreshCw className="w-5 h-5 text-accent-electric" />,
      description: "Got an old or broken site? I'll clean up the code, fix layout issues, and make it look modern again.",
      bullets: [
        'Bug fixes',
        'UI improvements',
        'Performance tuning'
      ]
    }
  ];

  return (
    <section 
      className="py-16 md:py-24 max-w-[1200px] mx-auto px-6 border-t border-border-subtle"
      id="hire-me"
    >
      {/* Section Header */}
      <div className="mb-10 space-y-2">
        <span className="text-xs font-semibold tracking-widest text-accent-emerald uppercase font-mono">
          Services
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight" id="hire-me-heading">
          Hire Me for Web Projects
        </h2>
      </div>

      {/* Hero-like Banner */}
      <div 
        className="relative bg-gradient-to-r from-accent-electric/5 to-accent-emerald/5 border border-border-subtle rounded-2xl p-6 md:p-8 mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 overflow-hidden shadow-[0_0_30px_rgba(102,252,241,0.02)]"
        id="hire-me-banner"
      >
        <div className="space-y-4 max-w-2xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/25 text-accent-emerald font-mono text-[11px] font-semibold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-emerald"></span>
            </span>
            Available for new projects
          </div>
          
          <h3 className="text-xl md:text-2xl font-extrabold text-white" id="banner-title">
            Let's build something together
          </h3>
          
          <p className="text-text-muted text-sm md:text-base leading-relaxed" id="banner-description">
            I take on freelance web development projects — landing pages to full multi-page sites. 
            Fast delivery, clean code, mobile-friendly.
          </p>
        </div>

        <a 
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-accent-electric text-background-deep font-mono font-bold text-xs tracking-widest uppercase px-6 py-4 rounded-xl hover:bg-white transition-all duration-300 shrink-0 group self-start md:self-center"
          id="banner-cta"
        >
          Start a project
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-6" id="services-grid">
        {services.map((service, index) => (
          <div 
            key={index}
            className="glass-card rounded-2xl p-6 flex flex-col h-full group"
            id={`service-card-${index}`}
          >
            {/* Icon circle */}
            <div className="w-10 h-10 rounded-xl bg-accent-electric/10 border border-accent-electric/25 flex items-center justify-center mb-5 shrink-0 group-hover:bg-accent-electric/15 transition-colors">
              {service.icon}
            </div>

            {/* Service details */}
            <h3 className="text-lg font-bold text-white mb-2" id={`service-title-${index}`}>
              {service.title}
            </h3>
            
            <p className="text-text-muted text-sm mb-6 leading-relaxed" id={`service-desc-${index}`}>
              {service.description}
            </p>

            {/* Bullets */}
            <ul className="space-y-2.5 mt-auto border-t border-border-subtle/40 pt-5" id={`service-bullets-${index}`}>
              {service.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-center gap-2.5 text-xs md:text-sm text-text-muted">
                  <Check className="w-4 h-4 text-accent-emerald shrink-0" />
                  <span className="font-sans font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
