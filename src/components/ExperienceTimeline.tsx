import { SkillTag } from "./SkillTag";
import { useSectionReveal } from "@/hooks/useSectionReveal";

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: { text: string; skills: string[] }[];
};

const EXPERIENCES: Experience[] = [
  {
    company: "Incred Financial Services",
    role: "Product Analyst Tech",
    period: "May 2025 – Present",
    description:
      "Working as a Product Analyst Tech to identify issues from root cause and make the application process error-free, bringing direct impact on reduced application times and faster loan disbursals.",
    achievements: [
      {
        text: "Identifying root cause issues to streamline application processes and reduce processing times.",
        skills: ["Problem Solving", "Process Improvement", "Requirements Analysis"],
      },
      {
        text: "Working to eliminate application errors for faster loan disbursals and improved user experience.",
        skills: ["User Research", "Product Development", "Cross-Team Collaboration"],
      },
    ],
  },
  {
    company: "Lifesight",
    role: "Product Analyst",
    period: "June 2023 – April 2025",
    description:
      "Spearheaded platform integrations and cloud automation, boosting reliability and cutting costs. Collaborated with GTM teams to drive feature adoption while streamlining reporting and optimizing data pipelines.",
    achievements: [
      {
        text: "Developed R/ETL workflows for major CRMs, E-commerce, and Ad platforms, contributing to 33% of platform integrations.",
        skills: ["ETL", "Integration", "Data Analytics"],
      },
      {
        text: "Implemented automated sanity checks, reducing cloud costs for repetitive tasks by 50%.",
        skills: ["Google Cloud", "Automation", "Python"],
      },
      {
        text: "Led dogfooding project for internal testing; surfaced issues and communicated actionable insights to marketing & sales.",
        skills: ["User Research", "Cross-Team Collaboration", "Communication"],
      },
      {
        text: "Launched Custom API feature, improving adoptability by 15% for bespoke data sources.",
        skills: ["API", "Product Development"],
      },
      {
        text: "Automated exception handling for integrations, reducing errors by 33%.",
        skills: ["Integration", "Automation", "Problem Solving"],
      },
      {
        text: "Created detailed PRDs and workflow demos, reducing dependency on engineering by 25%.",
        skills: ["PRD Writing", "Business Analysis", "Requirements Analysis"],
      },
      {
        text: "Deployed GTM containers with custom events, boosting platform trust by 20%.",
        skills: ["Product Analytics", "Data Analytics"],
      },
      {
        text: "Enhanced MMM models with Halo effect & Commute zones, improving prediction accuracy by 5%.",
        skills: ["Data Modeling", "Product Analytics"],
      },
      {
        text: "Wrote go-to SQL queries for dashboards, reducing monitoring time by 30%.",
        skills: ["SQL", "Dashboarding"],
      },
      {
        text: "Created internal knowledge base for resolving client errors, reducing response time by 40%.",
        skills: ["Process Improvement", "Communication"],
      },
      {
        text: "Led market research for product roadmap deliverables to enable effective decision making.",
        skills: ["Market Research", "Product Roadmap"],
      },
      {
        text: "Coordinated rollout of 10+ features with SPMs, designers, and developers in 1 year.",
        skills: ["Agile", "Stakeholder Management", "Team Collaboration"],
      },
      {
        text: "Used Meltano to build efficient ETL pipelines and completed Snowflake-to-BigQuery integration, unlocking cost-effective workflows.",
        skills: ["ETL", "Google Cloud", "Data Analytics"],
      },
      {
        text: "Built user segment insights to connect platform usage with key KPIs.",
        skills: ["KPI Analysis", "Data Analytics", "Product Analytics"],
      },
      {
        text: "Maintained strong client relationships for effective partnerships.",
        skills: ["Communication", "Stakeholder Management"],
      },
    ],
  },
  {
    company: "Gauge",
    role: "Product Intern",
    period: "November 2022 – June 2023",
    description:
      "Drove complete product development from ideation to MVP, designing user journeys and managing sprint delivery. Ran user interviews and collaborated with designers to create the app's foundational experience.",
    achievements: [
      {
        text: "Drove end-to-end product development from ideation to MVP (till testing phase).",
        skills: ["Product Development", "MVP"],
      },
      {
        text: "Mapped full user journey (order to inventory), defining API endpoints and requirements.",
        skills: ["User Journey", "API", "Requirements Analysis"],
      },
      {
        text: "Designed 100+ wireframes and user stories, covering application scenarios and edge cases.",
        skills: ["Wireframing", "User Stories"],
      },
      {
        text: "Collaborated with designers to create and finalize the app's first style guide.",
        skills: ["Cross-Team Collaboration", "Product Development"],
      },
      {
        text: "Prioritized features after in-depth user interviews and market research.",
        skills: ["User Research", "Market Research", "Feature Prioritization"],
      },
      {
        text: "Wrote clear user stories for developers and ran weekly sprint planning with the founder.",
        skills: ["Agile", "User Stories", "Team Collaboration"],
      },
      {
        text: "Led daily sync-ups to manage team tasks, clear blockers, and meet delivery timelines.",
        skills: ["Stakeholder Management", "Problem Solving"],
      },
      {
        text: "Formulated user flows to define API endpoints and improve requirement clarity using Postman for testing.",
        skills: ["User Journey", "API"],
      },
      {
        text: "Ensured deep functional understanding of the product before implementation.",
        skills: ["Product Understanding", "Requirements Analysis"],
      },
    ],
  },
];

