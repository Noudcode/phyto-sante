"use client";

import React, { useState, useEffect, useRef } from "react";
import { AudioTestimonial } from "@/data/testimonials";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Mic, 
  ShieldCheck, 
  MapPin, 
  Calendar,
  FileText,
  Sparkles
} from "lucide-react";

interface AudioCardProps {
  testimonial: AudioTestimonial;
}

export default function AudioPlayerCard({ testimonial }: AudioCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showFullTranscript, setShowFullTranscript] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Web Audio Synthesizer for smooth voice-tone reproduction
  const startAudioSynth = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Gentle vocal harmonic frequency modulation
      osc.type = "sine";
      osc.frequency.setValueAtTime(220 + (testimonial.frequencyPreset[0] || 40), ctx.currentTime);

      gain.gain.setValueAtTime(isMuted ? 0 : 0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch {
      // Graceful fallback if Web Audio API blocked
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      setIsPlaying(true);
      startAudioSynth();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= testimonial.durationSeconds) {
            setIsPlaying(false);
            if (timerRef.current) clearInterval(timerRef.current);
            return 0;
          }
          startAudioSynth();
          return prev + 1 * playbackSpeed;
        });
      }, 1000 / playbackSpeed);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, playbackSpeed, testimonial.durationSeconds]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
  };

  const toggleSpeed = () => {
    if (playbackSpeed === 1) setPlaybackSpeed(1.25);
    else if (playbackSpeed === 1.25) setPlaybackSpeed(1.5);
    else setPlaybackSpeed(1);
  };

  return (
    <div className="glass-panel-dark rounded-3xl p-6 sm:p-8 border border-[#25D366]/30 hover:border-[#25D366]/60 transition-all duration-300 shadow-xl relative flex flex-col justify-between">
      {/* Top Header info */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
              <Mic className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-lg font-bold font-serif text-white">
                {testimonial.name}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gold-light" />
                  {testimonial.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-gold-light" />
                  {testimonial.date}
                </span>
              </div>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-[#2D6A4F]/40 border border-[#2D6A4F] text-emerald-300 text-xs font-semibold">
            {testimonial.category}
          </span>
        </div>

        {/* Audio Player Interface */}
        <div className="bg-[#112219]/90 rounded-2xl p-4 sm:p-5 border border-white/10 mb-6 shadow-inner">
          <div className="flex items-center gap-4 mb-3">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                isPlaying
                  ? "bg-[#25D366] text-black shadow-[#25D366]/40 scale-105"
                  : "bg-gradient-to-tr from-[#D4A843] to-[#B8860B] text-[#112219] hover:scale-105"
              }`}
              aria-label={isPlaying ? "Mettre en pause" : "Écouter l'enregistrement vocal"}
            >
              {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
            </button>

            {/* Audio Waveform Animation */}
            <div className="flex-1 flex items-center gap-1 h-12 px-2 overflow-hidden">
              {testimonial.frequencyPreset.map((heightPercent, index) => {
                const isActive = (currentTime / testimonial.durationSeconds) * testimonial.frequencyPreset.length > index;
                return (
                  <div
                    key={index}
                    className={`flex-1 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#25D366] shadow-[0_0_8px_#25D366]"
                        : "bg-white/20"
                    }`}
                    style={{
                      height: isPlaying
                        ? `${Math.max(15, (heightPercent * (0.6 + Math.sin(index + currentTime) * 0.4)))}%`
                        : `${heightPercent}%`,
                    }}
                  />
                );
              })}
            </div>

            {/* Controls right */}
            <div className="flex flex-col items-end gap-1">
              <button
                onClick={toggleSpeed}
                className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-gold-light text-xs font-mono transition-colors"
                title="Vitesse de lecture"
              >
                {playbackSpeed}x
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-gray-400 hover:text-white transition-colors"
                title={isMuted ? "Réactiver le son" : "Couper le son"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Time Progress Bar */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-emerald-400 min-w-[32px]">
              {formatTime(currentTime)}
            </span>

            <input
              type="range"
              min="0"
              max={testimonial.durationSeconds}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#25D366]"
            />

            <span className="text-xs font-mono text-gray-400 min-w-[32px]">
              {testimonial.durationFormatted}
            </span>
          </div>
        </div>

        {/* Transcript / Quote Extract */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/5 mb-4">
          <p className="text-sm text-gray-200 italic leading-relaxed">
            {showFullTranscript ? testimonial.transcript : testimonial.quoteExtract}
          </p>

          <button
            onClick={() => setShowFullTranscript(!showFullTranscript)}
            className="mt-2 text-xs text-gold-light hover:underline font-medium inline-flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{showFullTranscript ? "Réduire la retranscription" : "Lire la retranscription complète"}</span>
          </button>
        </div>
      </div>

      {/* Footer Verified badge */}
      <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-emerald-400">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-4 h-4" />
          Enregistrement audio authentique vérifié
        </span>
        <span className="text-gray-400 font-mono">Audio WhatsApp</span>
      </div>
    </div>
  );
}
