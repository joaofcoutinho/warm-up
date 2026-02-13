interface PillarCardProps {
  title: string;
  description: string;
  index?: number;
}

const icons = [
  // Lightbulb - Educação prática
  <svg key="edu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 1 4 12.7V17H8v-2.3A7 7 0 0 1 12 2z" /></svg>,
  // Network - Conexão estratégica
  <svg key="net" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><circle cx="12" cy="5" r="3" /><circle cx="5" cy="19" r="3" /><circle cx="19" cy="19" r="3" /><path d="M12 8v4m-4.5 3.5L10 13m4 0 2.5 2.5" /></svg>,
  // Target - Ambientes de decisão
  <svg key="dec" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
];

export default function PillarCard({ title, description, index = 0 }: PillarCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gold/10 bg-gradient-to-b from-gold/[0.06] to-transparent p-8 transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_40px_rgba(177,140,84,0.08)]">
      {/* Subtle corner glow on hover */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/[0.04] blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

      {/* Icon */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.08] text-gold transition-all duration-500 group-hover:border-gold/40 group-hover:bg-gold/[0.14]">
        {icons[index % icons.length]}
      </div>

      {/* Top line accent */}
      <div className="mb-5 h-px w-10 bg-gradient-to-r from-gold/50 to-transparent transition-all duration-500 group-hover:w-16" />

      <h3 className="mb-3 font-heading text-lg font-semibold text-gold">{title}</h3>
      <p className="font-body text-sm leading-relaxed text-white/60">{description}</p>
    </div>
  );
}
