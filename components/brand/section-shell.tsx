import { ReactNode } from "react";
import { Container } from "@/components/ui/container";

interface SectionShellProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function SectionShell({ id, eyebrow, title, description, children }: SectionShellProps) {
  return (
    <section id={id} className="py-section">
      <Container>
        <div className="space-y-4">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-warning">{eyebrow}</p>
          ) : null}
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ash sm:text-4xl">{title}</h2>
          {description ? <p className="max-w-3xl text-base text-ash/75 sm:text-lg">{description}</p> : null}
        </div>
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}
