"use client";

import { useEffect, useMemo, useRef } from "react";
import { SHOPIFY_BUY_BUTTON_SCRIPT_SRC, shopifyConfig, ShopifyProductKey } from "@/lib/shopify-config";

type ShopifyEmbedType = "collection" | "product";

interface ShopifyEmbedProps {
  type: ShopifyEmbedType;
  productKey?: ShopifyProductKey;
  className?: string;
}

export function ShopifyEmbed({ type, productKey, className = "" }: ShopifyEmbedProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  const embedCode = useMemo(() => {
    if (type === "collection") {
      return shopifyConfig.embedPlaceholders.collection;
    }

    if (!productKey) {
      return "";
    }

    return shopifyConfig.embedPlaceholders.products[productKey] ?? "";
  }, [productKey, type]);

  useEffect(() => {
    if (!mountRef.current || !embedCode.trim()) {
      return;
    }

    mountRef.current.innerHTML = embedCode;

    if (!document.querySelector(`script[src="${SHOPIFY_BUY_BUTTON_SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = SHOPIFY_BUY_BUTTON_SCRIPT_SRC;
      script.dataset.shopifyBuyButton = "true";
      document.body.appendChild(script);
    }

    return () => {
      if (mountRef.current) {
        mountRef.current.innerHTML = "";
      }
    };
  }, [embedCode]);

  return (
    <section
      className={`rounded-2xl border border-dashed border-warning/40 bg-warning/5 p-6 shadow-[inset_0_0_30px_rgba(247,210,30,0.08)] ${className}`.trim()}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-warning">Shopify Embed Zone</p>
      <p className="mt-2 text-sm text-ash/75">
        Paste Shopify {type === "collection" ? "collection" : "product"} embed code inside
        <code className="mx-1 rounded bg-ink px-1.5 py-0.5 text-warning">lib/shopify-config.ts</code>
        placeholders. Rendering is client-only to avoid SSR issues.
      </p>
      <div ref={mountRef} className="mt-4 min-h-10" aria-live="polite" />
    </section>
  );
}
