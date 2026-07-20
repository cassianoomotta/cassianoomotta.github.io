import { useState, useEffect } from 'react';
import { Database, Layout, Smartphone, Globe, ArrowUpRight, ChevronLeft, ChevronRight, Maximize2, X, ExternalLink } from 'lucide-react';
import './Projetos.css';

const projectsData = [
  {
    title: 'Agro PDF Extractor',
    status: 'EM_DESENVOLVIMENTO',
    logoUrl: '/agro-logo.svg',
    icon: <Database color="var(--ai-primary)" />,
    screenshots: [],
    description: {
      desafio: 'A extração manual de dados sensíveis de documentos agrícolas era lenta e vulnerável a erros, exigindo 100% de privacidade (sem tráfego em APIs de nuvens públicas).',
      solucao: 'Arquitetura híbrida e offline-first: une Regex determinístico de alta velocidade com LLM local (Gemma 3 via Ollama - temp 0) e fallback de OCR (Tesseract) para PDFs digitalizados.',
      impacto: 'Estruturação automática e exportação limpa para relatórios/Excel com Zero Data Leak, garantindo precisão total sem alucinações da IA.'
    },
    tech: ['Node.js', 'Gemma 3', 'Ollama', 'Tesseract OCR', 'Excel Export', 'Offline-First'],
    link: 'https://github.com/cassianoomotta',
    demoUrl: null
  },
  {
    title: 'TechFitness',
    status: 'CONCLUÍDO',
    logoUrl: '/techfitness-logo.png',
    icon: <Smartphone color="var(--ai-secondary)" />,
    screenshots: [
      { url: '/techfitness-1.png?v=v7', label: 'Landing Page & Apresentação SaaS' },
      { url: '/techfitness-2.png?v=v7', label: 'Portal de Login & Autenticação' },
      { url: '/techfitness-3.png?v=v7', label: 'Dashboard do Treinador (Prescrição & Alunos)' },
      { url: '/techfitness-4.png?v=v7', label: 'Dashboard do Aluno (Frequência & Esforço RPE)' }
    ],
    description: {
      desafio: 'Academias, personais e autônomos enfrentam alta evasão por falta de acompanhamento individualizado e controle de intensidade de carga.',
      solucao: 'Plataforma SaaS B2B com Next.js 16 (App Router), motor de esforço RPE e assistente Copilot IA para prescrição ágil de treinos.',
      impacto: 'Arquitetura resiliente focada em segurança: hashing Bcrypt.js, validação de payload Zod, Prisma ORM anti-SQL Injection e autoria RBAC (TRAINER/STUDENT).'
    },
    tech: ['Next.js 16', 'NextAuth RBAC', 'Prisma ORM', 'Zod Security', 'Bcrypt.js', 'RPE Engine', 'Gemini IA'],
    link: 'https://github.com/cassianoomotta/TechFitness',
    demoUrl: 'https://tech-fitness.vercel.app/'
  },
  {
    title: 'Arandu',
    status: 'CONCLUÍDO',
    logoUrl: '/arandu-logo.png?v=2',
    icon: <Layout color="var(--ai-primary)" />,
    screenshots: [
      { url: '/arandu-1.png?v=v4', label: 'Portal de Notícias & Curadoria IA' },
      { url: '/arandu-2.png?v=v4', label: 'Landing Page & Captura de Leads' },
      { url: '/arandu-3.png?v=v4', label: 'Login do Painel Administrativo' },
      { url: '/arandu-4.png?v=v6', label: 'Painel Admin, Pipeline & Métricas IA' }
    ],
    description: {
      desafio: 'Executivos perdem horas em buscas manuais, necessitando de inteligência curada e gestão automatizada de pipeline de leads.',
      solucao: 'Arquitetura SaaS autônoma com Multi-Agent AI (Gemini): combina agentes de curadoria/síntese a um dashboard interativo em tempo real.',
      impacto: 'Segurança & Engenharia: SQLAlchemy ORM com conexão resiliente, isolamento estrito de segredos/bancos no `.gitignore` e suporte Vercel.'
    },
    tech: ['Python', 'FastAPI', 'Multi-Agent AI', 'Gemini API', 'SQLAlchemy ORM', 'SaaS Architecture', 'Real-time Pipeline'],
    link: 'https://github.com/cassianoomotta/arandu',
    demoUrl: 'https://arandu-tau.vercel.app/noticias.html'
  },
  {
    title: 'Radar Global',
    status: 'CONCLUÍDO',
    icon: <Globe color="var(--ai-accent)" />,
    screenshots: [
      { url: '/radar-1.png?v=v5', label: 'Hero & Notícia em Destaque' },
      { url: '/radar-2.png?v=v5', label: 'Feed Grid de Notícias Internacionais' },
      { url: '/radar-3.png?v=v5', label: 'Notícias da Semana & Fontes' }
    ],
    description: {
      desafio: 'Agregadores de notícias sofrem com latência de I/O em chamadas sequenciais (~25s) e excesso de ruído/duplicatas entre fontes.',
      solucao: 'Backend FastAPI com ThreadPoolExecutor (14 threads paralelas), deduplicação por hash MD5, tradução em tempo real e Open Graph scraper (~3.9s).',
      impacto: 'Engenharia & Resiliência: Suíte com 24 testes automatizados em Pytest, CORS parametrizável, Docker, isolamento HTTPX e anti-hotlinking.'
    },
    tech: ['Python', 'FastAPI', 'Multithreading', 'Pytest (24 tests)', 'Docker', 'Open Graph Scraper', 'MD5 Deduplication'],
    link: 'https://github.com/cassianoomotta/app-noticias',
    demoUrl: 'https://app-noticias.onrender.com/',
    demoNotice: '💡 Nota: Hospedado no plano gratuito do Render. O 1º acesso pode levar de 30 a 50s para inicializar o servidor (Cold Start).'
  }
];

