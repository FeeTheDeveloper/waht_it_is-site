import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-warning/20 bg-ink/85 backdrop-blur-xl supports-[backdrop-filter]:bg-ink/70">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4 py-3">
          <Link href="/" className="group flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-warning/60 bg-warning/10 text-xs font-black tracking-[0.14em] text-warning transition-colors group-hover:bg-warning/20">
              WI
            </span>
            <span className="text-lg font-black tracking-[0.18em] text-ash">{siteConfig.shortName}</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-[0.11em] text-ash/75 transition-all duration-200 hover:text-warning"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/shop" variant="primary" size="md">
              Shop Now
            </Button>
          </div>
        </div>

        <nav aria-label="Primary mobile" className="border-t border-warning/20 pb-3 pt-2 md:hidden">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs font-semibold uppercase tracking-[0.1em] text-ash/75 transition-colors hover:text-warning"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
