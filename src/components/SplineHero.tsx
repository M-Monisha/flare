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
      padding: '7rem 1.5rem 4rem',
    }}>

      {/* ── CSS Blob Background ── */}
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.08); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, 30px) scale(1.05); }
          66% { transform: translate(30px, -20px) scale(0.97); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, 40px) scale(1.06); }
          66% { transform: translate(-30px, -10px) scale(0.96); }
        }
        @keyframes blob4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, -30px) scale(1.07); }
        }
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          will-change: transform;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          border: 1px solid rgba(0,212,255,0.25);
          background: rgba(0,212,255,0.06);
          font-size: 0.75rem;
          font-weight: 700;
          color: #00D4FF;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .hero-tag-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #00D4FF;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.875rem 2rem;
          background: #FF8C00;
          color: #000;
          font-weight: 800;
          font-size: 0.9375rem;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 0 32px rgba(255,140,0,0.35);
          letter-spacing: 0.02em;
        }
        .hero-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 48px rgba(255,140,0,0.5);
        }
        .hero-btn:active { transform: translateY(0); }
        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-top: 3rem;
          flex-wrap: wrap;
        }
        .hero-stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .hero-stat-num {
          font-size: 1.375rem;
          font-weight: 800;
          color: #fff;
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.4);
          font-weight: 500;
        }
        .hero-divider {
          width: 1px;
          height: 32px;
          background: rgba(255,255,255,0.1);
          align-self: center;
        }
        @media (max-width: 640px) {
          .hero-stats { gap: 1.25rem; }
          .hero-stat-num { font-size: 1.125rem; }
          .hero-blob { filter: blur(60px); }
        }
      `}</style>

      {/* Blob 1 — orange, top-left */}
      <div className="hero-blob" style={{
        width: '500px', height: '500px',
        background: 'rgba(255,140,0,0.18)',
        top: '-100px', left: '-150px',
        animation: 'blob1 12s ease-in-out infinite',
      }} />

      {/* Blob 2 — cyan, top-right */}
      <div className="hero-blob" style={{
        width: '450px', height: '450px',
        background: 'rgba(0,212,255,0.12)',
        top: '-80px', right: '-120px',
        animation: 'blob2 15s ease-in-out infinite',
      }} />

      {/* Blob 3 — purple, bottom-left */}
      <div className="hero-blob" style={{
        width: '400px', height: '400px',
        background: 'rgba(168,85,247,0.12)',
        bottom: '-80px', left: '10%',
        animation: 'blob3 18s ease-in-out infinite',
      }} />

      {/* Blob 4 — deep blue, bottom-right */}
      <div className="hero-blob" style={{
        width: '350px', height: '350px',
        background: 'rgba(90,90,255,0.1)',
        bottom: '-60px', right: '5%',
        animation: 'blob4 14s ease-in-out infinite',
      }} />

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Dark vignette overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(6,11,23,0.7) 100%)',
      }} />

      {/* ── Content ── */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: '780px',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            AI-Powered Digital Agency
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.25rem, 7vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            margin: '0 0 1.25rem',
            color: '#fff',
          }}
        >
          AI-powered{' '}
          <span style={{
            background: 'linear-gradient(90deg, #FF8C00, #FF3B3B, #FF8C00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 100%',
            animation: 'gradientShift 4s ease infinite',
          }}>
            business
          </span>
          <br />ecosystem
          <style>{`
            @keyframes gradientShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 0 2.5rem',
            fontWeight: 400,
          }}
        >
          AI automation, development, cloud infrastructure, and digital growth systems
        </motion.p>

        {/* CTA */}
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-stats"
          style={{ justifyContent: 'center' }}
        >
          <div className="hero-stat-item">
            <span className="hero-stat-num">300%</span>
            <span className="hero-stat-label">Avg Growth</span>
          </div>
          <div className="hero-divider" />
          <div className="hero-stat-item">
            <span className="hero-stat-num">100+</span>
            <span className="hero-stat-label">Hours Saved Weekly</span>
          </div>
          <div className="hero-divider" />
          <div className="hero-stat-item">
            <span className="hero-stat-num">0</span>
            <span className="hero-stat-label">Downtime Deployments</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
