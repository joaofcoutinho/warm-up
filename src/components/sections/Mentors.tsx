import SectionWrapper from "../ui/SectionWrapper";
import MentorCard from "../ui/MentorCard";
import { MENTORS } from "@/lib/constants";

export default function Mentors() {
  return (
    <SectionWrapper id="mentores" withTopBorder>
      <h2 className="mb-4 text-center font-sans text-2xl font-light tracking-tight text-white sm:text-3xl lg:text-[2.5rem]">
        MENTORES DO WARM-UP DAY
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center font-body text-base text-white/60">
        Conheça os mentores que vão conduzir essa experiência transformadora.
      </p>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {MENTORS.map((mentor, i) => (
          <MentorCard
            key={i}
            name={mentor.name}
            role={mentor.role}
            bio={mentor.bio}
            mentorship={mentor.mentorship}
            imageSrc={mentor.imageSrc}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
