import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, CheckCircle2, FileText, Brain, CheckCheck, MessageSquareCode, ArrowRight, Sparkles } from 'lucide-react';

interface StageData {
  id: string;
  name: string;
  stepNum: string;
  agentRole: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  headline: string;
  details: {
    label: string;
    value: string;
  }[];
  outputPreview: {
    type: 'tags' | 'score' | 'diff' | 'questions';
    data: any;
  };
}

const STAGES: StageData[] = [
  {
    id: 'jd-analysis',
    name: 'JD Analysis',
    stepNum: '01',
    agentRole: 'Requirements & Entity Extraction Agent',
    icon: FileText,
    tag: 'NER Extraction',
    headline: 'Deconstructing role constraints & required engineering skills',
    details: [
      { label: 'Target Role', value: 'Senior AI / Systems Engineer' },
      { label: 'Extraction Engine', value: 'LLM Function Calling' },
      { label: 'Processing Time', value: '280ms' },
    ],
    outputPreview: {
      type: 'tags',
      data: ['Python', 'FastAPI', 'sentence-transformers', 'Vector Embeddings', 'PostgreSQL', 'Docker', 'System Design'],
    },
  },
  {
    id: 'resume-matching',
    name: 'Resume Match',
    stepNum: '02',
    agentRole: 'Semantic Embedding & Similarity Scorer',
    icon: Brain,
    tag: 'Vector Similarity',
    headline: 'Evaluating semantic similarity vector embeddings',
    details: [
      { label: 'Embedding Model', value: 'all-MiniLM-L6-v2' },
      { label: 'Distance Metric', value: 'Cosine Similarity (0.942)' },
      { label: 'Match Confidence', value: 'High Confidence' },
    ],
    outputPreview: {
      type: 'score',
      data: { score: 94.2, label: 'Optimal Candidate Match', gaps: '0 Critical Gaps Found' },
    },
  },
  {
    id: 'resume-tailoring',
    name: 'Resume Tailor',
    stepNum: '03',
    agentRole: 'Dynamic ATS & Impact Synthesis Agent',
    icon: CheckCheck,
    tag: 'ATS Optimization',
    headline: 'Dynamically rewriting experience bullets with quantified impact',
    details: [
      { label: 'Keywords Added', value: 'Vector Search, Multi-Agent' },
      { label: 'Impact Factor', value: '+42% Quantified' },
      { label: 'ATS Score', value: '98 / 100' },
    ],
    outputPreview: {
      type: 'diff',
      data: {
        original: 'Built AI model pipeline for parsing job profiles and matching resumes.',
        tailored: 'Architected autonomous multi-agent pipeline using sentence-transformers and FastAPI, boosting screening accuracy to 94.2% while reducing latency by 42%.',
      },
    },
  },
  {
    id: 'interview-prep',
    name: 'Interview Prep',
    stepNum: '04',
    agentRole: 'Targeted Technical Interview Simulator',
    icon: MessageSquareCode,
    tag: 'Mock Simulator',
    headline: 'Generating scenario questions tailored to candidate-JD delta',
    details: [
      { label: 'Questions Generated', value: '4 Tailored Prompts' },
      { label: 'Focus Areas', value: 'Vector Latency & State Recovery' },
      { label: 'Rubric Evaluation', value: 'Active' },
    ],
    outputPreview: {
      type: 'questions',
      data: [
        'How would you scale sentence-transformer vector inference for 10k concurrent applicants?',
        'Explain your agent orchestration error recovery strategy when an external LLM call times out.',
      ],
    },
  },
];

