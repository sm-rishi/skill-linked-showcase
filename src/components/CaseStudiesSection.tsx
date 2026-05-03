import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

type CaseStudy = {
  title: string;
  problemStatement: React.ReactNode;
  solutionSummary: React.ReactNode;
  analysis: React.ReactNode;
};

type RelevelCaseStudy = {
  title: string;
  description: string;
};

const RELEVEL_CASE_STUDIES: RelevelCaseStudy[] = [
  { title: "Uber Ride Fare Split Feature", description: "Designed a comprehensive PRD for implementing fare splitting functionality in the Uber app, focusing on user experience and payment flow optimization." },
  { title: "Khatabook Onboarding Flow", description: "Built a detailed PRD for streamlining the user onboarding experience, reducing friction and improving user activation rates." },
  { title: "E-commerce Shopping Cart Button", description: "Designed user-centric shopping cart functionality enabling multi-product review before checkout, enhancing conversion rates." },
  { title: "Grocery App Growth Strategy", description: "Developed comprehensive go-to-market strategy including feature identification, user targeting, and marketing planning for grocery app adoption." },
  { title: "Trade with Tribe - Stock Market Platform", description: "Conceptualized a verified expert-driven stock market platform with gamified learning elements and premium content strategy." },
  { title: "Organic Food Product Vision Board", description: "Created strategic product vision for premium organic ready-to-eat food brand, defining market positioning and brand identity." },
  { title: "E-commerce Roadmap Prioritization", description: "Analyzed and prioritized quarterly product requirements using strategic frameworks to optimize resource allocation and impact." },
  { title: "Flipkart Growth Analysis", description: "Conducted comprehensive research on Flipkart's growth journey, identifying key growth hacks and suggesting future growth strategies." },
];

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "HealthifyMe Funnel & Slot Optimization",
    problemStatement: (
      <div className="text-white/55 text-sm leading-relaxed">
        <p className="font-medium text-white/70 mb-2">Problem Statement</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Dataset: Free user bookings with coaches, with funnel (Bot/Free-Trial), lead type (Medical/NRI), sales ability (Target Class A–D), booking and payment times.</li>
          <li>Tasks: Analyze 3 & 7-day conversions by lead type and funnel, identify best hours for connectivity and sales, share actionable insights to optimize slots, coach allocation, and funnel for max conversion.</li>
        </ul>
      </div>
    ),
    solutionSummary: (
      <div className="text-white/55 text-sm leading-relaxed space-y-3">
        <p className="font-medium text-white/70">Solution Approach</p>
        <ul className="list-disc ml-5 space-y-1.5">
          <li><span className="text-white/70 font-medium">Data Cleaning & Segmentation:</span> Mapped bookings by funnel, medical condition, and geography, then matched booking times to payment signals for measuring conversion windows.</li>
          <li><span className="text-white/70 font-medium">Conversion Analysis:</span> Calculated 3/7-day conversion rates for each segment, and visualized hourly booking and conversion patterns.</li>
          <li>Bot funnel: High leads, lower conversion. FT: Lower volume but 2–3x higher efficiency. Mapped peak sales hours (India: 5–7PM & 8–10PM).</li>
        </ul>
        <div className="flex flex-wrap gap-3 mt-3">
          {[
            { label: 'CSV with detailed analysis', href: 'https://docs.google.com/spreadsheets/d/1P-PvipHVrNEgHWLxkJvxMJEvFVvWAddb/edit?gid=2134676910#gid=2134676910' },
            { label: 'Notebook (sample)', href: 'https://colab.research.google.com/drive/1uEkeRNHO-E_G5dklpjZ7ZT5huj8ot6nB?usp=sharing' },
            { label: 'Full writeup', href: 'https://docs.google.com/document/d/1GgYT1CzYBnm3r4il8F87Nvx1QwDsgors/edit?usp=sharing&ouid=112716720863127862961&rtpof=true&sd=true' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-400 hover:text-cyan-300 underline transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    ),
    analysis: (
      <div className="text-white/55 text-sm leading-relaxed">
        <p className="font-medium text-white/70 mb-2">Reflection & Takeaways</p>
        <ul className="list-disc ml-5 space-y-1.5">
          <li><span className="text-white/70 font-medium">Analytical Depth:</span> Applied careful segmentation, time-windowed conversion analysis, and cohort breakdowns.</li>
          <li><span className="text-white/70 font-medium">Product Thinking:</span> Recommendations focused on practical solutions — resource allocation models, peak-hour rebalancing, and funnel design.</li>
          <li><span className="text-white/70 font-medium">User-First Mindset:</span> Minimized friction and surfaced high-intent users for the team.</li>
          <li className="italic text-white/40">If you have challenges like this — I'd love to explore them with you!</li>
        </ul>
      </div>
    ),
  },
];

export function CaseStudiesSection() {
  const { ref, revealed } = useSectionReveal();
  const [openStates, setOpenStates] = useState<boolean[]>(new Array(CASE_STUDIES.length).fill(false));

  const toggleCase = (index: number) => {
    setOpenStates(prev => prev.map((state, i) => i === index ? !state : state));
  };

  return (
    <section id="case-studies" className="w-full" ref={ref}>
      <p
        className={`text-xs font-mono tracking-[0.2em] uppercase text-cyan-400 mb-4 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
        style={{ animationDelay: '0s' }}
      >
        Case Studies
      </p>

      <h2
        className={`text-4xl sm:text-5xl font-bold text-white mb-10 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        Problems I've<br />
        <span className="gradient-text">dissected.</span>
      </h2>

      {/* Main case studies */}
      <div
        className={`space-y-4 mb-12 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}
      >
        {CASE_STUDIES.map((cs, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden transition-all duration-300 group/card"
            style={{
              background: openStates[idx] ? 'rgba(6,182,212,0.06)' : 'rgba(6,182,212,0.03)',
              border: openStates[idx]
                ? '1px solid rgba(6,182,212,0.35)'
                : '1px solid rgba(6,182,212,0.18)',
              boxShadow: openStates[idx] ? '0 0 24px rgba(6,182,212,0.08)' : 'none',
            }}
          >
            <button
              className="w-full flex items-start justify-between p-5 sm:p-6 text-left transition-all duration-200 hover:bg-cyan-400/5"
              onClick={() => toggleCase(idx)}
            >
              <div className="flex-1 min-w-0 mr-4">
                {/* "expandable" badge */}
                <span
                  className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-widest uppercase mb-2 px-2 py-0.5 rounded-full"
                  style={{ color: '#06b6d4', background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.2)' }}
                >
                  Case Study · Click to explore
                </span>
                <p className="font-semibold text-white text-base sm:text-lg leading-snug">{cs.title}</p>
              </div>
              <div
                className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 mt-0.5"
                style={{
                  background: openStates[idx] ? 'rgba(6,182,212,0.2)' : 'rgba(6,182,212,0.1)',
                  border: '1px solid rgba(6,182,212,0.3)',
                }}
              >
                {openStates[idx]
                  ? <ChevronUp size={16} className="text-cyan-400" />
                  : <ChevronDown size={16} className="text-cyan-400" />
                }
              </div>
            </button>

            {openStates[idx] && (
              <div
                className="px-5 sm:px-6 pb-5 sm:pb-6 space-y-5 animate-reveal-up"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="pt-4">{cs.problemStatement}</div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>{cs.solutionSummary}</div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>{cs.analysis}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Relevel case studies */}
      <div
        className={`rounded-xl p-6 sm:p-8 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
        style={{
          animationDelay: '0.3s',
          background: 'rgba(99,102,241,0.06)',
          border: '1px solid rgba(99,102,241,0.15)',
        }}
      >
        <h3 className="text-lg font-semibold text-white mb-2">Relevel Case Studies — Foundation Building (2022)</h3>
        <p className="text-sm text-white/45 mb-6">
          During my time at Relevel, I solved numerous product management case studies that helped build my foundational PM thinking, strategic reasoning, and practical problem-solving.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {RELEVEL_CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="rounded-lg p-4 transition-all duration-200 hover:bg-white/5"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h4 className="font-semibold text-xs text-white/80 mb-1.5">{study.title}</h4>
              <p className="text-xs text-white/40 leading-relaxed">{study.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-5 text-sm text-white/45" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          Interested in detailed solutions?{' '}
          <a
            href="mailto:saptarshi1799@gmail.com?subject=Request%20Relevel%20Case%20Study%20Solutions&body=Hi%20Saptarshi%2C%0A%0AI%27d%20love%20to%20see%20your%20detailed%20solutions%20for%20the%20Relevel%20case%20studies.%20Could%20you%20please%20share%20them%3F%0A%0AThanks%21"
            className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
          >
            Request them here
          </a>
        </div>
      </div>
    </section>
  );
}