function ProjectCardGallery({ screenshots, onOpenModal, projectTitle }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  if (!screenshots || screenshots.length === 0) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const currentItem = screenshots[currentIdx];

  return (
    <div
      onClick={() => onOpenModal(screenshots, currentIdx, projectTitle)}
      style={{
        position: 'relative',
        width: '100%',
        height: '180px',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '1.2rem',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(0, 0, 0, 0.4)',
        cursor: 'pointer',
        group: 'true'
      }}
      className="gallery-container"
    >
      <img
        src={currentItem.url}
        alt={currentItem.label}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s ease'
        }}
        className="gallery-image"
      />

      {/* Label Badge Top-Left */}
      <div
        style={{
          position: 'absolute',
          top: '8px',
          left: '8px',
          padding: '3px 8px',
          borderRadius: '4px',
          background: 'rgba(10, 15, 29, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#fff',
          fontSize: '0.75rem',
          backdropFilter: 'blur(4px)',
          fontFamily: 'monospace'
        }}
      >
        {screenshots.length > 1 ? `[${currentIdx + 1}/${screenshots.length}] ` : ''}{currentItem.label}
      </div>

      {/* Expand Icon Overlay */}
      <div
        className="expand-overlay"
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          padding: '5px',
          borderRadius: '6px',
          background: 'rgba(0, 0, 0, 0.65)',
          color: 'var(--ai-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
        title="Clique para expandir em tela cheia"
      >
        <Maximize2 size={14} />
      </div>

      {/* Arrow Buttons if multiple screenshots */}
      {screenshots.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              top: '50%',
              left: '8px',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.65)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              borderRadius: '50%',
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2,
              backdropFilter: 'blur(4px)'
            }}
            title="Anterior"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              top: '50%',
              right: '8px',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.65)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              borderRadius: '50%',
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2,
              backdropFilter: 'blur(4px)'
            }}
            title="Próximo"
          >
            <ChevronRight size={16} />
          </button>

          {/* Dots Indicator Bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '6px',
              zIndex: 2
            }}
          >
            {screenshots.map((_, dotIdx) => (
              <span
                key={dotIdx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIdx(dotIdx);
                }}
                style={{
                  width: dotIdx === currentIdx ? '16px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  background: dotIdx === currentIdx ? 'var(--ai-secondary)' : 'rgba(255, 255, 255, 0.4)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projetos() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    screenshots: [],
    currentIndex: 0,
    title: ''
  });

  const openModal = (screenshots, index, title) => {
    setModalState({
      isOpen: true,
      screenshots,
      currentIndex: index,
      title
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const modalNext = () => {
    setModalState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.screenshots.length
    }));
  };

  const modalPrev = () => {
    setModalState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.screenshots.length) % prev.screenshots.length
    }));
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalState.isOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight' && modalState.screenshots.length > 1) modalNext();
      if (e.key === 'ArrowLeft' && modalState.screenshots.length > 1) modalPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalState]);

  const currentModalItem = modalState.isOpen ? modalState.screenshots[modalState.currentIndex] : null;

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

            {/* Interactive Carousel Gallery */}
            <ProjectCardGallery
              screenshots={proj.screenshots}
              onOpenModal={openModal}
              projectTitle={proj.title}
            />

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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', width: '100%' }}>
                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ai"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      background: 'rgba(0, 242, 254, 0.08)',
                      borderColor: 'var(--ai-secondary)',
                      color: 'var(--ai-secondary)'
                    }}
                  >
                    ACESSAR APLICAÇÃO <ExternalLink size={16} />
                  </a>
                )}
                {proj.demoNotice && (
                  <div
                    style={{
                      fontSize: '0.72rem',
                      color: '#ffc107',
                      background: 'rgba(255, 193, 7, 0.08)',
                      border: '1px solid rgba(255, 193, 7, 0.25)',
                      borderRadius: '6px',
                      padding: '6px 10px',
                      lineHeight: 1.4,
                      textAlign: 'center',
                      fontFamily: 'monospace'
                    }}
                  >
                    {proj.demoNotice}
                  </div>
                )}
                <a href={proj.link} target="_blank" rel="noreferrer" className="btn-ai" style={{ width: '100%', justifyContent: 'center' }}>
                  ANALISAR CÓDIGO <ArrowUpRight size={16} />
                </a>
              </div>
            ) : (
              <div className="btn-ai mono-text" style={{ width: '100%', justifyContent: 'center', opacity: 0.4, cursor: 'not-allowed', borderColor: 'rgba(255,255,255,0.1)' }}>
                EM DESENVOLVIMENTO // PRIVADO
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Fullscreen Image Viewing */}
      {modalState.isOpen && currentModalItem && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(5, 8, 18, 0.92)',
            backdropFilter: 'blur(10px)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          {/* Header Controls */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: '1.5rem',
              left: '2rem',
              right: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '#fff',
              zIndex: 100000
            }}
          >
            <div>
              <h4 className="mono-text" style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>
                {modalState.title}
              </h4>
              <p style={{ color: 'var(--ai-secondary)', fontSize: '0.85rem', margin: '2px 0 0 0' }}>
                {modalState.screenshots.length > 1 ? `[${modalState.currentIndex + 1}/${modalState.screenshots.length}] ` : ''}{currentModalItem.label}
              </p>
            </div>

            <button
              onClick={closeModal}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              title="Fechar (Esc)"
            >
              <X size={22} />
            </button>
          </div>

          {/* Modal Image Frame */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '80vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            <img
              src={currentModalItem.url}
              alt={currentModalItem.label}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                display: 'block'
              }}
            />

            {/* Modal Navigation Arrows */}
            {modalState.screenshots.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    modalPrev();
                  }}
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: '#fff',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(5px)'
                  }}
                  title="Anterior (Seta Esquerda)"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    modalNext();
                  }}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: '#fff',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(5px)'
                  }}
                  title="Próximo (Seta Direita)"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

