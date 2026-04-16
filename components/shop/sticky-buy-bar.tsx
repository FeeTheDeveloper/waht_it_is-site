import { BuyNowButton } from "@/components/shop/buy-now-button";
import { Button } from "@/components/ui/button";
import { ShopifyProduct } from "@/lib/shopify-config";

interface StickyBuyBarProps {
  product: ShopifyProduct;
  cartUrl?: string;
}

export function StickyBuyBar({ product, cartUrl }: StickyBuyBarProps) {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 md:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="section-frame relative overflow-hidden rounded-[1.4rem] border border-warning/30 bg-[linear-gradient(140deg,rgba(17,17,23,0.97),rgba(9,9,13,0.94))] px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(247,210,30,0.1),transparent_38%,rgba(242,92,5,0.12))]" />
        <div className="relative flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="meta-label">Featured drop</p>
            <p className="font-heading mt-1 truncate text-2xl uppercase tracking-normal text-ash">{product.name}</p>
            <p className="font-heading text-lg uppercase tracking-normal text-warning">{product.price}</p>
          </div>
          <BuyNowButton checkoutUrl={product.checkoutUrl} label="Buy Now" size="lg" className="px-5" />
        </div>
        {cartUrl ? (
          <div className="relative mt-2 flex justify-end">
            <Button href={cartUrl} target="_blank" rel="noopener noreferrer" variant="ghost" size="md" className="px-0">
              Open Cart
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
