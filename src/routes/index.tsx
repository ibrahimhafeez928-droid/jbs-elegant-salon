import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Header } from "@/components/salon/Header";
import { Gallery } from "@/components/salon/Gallery";
import { Booking } from "@/components/salon/Booking";
import {
  About,
  Contact,
  Footer,
  Hero,
  Reviews,
  Services,
  WhyChoose,
} from "@/components/salon/Sections";
import { SALON, whatsappUrl } from "@/lib/salon";

const title = "JB's Salon — Hair & Beauty Salon in DHA Phase 6, Karachi";
const description =
  "Professional hair and beauty services at JB's Salon, DHA Phase 6 Karachi: haircuts, colour, keratin, treatments, makeup and bridal styling. Book on WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "JB's Salon",
          telephone: "+92 336 3366888",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Lane 8, Khayaban-e-Bukhari, Bukhari Commercial Area, D.H.A Phase 6",
            addressLocality: "Karachi",
            postalCode: "75500",
            addressCountry: "PK",
          },
          areaServed: "Karachi",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Gallery />
        <Reviews />
        <Booking />
        <Contact />
      </main>
      <Footer />

      <a
        href={whatsappUrl(`Hello ${SALON.name}, I would like to book an appointment.`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with JB's Salon on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-luxe transition-transform duration-300 hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
    </>
  );
}
