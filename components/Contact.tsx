import { me } from "@/lib/data";

export default function Contact() {
  const githubLabel = me.github.replace(/^https?:\/\//, "");
  const linkedinLabel = me.linkedin.replace(/^https?:\/\//, "");

  return (
    <section id="contact-section" className="w-full bg-primary text-on-primary">
      <div className="max-w-[1440px] mx-auto p-6 md:p-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <span className="font-micro-meta text-micro-meta uppercase tracking-widest text-on-primary-container block mb-3">
              COMMUNICATION DISPATCH
            </span>
            <h2 className="font-display-xl text-display-xl-mobile md:text-display-xl uppercase tracking-tighter text-on-primary leading-none mb-6">
              {"Let's talk"}
              <span className="text-secondary">.</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl mb-8 leading-relaxed">
              Available for mission-critical AI engineering engagements, technical
              advisory, high-throughput agent architecture reviews, and production LLM
              red-teaming.
            </p>
            <a
              href={me.book}
              className="inline-flex items-center px-8 py-4 bg-on-primary text-primary font-mono-code text-mono-code uppercase font-bold hover:bg-secondary hover:text-on-primary transition-none text-sm"
            >
              Book a Call →
            </a>
          </div>
          <div className="lg:col-span-5 border border-on-primary p-6 bg-surface-container-lowest text-primary">
            <div className="font-micro-meta text-micro-meta uppercase text-on-surface-variant mb-4 pb-2 border-b border-primary">
              DIRECT COMMS CHANNELS
            </div>
            <div className="space-y-4 font-mono-code text-mono-code text-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-primary/20">
                <span className="text-on-surface-variant">EMAIL:</span>
                <a
                  className="text-primary font-bold hover:text-secondary select-all break-all"
                  href={`mailto:${me.email}`}
                >
                  {me.email}
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-primary/20">
                <span className="text-on-surface-variant">GITHUB:</span>
                <a
                  className="text-primary font-bold hover:text-secondary break-all"
                  href={me.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {githubLabel}
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-primary/20">
                <span className="text-on-surface-variant">LINKEDIN:</span>
                <a
                  className="text-primary font-bold hover:text-secondary break-all"
                  href={me.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {linkedinLabel}
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-1">
                <span className="text-on-surface-variant">TIMEZONE / LOC:</span>
                <span className="text-primary font-bold">
                  PKT (MULTAN, PK / UTC+5)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
