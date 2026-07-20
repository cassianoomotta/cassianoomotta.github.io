import { Database, Layout, Smartphone, FileText, ArrowUpRight } from 'lucide-react';
import './Projetos.css';

const projectsData = [
  {
    title: 'Agro PDF Extractor',
    status: 'EM_DESENVOLVIMENTO',
    logoUrl: '/agro-logo.svg',
    icon: <Database color="var(--ai-primary)" />,
    description: 'Arquitetura offline-first projetada para processar PDFs agrícolas com dados sensíveis (Zero Data Leak). Orquestra LLMs locais (Gemma 3 via Ollama) com fallback para OCR e processamento determinístico, garantindo extrações complexas 100% livres de alucinações da IA.',
    tech: ['Node.js', 'Gemma 3', 'Ollama', 'Regex', 'Offline-First'],
    link: 'https://github.com/cassianoomotta'
  },
  {
    title: 'TechFitness',
    status: 'CONCLUÍDO',
    logoUrl: '/techfitness-logo.png',
    icon: <Smartphone color="var(--ai-secondary)" />,
    description: 'Ecossistema SaaS B2B para gestão inteligente em academias e personais. Desenvolvido para escalabilidade, com interface móvel premium, banco de dados relacional e cálculos algorítmicos complexos de RPE (intensidade de treino) voltados para aumentar a retenção de alunos.',
    tech: ['React', 'Backend API', 'UX/UI', 'Vibecoding'],
    link: 'https://github.com/cassianoomotta/TechFitness'
  },
  {
    title: 'Arandu',
    status: 'CONCLUÍDO',
    logoUrl: '/arandu-logo.svg',
    icon: <Layout color="var(--ai-primary)" />,
    description: 'Plataforma autônoma de inteligência de mercado operada por Multi-Agent AI (Gemini). O pipeline coleta dados brutos via Web Scraping, enquanto os Agentes os processam, classificam e disparam resumos executivos impecáveis via Telegram, sem intervenção humana.',
    tech: ['Python', 'FastAPI', 'Multi-Agent AI', 'Gemini API', 'SQLite'],
    link: 'https://github.com/cassianoomotta/arandu'
  },
  {
    title: 'Radar Global v3.1',
    status: 'CONCLUÍDO',
    logoUrl: '/radar-logo.svg',
    icon: <FileText color="var(--ai-secondary)" />,
    description: 'Motor de inteligência geopolítica construído para processamento de alto desempenho. Utiliza Web Scraping multi-thread (paralelismo) para extrair notícias de 14 fontes globais simultaneamente, aplicando tradução neural em tempo real e captura de metadados.',
    tech: ['FastAPI', 'Python', 'Web Scraping', 'Multithreading'],
    link: 'https://github.com/cassianoomotta/app-noticias'
  }
];

export default function Projetos() {
  return (
    <section id="projetos" className="ai-container" style={{ padding: '4rem 0', position: 'relative', zIndex: 10 }}>
      
      <div className="section-title">
        <h2 className="mono-text" style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>
          <span style={{ color: 'var(--text-dim)' }}>01.</span> MODULE_PROJECTS
        </h2>
        <div className="section-line"></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projectsData.map((proj, idx) => (
          <div key={idx} className="project-card" style={{ display: 'flex', flexDirection: 'column' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ 
                padding: proj.logoUrl ? '5px' : '10px', 
                background: 'rgba(255,255,255,0.03)', 
                borderRadius: '8px', 
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                overflow: 'hidden'
              }}>
                {proj.logoUrl ? (
                  <img src={proj.logoUrl} alt={`${proj.title} logo`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                ) : (
                  proj.icon
                )}
              </div>
              
              <span className={`project-status mono-text ${proj.status === 'EM_DESENVOLVIMENTO' ? 'wip' : ''}`} style={{ position: 'relative', top: 0, right: 0 }}>
                {proj.status === 'CONCLUÍDO' ? '● CONCLUÍDO' : '▶ EM_DESENVOLVIMENTO'}
              </span>
            </div>

            <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1.2rem', lineHeight: 1.3 }}>{proj.title}</h3>

            <p style={{ color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
              {proj.description}
            </p>

            <div className="project-tech mono-text" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2rem', marginTop: 'auto' }}>
              {proj.tech.map((t, i) => (
                <span key={i} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>

            {proj.status === 'CONCLUÍDO' ? (
              <a href={proj.link} target="_blank" rel="noreferrer" className="btn-ai" style={{ width: '100%', justifyContent: 'center' }}>
                ANALISAR CÓDIGO <ArrowUpRight size={16} />
              </a>
            ) : (
              <div className="btn-ai mono-text" style={{ width: '100%', justifyContent: 'center', opacity: 0.4, cursor: 'not-allowed', borderColor: 'rgba(255,255,255,0.1)' }}>
                EM DESENVOLVIMENTO // PRIVADO
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
