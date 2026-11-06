"use client";

import { useState } from "react";
import { findAnswer, type Answer } from "@/lib/answer";
import { questions } from "@/lib/data";

const defaultQuestion = questions[2];

export default function Ask() {
  const [q, setQ] = useState(defaultQuestion.q);
  const [res, setRes] = useState<Answer>({
    a: defaultQuestion.a,
    src: defaultQuestion.src,
  });

  function send(text: string) {
    if (!text.trim()) return;
    setQ(text);
    setRes(findAnswer(text));
  }

  return (
    <section
      id="ask-section"
      className="w-full bg-primary text-on-primary border-b border-primary"
    >
      <div className="max-w-[1440px] mx-auto p-6 md:p-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 pb-4 border-b border-on-primary">
          <h2 className="font-display-xl text-display-xl-mobile md:text-display-xl uppercase tracking-tighter text-on-primary leading-none">
            ask<span className="text-secondary">.</span>
          </h2>
 
        </div>
        <div className="border border-on-primary bg-primary mb-8 p-4">
          <form
            className="flex flex-col md:flex-row items-stretch md:items-center gap-3"
            onSubmit={(event) => {
              event.preventDefault();
              send(q);
            }}
          >
            <span className="font-mono-code text-mono-code text-secondary shrink-0 font-bold">
              query@abdul:~$
            </span>
            <input
              id="ask-input"
              className="w-full bg-transparent border-0 text-on-primary font-mono-code text-mono-code focus:outline-none placeholder:text-on-primary-container"
              placeholder="Type query regarding architecture, latency, agent loops..."
              type="text"
              value={q}
              onChange={(event) => setQ(event.target.value)}
            />
            <div className="flex items-center gap-2 shrink-0">
             
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
          {questions.map((question) => {
            const active = q === question.q;
            return (
              <button
                key={question.q}
                type="button"
                onClick={() => send(question.q)}
                className={`text-left border p-3 hover:bg-on-primary hover:text-primary transition-none font-mono-code text-mono-code uppercase text-xs flex justify-between items-center group ${
                  active
                    ? "border-secondary bg-secondary/10 text-on-primary"
                    : "border-on-primary/60"
                }`}
              >
                <span>{question.q}</span>
                <span className="group-hover:translate-x-1">→</span>
              </button>
            );
          })}
        </div>
        <div className="border border-on-primary p-6 bg-surface-container-lowest text-primary">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4 mb-4 border-b border-primary gap-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-secondary inline-block"></span>
              <span className="font-mono-code text-mono-code uppercase font-bold text-primary">
                {`QUESTION: "${q}"`}
              </span>
            </div>
            <span className="font-mono-code text-[11px] uppercase bg-surface-variant px-2 py-0.5 text-primary">
              ROUTED: SEMANTIC_EVAL_PASS
            </span>
          </div>
          <p className="font-body-lg text-body-lg text-primary leading-relaxed mb-6 font-normal">
            {res.a}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-b border-primary py-3 my-4 bg-surface">
            <div className="flex items-baseline space-x-2 px-2">
              <span className="font-micro-meta text-micro-meta uppercase text-on-surface-variant">
                CONFIDENCE:
              </span>
              <span className="font-mono-metric text-mono-metric text-secondary font-bold">
                94.2%
              </span>
            </div>
            <div className="flex items-baseline space-x-2 px-2 border-t sm:border-t-0 sm:border-l border-primary">
              <span className="font-micro-meta text-micro-meta uppercase text-on-surface-variant">
                LATENCY:
              </span>
              <span className="font-mono-metric text-mono-metric text-primary">64ms</span>
            </div>
            <div className="flex items-baseline space-x-2 px-2 border-t sm:border-t-0 sm:border-l border-primary">
              <span className="font-micro-meta text-micro-meta uppercase text-on-surface-variant">
                EMBEDDINGS:
              </span>
              <span className="font-mono-code text-mono-code text-primary">
                Qdrant Dense_V3 / Cosine
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="font-micro-meta text-micro-meta uppercase text-on-surface-variant mr-2">
              VERIFIED REPRODUCIBILITY TRACES:
            </span>
            {res.src.map((source, index) => (
              <a
                key={source}
                href="#work-section"
                className={`border border-primary px-2 py-1 font-mono-code text-mono-code hover:bg-primary hover:text-on-primary transition-none uppercase ${
                  index === res.src.length - 1 && res.src.length > 1
                    ? "text-secondary border-secondary"
                    : ""
                }`}
              >
                [ {source} ]
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
