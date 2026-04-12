import { Hero } from "@/components/brand/hero";
import { SectionShell } from "@/components/brand/section-shell";
import { FeaturedProduct } from "@/components/shop/featured-product";
import { Button } from "@/components/ui/button";
import { shopifyConfig } from "@/lib/shopify-config";

const featuredDrop = shopifyConfig.products[0];

export default function HomePage() {
  return (
    <>
      <Hero />

      <SectionShell
        id="featured"
        eyebrow="Featured"
        title="Approach Cautiously Tee"
        description="High-impact graphic tee representing raw energy and emotion. Premium cotton, bold print, streetwear fit."
        className="relative overflow-hidden"
      >
        <FeaturedProduct
          title={featuredDrop.name}
          description={featuredDrop.description}
          price={featuredDrop.price}
          checkoutUrl={shopifyConfig.featuredProductCheckoutUrl}
          image={featuredDrop.image}
        />
      </SectionShell>

      <SectionShell
        id="brand-statement"
        eyebrow="Warning"
        title="Approach Cautiously. This isn’t just fashion—it’s a warning."
        description="What It Is Clothing is a statement brand. Built on emotion, driven by energy, and designed for those who live loud. This is more than clothing—this is identity."
        className="relative"
      >
        <article className="warning-banner rounded-2xl border border-warning/35 bg-[linear-gradient(110deg,rgba(247,210,30,0.14),rgba(198,61,10,0.09),rgba(11,11,15,0.94))] p-7 shadow-[0_15px_40px_rgba(0,0,0,0.45)] sm:p-9">
          <p className="max-w-4xl text-xl font-black uppercase leading-tight text-ash sm:text-2xl lg:text-3xl">
            Approach Cautiously. This isn’t just fashion—it’s a warning.
          </p>
          <p className="mt-4 max-w-3xl text-base text-ash/80 sm:text-lg">
            What It Is Clothing is a statement brand. Built on emotion, driven by energy, and designed for those who
            live loud. This is more than clothing—this is identity.
          </p>
        </article>
      </SectionShell>

      <SectionShell
        id="cta"
        eyebrow="Take Action"
        title="Join the movement. Tap in. This is WHAT IT IS."
        className="relative"
      >
        <div className="rounded-2xl border border-warning/40 bg-[radial-gradient(circle_at_top,rgba(247,210,30,0.22),rgba(242,92,5,0.1)_28%,rgba(11,11,15,0.95)_72%)] p-8 shadow-[0_0_0_1px_rgba(247,210,30,0.1),0_30px_60px_rgba(0,0,0,0.5)] sm:p-10">
          <p className="max-w-3xl text-3xl font-black uppercase leading-[1.02] text-ash sm:text-4xl lg:text-5xl">
            Join the movement. Tap in. This is WHAT IT IS.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/shop" size="lg">
              Shop Now
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Stay Connected
            </Button>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
