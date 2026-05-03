import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface ParticleBackgroundProps {
  scrollY: number;
}

export function ParticleBackground({ scrollY }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const scrollRef = useRef(scrollY);

  useEffect(() => {
    scrollRef.current = scrollY;
  }, [scrollY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const count = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 14000));
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.35 + 0.08,
      }));
    };

    resize();
    window.addEventListener('resize', resize);

    const CONNECT_DIST = 130;

    const frame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scroll = scrollRef.current;
      const particles = particlesRef.current;
      const w = canvas.width;
      const h = canvas.height;

      // Compute draw positions with scroll parallax
      const drawX: number[] = [];
      const drawY: number[] = [];

      particles.forEach((p, i) => {
        // Autonomous drift
        p.x = (p.x + p.vx + w) % w;
        p.y = (p.y + p.vy + h) % h;

        // Scroll parallax: smaller particles (further away) move less
        const parallax = scroll * 0.06 * (p.size / 1.6);
        drawX[i] = p.x;
        drawY[i] = ((p.y - parallax) % h + h) % h;

        // Draw dot
        ctx.beginPath();
        ctx.arc(drawX[i], drawY[i], p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = drawX[i] - drawX[j];
          const dy = drawY[i] - drawY[j];
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.1;
            ctx.beginPath();
            ctx.moveTo(drawX[i], drawY[i]);
            ctx.lineTo(drawX[j], drawY[j]);
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(frame);
    };

    frame();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 2 }}
    />
  );
}
