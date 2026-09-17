import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";
import Logo from "@/assets/cordero-logo.svg";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={Logo} alt="Cordero Services" className="size-22" />
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex"
        >
          <a href="#servicios" className="transition-colors hover:text-accent">
            Servicios
          </a>
          <a href="#respaldo" className="transition-colors hover:text-accent">
            Respaldo
          </a>
          <a
            href="#preguntas-frecuentes"
            className="transition-colors hover:text-accent"
          >
            Preguntas
          </a>
          <a href="#contacto" className="transition-colors hover:text-accent">
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Agenda tu asesoría
          </a>
        </div>
      </div>
    </header>
  );
}
