import { useEffect, useState } from "react";
import logo from "@/assets/oakland-logo.jpeg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#programs", label: "Programs" },
  { href: "#why", label: "Why Oakland" },
  { href: "#facilities", label: "Facilities" },
  { href: "#contact", label: "Contact" },
];

export function GlassNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5">
      <nav
        className={`glass mx-auto max-w-6xl rounded-full transition-all duration-500 ${
          scrolled ? "shadow-elegant py-2" : "py-3"
        }`}
      >
        <div className="flex items-center justify-between pl-3 pr-2 sm:pl-5 sm:pr-3">
          <a href="#home" className="flex items-center gap-3 group">
            <span className="relative">
              <span className="absolute inset-0 rounded-full bg-accent/30 blur-md opacity-0 group-hover:opacity-100 transition" />
              <img
                src={logo}
                alt="Oakland The Global School logo"
                width={44}
                height={44}
                className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover ring-2 ring-white/70"
              />
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-lg font-bold text-primary tracking-wide">OAKLAND</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-secondary font-semibold">The Global School</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm font-medium text-primary/80 hover:text-primary rounded-full hover:bg-white/60 transition-all"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="https://oakland-admission-form.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary shadow-glow transition-transform hover:scale-105"
              style={{ background: "var(--gradient-gold)" }}
            >
              Admission Form
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#enroll"
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary shadow-glow transition-transform hover:scale-105"
              style={{ background: "var(--gradient-gold)" }}
            >
              Enroll Now
              <span aria-hidden>→</span>
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden h-10 w-10 grid place-items-center rounded-full bg-white/70 text-primary"
              aria-label="Toggle menu"
            >
              <span className="text-xl">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden px-4 pt-3 pb-4 mt-2 border-t border-white/40">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block px-4 py-2.5 text-sm font-medium text-primary rounded-xl hover:bg-white/70"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://oakland-admission-form.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  Admission Form
                </a>
              </li>
              <li>
                <a
                  href="#enroll"
                  onClick={() => setOpen(false)}
                  className="block text-center mt-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  Enroll Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
