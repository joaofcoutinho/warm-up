import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import YouTubeEmbed from "../ui/YouTubeEmbed";
import { DISRUPTION_CONTENT } from "@/lib/constants";

export default function Disruption() {
  return (
    <SectionWrapper id="disruption" withTopBorder>
      <h2 className="mb-4 text-center font-sans text-2xl font-light tracking-tight text-white sm:text-3xl lg:text-[2.5rem]">
        {DISRUPTION_CONTENT.title}
      </h2>

      <div className="mx-auto mb-12 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
        <span className="h-1.5 w-1.5 rotate-45 border border-gold/60" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
      </div>

      <p className="mx-auto mb-14 max-w-3xl text-center font-body text-base leading-relaxed text-white/70 sm:text-lg">
        {DISRUPTION_CONTENT.intro}
      </p>

      {/* Disruption 21 card */}
      <div className="mx-auto max-w-4xl relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/[0.08] via-navy-light/80 to-gold/[0.04] p-8 sm:p-10">
        {/* Large decorative "21" background */}
        <div className="pointer-events-none absolute -right-4 -top-6 select-none font-sans text-[10rem] font-black leading-none text-gold/[0.06] sm:text-[12rem]">
          21
        </div>

        {/* Corner glow */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-[80px]" />

        <div className="relative z-10 flex h-full flex-col justify-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold/60 sm:text-sm">
            {DISRUPTION_CONTENT.tagline}
          </p>

          <h3 className="mb-6 font-sans text-4xl font-black uppercase tracking-wide text-gold sm:text-5xl">
            {DISRUPTION_CONTENT.subtitle}
          </h3>

          {/* Gold divider */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-gold/60 to-gold/20" />
            <span className="h-1.5 w-1.5 rotate-45 border border-gold/60" />
            <span className="h-px w-8 bg-gradient-to-r from-gold/20 to-transparent" />
          </div>

          <p className="mb-4 font-body text-sm leading-relaxed text-white/70 sm:text-base sm:leading-relaxed">
            {DISRUPTION_CONTENT.description}
          </p>

          <p className="text-sm font-medium leading-relaxed text-white/90 sm:text-base">
            {DISRUPTION_CONTENT.participation}
          </p>

          {/* Speakers inside the card */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {DISRUPTION_CONTENT.speakers.map((speaker, i) => (
              <div key={i} className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-gold/30 bg-[#0D0C0B]">
                <Image
                  src={speaker.imageSrc}
                  alt={speaker.name.replace("\n", " ")}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-4 pb-4 pt-16 sm:px-5 sm:pb-5 sm:pt-28">
                  <h4 className="mb-1 whitespace-pre-line font-heading text-lg sm:text-xl font-bold bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
                    {speaker.name}
                  </h4>
                  <p className="mb-2 font-body text-xs font-medium text-white/80">
                    {speaker.role}
                  </p>
                  <p className="font-body text-xs leading-relaxed text-white/70">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video */}
      <div className="mx-auto mt-10 max-w-4xl">
        <h4 className="mb-4 text-center font-sans text-sm font-semibold uppercase tracking-[0.25em] text-gold/70">
          Veja o último Disruption
        </h4>
        <YouTubeEmbed
          videoId={DISRUPTION_CONTENT.videoId}
          title="Disruption - Enjoy Educação"
        />
      </div>

      {/* Disclaimer + Closing below */}
      <div className="mx-auto mt-12 max-w-4xl">
        <div className="mb-10 flex items-start gap-3 rounded-xl border border-gold/10 bg-gold/[0.03] px-6 py-5">
          <svg
            className="mt-0.5 h-5 w-5 shrink-0 text-gold/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          <p className="font-body text-sm leading-relaxed text-white/50">
            {DISRUPTION_CONTENT.disclaimer}
          </p>
        </div>

        <p className="text-center text-balance font-sans text-lg font-medium leading-relaxed text-white/80 sm:text-xl">
          {DISRUPTION_CONTENT.closing}
        </p>
      </div>
    </SectionWrapper>
  );
}
