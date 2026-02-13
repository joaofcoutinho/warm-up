import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

const sizeClasses = {
  sm: "px-6 py-2.5 text-xs",
  md: "px-8 py-3 text-sm",
  lg: "px-14 py-4.5 text-sm sm:text-base",
};

const variantClasses = {
  primary:
    "relative overflow-hidden bg-gradient-to-r from-gold-dark via-gold to-gold-light text-navy-dark font-bold shadow-[0_0_30px_rgba(177,140,84,0.2),0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(177,140,84,0.4),0_4px_30px_rgba(0,0,0,0.4)] hover:scale-[1.03] active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 before:ease-out",
  outline:
    "border border-gold/30 text-gold bg-transparent hover:bg-gold/[0.06] hover:border-gold/50",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-heading uppercase tracking-[0.2em] transition-all duration-500 ease-out cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button className={classes}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
