import logo from "@/assets/flottsunds-bygg-logo.png.asset.json";
import { Link } from "@tanstack/react-router";
import { company, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(3,15,39,0.12)] bg-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <p className="text-[18px] font-bold text-navy">{company.name}</p>
          <p className="mt-4 text-[16px]">{company.description}</p>
        </div>

        <div>
          <p className="text-[18px] font-bold text-navy">Tjänster</p>
          <ul className="mt-4 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/tjanster/$slug"
                  params={{ slug: service.slug }}
                  className="text-[16px] text-[#666666] transition-colors hover:text-navy"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[18px] font-bold text-navy">Områden</p>
          <ul className="mt-4 space-y-3">
            {company.areas.map((area) => (
              <li key={area} className="text-[16px] text-[#666666]">
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[18px] font-bold text-navy">Kontakt & länkar</p>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={company.phoneHref} className="text-[16px] text-[#666666] hover:text-navy">
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="break-all text-[16px] text-[#666666] hover:text-navy"
              >
                {company.email}
              </a>
            </li>
            <li>
              <Link to="/projekt" className="text-[16px] text-[#666666] hover:text-navy">
                Våra projekt
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-site border-t border-[rgba(3,15,39,0.08)] py-8">
        <p className="text-[13px]">
          © {new Date().getFullYear()} {company.name}, ditt byggföretag i {company.city}
        </p>
      </div>
    </footer>
  );
}
