import { useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { QuoteButton } from "@/components/site/QuoteButton";
import { QuoteForm } from "@/components/site/QuoteForm";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { useQuote } from "@/components/site/QuoteContext";
import { company, faq, projects } from "@/lib/site-data";

const title = "Flottsunds Bygg AB — byggföretag och snickare i Uppsala";
const description =
  "Flottsunds Bygg AB utför nybyggnation, tillbyggnad och renovering i Uppsala med omnejd. Totalentreprenad, över 35 års erfarenhet och kostnadsfri offert.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: company.name,
          description: company.description,
          telephone: company.phoneDisplay,
          email: company.email,
          foundingDate: String(company.founded),
          areaServed: company.areas,
          address: { "@type": "PostalAddress", addressLocality: company.city, addressCountry: "SE" },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout showTopBar flushTop>
      <Hero />
      <TrustBar />
      <About />
      <Projects />
      <Process />
      <Faq />
      <Contact />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[560px] w-full items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        poster={company.heroImage}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={company.heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[rgba(3,15,39,0.58)]" />
      <div className="container-site relative z-10 flex flex-col items-center text-center">
        <h1 className="h1-hero max-w-[900px] text-white">
          Ditt byggföretag i {company.city}
        </h1>
        <div className="mt-10">
          <QuoteButton />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-b border-[rgba(3,15,39,0.10)] bg-white">
      <div className="container-site grid gap-8 py-12 text-center sm:grid-cols-3 lg:py-16">
        {[
          { value: company.yearsExperience, suffix: "+", label: "År i branschen" },
          { value: company.employees, suffix: "", label: "Anställda" },
          { value: company.founded, suffix: "", label: "Grundat", plain: true },
        ].map((stat) => (
          <Reveal key={stat.label}>
            <p className="text-[28px] font-bold leading-none text-navy lg:text-[36px]">
              {stat.plain ? stat.value : <CountUp value={stat.value} suffix={stat.suffix} />}
            </p>
            <p className="mt-3 text-[18px] font-bold text-navy lg:text-[20px]">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="om-oss" className="py-20 lg:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <img
            src={company.aboutImage}
            width={1200}
            height={1400}
            loading="lazy"
            alt={`Snickare från ${company.name} på ett bygge i ${company.city}`}
            className="w-full border border-[rgba(3,15,39,0.10)] object-cover"
          />
        </Reveal>
        <Reveal delay={80}>
          <h2 className="h2-section">Om {company.name}</h2>
          <p className="mt-6">{company.aboutText}</p>
          <div className="mt-8 flex flex-row flex-wrap items-center gap-4">
            <QuoteButton className="btn-base btn-yellow !px-4" />
            <a href={company.phoneHref} className="btn-base btn-outline-navy !px-4">
              {company.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projekt" className="pb-20 lg:pb-28">
      <div className="container-site">
        <Reveal>
          <h2 className="h2-section">Utförda projekt</h2>
          <p className="mt-6 max-w-[620px]">
            Ett urval av bygg- och renoveringsarbeten vi utfört i {company.city} med omnejd.
          </p>
        </Reveal>
        <div className="mt-12">
          <ProjectGrid items={projects.slice(0, 6)} withFilter={false} />
        </div>
        <Reveal className="mt-12">
          <Link to="/projekt" className="btn-base btn-outline-navy">
            Se alla projekt
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="container-site">
        <Reveal>
          <h2 className="h2-section">Så går det till</h2>
        </Reveal>
        <ProcessTimeline />
      </div>
    </section>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-site">
        <Reveal>
          <h2 className="h2-section">Vanliga frågor</h2>
        </Reveal>
        <div className="mt-12 border-t border-[rgba(3,15,39,0.12)]">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className="border-b border-[rgba(3,15,39,0.12)]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-[18px] font-bold text-navy">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-navy transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { open } = useQuote();
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <section id="kontakt" className="pb-20 lg:pb-28">
      <div className="container-site">
        <Reveal>
          <h2 className="h2-section">Kontakt</h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ul className="space-y-6">
              <li>
                <p className="text-[14px] font-medium text-navy">Telefon</p>
                <a href={company.phoneHref} className="mt-1 block text-[16px] text-[#666666] hover:text-navy">
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <p className="text-[14px] font-medium text-navy">E-post</p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 block break-all text-[16px] text-[#666666] hover:text-navy"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <p className="text-[14px] font-medium text-navy">Område</p>
                <p className="mt-1 text-[16px]">{company.city} med omnejd</p>
              </li>
            </ul>
            <button
              ref={ref}
              type="button"
              className="btn-base btn-outline-navy mt-8"
              onClick={() => open(ref.current)}
            >
              Få gratis offert
            </button>
          </Reveal>

          <Reveal delay={80} className="border border-[rgba(3,15,39,0.12)] p-6 lg:p-8">
            <h3 className="text-[20px] font-bold text-navy">Begär offert</h3>
            <p className="mt-2 mb-8 text-[16px]">
              Beskriv ditt projekt så återkommer vi och bokar ett kostnadsfritt hembesök.
            </p>
            <QuoteForm idPrefix="inline" />
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div className="aspect-video w-full border border-[rgba(3,15,39,0.12)]">
            <iframe
              title={`Karta över ${company.city}`}
              src={company.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
          <a
            href={company.mapLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-[13px] text-[#666666] underline underline-offset-4"
          >
            Öppna kartan i Google Maps
          </a>
        </Reveal>
      </div>
    </section>
  );
}
