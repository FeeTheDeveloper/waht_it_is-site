import { LogoBadge } from "@/components/brand/logo-badge";
import { ManifestoPanel } from "@/components/brand/manifesto-panel";
import { SectionShell } from "@/components/brand/section-shell";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function AboutPage() {
  return (
    <>
      <SectionShell
        eyebrow="About"
        title="Built to be felt."
        description={siteConfig.brandStatement}
      >
        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <LogoBadge
            title="The mark still leads the room."
            description="A smaller signal carry for the brand story, so the cracked-face logo stays present without overwhelming the page."
          />
          <div className="section-frame relative overflow-hidden rounded-[1.7rem] border border-warning/22 bg-[radial-gradient(circle_at_top,rgba(247,210,30,0.18),rgba(198,61,10,0.1),rgba(11,11,15,0.95))] p-7 sm:p-9">
            <p className="display-feature max-w-4xl text-ash">
              What It Is is not built to blend in. It is built to signal exactly who you are when the room gets quiet.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow={siteConfig.manifesto.label}
        title="The mission stays loud on purpose."
        description="The About page should carry the identity story with the same pressure as the storefront."
      >
        <ManifestoPanel label={siteConfig.manifesto.label} statement={siteConfig.manifesto.statement} supporting={siteConfig.manifesto.support}>
          <div className="rounded-[1.2rem] border border-warning/18 bg-black/25 px-4 py-4">
            <p className="meta-label">Mission</p>
            <p className="display-kicker mt-2 text-ash">Voices left unheard</p>
          </div>
          <div className="rounded-[1.2rem] border border-warning/18 bg-black/25 px-4 py-4">
            <p className="meta-label">Support</p>
            <p className="display-kicker mt-2 text-ash">{siteConfig.manifesto.support}</p>
          </div>
        </ManifestoPanel>
      </SectionShell>

      <SectionShell
        eyebrow="Mission"
        title="Urban edge. Veteran-driven backbone."
        description="The brand mission needs to feel disciplined, emotional, and direct all at once."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <article className="section-frame relative overflow-hidden rounded-[1.3rem] border border-warning/16 bg-[linear-gradient(145deg,rgba(247,210,30,0.08),rgba(11,11,15,0.94))] p-6">
            <h3 className="display-kicker text-warning">Emotion</h3>
            <p className="body-copy mt-3 text-ash/76">
              Every garment starts with pressure, presence, and a refusal to make safe background clothing.
            </p>
          </article>
          <article className="section-frame relative overflow-hidden rounded-[1.3rem] border border-warning/16 bg-[linear-gradient(145deg,rgba(247,210,30,0.08),rgba(11,11,15,0.94))] p-6">
            <h3 className="display-kicker text-warning">Service</h3>
            <p className="body-copy mt-3 text-ash/76">
              Veteran-driven means the build carries discipline, intention, and a sharper sense of responsibility.
            </p>
          </article>
          <article className="section-frame relative overflow-hidden rounded-[1.3rem] border border-warning/16 bg-[linear-gradient(145deg,rgba(247,210,30,0.08),rgba(11,11,15,0.94))] p-6">
            <h3 className="display-kicker text-warning">Identity</h3>
            <p className="body-copy mt-3 text-ash/76">
              This is more than clothing. It is the uniform for people who move loud and refuse to be muted.
            </p>
          </article>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Attitude"
        title="No quiet mode."
        description="The visuals stay gritty, the message stays direct, and the CTA stays close."
      >
        <div className="warning-banner section-frame relative overflow-hidden rounded-[1.7rem] border border-warning/28 bg-[linear-gradient(130deg,rgba(247,210,30,0.15),rgba(198,61,10,0.12),rgba(11,11,15,0.95))] p-8 sm:p-10">
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="display-feature text-ash">Wear your signal. Let the room feel it.</p>
              <p className="body-lead mt-4 max-w-2xl">{siteConfig.brandStatement}</p>
            </div>
            <Button href="/shop" size="xl">
              Enter The Shop
            </Button>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
