'use client'

import { Suspense, lazy, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Galaxy = lazy(() => import('@/components/ui/Galaxy'));

export function SplineHero() {
  const navigate = useNavigate();
  // Detect mobile — skip Galaxy on small screens / touch devices
  const [isMobile, setIsMobile] = useState(true); // default true to avoid flash

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768 || ('ontouchstart' in window));
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100svh',
      background: '#060b17',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(5rem, 12vw, 7rem) 1.5rem clamp(3rem, 6vw, 4rem)',
    }}>

      {/* Galaxy — desktop only */}
      {!isMobile && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Suspense fallback={<div style={{ width: '100%', height: '100%', background: '#060b17' }} />}>
            <Galaxy
              mouseRepulsion
              mouseInteraction
              density={1.2}
              glowIntensity={0.25}
              saturation={0}
              hueShift={140}
              twinkleIntensity={0.4}
              rotationSpeed={0.08}
              repulsionStrength={2}
              autoCenterRepulsion={0}
              starSpeed={0.5}
              speed={0.8}
              transparent={true}
              style={{ width: '100%', height: '100%' }}
            />
          </Suspense>
        </div>
      )}

      {/* Mobile fallback — CSS gradient background */}
      {isMobile && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'radial-gradient(ellipse at 20% 20%, rgba(255,140,0,0.18) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(0,212,255,0.12) 0%, transparent 50%), #060b17',
        }} />
      )}

      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'rgba(6,11,23,0.45)',
      }} />

      {/* Dot grid overlay — always visible */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }} />

      {/* Radial glow lines from center */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,140,0,0.03) 30deg, transparent 60deg, rgba(0,212,255,0.03) 120deg, transparent 150deg, rgba(168,85,247,0.03) 210deg, transparent 240deg, rgba(255,140,0,0.03) 300deg, transparent 360deg)',
      }} />

      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px,-20px) scale(1.06); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-30px,20px) scale(1.05); }
        }
        .hero-blob { position:absolute; border-radius:50%; filter:blur(70px); pointer-events:none; will-change:transform; }
        .hero-btn {
          position: relative;
          display: inline-flex; align-items: center; gap: 0.625rem;
          padding: 0.75rem 1.75rem;
          background: linear-gradient(135deg, #FF8C00, #FFB800);
          color: #000;
          font-weight: 700; font-size: 0.9375rem;
          border-radius: 12px; border: none; cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 0 18px rgba(255,140,0,0.4), 0 4px 12px rgba(0,0,0,0.3);
          letter-spacing: 0.02em;
          z-index: 0;
          overflow: visible;
        }
        .hero-btn::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 14px;
          background: linear-gradient(135deg, #FF8C00, #FFD700, #FF8C00);
          opacity: 0.55;
          filter: blur(10px);
          z-index: -1;
          transition: opacity 0.2s ease, filter 0.2s ease;
        }
        .hero-btn::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 50%;
          border-radius: 12px 12px 0 0;
          background: linear-gradient(to bottom, rgba(255,255,255,0.22), transparent);
          pointer-events: none; z-index: 1;
        }
        .hero-btn:hover::before { opacity: 0.9; filter: blur(14px); }
        .hero-btn:hover { transform: translateY(-2px); box-shadow: 0 0 28px rgba(255,140,0,0.6), 0 6px 20px rgba(0,0,0,0.35); }
        .hero-btn:active { transform: translateY(0); }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Blobs — always visible on both desktop and mobile */}
      <div className="hero-blob" style={{
        width: '600px', height: '600px',
        background: 'rgba(255,140,0,0.2)',
        top: '-150px', left: '-180px', zIndex: 1,
        animation: 'blob1 14s ease-in-out infinite',
      }} />
      <div className="hero-blob" style={{
        width: '500px', height: '500px',
        background: 'rgba(0,212,255,0.14)',
        top: '-100px', right: '-140px', zIndex: 1,
        animation: 'blob2 16s ease-in-out infinite',
      }} />
      <div className="hero-blob" style={{
        width: '400px', height: '400px',
        background: 'rgba(168,85,247,0.12)',
        bottom: '-80px', left: '20%', zIndex: 1,
        animation: 'blob1 18s ease-in-out infinite reverse',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: '720px', width: '100%',
        textAlign: 'center',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2rem, 7vw, 4.25rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            margin: '0 0 1.25rem',
            color: '#fff',
          }}
        >
          AI-powered
          <br />
          <span style={{
            background: 'linear-gradient(90deg, #FF8C00, #FF3B3B, #FF8C00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 100%',
            animation: 'gradientShift 4s ease infinite',
          }}>
            business ecosystem
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: 'clamp(0.9375rem, 2.5vw, 1.125rem)',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7,
            maxWidth: '500px',
            margin: '0 0 2.25rem',
            fontWeight: 400,
          }}
        >
          Everything your business needs to grow, in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <button className="hero-btn" onClick={() => navigate('/contact')}>
            BOOK CONSULTATION
            <ArrowRight style={{ width: '18px', height: '18px' }} />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
