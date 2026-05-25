import React, { useState, useEffect, useRef } from 'react';

/* ─── DATA ─────────────────────────────────────────────────────── */

const values = [
  { title: 'Client Obsession', desc: 'Every decision we make starts with one question: does this make our client more successful? We go beyond deliverables.' },
  { title: 'Builder Mentality', desc: 'We are not order-takers. We think, design, build, and improve. If something can be better, we make it better.' },
  { title: 'Radical Honesty', desc: 'We say what we mean. Internally and with clients. No sugarcoating, no politics. Just clear, respectful truth.' },
  { title: 'Grow or Stagnate', desc: 'Comfort zones are where careers go to die. We push ourselves to learn new skills, take on harder problems, and level up constantly.' },
  { title: 'One Team', desc: 'No silos, no blame games. We win together and we solve problems together. Your success is the team success.' },
  { title: 'Quality is Non-Negotiable', desc: 'We do not ship mediocre work. Ever. We take pride in the craft, whether it is a pixel, a line of code, or a campaign.' },
];

const testimonials = [
  { quote: 'Design at Flare is not just about making things look good. It is about making them work. I finally understood what designing for real users actually means.', role: 'UI/UX Design Intern' },
  { quote: 'I joined to learn digital marketing. I ended up understanding tech, automation, and how businesses actually grow. That kind of exposure you don\'t get anywhere else.', role: 'Marketing Intern' },
];

