import { SkillTag } from "./SkillTag";
import { EXPERIENCES, ALL_SKILLS, SKILL_DESCRIPTIONS } from "./ExperienceTimeline";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export function SkillsMap({
  selectedSkill,
  setSelectedSkill,
}: {
  selectedSkill?: string;
  setSelectedSkill?: (skill: string | undefined) => void;
}) {
  const { ref, revealed } = useSectionReveal();

  const skillMap: { [skill: string]: { expIdx: number; achIdx: number }[] } = {};
  EXPERIENCES.forEach((exp, expIdx) => {
    exp.achievements.forEach((ach, achIdx) => {
      ach.skills.forEach((sk) => {
        if (!skillMap[sk]) skillMap[sk] = [];
        skillMap[sk].push({ expIdx, achIdx });
      });
    });
  });

  return (
    <section id="skills" className="w-full" ref={ref}>
      <p
        className={`text-xs font-mono tracking-[0.2em] uppercase text-cyan-400 mb-4 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
        style={{ animationDelay: '0s' }}
      >
        Skills Map
      </p>

      <h2
        className={`text-4xl sm:text-5xl font-bold text-white mb-3 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        Where I make<br />
        <span className="gradient-text">impact.</span>
      </h2>

      <p
        className={`text-white/45 text-sm mb-8 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}
      >
        Click any skill to spotlight where it made an impact in my work.
      </p>

      <div
        className={`flex flex-wrap gap-2 mb-6 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.3s' }}
      >
        {ALL_SKILLS.map((skill) => (
          <SkillTag
            key={skill}
            skill={skill}
            highlight={selectedSkill === skill}
            onClick={() => setSelectedSkill && setSelectedSkill(selectedSkill === skill ? undefined : skill)}
          />
        ))}
      </div>

      {selectedSkill && (
        <div
          className={`rounded-xl p-5 ${revealed ? 'animate-reveal-scale' : 'opacity-0'}`}
          style={{
            background: 'rgba(6,182,212,0.06)',
            border: '1px solid rgba(6,182,212,0.2)',
          }}
        >
          <div className="mb-2 text-cyan-400 font-semibold text-sm">{selectedSkill}</div>
          {SKILL_DESCRIPTIONS[selectedSkill] && (
            <div className="mb-3 text-xs text-white/45 italic">{SKILL_DESCRIPTIONS[selectedSkill]}</div>
          )}
          <ul className="space-y-1.5">
            {skillMap[selectedSkill]?.map(({ expIdx, achIdx }, n) => (
              <li key={n} className="text-xs text-white/55 flex gap-2">
                <span className="text-white/30 shrink-0">—</span>
                <span>
                  <span className="text-white/75 font-medium">{EXPERIENCES[expIdx].role}</span>
                  {' @ '}{EXPERIENCES[expIdx].company}:
                  {' '}<span className="italic">{EXPERIENCES[expIdx].achievements[achIdx].text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
