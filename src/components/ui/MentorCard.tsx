import Image from "next/image";

interface MentorCardProps {
  name: string;
  role: string;
  bio: string;
  mentorship: string;
  imageSrc: string;
}

export default function MentorCard({
  name,
  role,
  bio,
  mentorship,
  imageSrc,
}: MentorCardProps) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-navy-light">
      {/* Photo — fills entire card */}
      <Image
        src={imageSrc}
        alt={name}
        fill
        className="object-cover"
      />

      {/* Gradient overlay + text at the bottom */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-6 pt-32 sm:px-8 sm:pb-8 sm:pt-40">
        <h3 className="mb-1 font-heading text-2xl font-bold bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
          {name}
        </h3>
        <p className="mb-3 font-body text-sm font-medium text-white/80">
          {role}
        </p>
        <p className="mb-2 font-body text-sm leading-relaxed text-white/70">{bio}</p>
        <p className="font-body text-sm leading-relaxed text-white/90 italic">{mentorship}</p>
      </div>
    </div>
  );
}
