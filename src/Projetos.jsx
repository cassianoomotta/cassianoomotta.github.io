import { Database, Layout, Smartphone, FileText, ArrowUpRight } from 'lucide-react';
import './Projetos.css';

const projectsData = [
  {
    title: 'Agro PDF Extractor',
    status: 'EM_DESENVOLVIMENTO',
    logoUrl: '/agro-logo.svg',
    icon: <Database color="var(--ai-primary)" />,
    description: 'Pipeline offline-first para extração de dados complexos de PDFs agrícolas. Integração com modelos locais (Gemma 3) via Ollama, OCR de fallback e regex avançado para estruturação de dados sensíveis.',
    tech: ['Node.js', 'Gemma 3', 'Ollama', 'Regex', 'Offline-First'],
    link: 'https://github.com/cassianoomotta'
  },
  {
    title: 'TechFitness',
    status: 'CONCLUÍDO',
    logoUrl: '/techfitness-logo.png',
    icon: <Smartphone color="var(--ai-secondary)" />,
    description: 'Plataforma B2B para academias, personais e profissionais autônomos focada em retenção e gestão de treinos. Interface móvel robusta, banco de dados otimizado e lógica complexa para cálculo de intensidade.',
    tech: ['React', 'Backend API', 'UX/UI', 'Vibecoding'],
    link: 'https://github.com/cassianoomotta/TechFitness'
  },
  {
    title: 'Arandu',
    status: 'CONCLUÍDO',
    logoUrl: '/arandu-logo.svg',
    icon: <Layout color="var(--ai-primary)" />,
    description: 'Portal premium de inteligência de mercado. Pipeline com web scraping e 2 Agentes de IA dedicados (via Gemini API) para orquestrar curadoria de dados e resumos executivos. Disparos de alertas via Telegram.',
    tech: ['Python', 'FastAPI', 'Multi-Agent AI', 'Gemini API', 'SQLite'],
    link: 'https://github.com/cassianoomotta/arandu'
  },
  {
    title: 'Radar Global v3.1',
    status: 'CONCLUÍDO',
    logoUrl: '/radar-logo.svg',
    icon: <FileText color="var(--ai-secondary)" />,
    description: 'App de monitoramento geopolítico em tempo real. Scraping com paralelismo (threads) de 14 fontes globais simultâneas, tradução via Deep-Translator, extração Open Graph e persistência de leitura.',
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
