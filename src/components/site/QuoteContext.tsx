import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";

type QuoteContextValue = {
  isOpen: boolean;
  open: (trigger?: HTMLElement | null) => void;
  close: () => void;
  lastTrigger: React.RefObject<HTMLElement | null>;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const open = useCallback((trigger?: HTMLElement | null) => {
    lastTrigger.current = trigger ?? null;
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    const trigger = lastTrigger.current;
    if (trigger) window.setTimeout(() => trigger.focus(), 0);
  }, []);

  const value = useMemo(() => ({ isOpen, open, close, lastTrigger }), [isOpen, open, close]);

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
  return ctx;
}
