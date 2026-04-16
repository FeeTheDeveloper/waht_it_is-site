import { LogoBadge } from "@/components/brand/logo-badge";
import { ManifestoPanel } from "@/components/brand/manifesto-panel";
import { SectionShell } from "@/components/brand/section-shell";
import { BuyNowButton } from "@/components/shop/buy-now-button";
import { CollectionGrid } from "@/components/shop/collection-grid";
import { FeaturedProduct } from "@/components/shop/featured-product";
import { ShopifyEmbed } from "@/components/shop/shopify-embed";
import { StickyBuyBar } from "@/components/shop/sticky-buy-bar";
import { Button } from "@/components/ui/button";
import { featuredProduct, shopifyConfig, shopProducts } from "@/lib/shopify-config";
import { siteConfig } from "@/lib/site";

export default function ShopPage() {
  return (
    <>
      <SectionShell
        id="shop-top"
        eyebrow="Shop"
        title="Shop the energy before it cools off."
        description="The storefront should feel like a real drop environment: editorial, aggressive, conversion-focused, and cleanly connected to the existing Shopify-ready structure."
        className="border-b border-warning/15"
      >
        <div className="section-frame panel-sheen relative overflow-hidden rounded-[1.8rem] border border-warning/28 bg-[radial-gradient(circle_at_top,rgba(247,210,30,0.22),rgba(242,92,5,0.14)_35%,rgba(11,11,15,0.95)_76%)] p-6 shadow-[0_22px_50px_rgba(0,0,0,0.46)] sm:p-8 lg:p-10">
          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="eyebrow-chip border-warning/30 bg-warning/10 text-warning">Featured drop live</span>
                <span className="eyebrow-chip border-ash/12 bg-ash/5 text-ash/72">{shopProducts.length} products</span>
              </div>
              <div>
                <p className="display-feature max-w-3xl text-ash">The signal is live. Wear it loud.</p>
                <p className="body-lead mt-4 max-w-2xl">
                  Move quickly through the featured tee, open the cart, or scan the whole lineup like a real custom storefront instead of a placeholder catalog.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.2rem] border border-warning/18 bg-black/22 px-4 py-4">
                  <p className="meta-label">Frontline piece</p>
                  <p className="display-kicker mt-2 text-ash">{featuredProduct.name}</p>
                </div>
                <div className="rounded-[1.2rem] border border-warning/18 bg-black/22 px-4 py-4">
                  <p className="meta-label">Price</p>
                  <p className="display-kicker mt-2 text-ash">{featuredProduct.price}</p>
                </div>
                <div className="rounded-[1.2rem] border border-warning/18 bg-black/22 px-4 py-4">
                  <p className="meta-label">Colorways</p>
                  <p className="display-kicker mt-2 text-ash">{featuredProduct.colorways.length} live</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <BuyNowButton checkoutUrl={featuredProduct.checkoutUrl} label="Buy Featured Drop" size="xl" />
                <Button href="#collection" variant="secondary" size="xl">
                  View Collection
                </Button>
                {shopifyConfig.externalCartUrl ? (
                  <Button href={shopifyConfig.externalCartUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="xl">
                    Open Cart
                  </Button>
                ) : null}
              </div>
            </div>

            <div className="grid gap-5">
              <LogoBadge
                title="The logo stays in the storefront."
                description="A lighter brand hit keeps recognition high while the product and checkout path stay in front."
              />
              <div className="rounded-[1.5rem] border border-ash/12 bg-black/24 p-5 backdrop-blur-sm sm:p-6">
                <p className="meta-label text-warning/78">Current pressure point</p>
                <p className="display-card mt-3 text-ash">{featuredProduct.name}</p>
                <p className="body-copy mt-3 text-ash/72">{featuredProduct.tagline}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredProduct.highlights.map((highlight) => (
                    <span key={highlight} className="eyebrow-chip border-warning/16 bg-warning/8 text-warning/84">
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="mt-6 rounded-[1.2rem] border border-warning/16 bg-warning/8 px-4 py-4">
                  <p className="meta-label">Why it leads</p>
                  <p className="body-copy mt-2 text-ash/72">
                    It carries the cleanest buy path, the real collage image, and the strongest visual pressure across the storefront.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="who-we-are"
        eyebrow={siteConfig.manifesto.label}
        title="Built for the voices left unheard."
        description="The shop experience should reinforce the mission without slowing down the storefront."
      >
        <ManifestoPanel label={siteConfig.manifesto.label} statement={siteConfig.shopReinforcement} supporting={siteConfig.manifesto.support} compact />
      </SectionShell>

      <SectionShell
        id="featured-drop"
        eyebrow="Featured Drop"
        title={`${featuredProduct.name} is carrying the front line.`}
        description="The featured product now owns the strongest image treatment, the colorway story, and the main purchase action."
      >
        <FeaturedProduct product={featuredProduct} primaryLabel="Buy Featured Drop" secondaryHref="#collection" secondaryLabel="Explore Collection" showColorwayGallery />
      </SectionShell>

      <SectionShell
        id="collection"
        eyebrow="Collection"
        title="Current Signals"
        description="The grid is pushed into a more editorial storefront layout with stronger hierarchy, cleaner card surfaces, and repeated purchase pressure."
      >
        <CollectionGrid products={shopProducts} featuredProduct={featuredProduct} externalCartUrl={shopifyConfig.externalCartUrl} />
      </SectionShell>

      <SectionShell
        id="shopify-modules"
        eyebrow="Shopify Modules"
        title="Embedded storefront surfaces"
        description="Buy button embeds keep the current client-only architecture, but the wrappers now feel branded and launch-ready even before live code is pasted in."
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <ShopifyEmbed type="collection" />
          <ShopifyEmbed type="product" productKey={featuredProduct.key} />
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Final Pass"
        title="Keep the purchase path close."
        description="The next action should always stay clear on desktop and thumb-friendly on mobile."
        className="mobile-buy-safe border-t border-warning/10"
      >
        <div className="section-frame relative overflow-hidden rounded-[1.75rem] border border-warning/25 bg-[linear-gradient(150deg,rgba(247,210,30,0.12),rgba(242,92,5,0.08),rgba(11,11,15,0.96))] p-6 sm:p-8">
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="meta-label text-warning/78">Last chance prompt</p>
              <p className="display-feature mt-3 max-w-2xl text-ash">
                Lock in {featuredProduct.name} or keep scanning the drop.
              </p>
              <p className="body-lead mt-4 max-w-2xl text-ash/74">
                The featured checkout stays hot, the cart is one tap away, and the collection remains easy to browse without dead space on mobile.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <BuyNowButton checkoutUrl={featuredProduct.checkoutUrl} label="Buy Featured Drop" size="lg" />
              <Button href="#collection" variant="secondary" size="lg">
                Review Collection
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>

      <div className="h-24 md:hidden" aria-hidden />
      <StickyBuyBar product={featuredProduct} cartUrl={shopifyConfig.externalCartUrl} />
    </>
  );
}
