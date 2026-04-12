import { Button } from "@/components/ui/button";

interface BuyNowButtonProps {
  checkoutUrl: string;
  className?: string;
  label?: string;
}

export function BuyNowButton({ checkoutUrl, className, label = "Buy Now" }: BuyNowButtonProps) {
  return (
    <Button
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant="primary"
      size="md"
      className={className}
    >
      {label}
    </Button>
  );
}
