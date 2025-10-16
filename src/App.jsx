import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroName = 'Milind Yadav';
const typingHeadline = 'Data & AI Engineer | Building Responsible Intelligent Systems';
const summaryIntro = `Full-stack Data & AI professional with 2+ years building generative AI and analytics products that ship to production. I specialise in RAG systems, LLM fine-tuning, and data platforms that accelerate decision-making for legal, operations, and content teams.`;
const summarySecondary = `My approach blends rapid prototyping with responsible AI adoption—designing observability, documentation, and enablement programmes that bring cross-functional partners along the journey. I focus on measurable ROI, pragmatic tooling, and trust-first AI experiences.`;

const skillMatrix = {
  'Programming & Languages': ['Python', 'SQL', 'R', 'Dart', 'Java'],
  'Generative AI & LLMs': ['LLMs', 'LangChain', 'RAG Systems', 'Agentic Workflows', 'Prompt Engineering', 'Hugging Face', 'PEFT / LoRA / QLoRA', 'ChromaDB'],
  'ML & Data Science': ['PyTorch', 'TensorFlow', 'Keras', 'scikit-learn', 'XGBoost', 'PySpark', 'NLP', 'Computer Vision'],
  'MLOps & Platforms': ['Docker', 'FastAPI', 'MLflow', 'GitHub Actions', 'Azure', 'AWS', 'GCP (BigQuery, Vertex AI)', 'CI/CD & Monitoring']
};

const projects = [
  {
    title: 'Lexibot · Agentic Legal Contract Reviewer',
    description:
      'Production-ready agentic RAG platform that accelerates legal contract review by combining LLaMA 3 with retrieval orchestration tuned on the CUAD dataset.',
    role:
      'Owned product scope, system architecture, and stakeholder alignment while designing evaluation loops that keep legal teams confident in AI guidance.',
    challenges: [
      'Domain adapting LLaMA 3 with LoRA fine-tuning for legal terminology and clause reasoning',
      'Engineering high-recall retrieval pipelines that minimise false positives',
      'Instrumenting agent evaluations (precision, recall, contradiction tracking) with W&B dashboards'
    ],
    tech: ['LLaMA 3', 'LangChain', 'FastAPI', 'Docker', 'Weaviate / ChromaDB'],
    github: 'https://github.com/millind-yadav/lexibot',
    demo: 'https://lexibot.ai'
  },
  {
    title: 'BrewAssist · Internal AI Knowledge Copilot',
    description:
      'LangChain + FastAPI assistant that indexes 50K+ operational documents for Brothers Drinks Co., cutting lookup time by 80% and serving 500+ weekly queries.',
    role:
      'Designed the service-oriented RAG architecture, embedded adoption metrics, and delivered enablement guides that drove 85%+ engagement across teams.',
    challenges: [
      'Maintaining grounded answers with QLoRA-tuned Mistral 7B and retrieval guardrails',
      'Containerising pipelines and observability for high availability in production',
      'Designing measurable rollout and training programmes for non-technical stakeholders'
    ],
    tech: ['LangChain', 'FastAPI', 'React', 'Docker', 'Prometheus'],
    github: 'https://github.com/millind-yadav/brewassist',
    demo: 'https://brewassist.dev'
  },
  {
    title: 'Real-Time Fire Detection with Synthetic Data',
    description:
      'End-to-end YOLOv8 computer vision pipeline delivering 94% mAP fire and smoke detection with synthetic augmentation to reduce false alarms.',
    role:
      'Implemented data generation workflows, model training, and monitoring to ensure reliability for high-stakes safety deployments.',
    challenges: [
      'Curating augmentation and synthetic overlays to simulate edge-case smoke patterns',
      'Optimising inference for real-time alerts while preserving accuracy',
      'Establishing drift monitoring across live camera feeds'
    ],
    tech: ['PyTorch', 'YOLOv8', 'OpenCV', 'Weights & Biases', 'Docker'],
    github: 'https://github.com/millind-yadav/fire-detection',
    demo: 'https://firewatch.ai'
  }
];

