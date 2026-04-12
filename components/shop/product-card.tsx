import Image from "next/image";
import { ShopifyProduct } from "@/lib/shopify-config";
import { BuyNowButton } from "@/components/shop/buy-now-button";

interface ProductCardProps {
  product: ShopifyProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group product-placeholder relative overflow-hidden rounded-2xl border border-warning/25 bg-[linear-gradient(160deg,rgba(247,210,30,0.12),rgba(198,61,10,0.08),rgba(11,11,15,0.94))] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.42)] transition-transform duration-300 hover:-translate-y-1">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background:linear-gradient(130deg,transparent_0%,rgba(247,210,30,0.1)_50%,transparent_100%)]" />
      <div className="relative space-y-4">
        <div className="relative overflow-hidden rounded-xl border border-ash/20 bg-ink/65">
          <div className="absolute left-3 top-3 z-10 rounded-full border border-warning/55 bg-ink/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-warning">
            Drop Live
          </div>
          <Image
            src={product.image}
            alt={product.name}
            width={920}
            height={1080}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(155deg,rgba(247,210,30,0.08),rgba(198,61,10,0.08),rgba(11,11,15,0.75))] p-5 text-center text-ash/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-sm font-semibold uppercase tracking-[0.14em]">Image can be swapped for final campaign asset</p>
          </div>
        </div>

        <div className="space-y-2 px-1 pb-2">
          <h3 className="text-2xl font-black uppercase leading-tight text-ash">{product.name}</h3>
          <p className="text-sm text-ash/78">{product.description}</p>
          <div className="flex items-center justify-between pt-1">
            <p className="text-xl font-bold text-warning">{product.price}</p>
            <BuyNowButton checkoutUrl={product.checkoutUrl} />
          </div>
        </div>
      </div>
    </article>
  );
}
