import { Headset, Layers, Users, WifiOff, type LucideIcon } from "lucide-react";

const BENEFITS: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Software a la medida",
    text: "Sistemas diseñados sobre el flujo real de tu operación, sin forzar procesos genéricos de una sola industria.",
    icon: Layers,
  },
  {
    title: "CRM corporativos",
    text: "Cuentas, pipeline y seguimiento comercial en un solo registro para equipos de ventas y dirección.",
    icon: Users,
  },
  {
    title: "Arquitectura offline-first",
    text: "La operación en campo sigue disponible sin conexión y se sincroniza cuando vuelve la red.",
    icon: WifiOff,
  },
  {
    title: "Acompañamiento especializado",
    text: "Soporte para equipos que digitalizan fuerza de ventas, geolocalización y control multiindustria.",
    icon: Headset,
  },
];

export function Services() {
  return (
    <section id="beneficios" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-wide text-vea-violet uppercase">Capacidades para tu operación</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-vea-navy sm:text-4xl">La operación corporativa, en una sola plataforma</h2>
        <p className="mt-3 text-base leading-7 text-vea-muted">
          VEA+ une software a la medida, CRM corporativos y arquitecturas offline-first para controlar ventas, rutas y operación en distintas industrias.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <article key={benefit.title} className="flex flex-col rounded-3xl border border-vea-line bg-white p-5 shadow-[0_18px_40px_-30px_rgba(16,40,79,0.55)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-vea-blue to-vea-violet text-white">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-base font-semibold leading-6 text-vea-navy">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-vea-muted">{benefit.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
