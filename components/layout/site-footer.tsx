import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-ash/10 bg-ink">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-2 md:col-span-2">
            <p className="text-lg font-black tracking-[0.2em] text-ash">{siteConfig.shortName}</p>
            <p className="max-w-md text-sm text-ash/70">
              Approach Cautiously. This isn’t just fashion—it’s a warning.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-warning">Navigate</p>
            <ul className="space-y-2 text-sm text-ash/80">
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
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-warning">Connect</p>
            <p className="text-sm text-ash/80">{siteConfig.email}</p>
            <p className="text-sm text-ash/50">Social channels coming soon</p>
          </div>
        </div>

        <div className="mt-8 border-t border-ash/10 pt-6 text-xs text-ash/50">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
