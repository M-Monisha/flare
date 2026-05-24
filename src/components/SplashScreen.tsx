import { useEffect, useState } from 'react';
import RotatingText from '@/components/ui/RotatingText';

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out'>('in');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 600);
    const t2 = setTimeout(() => setPhase('out'), 2400);
    const t3 = setTimeout(() => onDone(), 3100);
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
        .splash-line1 { animation: slideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
        .splash-line3 { animation: slideUp2 0.6s cubic-bezier(0.16,1,0.3,1) 0.7s both; }
        .splash-bar   { animation: slideUp2 0.5s cubic-bezier(0.16,1,0.3,1) 0.9s both; }
      `}</style>

      {/* Line 1 — "Built" + rotating box */}
      <div className="splash-line1" style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(0.5rem, 2vw, 1rem)',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {/* Static "Built" */}
        <span style={{
          fontFamily: 'var(--font-heading, sans-serif)',
          fontSize: 'clamp(2.5rem, 9vw, 6.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          color: '#fff',
        }}>
          Built
        </span>

        {/* Rotating box — "Different." / "Complete." */}
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          overflow: 'hidden',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, rgba(255,140,0,0.25), rgba(0,212,255,0.18))',
          border: '2px solid rgba(255,140,0,0.6)',
          padding: '0.05em 0.35em',
          boxShadow: '0 0 40px rgba(255,140,0,0.3), inset 0 0 20px rgba(0,212,255,0.08)',
        }}>
          <RotatingText
            texts={['Different.', 'Complete.']}
            mainClassName=""
            splitLevelClassName="overflow-hidden"
            elementLevelClassName=""
            staggerFrom="last"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            exit={{ y: '-110%' }}
            staggerDuration={0.03}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={1400}
            splitBy="characters"
            auto
            loop
            style={{
              fontFamily: 'var(--font-heading, sans-serif)',
              fontSize: 'clamp(2.5rem, 9vw, 6.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              color: '#FF8C00',
            }}
          />
        </span>
      </div>

      {/* Divider */}
      <div className="splash-bar" style={{
        width: 'clamp(60px, 12vw, 120px)',
        height: '2px',
        background: 'linear-gradient(90deg, #FF8C00, #00D4FF)',
        borderRadius: '2px',
        margin: '0.1rem 0',
      }} />

      {/* Line 2 */}
      <div className="splash-line3" style={{
        fontFamily: 'var(--font-body, sans-serif)',
        fontSize: 'clamp(0.8rem, 2.2vw, 1.1rem)',
        fontWeight: 500,
        color: 'rgba(255,255,255,0.65)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: '0 1rem',
      }}>
        India's First Technical Marketing Company
      </div>

    </div>
  );
}
