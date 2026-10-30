import { Factory, MapPin, MessageCircle, Users, type LucideIcon } from "lucide-react";
import { demoWhatsAppHref } from "@/lib/siteConfig";

const MODULES: { label: string; detail: string; status: string; icon: LucideIcon }[] = [
  {
    label: "Fuerza de Ventas",
    detail: "Cobertura y pipeline",
    status: "128 activas",
    icon: Users,
  },
  {
    label: "Geolocalización",
    detail: "Equipos en ruta",
    status: "42 en campo",
    icon: MapPin,
  },
  {
    label: "Control Multiindustria",
    detail: "Operación unificada",
    status: "6 verticales",
    icon: Factory,
  },
];

export function Hero() {
  return (
    <section id="inicio" className="hero-glow text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div>
          <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-vea-sky uppercase">
            Software corporativo multisectorial
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl sm:leading-[1.08]">
            Transformamos la complejidad operativa en eficiencia digital
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
            Desarrollamos software a la medida, CRM corporativos y arquitecturas offline-first para que ventas, campo y dirección operen con la misma información en cualquier industria.
          </p>
          <div className="mt-8">
            <a
              href={demoWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-semibold text-vea-navy shadow-[0_12px_30px_-16px_rgba(0,0,0,0.6)] transition hover:bg-vea-soft sm:w-auto"
            >
              <MessageCircle className="h-4 w-4 text-vea-violet" aria-hidden />
              Solicitar demo
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-vea-sky/20 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold">Dashboard operativo</p>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-vea-sky">Multisectorial</span>
            </div>
            <ul className="mt-5 space-y-3">
              {MODULES.map((module) => {
                const Icon = module.icon;
                return (
                  <li key={module.label} className="flex items-center justify-between gap-3 rounded-2xl bg-white/10 px-4 py-3">
                    <span className="inline-flex min-w-0 items-center gap-2 text-sm">
                      <Icon className="h-4 w-4 shrink-0 text-vea-sky" aria-hidden />
                      <span className="min-w-0">
                        <span className="block font-medium">{module.label}</span>
                        <span className="block text-xs text-white/60">{module.detail}</span>
                      </span>
                    </span>
                    <span className="shrink-0 text-sm font-medium text-white/80">{module.status}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
