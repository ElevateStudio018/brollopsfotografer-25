import { useMemo, useState } from "react";
import { projects, type Project } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function ProjectGrid({ items = projects, withFilter = true }: { items?: Project[]; withFilter?: boolean }) {
  const categories = useMemo(
    () => ["Alla", ...Array.from(new Set(items.map((item) => item.category)))],
    [items],
  );
  const [active, setActive] = useState("Alla");
  const filtered = active === "Alla" ? items : items.filter((item) => item.category === active);

  return (
    <div>
      {withFilter ? (
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`btn-base ${active === category ? "btn-yellow" : "btn-outline-navy"} !min-h-[44px] !py-3 !text-[15px]`}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {filtered.map((project, index) => (
          <Reveal
            key={`${project.category}-${index}`}
            delay={(index % 3) * 80}
            className="break-inside-avoid border border-[rgba(3,15,39,0.10)] bg-white"
          >
            <img
              src={project.image}
              width={project.width}
              height={project.height}
              loading="lazy"
              alt={`Utfört projekt inom ${project.category} – Flottsunds Bygg AB i Uppsala`}
              className="block w-full"
              style={{ aspectRatio: `${project.width} / ${project.height}`, objectFit: "cover" }}
            />
            <div className="px-4 py-4">
              <p className="text-[13px] font-medium text-navy">{project.category}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
