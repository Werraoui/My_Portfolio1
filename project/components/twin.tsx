'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { Language } from '@/lib/content';

const logs = {
  en: [
    '> boot sequence · twin.core',
    '> loading persona · ERRAOUI.W',
    '> neural bus ......... OK',
    '> stack ............... AI + DATA',
    '> explainability ...... SHAP',
    '> status .............. SEEKING PFE',
  ],
  fr: [
    '> séquence boot · twin.core',
    '> chargement persona · ERRAOUI.W',
    '> bus neural .......... OK',
    '> stack ............... IA + DATA',
    '> explicabilité ....... SHAP',
    '> statut .............. RECHERCHE PFE',
  ],
};

function NetworkField({ reducedMotion }: { reducedMotion: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const nodes = Array.from({ length: 28 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00035,
      vy: (Math.random() - 0.5) * 0.00035,
      r: 1.2 + Math.random() * 1.8,
    }));

    let frame = 0;
    let raf = 0;

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      nodes.forEach((node) => {
        if (!reducedMotion) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > 1) node.vx *= -1;
          if (node.y < 0 || node.y > 1) node.vy *= -1;
        }
      });
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 0.22) {
            ctx.strokeStyle = `rgba(92, 246, 255, ${0.22 - dist})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x * width, nodes[i].y * height);
            ctx.lineTo(nodes[j].x * width, nodes[j].y * height);
            ctx.stroke();
          }
        }
      }
      nodes.forEach((node, index) => {
        const pulse = reducedMotion ? 1 : 0.65 + Math.sin(frame / 40 + index) * 0.35;
        ctx.fillStyle = `rgba(92, 246, 255, ${0.35 + pulse * 0.4})`;
        ctx.beginPath();
        ctx.arc(node.x * width, node.y * height, node.r * pulse, 0, Math.PI * 2);
        ctx.fill();
      });
      frame += 1;
      raf = window.requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className="twin-field" aria-hidden="true" />;
}

export default function Twin({
  reducedMotion,
  language,
  twinLabel,
  twinStatus,
}: {
  reducedMotion: boolean;
  language: Language;
  twinLabel: string;
  twinStatus: string;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glitch, setGlitch] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [logCount, setLogCount] = useState(1);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion) {
      setLogCount(logs[language].length);
      return;
    }
    setLogCount(1);
    const timer = window.setInterval(() => {
      setLogCount((count) => (count >= logs[language].length ? 1 : count + 1));
    }, 1600);
    return () => window.clearInterval(timer);
  }, [language, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const pulse = window.setInterval(() => {
      setGlitch(true);
      window.setTimeout(() => setGlitch(false), 280);
    }, 8200);
    return () => window.clearInterval(pulse);
  }, [reducedMotion]);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((event.clientY - rect.top) / rect.height - 0.5) * -10,
      y: ((event.clientX - rect.left) / rect.width - 0.5) * 12,
    });
  };

  return (
    <div
      ref={stageRef}
      className={`twin-stage ${reducedMotion ? 'motion-off' : ''} ${glitch ? 'is-glitch' : ''} ${scanning ? 'is-scanning' : ''}`}
      onMouseMove={handleMove}
      onMouseEnter={() => setScanning(true)}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
        setScanning(false);
      }}
    >
      <NetworkField reducedMotion={reducedMotion} />
      <div className="twin-rings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="twin-aura" />
      <div className="twin-platform" />
      <div className="twin-platform twin-platform-outer" />

      <div className="twin-figure">
        <div
          className="twin-figure-inner"
          style={{ transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
        <div className="twin-scan-frame">
          <div className="twin-image">
            <Image src={siteConfig.twinImage} alt="Wiame's digital twin" width={640} height={800} priority />
            <span className="twin-core" />
            <span className="twin-shine" />
          </div>
          <span className="twin-scanline" />
        </div>
        <div className="twin-id">
          <b>{twinLabel}</b>
          <em>{scanning ? (language === 'fr' ? 'SCAN VISITEUR' : 'SCANNING VISITOR') : twinStatus}</em>
        </div>
        </div>
      </div>

      <div className="hud-chip chip-one">
        <span>MODEL SIGNAL</span>
        <strong>ROC-AUC 0.8404</strong>
      </div>
      <div className="hud-chip chip-two">
        <span>RETRIEVAL</span>
        <strong>RAG · LLM · NLP</strong>
      </div>
      <div className="hud-chip chip-three">
        <span>RECALL</span>
        <strong>78.88%</strong>
      </div>
      <div className="hud-chip chip-four">
        <span>CORE</span>
        <strong>AI · DATA · ML</strong>
      </div>

      <div className="twin-terminal" aria-hidden="true">
        {logs[language].slice(0, logCount).map((line) => (
          <p key={line}>{line}</p>
        ))}
        <i className="twin-caret" />
      </div>

      <div className="scroll-cue">
        <span>SCROLL TO SYNC</span>
        <ArrowDown size={15} />
      </div>
    </div>
  );
}
