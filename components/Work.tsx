"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/lib/data";

type FilterValue = "featured" | ProjectCategory;

const filters: { label: string; value: FilterValue }[] = [
  { label: "FEATURED", value: "featured" },
  { label: "GENERATIVE & AGENTIC", value: "generative" },
  { label: "COMPUTER VISION & PERCEPTION", value: "vision" },
  { label: "ML & DL SYSTEMS", value: "ml" },
];

function countFor(value: FilterValue) {
  return value === "featured"
    ? projects.length
    : projects.filter((project) => project.category === value).length;
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("featured");

  const visibleProjects =
    activeFilter === "featured"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="work-section" className="w-full bg-surface border-b border-primary">
      <div className="max-w-[1440px] mx-auto p-6 md:p-margin-desktop">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-4 border-b border-primary gap-4">
          <div>
            <h2 className="font-display-xl text-display-xl-mobile md:text-display-xl uppercase tracking-tighter text-primary leading-none">
              work<span className="text-secondary">.</span>
            </h2>
            <p className="font-mono-code text-mono-code uppercase text-on-surface-variant mt-2">
              [ 06 PRODUCTION DEPLOYMENTS // DETERMINISTIC LATENCY // FAULT-TOLERANT
              ARCHITECTURES ]
            </p>
          </div>
          <div className="flex flex-wrap gap-1">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={activeFilter === filter.value}
                className={`border border-primary px-3 py-1 font-mono-code text-mono-code uppercase transition-none ${
                  activeFilter === filter.value
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary"
                }`}
              >
                [ {filter.label} / {String(countFor(filter.value)).padStart(2, "0")} ]
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((project) => (
            <div
              key={project.name}
              className="border border-primary bg-surface-container-lowest p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start border-b border-primary pb-3 mb-4 gap-3">
                  <div>
                    <span className="font-micro-meta text-micro-meta uppercase text-on-surface-variant">
                      {project.spec}
                    </span>
                    <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight mt-1">
                      {project.name}
                    </h3>
                  </div>
                  {project.tagAccent ? (
                    <span className="font-mono-code text-mono-code text-secondary font-bold uppercase flex items-center gap-1 shrink-0">
                      <span className="w-2 h-2 bg-secondary inline-block"></span>{" "}
                      {project.tag}
                    </span>
                  ) : (
                    <span className="border border-primary px-2 py-0.5 font-mono-code text-[11px] uppercase bg-surface shrink-0">
                      {project.tag}
                    </span>
                  )}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface mb-4">
                  {project.text}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="border border-primary px-2 py-0.5 font-mono-code text-[11px] uppercase bg-surface"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="border border-primary bg-surface p-3 mb-4 font-mono-code text-mono-code text-xs">
                  <div className="font-micro-meta text-micro-meta uppercase text-on-surface-variant mb-1">
                    {project.panel.title}
                  </div>
                  <div
                    className={
                      project.panel.columns
                        ? "grid grid-cols-2 gap-2 text-primary font-bold"
                        : "space-y-1 text-primary whitespace-pre-wrap"
                    }
                  >
                    {project.panel.lines.map((line, index) => (
                      <div
                        key={`${project.name}-${line}`}
                        className={
                          project.panel.accentLines?.includes(index)
                            ? "text-secondary"
                            : undefined
                        }
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-primary pt-3 gap-3">
                <span
                  className={`font-mono-metric text-mono-metric font-bold ${
                    project.footerMetricAccent ? "text-secondary" : "text-primary"
                  }`}
                >
                  {project.footerMetric}
                </span>
                <span className="font-mono-code text-mono-code uppercase text-primary hover:text-secondary cursor-pointer text-right">
                  {project.footerAction}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
