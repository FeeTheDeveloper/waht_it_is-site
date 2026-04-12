import { Button } from "@/components/ui/button";

interface FeaturedProductProps {
  title: string;
  description: string;
}

export function FeaturedProduct({ title, description }: FeaturedProductProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-warning/25 bg-[radial-gradient(circle_at_top_left,rgba(247,210,30,0.16),rgba(11,11,15,0.96)_55%)] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.5)] sm:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:linear-gradient(120deg,transparent_0%,rgba(247,210,30,0.08)_52%,transparent_100%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-warning">Featured Drop</p>
          <h3 className="text-3xl font-black uppercase tracking-tight text-ash sm:text-4xl">{title}</h3>
          <p className="max-w-xl text-base text-ash/80">{description}</p>
          <p className="text-2xl font-semibold text-warning">$68.00</p>
          <div className="flex flex-wrap gap-3">
            <Button href="/shop" variant="primary">
              Buy Now
            </Button>
            <Button href="/shop" variant="secondary">
              Add to Cart
            </Button>
          </div>
        </div>

        <div className="relative rounded-xl border border-ash/20 bg-ink/70 p-4">
          <div className="product-placeholder flex min-h-[16rem] items-center justify-center rounded-lg border border-dashed border-warning/45 bg-[linear-gradient(155deg,rgba(247,210,30,0.08),rgba(198,61,10,0.08),rgba(11,11,15,0.88))] p-8 text-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-warning/90">Product Image Placeholder</p>
              <p className="mt-3 text-2xl font-black uppercase leading-tight text-ash">Approach Cautiously Tee Artwork</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
