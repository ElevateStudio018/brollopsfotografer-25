import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useQuote } from "./QuoteContext";
import { QuoteForm } from "./QuoteForm";

export function QuoteModal() {
  const { isOpen, close } = useQuote();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-[rgba(3,15,39,0.65)] px-4 py-16"
      onClick={close}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Få gratis offert"
        className="page-fade relative w-full max-w-[560px] rounded-[2px] bg-white p-6 shadow-[0_24px_64px_rgba(3,15,39,0.35)] sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          aria-label="Stäng"
          onClick={close}
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-[2px] text-navy transition-colors hover:bg-[rgba(3,15,39,0.06)]"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <h2 className="pr-12 text-[22px] font-bold text-navy">Få gratis offert</h2>
        <p className="mt-2 mb-8 text-[16px]">
          Fyll i formuläret så återkommer vi med ett förslag och bokar ett kostnadsfritt hembesök.
        </p>
        <QuoteForm idPrefix="modal" />
      </div>
    </div>
  );
}
