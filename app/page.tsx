import { Hero } from "@/components/brand/hero";
import { SectionShell } from "@/components/brand/section-shell";
import { FeaturedProduct } from "@/components/shop/featured-product";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Hero />

      <SectionShell
        id="featured"
        eyebrow="Featured"
        title="Approach Cautiously Tee"
        description="High-impact graphic tee representing raw energy and emotion. Premium cotton, bold print, streetwear fit."
      >
        <FeaturedProduct
          title="Approach Cautiously Tee"
          description="High-impact graphic tee representing raw energy and emotion. Premium cotton, bold print, streetwear fit."
        />
      </SectionShell>

      <SectionShell
        id="brand-statement"
        eyebrow="Identity"
        title="What It Is Clothing is a statement brand."
        description="Built on emotion, driven by energy, and designed for those who live loud. This is more than clothing—this is identity."
      >
        <p className="max-w-3xl text-base text-ash/70 sm:text-lg">
          Approach Cautiously. This isn’t just fashion—it’s a warning.
        </p>
      </SectionShell>

      <SectionShell
        id="cta"
        eyebrow="Join"
        title="Join the movement. Tap in. This is WHAT IT IS."
        description="Prepare for drops, limited releases, and embedded commerce experiences built for direct action."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/shop" size="lg">
            Shop Collection
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact
          </Button>
        </div>
      </SectionShell>
    </>
  );
}