const perks = [
  { icon: (<svg width='26' height='26' viewBox='0 0 24 24' fill='none' stroke='#00D4FF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M22 12h-4l-3 9L9 3l-3 9H2'/></svg>), title: 'Real Work, Real Impact', desc: 'Every project you touch goes live and reaches real users. No dummy tasks, no busywork. Your contributions matter from day one.' },
  { icon: (<svg width='26' height='26' viewBox='0 0 24 24' fill='none' stroke='#00D4FF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'/><path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'/></svg>), title: 'Learn Constantly', desc: 'Access to courses, tools, and mentorship. We invest in your growth because a sharper team builds better products.' },
  { icon: (<svg width='26' height='26' viewBox='0 0 24 24' fill='none' stroke='#00D4FF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><rect x='2' y='3' width='20' height='14' rx='2' ry='2'/><path d='M8 21h8m-4-4v4'/></svg>), title: 'Flexible Work', desc: 'We care about output, not hours logged. Work in a way that lets you do your best thinking and your best work.' },
  { icon: (<svg width='26' height='26' viewBox='0 0 24 24' fill='none' stroke='#00D4FF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'/><circle cx='9' cy='7' r='4'/><path d='M23 21v-2a4 4 0 0 0-3-3.87'/><path d='M16 3.13a4 4 0 0 1 0 7.75'/></svg>), title: 'Flat Hierarchy', desc: 'You can walk up to anyone, including the founders, with an idea or a concern. No gatekeepers, no politics.' },
];

interface JobRole {
  title: string;
  type: string;
  color: string;
  about: string;
  responsibilities: string[];
  looking: string[];
}

const jobRoles: JobRole[] = [
  {
    title: 'Web Developer Intern',
    type: 'Internship · Remote · 3–6 Months',
    color: '#00D4FF',
    about: 'Build real products for real clients. We\'re looking for someone who understands the web and knows how to use AI tools to ship faster without losing quality.',
    responsibilities: [
      'Build responsive websites and web apps for live client projects',
      'Translate designs into functional, clean code',
      'Use AI coding tools (Copilot, Cursor, v0) to work smarter',
      'Participate in reviews, iterations, and client delivery',
      'Work with Git for version control and collaborative development',
      'Read and build from Figma designs with precision',
    ],
    looking: [
      'Detail-oriented, ownership-driven mindset',
      'Comfortable using AI tools in your development workflow',
      'Someone who learns fast and takes initiative',
      'Eye for detail — you notice when something looks or feels off',
    ],
  },
  {
    title: 'AI Developer Intern',
    type: 'Internship · Remote · 3–6 Months',
    color: '#A855F7',
    about: 'We build AI into everything — automations, chatbots, intelligent workflows. We need someone who can take a real business problem and actually build an AI solution for it. Fast.',
    responsibilities: [
      'Build AI-powered features using LLM APIs (OpenAI, Anthropic, Gemini)',
      'Create automations and workflows using n8n, Make, or LangChain',
      'Design and implement prompt-driven features for client products',
      'Integrate third-party APIs to connect AI features with real product workflows',
      'Work with vector databases (Pinecone, ChromaDB) for knowledge-based apps',
      'Explore and recommend the right AI tools for the right problems',
    ],
    looking: [
      'Hands-on experience with at least one LLM API',
      'Good understanding of prompt engineering',
      'Experimental mindset — you try, break, and figure out fast',
      'Ability to evaluate AI tools quickly and decide what to build vs. use off the shelf',
    ],
  },
  {
    title: 'Graphic Designer Intern',
    type: 'Internship · Remote · 3–6 Months',
    color: '#F59E0B',
    about: 'Design here is not decoration — it\'s communication. We need a designer who thinks strategically, executes beautifully, and uses AI tools to move at the speed the market demands.',
    responsibilities: [
      'Design social creatives, brand assets, and marketing materials for real clients',
      'Create UI mockups and visual concepts for web and app projects',
      'Use AI tools (Firefly, Midjourney, Canva AI) to accelerate ideation',
      'Collaborate with dev and marketing teams to ensure visual consistency',
    ],
    looking: [
      'Strong design fundamentals — typography, colour, layout, hierarchy',
      'Figma proficiency — non-negotiable',
      'Portfolio showing range across branding, social, and digital',
      'Comfortable giving and receiving direct design feedback',
    ],
  },
  {
    title: 'Social Media Intern',
    type: 'Internship · Remote · 3–6 Months',
    color: '#10B981',
    about: 'We\'re not looking for someone who just posts — we\'re looking for someone who thinks strategically about content. You understand platforms, algorithms, and how to use AI tools to create better content faster.',
    responsibilities: [
      'Plan and execute content calendars across Instagram, LinkedIn, and X',
      'Write captions, hooks, and CTAs that actually perform',
      'Use AI tools (ChatGPT, Canva AI, CapCut) to speed up creation',
      'Track metrics and refine strategy based on performance',
    ],
    looking: [
      'Strong writing and storytelling instincts',
      'Platform-native thinking — you know what works and why',
      'Comfortable using AI tools for ideation and content production',
      'Data-aware — you look at numbers and ask why',
    ],
  },
];

/* ─── SPOTLIGHT ─────────────────────────────────────────────────── */
const PageSpotlight: React.FC<{ containerRef: React.RefObject<HTMLDivElement | null>; cardClass: string }> = ({ containerRef, cardClass }) => {
  useEffect(() => {
    const spotlight = document.createElement('div');
    spotlight.style.cssText = [
      'position:fixed', 'width:600px', 'height:600px', 'border-radius:50%', 'pointer-events:none',
      'background:radial-gradient(circle,rgba(255,140,0,0.10) 0%,rgba(255,140,0,0.05) 25%,transparent 60%)',
      'z-index:9998', 'opacity:0', 'transform:translate(-50%,-50%)', 'mix-blend-mode:screen', 'transition:opacity 0.3s ease'
    ].join(';');
    document.body.appendChild(spotlight);

    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
      spotlight.style.opacity = inside ? '1' : '0';
      spotlight.style.left = e.clientX + 'px';
      spotlight.style.top = e.clientY + 'px';
      containerRef.current?.querySelectorAll<HTMLElement>('.' + cardClass).forEach(card => {
        const cr = card.getBoundingClientRect();
        const cx = cr.left + cr.width / 2;
        const cy = cr.top + cr.height / 2;
        const dist = Math.max(0, Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(cr.width, cr.height) / 2);
        const proximity = 160, fade = 300;
        const intensity = dist <= proximity ? 1 : dist <= fade ? (fade - dist) / (fade - proximity) : 0;
        card.style.setProperty('--glow-x', ((e.clientX - cr.left) / cr.width * 100) + '%');
        card.style.setProperty('--glow-y', ((e.clientY - cr.top) / cr.height * 100) + '%');
        card.style.setProperty('--glow-i', intensity.toString());
      });
    };
    const onLeave = () => { spotlight.style.opacity = '0'; };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      spotlight.parentNode?.removeChild(spotlight);
    };
  }, [containerRef, cardClass]);
  return null;
};

/* ─── JOB CARD COMPONENT ────────────────────────────────────────── */
const JobCard: React.FC<{ job: JobRole; onApply: (_title: string) => void }> = ({ job }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="jd-card" style={{ '--accent': job.color } as React.CSSProperties}
      onMouseEnter={e => (e.currentTarget.style.borderColor = `${job.color}40`)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
    >
      {/* Top accent bar removed */}

      <div className="jd-card-header" onClick={() => setOpen(!open)}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: '#fff', margin: '0 0 0.25rem' }}>{job.title}</h3>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.03em' }}>{job.type}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ transition: 'transform 0.25s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}>
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>

      {open && (
        <div className="jd-card-body">
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, margin: '1rem 0 0' }}>{job.about}</p>
          <p className="jd-section-label">What You'll Do</p>
          <ul className="jd-list">
            {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
          <p className="jd-section-label">What We're Looking For</p>
          <ul className="jd-list">
            {job.looking.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

/* ─── MAIN COMPONENT ────────────────────────────────────────────── */
const Careers: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    pageRef.current?.querySelectorAll('.scroll-anim').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleApply = (roleName: string) => {
    window.location.href = `mailto:consult@flaretechnologies.in?subject=Application - ${encodeURIComponent(roleName)}`;
  };

  const scrollToRoles = () => {
    document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main
      ref={pageRef}
      style={{ background: 'var(--bg-base)', paddingTop: 'clamp(5rem, 10vw, 7rem)', paddingBottom: '4rem', overflowX: 'hidden' }}
    >
      <PageSpotlight containerRef={pageRef} cardClass='careers-glow-card' />

      <style>{`
        .careers-glow-card {
          position: relative;
          background: #120F17;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          overflow: hidden;
          --glow-x: 50%;
          --glow-y: 50%;
          --glow-i: 0;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .careers-glow-card::after {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: inherit;
          background: radial-gradient(
            380px circle at var(--glow-x) var(--glow-y),
            rgba(255,140,0, calc(var(--glow-i) * 0.85)) 0%,
            rgba(255,140,0, calc(var(--glow-i) * 0.35)) 35%,
            transparent 60%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
          z-index: 1;
        }
        .careers-glow-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px -8px rgba(255,140,0,0.18);
        }
        .hww-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #FF8C00, rgba(255,140,0,0.2));
          border-radius: 20px 20px 0 0;
        }
        .filter-tab {
          padding: 0.45rem 1.1rem;
          border-radius: 99px;
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.12);
          background: transparent;
          color: rgba(255,255,255,0.55);
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .filter-tab:hover { border-color: rgba(255,140,0,0.4); color: #fff; }
        .filter-tab.active { background: rgba(255,140,0,0.15); border-color: rgba(255,140,0,0.6); color: #FF8C00; }
        .badge-orange {
          display: inline-flex; align-items: center;
          padding: 0.2rem 0.65rem; border-radius: 99px;
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.04em;
          background: rgba(255,140,0,0.12); border: 1px solid rgba(255,140,0,0.35); color: #FF8C00;
        }
        .badge-cyan {
          display: inline-flex; align-items: center;
          padding: 0.2rem 0.65rem; border-radius: 99px;
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.04em;
          background: rgba(0,212,255,0.10); border: 1px solid rgba(0,212,255,0.3); color: #00D4FF;
        }
        .btn-apply {
          display: inline-flex; align-items: center; gap: 0.35rem;
          padding: 0.4rem 1rem; border-radius: 8px;
          font-family: var(--font-body); font-size: 0.8rem; font-weight: 600;
          cursor: pointer; background: transparent;
          border: 1px solid rgba(255,140,0,0.5); color: #FF8C00;
          transition: all 0.2s ease; text-decoration: none;
        }
        .btn-apply:hover { background: rgba(255,140,0,0.12); border-color: #FF8C00; }
        .testimonial-card { border-left: 3px solid #FF8C00; padding-left: 1.25rem; }
        .hero-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -60%);
          width: 700px; height: 700px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,140,0,0.12) 0%, rgba(255,140,0,0.04) 40%, transparent 70%);
          pointer-events: none; z-index: 0;
        }
        .filter-tabs-scroll { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        @media (max-width: 640px) {
          .filter-tabs-scroll { overflow-x: auto; flex-wrap: nowrap; padding-bottom: 0.5rem; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
          .filter-tabs-scroll::-webkit-scrollbar { display: none; }
        }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        @media (max-width: 900px) { .grid-3 { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .grid-3, .grid-2 { grid-template-columns: 1fr; } }
        .why-flare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
        @media (max-width: 768px) { .why-flare-grid { grid-template-columns: 1fr; gap: 2rem; } }
        .roles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        @media (max-width: 900px) { .roles-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px) { .roles-grid { grid-template-columns: 1fr; } }
        .perks-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        @media (max-width: 900px) { .perks-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px) { .perks-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden', paddingBottom: '5rem' }}>
        <div className="hero-glow" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="scroll-anim slide-up">
            <span className="section-badge">We Are Hiring</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.25rem', marginTop: '0.75rem', maxWidth: '780px', margin: '0.75rem auto 1.25rem' }}>
              India's First Technical Marketing Powerhouse{' '}
              <span style={{ color: '#FF8C00' }}>is Being Built Here.</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: '580px', margin: '0 auto 2.5rem' }}>
              We're assembling the sharpest minds in tech, design, and growth — people who don't just execute, they engineer outcomes. If you're done playing small, this is where you belong.
            </p>
            <button
              onClick={scrollToRoles}
              className="btn btn-primary btn-large"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Browse Open Roles
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY FLARE ────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: '#0a0f1e' }}>
        <div className="container">
          <div className="scroll-anim slide-up" style={{ marginBottom: '1rem' }}>
            <span className="section-badge">Why Flare</span>
          </div>
          <div className="why-flare-grid scroll-anim slide-up">
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Most agencies ship and forget. We don't.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
                At Flare, every project is a long-term relationship. We build systems that grow with our clients, and we build teams that grow with each other. We are not chasing headcount or vanity metrics. We are building something we are genuinely proud of, and we want people who feel the same way.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginTop: '1rem' }}>
                If you have ever felt like your talent was being wasted, your ideas were being ignored, or your work was just filling a quota, Flare is the antidote to that.
              </p>
            </div>
            <div style={{ borderLeft: '3px solid #FF8C00', paddingLeft: '1.75rem', paddingTop: '0.5rem' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', color: '#fff', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                "We started Flare because we wanted to build a team that genuinely loves what they do. Not a team that shows up for a paycheck, but a team that shows up because they care about the craft, the clients, and each other. That is still the standard we hold ourselves to every single day."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,140,0,0.15)', border: '1px solid rgba(255,140,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 700, color: '#FF8C00', margin: 0 }}>Founder Name</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', margin: 0 }}>Founder & CEO, Flare Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: HOW WE WORK ──────────────────────────────────────── */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div className="text-center scroll-anim slide-up" style={{ marginBottom: '2rem' }}>
            <span className="section-badge">How We Work</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginTop: '0.4rem' }}>
              The Way We Operate
            </h2>
          </div>
          <div className="grid-3 scroll-anim slide-up">
            {[
              {
                title: 'No Bureaucracy',
                desc: 'Good ideas win here, not job titles. If you have a better way, say it.',
                img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=70&auto=format&fit=crop',
                icon: (<svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#FF8C00' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><circle cx='12' cy='12' r='10'/><path d='M8 12l2 2 4-4'/></svg>),
              },
              {
                title: 'Ship Fast, Learn Faster',
                desc: 'We move with urgency. We ship, measure, learn, and iterate. Speed and quality are not opposites.',
                img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=70&auto=format&fit=crop',
                icon: (<svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#FF8C00' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M13 2L3 14h9l-1 8 10-12h-9l1-8z'/></svg>),
              },
              {
                title: 'You Own Your Work',
                desc: 'Full ownership from day one. No micromanaging, no hand-holding — just trust.',
                img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=70&auto=format&fit=crop',
                icon: (<svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#FF8C00' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/></svg>),
              },
            ].map((item, i) => (
              <div key={i} className="careers-glow-card" style={{
                padding: 0,
                overflow: 'hidden',
                minHeight: '220px',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* Background image with overlay */}
                <div style={{
                  position: 'relative',
                  height: '180px',
                  flexShrink: 0,
                  overflow: 'hidden',
                }}>
                  <img
                    src={item.img}
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
                    loading="lazy"
                  />
                  {/* Dark gradient overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, rgba(18,15,23,0.35) 0%, rgba(18,15,23,0.85) 100%)',
                  }} />
                </div>
                {/* Text content */}
                <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHAT WE VALUE ────────────────────────────────────── */}
      <section className="section-padding" style={{ background: '#0a0f1e' }}>
        <div className="container">
          <div className="section-header text-center scroll-anim slide-up">
            <span className="section-badge">Our Values</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
              What We Value
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'rgba(255,255,255,0.55)', maxWidth: '560px', margin: '1rem auto 0', lineHeight: 1.7 }}>
              These are not posters on a wall. They are the principles we actually use to make decisions every day.
            </p>
          </div>
          <div className="grid-3 scroll-anim slide-up">
            {values.map((v, i) => (
              <div key={i} className="careers-glow-card" style={{ padding: '1.75rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF8C00', marginBottom: '1rem', boxShadow: '0 0 8px rgba(255,140,0,0.5)' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.0625rem', fontWeight: 700, color: '#fff', marginBottom: '0.625rem' }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY JOIN US ──────────────────────────────────────── */}
      <section style={{ padding: '2.5rem 0', background: '#0a0f1e' }}>
        <div className="container">
          <div className="text-center scroll-anim slide-up" style={{ marginBottom: '1.75rem' }}>
            <span className="section-badge">Benefits</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginTop: '0.4rem' }}>
              Why Join Us
            </h2>
          </div>

          <div className="scroll-anim slide-up" style={{
            maxWidth: '720px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}>
            {perks.map((p, i) => (
              <div key={i} style={{
                background: '#0a0f1e',
                padding: '1.5rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
              }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', fontWeight: 800, color: '#00D4FF', opacity: 0.6, letterSpacing: '0.08em' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9375rem', fontWeight: 700, color: '#fff' }}>
                  {p.title}
                </span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>
                  {p.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: INTERNSHIP ROLES ─────────────────────────────────── */}
      <section id="open-roles" style={{ padding: '2.5rem 0', background: '#0a0f1e' }}>
        <div className="container">
          <div className="scroll-anim slide-up" style={{ marginBottom: '1.5rem' }}>
            <span className="section-badge">Internships & Entry Level</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginTop: '0.4rem' }}>
              Open Internship Roles
            </h2>
          </div>

          {/* JD Cards */}
          <style>{`
            .jd-card {
              position: relative;
              background: #120F17;
              border: 1px solid rgba(255,255,255,0.07);
              border-radius: 16px;
              overflow: hidden;
              transition: border-color 0.25s ease, box-shadow 0.25s ease;
            }
            .jd-card:hover { box-shadow: 0 8px 32px -8px rgba(0,0,0,0.5); }
            .jd-card-header {
              display: flex; align-items: center; justify-content: space-between;
              gap: 1rem; padding: 1.25rem 1.5rem;
              cursor: pointer; flex-wrap: wrap;
            }
            .jd-card-body {
              padding: 0 1.5rem 1.25rem;
              border-top: 1px solid rgba(255,255,255,0.06);
            }
            .jd-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.4rem; }
            .jd-list li { display: flex; align-items: flex-start; gap: 0.5rem; font-family: var(--font-body); font-size: 0.85rem; color: rgba(255,255,255,0.6); line-height: 1.55; }
            .jd-list li::before { content: '→'; color: var(--accent); flex-shrink: 0; font-weight: 700; margin-top: 1px; }
            .jd-section-label { font-family: var(--font-body); font-size: 0.65rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.35); margin: 1rem 0 0.5rem; }
          `}</style>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 460px), 1fr))', gap: '1rem' }} className="scroll-anim slide-up">
            {jobRoles.map((job, i) => (
              <JobCard key={i} job={job} onApply={handleApply} />
            ))}
          </div>

          {/* Email CTA below cards */}
          <div className="scroll-anim slide-up" style={{
            marginTop: '2rem',
            textAlign: 'center',
            padding: '1.25rem 1.5rem',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
              Interested? Send your resume to{' '}
              <a
                href="mailto:marketing@flaretechnologies.in"
                style={{ color: '#FF8C00', fontWeight: 700, textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
              >
                marketing@flaretechnologies.in
              </a>
              {' '}with the role name in the subject line.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: DON'T SEE YOUR ROLE ─────────────────────────────── */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <div className="scroll-anim slide-up" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '2rem', flexWrap: 'wrap',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px', padding: '1.5rem 2rem',
          }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <span className="section-badge" style={{ marginBottom: '0.4rem', display: 'inline-block' }}>Open Application</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontWeight: 800, color: '#fff', margin: '0.25rem 0 0.4rem' }}>
                Don't See a Role That Fits?
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0, maxWidth: '480px' }}>
                We hire for attitude as much as skill. Drop your resume and tell us what you'd build at Flare.
              </p>
            </div>
            <a
              href="mailto:consult@flaretechnologies.in?subject=Open Application"
              className="btn btn-primary"
              style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              Drop Your Resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── TEAM STORIES ────────────────────────────────────────────────── */}
      <section style={{ padding: '2.5rem 0' }}>
        <div className="container">
          <div className="text-center scroll-anim slide-up" style={{ marginBottom: '1.5rem' }}>
            <span className="section-badge">Team Stories</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginTop: '0.4rem' }}>
              Hear From the Team
            </h2>
          </div>
          <div className="grid-2 scroll-anim slide-up">
            {testimonials.map((t, i) => (
              <div key={i} className="careers-glow-card" style={{ padding: '1.25rem 1.5rem' }}>
                <div className="testimonial-card">
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '1rem' }}>
                    "{t.quote}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255,140,0,0.12)', border: '1px solid rgba(255,140,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.775rem', fontWeight: 600, color: '#FF8C00' }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FOOTER STRIP ────────────────────────────────────── */}
      <section style={{ background: '#0a0f1e', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', margin: 0 }}>
              Flare Technologies is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* LinkedIn */}
              <a href="https://linkedin.com/company/flaretechnologies" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#fff')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/flaretechnologies" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#fff')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* Twitter/X */}
              <a href="https://twitter.com/flaretechnologies" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#fff')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Careers;
