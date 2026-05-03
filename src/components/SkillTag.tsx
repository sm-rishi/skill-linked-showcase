import { FC } from "react";

interface SkillTagProps {
  skill: string;
  highlight?: boolean;
  onClick?: () => void;
  className?: string;
}

export const SkillTag: FC<SkillTagProps> = ({ skill, highlight, onClick, className }) => (
  <span
    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 ${
      highlight
        ? 'text-[#080c14] shadow-[0_0_16px_rgba(6,182,212,0.4)]'
        : 'text-white/60 hover:text-white'
    } ${className || ''}`}
    style={
      highlight
        ? { background: 'linear-gradient(135deg, #06b6d4, #818cf8)', border: 'none' }
        : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }
    }
    onClick={onClick}
    tabIndex={0}
    role="button"
    aria-label={`Show work experience for ${skill}`}
  >
    {skill}
  </span>
);
