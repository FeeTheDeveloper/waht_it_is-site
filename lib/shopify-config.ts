export const SHOPIFY_BUY_BUTTON_SCRIPT_SRC =
  "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

export type ShopifyProductKey = "approach-cautiously-tee" | "no-filter-hoodie" | "raw-signal-hat";

export interface ShopifyProductColorway {
  key: string;
  name: string;
  swatch: string;
  accent: string;
  image?: string;
}

export interface ShopifyEmbeds {
  collection: string;
  products: Partial<Record<ShopifyProductKey, string>>;
}

export interface ShopifyProduct {
  key: ShopifyProductKey;
  name: string;
  price: string;
  description: string;
  tagline: string;
  graphicText: [string, string];
  image: string;
  featuredImage: string;
  checkoutUrl?: string;
  badge: string;
  availability: string;
  highlights: string[];
  colorways: ShopifyProductColorway[];
  embedCodeKey?: ShopifyProductKey;
}

export interface ShopifyConfig {
  featuredProductKey: ShopifyProductKey;
  externalCartUrl?: string;
  embeds: ShopifyEmbeds;
  products: ShopifyProduct[];
}

const products: ShopifyProduct[] = [
  {
    key: "approach-cautiously-tee",
    name: "Approach Cautiously Tee",
    price: "$68.00",
    description:
      "Statement graphic tee built around the warning message and the angry mark, cut in four hit-hard colorways that keep the front-line energy impossible to miss.",
    tagline: "APPROACH CAUTIOUSLY / I DON'T CONTROL MY ANGER WELL!",
    graphicText: ["APPROACH CAUTIOUSLY", "I DON'T CONTROL MY ANGER WELL!"],
    image: "/products/approach-cautiously/approach-cautiously-collage.svg",
    featuredImage: "/products/approach-cautiously/approach-cautiously-collage.svg",
    checkoutUrl: "https://checkout.shopify.com/c/what-it-is/approach-cautiously-tee",
    badge: "Frontline Drop",
    availability: "Direct Checkout Live",
    highlights: ["Premium cotton", "4 colorways", "Statement graphic"],
    colorways: [
      { key: "red", name: "Signal Red", swatch: "#cf241d", accent: "Heat-heavy standout" },
      { key: "white", name: "Static White", swatch: "#f3efe8", accent: "High-contrast print hit" },
      { key: "blue", name: "Voltage Blue", swatch: "#1d52c8", accent: "Cold-blooded impact" },
      { key: "gray", name: "Concrete Gray", swatch: "#9c9a97", accent: "Street-level neutral" }
    ],
    embedCodeKey: "approach-cautiously-tee"
  },
  {
    key: "no-filter-hoodie",
    name: "No Filter Hoodie",
    price: "$112.00",
    description: "Heavyweight fleece with oversized attitude and enough structure to carry the entire look.",
    tagline: "Heavyweight fleece. Oversized energy.",
    graphicText: ["NO FILTER", "OVERSIZED ENERGY"],
    image: "/shop/no-filter-hoodie.svg",
    featuredImage: "/shop/no-filter-hoodie.svg",
    checkoutUrl: "https://checkout.shopify.com/c/what-it-is/no-filter-hoodie",
    badge: "Heavy Rotation",
    availability: "Ready To Move",
    highlights: ["Heavyweight fleece", "Oversized fit", "Layer-ready"],
    colorways: [],
    embedCodeKey: "no-filter-hoodie"
  },
  {
    key: "raw-signal-hat",
    name: "Raw Signal Hat",
    price: "$54.00",
    description: "A structured essential built to finish the uniform with clean pressure and zero softness.",
    tagline: "Structured fit. Statement finish.",
    graphicText: ["RAW SIGNAL", "STRUCTURED FIT"],
    image: "/shop/raw-signal-hat.svg",
    featuredImage: "/shop/raw-signal-hat.svg",
    checkoutUrl: "https://checkout.shopify.com/c/what-it-is/raw-signal-hat",
    badge: "Signal Essential",
    availability: "Low-Profile Flex",
    highlights: ["Structured fit", "Daily staple", "Sharp finish"],
    colorways: [],
    embedCodeKey: "raw-signal-hat"
  }
];

export const shopifyConfig: ShopifyConfig = {
  featuredProductKey: "approach-cautiously-tee",
  externalCartUrl: "https://what-it-is-clothing.myshopify.com/cart",
  embeds: {
    collection: "",
    products: {
      "approach-cautiously-tee": "",
      "no-filter-hoodie": "",
      "raw-signal-hat": ""
    }
  },
  products
};

export const shopProducts = shopifyConfig.products;

export function getProductByKey(productKey: ShopifyProductKey) {
  const product = shopifyConfig.products.find((item) => item.key === productKey);

  if (!product) {
    throw new Error(`Missing Shopify product config for ${productKey}`);
  }

  return product;
}

export const featuredProduct = getProductByKey(shopifyConfig.featuredProductKey);

export function getEmbedCode(type: "collection" | "product", productKey?: ShopifyProductKey) {
  if (type === "collection") {
    return shopifyConfig.embeds.collection;
  }

  if (!productKey) {
    return "";
  }

  return shopifyConfig.embeds.products[productKey] ?? "";
}
