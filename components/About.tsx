import ActionButton from "@/components/ActionButton";
import CopyButton from "@/components/CopyButton";
import { about } from "@/lib/data";

const curlCommand = "curl -sL https://abdul.systems/brief | sh";

export default function About() {
  return (
    <section id="about-section" className="w-full bg-surface border-b border-primary">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-6 p-6 md:p-margin-desktop border-b lg:border-b-0 lg:border-r border-primary bg-surface-container-lowest flex flex-col justify-between">
          <div>
            <span className="font-micro-meta text-micro-meta uppercase tracking-widest text-on-surface-variant block mb-4">
              ACADEMIC ACCREDITATION &amp; MANIFESTO
            </span>
            <div className="border border-primary bg-surface p-4 mb-6">
              <div className="flex justify-between items-start gap-2">
                <span className="font-mono-code text-secondary font-bold text-xs uppercase">
                  {about.degree.label}
                </span>
                <span className="font-mono-code text-xs text-on-surface-variant">
                  {about.degree.when}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md uppercase text-primary mt-1">
                {about.degree.title}
              </h3>
              <div className="font-mono-code text-primary font-bold text-sm mt-1">
                {about.degree.org}
              </div>
              <div className="mt-3 pt-3 border-t border-primary/20 flex items-baseline justify-between">
                <span className="font-mono-code text-xs text-on-surface-variant uppercase">
                  {about.degree.gpaLabel}
                </span>
                <span className="font-mono-metric text-mono-metric text-secondary font-bold">
                  {about.degree.gpa}
                </span>
              </div>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-tight text-primary leading-tight mb-4">
              {about.headline}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-6">
              {about.text}
            </p>
          </div>
          <div className="border border-primary bg-surface p-4 mt-6">
            <div className="font-micro-meta text-micro-meta uppercase text-on-surface-variant mb-2">
              RESUME EXPORT PROTOCOL
            </div>
            <div className="flex flex-wrap gap-2">
              <ActionButton
                label="[ DOWNLOAD RESUME: ATS_OPTIMIZED_PDF ]"
                message="Exporting ATS resume for Abdul Wahab."
                className="px-3 py-2 bg-primary text-on-primary font-mono-code text-xs uppercase hover:bg-secondary transition-none"
              />
              <CopyButton
                text={curlCommand}
                label="[ VIEW RAW MARKDOWN ]"
                copiedLabel="[ COPIED ]"
                className="px-3 py-2 border border-primary text-primary font-mono-code text-xs uppercase hover:bg-primary hover:text-on-primary transition-none"
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 p-6 md:p-margin-desktop bg-surface flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap justify-between items-baseline mb-6 pb-2 border-b border-primary gap-2">
              <span className="font-micro-meta text-micro-meta uppercase tracking-widest text-primary">
                HONORS &amp; PEDAGOGICAL RECORD
              </span>
              <span className="font-mono-code text-mono-code text-on-surface-variant text-xs">
                [ VERIFIED CREDENTIALS ]
              </span>
            </div>
            <div className="space-y-4">
              {about.honors.map((honor) => (
                <div
                  key={honor.code}
                  className="border border-primary bg-surface-container-lowest p-4"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <span className="font-mono-code text-mono-code text-secondary font-bold text-xs">
                      {honor.code}
                    </span>
                    <span className="font-mono-code text-xs text-on-surface-variant">
                      {honor.meta}
                    </span>
                  </div>
                  <div className="font-headline-md text-headline-md uppercase text-primary mt-1">
                    {honor.title}
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface mt-1">
                    {honor.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-primary flex flex-wrap justify-between items-center gap-2 text-xs font-mono-code text-on-surface-variant">
        
            <span className="text-secondary font-bold">
              ALL CREDENTIALS OFFICIALLY VERIFIED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
