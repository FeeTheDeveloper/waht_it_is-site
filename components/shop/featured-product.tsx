import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BuyNowButton } from "@/components/shop/buy-now-button";

interface FeaturedProductProps {
  title: string;
  description: string;
  price: string;
  checkoutUrl: string;
  image: string;
}

export function FeaturedProduct({ title, description, price, checkoutUrl, image }: FeaturedProductProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-warning/25 bg-[radial-gradient(circle_at_top_left,rgba(247,210,30,0.16),rgba(11,11,15,0.96)_55%)] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.5)] sm:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:linear-gradient(120deg,transparent_0%,rgba(247,210,30,0.08)_52%,transparent_100%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-warning">Featured Drop</p>
          <h3 className="text-3xl font-black uppercase tracking-tight text-ash sm:text-4xl">{title}</h3>
          <p className="max-w-xl text-base text-ash/80">{description}</p>
          <p className="text-2xl font-semibold text-warning">{price}</p>
          <div className="flex flex-wrap gap-3">
            <BuyNowButton checkoutUrl={checkoutUrl} label="Buy Now" />
            <Button href="/shop" variant="secondary">
              Explore Drop
            </Button>
          </div>
        </div>

        <div className="product-placeholder relative overflow-hidden rounded-xl border border-ash/20 bg-ink/70 p-4">
          <Image
            src={image}
            alt={title}
            width={1024}
            height={1200}
            className="h-auto w-full rounded-lg object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>
    </article>
  );
}
