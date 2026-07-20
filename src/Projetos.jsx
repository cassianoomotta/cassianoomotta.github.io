import { Database, Layout, Smartphone, FileText, ArrowUpRight } from 'lucide-react';
import './Projetos.css';

const projectsData = [
  {
    title: 'Agro PDF Extractor',
    status: 'EM_DESENVOLVIMENTO',
    logoUrl: '/agro-logo.svg',
    icon: <Database color="var(--ai-primary)" />,
    description: {
      desafio: 'A extração manual de dados sensíveis de documentos agrícolas era lenta e vulnerável a erros, exigindo 100% de privacidade (sem tráfego em APIs de nuvens públicas).',
      solucao: 'Arquitetura híbrida e offline-first: une Regex determinístico de alta velocidade com LLM local (Gemma 3 via Ollama - temp 0) e fallback de OCR (Tesseract) para PDFs digitalizados.',
      impacto: 'Estruturação automática e exportação limpa para relatórios/Excel com Zero Data Leak, garantindo precisão total sem alucinações da IA.'
    },
    tech: ['Node.js', 'Gemma 3', 'Ollama', 'Tesseract OCR', 'Excel Export', 'Offline-First'],
    link: 'https://github.com/cassianoomotta'
  },
  {
    title: 'TechFitness',
    status: 'CONCLUÍDO',
    logoUrl: '/techfitness-logo.png',
    previewUrl: '/techfitness-preview.png',
    icon: <Smartphone color="var(--ai-secondary)" />,
    description: {
      desafio: 'Academias, personais e autônomos enfrentam alta evasão por falta de acompanhamento individualizado e controle de intensidade de carga.',
      solucao: 'Plataforma SaaS B2B com Next.js 16 (App Router), motor de esforço RPE e assistente Copilot IA para prescrição ágil de treinos.',
      impacto: 'Arquitetura resiliente focada em segurança: hashing Bcrypt.js, validação de payload Zod, Prisma ORM anti-SQL Injection e autoria RBAC (TRAINER/STUDENT).'
    },
    tech: ['Next.js 16', 'NextAuth RBAC', 'Prisma ORM', 'Zod Security', 'Bcrypt.js', 'RPE Engine', 'Gemini IA'],
    link: 'https://github.com/cassianoomotta/TechFitness'
  },
  {
    title: 'Arandu',
    status: 'CONCLUÍDO',
    logoUrl: '/arandu-logo.png?v=2',
    previewUrl: '/arandu-preview.png',
    icon: <Layout color="var(--ai-primary)" />,
    description: {
      desafio: 'Executivos perdem horas em buscas manuais, necessitando de inteligência curada e gestão automatizada de pipeline de leads.',
      solucao: 'Arquitetura SaaS autônoma com Multi-Agent AI (Gemini): combina agentes de curadoria/síntese a um dashboard interativo em tempo real.',
      impacto: 'Segurança & Engenharia: SQLAlchemy ORM com conexão resiliente, isolamento estrito de segredos/bancos no `.gitignore` e suporte Vercel.'
    },
    tech: ['Python', 'FastAPI', 'Multi-Agent AI', 'Gemini API', 'SQLAlchemy ORM', 'SaaS Architecture', 'Real-time Pipeline'],
    link: 'https://github.com/cassianoomotta/arandu'
  },
  {
    title: 'Radar Global v3.1',
    status: 'CONCLUÍDO',
    logoUrl: '/radar-logo.svg',
    icon: <FileText color="var(--ai-secondary)" />,
    description: {
      desafio: 'Monitorar eventos geopolíticos em tempo real exigia varrer dezenas de portais internacionais sem travar a aplicação e superando barreiras idiomáticas.',
      solucao: 'Engine em Python/FastAPI alimentada por Web Scraping multithread (requisições paralelas em 14 fontes globais), tradução neural automática e captura Open Graph.',
      impacto: 'Feed geopolítico centralizado, rico em metadados visuais e traduzido instantaneamente sem gargalos de latência de rede.'
    },
    tech: ['Python', 'FastAPI', 'Multithreading', 'Deep-Translator', 'Open Graph'],
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

            {proj.previewUrl && (
              <div style={{
                width: '100%',
                height: '150px',
                borderRadius: '8px',
                overflow: 'hidden',
                marginBottom: '1.2rem',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(0,0,0,0.3)'
              }}>
                <img src={proj.previewUrl} alt={`${proj.title} preview`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}

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
