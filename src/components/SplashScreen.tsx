import { useEffect, useState } from 'react';

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [splashVisible, setSplashVisible] = useState(true);
  // 0 = showing "Different", 1 = fading out, 2 = showing "Complete"
  const [wordState, setWordState] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    // Start fading out "Different" at 1.8s
    const t1 = setTimeout(() => setWordState(1), 1800);
    // Show "Complete" at 2.2s (after fade out)
    const t2 = setTimeout(() => setWordState(2), 2200);
    // Fade out whole splash at 3.8s
    const t3 = setTimeout(() => setSplashVisible(false), 3800);
    // Done at 4.5s
    const t4 = setTimeout(() => onDone(), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onDone]);

  const word = wordState === 2 ? 'Complete' : 'Different';
  const wordOpacity = wordState === 1 ? 0 : 1;

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
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .splash-row {
          animation: fadeSlideUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s both;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.5rem, 2vw, 1rem);
          flex-wrap: nowrap;
        }
        .splash-bar {
          animation: fadeSlideUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.5s both;
        }
        .splash-sub {
          animation: fadeSlideUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.65s both;
        }
        .splash-word-box {
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
        }
        .splash-word {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2rem, 8vw, 5.5rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #FF8C00;
          white-space: nowrap;
          transition: opacity 0.35s ease;
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

        {/* Word box — single element, just fades opacity */}
        <div className="splash-word-box">
          <span
            className="splash-word"
            style={{ opacity: wordOpacity }}
          >
            {word}
          </span>
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
