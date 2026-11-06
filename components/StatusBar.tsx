import { me } from "@/lib/data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const cvHref = `${basePath}/abdul-wahab-resume.pdf`;

export default function StatusBar() {
  return (
    <section className="w-full bg-surface-container-lowest border-b border-primary">
      <div className="max-w-[1440px] mx-auto px-4 md:px-gutter-desktop py-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <div className="flex items-center space-x-3 overflow-x-auto w-full md:w-auto">
          <span className="inline-block w-2 h-2 bg-secondary animate-pulse shrink-0"></span>
          <span className="font-mono-code text-mono-code uppercase text-primary tracking-tight shrink-0">
            {`[ NODE: ${me.node} // EVYOL_GROUP // NEXONIC // P99: ${me.p99} // STATUS: `}
            <span className="text-secondary">DEPLOYED</span>
            {` // EVAL_ACC: `}
            <span className="text-secondary">{me.evalAcc}</span>
            {` ]`}
          </span>
        </div>
        <div className="flex items-center space-x-2 shrink-0 self-end md:self-auto">
          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-0.5 border border-primary bg-primary text-on-primary font-mono-code text-mono-code uppercase hover:bg-surface hover:text-primary transition-none"
          >
            [ curl abdul.ai/cv ]
          </a>
        </div>
      </div>
    </section>
  );
}