const ALL_SKILLS = [
  "SQL", "Product Analytics", "Data Analytics", "A/B Testing", "Agile",
  "Stakeholder Management", "User Research", "Product Roadmap", "KPI Analysis",
  "PRD Writing", "Python", "API", "User Journey", "Feature Prioritization",
  "Market Research", "Cross-Team Collaboration", "Business Analysis", "Data Modeling",
  "Product Development", "Communication", "ETL", "Google Cloud", "Dashboarding",
  "User Stories", "Wireframing", "MVP", "Problem Solving", "Requirements Analysis",
  "Process Improvement", "Automation", "Integration", "Product Understanding",
  "Team Collaboration"
];

const SKILL_DESCRIPTIONS: { [skill: string]: string } = {
  "A/B Testing": "Designing and analyzing controlled experiments to validate product hypotheses and optimize user experience",
  "API": "Designing, testing, and integrating RESTful APIs for seamless data exchange between systems",
  "Google Cloud": "Leveraging GCP services for scalable cloud infrastructure, data processing, and cost optimization",
  "Python": "Scripting for automation, data processing, and building analytical workflows",
  "SQL": "Querying databases to extract insights, build reports, and support data-driven decisions",
  "ETL": "Building data pipelines to extract, transform, and load data for analytics and reporting",
  "User Research": "Conducting user interviews, surveys, and usability testing to understand user needs and behaviors",
  "Product Analytics": "Using data to measure product performance, user engagement, and business impact",
  "Data Analytics": "Analyzing complex datasets to derive actionable insights for product and business decisions",
  "Stakeholder Management": "Building relationships and aligning diverse stakeholders around product vision and priorities",
  "PRD Writing": "Creating comprehensive product requirement documents that clearly communicate feature specifications",
  "Product Roadmap": "Strategic planning and prioritization of product features and initiatives over time"
};

export function ExperienceTimeline({
  selectedSkill,
}: {
  selectedSkill?: string;
  setSelectedSkill?: (skill: string | undefined) => void;
}) {
  const { ref, revealed } = useSectionReveal();

  return (
    <section id="experience" className="w-full" ref={ref}>
      <p
        className={`text-xs font-mono tracking-[0.2em] uppercase text-cyan-400 mb-4 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
        style={{ animationDelay: '0s' }}
      >
        Experience
      </p>

      <h2
        className={`text-4xl sm:text-5xl font-bold text-white mb-2 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        Where I've<br />
        <span className="gradient-text">built things.</span>
      </h2>

      <p
        className={`text-white/40 text-xs mb-10 ${revealed ? 'animate-reveal-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}
      >
        Please request my resume via the link above.
      </p>

      <div className="flex flex-col gap-4">
        {EXPERIENCES.map((exp, idx) => (
          <ScrollAnimatedCard
            key={idx}
            index={idx}
            experience={exp}
            selectedSkill={selectedSkill}
            revealed={revealed}
          />
        ))}
      </div>
    </section>
  );
}

function ScrollAnimatedCard({
  experience,
  index,
  selectedSkill,
  revealed,
}: {
  experience: Experience;
  index: number;
  selectedSkill?: string;
  revealed: boolean;
}) {
  const highlightedAchievements = selectedSkill
    ? experience.achievements.filter((a) => a.skills.includes(selectedSkill))
    : [];

  return (
    <div
      className={`rounded-xl p-5 sm:p-6 transition-[box-shadow] duration-300 ${revealed ? 'animate-reveal-up' : 'opacity-0'} ${
        highlightedAchievements.length > 0 ? 'shadow-[0_0_20px_rgba(6,182,212,0.15)]' : ''
      }`}
      style={{
        animationDelay: `${0.3 + index * 0.12}s`,
        background: 'rgba(255,255,255,0.04)',
        border: highlightedAchievements.length > 0
          ? '1px solid rgba(6,182,212,0.3)'
          : '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div>
          <span className="font-semibold text-base text-white">{experience.role}</span>
          <span className="text-white/40 mx-2">@</span>
          <a
            href={experience.company === "Lifesight" ? "https://lifesight.io" : experience.company === "Gauge" ? "https://gauge.ro" : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
          >
            {experience.company}
          </a>
        </div>
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full shrink-0"
          style={{ background: 'rgba(99,102,241,0.15)', color: 'rgba(129,140,248,0.9)', border: '1px solid rgba(99,102,241,0.2)' }}
        >
          {experience.period}
        </span>
      </div>

      <p className="text-sm text-white/50 leading-relaxed mb-3">{experience.description}</p>

      {highlightedAchievements.length > 0 && (
        <div className="mt-3 space-y-1.5">
          <p className="text-xs text-cyan-400 font-medium mb-2">Relevant highlights:</p>
          {highlightedAchievements.map((ach, i) => (
            <div key={i} className="flex gap-2 text-xs text-white/65">
              <span className="text-cyan-400 shrink-0 mt-0.5">›</span>
              <span>{ach.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { EXPERIENCES, ALL_SKILLS, SKILL_DESCRIPTIONS };
