import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VEA+ | Eficiencia digital para operaciones corporativas",
  description:
    "Software a la medida, CRM corporativos y arquitecturas offline-first. Fuerza de ventas, geolocalización y control multiindustria. Solicita una demo.",
  applicationName: "VEA+",
  openGraph: {
    title: "VEA+ | Transformamos la complejidad operativa en eficiencia digital",
    description:
      "Desarrollo de software a la medida, CRM corporativos y arquitecturas offline-first para operaciones multisectoriales.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-vea-mist font-sans text-vea-ink">{children}</body>
    </html>
  );
}
