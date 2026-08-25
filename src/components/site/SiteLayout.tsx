import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FinalCTA } from "./FinalCTA";
import { QuoteProvider } from "./QuoteContext";
import { QuoteModal } from "./QuoteModal";

export function SiteLayout({
  children,
  showTopBar = false,
  flushTop = false,
}: {
  children: ReactNode;
  showTopBar?: boolean;
  flushTop?: boolean;
}) {
  return (
    <QuoteProvider>
      <Navbar showTopBar={showTopBar} />
      <main className={`page-fade ${flushTop ? "" : "pt-[72px]"}`}>{children}</main>
      <FinalCTA />
      <Footer />
      <QuoteModal />
    </QuoteProvider>
  );
}
