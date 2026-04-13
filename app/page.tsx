import { Hero } from "@/components/brand/hero";
import { ManifestoPanel } from "@/components/brand/manifesto-panel";
import { SectionShell } from "@/components/brand/section-shell";
import { BuyNowButton } from "@/components/shop/buy-now-button";
import { FeaturedProduct } from "@/components/shop/featured-product";
import { Button } from "@/components/ui/button";
import { featuredProduct } from "@/lib/shopify-config";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <SectionShell
        id="featured"
        eyebrow="Featured Drop"
        title={`${featuredProduct.name} is the front-line release.`}
        description="The main drop now carries real product imagery, clearer hierarchy, and a direct path to checkout without splintered config."
      >
        <FeaturedProduct product={featuredProduct} primaryLabel="Buy Featured Drop" secondaryHref="/shop#collection" secondaryLabel="Explore Collection" />
      </SectionShell>

      <SectionShell
        id="who-we-are"
        eyebrow={siteConfig.manifesto.label}
        title="Built for the voices left unheard."
        description="This identity message should hit like a manifesto strip, not a quiet paragraph."
      >
        <ManifestoPanel label={siteConfig.manifesto.label} statement={siteConfig.manifesto.statement} supporting={siteConfig.manifesto.support}>
          <div className="rounded-[1.2rem] border border-warning/18 bg-black/25 px-4 py-4">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-warning/72">Urban edge</p>
            <p className="mt-2 text-base font-semibold uppercase tracking-[0.08em] text-ash">Street pressure first</p>
          </div>
          <div className="rounded-[1.2rem] border border-warning/18 bg-black/25 px-4 py-4">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-warning/72">Veteran-driven</p>
            <p className="mt-2 text-base font-semibold uppercase tracking-[0.08em] text-ash">Discipline in the build</p>
          </div>
        </ManifestoPanel>
      </SectionShell>

      <SectionShell
        id="warning"
        eyebrow="Warning"
        title="Approach cautiously."
        description={siteConfig.brandStatement}
      >
        <article className="warning-banner section-frame relative overflow-hidden rounded-[1.7rem] border border-warning/28 bg-[linear-gradient(115deg,rgba(247,210,30,0.16),rgba(198,61,10,0.1),rgba(11,11,15,0.95))] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.45)] sm:p-8 lg:p-10">
          <div className="relative grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-warning/85">Brand energy</p>
              <p className="mt-4 max-w-4xl text-[clamp(2.2rem,6vw,4.7rem)] font-black uppercase leading-[0.9] text-ash">
                This is not background noise. This is identity under pressure.
              </p>
              <p className="mt-4 max-w-3xl text-base text-ash/76 sm:text-lg">{siteConfig.brandStatement}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-[1.2rem] border border-warning/18 bg-black/25 px-4 py-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-warning/72">Featured drop</p>
                <p className="mt-2 text-base font-semibold uppercase tracking-[0.08em] text-ash">{featuredProduct.name}</p>
              </div>
              <div className="rounded-[1.2rem] border border-warning/18 bg-black/25 px-4 py-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-warning/72">Graphic callout</p>
                <p className="mt-2 text-base font-semibold uppercase tracking-[0.08em] text-ash">{featuredProduct.graphicText[0]}</p>
              </div>
              <div className="rounded-[1.2rem] border border-warning/18 bg-black/25 px-4 py-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-warning/72">Voices heard</p>
                <p className="mt-2 text-base font-semibold uppercase tracking-[0.08em] text-ash">{siteConfig.manifesto.support}</p>
              </div>
            </div>
          </div>
        </article>
      </SectionShell>

      <SectionShell
        id="cta"
        eyebrow="Take Action"
        title="Make the decision while the signal is hot."
        description="Tie the brand pressure and the commerce pressure together so the path forward always feels obvious."
      >
        <div className="section-frame panel-sheen relative overflow-hidden rounded-[1.8rem] border border-warning/32 bg-[radial-gradient(circle_at_top,rgba(247,210,30,0.24),rgba(242,92,5,0.12)_30%,rgba(11,11,15,0.95)_76%)] p-7 shadow-[0_0_0_1px_rgba(247,210,30,0.08),0_30px_60px_rgba(0,0,0,0.5)] sm:p-10">
          <div className="relative grid gap-6 lg:grid-cols-[1.1fr_auto] lg:items-end">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-warning/82">Conversion pressure</p>
              <p className="mt-3 max-w-3xl text-[clamp(2.4rem,5vw,4.8rem)] font-black uppercase leading-[0.9] text-ash">
                Secure the featured drop while it is still loud.
              </p>
              <p className="mt-4 max-w-2xl text-base text-ash/76 sm:text-lg">
                Direct checkout is live for {featuredProduct.name}. Hit the fast path now or walk the full collection before the moment cools off.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <BuyNowButton checkoutUrl={featuredProduct.checkoutUrl} label="Buy Featured Drop" size="xl" />
              <Button href="/shop#collection" variant="secondary" size="xl">
                Shop The Collection
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
