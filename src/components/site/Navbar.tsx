import logoWhite from "@/assets/flottsunds-bygg-logo-white.png.asset.json";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { company, services } from "@/lib/site-data";
import { useQuote } from "./QuoteContext";

export function Navbar({ showTopBar = false }: { showTopBar?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const { open } = useQuote();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLButtonElement>(null);
  const mobileQuoteRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!showTopBar) return;
    const onScroll = () => setAtTop(window.scrollY < 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showTopBar]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const navLink = "font-brand not-italic text-[15px] font-extrabold text-white/90 transition-colors hover:text-[color:var(--yellow)]";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {showTopBar ? (
        <div
          className="overflow-hidden bg-[color:var(--yellow)] transition-all duration-300 ease-out"
          style={{ height: atTop ? 40 : 0, opacity: atTop ? 1 : 0 }}
        >
          <div className="container-site flex h-10 items-center justify-center">
            <a
              href={company.phoneHref}
              className="text-[15px] font-medium text-navy underline-offset-4 hover:underline"
            >
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}

      <nav className="bg-navy" aria-label="Huvudmeny">
        <div className="container-site flex h-[72px] items-center justify-between gap-4">
          <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <img
              src={logoWhite.url}
              alt={`${company.name} logotyp`}
              width={2053}
              height={501}
              className="h-7 w-auto lg:h-8"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <Link to="/" className={navLink}>
              Hem
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className={`${navLink} inline-flex items-center gap-1`}
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
              >
                Tjänster
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {servicesOpen ? (
                <div className="absolute left-0 top-[calc(100%+16px)] w-[280px] border border-[rgba(255,255,255,0.12)] bg-navy py-2 shadow-[0_16px_40px_rgba(3,15,39,0.4)]">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to="/tjanster/$slug"
                      params={{ slug: service.slug }}
                      className="font-brand not-italic block px-6 py-3 text-[15px] font-bold text-white/90 transition-colors hover:bg-white/5 hover:text-[color:var(--yellow)]"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
            <Link to="/projekt" className={navLink}>
              Projekt
            </Link>
            <Link to="/" hash="om-oss" className={navLink}>
              Om oss
            </Link>
            <Link to="/" hash="kontakt" className={navLink}>
              Kontakt
            </Link>
          </div>

          <button
            ref={quoteRef}
            type="button"
            className="btn-base btn-yellow hidden lg:inline-flex"
            onClick={() => open(quoteRef.current)}
          >
            Få gratis offert
          </button>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
            aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/10 bg-navy lg:hidden">
            <div className="container-site flex flex-col gap-2 py-6">
              <Link to="/" className="font-brand not-italic py-3 text-[16px] font-extrabold text-white" onClick={() => setMenuOpen(false)}>
                Hem
              </Link>
              <button
                type="button"
                className="font-brand not-italic flex items-center justify-between py-3 text-left text-[16px] font-extrabold text-white"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((v) => !v)}
              >
                Tjänster
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {mobileServicesOpen ? (
                <div className="flex flex-col border-l border-white/15 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to="/tjanster/$slug"
                      params={{ slug: service.slug }}
                      className="font-brand not-italic py-3 text-[15px] font-bold text-white/85"
                      onClick={() => setMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              ) : null}
              <Link
                to="/projekt"
                className="font-brand not-italic py-3 text-[16px] font-extrabold text-white"
                onClick={() => setMenuOpen(false)}
              >
                Projekt
              </Link>
              <Link
                to="/"
                hash="om-oss"
                className="font-brand not-italic py-3 text-[16px] font-extrabold text-white"
                onClick={() => setMenuOpen(false)}
              >
                Om oss
              </Link>
              <Link
                to="/"
                hash="kontakt"
                className="font-brand not-italic py-3 text-[16px] font-extrabold text-white"
                onClick={() => setMenuOpen(false)}
              >
                Kontakt
              </Link>
              <button
                ref={mobileQuoteRef}
                type="button"
                className="btn-base btn-yellow mt-4 self-start"
                onClick={() => {
                  setMenuOpen(false);
                  open(mobileQuoteRef.current);
                }}
              >
                Få gratis offert
              </button>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
