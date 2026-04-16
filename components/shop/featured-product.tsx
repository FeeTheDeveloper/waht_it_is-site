import Image from "next/image";
import { ShopifyProduct } from "@/lib/shopify-config";
import { BuyNowButton } from "@/components/shop/buy-now-button";
import { ProductColorways } from "@/components/shop/product-colorways";
import { Button } from "@/components/ui/button";

interface FeaturedProductProps {
  product: ShopifyProduct;
  className?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  showColorwayGallery?: boolean;
}

export function FeaturedProduct({
  product,
  className = "",
  primaryLabel = "Buy Now",
  secondaryHref = "/shop#collection",
  secondaryLabel = "Explore Drop",
  showColorwayGallery = false
}: FeaturedProductProps) {
  return (
    <article
      className={`group section-frame panel-sheen relative overflow-hidden rounded-[1.75rem] border border-warning/25 bg-[radial-gradient(circle_at_top_left,rgba(247,210,30,0.22),rgba(242,92,5,0.1)_34%,rgba(9,9,13,0.96)_72%)] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.5)] sm:p-7 lg:p-8 ${className}`.trim()}
    >
      <div className="pointer-events-none absolute inset-0 opacity-75 [background:linear-gradient(125deg,transparent_0%,rgba(247,210,30,0.08)_48%,transparent_100%)]" />
      <div className="relative grid gap-8 xl:grid-cols-[0.96fr_1.04fr] xl:items-center">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <span className="eyebrow-chip border-warning/35 bg-warning/10 text-warning">
              {product.badge}
            </span>
            <span className="eyebrow-chip border-ash/15 bg-ash/5 text-ash/78">
              {product.availability}
            </span>
          </div>
          <div className="space-y-4">
            <h3 className="display-callout text-ash">{product.name}</h3>
            <p className="body-lead max-w-xl text-ash/78">{product.description}</p>
          </div>
          <div className="rounded-[1.35rem] border border-warning/18 bg-black/22 p-5">
            <p className="meta-label">Graphic hit</p>
            <p className="display-card mt-3 text-ash">{product.graphicText[0]}</p>
            <p className="display-kicker mt-1 text-warning">{product.graphicText[1]}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="section-frame relative overflow-hidden rounded-[1.2rem] border border-warning/15 bg-black/20 px-4 py-4">
              <p className="meta-label">Price</p>
              <p className="meta-value-accent mt-2">{product.price}</p>
            </div>
            <div className="section-frame relative overflow-hidden rounded-[1.2rem] border border-warning/15 bg-black/20 px-4 py-4">
              <p className="meta-label">Colorways</p>
              <p className="display-kicker mt-2 text-ash">{product.colorways.length || 1} live</p>
            </div>
            <div className="section-frame relative overflow-hidden rounded-[1.2rem] border border-warning/15 bg-black/20 px-4 py-4">
              <p className="meta-label">Build</p>
              <p className="display-kicker mt-2 text-ash">{product.highlights[0]}</p>
            </div>
          </div>
          <ProductColorways colorways={product.colorways} compact title="Available colorways" />
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <div>
              <p className="meta-label">Direct checkout</p>
              <p className="body-copy mt-1 text-ash/68">
                Short path to purchase, cleaner hierarchy, and a real product surface instead of a placeholder card.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <BuyNowButton checkoutUrl={product.checkoutUrl} label={primaryLabel} size="lg" />
              {secondaryHref ? (
                <Button href={secondaryHref} variant="secondary" size="lg">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </div>

        <div className="product-placeholder relative overflow-hidden rounded-[1.5rem] border border-ash/15 bg-ink/75 p-4 sm:p-5">
          <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(247,210,30,0.16),transparent)]" />
          <div className="overflow-hidden rounded-[1.2rem] border border-ash/12 bg-[#f4efe7] p-3">
            <Image
              src={product.featuredImage}
              alt={`${product.name} featured collage`}
              width={1200}
              height={1200}
              className="h-auto w-full rounded-[1rem] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 1280px) 100vw, 46vw"
              priority={showColorwayGallery}
            />
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-[1.2rem] border border-warning/15 bg-black/45 p-4 backdrop-blur-sm">
            <p className="meta-label">Main drop pressure</p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="display-card text-ash">{product.name}</p>
                <p className="body-copy mt-1 text-ash/68">{product.tagline}</p>
              </div>
              <span className="eyebrow-chip border-warning/30 bg-warning/12 text-warning">
                {product.colorways.length} colorways
              </span>
            </div>
          </div>
        </div>
      </div>

      {showColorwayGallery ? (
        <div className="relative mt-8 border-t border-warning/12 pt-8">
          <ProductColorways colorways={product.colorways} title="Colorways" />
        </div>
      ) : null}
    </article>
  );
}
