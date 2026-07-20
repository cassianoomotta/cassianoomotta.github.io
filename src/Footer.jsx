import { Terminal, Briefcase, Mail, FileDown } from 'lucide-react';
import './Projetos.css';

export default function Footer() {
  return (
    <footer id="contato" style={{ 
      borderTop: '1px solid rgba(255,255,255,0.05)', 
      padding: '4rem 0 2rem 0', 
      marginTop: '4rem',
      background: 'linear-gradient(to top, rgba(139, 92, 246, 0.05), transparent)',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="ai-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <h2 className="mono-text" style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>
          ESTABELECER_CONEXÃO
        </h2>
        
        <p style={{ color: 'var(--text-dim)', maxWidth: '500px', marginBottom: '2.5rem' }}>
          Pronto para orquestrar IA e resolver problemas de alta complexidade no seu próximo projeto. O sistema aguarda seu comando.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/curriculo.pdf" target="_blank" className="btn-primary">
            <FileDown size={18} />
            BAIXAR_CURRÍCULO.PDF
          </a>
          <a href="https://github.com/cassianoomotta" target="_blank" rel="noreferrer" className="btn-ai">
            <Terminal size={18} />
            GITHUB
          </a>
          <a href="https://linkedin.com/in/cassianoomotta" target="_blank" rel="noreferrer" className="btn-ai" style={{ borderColor: 'var(--ai-secondary)' }}>
            <Briefcase size={18} />
            LINKEDIN
          </a>
          <a href="mailto:cassianoomotta@gmail.com" className="btn-ai">
            <Mail size={18} />
            cassianoomotta@gmail.com
          </a>
        </div>

        <div style={{ marginTop: '4rem', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0.5, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
          <span className="mono-text" style={{ fontSize: '0.75rem' }}>© 2026 SYS.CASSIANO</span>
        </div>

      </div>
    </footer>
  );
}
