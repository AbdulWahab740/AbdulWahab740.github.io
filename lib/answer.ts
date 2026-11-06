import { questions } from "./data";

export interface Answer {
  a: string;
  src: string[];
}

export function findAnswer(q: string): Answer {
  const words = q
    .toLowerCase()
    .split(/\W+/)
    .filter((w) => w.length > 3);

  let best: (typeof questions)[number] | null = null;
  let score = 0;

  for (const item of questions) {
    const s = words.filter(
      (w) => item.q.toLowerCase().includes(w) || item.a.toLowerCase().includes(w),
    ).length;
    if (s > score) {
      score = s;
      best = item;
    }
  }

  if (!best) {
    return {
      a: "I do not have that in my portfolio. Please email me and ask directly.",
      src: [],
    };
  }

  return { a: best.a, src: best.src };
}
