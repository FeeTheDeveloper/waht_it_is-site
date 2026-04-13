import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";

const socialPlaceholders = ["Instagram", "TikTok", "X"];

export function SiteFooter() {
  return (
    <footer className="border-t border-warning/15 bg-[#050507]">
      <Container className="py-12 sm:py-14">
        <div className="section-frame relative overflow-hidden rounded-[1.75rem] border border-warning/14 bg-[linear-gradient(155deg,rgba(247,210,30,0.07),rgba(11,11,15,0.96))] p-6 sm:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.8fr]">
            <div className="space-y-3">
              <p className="text-lg font-black uppercase tracking-[0.2em] text-ash">{siteConfig.shortName}</p>
              <p className="max-w-md text-sm text-ash/70">{siteConfig.manifesto.statement}</p>
              <p className="text-xs uppercase tracking-[0.13em] text-warning/80">{siteConfig.manifesto.support}</p>
            </div>

            <div className="space-y-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-warning">Navigate</p>
              <ul className="space-y-2 text-sm text-ash/75">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-warning">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-warning">Contact + Social</p>
              <p className="text-sm text-ash/75">{siteConfig.email}</p>
              <ul className="space-y-2 text-sm text-ash/65">
                {socialPlaceholders.map((item) => (
                  <li key={item}>{item} / @whatitisclothing</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-warning/12 pt-5 text-xs text-ash/42">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
