import { useSectionReveal } from "@/hooks/useSectionReveal";

export function AboutBlock() {
  const { ref, revealed } = useSectionReveal();

  return (
    <section id="about" className="w-full" ref={ref}>
      <div className="max-w-4xl">
        {/* Section label */}
        <p
          className={`text-xs font-mono tracking-[0.2em] uppercase text-cyan-400 mb-4 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
          style={{ animationDelay: '0s' }}
        >
          Who Am I
        </p>

        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          Bridging data,<br />
          <span className="gradient-text">product & people.</span>
        </h2>

        <div className="space-y-6">
          {[
            {
              text: "Hey — I'm an aspiring Associate Product Manager with a strong foundation in product analytics and product thinking.",
              delay: '0.2s',
            },
            {
              text: "I've got hands-on experience in B2B SaaS, collaborating across teams and delivering high-value solutions. I've had the opportunity to work directly with founders to build product foundations from scratch.",
              delay: '0.3s',
            },
            {
              text: "What I really love is bridging the gap between technical possibilities and business needs — using data analytics and cross-functional tools to help teams make smarter decisions.",
              delay: '0.4s',
            },
            {
              text: "I'm eager to grow and bring my practical, hands-on experience to support amazing teams.",
              delay: '0.5s',
              bold: true,
            },
          ].map(({ text, delay, bold }, i) => (
            <p
              key={i}
              className={`text-base sm:text-lg leading-relaxed ${bold ? 'text-white/85 font-medium' : 'text-white/55'} ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
              style={{ animationDelay: delay }}
            >
              {text}
            </p>
          ))}
        </div>

        <a
          href="mailto:saptarshi1799@gmail.com"
          className={`inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
          style={{
            animationDelay: '0.6s',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          Let's Connect
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
