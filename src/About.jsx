import { GraduationCap, Cpu, BarChart3, Terminal, Sparkles, Database } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="ai-container" style={{ padding: '4rem 0 2rem 0' }}>
      <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <span className="section-tag mono-text">0.1 // TRAJETÓRIA & PERSPECTIVA</span>
        <h2 className="section-title">Sobre Mim & Visão de Engenharia</h2>
        <p style={{ color: 'var(--text-dim)', maxWidth: '680px', margin: '0.8rem auto 0 auto' }}>
          Unindo visão de gestão, governança de dados e ferramentas de Inteligência Artificial para construir software de alto impacto.
        </p>
      </div>

      {/* Grid Principal: Carta de Apresentação & 3 Pilares */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch'
        }}
      >
        {/* Bloco 1: Manifesto do Vibe Coder / AI-Native Developer */}
        <div
          className="glass-card"
          style={{
            padding: '2.2rem',
            borderRadius: '14px',
            background: 'rgba(15, 23, 42, 0.65)',
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
                PERFIL_E_FILOSOFIA
              </h3>
            </div>
            
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.7, fontSize: '0.98rem', marginBottom: '1.2rem' }}>
              Sou <strong style={{ color: '#fff' }}>AI Product Developer, Administrador e Mestrando em Tecnologias Gerenciais e Inovação (FURG)</strong> com foco em orquestração de Inteligência Artificial e entrega acelerada de software.
            </p>
            
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.7, fontSize: '0.98rem', marginBottom: '1.2rem' }}>
              Combino visão de negócios, governança de dados e metodologias de Vibe Coding para projetar, integrar e colocar sistemas fullstack completos em produção, integrando o frontend ao backend e a agentes de IA.
            </p>

            <p style={{ color: 'var(--text-dim)', lineHeight: 1.7, fontSize: '0.98rem' }}>
              Minha força está em <strong style={{ color: '#fff' }}>resolver problemas reais com alta velocidade</strong>: criando aplicações SaaS autônomas, pesquisando IA para gestão de crises climáticas ou estruturando dados para a tomada de decisão estratégica.
            </p>
          </div>

          <div
            style={{
              marginTop: '2rem',
              paddingTop: '1.2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <Sparkles size={18} color="var(--ai-primary)" />
            <span className="mono-text" style={{ fontSize: '0.82rem', color: 'var(--text-main)' }}>
              Metodologia Ágil // Vibe Coding & Governança de Dados
            </span>
          </div>
        </div>

        {/* Bloco 2: 3 Pilares de Destaque */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', justifyContent: 'space-between' }}>
          
          {/* Pilar 1: Mestrado & Pesquisa */}
          <div
            className="glass-card"
            style={{
              padding: '1.4rem 1.6rem',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}
          >
            <div style={{ background: 'rgba(139, 92, 246, 0.12)', padding: '10px', borderRadius: '10px', border: '1px solid rgba(139, 92, 246, 0.25)' }}>
              <GraduationCap size={22} color="var(--ai-primary)" />
            </div>
            <div>
              <h4 className="mono-text" style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.3rem' }}>
                Mestrando na FURG (Tecnologias Gerenciais)
              </h4>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.83rem', lineHeight: 1.5 }}>
                Bacharel em Administração e Mestrando em Tecnologias Gerenciais e Inovação. Pesquisa focada em Governança de Dados, Cidades Inteligentes e IA em Gestão de Crises Climáticas.
              </p>
            </div>
          </div>

          {/* Pilar 2: Vibe Coding & AI Orchestration */}
          <div
            className="glass-card"
            style={{
              padding: '1.4rem 1.6rem',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}
          >
            <div style={{ background: 'rgba(0, 242, 254, 0.12)', padding: '10px', borderRadius: '10px', border: '1px solid rgba(0, 242, 254, 0.25)' }}>
              <Cpu size={22} color="var(--ai-secondary)" />
            </div>
            <div>
              <h4 className="mono-text" style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.3rem' }}>
                Vibe Coding & Orquestração de IA
              </h4>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.83rem', lineHeight: 1.5 }}>
                Construção acelerada de aplicações SaaS integrando Next.js, Python, FastAPI, bancos de dados e Agentes autônomos Gemini em produção.
              </p>
            </div>
          </div>

          {/* Pilar 3: Dados & Gestão Estratégica */}
          <div
            className="glass-card"
            style={{
              padding: '1.4rem 1.6rem',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}
          >
            <div style={{ background: 'rgba(16, 185, 129, 0.12)', padding: '10px', borderRadius: '10px', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
              <BarChart3 size={22} color="#10b981" />
            </div>
            <div>
              <h4 className="mono-text" style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.3rem' }}>
                Visão de Negócio & Analytics
              </h4>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.83rem', lineHeight: 1.5 }}>
                Experiência em Ciência de Dados aplicada à Administração, modelagem de processos, pipelines ETL, SQL e automações voltadas ao aumento de eficiência operacional.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