const education = [
  {
    institution: 'University of Bristol',
    degree: 'MSc Data Science',
    dates: 'Sep 2024 — Sep 2025',
    location: 'Bristol, U.K.',
    highlights: [
      'Key modules: AI & ML, Text Analytics, Natural Language Understanding, Hadoop & Spark, Visual Analytics, Cloud Computing.',
      'Fine-tuned BERT-family models for NLP tasks and deployed AWS text-processing applications for near real-time analysis.',
      'Explored domain-specific NLP pipelines to improve technical document understanding and compliance search.'
    ]
  },
  {
    institution: 'Priyadarshini College of Engineering',
    degree: 'BE Computer Technology',
    dates: 'Jun 2019 — Jul 2022',
    location: 'Nagpur, IN',
    highlights: [
      'Graduated with CGPA 9.02/10 while building strong foundations in Data Structures & Algorithms, Databases, Statistics, and Machine Learning.',
      'Delivered hands-on coursework and labs spanning software engineering, automation, and analytics workflows.'
    ]
  }
];

const experience = [
  {
    title: 'AI Engineer Intern · Brothers Drinks Co. Ltd',
    dates: 'Jun 2025 — Aug 2025',
    location: 'Bristol, U.K.',
    bullets: [
      'Shipped an internal LangChain + FastAPI assistant that now answers 500+ weekly knowledge queries and saves 10 hours per teammate.',
      'Designed enablement playbooks that onboarded 20+ staff and maintained 85%+ adoption with measurable ROI metrics.',
      'Fine-tuned Mistral 7B with QLoRA and architected a monitored embedding pipeline across 50K+ documents for grounded responses.'
    ]
  },
  {
    title: 'Data Engineer · Onit India Pvt Ltd (Legal Tech)',
    dates: 'Mar 2023 — Aug 2024',
    location: 'Pune, IN',
    bullets: [
      'Built GCP-based PySpark and BigQuery platform processing 10M+ daily legal workflow records, accelerating analytics by 40%.',
      'Partnered with legal operations and analytics teams to align AI opportunities, KPIs, and ROI across regulated environments.',
      'Automated CI/CD and testing with GitHub Actions and PyTest, cutting production regressions by 80%.'
    ]
  },
  {
    title: 'Data Analyst Intern · NsembleAI',
    dates: 'Oct 2021 — Mar 2022',
    location: 'Nagpur, IN',
    bullets: [
      'Improved PPE detection accuracy by 15% using YOLO and OpenCV with curated augmentation pipelines.',
      'Produced evaluation tooling to track precision, recall, and F1, guiding rapid model iteration.',
      'Delivered lightweight real-time monitoring that reduced manual compliance oversight.'
    ]
  }
];

const socials = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/millind-yadav' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/millindyadav' },
  { id: 'twitter', label: 'Twitter / X', href: 'https://x.com/47e59733c30549f?s=21' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/miilliindd?igsh=bnZiaDJkeXc2ejRh&utm_source=qr' }
];

const contactEmail = 'milindyadav98@gmail.com';

const useTypewriter = (text, speed = 90, pause = 1800) => {
  const [output, setOutput] = useState('');

  useEffect(() => {
    let mounted = true;
    let index = 0;
    let timeout;

    const type = () => {
      if (!mounted) return;
      if (index <= text.length) {
        setOutput(text.slice(0, index));
        index += 1;
        timeout = window.setTimeout(type, speed);
      } else {
        timeout = window.setTimeout(() => {
          index = 0;
          setOutput('');
          type();
        }, pause);
      }
    };

    type();
    return () => {
      mounted = false;
      window.clearTimeout(timeout);
    };
  }, [text, speed, pause]);

  return output;
};

const NeuralNetworkBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotionQuery.matches) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      ctx.fillStyle = '#030517';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return undefined;
    }

    const pointer = { x: 0, y: 0, active: false };
    const nodes = [];
    const edgeMeta = new Map();

    let width = 0;
    let height = 0;
    let gradient;
    const settings = {
      nodeCount: 0,
      connectionDistance: 180
    };

    const seedNodes = () => {
      const count = width > 1600 ? 140 : width > 1200 ? 110 : width > 768 ? 90 : 70;
      settings.nodeCount = count;
      nodes.length = 0;
      for (let i = 0; i < count; i += 1) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          speed: 0.35 + Math.random() * 0.6,
          charge: 0.4 + Math.random() * 0.6,
          glow: 0
        });
      }
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#031128');
      gradient.addColorStop(0.45, '#060921');
      gradient.addColorStop(1, '#010109');

      settings.connectionDistance = Math.min(240, Math.max(150, Math.sqrt(width * height) * 0.11));
      seedNodes();
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const maxVelocity = 0.7;

    const drawFrame = () => {
      animationRef.current = requestAnimationFrame(drawFrame);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(1, 4, 14, 0.55)';
      ctx.fillRect(0, 0, width, height);

      const glow = ctx.createRadialGradient(width * 0.35, height * 0.4, 0, width * 0.35, height * 0.4, width * 0.7);
      glow.addColorStop(0, 'rgba(0, 246, 255, 0.18)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      const time = performance.now() * 0.001;
      const connectionDistance = settings.connectionDistance;

      nodes.forEach((node) => {
        node.x += node.vx * node.speed;
        node.y += node.vy * node.speed;

        node.vx += (Math.random() - 0.5) * 0.01;
        node.vy += (Math.random() - 0.5) * 0.01;

        const velocity = Math.hypot(node.vx, node.vy);
        if (velocity > maxVelocity) {
          const scale = maxVelocity / velocity;
          node.vx *= scale;
          node.vy *= scale;
        }

        if (pointer.active) {
          const dx = pointer.x - node.x;
          const dy = pointer.y - node.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 220) {
            const force = (1 - dist / 220) * 0.016;
            node.vx += dx * force;
            node.vy += dy * force;
            node.glow = Math.min(1, node.glow + 0.035);
          }
        }

        if (node.x < -50) node.x = width + 50;
        if (node.x > width + 50) node.x = -50;
        if (node.y < -50) node.y = height + 50;
        if (node.y > height + 50) node.y = -50;

        node.glow *= 0.94;
      });

      ctx.lineCap = 'round';

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.hypot(dx, dy);
          if (dist > connectionDistance) continue;

          const intensity = 1 - dist / connectionDistance;
          const alpha = 0.08 + intensity * 0.5;

          ctx.strokeStyle = `rgba(0, 248, 255, ${alpha})`;
          ctx.lineWidth = 0.6 + intensity * 2.1;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();

          node.glow = Math.min(1, node.glow + intensity * 0.025);
          other.glow = Math.min(1, other.glow + intensity * 0.025);

          const key = `${i}-${j}`;
          let meta = edgeMeta.get(key);
          if (!meta) {
            meta = { offset: Math.random(), speed: 0.3 + Math.random() * 0.55 };
            edgeMeta.set(key, meta);
          }

          const progress = (time * meta.speed + meta.offset) % 1;
          const pulseX = node.x + (other.x - node.x) * progress;
          const pulseY = node.y + (other.y - node.y) * progress;
          const pulseRadius = 1.6 + intensity * 4.4;

          const pulseGradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, pulseRadius * 3.2);
          pulseGradient.addColorStop(0, `rgba(170, 255, 255, ${0.65 + intensity * 0.3})`);
          pulseGradient.addColorStop(1, 'rgba(170, 255, 255, 0)');

          ctx.fillStyle = pulseGradient;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, pulseRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      nodes.forEach((node) => {
        const baseRadius = 2.3 + node.charge * 1.9;
        const glowRadius = baseRadius * (1.6 + node.glow * 1.7);

        const halo = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowRadius * 2.8);
        halo.addColorStop(0, `rgba(0, 246, 255, ${0.38 + node.charge * 0.45 + node.glow * 0.55})`);
        halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(195, 255, 255, ${0.82 + node.glow * 0.18})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, baseRadius * 0.85, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerMove);
    window.addEventListener('pointerup', handlePointerLeave);
    window.addEventListener('pointercancel', handlePointerLeave);
    window.addEventListener('pointerleave', handlePointerLeave);

    animationRef.current = requestAnimationFrame(drawFrame);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerLeave);
      window.removeEventListener('pointercancel', handlePointerLeave);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 h-full w-full"
      aria-hidden
    />
  );
};

