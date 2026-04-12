import { hasShopifyConfig, shopifyConfig, ShopifyEmbedMode } from "@/lib/shopify-config";

interface ShopifyEmbedProps {
  mode: ShopifyEmbedMode;
}

const modeLabel: Record<ShopifyEmbedMode, string> = {
  "buy-button": "Shopify Buy Button",
  "direct-checkout": "Direct Checkout Link",
  collection: "Collection Embed"
};

export function ShopifyEmbed({ mode }: ShopifyEmbedProps) {
  return (
    <section className="rounded-lg border border-dashed border-warning/40 bg-warning/5 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-warning">Shopify Ready</p>
      <h3 className="mt-2 text-xl font-bold text-ash">{modeLabel[mode]} Placeholder</h3>
      <p className="mt-2 text-sm text-ash/70">
        Embedded commerce is not active yet. This component is prepared to consume Shopify storefront values and render
        the selected mode when integration starts.
      </p>
      <div className="mt-4 space-y-1 text-xs text-ash/60">
        <p>Domain configured: {hasShopifyConfig ? "Yes" : "No"}</p>
        <p>Script source: {shopifyConfig.buyButtonScriptSrc}</p>
      </div>
    </section>
  );
}
