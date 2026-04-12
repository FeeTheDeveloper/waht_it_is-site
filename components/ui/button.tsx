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
    "bg-inferno text-ink border-inferno hover:bg-ember hover:border-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning",
  secondary:
    "bg-ink text-ash border-ash/30 hover:border-warning hover:text-warning focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning",
  ghost:
    "bg-transparent text-ash border-transparent hover:text-warning focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning"
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3 text-base"
};

function getClasses({ className = "", variant = "primary", size = "md" }: BaseButtonProps) {
  return [
    "inline-flex items-center justify-center rounded-md border font-semibold uppercase tracking-[0.08em] transition-colors duration-150",
    variantStyles[variant],
    sizeStyles[size],
    className
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: ButtonProps) {
  const classes = getClasses(props);

  if ("href" in props) {
    const { href, children, target, rel } = props;

    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  const { children, type = "button", ...buttonProps } = props;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