const GlowingDivider = ({ color }) => (
  <div className="h-px w-32 opacity-60" style={{ background: color }} />
);

const SocialIcon = ({ id }) => {
  const baseProps = {
    'aria-hidden': true,
    focusable: false,
    className: 'h-4 w-4 md:h-5 md:w-5',
    viewBox: '0 0 24 24'
  };

  switch (id) {
    case 'github':
      return (
        <svg {...baseProps} fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.112.82-.263.82-.58 0-.285-.01-1.04-.016-2.04-3.337.726-4.043-1.61-4.043-1.61-.545-1.387-1.332-1.757-1.332-1.757-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.303 3.492.997.108-.775.418-1.305.762-1.604-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.469-2.381 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.47 11.47 0 0 1 3.003-.404c1.02.005 2.043.137 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.177.77.839 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.373.823 1.103.823 2.223 0 1.606-.015 2.898-.015 3.287 0 .318.216.693.825.575C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...baseProps} fill="currentColor">
          <path d="M22.225 0H1.771C.792 0 0 .774 0 1.728v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.27V1.728C24 .774 23.2 0 22.225 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.433a2.03 2.03 0 1 1 0-4.06 2.03 2.03 0 0 1 0 4.06zM20.452 20.452h-3.5v-5.612c0-1.338-.027-3.06-1.865-3.06-1.868 0-2.155 1.46-2.155 2.97v5.702h-3.5V9h3.36v1.561h.048c.468-.885 1.61-1.819 3.315-1.819 3.547 0 4.297 2.337 4.297 5.373v6.337z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg {...baseProps} fill="currentColor">
          <path d="M2 3.5 10.75 12 2 20.5h3.4l6.85-6.63L18.9 20.5H22l-8.73-8.5L22 3.5h-3.4l-6.3 6.06L5.1 3.5H2z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...baseProps} fill="currentColor">
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3.5A5 5 0 1 1 7 12.5a5 5 0 0 1 5-5zm0 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm6.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
        </svg>
      );
    default:
      return null;
  }
};

