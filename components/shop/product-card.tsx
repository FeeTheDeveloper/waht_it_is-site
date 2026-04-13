import Image from "next/image";
import { ShopifyProduct } from "@/lib/shopify-config";
import { BuyNowButton } from "@/components/shop/buy-now-button";

interface ProductCardProps {
  product: ShopifyProduct;
  emphasis?: "feature" | "standard";
}

export function ProductCard({ product, emphasis = "standard" }: ProductCardProps) {
  const isFeature = emphasis === "feature";

  return (
    <article
      className={`group product-placeholder section-frame relative overflow-hidden rounded-[1.6rem] border border-warning/22 bg-[linear-gradient(160deg,rgba(247,210,30,0.12),rgba(198,61,10,0.08),rgba(11,11,15,0.95))] shadow-[0_20px_45px_rgba(0,0,0,0.42)] transition-transform duration-300 hover:-translate-y-1 ${isFeature ? "p-5 sm:p-6" : "p-4 sm:p-5"}`.trim()}
    >
      <div className="pointer-events-none absolute inset-0 opacity-65 [background:linear-gradient(130deg,transparent_0%,rgba(247,210,30,0.1)_50%,transparent_100%)]" />
      <div className="relative space-y-4">
        <div className={`relative overflow-hidden rounded-[1.3rem] border border-ash/16 bg-ink/65 ${isFeature ? "p-4 sm:p-5" : "p-3 sm:p-4"}`}>
          <div className="absolute left-3 top-3 z-10 rounded-full border border-warning/45 bg-ink/85 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-warning">
            {product.badge}
          </div>
          <div className={`${isFeature ? "min-h-[22rem]" : "min-h-[18rem]"} flex items-center justify-center overflow-hidden rounded-[1rem] border border-ash/12 bg-[#f4efe7] p-2`}>
            <Image
              src={product.image}
              alt={product.name}
              width={1000}
              height={1000}
              className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              sizes="(max-width: 1280px) 100vw, 33vw"
            />
          </div>
          <div className="mt-4 flex items-end justify-between gap-3">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-warning/78">Direct checkout</p>
              <p className={`${isFeature ? "text-3xl" : "text-2xl"} mt-1 font-black uppercase leading-none text-warning`}>{product.price}</p>
            </div>
            <span className="rounded-full border border-ash/12 bg-black/35 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ash/74">
              {product.availability}
            </span>
          </div>
        </div>

        <div className="space-y-3 px-1 pb-1">
          <div className="space-y-2">
            <h3 className={`${isFeature ? "text-4xl sm:text-5xl" : "text-2xl"} font-display font-black uppercase leading-[0.92] tracking-[0.05em] text-ash`}>
              {product.name}
            </h3>
            <p className={`${isFeature ? "text-base sm:text-lg" : "text-sm sm:text-base"} text-ash/76`}>{product.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.highlights.slice(0, 2).map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-warning/16 bg-warning/8 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-warning/84"
              >
                {highlight}
              </span>
            ))}
            {product.colorways.length ? (
              <span className="rounded-full border border-warning/16 bg-warning/8 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-warning/84">
                {product.colorways.length} colorways
              </span>
            ) : null}
          </div>
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <BuyNowButton checkoutUrl={product.checkoutUrl} size={isFeature ? "lg" : "md"} className={isFeature ? "sm:min-w-[12rem]" : ""} />
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-ash/48">Secure Shopify checkout</p>
          </div>
        </div>
      </div>
    </article>
  );
}
