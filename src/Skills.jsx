import { BrainCircuit, Code2, Server, Workflow, Bot, Database, Infinity, Layout, Network, Cpu, Code, Command } from 'lucide-react';
import './Projetos.css';

// Linha 1: Foco em IA, Agentes e Lógica Core
const skillsRow1 = [
  { text: "Agentic Workflows", icon: <Workflow color="var(--ai-secondary)" size={20} /> },
  { text: "Prompt Engineering", icon: <Command color="var(--ai-primary)" size={20} /> },
  { text: "Gemma 3 & LLMs", icon: <BrainCircuit color="var(--ai-secondary)" size={20} /> },
  { text: "RAG Systems", icon: <Database color="var(--ai-primary)" size={20} /> },
  { text: "Vibecoding", icon: <Infinity color="var(--ai-secondary)" size={20} /> },
  { text: "Python Core", icon: <Code color="var(--ai-primary)" size={20} /> },
  { text: "Arquitetura Offline-First", icon: <Server color="var(--ai-secondary)" size={20} /> }
];

// Linha 2: Foco em Ferramentas, Dados e UI
const skillsRow2 = [
  { text: "FastAPI", icon: <Cpu color="var(--ai-primary)" size={20} /> },
  { text: "Web Scraping", icon: <Network color="var(--ai-secondary)" size={20} /> },
  { text: "Node.js & JS", icon: <Code2 color="var(--ai-primary)" size={20} /> },
  { text: "React & UI Dinâmica", icon: <Layout color="var(--ai-secondary)" size={20} /> },
  { text: "Expressões Regulares", icon: <Command color="var(--ai-primary)" size={20} /> },
  { text: "SQLite & Bancos Relacionais", icon: <Database color="var(--ai-secondary)" size={20} /> },
  { text: "Automações (Telegram Bots)", icon: <Bot color="var(--ai-primary)" size={20} /> }
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
