import { ExternalLink, Award, Calendar, CheckCircle } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export function CertificationsSection() {
  const { ref, revealed } = useSectionReveal();

  return (
    <section id="certifications" className="w-full" ref={ref}>
      <p
        className={`text-xs font-mono tracking-[0.2em] uppercase text-cyan-400 mb-4 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
        style={{ animationDelay: '0s' }}
      >
        Certifications
      </p>

      <h2
        className={`text-4xl sm:text-5xl font-bold text-white mb-10 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        Credentials &<br />
        <span className="gradient-text">proof of work.</span>
      </h2>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Featured — Unacademy APM */}
        <div
          className={`lg:col-span-2 rounded-xl p-6 sm:p-8 group transition-all duration-300 hover:border-orange-500/25 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
          style={{
            animationDelay: '0.2s',
            background: 'rgba(251,146,60,0.06)',
            border: '1px solid rgba(251,146,60,0.15)',
          }}
        >
          <div className="flex items-start gap-5 sm:gap-6">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300"
              style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}
            >
              <span className="text-2xl font-bold text-white">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-1 gap-3">
                <h3 className="text-lg sm:text-xl font-bold text-white">Associate Product Management Training</h3>
                <span
                  className="hidden sm:flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                  style={{ background: 'rgba(251,146,60,0.15)', color: '#fb923c', border: '1px solid rgba(251,146,60,0.2)' }}
                >
                  <CheckCircle size={12} /> Featured
                </span>
              </div>
              <div className="flex items-center gap-2 text-orange-400/80 mb-3 text-xs">
                <Calendar size={12} />
                <span>Unacademy · 2022</span>
              </div>
              <p className="text-sm text-white/50 mb-5 leading-relaxed">
                Built PM foundations through hands-on assignments: PRDs, wireframing with Balsamiq/Figma, roadmaps, user interviews, and MVP development.
              </p>
              <div className="flex flex-wrap gap-3">
                <CertLink href="https://drive.google.com/file/d/16Azo1-tnW4MIqnDwGTAJ45u16q_Rjigs/view?usp=sharing" accent="#f97316" label="Certificate" />
                <CertLink href="https://drive.google.com/drive/folders/1UhltaC8jCmecMgtef_0qTX2rRAMtVpZi" accent="#f97316" label="Projects" outline />
              </div>
            </div>
          </div>
        </div>

        {/* Python */}
        <div
          className={`rounded-xl p-6 group transition-all duration-300 hover:border-blue-500/25 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
          style={{
            animationDelay: '0.3s',
            background: 'rgba(59,130,246,0.05)',
            border: '1px solid rgba(59,130,246,0.12)',
          }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' }}
            >
              <span className="text-sm font-bold text-white">CU</span>
            </div>
            <div>
              <h3 className="font-bold text-white mb-0.5">Programming with Python</h3>
              <div className="flex items-center gap-1.5 text-blue-400/70 text-xs">
                <Calendar size={11} />
                <span>Chandigarh University · Jun–Jul 2020</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-white/45 leading-relaxed mb-4">
            6-week comprehensive training: Python basics, OOP, SQLite, GUI with PyQT, and applications across disciplines.
          </p>
          <CertLink href="https://drive.google.com/file/d/1i6SdIWu3TBA_FpsXwPm112mkhTYcz8wj/view?usp=sharing" accent="#3b82f6" label="Certificate" />
        </div>

        {/* SQL */}
        <div
          className={`rounded-xl p-6 group transition-all duration-300 hover:border-indigo-500/25 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
          style={{
            animationDelay: '0.35s',
            background: 'rgba(99,102,241,0.05)',
            border: '1px solid rgba(99,102,241,0.12)',
          }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
              style={{ background: 'linear-gradient(135deg, #6366f1, #4338ca)' }}
            >
              <span className="text-sm font-bold text-white">UC</span>
            </div>
            <div>
              <h3 className="font-bold text-white mb-0.5">SQL for Data Science</h3>
              <div className="flex items-center gap-1.5 text-indigo-400/70 text-xs">
                <Calendar size={11} />
                <span>UC Davis (Coursera)</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-white/45 leading-relaxed mb-4">
            Mastered SQL fundamentals: data retrieval, complex queries, joins, subqueries, and functions for data-driven product decisions.
          </p>
          <CertLink href="https://drive.google.com/file/d/1Ez4zAdA5D2xiHO0pQexBNAE-8MsOA9se/view?usp=sharing" accent="#6366f1" label="Certificate" />
        </div>

        {/* Google Analytics */}
        <div
          className={`lg:col-span-2 rounded-xl p-6 sm:p-8 group transition-all duration-300 hover:border-red-500/25 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
          style={{
            animationDelay: '0.4s',
            background: 'rgba(239,68,68,0.05)',
            border: '1px solid rgba(239,68,68,0.12)',
          }}
        >
          <div className="flex items-start gap-5 sm:gap-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
              style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}
            >
              <span className="text-2xl font-bold text-white">G</span>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-1 gap-3">
                <h3 className="text-lg sm:text-xl font-bold text-white">Google Data Analytics Certificate</h3>
                <span
                  className="hidden sm:flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                  style={{ background: 'rgba(239,68,68,0.12)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)' }}
                >
                  <CheckCircle size={12} /> Series
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-red-400/70 mb-3 text-xs">
                <Calendar size={12} />
                <span>Google · 3-Part Series</span>
              </div>
              <p className="text-sm text-white/50 mb-4 leading-relaxed">
                Comprehensive data analytics training: foundations, data-driven decision making, and data preparation for exploration.
              </p>
              <div
                className="grid sm:grid-cols-3 gap-2 text-xs text-white/40 mb-5 p-3 rounded-lg"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                {[
                  'Foundations: Data, Data, Everywhere',
                  'Ask Questions to Make Data-Driven Decisions',
                  'Prepare Data for Exploration',
                ].map((module) => (
                  <div key={module} className="flex items-center gap-1.5">
                    <CheckCircle size={11} className="text-emerald-400 shrink-0" />
                    <span>{module}</span>
                  </div>
                ))}
              </div>
              <CertLink href="https://drive.google.com/drive/folders/10-KYVWhXrAYudac7IHh-DrOSXxzXWKJY?usp=sharing" accent="#ef4444" label="All Certificates" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CertLink({ href, accent, label, outline }: { href: string; accent: string; label: string; outline?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5"
      style={
        outline
          ? { border: `1px solid ${accent}40`, color: accent, background: 'transparent' }
          : { background: accent, color: '#fff' }
      }
    >
      <Award size={13} />
      {label}
      <ExternalLink size={11} />
    </a>
  );
}
