import { SectionShell } from "@/components/brand/section-shell";

export default function AboutPage() {
  return (
    <>
      <SectionShell eyebrow="ABOUT" title="ABOUT WHAT IT IS" description="">
        <div className="section-frame rounded-[1.7rem] border border-warning/24 bg-[radial-gradient(circle_at_top,rgba(247,210,30,0.16),rgba(198,61,10,0.1),rgba(11,11,15,0.95))] p-7 sm:p-9">
          <p className="display-kicker text-warning">CORE IDENTITY</p>
          <div className="mt-5 space-y-3">
            <p className="body-lead text-ash">
              What It Is Clothing LLC is an urban lifestyle apparel brand rooted in authenticity, cultural expression, and lived experience.
            </p>
            <p className="display-kicker text-ash">We don’t design for trends.</p>
            <p className="display-kicker text-ash">We design for reality.</p>
            <p className="body-copy text-ash/85">Every piece represents identity, resilience, and the voices that don’t always get heard.</p>
          </div>
        </div>
      </SectionShell>

      <SectionShell eyebrow="BRAND" title="Difference" description="">
        <article className="section-frame rounded-[1.3rem] border border-warning/20 bg-[linear-gradient(145deg,rgba(247,210,30,0.09),rgba(11,11,15,0.95))] p-6 sm:p-7">
          <p className="display-kicker text-warning">DIFFERENCE</p>
          <div className="mt-4 space-y-3">
            <p className="display-kicker text-ash">This brand isn’t just about what you wear.</p>
            <p className="display-kicker text-ash">It’s about what you stand on.</p>
            <p className="body-copy text-ash/85">
              We create bold, message-driven apparel that allows people to express perspective, pride, and purpose without saying a word.
            </p>
          </div>
        </article>
      </SectionShell>

      <SectionShell eyebrow="ORIGIN" title="Founder" description="">
        <article className="section-frame rounded-[1.3rem] border border-warning/20 bg-[linear-gradient(145deg,rgba(247,210,30,0.09),rgba(11,11,15,0.95))] p-6 sm:p-7">
          <p className="display-kicker text-warning">FOUNDER</p>
          <div className="mt-4 space-y-3">
            <p className="display-kicker text-ash">This brand is personal.</p>
            <p className="body-copy text-ash/85">
              Built by a combat veteran, What It Is Clothing comes from real experience — discipline, sacrifice, unity, and division across different environments.
            </p>
            <p className="body-copy text-ash/85">Every individual carries a voice that deserves to be seen, heard, and respected.</p>
          </div>
        </article>
      </SectionShell>

      <SectionShell eyebrow="POSITION" title="Bridge" description="">
        <article className="section-frame rounded-[1.3rem] border border-warning/20 bg-[linear-gradient(145deg,rgba(247,210,30,0.09),rgba(11,11,15,0.95))] p-6 sm:p-7">
          <p className="display-kicker text-warning">BRIDGE</p>
          <div className="mt-4 space-y-3">
            <p className="body-copy text-ash/85">What It Is Clothing stands at the intersection of military experience and urban culture.</p>
            <p className="display-kicker text-ash">Different backgrounds.</p>
            <p className="display-kicker text-ash">Same foundation.</p>
            <div className="pt-1 space-y-2">
              <p className="display-kicker text-ash">Resilience.</p>
              <p className="display-kicker text-ash">Loyalty.</p>
              <p className="display-kicker text-ash">Identity.</p>
            </div>
          </div>
        </article>
      </SectionShell>

      <SectionShell eyebrow="PURPOSE" title="Mission" description="">
        <article className="warning-banner section-frame rounded-[1.7rem] border border-warning/28 bg-[linear-gradient(130deg,rgba(247,210,30,0.15),rgba(198,61,10,0.12),rgba(11,11,15,0.95))] p-7 sm:p-9">
          <p className="display-kicker text-warning">MISSION</p>
          <div className="mt-4 space-y-3">
            <p className="display-kicker text-ash">We are the only urban and veteran-driven clothing brand built for the voices left unheard.</p>
            <p className="display-feature text-ash">Your voice is heard here.</p>
          </div>
        </article>
      </SectionShell>

      <SectionShell eyebrow="STATEMENT" title="Final" description="">
        <article className="section-frame rounded-[1.3rem] border border-warning/20 bg-[linear-gradient(145deg,rgba(247,210,30,0.09),rgba(11,11,15,0.95))] p-6 sm:p-7">
          <p className="display-kicker text-warning">FINAL</p>
          <div className="mt-4 space-y-2">
            <p className="display-kicker text-ash">This is more than clothing.</p>
            <p className="display-kicker text-ash">This is a statement.</p>
            <p className="display-feature text-ash">Strength.</p>
            <p className="display-feature text-ash">Truth.</p>
            <p className="display-feature text-ash">The voice of the unheard.</p>
          </div>
        </article>
      </SectionShell>
    </>
  );
}
