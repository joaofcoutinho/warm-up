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
    <>
      {/* Desktop: overlay sobre a foto */}
      <div className="relative hidden sm:block aspect-[3/4] w-full overflow-hidden rounded-2xl bg-navy-light">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-8 pb-8 pt-40">
          <h3 className="mb-1 font-heading text-2xl font-bold bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
            {name}
          </h3>
          <p className="mb-3 font-body text-sm font-medium text-white/80">{role}</p>
          <p className="mb-2 font-body text-sm leading-relaxed text-white/70">{bio}</p>
          <p className="font-body text-sm leading-relaxed text-white/90 italic">{mentorship}</p>
        </div>
      </div>

      {/* Mobile: foto em cima, texto embaixo */}
      <div className="sm:hidden overflow-hidden rounded-2xl bg-navy-light">
        <div className="relative aspect-square w-full">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover object-top"
          />
          {/* Degradê sutil só embaixo da foto */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-light to-transparent" />
        </div>
        <div className="px-5 pb-5 -mt-4 relative z-10">
          <h3 className="mb-1 font-heading text-xl font-bold bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
            {name}
          </h3>
          <p className="mb-3 font-body text-xs font-medium text-white/80">{role}</p>
          <p className="mb-2 font-body text-xs leading-relaxed text-white/70">{bio}</p>
          <p className="font-body text-xs leading-relaxed text-white/90 italic">{mentorship}</p>
        </div>
      </div>
    </>
  );
}
