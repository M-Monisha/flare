'use client'

import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function SplineHero() {
  const navigate = useNavigate();

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

      <style>{`
        @keyframes meshMove1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, -40px) scale(1.08); }
        }
        @keyframes meshMove2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 50px) scale(1.06); }
        }
        @keyframes meshMove3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 60px) scale(1.05); }
        }
        @keyframes meshMove4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-60px, -30px) scale(1.07); }
        }
        .mesh-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          will-change: transform;
        }
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

      {/* ── Mesh gradient blobs ── */}
      {/* Orange — top left */}
      <div className="mesh-blob" style={{
        width: '70vw', height: '70vw', maxWidth: '700px', maxHeight: '700px',
        background: 'radial-gradient(circle, rgba(255,100,0,0.55) 0%, rgba(255,60,0,0.3) 40%, transparent 70%)',
        top: '-20%', left: '-15%',
        filter: 'blur(80px)',
        animation: 'meshMove1 16s ease-in-out infinite',
        zIndex: 0,
      }} />

      {/* Cyan — top right */}
      <div className="mesh-blob" style={{
        width: '60vw', height: '60vw', maxWidth: '600px', maxHeight: '600px',
        background: 'radial-gradient(circle, rgba(0,180,255,0.4) 0%, rgba(0,100,200,0.2) 50%, transparent 70%)',
        top: '-10%', right: '-10%',
        filter: 'blur(90px)',
        animation: 'meshMove2 20s ease-in-out infinite',
        zIndex: 0,
      }} />

      {/* Purple — bottom center */}
      <div className="mesh-blob" style={{
        width: '65vw', height: '65vw', maxWidth: '650px', maxHeight: '650px',
        background: 'radial-gradient(circle, rgba(120,40,200,0.45) 0%, rgba(80,0,160,0.25) 50%, transparent 70%)',
        bottom: '-20%', left: '20%',
        filter: 'blur(85px)',
        animation: 'meshMove3 18s ease-in-out infinite',
        zIndex: 0,
      }} />

      {/* Deep blue — bottom right */}
      <div className="mesh-blob" style={{
        width: '50vw', height: '50vw', maxWidth: '500px', maxHeight: '500px',
        background: 'radial-gradient(circle, rgba(0,60,180,0.35) 0%, transparent 70%)',
        bottom: '-10%', right: '-5%',
        filter: 'blur(80px)',
        animation: 'meshMove4 22s ease-in-out infinite',
        zIndex: 0,
      }} />

      {/* Line grid overlay — like Zerozilla */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Dark vignette to keep edges dark */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(6,11,23,0.1) 0%, rgba(6,11,23,0.75) 100%)',
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
            fontSize: 'clamp(1.75rem, 6vw, 3.75rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            margin: '0 0 1.25rem',
            color: '#fff',
          }}
        >
          India's First{' '}
          <span style={{
            background: 'linear-gradient(90deg, #FF8C00, #FF3B3B, #FF8C00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 100%',
            animation: 'gradientShift 4s ease infinite',
          }}>
            B2B Technical
          </span>
          <br />Marketing Company
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: 'clamp(0.9375rem, 2.5vw, 1.125rem)',
            color: 'rgba(255,255,255,0.65)',
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
