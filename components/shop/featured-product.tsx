import { Button } from "@/components/ui/button";

interface FeaturedProductProps {
  title: string;
  description: string;
}

export function FeaturedProduct({ title, description }: FeaturedProductProps) {
  return (
    <article className="rounded-xl border border-ash/15 bg-ink p-6 shadow-[0_0_0_1px_rgba(247,210,30,0.05)]">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-warning">Featured Product</p>
      <h3 className="mt-3 text-2xl font-bold text-ash">{title}</h3>
      <p className="mt-3 max-w-xl text-sm text-ash/75 sm:text-base">{description}</p>
      <div className="mt-5">
        <Button href="/shop" variant="primary">
          View Product
        </Button>
      </div>
    </article>
  );
}
