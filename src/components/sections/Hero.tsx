import Image from "next/image";
import Button from "../ui/Button";
import { HERO_CONTENT } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pt-12">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-glow-pulse absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-[150px]" />
      </div>

      {/* Decorative corner lines */}
      <div className="pointer-events-none absolute left-8 top-20 hidden lg:block">
        <div className="h-px w-24 bg-gradient-to-r from-gold/40 to-transparent" />
        <div className="h-24 w-px bg-gradient-to-b from-gold/40 to-transparent" />
      </div>
      <div className="pointer-events-none absolute bottom-20 right-8 hidden lg:block">
        <div className="ml-auto h-px w-24 bg-gradient-to-l from-gold/40 to-transparent" />
        <div className="ml-auto h-24 w-px bg-gradient-to-t from-gold/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-12 text-center sm:px-8">
        {/* Date & Location - elegant minimal */}
        <div className="animate-fade-up mb-4 flex items-center gap-3 font-heading text-xs font-medium uppercase tracking-[0.3em] text-gold/80 sm:text-sm" style={{ animationDelay: "0.1s" }}>
          <span>{HERO_CONTENT.date}</span>
          <span className="h-3.5 w-px bg-gold/30" />
          <span>{HERO_CONTENT.location}</span>
        </div>

        {/* Logo */}
        <div className="animate-fade-up mb-6" style={{ animationDelay: "0.25s" }}>
          <Image
            src="/images/warm-up.png"
            alt="Warm-Up Day Enjoy"
            width={400}
            height={140}
            priority
            className="h-auto w-[200px] sm:w-[280px] lg:w-[360px]"
          />
        </div>

        {/* Decorative line */}
        <div className="animate-fade-in mb-6 flex w-full max-w-xs items-center justify-center gap-4" style={{ animationDelay: "0.4s" }}>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
          <span className="h-1.5 w-1.5 rotate-45 border border-gold/60" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up mb-8 max-w-3xl font-sans text-[1.65rem] leading-snug font-light tracking-tight text-white sm:text-3xl sm:leading-snug lg:text-[2.5rem] lg:leading-snug" style={{ animationDelay: "0.5s" }}>
          O aquecimento oficial que prepara{" "}
          <br className="hidden sm:block" />
          os grandes para o{" "}
          <span className="font-semibold text-gold">ápice do mercado</span>{" "}
          em 2026
        </h1>

        {/* Description */}
        <div className="animate-fade-up mb-10 max-w-xl" style={{ animationDelay: "0.65s" }}>
          <p className="font-body text-sm leading-relaxed text-white/40 sm:text-base sm:leading-relaxed">
            {HERO_CONTENT.secondaryDescription}
          </p>
        </div>

        {/* CTA */}
        <div className="animate-fade-up mb-16" style={{ animationDelay: "0.8s" }}>
          <Button variant="primary" size="lg" href="#ingressos">
            {HERO_CONTENT.cta}
          </Button>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-y border-gold/20 bg-gold/[0.08] py-3.5">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="mx-10 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-gold"
            >
              WARM-UP DAY ENJOY &bull; VITÓRIA/ES &bull; 04 DE MARÇO
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
