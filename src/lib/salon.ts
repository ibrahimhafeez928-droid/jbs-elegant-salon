export const SALON = {
  name: "JB's Salon",
  phoneDisplay: "+92 336 3366888",
  phoneHref: "tel:+923363366888",
  whatsappNumber: "923363366888",
  areaShort: "DHA Phase 6, Karachi",
  address:
    "Lane 8, Khayaban-e-Bukhari, D.H.A Phase 6, Bukhari Commercial Area, Defence Housing Authority, Karachi, 75500, Pakistan",
  mapsEmbed:
    "https://www.google.com/maps?q=Lane%208%20Khayaban-e-Bukhari%20DHA%20Phase%206%20Bukhari%20Commercial%20Karachi&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Lane+8+Khayaban-e-Bukhari+DHA+Phase+6+Bukhari+Commercial+Karachi",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${SALON.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const SERVICES = [
  {
    name: "Haircut & Styling",
    desc: "Precision cuts and finishing shaped around your face, hair type and everyday routine.",
  },
  {
    name: "Hair Coloring",
    desc: "Rich, even colour — from natural depth to fashion tones, applied with care.",
  },
  {
    name: "Hair Highlights",
    desc: "Balayage, foils and face-framing lights for soft, sunlit dimension.",
  },
  {
    name: "Hair Treatment",
    desc: "Deep conditioning and repair rituals that restore strength, shine and softness.",
  },
  {
    name: "Hair Straightening",
    desc: "Smooth, sleek results with controlled technique and protective products.",
  },
  {
    name: "Keratin Treatment",
    desc: "Frizz-free, manageable hair with a glossy finish that lasts for weeks.",
  },
  {
    name: "Blow Dry",
    desc: "Volume, waves or a polished blowout for events or a fresh start to the week.",
  },
  {
    name: "Bridal / Party Styling",
    desc: "Occasion hair styled to hold beautifully through long celebrations.",
  },
  {
    name: "Makeup",
    desc: "Soft glam to full bridal makeup, blended for photographs and real life.",
  },
  {
    name: "Manicure & Pedicure",
    desc: "Careful nail shaping, grooming and finishing in a calm, hygienic setting.",
  },
];

export const REASONS = [
  { title: "Professional Service", desc: "Consistent standards and attentive care at every appointment." },
  { title: "Experienced Stylists", desc: "A trained team that listens first and styles with intent." },
  { title: "Premium Products", desc: "Quality formulas selected to protect hair while shaping it." },
  { title: "Modern Techniques", desc: "Current cutting, colouring and smoothing methods." },
  { title: "Customer Satisfaction", desc: "Your comfort and the final result guide every decision." },
  { title: "Comfortable Environment", desc: "A calm, clean and welcoming space in DHA Phase 6." },
];

export const SAMPLE_REVIEWS = [
  {
    name: "Sample Client A",
    service: "Hair Colour & Styling",
    text: "Placeholder testimonial text. Replace this with a real review once the salon shares its customer feedback.",
  },
  {
    name: "Sample Client B",
    service: "Keratin Treatment",
    text: "Placeholder testimonial text. Replace this with a real review once the salon shares its customer feedback.",
  },
  {
    name: "Sample Client C",
    service: "Bridal Makeup",
    text: "Placeholder testimonial text. Replace this with a real review once the salon shares its customer feedback.",
  },
  {
    name: "Sample Client D",
    service: "Haircut & Blow Dry",
    text: "Placeholder testimonial text. Replace this with a real review once the salon shares its customer feedback.",
  },
];
