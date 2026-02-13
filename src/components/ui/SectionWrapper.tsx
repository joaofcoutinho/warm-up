import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  withTopBorder?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  withTopBorder = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-24 ${withTopBorder ? "border-t border-gold/10" : ""} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
