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
        <div className="space-y-4">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-warning/95">{eyebrow}</p>
          ) : null}
          <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-ash sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? <p className="max-w-3xl text-base text-ash/75 sm:text-lg">{description}</p> : null}
        </div>
        {children ? <div className={`mt-8 lg:mt-10 ${bodyClassName}`.trim()}>{children}</div> : null}
      </Container>
    </section>
  );
}
