'use client';

import { useEffect, useRef, useState } from 'react';

export default function Atmosphere({ reducedMotion }: { reducedMotion: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    const move = (event: MouseEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const sparks = Array.from({ length: 46 }, () => ({
      x: Math.random(),
      y: Math.random(),
      s: 0.15 + Math.random() * 0.55,
      a: 0.08 + Math.random() * 0.22,
    }));

    let raf = 0;
    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparks.forEach((spark) => {
        spark.y -= spark.s / 1400;
        if (spark.y < 0) spark.y = 1;
        ctx.fillStyle = `rgba(92, 246, 255, ${spark.a})`;
        ctx.fillRect(spark.x * canvas.width, spark.y * canvas.height, 1.2, 8 * spark.s);
      });
      raf = window.requestAnimationFrame(draw);
    };
    draw();
    return () => window.cancelAnimationFrame(raf);
  }, [reducedMotion]);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="ambient ambient-blue" />
      <div className="ambient ambient-cyan" />
      <div className="ambient ambient-violet" />
      <canvas ref={canvasRef} className="spark-field" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <div ref={cursorRef} className="ghost-cursor" aria-hidden="true" />
    </>
  );
}
