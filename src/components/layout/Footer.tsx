export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-navy-dark py-8">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <span className="mb-2 block text-lg font-bold uppercase tracking-widest text-gold">
          ENJOY
        </span>
        <p className="text-sm text-white-muted">
          &copy; {new Date().getFullYear()} Enjoy Educação. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