const App = () => {
  const typedHeadline = useTypewriter(typingHeadline);
  const [activeSkill, setActiveSkill] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [copied, setCopied] = useState(false);
  const [portraitAvailable, setPortraitAvailable] = useState(true);
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700&family=Roboto+Mono:wght@300;400;500&display=swap';
    document.head.appendChild(fontLink);

    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      :root {
        color-scheme: dark;
      }
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      @keyframes glowPulse {
        0%, 100% { filter: drop-shadow(0 0 6px rgba(0, 246, 255, 0.8)); }
        50% { filter: drop-shadow(0 0 16px rgba(255, 0, 255, 0.6)); }
      }
      @keyframes bootGlow {
        0%, 100% { text-shadow: 0 0 10px rgba(0, 246, 255, 0.75), 0 0 22px rgba(58, 255, 207, 0.45); }
        50% { text-shadow: 0 0 22px rgba(0, 246, 255, 0.95), 0 0 34px rgba(58, 255, 207, 0.65); }
      }
      @keyframes bootScan {
        0% { transform: translateY(-120%); opacity: 0; }
        35% { opacity: 0.5; }
        100% { transform: translateY(120%); opacity: 0; }
      }
      @keyframes bootBar {
        0% { transform: translateX(-105%) scaleX(0.4); }
        50% { transform: translateX(5%) scaleX(1); }
        100% { transform: translateX(105%) scaleX(0.4); }
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(styleTag);
    };
  }, []);

  useEffect(() => {
    if (!isBooting) return undefined;
    const timer = window.setTimeout(() => setIsBooting(false), 2500);
    return () => window.clearTimeout(timer);
  }, [isBooting]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Clipboard unavailable', error);
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-[#e0e0e0]"
      style={{ fontFamily: "'Roboto Mono', monospace" }}
    >
      {isBooting && (
        <div className="pointer-events-auto fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#01020f]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,246,255,0.08),_rgba(0,0,0,0.88)_70%)]" />
          <div className="absolute inset-0 opacity-70 mix-blend-screen">
            <div className="absolute inset-x-0 top-0 h-32 animate-[bootScan_1.9s_ease-in-out_infinite] bg-gradient-to-b from-cyan-400/20 via-cyan-400/5 to-transparent" />
          </div>
          <div className="relative flex flex-col items-center gap-8 text-center">
            <p
              className="text-sm uppercase tracking-[0.8em] text-[#7dffff] animate-[bootGlow_1.35s_ease-in-out_infinite]"
              style={{ letterSpacing: '0.65em' }}
            >
              Loading_Neural_Interface
            </p>
            <div className="relative h-1.5 w-72 overflow-hidden rounded-full bg-[#022835]/60">
              <div className="absolute inset-y-0 left-0 w-1/3 animate-[bootBar_1.8s_cubic-bezier(0.65,0,0.35,1)_infinite] rounded-full bg-[#00f6ff] shadow-[0_0_25px_rgba(0,246,255,0.75)]" />
            </div>
            <p className="text-[0.65rem] uppercase tracking-[0.55em] text-white/60">Establishing secure connection</p>
            <button
              type="button"
              onClick={() => setIsBooting(false)}
              className="rounded-full border border-[#00f6ff]/40 bg-[#00f6ff]/10 px-6 py-2 text-[0.55rem] uppercase tracking-[0.5em] text-[#b6ffff] transition hover:bg-[#00f6ff]/20"
            >
              Bypass Boot Sequence
            </button>
          </div>
        </div>
      )}
      <div className="fixed inset-0 -z-20">
        <NeuralNetworkBackground />
      </div>
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[#02010f]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020017]/18 to-[#010109]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,246,255,0.35),_transparent_62%)] opacity-85 mix-blend-screen" />
      </div>
      <div className="relative z-10 bg-gradient-to-b from-[#02010f]/80 via-transparent to-[#010109]/90">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span
              className="grid h-12 w-12 place-content-center rounded-full border border-[#00f6ff]/50 bg-white/5 text-xl text-[#00f6ff] shadow-[0_0_20px_rgba(0,246,255,0.35)]"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              MY
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#39ff14]/80">Generative AI & Data Platforms</p>
              <p className="text-sm text-white/70">Building Responsible LegalTech Intelligence</p>
            </div>
          </motion.div>
          <nav className="hidden gap-8 text-xs uppercase tracking-[0.3em] text-white/60 md:flex">
            <a href="#about" className="transition hover:text-[#00f6ff]">About</a>
            <a href="#skills" className="transition hover:text-[#00f6ff]">Skills</a>
            <a href="#projects" className="transition hover:text-[#00f6ff]">Projects</a>
            <a href="#experience" className="transition hover:text-[#00f6ff]">Experience</a>
            <a href="#education" className="transition hover:text-[#00f6ff]">Education</a>
            <a href="#contact" className="transition hover:text-[#00f6ff]">Contact</a>
          </nav>
        </header>

        <main className="mx-auto flex max-w-6xl flex-col gap-32 px-6 pb-24">
          <motion.section
            id="hero"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-[70vh] flex-col justify-center pt-10 md:pt-16"
          >
            <div
              className="absolute inset-x-0 top-24 -z-10 mx-auto h-64 w-64 rounded-full blur-3xl md:h-96 md:w-96"
              style={{
                background: 'radial-gradient(circle at center, rgba(0,246,255,0.45), transparent 60%)'
              }}
            />
            <div className="relative flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.4em] text-[#ff00ff]/80">// Generative AI Specialist</p>
                <div
                  className="mt-6 text-4xl font-semibold text-white md:text-6xl"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  <div className="relative inline-block">
                    <span className="relative z-10 drop-shadow-[0_0_20px_rgba(0,246,255,0.45)]">{heroName}</span>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 translate-x-1 text-[#ff00ff]/60 opacity-70 mix-blend-screen"
                    >
                      {heroName}
                    </span>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -translate-x-1 translate-y-1 text-[#00f6ff]/70 opacity-70 mix-blend-screen"
                    >
                      {heroName}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-lg text-white/70 md:text-xl">
                  {typedHeadline}
                  <span className="animate-pulse text-[#39ff14]">|</span>
                </p>
                <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">{summaryIntro}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">{summarySecondary}</p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#projects"
                    className="rounded-full border border-[#00f6ff] bg-[#00f6ff]/10 px-8 py-3 text-sm uppercase tracking-[0.3em] text-[#00f6ff] transition hover:bg-[#00f6ff]/20"
                  >
                    Explore My Work
                  </a>
                  <a
                    href="#contact"
                    className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm uppercase tracking-[0.3em] text-white/70 transition hover:border-[#ff00ff]/50 hover:text-white"
                  >
                    Collaborate
                  </a>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-black/10 backdrop-blur-md md:mx-0">
                {portraitAvailable ? (
                  <img
                    src="/milind-portrait.jpg"
                    alt="Portrait of Milind Yadav"
                    className="aspect-[4/5] w-full object-cover"
                    onError={() => setPortraitAvailable(false)}
                  />
                ) : (
                  <div className="grid aspect-[4/5] place-content-center bg-gradient-to-br from-[#050519] via-[#0a0a1a] to-[#151533] text-center text-xs uppercase tracking-[0.35em] text-white/50">
                    Add your portrait at <br /> public/milind-portrait.jpg
                  </div>
                )}
              </div>
            </div>
          </motion.section>

          <motion.section
            id="about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid gap-12 md:grid-cols-[1.1fr_1.4fr] md:items-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl border border-[#00f6ff]/40 bg-white/5 backdrop-blur-md" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050515]/70">
                <div
                  className="h-80 bg-cover bg-center opacity-80 md:h-[26rem]"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80')"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#000010]/20 via-transparent to-[#00f6ff]/10" />
                <div className="relative p-6 text-xs uppercase tracking-[0.3em] text-white/50">
                  
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#39ff14]/80">// About Me</p>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Crafting neural interfaces that feel human, adaptive, and alive.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/70 md:text-base">
                <p>
                  I deliver production-grade AI that legal and operations teams can rely on—whether that is a contract review copilot, an internal knowledge assistant, or a data platform fuelling analytics. My workflow spans discovery, rapid prototyping, and alignment with KPIs that stakeholders care about.
                </p>
                <p>
                  Responsible adoption is table stakes. I document, observe, and enable users so AI products ship with clarity and trust. Recent wins include rolling out a LangChain assistant used company-wide, and building data quality frameworks that keep downstream models stable.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Generative AI', 'LLMs', 'RAG Systems', 'MLOps', 'Data Engineering', 'Responsible AI'].map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            id="skills"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#00f6ff]/70">// Neural Skill Constellation</p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  Interconnected expertise for mission-critical AI systems
                </h2>
              </div>
              <GlowingDivider color="linear-gradient(90deg, rgba(0,246,255,0.6), rgba(255,0,255,0.4))" />
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {Object.entries(skillMatrix).map(([category, items]) => {
                const isActive = activeSkill === category;
                return (
                  <motion.div
                    key={category}
                    onMouseEnter={() => setActiveSkill(category)}
                    onMouseLeave={() => setActiveSkill(null)}
                    whileHover={{ y: -6 }}
                    className={`relative overflow-hidden rounded-3xl border px-6 py-6 transition backdrop-blur-xl ${
                      isActive
                        ? 'border-[#00f6ff] bg-[#00f6ff]/10 shadow-[0_0_35px_rgba(0,246,255,0.35)]'
                        : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <div className="absolute right-6 top-6 h-16 w-16 rounded-full border border-white/10 bg-gradient-to-br from-[#00f6ff]/30 to-transparent blur-2xl" />
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">{category}</p>
                    <ul className="mt-4 space-y-2 text-sm text-white/70">
                      {items.map((item) => (
                        <li
                          key={item}
                          className={`flex items-center gap-2 ${
                            isActive ? 'text-white' : 'text-white/70'
                          }`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#39ff14]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#ff00ff]/70">// Signature Projects</p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  Immersive systems engineered for intelligence at scale
                </h2>
              </div>
              <GlowingDivider color="linear-gradient(90deg, rgba(255,0,255,0.5), rgba(57,255,20,0.6))" />
            </div>
            <div className="mt-10 overflow-x-auto pb-3 hide-scrollbar">
              <div className="flex min-w-full gap-6">
                {projects.map((project) => (
                  <motion.div
                    key={project.title}
                    whileHover={{ rotateX: -4, rotateY: 6, y: -12 }}
                    transition={{ type: 'spring', stiffness: 180, damping: 15 }}
                    className="group relative min-w-[320px] max-w-sm flex-1 cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00f6ff]/5 to-[#ff00ff]/10 opacity-0 transition group-hover:opacity-100" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#39ff14]/80">Feature Project</p>
                        <h3 className="mt-3 text-2xl font-semibold text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                          {project.title}
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-white/70">{project.description}</p>
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <button
                        type="button"
                        className="mt-6 self-start rounded-full border border-[#00f6ff]/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#00f6ff] transition hover:bg-[#00f6ff]/10"
                      >
                        Open Case Study
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <AnimatePresence>
              {selectedProject && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-40 flex items-center justify-center bg-[#02010fcc]/80 px-4 backdrop-blur-md"
                  onClick={() => setSelectedProject(null)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 160, damping: 18 }}
                    className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-[#00f6ff]/40 bg-[#06061a]/95 p-8 text-sm text-white/70 shadow-[0_0_45px_rgba(0,246,255,0.25)]"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="absolute right-6 top-6 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60 hover:border-[#ff00ff]/50 hover:text-[#ff00ff]"
                    >
                      Close
                    </button>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#00f6ff]/80">Case Study</p>
                    <h3 className="mt-2 text-3xl font-semibold text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                      {selectedProject.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-white/80">{selectedProject.description}</p>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">My Role</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">{selectedProject.role}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Key Challenges</p>
                        <ul className="mt-2 space-y-2 text-sm text-white/70">
                          {selectedProject.challenges.map((challenge) => (
                            <li key={challenge} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff00ff]" />
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/15 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/70 transition hover:border-[#00f6ff] hover:text-[#00f6ff]"
                      >
                        GitHub Repository
                      </a>
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[#39ff14]/40 px-5 py-2 text-xs uppercase tracking-[0.3em] text-[#39ff14] transition hover:bg-[#39ff14]/10"
                      >
                        Live Demo
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>

          <motion.section
            id="experience"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#39ff14]/70">// Experience Timeline</p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  Leading high-stakes AI initiatives from inception to impact
                </h2>
              </div>
              <GlowingDivider color="linear-gradient(90deg, rgba(57,255,20,0.6), rgba(0,246,255,0.4))" />
            </div>
            <div className="relative mt-12 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-[#00f6ff] before:via-[#39ff14] before:to-transparent md:before:left-1/2">
              <div className="space-y-12 md:space-y-16">
                {experience.map((item, index) => {
                  const alignRight = index % 2 === 0;
                  const cardAlign = alignRight
                    ? 'md:ml-auto md:pl-12 md:pr-6'
                    : 'md:mr-auto md:pl-6 md:pr-12';
                  const connectorAlign = alignRight
                    ? 'left-1/2 bg-gradient-to-r from-[#06f5ff] via-[#06f5ff]/60 to-transparent'
                    : 'left-1/2 -translate-x-full bg-gradient-to-l from-[#06f5ff] via-[#06f5ff]/60 to-transparent';

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: alignRight ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full"
                    >
                      <span className="absolute left-4 top-8 h-4 w-4 -translate-y-1/2 -translate-x-1/2 rounded-full border-2 border-[#06f5ff]/80 bg-[#01101f] shadow-[0_0_22px_rgba(6,245,255,0.65)] transition md:left-1/2 md:-translate-x-1/2 md:hover:border-[#39ff14]/90 md:hover:shadow-[0_0_30px_rgba(57,255,20,0.6)]" />
                      <span className={`hidden md:block absolute top-8 h-px w-14 -translate-y-1/2 ${connectorAlign}`} />
                      <div
                        className={`relative ml-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition md:ml-0 md:w-[calc(50%-2rem)] ${cardAlign}`}
                      >
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">{item.dates} · {item.location}</p>
                        <h3 className="mt-3 text-2xl font-semibold text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                          {item.title}
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm text-white/70">
                          {item.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff00ff]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          <motion.section
            id="education"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#00f6ff]/70">// Academic Formation</p>
                <h2
                  className="mt-3 text-3xl font-semibold text-white md:text-4xl"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  Education that grounds responsible AI practice
                </h2>
              </div>
              <GlowingDivider color="linear-gradient(90deg, rgba(0,246,255,0.6), rgba(57,255,20,0.45))" />
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {education.map((item) => (
                <motion.div
                  key={item.institution}
                  whileHover={{ y: -6 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00f6ff]/5 to-[#39ff14]/10 opacity-0 transition hover:opacity-100" />
                  <div className="relative flex flex-col gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/50">{item.dates} · {item.location}</p>
                      <h3
                        className="mt-2 text-2xl font-semibold text-white"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                      >
                        {item.degree}
                      </h3>
                      <p className="text-sm uppercase tracking-[0.25em] text-[#00f6ff]/70">{item.institution}</p>
                    </div>
                    <ul className="space-y-3 text-sm leading-relaxed text-white/70">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff00ff]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="contact"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:p-16">
              <p className="text-xs uppercase tracking-[0.4em] text-[#00f6ff]/80">Get In Touch</p>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                Let us co-create the next intelligent frontier.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                I love partnering with legaltech, operations, and platform teams who want trustworthy generative AI, resilient data foundations, and measurable outcomes. Share your roadmap and let us co-design the release plan.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="rounded-full border border-[#39ff14]/60 bg-[#39ff14]/10 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#39ff14] transition hover:bg-[#39ff14]/20"
                >
                  {copied ? 'Email Copied' : contactEmail}
                </button>
                <div className="flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.3em] text-white/70 transition hover:border-[#ff00ff]/40 hover:text-[#ff00ff]"
                    >
                      <SocialIcon id={social.id} />
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        </main>
        <footer className="mx-auto mt-20 flex max-w-6xl flex-col items-center gap-4 px-6 pb-12 text-xs uppercase tracking-[0.3em] text-white/40">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <p>© {new Date().getFullYear()} Milind Yadav · Neural Futures Crafted with Empathy</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
