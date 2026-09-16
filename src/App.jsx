import { Landmark, Scale, Building2, Ruler, Phone, MessageCircle, Check } from "lucide-react";

import heroImage from "./assets/hero-terreno.jpg";
import respaldoImage from "./assets/respaldo-legal.jpg";
import { SiteHeader } from "./components/SiteHeader.jsx";
import { SiteFooter } from "./components/SiteFooter.jsx";
import { WhatsAppButton } from "./components/WhatsAppButton.jsx";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "./lib/contact.js";

const services = [
  {
    icon: Landmark,
    title: "MIDUVI",
    text: "Asesoría y gestión técnica para procesos de legalización y regularización de terrenos.",
  },
  {
    icon: Scale,
    title: "Prescripción adquisitiva de dominio",
    text: "Apoyo técnico en procesos de regularización de propiedades mediante prescripción, de acuerdo con la situación particular del predio.",
  },
  {
    icon: Building2,
    title: "Subsecretaría",
    text: "Gestión y acompañamiento en trámites de legalización y regularización de terrenos.",
  },
  {
    icon: Ruler,
    title: "Mediciones",
    text: "Levantamientos topográficos, mediciones de terrenos y documentación técnica necesaria para tramitar tu escritura.",
  },
];

const questions = [
  "¿Tienes un terreno sin escrituras?",
  "¿Posees una propiedad desde hace años y no puedes formalizarla?",
  "¿Necesitas regularizar tu terreno ante las entidades correspondientes?",
];

const faqs = [
  {
    question: "¿Cómo puedo legalizar un terreno sin escrituras en Ecuador?",
    answer:
      "El camino adecuado depende de tu caso: el tiempo de posesión, el tipo de predio y la entidad involucrada (MIDUVI, Subsecretaría o municipio). Analizamos tu situación y te orientamos sobre la vía más adecuada, que puede incluir la prescripción adquisitiva de dominio u otro proceso de regularización.",
  },
  {
    question: "¿Qué es la prescripción adquisitiva de dominio?",
    answer:
      "Es un proceso legal que permite formalizar la propiedad de un terreno poseído de forma continua durante el tiempo que establece la ley, cuando no existen escrituras previas a tu nombre.",
  },
  {
    question: "¿Qué documentos necesito para regularizar mi terreno?",
    answer:
      "Por lo general se requieren documentos que acrediten la posesión, un levantamiento topográfico o plano del predio y certificados de la entidad correspondiente. Revisamos tu caso puntual y te indicamos exactamente qué necesitas.",
  },
  {
    question: "¿Cuánto tiempo toma el proceso de legalización de un terreno?",
    answer:
      "El tiempo varía según el tipo de trámite, la entidad involucrada (MIDUVI, Subsecretaría o municipio) y la situación particular del predio. Te damos un estimado una vez evaluamos tu caso en la asesoría inicial.",
  },
  {
    question: "¿En qué ciudades de Ecuador ofrecen este servicio?",
    answer:
      "Brindamos asesoría y acompañamiento para la legalización de terrenos a nivel nacional en Ecuador. Escríbenos por WhatsApp para revisar la ubicación de tu terreno.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="inicio">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:py-24">
            <div className="lg:col-span-7">
              <p className="eyebrow">Escrituras · Ecuador</p>
              <h1 className="mt-5 text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Legalización de <span className="text-accent">terrenos</span> y propiedades
              </h1>
              <p className="mt-6 text-xl font-semibold text-foreground sm:text-2xl">
                Tu terreno merece estar legalizado.
              </p>
              <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-muted-foreground">
                Te ayudamos a encontrar la vía adecuada para regularizar y legalizar tu propiedad.
              </p>

              <ul className="mt-8 max-w-[52ch] space-y-3">
                {questions.map((q) => (
                  <li key={q} className="flex items-start gap-3 text-[15px] text-foreground/85">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    {q}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-lg font-semibold text-accent">Estamos para ayudarte.</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-bold uppercase tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Agenda tu asesoría
                </a>
                <a href={PHONE_TEL} className="group inline-flex flex-col leading-tight">
                  <span className="text-2xl font-extrabold text-foreground transition-colors group-hover:text-accent">
                    {PHONE_DISPLAY}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Llámanos hoy
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img
                src={heroImage}
                width={1600}
                height={1200}
                alt="Vista aérea de un terreno delimitado listo para su legalización"
                className="aspect-[4/3] w-full rounded-2xl border border-border object-cover lg:aspect-[4/5]"
              />
            </div>
          </div>
        </section>

        {/* INFO */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow">Cada caso es distinto</p>
              <h2 className="mt-4 max-w-[20ch] text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                No dejes tu patrimonio sin respaldo legal.
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                Cada propiedad tiene una situación diferente.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Analizamos tu caso y te orientamos sobre las alternativas disponibles para lograr la
                regularización de tu terreno.
              </p>
              <p className="mt-6 border-l-2 border-accent pl-4 text-base font-semibold text-foreground">
                Podemos ayudarte en procesos relacionados con:
              </p>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="grid gap-5 sm:grid-cols-2">
              {services.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold uppercase tracking-tight text-foreground">
                    {title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RESPALDO */}
        <section id="respaldo" className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">Respaldo profesional</p>
              <h2 className="mt-4 max-w-[22ch] text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                Todo el respaldo que necesitas para tu proceso.
              </h2>
              <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-muted-foreground">
                Cuentas con apoyo técnico y profesionales legales en nuestra oficina durante todo el
                proceso.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Soporte técnico", "Abogados en oficina", "Documentación", "Acompañamiento"].map(
                  (item) => (
                    <p
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-border bg-surface-strong px-4 py-3 text-sm font-semibold text-foreground"
                    >
                      <Check className="size-4 text-accent" aria-hidden="true" />
                      {item}
                    </p>
                  ),
                )}
              </div>
            </div>
            <div className="lg:col-span-5">
              <img
                src={respaldoImage}
                width={1200}
                height={912}
                loading="lazy"
                alt="Escritura de propiedad con sello notarial junto a un plano topográfico"
                className="aspect-[4/3] w-full rounded-2xl border border-border object-cover"
              />
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES */}
        <section id="preguntas-frecuentes" className="border-b border-border">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 className="mt-4 max-w-[26ch] text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
              Todo lo que debes saber sobre legalizar tu terreno en Ecuador.
            </h2>

            <div className="mt-10 divide-y divide-border">
              {faqs.map(({ question, answer }) => (
                <details key={question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground">
                    {question}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl font-bold text-accent transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[64ch] text-[15px] leading-relaxed text-muted-foreground">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contacto" className="bg-accent">
          <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-accent-foreground sm:text-5xl">
              Hablemos de tu terreno.
            </h2>
            <p className="mx-auto mt-5 max-w-[48ch] text-base leading-relaxed text-accent-foreground/80">
              Legalización profesional, orientación personalizada y evaluación de tu caso. Agenda tu
              asesoría sin compromiso.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-base font-bold uppercase tracking-wide text-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Agenda tu asesoría
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 text-2xl font-extrabold text-accent-foreground sm:text-3xl"
              >
                <Phone className="size-6" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
