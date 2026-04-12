import { SectionShell } from "@/components/brand/section-shell";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      <SectionShell
        eyebrow="About"
        title="Built to Be Felt"
        description="What It Is Clothing is a statement brand. Built on emotion, driven by energy, and designed for those who live loud. This is more than clothing—this is identity."
      >
        <div className="rounded-2xl border border-warning/30 bg-[radial-gradient(circle_at_top,rgba(247,210,30,0.17),rgba(198,61,10,0.12),rgba(11,11,15,0.95))] p-7 sm:p-9">
          <p className="text-2xl font-black uppercase leading-tight text-ash sm:text-3xl">
            What It Is isn’t made to blend in. It’s made to signal exactly who you are.
          </p>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Mission"
        title="Emotion First"
        description="We design high-impact apparel for people who carry intensity in everything they do."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-ash/15 bg-ink/80 p-6">
            <h3 className="text-xl font-bold uppercase text-warning">Energy</h3>
            <p className="mt-3 text-ash/80">
              Every garment is built to carry movement, pressure, and presence without losing premium quality.
            </p>
          </article>
          <article className="rounded-xl border border-ash/15 bg-ink/80 p-6">
            <h3 className="text-xl font-bold uppercase text-warning">Identity</h3>
            <p className="mt-3 text-ash/80">
              This is gear for people who treat style as language—sharp, unapologetic, unmistakable.
            </p>
          </article>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Attitude"
        title="No Quiet Mode"
        description="We keep the visuals gritty, the materials premium, and the message direct."
      >
        <div className="warning-banner rounded-2xl border border-warning/35 bg-[linear-gradient(130deg,rgba(247,210,30,0.15),rgba(198,61,10,0.12),rgba(11,11,15,0.95))] p-8 sm:p-10">
          <p className="text-2xl font-black uppercase leading-tight text-ash sm:text-4xl">
            Wear your signal. Let the room feel it.
          </p>
          <div className="mt-6">
            <Button href="/shop" size="lg">
              Enter the Shop
            </Button>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
