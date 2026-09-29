import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, CheckCircle2, Terminal, ArrowRight, Sparkles, Brain, FileText, CheckCheck, MessageSquareCode } from 'lucide-react';

interface StageData {
  id: string;
  name: string;
  shortName: string;
  agentRole: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  headline: string;
  details: {
    label: string;
    value: string;
  }[];
  streamContent: string;
  outputPreview: {
    type: 'tags' | 'score' | 'diff' | 'questions';
    data: any;
  };
}

const STAGES: StageData[] = [
  {
    id: 'jd-analysis',
    name: 'JD Analysis',
    shortName: '01 JD',
    agentRole: 'Requirements & Entity Extraction Agent',
    icon: FileText,
    tag: 'NER & Parsing',
    headline: 'Deconstructing role constraints & required engineering skills',
    details: [
      { label: 'Target Role', value: 'Senior AI / Systems Engineer' },
      { label: 'Extraction Model', value: 'LLM Function Calling' },
      { label: 'Parsing Time', value: '280ms' },
    ],
    streamContent: 'Tokenizing job description... Extracted 14 skills, 3 domain constraints, and ATS compliance criteria.',
    outputPreview: {
      type: 'tags',
      data: ['Python', 'FastAPI', 'Sentence-Transformers', 'Vector Embeddings', 'PostgreSQL', 'Docker', 'System Design'],
    },
  },
  {
    id: 'resume-matching',
    name: 'Resume Match',
    shortName: '02 Match',
    agentRole: 'Semantic Embedding & Similarity Scorer',
    icon: Brain,
    tag: 'Vector Similarity',
    headline: 'Evaluating semantic similarity vector embeddings',
    details: [
      { label: 'Embedding Model', value: 'all-MiniLM-L6-v2' },
      { label: 'Distance Metric', value: 'Cosine Similarity (0.942)' },
      { label: 'Match Confidence', value: 'High Confidence' },
    ],
    streamContent: 'Comparing candidate embedding vectors with job requirement space. High affinity in applied AI & full-stack systems.',
    outputPreview: {
      type: 'score',
      data: { score: 94.2, label: 'Optimal Candidate Match', gaps: '0 Critical Gaps Found' },
    },
  },
  {
    id: 'resume-tailoring',
    name: 'Resume Tailor',
    shortName: '03 Tailor',
    agentRole: 'Dynamic ATS & Impact Synthesis Agent',
    icon: CheckCheck,
    tag: 'ATS Optimization',
    headline: 'Dynamically rewriting experience bullets with quantified impact',
    details: [
      { label: 'Keywords Added', value: 'Vector Search, Multi-Agent' },
      { label: 'Impact Factor', value: '+42% Quantified' },
      { label: 'ATS Score', value: '98 / 100' },
    ],
    streamContent: 'Rewriting candidate project bullet to align with JD priority verbs and verifiable performance metrics.',
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
    shortName: '04 Prep',
    agentRole: 'Targeted Technical Interview Simulator',
    icon: MessageSquareCode,
    tag: 'Mock Simulator',
    headline: 'Generating scenario questions tailored to candidate-JD delta',
    details: [
      { label: 'Questions Generated', value: '4 Tailored Prompts' },
      { label: 'Focus Areas', value: 'Vector Latency & State Machines' },
      { label: 'Rubric Evaluation', value: 'Active' },
    ],
    streamContent: 'Synthesizing technical interview probes addressing high-throughput vector retrieval and fault tolerance.',
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
  const [displayedText, setDisplayedText] = useState('');
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const streamTimerRef = useRef<number | null>(null);

  // Pause everything when section is offscreen
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Typing/Streaming text effect for the active stage
  useEffect(() => {
    if (!inView) return;

    const fullText = STAGES[activeStageIndex].streamContent;
    let charIndex = 0;
    setDisplayedText('');

    if (streamTimerRef.current) clearInterval(streamTimerRef.current);

    streamTimerRef.current = window.setInterval(() => {
      charIndex++;
      setDisplayedText(fullText.slice(0, charIndex));
      if (charIndex >= fullText.length) {
        if (streamTimerRef.current) clearInterval(streamTimerRef.current);
      }
    }, 20);

    return () => {
      if (streamTimerRef.current) clearInterval(streamTimerRef.current);
    };
  }, [activeStageIndex, inView]);

  // Sequential progression timer (advances every 4.5s if playing & in view)
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
    }, 4500);

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
      className="mt-6 rounded-2xl bg-[#080b11]/90 border border-white/10 shadow-2xl overflow-hidden"
    >
      {/* Top Console Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-white/[0.02] border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
          </span>
          <span className="font-mono text-xs font-semibold text-white tracking-wide">
            LIVE MULTI-AGENT PIPELINE
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.05] text-[#94A3B8] border border-white/10">
            DEMO PREVIEW • AUTONOMOUS
          </span>
        </div>

        {/* Play / Pause / Replay Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-[#94A3B8] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-pointer"
            title={isPlaying ? 'Pause simulation' : 'Resume simulation'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3 text-amber-400" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-[#4CE0B3]" />
                <span>Run</span>
              </>
            )}
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-md text-[#94A3B8] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-pointer"
            title="Restart pipeline sequence"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Stage Flow Indicator Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-4 p-2 gap-2 bg-black/40 border-b border-white/10">
        {STAGES.map((stage, idx) => {
          const isActive = idx === activeStageIndex;
          const isDone = idx < activeStageIndex;
          const StageIcon = stage.icon;

          return (
            <button
              key={stage.id}
              onClick={() => handleStageSelect(idx)}
              className={`flex items-center gap-2 p-2 rounded-xl text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-amber-500/15 border border-amber-500/40 shadow-[0_0_12px_rgba(251,191,36,0.15)]'
                  : isDone
                  ? 'bg-white/[0.03] border border-[#4CE0B3]/30 hover:bg-white/[0.06]'
                  : 'bg-white/[0.01] border border-white/5 opacity-60 hover:opacity-100 hover:bg-white/[0.03]'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-mono font-bold transition-all ${
                  isActive
                    ? 'bg-amber-500 text-black shadow-md'
                    : isDone
                    ? 'bg-[#4CE0B3]/20 text-[#4CE0B3]'
                    : 'bg-white/5 text-[#94A3B8]'
                }`}
              >
                {isDone ? <CheckCircle2 className="w-4 h-4" /> : <StageIcon className="w-3.5 h-3.5" />}
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] font-mono text-[#94A3B8] truncate leading-tight">
                  {stage.shortName}
                </span>
                <span className="block text-xs font-medium text-white truncate leading-snug">
                  {stage.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Live Output Card */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* Stage Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300">
              <CurrentIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  {currentStage.tag}
                </span>
                <span className="text-[10px] font-mono text-[#94A3B8]">• {currentStage.agentRole}</span>
              </div>
              <h4 className="text-base sm:text-lg font-display font-bold text-white tracking-tight">
                {currentStage.headline}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5 shrink-0">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Step {activeStageIndex + 1} of 4</span>
          </div>
        </div>

        {/* Live Streaming Terminal Snippet */}
        <div className="rounded-xl bg-black/60 border border-white/10 p-3.5 font-mono text-xs text-[#94A3B8] space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-[#64748B] pb-1 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>agent.execute(pipeline_id="cc-prod-{activeStageIndex + 1}")</span>
            </div>
            <span className="text-[10px] text-[#4CE0B3]">STREAM ACTIVE</span>
          </div>
          <p className="text-white/90 min-h-[36px] flex items-center gap-1 leading-relaxed">
            <span className="text-amber-400">&gt;</span>
            <span>{displayedText}</span>
            <span className="inline-block w-1.5 h-3.5 bg-amber-400 animate-pulse" />
          </p>
        </div>

        {/* Dynamic Stage Output Visualizer */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
          {currentStage.outputPreview.type === 'tags' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span>Extracted Entities &amp; Skills:</span>
                <span className="text-[#4CE0B3]">100% Parsed</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {(currentStage.outputPreview.data as string[]).map((tag, i) => (
                  <span
                    key={tag}
                    className="tag-chip text-xs font-mono bg-white/[0.05] border-white/15 text-white animate-in fade-in duration-300"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {currentStage.outputPreview.type === 'score' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span>Semantic Embedding Match:</span>
                <span className="text-emerald-400 font-bold text-sm">
                  {currentStage.outputPreview.data.score}%
                </span>
              </div>
              <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 via-[#8B7CFF] to-[#4CE0B3] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${currentStage.outputPreview.data.score}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span className="text-white font-medium">{currentStage.outputPreview.data.label}</span>
                <span className="text-[#4CE0B3]">{currentStage.outputPreview.data.gaps}</span>
              </div>
            </div>
          )}

          {currentStage.outputPreview.type === 'diff' && (
            <div className="space-y-2 text-xs font-mono">
              <div className="text-[11px] text-[#94A3B8]">ATS Tailoring Transformation:</div>
              <div className="p-2.5 rounded-lg bg-red-950/25 border border-red-500/30 text-red-300 flex items-start gap-2">
                <span className="text-red-400 font-bold">-</span>
                <span className="line-through opacity-80">{currentStage.outputPreview.data.original}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-950/25 border border-[#4CE0B3]/40 text-emerald-200 flex items-start gap-2">
                <span className="text-[#4CE0B3] font-bold">+</span>
                <span>{currentStage.outputPreview.data.tailored}</span>
              </div>
            </div>
          )}

          {currentStage.outputPreview.type === 'questions' && (
            <div className="space-y-2">
              <div className="text-xs font-mono text-[#94A3B8]">Targeted Interview Scenarios:</div>
              {(currentStage.outputPreview.data as string[]).map((q, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-black/40 border border-purple-500/30 text-xs font-mono text-white/90"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>{q}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Live Stage Metadata Chips */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
          {currentStage.details.map((item) => (
            <div key={item.label} className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="block text-[10px] font-mono text-[#94A3B8] truncate">{item.label}</span>
              <span className="block text-xs font-mono font-semibold text-white truncate">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
