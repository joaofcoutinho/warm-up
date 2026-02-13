interface BulletPointProps {
  text: string;
}

export default function BulletPoint({ text }: BulletPointProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
      <span className="font-body text-base text-white/90 sm:text-lg">{text}</span>
    </li>
  );
}
