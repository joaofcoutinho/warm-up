"use client";

import { useEffect, useState } from "react";
import { EVENT_DATE } from "@/lib/constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className="min-w-[2ch] text-center text-lg font-bold text-gold sm:text-xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] uppercase tracking-wider text-white/50 sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(EVENT_DATE));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(EVENT_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const t = timeLeft ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div className="fixed top-0 left-0 z-50 w-full border-b border-gold/15 bg-navy-dark/95 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-center gap-3 px-4 sm:gap-5">
        <span className="hidden text-xs font-semibold uppercase tracking-widest text-white/60 sm:block">
          Faltam
        </span>
        <div className="flex items-center gap-2 sm:gap-3">
          <TimeUnit value={t.days} label="d" />
          <span className="text-gold/40">:</span>
          <TimeUnit value={t.hours} label="h" />
          <span className="text-gold/40">:</span>
          <TimeUnit value={t.minutes} label="m" />
          <span className="text-gold/40">:</span>
          <TimeUnit value={t.seconds} label="s" />
        </div>
        <span className="hidden text-xs font-semibold uppercase tracking-widest text-white/60 sm:block">
          para o Warm-Up Day
        </span>
        <a
          href="#ingressos"
          className="ml-2 hidden rounded bg-gold px-3 py-1 text-xs font-bold uppercase text-navy-dark transition-all hover:brightness-110 sm:block"
        >
          Inscreva-se
        </a>
      </div>
    </div>
  );
}
