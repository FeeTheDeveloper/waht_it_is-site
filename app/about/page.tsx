import { SectionShell } from "@/components/brand/section-shell";

export default function AboutPage() {
  return (
    <>
      <SectionShell eyebrow="ABOUT" title="WHAT IT IS CLOTHING LLC – BRAND DESCRIPTION" description="">
        <article className="section-frame rounded-[1.7rem] border border-warning/24 bg-[radial-gradient(circle_at_top,rgba(247,210,30,0.16),rgba(198,61,10,0.1),rgba(11,11,15,0.95))] p-7 sm:p-9">
          <div className="space-y-5">
            <p className="body-lead text-ash">
              What It Is Clothing LLC is an urban lifestyle apparel brand rooted in authenticity, cultural expression, and lived experience.
            </p>

            <p className="body-copy text-ash/90">
              The brand merges streetwear aesthetics with deeper social meaning, producing garments that are not only visually compelling but also message-driven.
            </p>

            <p className="body-copy text-ash/90">
              Each piece is designed to reflect the realities, resilience, and identity of communities whose voices are often overlooked in mainstream fashion.
            </p>

            <p className="body-copy text-ash/90">
              The product line includes graphic apparel such as t-shirts, hoodies, and headwear, with an emphasis on bold design, limited releases, and storytelling.
            </p>

            <p className="body-copy text-ash/90">
              Rather than following trends, the brand positions itself as a platform—allowing wearers to express perspective, pride, and purpose through what they put on.
            </p>
          </div>
        </article>
      </SectionShell>

      <SectionShell eyebrow="MISSION" title="PERSONAL CONNECTION AND MISSION" description="">
        <article className="warning-banner section-frame rounded-[1.7rem] border border-warning/28 bg-[linear-gradient(130deg,rgba(247,210,30,0.15),rgba(198,61,10,0.12),rgba(11,11,15,0.95))] p-7 sm:p-9">
          <div className="space-y-5">
            <p className="display-kicker text-ash">This brand is deeply personal.</p>

            <p className="body-copy text-ash/90">
              As a combat veteran, the founder brings a perspective shaped by discipline, sacrifice, and exposure to both unity and division across different environments.
            </p>

            <p className="body-copy text-ash/90">That experience informs the core philosophy of the company:</p>

            <p className="display-kicker text-ash">Every individual carries a voice that deserves to be seen, heard, and respected.</p>

            <p className="body-copy text-ash/90">
              What It Is Clothing LLC is built on the belief in the spirit of the people—the raw, unfiltered expression of everyday individuals navigating real-world challenges.
            </p>

            <p className="body-copy text-ash/90">
              The brand serves as a bridge between military experience and urban culture, highlighting shared values such as resilience, loyalty, and identity.
            </p>

            <p className="body-copy text-ash/90">Through this lens, the clothing becomes more than apparel.</p>

            <p className="display-kicker text-ash">
              It becomes a statement—one that represents strength, truth, and the collective voice of those who are often unheard.
            </p>
          </div>
        </article>
      </SectionShell>
    </>
  );
}
