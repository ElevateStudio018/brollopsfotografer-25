import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { QuoteButton } from "@/components/site/QuoteButton";
import { Reveal } from "@/components/site/Reveal";
import { company, services } from "@/lib/site-data";

export const Route = createFileRoute("/tjanster/$slug")({
  loader: ({ params }) => {
    const service = services.find((item) => item.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Tjänsten hittades inte" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.service.name} i Uppsala — ${company.name}`;
    const description = loaderData.service.short;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/tjanster/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/tjanster/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: loaderData.service.name,
            description: loaderData.service.short,
            areaServed: company.city,
            provider: {
              "@type": "GeneralContractor",
              name: company.name,
              telephone: company.phoneDisplay,
              email: company.email,
            },
          }),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <SiteLayout flushTop>
      <div className="relative h-[46vh] min-h-[320px] w-full pt-[72px]">
        <img
          src={service.image}
          alt={`${service.name} utförd av ${company.name} i ${company.city}`}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[rgba(3,15,39,0.55)]" />
      </div>

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="max-w-[760px] text-left">
            <h1 className="h1-hero text-navy">{service.name}</h1>
            <p className="mt-6 text-[16px]">{service.intro}</p>
          </div>

          <div className="mt-12 max-w-[760px] space-y-6">
            {service.body.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 24)}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 max-w-[760px] border border-[rgba(3,15,39,0.12)] p-6 lg:p-8">
            <h2 className="text-[20px] font-bold text-navy">Det här ingår</h2>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="text-[16px] text-[#666666]">
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-12 flex flex-row flex-wrap items-center gap-4">
            <QuoteButton />
            <a href={company.phoneHref} className="btn-base btn-outline-navy">
              {company.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-site">
          <Reveal>
            <h2 className="h2-section">Andra tjänster</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other, index) => (
              <Reveal key={other.slug} delay={(index % 3) * 80} className="h-full">
                <Link
                  to="/tjanster/$slug"
                  params={{ slug: other.slug }}
                  className="flex h-full flex-col border border-[rgba(3,15,39,0.12)] bg-white transition-transform duration-200 hover:-translate-y-1"
                >
                  <img
                    src={other.image}
                    alt={`${other.name} — ${company.name}`}
                    loading="lazy"
                    className="h-[200px] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-[18px] font-bold text-navy">{other.name}</h3>
                    <p className="mt-3 text-[15px]">{other.short}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
