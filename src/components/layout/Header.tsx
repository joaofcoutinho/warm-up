"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-gold/10 bg-navy/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <span className="text-lg font-bold uppercase tracking-widest text-gold">
          ENJOY
        </span>
        <nav className="hidden items-center gap-6 sm:flex">
          <a
            href="#ecossistema"
            className="text-sm text-white/60 transition-colors hover:text-gold"
          >
            Ecossistema
          </a>
          <a
            href="#mentores"
            className="text-sm text-white/60 transition-colors hover:text-gold"
          >
            Mentores
          </a>
          <a
            href="#disruption"
            className="text-sm text-white/60 transition-colors hover:text-gold"
          >
            Disruption
          </a>
          <a
            href="https://bit.ly/enjoy-warm-up"
            className="rounded-lg bg-gold px-4 py-2 text-sm font-bold text-navy-dark transition-all hover:brightness-110"
          >
            Inscreva-se
          </a>
        </nav>
      </div>
    </header>
  );
}
