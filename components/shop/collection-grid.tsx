import { ShopifyProduct } from "@/lib/shopify-config";
import { BuyNowButton } from "@/components/shop/buy-now-button";
import { ProductCard } from "@/components/shop/product-card";
import { Button } from "@/components/ui/button";

interface CollectionGridProps {
  products: ShopifyProduct[];
  featuredProduct: ShopifyProduct;
  externalCartUrl?: string;
}

export function CollectionGrid({ products, featuredProduct, externalCartUrl }: CollectionGridProps) {
  if (!products.length) {
    return null;
  }

  const [leadProduct, ...remainingProducts] = products;

  return (
    <section className="space-y-6">
      <div className="section-frame relative overflow-hidden rounded-[1.6rem] border border-warning/18 bg-[linear-gradient(145deg,rgba(247,210,30,0.08),rgba(11,11,15,0.96))] p-5 sm:p-6">
        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-warning/85">Collection</p>
            <h3 className="mt-3 text-3xl font-black uppercase text-ash sm:text-4xl">Current Signals</h3>
            <p className="mt-3 max-w-2xl text-sm text-ash/70 sm:text-base">
              The current drop is ready for direct checkout now, while the Shopify embed modules stay standing by for live code without forcing a rebuild.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <BuyNowButton checkoutUrl={featuredProduct.checkoutUrl} label="Buy Featured Drop" size="lg" />
            {externalCartUrl ? (
              <Button href={externalCartUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
                Open Cart
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.12fr_0.88fr]">
        <ProductCard product={leadProduct} emphasis="feature" />
        {remainingProducts.length ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
            {remainingProducts.map((product) => (
              <ProductCard key={product.key} product={product} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
