import { me, research } from "@/lib/data";

export default function Research() {
  const { paper, protocol } = research;

  return (
    <section
      id="research-section"
      className="w-full bg-surface-container-lowest border-b border-primary"
    >
      <div className="max-w-[1440px] mx-auto p-6 md:p-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-primary">
          <div>
            <h2 className="font-display-xl text-display-xl-mobile md:text-display-xl uppercase tracking-tighter text-primary leading-none">
              research<span className="text-secondary">.</span>
            </h2>
            <p className="font-mono-code text-mono-code uppercase text-on-surface-variant mt-2">
              [ PEER-REVIEWED SCIENTIFIC PUBLICATIONS // OPEN ACCESS PAPERS ]
            </p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="font-micro-meta text-micro-meta uppercase text-on-surface-variant">
              ORCID:
            </span>
            <a
              href={`https://orcid.org/${me.orcid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-code text-mono-code text-primary font-bold border border-primary px-2 py-0.5"
            >
              {me.orcid}
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border border-primary bg-surface p-6 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                <span className="bg-primary text-on-primary font-mono-code text-xs px-2 py-0.5 uppercase">
                  SPRINGER // SUBMITTED
                </span>
                <span className="text-secondary font-mono-code text-xs uppercase font-bold">
                  [ PEER REVIEW: IN EVALUATION ]
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md uppercase tracking-tight text-primary mb-3">
                {paper.title}
              </h3>
              <p className="font-mono-code text-mono-code text-on-surface-variant text-xs mb-4">
                Venue: <span className="text-primary font-bold">{paper.venue}</span>
              </p>
              <p className="font-mono-code text-mono-code text-on-surface-variant text-xs mb-4">
                Authors: <span className="text-primary font-bold">{paper.authors}</span>
              </p>
              <p className="font-body-sm text-body-sm text-on-surface mb-6">{paper.text}</p>
              <div className="border border-primary bg-surface-container-lowest p-3 mb-6">
                <div className="flex justify-between items-center mb-1 gap-2">
                  <span className="font-micro-meta text-micro-meta uppercase text-on-surface-variant">
                    EMPIRICAL BENCHMARK SPECIFICATION
                  </span>
                  <span className="font-mono-code text-[10px]">
                    SPRINGER.JMLC.2025.BENCHMARK
                  </span>
                </div>
                <div
                  aria-hidden
                  className="h-10 w-full text-primary"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, currentColor 0 3px, transparent 3px 7px)",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-primary">
              <a
                href="https://drive.google.com/file/d/1Uo-vJq_3NqXqibLIcGQJyL8xCs6hySQt/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-on-primary font-mono-code text-mono-code uppercase hover:bg-secondary transition-none text-xs font-bold"
              >
                [ MANUSCRIPT DRAFT // 18 RUNS ]
              </a>
            </div>
          </div>
          <div className="border border-primary bg-surface p-6 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                <span className="bg-surface-variant text-primary font-mono-code text-xs px-2 py-0.5 uppercase border border-primary">
                  PROTOCOL // EXPERIMENTAL DESIGN
                </span>
                <span className="text-secondary font-mono-code text-xs uppercase font-bold">
                  [ 3 SEEDS CONTROL ]
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md uppercase tracking-tight text-primary mb-3">
                {protocol.title}
              </h3>
              <div className="space-y-4 my-4 font-mono-code text-xs">
                <div className="border border-primary bg-surface-container-lowest p-3">
                  <div className="text-on-surface-variant font-micro-meta uppercase text-[10px]">
                    {protocol.winner.label}
                  </div>
                  <div className="font-headline-md text-headline-md text-primary mt-1">
                    {protocol.winner.value}
                  </div>
                  <p className="font-body-sm text-xs text-on-surface mt-1">
                    {protocol.winner.text}
                  </p>
                </div>
                <div className="border border-primary bg-surface-container-lowest p-3">
                  <div className="text-on-surface-variant font-micro-meta uppercase text-[10px]">
                    {protocol.throughput.label}
                  </div>
                  <div className="font-headline-md text-headline-md text-secondary mt-1">
                    {protocol.throughput.value}
                  </div>
                  <p className="font-body-sm text-xs text-on-surface mt-1">
                    {protocol.throughput.text}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-primary">
              <span className="font-mono-code text-[11px] text-on-surface-variant uppercase">
                STATUS: UNDER PEER REVIEW
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
