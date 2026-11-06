import { jobs, me } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience-section"
      className="w-full bg-surface-container-lowest border-b border-primary"
    >
      <div className="max-w-[1440px] mx-auto p-6 md:p-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-primary gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="font-micro-meta text-micro-meta uppercase tracking-widest text-on-surface-variant">
                CHRONOLOGICAL PRODUCTION LOG
              </span>
              <span className="text-primary font-mono-code">/</span>
              <span className="font-mono-code text-mono-code uppercase text-secondary font-bold">
                VERIFIED ROLES
              </span>
            </div>
            <h2 className="font-display-xl text-display-xl-mobile md:text-display-xl uppercase tracking-tighter text-primary leading-none">
              experience<span className="text-secondary">.</span>
            </h2>
            <p className="font-mono-code text-mono-code uppercase text-on-surface-variant mt-2">
              [ FIELD ENGINEERING // DEPLOYED SYSTEMS // MEASURABLE LATENCY &amp;
              ACCURACY DELTAS ]
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-secondary inline-block animate-pulse"></span>
            <span className="font-mono-code text-mono-code text-primary text-xs uppercase border border-primary px-3 py-1 bg-surface">
              STATUS: {me.status} APPLIED AI ENGINEER
            </span>
          </div>
        </div>
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.code} className="border border-primary bg-surface p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-3 border-b border-primary gap-2">
                <div className="flex flex-col">
                  <div>
                    <span className="font-mono-code text-secondary font-bold uppercase text-xs">
                      {job.code}
                    </span>
                    <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight mt-0.5">
                      {job.role}
                    </h3>
                    <div className="font-mono-code text-primary font-bold text-sm">
                      {job.org}
                    </div>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <span className="border border-primary bg-primary text-on-primary px-3 py-1 font-mono-code text-xs uppercase font-bold inline-block">
                    {job.when}
                  </span>
                  <div className="font-mono-code text-xs text-on-surface-variant mt-1">
                    {job.domain}
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 space-y-3 font-body-sm text-body-sm text-on-surface">
                  {job.points.map((point, index) => (
                    <p key={point.title} className="flex items-start gap-2">
                      <span className="text-secondary font-mono-code font-bold">
                        [{String(index + 1).padStart(2, "0")}]
                      </span>
                      <span>
                        <strong className="text-primary">{point.title}</strong> {point.text}
                      </span>
                    </p>
                  ))}
                </div>
                <div className="lg:col-span-4 border border-primary bg-surface-container-lowest p-4 flex flex-col justify-between">
                  <div className="font-micro-meta text-micro-meta uppercase text-on-surface-variant mb-2">
                    {job.metricsTitle}
                  </div>
                  <div className="space-y-3 font-mono-code text-xs">
                    {job.metrics.map((metric) => (
                      <div key={metric.label} className="border-b border-primary/20 pb-2">
                        <div className="text-on-surface-variant text-[11px]">
                          {metric.label}
                        </div>
                        <div
                          className={`font-mono-metric text-mono-metric font-bold ${
                            metric.accent ? "text-secondary" : "text-primary"
                          }`}
                        >
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-2 border-t border-primary text-[10px] font-mono-code text-on-surface-variant uppercase">
                    STACK: {job.stack}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
