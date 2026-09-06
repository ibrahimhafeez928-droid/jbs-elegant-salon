import {
  Phone,
  MapPin,
  MessageCircle,
  Scissors,
  Palette,
  Sparkles,
  Droplets,
  Wind,
  Crown,
  Brush,
  Hand,
  Wand2,
  Flame,
  Star,
  Instagram,
  Facebook,
  Clock,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { REASONS, SALON, SAMPLE_REVIEWS, SERVICES, whatsappUrl } from "@/lib/salon";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";

const bookMsg = `Hello ${SALON.name}, I would like to book an appointment.`;

const SERVICE_ICONS = [Scissors, Palette, Sparkles, Droplets, Flame, Wand2, Wind, Crown, Brush, Hand];

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Client with glossy styled hair at JB's Salon in DHA Phase 6, Karachi"
        width={1600}
        height={1104}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />

      <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-40 text-ink-foreground lg:pb-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Hair &amp; Beauty · DHA Phase 6, Karachi</p>
          <h1 className="mt-6 text-5xl leading-[1.05] sm:text-6xl lg:text-8xl">
            Your Beauty,
            <span className="block italic text-gold">Our Passion</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-ink-foreground/80 sm:text-lg">
            Professional hair and beauty services designed to make you look and feel your best.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl(bookMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-[0.22em] text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Book an Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-ink-foreground/40 px-8 py-4 text-xs uppercase tracking-[0.22em] text-ink-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Explore Services
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <img
              src={aboutImg}
              alt="Interior of JB's Salon with black styling stations and gold-framed mirrors"
              width={1200}
              height={1408}
              loading="lazy"
              className="w-full object-cover shadow-luxe"
            />
            <div className="absolute -bottom-6 -right-4 hidden bg-ink px-8 py-6 text-ink-foreground sm:block">
              <p className="font-display text-3xl text-gold">DHA</p>
              <p className="mt-1 text-[0.65rem] uppercase tracking-[0.24em]">Phase 6, Karachi</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">About the salon</p>
          <h2 className="mt-4 text-4xl lg:text-5xl">
            A calm, refined space for hair and beauty
          </h2>
          <div className="gold-rule mt-6" />
          <p className="mt-6 text-muted-foreground">
            JB&apos;s Salon provides professional hair and beauty services in DHA Phase 6, Karachi.
            From everyday cuts and blow dries to colour, treatments and occasion styling, every
            service is delivered with a focus on quality, style and customer satisfaction.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our team takes time to understand what suits you before scissors or colour touch your
            hair — so you leave with a look that feels effortless long after your visit.
          </p>
          <a
            href="#services"
            className="mt-9 inline-block border border-ink px-8 py-4 text-xs uppercase tracking-[0.22em] transition-colors hover:bg-ink hover:text-ink-foreground"
          >
            Discover More
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-4 text-4xl lg:text-5xl">Crafted for hair that lasts</h2>
          <div className="gold-rule mt-6" />
          <p className="mt-6 text-muted-foreground">
            Pricing varies by hair length, condition and the service you choose — message us for a
            quick quote.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length]!;
            return (
              <Reveal
                as="li"
                key={service.name}
                delay={(i % 3) * 90}
                className="group flex flex-col bg-card p-8 transition-colors duration-500 hover:bg-ink hover:text-ink-foreground"
              >
                <Icon className="h-7 w-7 text-gold" aria-hidden="true" />
                <h3 className="mt-6 text-2xl">{service.name}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground transition-colors group-hover:text-ink-foreground/70">
                  {service.desc}
                </p>
                <p className="mt-6 text-[0.68rem] uppercase tracking-[0.22em] text-gold">
                  Contact for Price
                </p>
                <a
                  href={whatsappUrl(
                    `Hello ${SALON.name}, I would like to book: ${service.name}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 border border-border px-6 py-3 text-[0.68rem] uppercase tracking-[0.22em] transition-colors hover:border-gold hover:bg-gold hover:text-ink group-hover:border-ink-foreground/30"
                >
                  Book Now
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Why JB&apos;s Salon</p>
          <h2 className="mt-4 text-4xl lg:text-5xl">Details that make the difference</h2>
          <div className="gold-rule mt-6" />
        </Reveal>

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal as="li" key={r.title} delay={(i % 3) * 90}>
              <span className="font-display text-2xl text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-2xl">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Reviews</p>
          <h2 className="mt-4 text-4xl lg:text-5xl">Sample testimonials</h2>
          <div className="gold-rule mt-6" />
          <p className="mt-6 text-sm text-muted-foreground">
            These are placeholder examples, not real customer reviews. They can be replaced with
            the salon&apos;s actual Google reviews once available.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SAMPLE_REVIEWS.map((r, i) => (
            <Reveal
              as="li"
              key={r.name}
              delay={(i % 4) * 80}
              className="flex flex-col border border-border bg-card p-7 transition-shadow duration-500 hover:shadow-luxe"
            >
              <span className="flex gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </span>
              <p className="mt-5 flex-1 text-sm text-muted-foreground">&ldquo;{r.text}&rdquo;</p>
              <p className="mt-6 font-display text-xl">{r.name}</p>
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                {r.service} · Placeholder
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-4xl lg:text-5xl">Visit JB&apos;s Salon</h2>
          <div className="gold-rule mt-6" />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <address className="not-italic">
              <p className="font-display text-3xl">JB&apos;s Salon</p>
              <p className="mt-5 flex gap-3 text-muted-foreground">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{SALON.address}</span>
              </p>
              <p className="mt-4 flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={SALON.phoneHref} className="link-underline hover:text-gold">
                  {SALON.phoneDisplay}
                </a>
              </p>
              <p className="mt-4 flex items-center gap-3 text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>Call or WhatsApp us to confirm today&apos;s timings.</span>
              </p>
            </address>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SALON.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-ink px-8 py-4 text-xs uppercase tracking-[0.22em] text-ink-foreground transition-colors hover:bg-gold hover:text-ink"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
              <a
                href={whatsappUrl(`Hello ${SALON.name}, I have a question.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-ink px-8 py-4 text-xs uppercase tracking-[0.22em] transition-colors hover:bg-ink hover:text-ink-foreground"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>

            <div className="mt-10 overflow-hidden border border-border">
              <iframe
                title="JB's Salon location on Google Maps"
                src={SALON.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const fieldClass =
  "w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold";

function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const name = String(fd.get("cname") ?? "").trim().slice(0, 80);
        const phone = String(fd.get("cphone") ?? "").trim().slice(0, 25);
        const message = String(fd.get("cmessage") ?? "").trim().slice(0, 500);
        if (!name || !phone || !message) return;
        window.open(
          whatsappUrl(`Enquiry — ${SALON.name}\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`),
          "_blank",
          "noopener,noreferrer",
        );
      }}
      className="border border-border bg-card p-6 sm:p-10"
    >
      <h3 className="text-2xl">Send us a message</h3>
      <div className="mt-6 grid gap-5">
        <div>
          <label htmlFor="cname" className="mb-2 block text-xs uppercase tracking-[0.2em]">
            Name
          </label>
          <input id="cname" name="cname" required maxLength={80} className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="cphone" className="mb-2 block text-xs uppercase tracking-[0.2em]">
            Phone
          </label>
          <input
            id="cphone"
            name="cphone"
            type="tel"
            required
            maxLength={25}
            className={fieldClass}
            placeholder="03xx xxxxxxx"
          />
        </div>
        <div>
          <label htmlFor="cmessage" className="mb-2 block text-xs uppercase tracking-[0.2em]">
            Message
          </label>
          <textarea
            id="cmessage"
            name="cmessage"
            rows={5}
            required
            maxLength={500}
            className={fieldClass}
            placeholder="How can we help?"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-8 w-full bg-gold px-8 py-4 text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:bg-ink hover:text-ink-foreground"
      >
        Send via WhatsApp
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl">
            JB&apos;s <span className="text-gold">Salon</span>
          </p>
          <p className="mt-4 text-sm text-ink-foreground/70">
            Professional hair and beauty services in DHA Phase 6, Karachi — cuts, colour,
            treatments, makeup and occasion styling.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={whatsappUrl(bookMsg)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with JB's Salon on WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center border border-ink-foreground/25 transition-colors hover:border-gold hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 items-center justify-center border border-ink-foreground/15 text-ink-foreground/30"
            >
              <Instagram className="h-4 w-4" />
            </span>
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 items-center justify-center border border-ink-foreground/15 text-ink-foreground/30"
            >
              <Facebook className="h-4 w-4" />
            </span>
          </div>
          <p className="mt-3 text-xs text-ink-foreground/40">
            Social links can be added once the salon shares its profiles.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.24em] text-gold">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/70">
            {["Home", "About", "Services", "Gallery", "Reviews", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-gold">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.24em] text-gold">Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/70">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.name}>
                <a href="#services" className="transition-colors hover:text-gold">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.24em] text-gold">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/70">
            <li>{SALON.address}</li>
            <li>
              <a href={SALON.phoneHref} className="transition-colors hover:text-gold">
                {SALON.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={SALON.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Get directions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-ink-foreground/50">
          © {new Date().getFullYear()} JB&apos;s Salon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
