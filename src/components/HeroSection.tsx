export function HeroSection() {
  return (
    <div className="relative w-full px-6 sm:px-10 lg:px-20 xl:px-28 pt-14 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="w-full grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">

        {/* Left: Text */}
        <div>
          <p
            className="text-cyan-400 text-xs font-mono tracking-[0.2em] uppercase mb-5 animate-hero-enter opacity-0"
            style={{ animationDelay: '0.1s' }}
          >
            Product Analyst · Product Manager Aspirant
          </p>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] text-white mb-5 animate-hero-enter opacity-0"
            style={{ animationDelay: '0.25s' }}
          >
            Hey, I'm<br />
            <span className="gradient-text">Saptarshi</span>
          </h1>

          <p
            className="text-white/55 text-base sm:text-lg xl:text-xl leading-relaxed max-w-lg mb-8 animate-hero-enter opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            Turning Curiosity Into Impact. I build bridges between business needs and product design—plus I actually enjoy the details.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-hero-enter opacity-0"
            style={{ animationDelay: '0.55s' }}
          >
            <a
              href="https://www.linkedin.com/in/saptarshi--/"
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #818cf8)', color: '#080c14' }}
            >
              Connect on LinkedIn
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="mailto:saptarshi1799@gmail.com?subject=Request%20Resume&body=Hey%2C%20can%20I%20take%20a%20look%20at%20your%20resume%3F"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}
            >
              Request Resume
            </a>
          </div>
        </div>

        {/* Right: Avatar */}
        <div
          className="flex justify-center lg:justify-end animate-hero-enter opacity-0"
          style={{ animationDelay: '0.35s' }}
        >
          <div className="relative">
            {/* Aurora glow ring */}
            <div
              className="absolute inset-0 rounded-full animate-float"
              style={{
                background: 'linear-gradient(135deg, rgba(6,182,212,0.5), rgba(129,140,248,0.4), rgba(168,85,247,0.3))',
                filter: 'blur(24px)',
                transform: 'scale(1.18)',
              }}
            />
            <img
              src="/profile.jpg"
              className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60 xl:w-68 xl:h-68 object-cover object-top rounded-full"
              style={{ border: '2px solid rgba(255,255,255,0.15)' }}
              alt="Portrait of Saptarshi Mukhopadhyay"
            />
            {/* Online indicator */}
            <div
              className="absolute bottom-3 right-3 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-400 animate-pulse"
              style={{ border: '3px solid #080c14' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
