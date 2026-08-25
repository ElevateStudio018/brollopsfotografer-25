import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { QuoteButton } from "@/components/site/QuoteButton";
import { Reveal } from "@/components/site/Reveal";
import { company } from "@/lib/site-data";

const title = "Våra projekt — Flottsunds Bygg AB i Uppsala";
const description =
  "Se utförda bygg- och renoveringsprojekt från Flottsunds Bygg AB i Uppsala med omnejd: nybyggnation, kök, badrum, tillbyggnad, tak och finsnickeri.";

export const Route = createFileRoute("/projekt")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projekt" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projekt" }],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  return (
    <SiteLayout>
      <section className="py-20 lg:py-28">
        <div className="container-site">
          <Reveal>
            <h1 className="h2-section">Våra projekt</h1>
            <p className="mt-6 max-w-[640px]">
              Ett urval av bygg- och renoveringsarbeten vi utfört i {company.city} med omnejd. Bilderna
              visar färdiga resultat inom nybyggnation, renovering, kök, badrum, tak, mark och
              finsnickeri.
            </p>
          </Reveal>
          <div className="mt-16">
            <ProjectGrid />
          </div>
          <Reveal className="mt-16">
            <QuoteButton />
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
