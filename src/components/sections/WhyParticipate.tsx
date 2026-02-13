"use client";

import { useEffect, useRef, useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { WHY_PARTICIPATE } from "@/lib/constants";

export default function WhyParticipate() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (trackRef.current) observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper id="por-que-participar" withTopBorder>
      <h2 className="mb-4 text-center font-sans text-2xl font-light tracking-tight text-white sm:text-3xl lg:text-[2.5rem]">
        {WHY_PARTICIPATE.title}
      </h2>
      <div className="mx-auto mb-14 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
        <span className="h-1.5 w-1.5 rotate-45 border border-gold/60" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
      </div>

      {/* Horizontal scroll track */}
      <div ref={trackRef} className="-mx-4 overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:overflow-visible lg:px-0">
        <div className="relative mx-auto flex min-w-[900px] items-start gap-0 lg:min-w-0 lg:max-w-5xl">
          {WHY_PARTICIPATE.reasons.map((reason, i) => {
            const isLast = i === WHY_PARTICIPATE.reasons.length - 1;

            return (
              <div
                key={i}
                className="relative flex flex-1 flex-col items-center text-center"
              >
                {/* Number circle */}
                <div
                  className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-700 ${
                    visible
                      ? "border-gold bg-gold/15 shadow-[0_0_25px_rgba(177,140,84,0.2)]"
                      : "border-white/10 bg-transparent"
                  }`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  <span
                    className={`font-sans text-lg font-bold transition-all duration-700 ${
                      visible ? "text-gold" : "text-white/20"
                    }`}
                    style={{ transitionDelay: `${i * 200}ms` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Connecting line */}
                {!isLast && (
                  <div className="absolute left-[calc(50%+28px)] top-7 h-px right-[calc(-50%+28px)]">
                    <div
                      className={`h-full bg-gradient-to-r from-gold/40 to-gold/20 transition-all duration-1000 origin-left ${
                        visible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                      }`}
                      style={{ transitionDelay: `${i * 200 + 100}ms` }}
                    />
                  </div>
                )}

                {/* Text */}
                <div
                  className={`mt-5 max-w-[160px] transition-all duration-700 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 200 + 150}ms` }}
                >
                  <p className="font-body text-sm leading-relaxed text-white/70">
                    {reason}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
