/**
 * Datos de contacto de la landing.
 * Teléfono, WhatsApp y dirección se cambian solo aquí.
 */
export const siteConfig = {
  name: "VEA+",
  phone: "+52 998 195 5326",
  whatsapp: "529981955326",
  address: "Av. Cobá, Edificio Corporativo Kabah, Piso 3, Oficina 302, C.P. 77500, Cancún, Q.R.",
  facebookHref: "https://www.facebook.com/opticaveaplus",
  systemHref: "http://localhost:3000",
  whatsappMessage: "Hola, me interesa conocer los servicios de desarrollo de software y CRM de VEA+",
  hours: [
    { label: "Lunes a viernes", value: "10:00 a 19:00" },
    { label: "Sábado", value: "10:00 a 15:00" },
    { label: "Domingo", value: "Cerrado" },
  ],
} as const;

export function phoneDisplay() {
  return siteConfig.phone;
}

export function phoneHref() {
  return `tel:+${siteConfig.phone.replace(/\D/g, "")}`;
}

export function mapsHref() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;
}

export const demoWhatsAppHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

export function whatsappHref() {
  return demoWhatsAppHref;
}
