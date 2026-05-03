import { Sparkles } from "lucide-react";
import { trackButtonClick } from "@/utils/analytics";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export function ProjectShowcase() {
  const { ref, revealed } = useSectionReveal();

  const handleCollaborationClick = () => {
    trackButtonClick('Collaboration Request', 'Projects');
  };

  return (
    <section id="projects" className="w-full" ref={ref}>
      <p
        className={`text-xs font-mono tracking-[0.2em] uppercase text-cyan-400 mb-4 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
        style={{ animationDelay: '0s' }}
      >
        Projects
      </p>

      <h2
        className={`text-4xl sm:text-5xl font-bold text-white mb-10 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        What I'm<br />
        <span className="gradient-text">building.</span>
      </h2>

      <div className={`grid sm:grid-cols-2 gap-4 sm:gap-6 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
        <ProjectCard type="current" />
        <ProjectCard type="future" onCollaborationClick={handleCollaborationClick} />
      </div>
    </section>
  );
}

function ProjectCard({ type, onCollaborationClick }: { type: 'current' | 'future'; onCollaborationClick?: () => void }) {
  if (type === 'current') {
    return (
      <div
        className="relative rounded-xl overflow-hidden min-h-[180px] sm:min-h-[200px] flex items-end group transition-colors duration-300 hover:border-white/15"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=550&q=80"
          alt="AI agent development"
          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,12,20,0.9) 0%, transparent 60%)' }} />
        <div className="relative z-10 p-5 w-full">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h3 className="font-semibold text-white text-base">Personal Growth AI Agent</h3>
          </div>
          <p className="text-sm text-white/50 mb-3">Currently building an intelligent agent focused on personal development and growth tracking.</p>
          <span
            className="text-xs px-3 py-1 rounded-full font-medium"
            style={{ background: 'rgba(6,182,212,0.12)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.2)' }}
          >
            In Development
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl min-h-[180px] sm:min-h-[200px] flex items-center justify-center group transition-colors duration-300"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px dashed rgba(255,255,255,0.12)',
      }}
    >
      <div className="text-center px-6">
        <Sparkles className="w-8 h-8 text-white/20 mx-auto mb-3 group-hover:text-cyan-400/40 transition-colors duration-300" />
        <p className="text-white/35 text-xs mb-5">More exciting projects coming soon…</p>
        <a
          href="mailto:saptarshi1799@gmail.com?subject=Let's%20Build%20Together&body=Hi%20Saptarshi%2C%0A%0AI%27m%20interested%20in%20collaborating%20on%20a%20project%20with%20you.%20Let%27s%20discuss%21%0A%0AThanks%21"
          onClick={onCollaborationClick}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
          style={{ background: 'linear-gradient(135deg, #06b6d4, #818cf8)', color: '#080c14' }}
        >
          Let's build together!
        </a>
      </div>
    </div>
  );
}
