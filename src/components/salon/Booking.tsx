import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { z } from "zod";
import { SALON, SERVICES, whatsappUrl } from "@/lib/salon";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().nonempty("Please enter your name.").max(80),
  phone: z
    .string()
    .trim()
    .nonempty("Please enter your phone number.")
    .max(25)
    .regex(/^[0-9+\-\s()]{7,25}$/, "Please enter a valid phone number."),
  service: z.string().trim().nonempty("Please choose a service.").max(60),
  date: z.string().trim().max(20).optional(),
  time: z.string().trim().max(20).optional(),
  message: z.string().trim().max(500).optional(),
});

const fieldClass =
  "w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold";

export function Booking() {
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      service: String(fd.get("service") ?? ""),
      date: String(fd.get("date") ?? ""),
      time: String(fd.get("time") ?? ""),
      message: String(fd.get("message") ?? ""),
    });

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form and try again.");
      return;
    }
    setError(null);

    const d = parsed.data;
    const lines = [
      `Appointment request — ${SALON.name}`,
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      `Service: ${d.service}`,
      d.date ? `Preferred date: ${d.date}` : null,
      d.time ? `Preferred time: ${d.time}` : null,
      d.message ? `Message: ${d.message}` : null,
    ].filter(Boolean);

    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="appointment" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <p className="eyebrow">Appointments</p>
          <h2 className="mt-4 text-4xl lg:text-5xl">Book your visit</h2>
          <div className="gold-rule mt-6" />
          <p className="mt-6 max-w-md text-muted-foreground">
            Fill in your details and send them straight to us on WhatsApp. We&apos;ll confirm your
            slot and answer any questions about the service you need.
          </p>
          <a
            href={SALON.phoneHref}
            className="mt-8 inline-block font-display text-3xl text-ink transition-colors hover:text-gold"
          >
            {SALON.phoneDisplay}
          </a>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} noValidate className="bg-card p-6 shadow-luxe sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.2em]">
                  Name
                </label>
                <input id="name" name="name" required maxLength={80} className={fieldClass} placeholder="Your full name" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-[0.2em]">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={25}
                  className={fieldClass}
                  placeholder="03xx xxxxxxx"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="service" className="mb-2 block text-xs uppercase tracking-[0.2em]">
                  Service
                </label>
                <select id="service" name="service" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date" className="mb-2 block text-xs uppercase tracking-[0.2em]">
                  Preferred Date
                </label>
                <input id="date" name="date" type="date" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="time" className="mb-2 block text-xs uppercase tracking-[0.2em]">
                  Preferred Time
                </label>
                <input id="time" name="time" type="time" className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.2em]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  className={fieldClass}
                  placeholder="Anything we should know?"
                />
              </div>
            </div>

            {error && (
              <p role="alert" className="mt-5 text-sm text-destructive">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-ink px-8 py-4 text-xs uppercase tracking-[0.22em] text-ink-foreground transition-colors hover:bg-gold hover:text-ink"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Book via WhatsApp
            </button>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Your details open in WhatsApp as a ready-to-send message.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
