import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      icon: <Mail className="w-5 h-5 text-accent-electric" />,
      label: 'Email',
      value: 'yashghuge023@gmail.com',
      href: 'mailto:yashghuge023@gmail.com'
    },
    {
      icon: <Github className="w-5 h-5 text-accent-electric" />,
      label: 'GitHub',
      value: 'github.com/yashghuge23',
      href: 'https://github.com/yashghuge23'
    },
    {
      icon: <Linkedin className="w-5 h-5 text-accent-electric" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yashghuge23',
      href: 'https://www.linkedin.com/in/yashghuge23/'
    }
  ];

  return (
    <section
      className="py-16 md:py-24 max-w-[1200px] mx-auto px-6 border-t border-border-subtle flex flex-col items-center text-center space-y-8"
      id="contact"
    >
      <div className="space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-semibold tracking-widest text-accent-emerald uppercase font-mono">
          Get in touch
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight" id="contact-heading">
          Let's build something intelligent together.
        </h2>
        <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-lg mx-auto">
          I'm currently looking for new opportunities and collaborations in AI, Machine Learning, and Full-stack development.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 md:gap-8 pt-4 w-full" id="contacts-list">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target={contact.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="flex items-center gap-4 group px-6 py-4 rounded-xl border border-border-subtle bg-surface-container/30 hover:border-accent-electric hover:bg-accent-electric/5 transition-all duration-300 min-w-[260px] sm:min-w-[280px]"
            id={`contact-item-${index}`}
          >
            {/* Icon circle */}
            <div className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center group-hover:border-accent-electric group-hover:bg-accent-electric/5 transition-all duration-300 shrink-0">
              {contact.icon}
            </div>
            <div className="text-left">
              <span className="block text-[10px] text-text-muted uppercase font-mono tracking-widest font-semibold">
                {contact.label}
              </span>
              <span className="text-white font-bold text-sm md:text-base group-hover:text-accent-electric transition-colors font-sans">
                {contact.value}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
