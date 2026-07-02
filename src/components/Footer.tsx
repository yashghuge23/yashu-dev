export default function Footer() {
  return (
    <footer className="w-full border-t border-border-subtle bg-background-deep mt-16" id="main-footer">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 opacity-80">
        <span className="text-xs font-mono font-medium text-white text-center md:text-left" id="footer-copyright">
          © 2026 Yashu · Pimpalner, Solapur, Maharashtra, India
        </span>
        <div className="flex gap-4">
          <span className="text-xs font-mono font-medium text-text-muted" id="footer-build-stack">
            Built with HTML · CSS · JS · Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}
