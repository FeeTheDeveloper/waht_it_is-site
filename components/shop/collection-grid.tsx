import { ShopifyProduct } from "@/lib/shopify-config";
import { ProductCard } from "@/components/shop/product-card";

interface CollectionGridProps {
  products: ShopifyProduct[];
}

export function CollectionGrid({ products }: CollectionGridProps) {
  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-warning/95">Collection</p>
          <h3 className="mt-2 text-3xl font-black uppercase text-ash sm:text-4xl">Current Signals</h3>
        </div>
        <p className="max-w-lg text-sm text-ash/70 sm:text-base">
          Built for custom storytelling now, while staying ready to drop in embedded Shopify product modules whenever you
          flip those switches.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.key} product={product} />
        ))}
      </div>
    </section>
  );
}
