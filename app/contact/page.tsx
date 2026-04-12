import { SectionShell } from "@/components/brand/section-shell";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <SectionShell
        eyebrow="Contact"
        title="Tap In"
        description="For collaborations, wholesale requests, campaign features, and press, send your signal here."
      >
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-warning/30 bg-[linear-gradient(150deg,rgba(247,210,30,0.12),rgba(198,61,10,0.08),rgba(11,11,15,0.94))] p-6 sm:p-8">
            <h3 className="text-2xl font-black uppercase text-ash">Direct Contact</h3>
            <p className="mt-3 text-ash/80">Email: {siteConfig.email}</p>
            <div className="mt-6">
              <Button href={`mailto:${siteConfig.email}`} size="lg">
                Email the Brand
              </Button>
            </div>
          </article>

          <article className="rounded-2xl border border-ash/15 bg-ink/80 p-6 sm:p-8">
            <h3 className="text-xl font-black uppercase text-warning">Social Signals</h3>
            <ul className="mt-4 space-y-2 text-sm uppercase tracking-[0.12em] text-ash/75">
              <li>Instagram — @whatitisclothing</li>
              <li>TikTok — @whatitisclothing</li>
              <li>Threads — @whatitisclothing</li>
            </ul>
          </article>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Form"
        title="Contact Form"
        description="UI shell prepared for form handling integration (Formspree, Shopify forms, or custom API route)."
      >
        <form className="rounded-2xl border border-warning/25 bg-ink/80 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-ash/80">
              <span>Name</span>
              <input className="w-full rounded-md border border-ash/20 bg-ink px-3 py-2 text-ash outline-none ring-warning/50 transition focus:ring-2" placeholder="Your name" />
            </label>
            <label className="space-y-2 text-sm text-ash/80">
              <span>Email</span>
              <input className="w-full rounded-md border border-ash/20 bg-ink px-3 py-2 text-ash outline-none ring-warning/50 transition focus:ring-2" placeholder="you@example.com" type="email" />
            </label>
          </div>
          <label className="mt-4 block space-y-2 text-sm text-ash/80">
            <span>Message</span>
            <textarea className="min-h-36 w-full rounded-md border border-ash/20 bg-ink px-3 py-2 text-ash outline-none ring-warning/50 transition focus:ring-2" placeholder="Tell us what you're building." />
          </label>
          <div className="mt-6">
            <Button type="button" size="lg">
              Send Signal
            </Button>
          </div>
        </form>
      </SectionShell>
    </>
  );
}
