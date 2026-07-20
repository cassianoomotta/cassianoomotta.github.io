import { Database, Layout, Smartphone, FileText, ArrowUpRight } from 'lucide-react';
import './Projetos.css';

const projectsData = [
  {
    title: 'Agro PDF Extractor',
    status: 'EM_DESENVOLVIMENTO',
    logoUrl: '/agro-logo.svg',
    icon: <Database color="var(--ai-primary)" />,
    description: {
      desafio: 'A extração manual de dados sensíveis de PDFs agrícolas era propensa a erros, e exigia privacidade total sem envio de dados para a nuvem pública.',
      solucao: 'Construção de uma arquitetura offline-first orquestrando LLMs locais (Gemma 3 via Ollama) com processamento determinístico (temperature 0) e fallback para OCR.',
      impacto: 'Automação ágil e precisa, com extrações complexas estruturadas (Zero Data Leak) e eliminação completa de alucinações da IA.'
    },
    tech: ['Node.js', 'Gemma 3', 'Ollama', 'Regex', 'Offline-First'],
    link: 'https://github.com/cassianoomotta'
  },
  {
    title: 'TechFitness',
    status: 'CONCLUÍDO',
    logoUrl: '/techfitness-logo.png',
    icon: <Smartphone color="var(--ai-secondary)" />,
    description: {
      desafio: 'Academias e profissionais autônomos enfrentam altas taxas de evasão devido à falta de engajamento e personalização dos treinos.',
      solucao: 'Ecossistema SaaS B2B com interface mobile premium que automatiza a gestão e utiliza cálculos algorítmicos para controle de intensidade (RPE).',
      impacto: 'Aumento da retenção e fidelização de alunos através de treinos personalizados, além de relatórios executivos para os gestores.'
    },
    tech: ['React', 'Backend API', 'UX/UI', 'Vibecoding'],
    link: 'https://github.com/cassianoomotta/TechFitness'
  },
  {
    title: 'Arandu',
    status: 'CONCLUÍDO',
    logoUrl: '/arandu-logo.svg',
    icon: <Layout color="var(--ai-primary)" />,
    description: {
      desafio: 'Acompanhar tendências, notícias corporativas e indicadores de mercado de forma manual consumia tempo excessivo e gerava ruído analítico.',
      solucao: 'Pipeline autônomo com Web Scraping e Multi-Agent AI (Gemini) atuando na coleta, cruzamento de dados e redação estruturada.',
      impacto: 'Geração e disparo 100% autônomo de resumos executivos direto via Telegram, transformando dados soltos em inteligência acionável.'
    },
    tech: ['Python', 'FastAPI', 'Multi-Agent AI', 'Gemini API', 'SQLite'],
    link: 'https://github.com/cassianoomotta/arandu'
  },
  {
    title: 'Radar Global v3.1',
    status: 'CONCLUÍDO',
    logoUrl: '/radar-logo.svg',
    icon: <FileText color="var(--ai-secondary)" />,
    description: {
      desafio: 'O monitoramento de crises e notícias geopolíticas em múltiplas fontes globais sofria com alta latência e barreira de idiomas locais.',
      solucao: 'Motor de processamento utilizando Web Scraping multi-thread (paralelismo) em 14 fontes simultâneas, acoplado a tradução neural em tempo real.',
      impacto: 'Monitoramento contínuo, centralizado e de altíssimo desempenho, entregando informações cruciais traduzidas sem delay de processamento.'
    },
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

            <div style={{ color: 'var(--text-dim)', lineHeight: 1.5, marginBottom: '1.5rem', flexGrow: 1, fontSize: '0.95rem' }}>
              <div style={{ marginBottom: '0.7rem' }}>
                <strong style={{ color: 'var(--ai-secondary)' }}>O Desafio:</strong> {proj.description.desafio}
              </div>
              <div style={{ marginBottom: '0.7rem' }}>
                <strong style={{ color: 'var(--ai-secondary)' }}>A Solução:</strong> {proj.description.solucao}
              </div>
              <div>
                <strong style={{ color: 'var(--ai-secondary)' }}>O Impacto:</strong> {proj.description.impacto}
              </div>
            </div>

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
