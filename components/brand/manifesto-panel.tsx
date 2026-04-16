import { ReactNode } from "react";

interface ManifestoPanelProps {
  label: string;
  statement: string;
  supporting: string;
  className?: string;
  compact?: boolean;
  children?: ReactNode;
}

export function ManifestoPanel({
  label,
  statement,
  supporting,
  className = "",
  compact = false,
  children
}: ManifestoPanelProps) {
  return (
    <article
      className={`section-frame relative overflow-hidden rounded-[1.8rem] border border-warning/28 bg-[linear-gradient(135deg,rgba(247,210,30,0.14),rgba(242,92,5,0.1),rgba(9,9,13,0.96))] shadow-[0_20px_50px_rgba(0,0,0,0.42)] ${compact ? "p-5 sm:p-6" : "p-6 sm:p-8 lg:p-10"} ${className}`.trim()}
    >
      <div className="pointer-events-none absolute inset-0 opacity-75 [background:linear-gradient(125deg,transparent_0%,rgba(247,210,30,0.08)_48%,transparent_100%)]" />
      <div className={`relative ${compact ? "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between" : "grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"}`}>
        <div className="max-w-3xl">
          <p className="eyebrow-chip">{label}</p>
          <p className={`${compact ? "display-callout" : "display-feature"} mt-4 text-ash`}>{statement}</p>
          <p className="body-lead mt-4 max-w-2xl">{supporting}</p>
        </div>
        {children ? (
          <div className={`${compact ? "flex flex-wrap gap-3" : "grid gap-3 sm:grid-cols-2"}`.trim()}>{children}</div>
        ) : null}
      </div>
    </article>
  );
}
