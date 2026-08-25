import { useRef } from "react";
import { useQuote } from "./QuoteContext";

export function QuoteButton({
  className = "btn-base btn-yellow",
  label = "Få gratis offert",
}: {
  className?: string;
  label?: string;
}) {
  const { open } = useQuote();
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <button ref={ref} type="button" className={className} onClick={() => open(ref.current)}>
      {label}
    </button>
  );
}
