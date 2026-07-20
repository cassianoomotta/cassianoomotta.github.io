import { Cpu, Code2, Zap, ShieldCheck, Terminal, Award } from 'lucide-react';

export default function About() {
  const metrics = [
    { label: 'PROJETOS DE IA ENTREGUES', value: '3+', icon: <Cpu color="var(--ai-secondary)" size={20} /> },
    { label: 'COBERTURA DE TESTES', value: '24 Tests', icon: <ShieldCheck color="var(--ai-primary)" size={20} /> },
    { label: 'THREADS PARALELAS (I/O)', value: '14 Threads', icon: <Zap color="#ffb400" size={20} /> },
    { label: 'STACK CORE', value: 'Fullstack + AI', icon: <Code2 color="#10b981" size={20} /> }
  ];

  return (
    <section id="sobre" className="ai-container" style={{ padding: '4rem 0 2rem 0' }}>
      <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <span className="section-tag mono-text">0.1 // TRAJETÓRIA & FILOSOFIA</span>
        <h2 className="section-title">Sobre Mim & Filosofia de Engenharia</h2>
        <p style={{ color: 'var(--text-dim)', maxWidth: '650px', margin: '0.8rem auto 0 auto' }}>
          Construindo software resiliente, escalável e impulsionado por Inteligência Artificial autônoma.
        </p>
      </div>

      {/* Grid 2 Colunas: Filosofia & Métricas */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch'
        }}
      >
        {/* Card 1: Filosofia & Visão */}
        <div
          className="glass-card"
          style={{
            padding: '2rem',
            borderRadius: '12px',
            background: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
              <Terminal size={22} color="var(--ai-secondary)" />
              <h3 className="mono-text" style={{ fontSize: '1.15rem', color: '#fff' }}>
                MINHA_FILOSOFIA
              </h3>
            </div>
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.7, fontSize: '0.98rem', marginBottom: '1rem' }}>
              Acredito que a Inteligência Artificial não substitui a boa engenharia; ela eleva o teto do que um único desenvolvedor é capaz de construir. 
            </p>
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.7, fontSize: '0.98rem' }}>
              Meu foco é projetar a **arquitetura**, garimpar os gargalos de **performance**, validar regras de **segurança** e utilizar **agentes autônomos** para automatizar o fluxo de dados do início ao fim.
            </p>
          </div>

          <div
            style={{
              marginTop: '2rem',
              paddingTop: '1.2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <Award size={20} color="var(--ai-primary)" />
            <span className="mono-text" style={{ fontSize: '0.82rem', color: 'var(--text-main)' }}>
              Foco em Arquitetura Limpa, Testabilidade e IA Generativa
            </span>
          </div>
        </div>

        {/* Card 2: Métricas de Alto Impacto */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem'
          }}
        >
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ marginBottom: '0.8rem' }}>{m.icon}</div>
              <div
                className="mono-text"
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '0.4rem'
                }}
              >
                {m.value}
              </div>
              <div
                className="mono-text"
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-dim)',
                  letterSpacing: '0.05em',
                  lineHeight: 1.3
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
