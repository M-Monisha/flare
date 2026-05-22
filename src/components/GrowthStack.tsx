import React, { useEffect, useRef } from 'react';
import BorderGlow from './ui/BorderGlow';

const GrowthStack: React.FC = () => {
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
        <section id="growth-stack" className="stack-section section-padding" ref={sectionRef}>
            <div className="container">
                <div className="stack-layout grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
                    <div className="stack-content scroll-anim slide-right">
                        <h2 className="section-badge">How It Works Together</h2>
                        <h3 className="section-title" style={{ color: '#00D4FF', textShadow: '0 0 20px rgba(0, 212, 255, 0.3)' }}>One Team. Every Layer. Better Results.</h3>
                        
                        {/* Interactive Cards Container */}
                        <div className="stack-cards flex flex-col gap-6 mt-10">
                            <BorderGlow 
                                glowColor="190 100 50" 
                                colors={['#00D4FF', '#0095FF', '#38bdf8']} 
                                borderRadius={16}
                                fillOpacity={0.15}
                                className="w-full bg-white/5 backdrop-blur-sm"
                            >
                                <div className="p-5">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#00D4FF] shadow-[0_0_10px_#00D4FF]" />
                                        <h4 className="text-lg font-bold text-white tracking-wide">Execution and Growth Operations</h4>
                                    </div>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        We ensure the right audience sees your business. We create content that builds trust and turns website visitors into paying customers.
                                    </p>
                                </div>
                            </BorderGlow>

                            <BorderGlow 
                                glowColor="240 70 65" 
                                colors={['#5A5AFF', '#4c4ce6', '#38bdf8']} 
                                borderRadius={16}
                                fillOpacity={0.15}
                                className="w-full bg-white/5 backdrop-blur-sm"
                            >
                                <div className="p-5">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#5A5AFF] shadow-[0_0_10px_#5A5AFF]" />
                                        <h4 className="text-lg font-bold text-white tracking-wide">Infrastructure and Automation</h4>
                                    </div>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        Your technology runs automatically in the background. We set up reliable hosting and automate your workflows. Your systems will handle growth while you focus on the business.
                                    </p>
                                </div>
                            </BorderGlow>

                            <BorderGlow 
                                glowColor="280 80 60" 
                                colors={['#8A2BE2', '#7219c4', '#c084fc']} 
                                borderRadius={16}
                                fillOpacity={0.15}
                                className="w-full bg-white/5 backdrop-blur-sm"
                            >
                                <div className="p-5">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#8A2BE2] shadow-[0_0_10px_#8A2BE2]" />
                                        <h4 className="text-lg font-bold text-white tracking-wide">Data and Intelligence</h4>
                                    </div>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        We analyze performance and provide clear reporting. Every decision you make will be backed by reliable data instead of guesswork.
                                    </p>
                                </div>
                            </BorderGlow>
                        </div>
                    </div>

                    <div className="stack-visual scroll-anim slide-left hidden md:block">
                        <div className="layer layer-3 data-layer">
                            <span>DATA & INTELLIGENCE</span>
                        </div>
                        <div className="layer layer-2 infra-layer">
                            <span>INFRASTRUCTURE & AUTOMATION</span>
                        </div>
                        <div className="layer layer-1 growth-layer">
                            <span>EXECUTION & GROWTH</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowthStack;
