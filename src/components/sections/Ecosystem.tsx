import SectionWrapper from "../ui/SectionWrapper";
import PillarCard from "../ui/PillarCard";
import { ECOSYSTEM_CONTENT } from "@/lib/constants";

export default function Ecosystem() {
  return (
    <SectionWrapper id="ecossistema" withTopBorder>
      <h2 className="mb-6 text-center font-sans text-2xl font-light tracking-tight text-white sm:text-3xl lg:text-[2.5rem]">
        {ECOSYSTEM_CONTENT.title}
      </h2>

      <div className="mx-auto mb-12 max-w-3xl space-y-4">
        {ECOSYSTEM_CONTENT.paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className="text-center font-body text-base leading-relaxed text-white/70"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <h3 className="mb-8 text-center font-heading text-lg font-semibold uppercase tracking-wider text-gold">
        Pilares da experiência
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {ECOSYSTEM_CONTENT.pillars.map((pillar, i) => (
          <PillarCard
            key={i}
            title={pillar.title}
            description={pillar.description}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
