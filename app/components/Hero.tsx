'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const HERO_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    label: 'Analyse de données',
  },
  {
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    label: 'Stratégie digitale',
  },
  {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
    label: 'Creative branding',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const nodes = Array.from({ length: 18 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 3 + 1.5,
    }));

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.005;

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(83,74,183,${0.18 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      nodes.forEach((n, i) => {
        const pulse = Math.sin(t + i) * 0.5 + 0.5;
        const isAccent = i % 5 === 0;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + pulse, 0, Math.PI * 2);
        ctx.fillStyle = isAccent
          ? `rgba(216,90,48,${0.6 + pulse * 0.4})`
          : `rgba(83,74,183,${0.4 + pulse * 0.3})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setFading(true);
      setTimeout(() => {
        setCurrent((value) => (value + 1) % HERO_IMAGES.length);
        setFading(false);
        setPrev(null);
      }, 900);
    }, 5200);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className='w-full'>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      <div className={styles.heroImages} aria-hidden="true">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={image.url}
            className={`${styles.heroSlide} ${index === current ? styles.active : ''} ${index === prev && fading ? styles.prev : ''}`}
            style={{ backgroundImage: `url(${image.url})` }}
          />
        ))}
        <div className={styles.heroOverlay} />
        <div className={styles.heroImageLabel}>{HERO_IMAGES[current].label}</div>
      </div>

      <div className={styles.inner}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Agence IA & Communication digitale
        </div>

        <h1 className={styles.headline}>
          Transformez vos données{' '}
          <span className={styles.accent}>en décisions</span>{' '}
          qui font la différence
        </h1>

        <p className={styles.sub}>
          Axonova combine intelligence artificielle, analyse de données et
          stratégie digitale pour accélérer la croissance de votre entreprise.
        </p>

        <div className={styles.actions}>
          <Link href="#contact" className={styles.btnPrimary}>
            Audit gratuit — 30 min
          </Link>
          <Link href="#realisations" className={styles.btnSecondary}>
            Voir nos réalisations →
          </Link>
        </div>

        <div className={styles.stats}>
          {[
            { num: '+120', label: 'Clients accompagnés' },
            { num: '3×',   label: 'ROI moyen constaté' },
            { num: '98%',  label: 'Satisfaction client' },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}