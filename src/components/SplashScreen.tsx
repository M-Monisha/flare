import { useEffect, useState } from 'react';

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out'>('in');

  useEffect(() => {
    // Fade in → hold → fade out
    const t1 = setTimeout(() => setPhase('hold'), 600);
    const t2 = setTimeout(() => setPhase('out'), 2200);
    const t3 = setTimeout(() => onDone(), 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      background: '#060b17',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      opacity: phase === 'out' ? 0 : 1,
      transition: phase === 'out' ? 'opacity 0.7s ease' : phase === 'in' ? 'opacity 0.6s ease' : 'none',
      pointerEvents: phase === 'out' ? 'none' : 'all',
    }}>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp2 {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .splash-line1 {
          animation: slideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both;
        }
        .splash-line2 {
          animation: slideUp2 0.7s cubic-bezier(0.16,1,0.3,1) 0.55s both;
        }
        .splash-line3 {
          animation: slideUp2 0.6s cubic-bezier(0.16,1,0.3,1) 0.85s both;
        }
        .splash-bar {
          animation: slideUp2 0.5s cubic-bezier(0.16,1,0.3,1) 1.1s both;
        }
      `}</style>

      {/* Line 1 — Built Different. Built Complete. */}
      <div className="splash-line1" style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 'clamp(0.5rem, 2vw, 1.25rem)',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <span style={{
          fontFamily: 'var(--font-heading, sans-serif)',
          fontSize: 'clamp(2.5rem, 9vw, 6.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          color: '#FF8C00',
        }}>
          Built Different.
        </span>
        <span style={{
          fontFamily: 'var(--font-heading, sans-serif)',
          fontSize: 'clamp(2.5rem, 9vw, 6.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          color: '#00D4FF',
        }}>
          Built Complete.
        </span>
      </div>

      {/* Thin divider bar */}
      <div className="splash-bar" style={{
        width: 'clamp(60px, 12vw, 120px)',
        height: '2px',
        background: 'linear-gradient(90deg, #FF8C00, #00D4FF)',
        borderRadius: '2px',
        margin: '0.25rem 0',
      }} />

      {/* Line 2 — India's First Technical Marketing Company */}
      <div className="splash-line3" style={{
        fontFamily: 'var(--font-body, sans-serif)',
        fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)',
        fontWeight: 500,
        color: 'rgba(255,255,255,0.75)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: '0 1rem',
      }}>
        India's First Technical Marketing Company
      </div>

    </div>
  );
}
