import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { demoWhatsAppHref, mapsHref, phoneDisplay, phoneHref, siteConfig } from "@/lib/siteConfig";

function FacebookMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M15.1 8.5h-2V6.9c0-.6.4-.8.9-.8H15V4h-1.8C11.1 4 10 5.2 10 7v1.5H8.2V11H10v9h3.1v-9h2.1l.4-2.5h-2.5z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer id="contacto" className="bg-vea-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold leading-7">VEA+ | Visión y Estrategia Administrativa</p>
          <p className="mt-3 text-sm leading-6 text-white/70">
            VEA+ desarrolla software a la medida, CRM corporativos y arquitecturas offline-first para operaciones corporativas multisectoriales.
          </p>
          <a
            href={demoWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-semibold text-vea-navy transition hover:bg-vea-soft"
          >
            <MessageCircle className="h-4 w-4 text-vea-violet" aria-hidden />
            Contactar
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-vea-sky uppercase">Ubicación</h2>
          <a href={mapsHref()} target="_blank" rel="noopener noreferrer" className="mt-4 flex gap-3 text-sm leading-6 text-white/85 hover:text-white">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-vea-sky" aria-hidden />
            <span>{siteConfig.address}</span>
          </a>
          <a href={phoneHref()} className="mt-3 flex items-center gap-3 text-sm text-white/85 hover:text-white">
            <Phone className="h-5 w-5 shrink-0 text-vea-sky" aria-hidden />
            {phoneDisplay()}
          </a>
        </div>

        <div>
          <h2 className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-vea-sky uppercase">
            <Clock className="h-4 w-4" aria-hidden />
            Atención comercial
          </h2>
          <ul className="mt-4 space-y-2">
            {siteConfig.hours.map((item) => (
              <li key={item.label} className="flex items-baseline justify-between gap-4 text-sm text-white/85">
                <span>{item.label}</span>
                <span className="font-medium text-white">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-vea-sky uppercase">Redes</h2>
          <a
            href={siteConfig.facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Página oficial de Facebook de VEA+"
            className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-white/20"
          >
            <FacebookMark className="h-5 w-5" />
          </a>
          <p className="mt-3 text-sm text-white/70">Comparte VEA+ con equipos que digitalizan su operación.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/50 sm:px-6">© 2026 VEA+. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
