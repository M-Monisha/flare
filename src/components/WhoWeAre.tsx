import React, { useEffect, useRef } from 'react';

const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '4+',   label: 'Countries Served' },
  { value: '18+',  label: 'Industries Served' },
];

const WhoWeAre: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      sectionRef.current.querySelectorAll('.scroll-anim').forEach(el => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#0a0f1e',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(3rem, 6vw, 5rem) 0',
      }}
    >
      <div className="container">
        <div
          className="scroll-anim slide-up"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left: badge + headline + body + stats */}
          <div>
            <span className="section-badge">Who We Are</span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              margin: '0.5rem 0 0.5rem',
            }}>
              More than an agency.{' '}
              <span style={{ color: '#FF8C00' }}>Your growth engineering partner.</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.75,
              margin: '1rem 0 2rem',
              maxWidth: '560px',
            }}>
              Built for the modern business, Flare Technologies connects the dots between technology, automation, and marketing — so your business doesn't have to manage three vendors to do one job. We are a team of developers, designers, and growth strategists committed to one goal: building systems that help businesses save time, reach more customers, and grow faster.
            </p>

            {/* Stats row */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    flex: '1 1 120px',
                    padding: '1.5rem 1.25rem',
                    borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    fontWeight: 900,
                    color: '#FF8C00',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}>
                    {stat.value}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    color: 'rgba(255,255,255,0.45)',
                    fontWeight: 500,
                  }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            aspectRatio: '4/3',
            boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
              alt="Flare Technologies team collaborating"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
              loading="lazy"
            />
            {/* Dark overlay for depth */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(6,11,23,0.35) 0%, rgba(6,11,23,0.1) 100%)',
            }} />
            {/* Orange accent corner */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #FF8C00, #00D4FF)',
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
