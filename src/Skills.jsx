import { BrainCircuit, Code2, Server, Workflow, Bot, Database, Infinity, Layout, Network, Cpu, Code, Command } from 'lucide-react';
import './Projetos.css';

// Linha 1: Foco em IA, Agentes e Lógica Core
const skillsRow1 = [
  { text: "Multi-Agent AI Systems", icon: <Workflow color="var(--ai-secondary)" size={20} /> },
  { text: "Next.js 16 App Router", icon: <Layout color="var(--ai-primary)" size={20} /> },
  { text: "Gemini API & LLMs", icon: <BrainCircuit color="var(--ai-secondary)" size={20} /> },
  { text: "FastAPI Backend", icon: <Cpu color="var(--ai-primary)" size={20} /> },
  { text: "Vibe Coding", icon: <Infinity color="var(--ai-secondary)" size={20} /> },
  { text: "Python Core", icon: <Code color="var(--ai-primary)" size={20} /> },
  { text: "Governança de Dados", icon: <Database color="var(--ai-secondary)" size={20} /> }
];

// Linha 2: Foco em Ferramentas, Dados e Resiliência
const skillsRow2 = [
  { text: "NextAuth RBAC Security", icon: <Server color="var(--ai-primary)" size={20} /> },
  { text: "Prisma & ORM Security", icon: <Database color="var(--ai-secondary)" size={20} /> },
  { text: "Multithreading (14 Threads)", icon: <Network color="var(--ai-primary)" size={20} /> },
  { text: "Pytest (24 Testes)", icon: <Command color="var(--ai-secondary)" size={20} /> },
  { text: "React & Vanilla CSS", icon: <Layout color="var(--ai-primary)" size={20} /> },
  { text: "SQL & Analytics", icon: <Database color="var(--ai-secondary)" size={20} /> },
  { text: "Open Graph Scraping", icon: <Network color="var(--ai-primary)" size={20} /> }
];

export default function Skills() {
  return (
    <section id="skills" className="ai-container" style={{ padding: '6rem 0', position: 'relative', zIndex: 10, overflow: 'hidden' }}>
      <div className="section-title" style={{ marginBottom: '4rem' }}>
        <h2 className="mono-text" style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>
          <span style={{ color: 'var(--text-dim)' }}>02.</span> SYSTEM_CAPABILITIES
        </h2>
        <div className="section-line"></div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        
        {/* Marquee Row 1 - Scroll Left */}
        <div className="marquee-container">
          <div className="marquee-content">
            {skillsRow1.map((skill, idx) => (
              <div key={`r1-${idx}`} className="skill-pill mono-text">
                {skill.icon} {skill.text}
              </div>
            ))}
          </div>
          {/* Duplicate for infinite loop illusion */}
          <div className="marquee-content">
            {skillsRow1.map((skill, idx) => (
              <div key={`r1-dup-${idx}`} className="skill-pill mono-text">
                {skill.icon} {skill.text}
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 - Scroll Right */}
        <div className="marquee-container">
          <div className="marquee-content reverse">
            {skillsRow2.map((skill, idx) => (
              <div key={`r2-${idx}`} className="skill-pill mono-text">
                {skill.icon} {skill.text}
              </div>
            ))}
          </div>
          {/* Duplicate for infinite loop illusion */}
          <div className="marquee-content reverse">
            {skillsRow2.map((skill, idx) => (
              <div key={`r2-dup-${idx}`} className="skill-pill mono-text">
                {skill.icon} {skill.text}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
