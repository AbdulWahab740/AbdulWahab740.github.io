import Image from "next/image";
import headshot from "@/static/headshot.jpg";
import { me } from "@/lib/data";
// import { telemetry } from "@/lib/data"; // Restore with the telemetry panel.

export default function Hero() {
  return (
    <section className="w-full bg-surface border-b border-primary">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[580px]">
        <div className="md:col-span-8 p-6 md:p-margin-desktop flex flex-col justify-between border-b md:border-b-0 md:border-r border-primary bg-surface-container-lowest">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-micro-meta text-micro-meta uppercase tracking-widest text-on-surface-variant">
                SPEC // 
              </span>
            </div>
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl uppercase tracking-tighter text-primary leading-none mb-6">
              I build intelligent{" "}
              <span className="text-secondary">systems.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface max-w-2xl mb-5 leading-relaxed">
              Applied AI Engineer working across deep learning, computer vision, and
              LLM-powered systems — developing models, intelligent workflows, and
              practical AI applications.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {me.focus.map((item) => (
                <span
                  key={item}
                  className="border border-primary bg-surface px-2 py-0.5 font-mono-code text-[11px] uppercase text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-4 border-t border-primary">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#ask-section"
                className="px-5 py-3 bg-primary text-on-primary font-mono-code text-mono-code uppercase tracking-wider hover:bg-secondary transition-none flex items-center gap-2"
              >
                <span>Ask My Portfolio →</span>
                <span className="bg-surface-container-lowest text-primary px-1 text-[11px] font-bold">
                  [Key: /]
                </span>
              </a>
              <a
                href="#work-section"
                className="px-5 py-3 border border-primary text-primary font-mono-code text-mono-code uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-none"
              >
                [ View System Topologies ↓ ]
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col justify-between bg-surface p-6 md:p-space-lg">
          <div className="flex justify-between items-start">
            <span className="font-micro-meta text-micro-meta uppercase tracking-widest text-primary">
              OPERATOR // VISUAL_ID
            </span>
            <span className="font-mono-code text-mono-code text-on-surface-variant">
              PORTRAIT_01
            </span>
          </div>
          <div className="my-6">
            <div className="border border-primary bg-surface-container-lowest p-2">
              <div className="relative aspect-square overflow-hidden border border-primary bg-surface-variant">
                <Image
                  src={headshot}
                  alt="Abdul Wahab — Applied AI Engineer"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  preload
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-2 flex items-center justify-between gap-2 border-t border-primary pt-2">
                <span className="font-mono-code text-mono-code text-primary uppercase">
                  ABDUL WAHAB
                </span>
                <span className="font-mono-code text-[11px] font-bold uppercase text-secondary">
                  {`${me.status} // ${me.node}`}
                </span>
              </div>
            </div>
          </div>
          {/* Telemetry panel temporarily disabled. Uncomment this block and the
              telemetry import above to restore it.
          <div className="space-y-4 my-6">
            {telemetry.map((item) => (
              <div
                key={item.label}
                className="border border-primary p-3 bg-surface-container-lowest"
              >
                <div className="font-micro-meta text-micro-meta uppercase text-on-surface-variant">
                  {item.label}
                </div>
                <div
                  className={
                    item.monoValue
                      ? "font-mono-code text-mono-code text-primary mt-1 select-all text-xs"
                      : "font-mono-metric text-mono-metric text-primary mt-1"
                  }
                >
                  {item.value}
                  {item.note && item.progress && (
                    <span className="ml-1 text-secondary text-xs font-bold font-mono-code">
                      {item.note}
                    </span>
                  )}
                </div>
                {item.progress && (
                  <div className="w-full bg-surface-variant h-1 mt-2">
                    <div className="bg-secondary h-1" style={{ width: item.progress }}></div>
                  </div>
                )}
                {item.note && !item.progress && (
                  <div
                    className={`font-mono-code text-mono-code text-[11px] mt-1 ${
                      item.accentNote ? "text-secondary" : "text-on-surface-variant"
                    }`}
                  >
                    {item.note}
                  </div>
                )}
              </div>
            ))}
          </div>
          */}
          <div className="border-t border-primary pt-4 flex items-baseline justify-between">
            <span className="font-mono-code text-mono-code text-primary uppercase">
              ACADEMIC RECORD:
            </span>
            <span className="font-mono-code text-mono-code text-secondary font-bold uppercase">
              CGPA {me.cgpa}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
