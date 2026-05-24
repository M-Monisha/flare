import { useEffect, useState } from 'react';

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [splashVisible, setSplashVisible] = useState(true);
  const [showComplete, setShowComplete] = useState(false);

  // "Different" fades in immediately, "Complete" cross-fades in at 2s
  // Whole splash fades out at 3.8s, done at 4.5s
  useEffect(() => {
    const t1 = setTimeout(() => setShowComplete(true), 2000);
    const t2 = setTimeout(() => setSplashVisible(false), 3800);
    const t3 = setTimeout(() => onDone(), 4500);
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
      opacity: splashVisible ? 1 : 0,
      transition: 'opacity 0.7s ease',
      pointerEvents: splashVisible ? 'all' : 'none',
    }}>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .splash-row {
          animation: fadeSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both;
        }
        .splash-bar {
          animation: fadeSlideUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.5s both;
        }
        .splash-sub {
          animation: fadeSlideUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.6s both;
        }
        .word-slot {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 14px;
          background: rgba(255,140,0,0.1);
          border: 2px solid rgba(255,140,0,0.5);
          padding: 0.05em 0.35em;
          min-width: clamp(220px, 45vw, 480px);
          min-height: clamp(60px, 12vw, 110px);
          box-shadow: 0 0 40px rgba(255,140,0,0.2);
        }
        .word-item {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2.5rem, 9vw, 6.5rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #FF8C00;
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .word-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .word-item.hidden-above {
          opacity: 0;
          transform: translateY(-30px);
          pointer-events: none;
        }
        .word-item.hidden-below {
          opacity: 0;
          transform: translateY(30px);
          pointer-events: none;
        }
      `}</style>

      {/* Main row: "Build" + word slot */}
      <div className="splash-row" style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(0.5rem, 2vw, 1rem)',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
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

        <div className="word-slot">
          {/* "Different" — visible first, fades out when showComplete */}
          <span className={`word-item ${!showComplete ? 'visible' : 'hidden-above'}`}>
            Different
          </span>
          {/* "Complete" — fades in when showComplete */}
          <span className={`word-item ${showComplete ? 'visible' : 'hidden-below'}`}>
            Complete
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="splash-bar" style={{
        width: 'clamp(60px, 12vw, 120px)',
        height: '2px',
        background: 'linear-gradient(90deg, #FF8C00, #00D4FF)',
        borderRadius: '2px',
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
