"use client";

import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { demoWhatsAppHref } from "@/lib/siteConfig";

const NAV = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#demo", label: "Demo" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-vea-line/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.png" alt="VEA+" className="h-9 w-auto shrink-0 sm:h-10" />
          <span className="min-w-0 text-[10px] font-semibold leading-tight text-vea-violet sm:text-[11px] lg:text-xs">
            Visión y Estrategia Administrativa
          </span>
        </a>

        <nav className="hidden shrink-0 items-center gap-6 md:flex" aria-label="Secciones">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-vea-muted transition hover:text-vea-violet">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={demoWhatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-vea-blue to-vea-violet px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 md:inline-flex"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          Solicitar demo
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-vea-line text-vea-navy md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div id="menu-movil" className="border-t border-vea-line bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Secciones">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={close} className="rounded-xl px-3 py-3 text-base font-medium text-vea-navy hover:bg-vea-soft">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={demoWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.setTimeout(close, 300);
            }}
            className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-vea-blue to-vea-violet px-4 text-sm font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Solicitar demo
          </a>
        </div>
      ) : null}
    </header>
  );
}
