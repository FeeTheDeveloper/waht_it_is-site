import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";

const socialPlaceholders = ["Instagram", "TikTok", "X"];

export function SiteFooter() {
  return (
    <footer className="border-t border-warning/20 bg-[#060608]">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3 md:col-span-2">
            <p className="text-lg font-black uppercase tracking-[0.2em] text-ash">{siteConfig.shortName}</p>
            <p className="max-w-md text-sm text-ash/70">
              Approach Cautiously. This isn’t just fashion—it’s a warning.
            </p>
            <p className="text-xs uppercase tracking-[0.13em] text-warning/80">Built on emotion. Worn like armor.</p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-warning">Navigate</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-warning">Contact + Social</p>
            <p className="text-sm text-ash/75">{siteConfig.email}</p>
            <ul className="space-y-2 text-sm text-ash/65">
              {socialPlaceholders.map((item) => (
                <li key={item}>{item} / @whatitisclothing</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-9 border-t border-warning/15 pt-6 text-xs text-ash/45">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
