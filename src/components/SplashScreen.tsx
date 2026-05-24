import { useEffect, useState } from 'react';

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setSplashVisible(false), 4200);
    const t2 = setTimeout(() => onDone(), 4900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
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
      gap: '1.25rem',
      padding: '0 2rem',
      opacity: splashVisible ? 1 : 0,
      transition: 'opacity 0.7s ease',
      pointerEvents: splashVisible ? 'all' : 'none',
    }}>

      <style>{`
        @keyframes rowIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes barIn {
          from { opacity: 0; transform: scaleX(0); }
          to   { opacity: 1; transform: scaleX(1); }
        }
        @keyframes subIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* "Different" fades in, holds, then fades out */
        @keyframes wordDifferent {
          0%   { opacity: 0; }
          10%  { opacity: 1; }
          50%  { opacity: 1; }
          60%  { opacity: 0; }
          100% { opacity: 0; }
        }

        /* "Complete" fades in after Different fades out */
        @keyframes wordComplete {
          0%   { opacity: 0; }
          55%  { opacity: 0; }
          70%  { opacity: 1; }
          100% { opacity: 1; }
        }

        .splash-row {
          animation: rowIn 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.5rem, 2vw, 1rem);
          flex-wrap: nowrap;
        }
        .splash-bar {
          animation: barIn 0.6s cubic-bezier(0.16,1,0.3,1) 0.5s both;
          transform-origin: left;
        }
        .splash-sub {
          animation: subIn 0.6s ease 0.7s both;
        }
        .splash-word-box {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(255,140,0,0.1);
          border: 2px solid rgba(255,140,0,0.5);
          box-shadow: 0 0 32px rgba(255,140,0,0.2);
          padding: 0.1em 0.45em;
          min-width: clamp(190px, 40vw, 440px);
          height: clamp(58px, 12vw, 105px);
          overflow: hidden;
        }
        .splash-word {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2rem, 8vw, 5.5rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #FF8C00;
          white-space: nowrap;
        }
        .word-different {
          animation: wordDifferent 4s ease 0.3s both;
        }
        .word-complete {
          animation: wordComplete 4s ease 0.3s both;
        }
      `}</style>

      <div className="splash-row">
        {/* Static "Build" */}
        <span style={{
          fontFamily: 'var(--font-heading, sans-serif)',
          fontSize: 'clamp(2rem, 8vw, 5.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          color: '#fff',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          Build
        </span>

        {/* Word box — pure CSS animation, no React state swap */}
        <div className="splash-word-box">
          <span className="splash-word word-different">Different</span>
          <span className="splash-word word-complete">Complete</span>
        </div>
      </div>

      {/* Divider */}
      <div className="splash-bar" style={{
        width: 'clamp(50px, 10vw, 100px)',
        height: '2px',
        background: 'linear-gradient(90deg, #FF8C00, #00D4FF)',
        borderRadius: '2px',
      }} />

      {/* Tagline */}
      <div className="splash-sub" style={{
        fontFamily: 'var(--font-body, sans-serif)',
        fontSize: 'clamp(0.7rem, 1.8vw, 0.95rem)',
        fontWeight: 500,
        color: 'rgba(255,255,255,0.6)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        textAlign: 'center',
      }}>
        India's First Technical Marketing Company
      </div>

    </div>
  );
}
