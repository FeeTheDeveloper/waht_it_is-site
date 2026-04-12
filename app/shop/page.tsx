import { SectionShell } from "@/components/brand/section-shell";
import { ProductGrid } from "@/components/shop/product-grid";
import { ShopifyEmbed } from "@/components/shop/shopify-embed";

const plannedProducts = [
  { id: "approach-cautiously-tee", name: "Approach Cautiously Tee", status: "Launch Ready" },
  { id: "inferno-hoodie", name: "Inferno Hoodie", status: "Planned" },
  { id: "warning-cap", name: "Warning Cap", status: "Planned" }
];

export default function ShopPage() {
  return (
    <SectionShell
      title="Shop"
      eyebrow="Commerce"
      description="This storefront foundation is prepared for future Shopify embed modes, direct checkout links, and collection experiences."
    >
      <div className="space-y-6">
        <ProductGrid items={plannedProducts} />
        <ShopifyEmbed mode="buy-button" />
      </div>
    </SectionShell>
  );
}
