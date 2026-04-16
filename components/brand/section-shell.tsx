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
          {eyebrow ? <p className="eyebrow-chip">{eyebrow}</p> : null}
          <h2 className="display-section text-ash">{title}</h2>
          {description ? <p className="body-lead max-w-3xl">{description}</p> : null}
        </div>
        {children ? <div className={`mt-8 sm:mt-9 lg:mt-11 ${bodyClassName}`.trim()}>{children}</div> : null}
      </Container>
    </section>
  );
}
