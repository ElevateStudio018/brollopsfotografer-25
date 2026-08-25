import { useRef } from "react";
import { company } from "@/lib/site-data";
import { useQuote } from "./QuoteContext";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  const { open } = useQuote();
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-navy py-20 lg:py-28">
      <Reveal className="container-site text-center">
        <h2 className="mx-auto max-w-[720px] text-[28px] font-bold leading-tight text-white md:text-[36px] lg:text-[40px]">
          Redo att starta ditt byggprojekt?
        </h2>
        <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-4">
          <a href={company.phoneHref} className="btn-base btn-yellow">
            {company.phoneDisplay}
          </a>
          <button
            ref={ref}
            type="button"
            className="btn-base btn-outline-light"
            onClick={() => open(ref.current)}
          >
            Få gratis offert
          </button>
        </div>
      </Reveal>
    </section>
  );
}
