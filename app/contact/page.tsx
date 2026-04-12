import { SectionShell } from "@/components/brand/section-shell";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <SectionShell
      title="Contact"
      eyebrow="Connect"
      description="For collaborations, wholesale inquiries, and campaign partnerships, use the contact channel below."
    >
      <p className="text-base text-ash/80">Email: {siteConfig.email}</p>
    </SectionShell>
  );
}
