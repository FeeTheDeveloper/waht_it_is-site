import { SectionShell } from "@/components/brand/section-shell";
import { BuyNowButton } from "@/components/shop/buy-now-button";
import { CollectionGrid } from "@/components/shop/collection-grid";
import { ShopifyEmbed } from "@/components/shop/shopify-embed";
import { Button } from "@/components/ui/button";
import { shopifyConfig } from "@/lib/shopify-config";

const featuredDrop = shopifyConfig.products[0];

export default function ShopPage() {
  return (
    <>
      <SectionShell
        eyebrow="Shop"
        title="Shop the Energy"
        description="Every piece is built to hit hard—premium materials, aggressive silhouettes, and statement graphics with no apology."
        className="border-b border-warning/15"
      >
        <div className="rounded-2xl border border-warning/35 bg-[radial-gradient(circle_at_top,rgba(247,210,30,0.2),rgba(242,92,5,0.14)_35%,rgba(11,11,15,0.94)_72%)] p-7 shadow-[0_22px_50px_rgba(0,0,0,0.46)] sm:p-10">
          <p className="max-w-3xl text-2xl font-black uppercase leading-tight text-ash sm:text-4xl">
            The signal is live. Wear it loud.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BuyNowButton checkoutUrl={shopifyConfig.featuredProductCheckoutUrl} label="Direct Checkout" />
            {shopifyConfig.externalCartUrl ? (
              <Button href={shopifyConfig.externalCartUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                Open Cart
              </Button>
            ) : null}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Featured Drop"
        title={featuredDrop.name}
        description="Frontline piece from the What It Is catalog. Designed to hold energy in every thread."
      >
        <div className="rounded-2xl border border-warning/25 bg-[linear-gradient(160deg,rgba(247,210,30,0.1),rgba(198,61,10,0.07),rgba(11,11,15,0.92))] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.4)] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <h3 className="text-3xl font-black uppercase text-ash sm:text-4xl">{featuredDrop.name}</h3>
              <p className="mt-2 text-base text-ash/80">{featuredDrop.description}</p>
              <p className="mt-3 text-xl font-semibold text-warning">{featuredDrop.price}</p>
            </div>
            <BuyNowButton checkoutUrl={featuredDrop.checkoutUrl} label="Get This Drop" />
          </div>
        </div>
      </SectionShell>

      <SectionShell eyebrow="Collection" title="Product Lineup" description="Custom storefront cards now, Shopify embed-ready architecture when needed.">
        <CollectionGrid products={shopifyConfig.products} />
      </SectionShell>

      <SectionShell
        eyebrow="Shopify Modules"
        title="Embedded Collection + Product Blocks"
        description="Paste live Shopify embed snippets into config placeholders and this section will render them client-side."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <ShopifyEmbed type="collection" />
          <ShopifyEmbed type="product" productKey="approach-cautiously-tee" />
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Statement"
        title="Approach Cautiously"
        description="This brand was built for those who live loud and move with intent. This is identity, not background noise."
      >
        <div className="warning-banner rounded-2xl border border-warning/35 bg-[linear-gradient(110deg,rgba(247,210,30,0.16),rgba(198,61,10,0.12),rgba(11,11,15,0.95))] p-8 sm:p-10">
          <p className="text-2xl font-black uppercase leading-tight text-ash sm:text-4xl">No filter. No apologies. This is WHAT IT IS.</p>
        </div>
      </SectionShell>
    </>
  );
}
