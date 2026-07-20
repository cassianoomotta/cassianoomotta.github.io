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

        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/curriculo.pdf" target="_blank" className="btn-primary">
            <FileDown size={18} />
            BAIXAR_CURRÍCULO.PDF
          </a>
          <a href="https://github.com/cassianoomotta" target="_blank" rel="noreferrer" className="btn-ai">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            GITHUB
          </a>
          <a href="https://linkedin.com/in/cassianoomotta" target="_blank" rel="noreferrer" className="btn-ai">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
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
