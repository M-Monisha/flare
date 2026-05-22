import React, { useEffect, useRef } from 'react';

const features = [
    {
        title: 'Agile Delivery Model',
        icon: 'uisoczqi',
        desc: 'You never have to wait six months to see progress. We move fast, keep you informed, and deliver working solutions in a matter of weeks.',
    },
    {
        title: 'Senior-Led Execution',
        icon: 'weqkkuwt',
        desc: 'Your project is handled entirely by experienced professionals. The same engineers who plan your system are the ones who build it.',
    },
    {
        title: 'Security-First Architecture',
        icon: 'jectmwqf',
        desc: 'Your data is safe and your systems remain stable. We build things properly the first time so you never pay to fix avoidable problems later.',
    },
    {
        title: 'Automated Systems',
        icon: 'euaablbm',
        desc: 'Imagine a team member who works constantly, never forgets a task, and handles your repetitive work automatically.',
    },
];

const WhyFlare: React.FC = () => {
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

    // Double the features for seamless looping
    const displayFeatures = [...features, ...features];

    return (
        <section id="why-flare" className="why-us-section section-padding border-top-gradient" ref={sectionRef}>
            <div className="section-header text-center scroll-anim slide-up">
                <h2 className="section-badge">Why Flare</h2>
                <h3 className="section-title" style={{ color: '#00D4FF', textShadow: '0 0 20px rgba(0, 212, 255, 0.2)' }}>Why Businesses Choose Flare</h3>
            </div>

            <div className="marquee-outer">
                <div className="marquee-inner">
                    {displayFeatures.map((feature, index) => (
                        <div
                            key={`${feature.title}-${index}`}
                            className="why-feature-card"
                        >
                            <div className="card-accent" />
                            <div className="mb-4">
                                {/* @ts-ignore */}
                                <lord-icon
                                    src={`https://cdn.lordicon.com/${feature.icon}.json`}
                                    trigger="hover"
                                    colors="primary:#00D4FF,secondary:#30c9e8"
                                    style={{ width: '60px', height: '60px' }}
                                ></lord-icon>
                            </div>
                            <h4 className="card-title">{feature.title}</h4>
                            <p className="card-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .marquee-outer {
                    width: 100vw;
                    margin-left: calc(-50vw + 50%);
                    margin-right: calc(-50vw + 50%);
                    overflow: hidden;
                    position: relative;
                    padding: 2rem 0;
                }

                .marquee-inner {
                    display: flex;
                    width: max-content;
                    gap: 2rem;
                    animation: infiniteScroll 40s linear infinite;
                    padding: 0 1rem;
                }

                .marquee-outer:hover .marquee-inner {
                    animation-play-state: paused;
                }

                @keyframes infiniteScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 1rem)); }
                }

                .why-feature-card {
                    width: 320px;
                    flex-shrink: 0;
                    background: rgba(18, 24, 38, 0.4);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 2rem;
                    position: relative;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .why-feature-card:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: rgba(255, 255, 255, 0.2);
                    transform: translateY(-5px);
                }

                .card-accent {
                    position: absolute;
                    top: 0;
                    left: 2rem;
                    right: 2rem;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #00D4FF, transparent);
                    opacity: 0.5;
                }

                .card-title {
                    color: #fff;
                    font-size: 1.15rem;
                    font-weight: 700;
                    letter-spacing: -0.01em;
                }

                .card-desc {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.9rem;
                    line-height: 1.6;
                }

                @media (max-width: 768px) {
                    .why-feature-card {
                        width: 280px;
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default WhyFlare;
