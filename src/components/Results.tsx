import React, { useEffect, useRef } from 'react';
import CountUp from './ui/CountUp';
import { GradientCard } from './ui/gradient-card';

interface ResultsProps {
    openModal?: () => void;
}

const Results: React.FC<ResultsProps> = ({ openModal }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
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
        <section id="results" ref={sectionRef} style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: 'var(--bg-base)' }}>
            <style>
                {`
                .scroll-anim {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                }
                .scroll-anim.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .slide-up.visible {
                    animation: slideUpFade 0.8s forwards;
                }
                @keyframes slideUpFade {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .results-grid-new {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    margin-top: 4rem;
                }
                @media (max-width: 1024px) {
                    .results-grid-new { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
                }
                @media (max-width: 640px) {
                    .results-grid-new { grid-template-columns: 1fr; gap: 1.5rem; }
                }
                .result-premium-card {
                    background: #121620;
                    border: 1px solid var(--border-subtle);
                    border-radius: 24px;
                    padding: 3rem 2.5rem;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
                    display: flex;
                    flex-direction: column;
                }
                .result-premium-card:hover {
                    transform: translateY(-10px);
                    border-color: rgba(255, 255, 255, 0.18);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.03);
                }
                .r-pill-tag {
                    display: inline-flex;
                    align-items: center;
                    padding: 0.35rem 1rem;
                    border-radius: 100px;
                    border: 1px solid rgba(255, 140, 0, 0.3);
                    background: rgba(255, 140, 0, 0.05);
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: #FF8C00;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 2rem;
                    align-self: flex-start;
                }
                .r-metric-display {
                    font-size: 4rem;
                    font-weight: 800;
                    line-height: 1;
                    margin-bottom: 0.5rem;
                    color: #B794F4;
                }
                .highlight-gradient {
                    background: none;
                    -webkit-text-fill-color: initial;
                }
                .r-metric-label {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 0.25rem;
                }
                .r-impact-summary {
                    font-size: 1rem;
                    color: #8A9BB3; /* Slightly brighter than text-secondary */
                    font-style: italic;
                    margin-bottom: 2.5rem;
                    line-height: 1.6;
                }
                .r-structure-box {
                    margin-bottom: 2rem;
                    padding-bottom: 2rem;
                    border-bottom: 1px solid var(--border-subtle);
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .r-text-block {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                }
                .r-text-block strong {
                    color: var(--text-primary);
                    font-weight: 700;
                    margin-right: 0.5rem;
                }
                .r-bullet-list {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 2.5rem 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    flex-grow: 1;
                }
                .r-bullet-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    font-size: 0.95rem;
                    color: var(--text-primary);
                    font-weight: 500;
                }
                .r-bullet-check {
                    color: #00D4FF;
                    font-weight: bold;
                }
                .r-view-link {
                    color: #FF8C00;
                    font-weight: 700;
                    font-size: 0.95rem;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: color 0.2s;
                    margin-top: auto;
                }
                .r-view-link:hover {
                    color: #FFA333;
                }
                .global-stats-bar {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                    padding: 3rem 0;
                    margin-bottom: 6rem;
                    border-bottom: 1px solid var(--border-subtle);
                    text-align: center;
                }
                .stat-item h4 {
                    font-size: 3rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin-bottom: 0.5rem;
                    line-height: 1;
                }
                .stat-item p {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    font-weight: 500;
                }
                `}
            </style>

            <div className="container">
                {/* 8. TOP SUMMARY SECTION (GLOBAL STATS) */}
                <div className="global-stats-bar scroll-anim">
                    <div className="stat-item">
                        <h4 style={{ color: '#B794F4' }}><CountUp target={100} suffix="+" /></h4>
                        <p>Hours Saved Weekly</p>
                    </div>
                    <div className="stat-item">
                        <h4 style={{ color: '#B794F4' }}><CountUp target={300} suffix="%" /></h4>
                        <p>Avg Growth Increase</p>
                    </div>
                    <div className="stat-item">
                        <h4 style={{ color: '#B794F4' }}><CountUp target={0} /></h4>
                        <p>Downtime Deployments</p>
                    </div>
                </div>

                {/* HEADER SECTION */}
                <div className="section-header text-center scroll-anim slide-up">
                    <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>Outcomes</h2>
                    <h3 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#F9A8D4', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                        Real Results for Real Businesses
                    </h3>
                    {/* 9. TRUST LINE */}
                    <p className="mx-auto" style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 600, maxWidth: '700px', marginBottom: '0.75rem' }}>
                        Real businesses. Measurable outcomes. No guesswork.
                    </p>
                    <p className="section-desc mx-auto" style={{ maxWidth: '600px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        Here is exactly what happened when businesses partnered with us. We deliver proof, not promises. The numbers speak for themselves.
                    </p>
                </div>

                {/* CARDS SECTION (3 COLUMNS) */}
                <div className="results-grid-new scroll-anim slide-up">
                    
                    {/* CASE STUDY 1: E-COMMERCE */}
                    <GradientCard
                        gradient="lavender"
                        badgeText="E-Commerce"
                        badgeColor="#F9A8D4"
                        title="300%"
                        description="Revenue Growth in Q1"
                        ctaText="View Full Case Study"
                        ctaHref="#"
                        imageUrl="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop"
                    >
                        <p className="mb-6 opacity-60 text-sm font-medium italic">"Handled 10,000+ concurrent users without crashes"</p>
                        
                        <div className="space-y-4 mb-8 border-y border-white/5 py-6">
                            <div className="text-sm"><strong className="text-[#F9A8D4] block mb-1 uppercase tracking-widest text-[0.7rem]">The Bottleneck:</strong> Existing infrastructure suffered from critical instability during peak traffic, resulting in massive revenue erosion.</div>
                            <div className="text-sm"><strong className="text-[#F9A8D4] block mb-1 uppercase tracking-widest text-[0.7rem]">The Breakthrough:</strong> Engineered a high-performance, elastic cloud architecture coupled with an aggressive acquisition engine.</div>
                        </div>

                        <ul className="space-y-3 text-sm font-bold">
                            <li className="flex items-center gap-3"><span className="text-[#10B981]">✔</span> <CountUp target={300} suffix="%" /> increase in conversions</li>
                            <li className="flex items-center gap-3"><span className="text-[#10B981]">✔</span> <CountUp target={2} suffix="x" /> faster load times</li>
                            <li className="flex items-center gap-3"><span className="text-[#10B981]">✔</span> <CountUp target={0} /> downtime peak sales</li>
                        </ul>
                    </GradientCard>

                    {/* CASE STUDY 2: B2B LOGISTICS */}
                    <GradientCard
                        gradient="lavender"
                        badgeText="B2B Logistics"
                        badgeColor="#F9A8D4"
                        title="40hrs"
                        description="Saved via Automation"
                        ctaText="View Full Case Study"
                        ctaHref="#"
                        imageUrl="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
                    >
                        <p className="mb-6 opacity-60 text-sm font-medium italic">"Reduced manual workload and data entry by 80%"</p>
                        
                        <div className="space-y-4 mb-8 border-y border-white/5 py-6">
                            <div className="text-sm"><strong className="text-[#F9A8D4] block mb-1 uppercase tracking-widest text-[0.7rem]">The Friction:</strong> Manual data synchronization across fragmented systems created severe operational lag and critical entry errors.</div>
                            <div className="text-sm"><strong className="text-[#F9A8D4] block mb-1 uppercase tracking-widest text-[0.7rem]">The Transformation:</strong> Implemented autonomous data pipelines and predictive modeling to eliminate manual overhead.</div>
                        </div>

                        <ul className="space-y-3 text-sm font-bold">
                            <li className="flex items-center gap-3"><span className="text-[#10B981]">✔</span> <CountUp target={40} suffix="hrs" /> saved per week</li>
                            <li className="flex items-center gap-3"><span className="text-[#10B981]">✔</span> <CountUp target={100} suffix="%" /> elimination of entry errors</li>
                            <li className="flex items-center gap-3"><span className="text-[#10B981]">✔</span> Real-time inventory visibility</li>
                        </ul>
                    </GradientCard>

                    {/* CASE STUDY 3: ENTERPRISE SAAS */}
                    <GradientCard
                        gradient="lavender"
                        badgeText="Enterprise SaaS"
                        badgeColor="#F9A8D4"
                        title="Zero"
                        description="Downtime Migration"
                        ctaText="View Full Case Study"
                        ctaHref="#"
                        imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
                    >
                        <p className="mb-6 opacity-60 text-sm font-medium italic">"Executed full system overhaul seamlessly under load"</p>
                        
                        <div className="space-y-4 mb-8 border-y border-white/5 py-6">
                            <div className="text-sm"><strong className="text-[#F9A8D4] block mb-1 uppercase tracking-widest text-[0.7rem]">The Risk:</strong> Migrating a legacy backend while maintaining 100% uptime for high-traffic enterprise users.</div>
                            <div className="text-sm"><strong className="text-[#F9A8D4] block mb-1 uppercase tracking-widest text-[0.7rem]">The Execution:</strong> Developed a live shadow-migration protocol, allowing for zero latency or disruption.</div>
                        </div>

                        <ul className="space-y-3 text-sm font-bold">
                            <li className="flex items-center gap-3"><span className="text-[#10B981]">✔</span> <CountUp target={0} /> downtime during migration</li>
                            <li className="flex items-center gap-3"><span className="text-[#10B981]">✔</span> No data loss or disruption</li>
                            <li className="flex items-center gap-3"><span className="text-[#10B981]">✔</span> <CountUp target={50} suffix="%" /> reduction in server costs</li>
                        </ul>
                    </GradientCard>

                </div>

                {/* 10. FINAL CTA SECTION */}
                <div className="scroll-anim slide-up" style={{ marginTop: 'clamp(3rem, 8vw, 8rem)', marginBottom: '2rem' }}>
                    <div style={{
                        textAlign: 'center',
                        background: 'rgba(11, 15, 25, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '24px',
                        padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1rem, 4vw, 2rem)',
                        position: 'relative',
                        overflow: 'hidden',
                        backdropFilter: 'blur(16px)',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '80%',
                            height: '100%',
                            background: 'radial-gradient(ellipse at center, rgba(255, 140, 0, 0.08) 0%, transparent 60%)',
                            zIndex: -1,
                            pointerEvents: 'none'
                        }} />
                        <h3 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: 800, color: '#F9A8D4', marginBottom: '3rem', letterSpacing: '-0.02em' }}>
                            Want Results Like These?
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                            <button onClick={openModal} className="btn btn-primary btn-large">
                                Book Consultation
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Results;