export const CareerCopilotPipeline: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  // Pause simulation when section is offscreen
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setInView(entries[0]?.isIntersecting ?? true);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Sequential progression timer (advances every 4.8s if playing & in view)
  const advanceStage = useCallback(() => {
    setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
  }, []);

  useEffect(() => {
    if (!isPlaying || !inView) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = window.setInterval(() => {
      advanceStage();
    }, 4800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, inView, advanceStage]);

  const handleStageSelect = (index: number) => {
    setActiveStageIndex(index);
  };

  const handleReset = () => {
    setActiveStageIndex(0);
    setIsPlaying(true);
  };

  const currentStage = STAGES[activeStageIndex];
  const CurrentIcon = currentStage.icon;

  return (
    <div
      ref={containerRef}
      className="mt-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl shadow-2xl overflow-hidden"
    >
      {/* Top Controls & Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-white/[0.06] bg-black/30">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#E2C08D] animate-pulse" />
          <span className="font-mono text-xs font-medium text-[#F8FAFC] tracking-wider uppercase">
            Multi-Agent Pipeline Progression
          </span>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#94A3B8] bg-white/[0.04] border border-white/[0.06]">
            Sequential Orchestrator
          </span>
        </div>

        {/* Skiper-UI Tactile Simulation Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-[#E2E8F0] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all cursor-pointer"
            title={isPlaying ? 'Pause simulation' : 'Resume simulation'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3 text-[#E2C08D]" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-[#34D399]" />
                <span>Run</span>
              </>
            )}
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-full text-[#94A3B8] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-pointer"
            title="Restart pipeline sequence"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Stage Flow Indicator Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-4 p-2 gap-2 bg-black/20 border-b border-white/[0.06]">
        {STAGES.map((stage, idx) => {
          const isActive = idx === activeStageIndex;
          const isDone = idx < activeStageIndex;
          const StageIcon = stage.icon;

          return (
            <button
              key={stage.id}
              onClick={() => handleStageSelect(idx)}
              className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-white/[0.07] border border-white/20 shadow-sm'
                  : isDone
                  ? 'bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04]'
                  : 'bg-transparent border border-transparent opacity-60 hover:opacity-100 hover:bg-white/[0.02]'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-mono font-medium transition-all ${
                  isActive
                    ? 'bg-[#F8FAFC] text-black shadow'
                    : isDone
                    ? 'bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30'
                    : 'bg-white/[0.04] text-[#94A3B8] border border-white/5'
                }`}
              >
                {isDone ? <CheckCircle2 className="w-3.5 h-3.5" /> : <StageIcon className="w-3.5 h-3.5" />}
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                  Step {stage.stepNum}
                </span>
                <span className="block text-xs font-medium text-[#F8FAFC] truncate">
                  {stage.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Data Presentation (Replacing fake terminal with clean data visualizer) */}
      <div className="p-6 space-y-6">
        
        {/* Stage Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#E2C08D]">
              <CurrentIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#E2C08D]">
                  {currentStage.tag}
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">· {currentStage.agentRole}</span>
              </div>
              <h4 className="text-base sm:text-lg font-display font-semibold text-[#F8FAFC] tracking-tight">
                {currentStage.headline}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/10 shrink-0">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            <span>Active Pipeline Stage {activeStageIndex + 1} of 4</span>
          </div>
        </div>

        {/* Dynamic Stage Output Visualizer (Clean, restrained data presentation) */}
        <div className="p-5 rounded-xl bg-black/30 border border-white/[0.06]">
          
          {/* Stage 1: Extracted Skills & Entities */}
          {currentStage.outputPreview.type === 'tags' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span>Parsed Technical Attributes:</span>
                <span className="text-[#34D399] font-medium">14 Entities Extracted</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {(currentStage.outputPreview.data as string[]).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-[#E2E8F0]"
                  >
                    <Sparkles className="w-3 h-3 text-[#E2C08D]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Stage 2: Cosine Similarity Vector Alignment */}
          {currentStage.outputPreview.type === 'score' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span>Cosine Similarity Score:</span>
                <span className="text-[#34D399] font-bold text-sm">
                  {currentStage.outputPreview.data.score}%
                </span>
              </div>
              <div className="w-full h-2 bg-white/[0.08] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#E2C08D] to-[#34D399] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${currentStage.outputPreview.data.score}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span className="text-white font-medium">{currentStage.outputPreview.data.label}</span>
                <span className="text-[#34D399]">{currentStage.outputPreview.data.gaps}</span>
              </div>
            </div>
          )}

          {/* Stage 3: Experience Bullet Transformation */}
          {currentStage.outputPreview.type === 'diff' && (
            <div className="space-y-3 text-xs font-mono">
              <div className="text-[11px] text-[#94A3B8]">ATS Bullet Transformation:</div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[#94A3B8] flex items-start gap-2.5">
                <span className="text-[#64748B] font-bold">Initial:</span>
                <span className="line-through opacity-70 leading-relaxed">
                  {currentStage.outputPreview.data.original}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.04] border border-emerald-500/25 text-[#E2E8F0] flex items-start gap-2.5">
                <span className="text-[#34D399] font-bold">Tailored:</span>
                <span className="leading-relaxed font-medium">
                  {currentStage.outputPreview.data.tailored}
                </span>
              </div>
            </div>
          )}

          {/* Stage 4: Probing Interview Scenarios */}
          {currentStage.outputPreview.type === 'questions' && (
            <div className="space-y-3">
              <div className="text-xs font-mono text-[#94A3B8]">Generated Technical Inquiries:</div>
              {(currentStage.outputPreview.data as string[]).map((q, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-[#E2E8F0] leading-relaxed"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#E2C08D] shrink-0 mt-0.5" />
                  <span>{q}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Live Stage Metadata Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {currentStage.details.map((item) => (
            <div key={item.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <span className="block text-[10px] font-mono text-[#64748B] uppercase tracking-wider">{item.label}</span>
              <span className="block text-xs font-mono font-medium text-[#F8FAFC] truncate mt-0.5">{item.value}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
