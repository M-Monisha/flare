import { useEffect, useState } from 'react';

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out'>('in');
  const [word, setWord] = useState<'different' | 'complete'>('different');
  const [wordPhase, setWordPhase] = useState<'enter' | 'hold' | 'exit'>('enter');

  useEffect(() => {
    // Fade in splash
    const t1 = setTimeout(() => setPhase('hold'), 500);

    // "Different." enters at 0.5s, holds until 2s, then exits
    const t2 = setTimeout(() => setWordPhase('exit'), 2000);

    // Switch to "Complete." after exit animation (450ms)
    const t3 = setTimeout(() => {
      setWord('complete');
      setWordPhase('enter');
    }, 2500);

    // "Complete." holds, then start fading out whole splash at 4s
    const t4 = setTimeout(() => setPhase('out'), 4000);

    // Done — show website
    const t5 = setTimeout(() => onDone(), 4700);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      clearTimeout(t4); clearTimeout(t5);
    };
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
      transition: phase === 'out' ? 'opacity 0.7s ease' : phase === 'in' ? 'opacity 0.5s ease' : 'none',
      pointerEvents: phase === 'out' ? 'none' : 'all',
    }}>

      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideOutUp {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-40px); }
        }
        @keyframes slideInUp2 {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .splash-static {
          animation: slideInUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both;
        }
        .splash-sub {
          animation: slideInUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.8s both;
        }
        .splash-bar {
          animation: slideInUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.7s both;
        }
        .word-enter {
          animation: slideInUp2 0.55s cubic-bezier(0.16,1,0.3,1) both;
        }
        .word-exit {
          animation: slideOutUp 0.45s cubic-bezier(0.4,0,0.6,1) both;
        }
      `}</style>

      {/* Main headline row */}
      <div className="splash-static" style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(0.5rem, 2vw, 1rem)',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {/* Static "Build" */}
        <span style={{
          fontFamily: 'var(--font-heading, sans-serif)',
          fontSize: 'clamp(2.5rem, 9vw, 6.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          color: '#fff',
        }}>
          Build
        </span>

        {/* Animated word box */}
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRadius: '14px',
          background: 'rgba(255,140,0,0.12)',
          border: '2px solid rgba(255,140,0,0.55)',
          padding: '0.05em 0.35em',
          minWidth: 'clamp(220px, 45vw, 480px)',
          minHeight: 'clamp(60px, 12vw, 110px)',
          boxShadow: '0 0 40px rgba(255,140,0,0.25)',
        }}>
          <span
            key={word}
            className={wordPhase === 'exit' ? 'word-exit' : 'word-enter'}
            style={{
              fontFamily: 'var(--font-heading, sans-serif)',
              fontSize: 'clamp(2.5rem, 9vw, 6.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              color: '#FF8C00',
              display: 'inline-block',
            }}
          >
            {word === 'different' ? 'Different' : 'Complete'}
          </span>
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

      {/* Tagline */}
      <div className="splash-sub" style={{
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
