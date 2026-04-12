import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ash/10 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/80">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4 py-3">
          <Link href="/" className="text-lg font-black tracking-[0.2em] text-ash">
            {siteConfig.shortName}
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium uppercase tracking-[0.08em] text-ash/80 transition-colors hover:text-warning"
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

        <nav aria-label="Primary mobile" className="border-t border-ash/10 pb-3 pt-2 md:hidden">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs font-semibold uppercase tracking-[0.08em] text-ash/80 transition-colors hover:text-warning"
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
