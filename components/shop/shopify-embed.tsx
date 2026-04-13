"use client";

import { useEffect, useRef } from "react";
import { BuyNowButton } from "@/components/shop/buy-now-button";
import { Button } from "@/components/ui/button";
import {
  SHOPIFY_BUY_BUTTON_SCRIPT_SRC,
  featuredProduct,
  getEmbedCode,
  getProductByKey,
  shopifyConfig,
  ShopifyProductKey
} from "@/lib/shopify-config";

type ShopifyEmbedType = "collection" | "product";

interface ShopifyEmbedProps {
  type: ShopifyEmbedType;
  productKey?: ShopifyProductKey;
  className?: string;
}

export function ShopifyEmbed({ type, productKey, className = "" }: ShopifyEmbedProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const resolvedProduct = type === "product" ? getProductByKey(productKey ?? featuredProduct.key) : null;
  const embedCode = getEmbedCode(type, resolvedProduct?.key);
  const isConfigured = embedCode.trim().length > 0;

  useEffect(() => {
    const mountNode = mountRef.current;

    if (!mountNode || !isConfigured) {
      return;
    }

    mountNode.innerHTML = embedCode;

    if (!document.querySelector(`script[src="${SHOPIFY_BUY_BUTTON_SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = SHOPIFY_BUY_BUTTON_SCRIPT_SRC;
      script.dataset.shopifyBuyButton = "true";
      document.body.appendChild(script);
    }

    return () => {
      mountNode.innerHTML = "";
    };
  }, [embedCode, isConfigured]);

  return (
    <section
      className={`section-frame relative overflow-hidden rounded-[1.75rem] border border-warning/20 bg-[linear-gradient(150deg,rgba(247,210,30,0.1),rgba(242,92,5,0.06),rgba(11,11,15,0.96))] p-5 shadow-[0_18px_38px_rgba(0,0,0,0.34)] sm:p-6 ${className}`.trim()}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:linear-gradient(125deg,transparent_0%,rgba(247,210,30,0.08)_50%,transparent_100%)]" />
      <div className="relative">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-warning/88">
              {type === "collection" ? "Shopify Collection" : "Shopify Product"}
            </p>
            <h3 className="mt-3 text-3xl font-black uppercase text-ash sm:text-4xl">
              {type === "collection" ? "Embedded Collection Surface" : `${resolvedProduct?.name ?? "Product"} Buy Button`}
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-ash/72 sm:text-base">
              {isConfigured
                ? "Live Shopify embed detected. This module is still rendered client-side to keep the storefront safe from SSR mismatches."
                : "No embed code is configured yet, so this section stays branded and conversion-ready until the live Shopify snippet is dropped in."}
            </p>
          </div>
          <span
            className={`w-fit rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${isConfigured ? "border-warning/35 bg-warning/12 text-warning" : "border-ash/14 bg-ash/5 text-ash/66"}`}
          >
            {isConfigured ? "Live" : "Ready For Embed"}
          </span>
        </div>

        {isConfigured ? (
          <div className="mt-6 rounded-[1.35rem] border border-ash/12 bg-black/20 p-4 sm:p-6">
            <div ref={mountRef} className="shopify-embed-content min-h-16" aria-live="polite" />
          </div>
        ) : (
          <div className="mt-6 rounded-[1.35rem] border border-warning/18 bg-[linear-gradient(145deg,rgba(247,210,30,0.08),rgba(11,11,15,0.9))] p-5 sm:p-6">
            {type === "collection" ? (
              <div className="grid gap-5 lg:grid-cols-[1.1fr_auto] lg:items-end">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-warning/25 bg-warning/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-warning">
                      {shopifyConfig.products.length} products ready
                    </span>
                    <span className="rounded-full border border-ash/12 bg-ash/5 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ash/72">
                      Client-side safe
                    </span>
                  </div>
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-warning/72">Branded fallback active</p>
                    <p className="mt-2 text-3xl font-black uppercase leading-[0.94] text-ash">Collection module armed and waiting.</p>
                    <p className="mt-3 max-w-xl text-sm text-ash/72 sm:text-base">
                      Paste the live Shopify collection embed into <code className="rounded bg-ink px-1.5 py-0.5 text-warning/90">lib/shopify-config.ts</code>
                      and this shell will flip from branded fallback to live storefront without touching the architecture.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href="/shop#collection" variant="secondary" size="lg">
                    Browse Current Signals
                  </Button>
                  {shopifyConfig.externalCartUrl ? (
                    <Button href={shopifyConfig.externalCartUrl} target="_blank" rel="noopener noreferrer" size="lg">
                      Open Cart
                    </Button>
                  ) : null}
                </div>
              </div>
            ) : resolvedProduct ? (
              <div className="grid gap-5 lg:grid-cols-[1.1fr_auto] lg:items-end">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-warning/25 bg-warning/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-warning">
                      {resolvedProduct.badge}
                    </span>
                    <span className="rounded-full border border-ash/12 bg-ash/5 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ash/72">
                      {resolvedProduct.availability}
                    </span>
                  </div>
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-warning/72">Branded fallback active</p>
                    <p className="mt-2 text-3xl font-black uppercase leading-[0.94] text-ash">{resolvedProduct.name}</p>
                    <p className="mt-3 max-w-xl text-sm text-ash/72 sm:text-base">{resolvedProduct.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {resolvedProduct.highlights.slice(0, 3).map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-warning/16 bg-warning/8 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-warning/84"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <BuyNowButton checkoutUrl={resolvedProduct.checkoutUrl} label="Buy Now" size="lg" />
                  <div className="rounded-full border border-warning/25 bg-warning/10 px-4 py-3 text-center text-lg font-black uppercase text-warning">
                    {resolvedProduct.price}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        )}

        <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ash/42">
          Configure embeds in <code className="rounded bg-ink px-1.5 py-0.5 text-warning/90">lib/shopify-config.ts</code>
        </p>
      </div>
    </section>
  );
}
