import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // COLOQUE SEU NÚMERO DO WHATSAPP AQUI (DDD + NÚMERO, ex: 5551999999999)
  const phoneNumber = '5551999999999';
  const defaultMessage = encodeURIComponent('Olá Cassiano! Vi seu portfólio e gostaria de conversar sobre um projeto.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        flexDirection: 'row-reverse'
      }}
    >
      {/* Botão Flutuante do WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: isHovered
            ? '0 6px 28px rgba(37, 211, 102, 0.7), 0 0 20px rgba(37, 211, 102, 0.4)'
            : '0 4px 18px rgba(37, 211, 102, 0.45)',
          transform: isHovered ? 'scale(1.1) translateY(-2px)' : 'scale(1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          textDecoration: 'none',
          position: 'relative'
        }}
      >
        {/* Efeito Onda de Pulso */}
        <span
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '2px solid rgba(37, 211, 102, 0.6)',
            animation: 'waPulseRing 2s infinite ease-out',
            pointerEvents: 'none'
          }}
        />

        {/* Ícone Oficial do WhatsApp SVG */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ fill: '#ffffff', stroke: 'none' }}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.93 0-3.816-.516-5.474-1.492l-.393-.231-4.068 1.066 1.085-3.967-.254-.404c-1.073-1.706-1.639-3.679-1.638-5.698 0-5.836 4.749-10.585 10.584-10.585 2.828 0 5.486 1.101 7.486 3.101 2.0 2.0 3.101 4.658 3.101 7.486 0 5.836-4.749 10.585-10.584 10.585" />
        </svg>
      </a>

      {/* Tooltip interativo on hover / visível */}
      <div
        style={{
          background: 'rgba(15, 23, 42, 0.92)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(37, 211, 102, 0.3)',
          color: '#ffffff',
          fontSize: '0.85rem',
          fontWeight: 500,
          fontFamily: "'Outfit', sans-serif",
          padding: '8px 14px',
          borderRadius: '20px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateX(0)' : 'translateX(10px)',
          pointerEvents: 'none',
          transition: 'all 0.3s ease',
          whiteSpace: 'nowrap'
        }}
      >
        💬 Falar no WhatsApp
      </div>

      {/* Estilos Globais de Animação para a Onda de Pulso */}
      <style>{`
        @keyframes waPulseRing {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.35);
            opacity: 0;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
