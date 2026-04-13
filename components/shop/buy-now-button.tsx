import { Button } from "@/components/ui/button";

interface BuyNowButtonProps {
  checkoutUrl?: string;
  className?: string;
  label?: string;
  unavailableLabel?: string;
  size?: "md" | "lg" | "xl";
}

export function BuyNowButton({
  checkoutUrl,
  className,
  label = "Buy Now",
  unavailableLabel = "Checkout Soon",
  size = "md"
}: BuyNowButtonProps) {
  if (!checkoutUrl) {
    return (
      <Button type="button" variant="secondary" size={size} className={className} disabled>
        {unavailableLabel}
      </Button>
    );
  }

  return (
    <Button href={checkoutUrl} target="_blank" rel="noopener noreferrer" variant="primary" size={size} className={className}>
      {label}
    </Button>
  );
}
