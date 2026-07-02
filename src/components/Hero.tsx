import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative min-h-[90vh] flex flex-col justify-center max-w-[1200px] mx-auto px-6 pt-32 pb-16 overflow-hidden"
      id="hero"
    >
      {/* Background Decorative Radial Glow */}
      <div 
        className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-accent-electric/5 rounded-full blur-[100px] md:blur-[140px] -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-3xl space-y-6">
        {/* Status Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-emerald/10 border border-accent-emerald/25 text-accent-emerald font-mono text-xs font-semibold"
          id="hero-status-tag"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
          </span>
          Open to opportunities
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight"
          id="hero-headline"
        >
          Yashu <br />
          <span className="bg-gradient-to-r from-white via-text-primary to-text-muted bg-clip-text text-transparent">
            AI/ML Engineer I Developer
          </span>
        </motion.h1>

        {/* Intro description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-text-muted text-base md:text-lg max-w-2xl font-sans font-medium leading-relaxed"
          id="hero-intro"
        >
          Computer Engineering student passionate about machine learning, data science, and building smart systems that solve real problems. Specializing in AI-driven automation and modern web architectures.
        </motion.p>

        {/* Buttons / Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center gap-4 pt-4"
          id="hero-actions"
        >
          <a
            href="#hire-me"
            className="inline-flex items-center justify-center gap-1.5 bg-accent-electric text-background-deep font-mono font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-lg hover:bg-white transition-colors duration-300 group"
            id="hero-cta-hire"
          >
            Hire Me
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-accent-electric text-accent-electric font-mono font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-lg hover:bg-accent-electric/10 transition-colors duration-300"
            id="hero-cta-contact"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
