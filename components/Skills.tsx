import { skillDomains } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills-section"
      className="w-full bg-primary text-on-primary border-b border-primary"
    >
      <div className="max-w-[1440px] mx-auto p-6 md:p-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-on-primary gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-micro-meta text-micro-meta uppercase tracking-widest text-on-primary-container">
                TECHNICAL CAPABILITY MATRIX
              </span>
              <span className="text-on-primary font-mono-code">/</span>
              <span className="font-mono-code text-mono-code uppercase text-secondary font-bold">
                05 CORE DOMAINS
              </span>
            </div>
            <h2 className="font-display-xl text-display-xl-mobile md:text-display-xl uppercase tracking-tighter text-on-primary leading-none">
              skills<span className="text-secondary">.</span>
            </h2>
            <p className="font-mono-code text-mono-code uppercase text-on-primary-container mt-2">
              [ PRODUCTION RUNTIMES // VECTOR DATABASES // COMPUTER VISION //
              DISTRIBUTED SERVING ]
            </p>
          </div>
          <div className="font-mono-code text-xs uppercase border border-on-primary px-3 py-1 text-on-primary">
            STANDARDS: ZERO-FAILURE DISPATCH
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillDomains.map((domain) => (
            <div
              key={domain.code}
              className={`border border-on-primary bg-primary p-6 flex flex-col justify-between ${
                domain.wide ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="border-b border-on-primary pb-3 mb-4">
                <span className="font-micro-meta text-micro-meta uppercase text-secondary font-bold">
                  {domain.code}
                </span>
                <h3 className="font-headline-md text-headline-md uppercase text-on-primary tracking-tight mt-1">
                  {domain.title}
                </h3>
              </div>
              {domain.secondColumn ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ul className="space-y-2 font-mono-code text-xs text-on-primary-container mb-6">
                    {domain.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2 font-mono-code text-xs text-on-primary-container mb-6">
                    {domain.secondColumn.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <ul className="space-y-2 font-mono-code text-xs text-on-primary-container mb-6">
                  {domain.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <div
                className={`border-t border-on-primary pt-3 text-[11px] font-mono-code text-on-primary-container uppercase ${
                  domain.wide ? "mt-4" : ""
                }`}
              >
                {domain.specialization}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
