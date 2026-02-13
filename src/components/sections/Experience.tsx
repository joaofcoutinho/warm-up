import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import { EXPERIENCE_CONTENT } from "@/lib/constants";

export default function Experience() {
  return (
    <SectionWrapper id="experiencia" withTopBorder>
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl border border-gold/10">
          <Image
            src="/images/colagem-warmup.png"
            alt="Experiência Warm-Up Day"
            width={600}
            height={500}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Title + Text */}
        <div>
          <h2 className="mb-4 font-sans text-2xl font-light tracking-tight text-white whitespace-pre-line sm:text-3xl lg:text-[2.5rem]">
            {EXPERIENCE_CONTENT.title}
          </h2>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-gold/60 to-gold/20" />
            <span className="h-1.5 w-1.5 rotate-45 border border-gold/60" />
            <span className="h-px w-8 bg-gradient-to-r from-gold/20 to-transparent" />
          </div>
          <div className="space-y-5">
            {EXPERIENCE_CONTENT.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="font-body text-base leading-relaxed text-white/70"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
