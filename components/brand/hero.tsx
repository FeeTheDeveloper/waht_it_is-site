import Image from "next/image";
import { BuyNowButton } from "@/components/shop/buy-now-button";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { featuredProduct } from "@/lib/shopify-config";
import { siteConfig } from "@/lib/site";

const heroSignals = [
  { label: "Featured drop", value: featuredProduct.name },
  { label: "Colorways", value: `${featuredProduct.colorways.length} options live` },
  { label: "Checkout", value: "Shopify ready" }
];

export function Hero() {
  return (
    <section
      id="home-hero"
      className="relative isolate overflow-hidden border-b border-warning/15 pb-[clamp(4rem,8vw,7rem)] pt-[clamp(4rem,8vw,6.75rem)]"
    >
      <div className="impact-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute -left-24 top-16 h-[22rem] w-[22rem] rounded-full bg-inferno/35 blur-3xl" />
      <div className="pointer-events-none absolute right-[-60px] top-0 h-[26rem] w-[26rem] rounded-full bg-warning/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] left-1/3 h-[22rem] w-[22rem] rounded-full bg-crack/35 blur-3xl" />

      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
          <div className="relative z-10">
            <p className="eyebrow-chip">{siteConfig.shortName} / Featured drop live</p>
            <div className="mt-6 space-y-5">
              <p className="micro-copy text-warning/70">Urban edge. Veteran-driven backbone.</p>
              <h1 className="display-hero text-ash">
                No Filter. No Apologies. What It Is hits first.
              </h1>
              <p className="body-lead max-w-2xl">
                Streetwear built for the voices left unheard, pushed through loud enough to feel cinematic before the first checkout click.
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <BuyNowButton checkoutUrl={featuredProduct.checkoutUrl} label="Buy Featured Drop" size="xl" className="sm:min-w-[15rem]" />
              <Button href="/shop#collection" variant="secondary" size="xl">
                Shop The Drop
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="section-frame relative overflow-hidden rounded-[1.25rem] border border-warning/15 bg-[linear-gradient(145deg,rgba(247,210,30,0.08),rgba(11,11,15,0.92))] px-4 py-4"
                >
                  <p className="meta-label">{signal.label}</p>
                  <p className="display-kicker mt-2 text-ash">{signal.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="logo-placeholder section-frame panel-sheen relative overflow-hidden rounded-[1.8rem] border border-warning/25 bg-[radial-gradient(circle_at_top,rgba(247,210,30,0.24),rgba(242,92,5,0.12)_34%,rgba(9,9,13,0.96)_74%)] p-4 sm:p-6">
              <div className="relative overflow-hidden rounded-[1.35rem] border border-ash/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] p-5 sm:p-6">
                <div className="micro-copy flex items-center justify-between text-warning/80">
                  <span>Brand mark</span>
                  <span>{featuredProduct.price}</span>
                </div>
                <div className="relative mx-auto mt-4 aspect-square w-full max-w-[24rem]">
                  <Image
                    src={siteConfig.logoAssetPath}
                    alt="What It Is Clothing brand mark"
                    width={900}
                    height={900}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 1024px) 80vw, 36vw"
                    priority
                  />
                </div>
                <div className="mt-5 rounded-[1.25rem] border border-warning/15 bg-black/25 p-4 backdrop-blur-sm">
                  <p className="meta-label">Current pressure point</p>
                  <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="display-card text-ash">{featuredProduct.name}</p>
                      <p className="body-copy mt-1 text-ash/68">{featuredProduct.tagline}</p>
                    </div>
                    <span className="eyebrow-chip border-warning/30 bg-warning/12 text-warning">
                      {featuredProduct.badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
