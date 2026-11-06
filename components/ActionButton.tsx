"use client";

interface ActionButtonProps {
  label: string;
  message: string;
  className?: string;
}

export default function ActionButton({ label, message, className }: ActionButtonProps) {
  return (
    <button type="button" onClick={() => alert(message)} className={className}>
      {label}
    </button>
  );
}
