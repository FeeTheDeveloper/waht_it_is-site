import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonSize = "md" | "lg";

interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonAsButton = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = BaseButtonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-inferno/70 bg-gradient-to-r from-inferno via-[#ff7a1f] to-warning text-ink shadow-[0_0_35px_rgba(242,92,5,0.45)] hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(247,210,30,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning",
  secondary:
    "border-warning/60 bg-[linear-gradient(120deg,rgba(247,210,30,0.14),rgba(242,92,5,0.04))] text-warning hover:-translate-y-0.5 hover:border-warning hover:bg-[linear-gradient(120deg,rgba(247,210,30,0.22),rgba(242,92,5,0.1))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning",
  ghost:
    "border-transparent bg-transparent text-ash/90 hover:text-warning focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning"
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base"
};

function getClasses({ className = "", variant = "primary", size = "md" }: BaseButtonProps) {
  return [
    "inline-flex items-center justify-center rounded-md border font-semibold uppercase tracking-[0.11em] transition-all duration-200",
    variantStyles[variant],
    sizeStyles[size],
    className
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: ButtonProps) {
  const classes = getClasses(props);

  if ("href" in props && typeof props.href === "string") {
    const { href, children, target, rel } = props as ButtonAsLink;

    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  const { children, type = "button", ...buttonProps } = props as ButtonAsButton;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
