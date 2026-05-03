import { Linkedin, FileText, BookOpenCheck, BadgeCheck, Menu, X } from "lucide-react";
import { useState } from "react";
import { trackButtonClick } from "@/utils/analytics";

const NAV_LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#case-studies', label: 'Case Studies', icon: <BookOpenCheck size={12} /> },
  { href: '#certifications', label: 'Certifications', icon: <BadgeCheck size={12} /> },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    trackButtonClick(`Nav-${section}`, 'Header');
    setIsMenuOpen(false);
  };

  const handleExternalClick = (platform: string) => {
    trackButtonClick(platform, 'Header');
  };

  return (
    <header
      className="sticky top-0 z-50 w-full flex items-center justify-between px-6 sm:px-10 lg:px-20 xl:px-28 py-4"
      style={{
        background: 'rgba(8,12,20,0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="flex flex-col">
        <span className="text-sm sm:text-base font-semibold tracking-wide text-white">Saptarshi Mukhopadhyay</span>
        <span className="text-[10px] sm:text-xs text-white/40 hidden sm:block">Product Analyst & APM Aspirant</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
        {NAV_LINKS.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            onClick={() => handleNavClick(label)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/55 hover:text-white hover:bg-white/8 transition-all duration-200"
          >
            {icon}
            {label}
          </a>
        ))}

        <div className="w-px h-4 bg-white/15 mx-2" />

        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/saptarshi--/"
          target="_blank"
          rel="noopener"
          onClick={() => handleExternalClick('LinkedIn')}
          className="p-2 rounded-full text-white/45 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
        >
          <Linkedin size={15} />
        </a>
        <a
          aria-label="Request Resume"
          href="mailto:saptarshi1799@gmail.com?subject=Request%20Resume&body=Hey%2C%20can%20I%20take%20a%20look%20at%20your%20resume%3F"
          onClick={() => handleExternalClick('Resume Request')}
          className="p-2 rounded-full text-white/45 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
        >
          <FileText size={15} />
        </a>
      </nav>

      {/* Mobile toggle */}
      <button
        className="lg:hidden p-2 rounded-full text-white/60 hover:text-white hover:bg-white/8 transition-all"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div
          className="absolute top-full left-0 right-0 p-4 space-y-1"
          style={{
            background: 'rgba(8,12,20,0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              onClick={() => handleNavClick(label)}
              className="block py-2 px-3 rounded-lg text-sm text-white/65 hover:text-white hover:bg-white/8 transition-all"
            >
              {label}
            </a>
          ))}
          <div className="flex gap-2 pt-3 border-t border-white/8">
            <a
              href="https://www.linkedin.com/in/saptarshi--/"
              target="_blank"
              rel="noopener"
              onClick={() => handleExternalClick('LinkedIn')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-white/55 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <a
              href="mailto:saptarshi1799@gmail.com?subject=Request%20Resume&body=Hey%2C%20can%20I%20take%20a%20look%20at%20your%20resume%3F"
              onClick={() => handleExternalClick('Resume Request')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-white/55 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
            >
              <FileText size={14} /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
