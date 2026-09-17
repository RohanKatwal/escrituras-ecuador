import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../lib/contact.js";
import Logo from "@/assets/cordero-logo.svg"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Cordero Services"
              className="size-24"
            />
          </div>
          <p className="max-w-[30ch] text-sm leading-relaxed text-muted-foreground">
            Legalización y regularización de terrenos y propiedades en Ecuador.
          </p>
        </div>

        <div>
          <p className="eyebrow">Contacto</p>
          <a
            href={PHONE_TEL}
            className="mt-3 block text-sm text-foreground transition-colors hover:text-accent"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            Escríbenos por WhatsApp
          </a>
          <p className="mt-1 text-sm text-muted-foreground">Cuenca, Ecuador</p>
        </div>

        <div>
          <p className="eyebrow">Servicio</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            MIDUVI · Prescripción adquisitiva de dominio · Subsecretaría · Mediciones
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Cobertura a nivel nacional en Ecuador.</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Cordero Services SAS. Todos los derechos reservados.</p>
          <p>Escrituras · Legalización de propiedades</p>
        </div>
      </div>
    </footer>
  );
}
