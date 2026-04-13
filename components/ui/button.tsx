import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg" | "xl";

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
    "border-inferno/70 bg-[linear-gradient(135deg,#f7d21e_0%,#ff9c3d_24%,#f25c05_58%,#8c1f0b_100%)] text-ink shadow-[0_14px_35px_rgba(242,92,5,0.36),inset_0_1px_0_rgba(255,255,255,0.24)] hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(242,92,5,0.45)] active:translate-y-0 active:scale-[0.99]",
  secondary:
    "border-warning/30 bg-[linear-gradient(140deg,rgba(247,210,30,0.12),rgba(242,92,5,0.08),rgba(11,11,15,0.96))] text-ash shadow-[0_10px_26px_rgba(0,0,0,0.28)] hover:-translate-y-0.5 hover:border-warning/60 hover:text-warning hover:shadow-[0_14px_34px_rgba(0,0,0,0.36)] active:translate-y-0 active:scale-[0.99]",
  ghost: "border-transparent bg-transparent text-ash/72 hover:text-warning active:scale-[0.99]"
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 text-[0.76rem]",
  lg: "min-h-[3.25rem] px-6 text-[0.8rem]",
  xl: "min-h-[3.75rem] px-8 text-[0.88rem]"
};

function getClasses({ className = "", variant = "primary", size = "md" }: BaseButtonProps) {
  return [
    "inline-flex items-center justify-center rounded-full border font-display font-black uppercase leading-none tracking-[0.18em] transition-[transform,box-shadow,background-color,border-color,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warning focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-60",
    variantStyles[variant],
    sizeStyles[size],
    className
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: ButtonProps) {
  if ("href" in props && typeof props.href === "string") {
    const { href, children, target, rel, className, variant = "primary", size = "md" } = props as ButtonAsLink;
    const classes = getClasses({ children, className, variant, size });

    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  const { children, type = "button", className, variant = "primary", size = "md", ...buttonProps } = props as ButtonAsButton;
  const classes = getClasses({ children, className, variant, size });

  return (
    <button type={type} className={classes} {...buttonProps}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
