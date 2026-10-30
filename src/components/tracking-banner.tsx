import { MessageCircle } from "lucide-react";
import { demoWhatsAppHref } from "@/lib/siteConfig";

export function TrackingBanner() {
  return (
    <section id="demo" className="px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[1.75rem] bg-gradient-to-r from-vea-blue to-vea-violet px-6 py-8 text-white shadow-[0_24px_50px_-28px_rgba(109,53,212,0.8)] sm:px-10 sm:py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <MessageCircle className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Adquiere VEA+ o pide una demo</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
              Escríbenos al WhatsApp comercial. Te mostramos software a la medida, CRM corporativos y arquitecturas offline-first para tu operación.
            </p>
          </div>
        </div>
        <a
          href={demoWhatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 shrink-0 items-center justify-center rounded-2xl bg-white px-5 text-center text-sm font-semibold text-vea-violet transition hover:bg-vea-soft"
        >
          Solicitar demo
        </a>
      </div>
    </section>
  );
}
