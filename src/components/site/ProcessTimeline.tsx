import { useEffect, useRef, useState } from "react";
import { ClipboardList, Hammer, HomeIcon, Phone } from "lucide-react";
import { processSteps } from "@/lib/site-data";

const stepIcons = [Phone, HomeIcon, ClipboardList, Hammer];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.62;
      const raw = (anchor - rect.top) / Math.max(rect.height, 1);
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const count = processSteps.length;

  return (
    <div ref={containerRef} className="relative mt-12">
      {/* Track */}
      <div className="pointer-events-none absolute inset-y-0 left-[19px] w-[2px] bg-[rgba(3,15,39,0.12)] lg:left-1/2 lg:-translate-x-1/2">
        <div
          className="w-full bg-yellow"
          style={{ height: `${progress * 100}%`, transition: "height 120ms linear" }}
        />
      </div>

      <ol className="space-y-10 lg:space-y-0">
        {processSteps.map((step, index) => {
          const Icon = stepIcons[index] ?? Phone;
          // Each step activates when the fill line reaches its marker.
          const threshold = count > 1 ? index / (count - 0.35) : 0;
          const isActive = progress >= threshold;
          const alignRight = index % 2 === 1;

          return (
            <li
              key={step.title}
              className="relative pl-16 lg:grid lg:grid-cols-2 lg:gap-16 lg:pb-16 lg:pl-0"
            >
              {/* Marker */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white transition-all duration-500 ease-out lg:left-1/2 lg:-translate-x-1/2"
                style={{
                  borderColor: isActive ? "var(--yellow)" : "rgba(3,15,39,0.15)",
                  backgroundColor: isActive ? "var(--yellow)" : "#ffffff",
                  transform: undefined,
                }}
              >
                <Icon
                  className="h-5 w-5 text-navy"
                  strokeWidth={1.5}
                  style={{ opacity: isActive ? 1 : 0.35 }}
                />
              </span>

              <div
                className={`transition-all duration-700 ease-out ${
                  alignRight ? "lg:col-start-2 lg:pl-8" : "lg:col-start-1 lg:pr-8 lg:text-right"
                }`}
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? "none"
                    : `translate3d(0, 24px, 0)`,
                }}
              >
                <div className="border border-[rgba(3,15,39,0.12)] p-6">
                  <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#666666]">
                    Steg {index + 1}
                  </p>
                  <h3 className="mt-2 text-[18px] font-bold text-navy">{step.title}</h3>
                  <p className="mt-3 text-[16px]">{step.text}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
