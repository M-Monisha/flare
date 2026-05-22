import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayeredText } from './ui/layered-text';

interface ContactProps {
    onOpenModal?: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenModal }) => {
    const navigate = useNavigate();
    const visualRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!visualRef.current) return;
            const { clientX, clientY } = e;
            const { left, top, width, height } = visualRef.current.getBoundingClientRect();
            const x = (clientX - left) / width - 0.5;
            const y = (clientY - top) / height - 0.5;
            visualRef.current.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale(1.05)`;
        };

        const handleMouseLeave = () => {
            if (!visualRef.current) return;
            visualRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)`;
        };

        const currentVisual = visualRef.current;
        if (currentVisual) {
            window.addEventListener('mousemove', handleMouseMove);
            currentVisual.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (currentVisual) {
                currentVisual.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

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

    const handleAction = () => {
        if (onOpenModal) {
            onOpenModal();
        } else {
            navigate('/contact');
        }
    };

    return (
        <section id="contact" className="cta-section section-padding" ref={sectionRef}>
            <div className="container scroll-anim scale-up">
                <div className="cta-container dual-layout">
                        <div className="flex flex-col items-center md:items-start w-full text-center md:text-left">
                            <LayeredText 
                                lines={[
                                    { top: "\u00A0", bottom: "READY" },
                                    { top: "READY", bottom: "GROW" },
                                    { top: "GROW", bottom: "FLARE" },
                                    { top: "FLARE", bottom: "SUCCESS" },
                                    { top: "SUCCESS", bottom: "FUTURE" },
                                    { top: "FUTURE", bottom: "\u00A0" },
                                ]}
                                fontSize="60px"
                                fontSizeMd="35px"
                                className="py-0 my-0 text-left text-[#7DD3FC]"
                            />
                            <button onClick={handleAction} className="btn btn-primary btn-large" style={{ marginTop: '2rem' }}>Book a Free Call</button>
                        </div>

                    <div className="cta-visual interactive-neural-hub hidden md:flex" ref={visualRef} style={{ transition: 'transform 0.1s ease-out', transformStyle: 'preserve-3d' }}>
                        <div className="cta-glow-bg pulsar-glow"></div>
                        <svg className="cta-ai-network" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
                            <defs>
                                <filter id="nebulaGlow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="5" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                                <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="transparent" />
                                    <stop offset="50%" stopColor="#00D4FF" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                            
                            {/* Neural Threads (Background) */}
                            <g className="neural-threads" opacity="0.15">
                                <path d="M 50,50 Q 250,200 450,350" fill="none" stroke="#5A5AFF" strokeWidth="1" strokeDasharray="5,5" />
                                <path d="M 450,50 Q 250,200 50,350" fill="none" stroke="#8A2BE2" strokeWidth="1" strokeDasharray="5,5" />
                                <circle cx="250" cy="200" r="150" fill="none" stroke="#ff4d00" strokeWidth="0.5" strokeDasharray="10,10" />
                            </g>

                            {/* Energy Rings (Emitting from core) */}
                            <g className="energy-rings">
                                <circle className="ring r-1" cx="250" cy="200" r="40" fill="none" stroke="#00D4FF" strokeWidth="1" />
                                <circle className="ring r-2" cx="250" cy="200" r="40" fill="none" stroke="#5A5AFF" strokeWidth="1" />
                                <circle className="ring r-3" cx="250" cy="200" r="40" fill="none" stroke="#8A2BE2" strokeWidth="1" />
                            </g>

                            {/* Shooting Stars (Data Packets) */}
                            <g className="data-beams">
                                <path className="beam b-1" d="M 100,200 Q 250,50 400,200" fill="none" stroke="url(#beamGradient)" strokeWidth="3" strokeDasharray="20,180" />
                                <path className="beam b-2" d="M 400,200 Q 250,350 100,200" fill="none" stroke="url(#beamGradient)" strokeWidth="3" strokeDasharray="20,180" />
                            </g>

                            {/* Planetary Nodes */}
                            <g className="planetary-nodes">
                                <g className="p-node pn-1">
                                    <circle className="node-glow" cx="100" cy="200" r="12" fill="#00D4FF" filter="url(#nebulaGlow)" opacity="0.4" />
                                    <circle className="node-core" cx="100" cy="200" r="6" fill="#00D4FF" />
                                </g>
                                <g className="p-node pn-2">
                                    <circle className="node-glow" cx="250" cy="50" r="14" fill="#FF8C00" filter="url(#nebulaGlow)" opacity="0.4" />
                                    <circle className="node-core" cx="250" cy="50" r="7" fill="#FF8C00" />
                                </g>
                                <g className="p-node pn-3">
                                    <circle className="node-glow" cx="400" cy="200" r="12" fill="#8A2BE2" filter="url(#nebulaGlow)" opacity="0.4" />
                                    <circle className="node-core" cx="400" cy="200" r="6" fill="#8A2BE2" />
                                </g>
                                <g className="p-node pn-4">
                                    <circle className="node-glow" cx="250" cy="350" r="14" fill="#00D4FF" filter="url(#nebulaGlow)" opacity="0.4" />
                                    <circle className="node-core" cx="250" cy="350" r="7" fill="#00D4FF" />
                                </g>
                                
                                {/* The Sun (Central Core) */}
                                <g className="central-sun">
                                    <circle className="sun-glow" cx="250" cy="200" r="30" fill="#ff4d00" filter="url(#nebulaGlow)" opacity="0.3" />
                                    <circle className="sun-inner" cx="250" cy="200" r="15" fill="#ff4d00" />
                                    <circle className="sun-white" cx="250" cy="200" r="8" fill="#fff" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
