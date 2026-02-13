import Button from "../ui/Button";
import { FINAL_CTA_CONTENT } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-gold/10 py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 font-sans text-2xl font-light tracking-tight text-white sm:text-3xl lg:text-[2.5rem]">
          {FINAL_CTA_CONTENT.title}
        </h2>
        <p className="mb-4 text-balance font-body text-base leading-relaxed text-white/70 sm:text-lg">
          {FINAL_CTA_CONTENT.description}
        </p>
        <p className="mb-10 text-balance font-body text-base leading-relaxed text-white/80 sm:text-lg">
          {FINAL_CTA_CONTENT.subdescription}
        </p>
        <Button variant="primary" size="lg" href="https://bit.ly/enjoy-warm-up">
          {FINAL_CTA_CONTENT.cta}
        </Button>
      </div>
    </section>
  );
}
