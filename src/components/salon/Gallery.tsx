import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const IMAGES = [
  { src: g1, alt: "Stylist blow drying and styling long hair at JB's Salon" },
  { src: g2, alt: "Hair colouring and highlights being applied with a tint brush" },
  { src: g3, alt: "Elegant salon reception with black marble counter and gold lighting" },
  { src: g4, alt: "Bridal makeup being applied to a client" },
  { src: g5, alt: "Relaxing hair treatment at the salon wash station" },
  { src: g6, alt: "Finished glossy, smooth hairstyle after styling" },
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % IMAGES.length));
      if (e.key === "ArrowLeft")
        setIndex((i) => (i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="gallery" className="bg-ink py-24 text-ink-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-4 text-4xl lg:text-5xl">A look inside the salon</h2>
          <div className="gold-rule mt-6" />
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {IMAGES.map((img, i) => (
            <Reveal as="li" key={img.src} delay={i * 70}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Open image: ${img.alt}`}
                className="group relative block w-full overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-ink/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-left text-[0.65rem] uppercase tracking-[0.22em] text-ink-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  View
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {open && index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setIndex(null)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center border border-ink-foreground/30 text-ink-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length));
            }}
            className="absolute left-3 inline-flex h-11 w-11 items-center justify-center border border-ink-foreground/30 text-ink-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <img
            src={IMAGES[index]!.src}
            alt={IMAGES[index]!.alt}
            className="max-h-[82vh] w-auto max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i === null ? i : (i + 1) % IMAGES.length));
            }}
            className="absolute right-3 inline-flex h-11 w-11 items-center justify-center border border-ink-foreground/30 text-ink-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
