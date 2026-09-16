import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../lib/contact.js";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp al 099 489 6810"
      className="pulse-ring fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-foreground shadow-lg transition-transform hover:scale-110 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
