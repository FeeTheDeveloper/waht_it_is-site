import Image from "next/image";
import { ShopifyProductColorway } from "@/lib/shopify-config";

interface ProductColorwaysProps {
  colorways: ShopifyProductColorway[];
  title?: string;
  compact?: boolean;
  className?: string;
}

export function ProductColorways({
  colorways,
  title = "Available Colorways",
  compact = false,
  className = ""
}: ProductColorwaysProps) {
  if (!colorways.length) {
    return null;
  }

  return (
    <section className={`space-y-3 ${className}`.trim()}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="meta-label text-warning/82">{title}</p>
        <p className="micro-copy">{colorways.length} colorways</p>
      </div>

      {compact ? (
        <div className="flex flex-wrap gap-2">
          {colorways.map((colorway) => (
            <div
              key={colorway.key}
              className="inline-flex items-center gap-2 rounded-full border border-warning/16 bg-warning/8 px-3 py-2"
            >
              <span className="h-3.5 w-3.5 rounded-full border border-ash/25" style={{ backgroundColor: colorway.swatch }} />
              <span className="font-body text-[0.74rem] font-semibold uppercase tracking-normal text-ash">{colorway.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {colorways.map((colorway) => (
            <article
              key={colorway.key}
              className="section-frame relative overflow-hidden rounded-[1.2rem] border border-warning/18 bg-[linear-gradient(145deg,rgba(247,210,30,0.08),rgba(11,11,15,0.94))] p-4"
            >
              {colorway.image ? (
                <div className="overflow-hidden rounded-[1rem] border border-ash/12 bg-[#f0ece5] p-2">
                  <Image
                    src={colorway.image}
                    alt={`${colorway.name} colorway`}
                    width={720}
                    height={720}
                    className="h-auto w-full rounded-[0.8rem] object-contain"
                    sizes="(max-width: 1280px) 50vw, 25vw"
                  />
                </div>
              ) : (
                <div
                  className="h-20 rounded-[1rem] border border-ash/12"
                  style={{ background: `linear-gradient(145deg, ${colorway.swatch}, rgba(255,255,255,0.08))` }}
                />
              )}
              <div className="mt-4 flex items-center gap-3">
                <span className="h-4 w-4 rounded-full border border-ash/25" style={{ backgroundColor: colorway.swatch }} />
                <div>
                  <p className="font-heading text-xl uppercase tracking-normal text-ash">{colorway.name}</p>
                  <p className="micro-copy mt-1 text-warning/75">{colorway.accent}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
