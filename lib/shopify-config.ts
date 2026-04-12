export type ShopifyEmbedMode = "buy-button" | "direct-checkout" | "collection";

export interface ShopifyConfig {
  domain: string;
  storefrontAccessToken: string;
  buyButtonScriptSrc: string;
  defaultCollectionHandle: string;
}

export const shopifyConfig: ShopifyConfig = {
  domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN ?? "",
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN ?? "",
  buyButtonScriptSrc: "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js",
  defaultCollectionHandle: process.env.NEXT_PUBLIC_SHOPIFY_COLLECTION_HANDLE ?? ""
};

export const hasShopifyConfig =
  shopifyConfig.domain.length > 0 && shopifyConfig.storefrontAccessToken.length > 0;
