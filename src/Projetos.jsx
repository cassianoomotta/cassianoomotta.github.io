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
    icon: <Smartphone color="var(--ai-secondary)" />,
    description: {
      desafio: 'Academias, personais e profissionais autônomos enfrentam alta evasão de alunos por falta de acompanhamento individualizado e controle de intensidade de carga.',
      solucao: 'Ecossistema SaaS B2B com player de treino interativo no mobile, catálogo visual de exercícios e motor algorítmico de cálculo RPE (Percepção Subjetiva de Esforço).',
      impacto: 'Experiência fluida de execução para o aluno e visão analítica de retenção e evolução de cargas para o profissional de educação física.'
    },
    tech: ['React', 'Node.js/API', 'RPE Engine', 'UX/UI', 'Mobile-First'],
    link: 'https://github.com/cassianoomotta/TechFitness'
  },
  {
    title: 'Arandu',
    status: 'CONCLUÍDO',
    logoUrl: '/arandu-logo.svg',
    icon: <Layout color="var(--ai-primary)" />,
    description: {
      desafio: 'Acompanhar tendências de mercado e notícias corporativas em tempo real exigia horas diárias de busca manual e filtros contra ruídos de informação.',
      solucao: 'Pipeline autônomo com Web Scraping e Multi-Agent AI (Gemini): um agente realiza a curadoria e filtragem estratégica enquanto outro sintetiza resumos executivos.',
      impacto: 'Transformação de grande volume de notícias brutas em um feed estruturado de inteligência de mercado, reduzindo horas de análise diária a minutos.'
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
