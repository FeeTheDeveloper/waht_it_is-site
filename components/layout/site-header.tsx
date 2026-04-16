"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

function navItemClasses(isActive: boolean) {
  return [
    "relative font-body text-[0.82rem] font-semibold uppercase tracking-normal transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-warning after:transition-transform after:duration-200",
    isActive ? "text-warning after:scale-x-100" : "text-ash/72 hover:text-warning after:scale-x-0 hover:after:scale-x-100"
  ].join(" ");
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-warning/15 bg-ink/80 shadow-[0_8px_24px_rgba(0,0,0,0.24)] backdrop-blur-xl supports-[backdrop-filter]:bg-ink/72">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4 py-3">
          <Link href="/" className="group flex items-center gap-3">
            <div className="logo-placeholder relative h-11 w-11 overflow-hidden rounded-full border border-warning/40 bg-warning/10 p-1">
              <Image
                src={siteConfig.logoAssetPath}
                alt="What It Is Clothing logo"
                fill
                className="object-contain"
                sizes="44px"
                priority
              />
            </div>
            <div>
              <span className="display-kicker block text-ash">{siteConfig.shortName}</span>
              <span className="micro-copy hidden text-warning/70 sm:block">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link key={item.href} href={item.href} className={navItemClasses(isActive)} aria-current={isActive ? "page" : undefined}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/shop" variant="primary" size="lg">
              Shop Now
            </Button>
          </div>
        </div>

        <nav aria-label="Primary mobile" className="border-t border-warning/15 pb-3 pt-2 md:hidden">
          <ul className="flex flex-wrap gap-x-3 gap-y-2">
            {siteConfig.nav.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "inline-flex rounded-full border px-3 py-1.5 font-body text-[0.68rem] font-semibold uppercase tracking-normal transition-colors",
                      isActive ? "border-warning/35 bg-warning/12 text-warning" : "border-ash/10 bg-ash/5 text-ash/72 hover:border-warning/28 hover:text-warning"
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
