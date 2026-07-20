import { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, Network, ArrowRight, User, FileDown, FolderGit2 } from 'lucide-react';
import About from './About';
import Projetos from './Projetos';
import Skills from './Skills';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const fullText = "Orquestrando Inteligência Artificial para construir o futuro do software.";
  const [cursor, setCursor] = useState(true);

  // Hologram Scan State
  const [scanProgress, setScanProgress] = useState(0);

  // Spotlight effect
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Typewriter Effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    // Cursor Blink Effect
    const cursorInterval = setInterval(() => {
      setCursor(prev => !prev);
    }, 500);

    // Hologram Scan Effect (0 to 100)
    const scanInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(scanInterval);
          return 100;
        }
        return prev + 1; // 1% per 25ms = 2.5s total
      });
    }, 25);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      clearInterval(scanInterval);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Dynamic Mouse Spotlight */}
      <div
        className="mouse-spotlight"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />

      {/* Dynamic Background */}
      <div className="cyber-grid"></div>

      {/* Tech Header */}
      <header className="ai-container header-layout">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <Cpu className="pulse-icon" color="var(--ai-secondary)" size={24} />
          <h2 className="mono-text" style={{ fontSize: '1.1rem', fontWeight: '700', letterSpacing: '0.1em' }}>
            SYS.CASSIANO <span style={{ color: 'var(--text-dim)', fontWeight: '400' }}>// AI_CORE</span>
          </h2>
        </div>
        <nav className="header-nav">
          <a href="#projetos" className="nav-link mono-text">01. Projetos</a>
          <a href="#skills" className="nav-link mono-text">02. Stack</a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="status-dot"></span>
            <span className="mono-text" style={{ fontSize: '0.8rem', color: '#10b981' }}>SYSTEM ONLINE</span>
          </div>
        </nav>
      </header>

      {/* Hero Section - 2 Columns */}
      <main className="ai-container hero-layout" style={{ flex: 1, padding: '2rem 0' }}>

        {/* Left Column - Text */}
        <div className="hero-text-col">
          <div className="float" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '2rem', width: 'fit-content' }}>
            <Terminal size={14} color="var(--ai-primary)" />
            <span className="mono-text" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>
              ROLE: AI PRODUCT DEVELOPER
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.5rem', minHeight: '140px' }}>
            {text}
            <span style={{ opacity: cursor ? 1 : 0, color: 'var(--ai-secondary)' }}>_</span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', maxWidth: '550px', lineHeight: 1.6, marginBottom: '3rem' }}>
            A IA escreve o código, eu construo o ecossistema. Desenho a arquitetura, gerencio o fluxo de dados e utilizo agentes autônomos para escalar a produção. <strong>O cérebro estratégico por trás da execução técnica.</strong>
          </p>

          {/* Action Terminals */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#projetos" className="btn-primary">
                <FolderGit2 size={18} />
                INICIAR_PROJETOS
              </a>
              <a href="https://github.com/cassianoomotta" target="_blank" rel="noreferrer" className="btn-ai">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                CONECTAR_GITHUB
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Photo/Avatar Frame */}
        <div className="hero-visual-col" style={{ flexDirection: 'column' }}>
          <div className="hologram-frame">
            <div className="avatar-placeholder" style={{ position: 'relative' }}>

              {/* Fallback Text / Loading state behind the image */}
              {scanProgress < 100 && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 1, width: '100%' }}>
                  <User size={48} color="var(--text-dim)" style={{ opacity: 0.2, marginBottom: '15px' }} />
                  <div className="mono-text" style={{ fontSize: '0.8rem', color: 'var(--ai-secondary)', letterSpacing: '0.1em' }}>
                    DECRYPTING... {scanProgress}%
                  </div>
                </div>
              )}

              {/* The Image with Clip-Path Reveal */}
              <img
                src="/profile.png"
                alt="Cassiano"
                className={scanProgress === 100 ? "image-ready" : ""}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'relative',
                  zIndex: 2,
                  clipPath: `polygon(0 0, 100% 0, 100% ${scanProgress}%, 0 ${scanProgress}%)`,
                  ...(scanProgress < 100 ? {
                    filter: 'contrast(1.5) brightness(0.5) sepia(1) hue-rotate(180deg)',
                    transition: 'filter 1.5s ease'
                  } : {})
                }}
              />

              {/* The Laser Scan Line at the exact progress boundary */}
              {scanProgress < 100 && (
                <div style={{
                  position: 'absolute',
                  top: `${scanProgress}%`,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'var(--ai-secondary)',
                  boxShadow: '0 0 10px var(--ai-secondary), 0 0 20px var(--ai-primary)',
                  zIndex: 3
                }}></div>
              )}
            </div>

            {/* Tech decorations around the frame */}
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <div className="corner corner-bl"></div>
            <div className="corner corner-br"></div>

            {/* Info floating card */}
            <div className="floating-info-card float">
              <span className="mono-text" style={{ fontSize: '0.7rem', color: 'var(--ai-secondary)' }}>CPU LOAD: 24%</span>
              <span className="mono-text" style={{ fontSize: '0.7rem', color: 'var(--ai-primary)' }}>
                {scanProgress < 100 ? 'SYNCING...' : 'AI SYNC: 100%'}
              </span>
            </div>
          </div>
          
          <div className="photo-label mono-text" style={{ marginTop: '1.5rem', textAlign: 'center', marginBottom: '1.5rem' }}>
            STATUS: {scanProgress < 100 ? `SCANNING ${Math.floor(scanProgress)}%` : 'ONLINE'}
          </div>

          <a href="/curriculo.pdf" target="_blank" className="btn-primary" style={{ width: 'fit-content', minWidth: '250px', justifyContent: 'center' }}>
            <FileDown size={18} />
            BAIXAR_CURRÍCULO.PDF
          </a>
        </div>
      </main>

      {/* Sobre Mim / Trajetória & Filosofia (Opcional) */}
      {/* <About /> */}

      {/* Projetos Section */}
      <Projetos />

      {/* Skills Section */}
      <Skills />

      {/* Contato Footer */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
