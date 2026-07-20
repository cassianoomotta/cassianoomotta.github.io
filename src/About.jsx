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

      {/* Seção 2: Experiência Profissional & Certificações (Do Currículo) */}
      <div style={{ marginTop: '3.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="section-tag mono-text">0.2 // HISTÓRICO & CERTIFICAÇÕES</span>
          <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 600 }}>Experiência Profissional & Credenciais</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {/* Exp 1: FURG */}
          <div className="glass-card" style={{ padding: '1.4rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
              <h4 style={{ color: 'var(--ai-secondary)', fontSize: '0.95rem', fontWeight: 600 }}>FURG // Pesquisador de Mestrado</h4>
              <span className="mono-text" style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>2025 - Presente</span>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.83rem', lineHeight: 1.5 }}>
              Desenvolvimento de Modelo de Governança de Dados para eventos climáticos extremos no RS (Cidades Inteligentes). Docência em Ciência de Dados aplicada à Administração.
            </p>
          </div>

          {/* Exp 2: Oficina da Multa */}
          <div className="glass-card" style={{ padding: '1.4rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
              <h4 style={{ color: 'var(--ai-primary)', fontSize: '0.95rem', fontWeight: 600 }}>Oficina da Multa // Analytics</h4>
              <span className="mono-text" style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>2024 (6 meses)</span>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.83rem', lineHeight: 1.5 }}>
              Otimização de dados e automação de processos. Aumento de 70% na taxa de recuperação de pagamentos e redução de 15% na inadimplência.
            </p>
          </div>

          {/* Exp 3: Banrisul */}
          <div className="glass-card" style={{ padding: '1.4rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
              <h4 style={{ color: '#10b981', fontSize: '0.95rem', fontWeight: 600 }}>Banrisul // Análise de Crédito</h4>
              <span className="mono-text" style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>2022 - 2024 (2 anos)</span>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.83rem', lineHeight: 1.5 }}>
              Conferência de relatórios de crédito, análise de viabilidade de transações, gestão documental e conformidade/compliance no setor bancário.
            </p>
          </div>

          {/* Exp 4: Cooperja */}
          <div className="glass-card" style={{ padding: '1.4rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
              <h4 style={{ color: '#f59e0b', fontSize: '0.95rem', fontWeight: 600 }}>Cooperja // Logística & Estoque</h4>
              <span className="mono-text" style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>2020 - 2021 (2 anos)</span>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.83rem', lineHeight: 1.5 }}>
              Gestão de estoques e controladoria baseada em análise de dados. Redução de atrasos logísticos em 30% e otimização da cadeia de entregas.
            </p>
          </div>
        </div>

        {/* Certificações Badges */}
        <div style={{ marginTop: '1.8rem', display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ padding: '0.4rem 0.9rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--text-main)' }}>
            📊 Power BI for Business 2.0
          </div>
          <div style={{ padding: '0.4rem 0.9rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--text-main)' }}>
            🗄️ SQL & Bancos Relacionais
          </div>
          <div style={{ padding: '0.4rem 0.9rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--text-main)' }}>
            🛡️ LGPD & FBB100 Correspondente
          </div>
          <div style={{ padding: '0.4rem 0.9rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--text-main)' }}>
            🎓 Bacharel em Administração (FURG)
          </div>
        </div>
      </div>
    </section>
  );
}
