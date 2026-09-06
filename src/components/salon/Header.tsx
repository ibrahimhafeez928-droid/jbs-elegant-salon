import { useEffect, useState } from "react";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { SALON, whatsappUrl } from "@/lib/salon";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const bookMsg = `Hello ${SALON.name}, I would like to book an appointment.`;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top contact bar */}
      <div className="hidden bg-ink text-ink-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs">
          <div className="flex min-w-0 items-center gap-6">
            <a
              href={SALON.phoneHref}
              className="link-underline flex items-center gap-2 tracking-wide transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
              {SALON.phoneDisplay}
            </a>
            <span className="flex min-w-0 items-center gap-2 tracking-wide opacity-80">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
              <span className="truncate">{SALON.areaShort}</span>
            </span>
          </div>
          <a
            href={whatsappUrl(bookMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 border border-gold/60 px-4 py-1.5 text-[0.68rem] uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Book Appointment
          </a>
        </div>
      </div>

      {/* Nav bar */}
      <div
        className={`border-b transition-all duration-500 ${
          scrolled
            ? "border-border/70 bg-background/92 backdrop-blur-md shadow-[0_10px_40px_-30px_rgba(0,0,0,0.6)]"
            : "border-transparent bg-background/70 backdrop-blur-sm"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 lg:py-5"
        >
          <a href="#home" className="min-w-0">
            <span className="block font-display text-2xl leading-none tracking-tight lg:text-[1.7rem]">
              JB&apos;s <span className="text-gold">Salon</span>
            </span>
            <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
              Hair &amp; Beauty
            </span>
          </a>

          <div className="flex items-center gap-8">
            <ul className="hidden items-center gap-8 text-[0.78rem] uppercase tracking-[0.18em] lg:flex">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-underline transition-colors hover:text-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#appointment"
              className="hidden bg-ink px-6 py-3 text-[0.7rem] uppercase tracking-[0.22em] text-ink-foreground transition-colors hover:bg-gold hover:text-ink sm:inline-block"
            >
              Book Appointment
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold lg:hidden"
            >
              {open ? <Menu className="h-5 w-5 rotate-90" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-ink text-ink-foreground transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-display text-2xl">
            JB&apos;s <span className="text-gold">Salon</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center border border-ink-foreground/25 transition-colors hover:border-gold hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="mt-6 flex flex-col gap-1 px-6">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ink-foreground/10 py-4 font-display text-3xl transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 px-6">
          <a
            href="#appointment"
            onClick={() => setOpen(false)}
            className="bg-gold px-6 py-4 text-center text-xs uppercase tracking-[0.22em] text-ink"
          >
            Book Appointment
          </a>
          <a
            href={SALON.phoneHref}
            className="border border-ink-foreground/25 px-6 py-4 text-center text-xs uppercase tracking-[0.22em]"
          >
            Call {SALON.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
