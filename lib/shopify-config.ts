export const SHOPIFY_BUY_BUTTON_SCRIPT_SRC =
  "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

export type ShopifyProductKey = "approach-cautiously-tee" | "no-filter-hoodie" | "raw-signal-hat";

export interface ShopifyEmbedPlaceholders {
  collection: string;
  products: Partial<Record<ShopifyProductKey, string>>;
}

export interface ShopifyProduct {
  key: ShopifyProductKey;
  name: string;
  price: string;
  description: string;
  image: string;
  checkoutUrl: string;
  embedCodeKey?: ShopifyProductKey;
}

export interface ShopifyConfig {
  featuredProductCheckoutUrl: string;
  externalCartUrl?: string;
  embedPlaceholders: ShopifyEmbedPlaceholders;
  products: ShopifyProduct[];
}

// Replace placeholder URLs with your live Shopify checkout/cart URLs.
export const shopifyConfig: ShopifyConfig = {
  featuredProductCheckoutUrl: "https://checkout.shopify.com/c/what-it-is/approach-cautiously-tee",
  externalCartUrl: "https://what-it-is-clothing.myshopify.com/cart",
  embedPlaceholders: {
    collection: `
<!-- Paste Shopify Collection Buy Button embed code below -->
<div id="shopify-collection-component"></div>
`,
    products: {
      "approach-cautiously-tee": `
<!-- Paste Shopify Product Buy Button embed code for Approach Cautiously Tee below -->
<div id="shopify-product-approach-cautiously-tee"></div>
`,
      "no-filter-hoodie": `
<!-- Paste Shopify Product Buy Button embed code for No Filter Hoodie below -->
<div id="shopify-product-no-filter-hoodie"></div>
`,
      "raw-signal-hat": `
<!-- Paste Shopify Product Buy Button embed code for Raw Signal Hat below -->
<div id="shopify-product-raw-signal-hat"></div>
`
    }
  },
  products: [
    {
      key: "approach-cautiously-tee",
      name: "Approach Cautiously Tee",
      price: "$68.00",
      description: "Premium cotton. Bold streetwear fit.",
      image: "/shop/approach-cautiously-tee.svg",
      checkoutUrl: "https://checkout.shopify.com/c/what-it-is/approach-cautiously-tee",
      embedCodeKey: "approach-cautiously-tee"
    },
    {
      key: "no-filter-hoodie",
      name: "No Filter Hoodie",
      price: "$112.00",
      description: "Heavyweight fleece. Oversized energy.",
      image: "/shop/no-filter-hoodie.svg",
      checkoutUrl: "https://checkout.shopify.com/c/what-it-is/no-filter-hoodie",
      embedCodeKey: "no-filter-hoodie"
    },
    {
      key: "raw-signal-hat",
      name: "Raw Signal Hat",
      price: "$54.00",
      description: "Structured fit. Statement essential.",
      image: "/shop/raw-signal-hat.svg",
      checkoutUrl: "https://checkout.shopify.com/c/what-it-is/raw-signal-hat",
      embedCodeKey: "raw-signal-hat"
    }
  ]
};
