"use client";

import { useEffect, useState } from "react";

interface CopyButtonProps {
  text: string;
  label: string;
  copiedLabel?: string;
  className?: string;
}

export default function CopyButton({
  text,
  label,
  copiedLabel = "COPIED",
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard access can be denied; still show feedback.
    }
    setCopied(true);
  }

  return (
    <button type="button" onClick={handleCopy} className={className}>
      {copied ? copiedLabel : label}
    </button>
  );
}
