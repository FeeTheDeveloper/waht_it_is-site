import { ReactNode } from "react";
import { Container } from "@/components/ui/container";

interface SectionShellProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  bodyClassName?: string;
}

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  bodyClassName = ""
}: SectionShellProps) {
  return (
    <section id={id} className={`py-section ${className}`.trim()}>
      <Container>
        <div className="max-w-4xl space-y-4 sm:space-y-5">
          {eyebrow ? (
            <p className="inline-flex w-fit rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-warning/95">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-balance font-display text-3xl font-black uppercase leading-[0.94] tracking-[0.04em] text-ash sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? <p className="max-w-3xl text-base text-ash/72 sm:text-lg">{description}</p> : null}
        </div>
        {children ? <div className={`mt-8 sm:mt-9 lg:mt-11 ${bodyClassName}`.trim()}>{children}</div> : null}
      </Container>
    </section>
  );
}
