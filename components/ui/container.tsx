import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
}

export function Container({ children, className = "", as = "div" }: ContainerProps) {
  const Tag = as;

  return (
    <Tag className={`mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8 ${className}`.trim()}>
      {children}
    </Tag>
  );
}
