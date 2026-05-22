import { useEffect, useRef } from 'react';
import { CircularGallery } from '@/components/ui/circular-gallery-2';
import { CardStack } from '@/components/ui/card-stack';
import MagicBento from '@/components/ui/MagicBento';

interface AboutProps {
    openModal: () => void;
}

export default function About({ openModal }: AboutProps) {
    const sectionRef = useRef<HTMLElement>(null);

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
        <main ref={sectionRef} style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: '3rem', backgroundColor: 'var(--bg-base)' }}>

            {/* 1. HERO */}
            <section className="container" style={{ marginBottom: '3rem' }}>
                <div style={{ borderRadius: '24px', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.01)', padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1rem, 3vw, 2rem)', textAlign: 'center' }}
                    className="scroll-anim slide-up">
                    <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>About Us</h2>
                    <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', color: '#fff', margin: '0.5rem 0 1rem', lineHeight: 1.2 }}>
                        We Help Businesses <span style={{ color: '#FF8C00' }}>Work Smarter, Not Harder</span>
                    </h1>
                    <p style={{ maxWidth: '640px', margin: '0 auto', color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: 1.65 }}>
                        We build simple, powerful systems that save you time, reduce manual work, and keep your business running smoothly. No jargon — just technology that works for you.
                    </p>
                </div>
            </section>

            {/* 2. WHAT WE DO */}
            <section style={{ padding: '2.5rem 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="text-center scroll-anim slide-up" style={{ marginBottom: '1.5rem' }}>
                        <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>What We Do</h2>
                        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 800, color: '#fff', margin: '0.4rem 0 0.75rem' }}>We Simplify The Complex</h3>
                        <p style={{ maxWidth: '560px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                            We take the complicated tools your business uses and turn them into one smooth operation.
                        </p>
                    </div>
                    <div className="scroll-anim slide-up" style={{ height: 'clamp(240px, 40vw, 380px)', width: '100%', marginTop: '1.5rem' }}>
                        <CircularGallery
                            items={[
                                { text: 'We Save You Time', description: 'Stop wasting hours on repetitive tasks. We automate the boring stuff so you can focus on growth.', cardColor: '#F9A8D4' },
                                { text: 'Reduce Work', description: 'We eliminate the need for manual data entry and spreadsheets. Let systems handle the heavy lifting.', cardColor: '#B794F4' },
                                { text: 'Connect Systems', description: 'If you use different tools, we connect them so they talk to each other seamlessly.', cardColor: '#7DD3FC' },
                                { text: 'Ensure Scalability', description: 'As your business grows, your systems handle the increased load effortlessly.', cardColor: '#86EFAC' },
                                { text: 'One Central System', description: 'Your website, emails, messages, and payments all live under one roof. No more tab jumping.', cardColor: '#FDE68A' },
                                { text: 'We Handle The Tech', description: 'No IT degree needed. We handle the coding, hosting, and security so you can focus on customers.', cardColor: '#A5F3FC' },
                                { text: 'Simplified Operations', description: 'From the first visit to the final payment, we create a smooth, guided path that happens automatically.', cardColor: '#DDD6FE' },
                                { text: 'Uninterrupted Growth', description: 'Reliable infrastructure ensures your systems never become a bottleneck. Sleep easy while tech runs.', cardColor: '#FECACA' }
                            ]}
                            bend={3}
                            borderRadius={0.08}
                            scrollEase={0.03}
                        />
                    </div>
                </div>
            </section>

            {/* 3. THE PROBLEM */}
            <section style={{ padding: '2.5rem 0' }} className="container">
                <div className="scroll-anim slide-up text-center" style={{ marginBottom: '2rem' }}>
                    <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>The Problem</h2>
                    <h3 style={{ fontSize: 'clamp(1.25rem, 3.5vw, 2rem)', fontWeight: 800, color: '#fff', margin: '0.4rem auto 0.75rem', maxWidth: '700px', lineHeight: 1.2 }}>
                        Most businesses struggle because things are <span style={{ color: '#FF3B3B' }}>disconnected</span>.
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', lineHeight: 1.65, maxWidth: '620px', margin: '0 auto' }}>
                        You're paying for a website, an email tool, a CRM, and an agency — but they don't talk to each other, so you end up managing everything yourself.
                    </p>
                </div>
                <div className="scroll-anim slide-up flex justify-center">
                    <CardStack
                        items={[
                            { title: "Too Many Tools", description: "Managing passwords, payments, and settings across five different platforms is exhausting and kills focus.", color: "#FCA5A5" },
                            { title: "Manual Work Wasting Time", description: "Copy-pasting customer details from emails into your sales tracker takes away hours from your week.", color: "#FDBA74" },
                            { title: "Hiring Multiple Vendors", description: "Graphic designers, web developers, and marketing agencies rarely talk to each other, causing massive delays.", color: "#C4B5FD" }
                        ]}
                    />
                </div>
            </section>

            {/* 4. HOW WE WORK */}
            <section style={{ padding: '2.5rem 0' }} className="container">
                <div className="text-center scroll-anim slide-up" style={{ marginBottom: '1.5rem' }}>
                    <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>The Workflow</h2>
                    <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 800, color: '#fff', margin: '0.4rem 0 0.5rem' }}>How We Work</h3>
                    <p style={{ maxWidth: '500px', margin: '0 auto', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                        A systematic approach to transforming your digital architecture from messy to managed.
                    </p>
                </div>
                <div className="scroll-anim slide-up">
                    <MagicBento
                        textAutoHide={false}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        enableMagnetism={true}
                        clickEffect={true}
                        spotlightRadius={400}
                        particleCount={20}
                        glowColor="255, 140, 0"
                    />
                </div>
            </section>

            {/* 5. TEAM ORG CHART */}
            <section style={{ padding: '2.5rem 0', overflowX: 'hidden' }} className="container">
                <div className="text-center scroll-anim slide-up" style={{ marginBottom: '2rem' }}>
                    <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>Our Team</h2>
                    <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 800, color: '#fff', margin: '0.4rem 0 0.5rem' }}>The People Behind Flare</h3>
                    <p style={{ maxWidth: '480px', margin: '0 auto', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
                        One founder. Four service pillars. A growing team of specialists.
                    </p>
                </div>

                <style>{`
                    .org-chart { display: flex; flex-direction: column; align-items: center; gap: 0; overflow-x: auto; width: 100%; }
                    .org-node { display: flex; flex-direction: column; align-items: center; gap: 0.4rem; }
                    .org-circle {
                        width: 80px; height: 80px; border-radius: 50%;
                        background: rgba(255,140,0,0.08);
                        border: 2px solid rgba(255,140,0,0.35);
                        display: flex; align-items: center; justify-content: center;
                        position: relative;
                    }
                    .org-circle.ceo {
                        width: 100px; height: 100px;
                        background: rgba(255,140,0,0.12);
                        border-color: #FF8C00;
                        box-shadow: 0 0 32px rgba(255,140,0,0.3);
                    }
                    .org-circle.branch {
                        width: 72px; height: 72px;
                        border-color: rgba(0,212,255,0.4);
                        background: rgba(0,212,255,0.06);
                    }
                    .org-circle.leaf {
                        width: 60px; height: 60px;
                        border-color: rgba(255,255,255,0.15);
                        background: rgba(255,255,255,0.03);
                    }
                    .org-circle svg { opacity: 0.6; }
                    .org-label { font-family: var(--font-heading); font-size: 0.875rem; font-weight: 700; color: #fff; text-align: center; line-height: 1.3; }
                    .org-sub { font-family: var(--font-body); font-size: 0.75rem; color: rgba(255,255,255,0.4); text-align: center; }
                    .org-connector-v { width: 1px; height: 36px; background: rgba(255,255,255,0.12); }
                    .org-connector-h { height: 1px; background: rgba(255,255,255,0.12); }
                    .org-branches-row { display: flex; align-items: flex-start; justify-content: center; gap: 0; }
                    .org-branch-col { display: flex; flex-direction: column; align-items: center; }
                    .org-leaves-row { display: flex; align-items: flex-start; justify-content: center; gap: 1.5rem; margin-top: 0; }
                    .org-scroll-wrapper { overflow-x: auto; width: 100%; padding-bottom: 1.5rem; -webkit-overflow-scrolling: touch; display: flex; justify-content: center; }
                    @media (max-width: 768px) {
                        .org-scroll-wrapper { justify-content: flex-start; }
                        .org-circle.ceo { width: 72px; height: 72px; }
                        .org-circle.branch { width: 56px; height: 56px; }
                        .org-circle.leaf { width: 44px; height: 44px; }
                        .org-label { font-size: 0.7rem; }
                        .org-sub { font-size: 0.65rem; }
                    }
                `}</style>

                <div className="org-chart scroll-anim slide-up">

                    {/* CEO */}
                    <div className="org-node">
                        <div className="org-circle ceo">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <span className="org-label" style={{ color: '#FF8C00' }}>Founder & CEO</span>
                        <span className="org-sub">Flare Technologies</span>
                    </div>

                    {/* Vertical line down from CEO */}
                    <div className="org-connector-v" />

                    {/* Horizontally scrollable branches wrapper */}
                    <div className="org-scroll-wrapper">
                    <div style={{ display: 'flex', alignItems: 'flex-start', minWidth: '700px', justifyContent: 'center' }}>
                        {[
                            {
                                label: 'Automation', color: '#00D4FF',
                                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>,
                                members: ['Automation Lead', 'Systems Analyst']
                            },
                            {
                                label: 'Engineering', color: '#A855F7',
                                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
                                members: ['Lead Developer', 'UI/UX Designer']
                            },
                            {
                                label: 'Growth', color: '#10B981',
                                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
                                members: ['Marketing Lead', 'SEO Specialist']
                            },
                            {
                                label: 'Strategy', color: '#F59E0B',
                                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
                                members: ['Business Analyst', 'Client Success']
                            },
                        ].map((branch, bi) => (
                            <div key={bi} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                                {/* Top connector */}
                                <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.12)' }} />

                                {/* Branch node */}
                                <div className="org-node">
                                    <div className="org-circle branch" style={{ borderColor: `${branch.color}50`, background: `${branch.color}10` }}>
                                        {branch.icon}
                                    </div>
                                    <span className="org-label" style={{ color: branch.color }}>{branch.label}</span>
                                </div>

                                {/* Connector to leaves */}
                                <div style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.1)' }} />

                                {/* Horizontal bar */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                                    {branch.members.map((role, ri) => (
                                        <div key={ri} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            {/* Vertical drop */}
                                            <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.08)' }} />
                                            <div className="org-node">
                                                <div className="org-circle leaf">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                                </div>
                                                <span className="org-label" style={{ maxWidth: '80px', fontSize: '0.75rem' }}>{role}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </section>

            {/* 6. QUOTE */}
            <section style={{ padding: '1.5rem 0' }} className="container">
                <div className="scroll-anim slide-up" style={{ maxWidth: '680px', margin: '0 auto' }}>
                    <div style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: '16px',
                        padding: '1.5rem 1.75rem',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>Our Honest Belief</h3>
                        <p style={{ color: '#F9A8D4', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.625rem', fontWeight: 600 }}>
                            "We built Flare because we saw too many hardworking business owners struggling just to keep their systems afloat."
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.65, maxWidth: '560px', margin: '0 auto 1rem' }}>
                            "Technology should work for you, not the other way around. Our mission is to lift the burden of digital management off your shoulders."
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem' }}>
                            <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
                            <span style={{ color: '#F98D00', fontWeight: 800, fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Flare Technologies Core Values</span>
                            <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CTA */}
            <section style={{ padding: '2rem 0' }} className="container">
                <div className="scroll-anim slide-up" style={{
                    textAlign: 'center',
                    background: 'rgba(11,15,25,0.5)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    padding: 'clamp(2rem, 4vw, 3rem) 2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(16px)',
                }}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '80%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(255,140,0,0.07) 0%, transparent 60%)', zIndex: -1, pointerEvents: 'none' }} />
                    <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.875rem)', fontWeight: 800, color: '#FF8C00', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                        Let's Simplify Your Business
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', maxWidth: '480px', margin: '0 auto 1.75rem' }}>
                        Stop fighting with your technology. Chat with us to find out exactly how we can make your day-to-day operations easier.
                    </p>
                    <button onClick={openModal} className="btn btn-primary" style={{ backgroundColor: '#FF8C00', color: '#000', fontWeight: 800, border: 'none' }}>
                        Book Consultation
                    </button>
                </div>
            </section>
        </main>
    );
}
