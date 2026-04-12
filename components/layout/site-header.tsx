"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

function navItemClasses(isActive: boolean) {
  return [
    "text-sm font-semibold uppercase tracking-[0.11em] transition-all duration-200",
    isActive ? "text-warning" : "text-ash/75 hover:text-warning"
  ].join(" ");
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-warning/20 bg-ink/85 backdrop-blur-xl supports-[backdrop-filter]:bg-ink/70">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4 py-3">
          <Link href="/" className="group flex items-center gap-3">
            <div className="logo-placeholder relative h-10 w-10 overflow-hidden rounded-full border border-warning/60 bg-warning/10 p-1">
              <Image
                src={siteConfig.logoAssetPath}
                alt="What It Is Clothing logo"
                fill
                className="object-contain"
                sizes="40px"
                priority
              />
            </div>
            <span className="text-lg font-black tracking-[0.18em] text-ash">{siteConfig.shortName}</span>
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
            <Button href="/shop" variant="primary" size="md">
              Shop Now
            </Button>
          </div>
        </div>

        <nav aria-label="Primary mobile" className="border-t border-warning/20 pb-3 pt-2 md:hidden">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {siteConfig.nav.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "text-xs font-semibold uppercase tracking-[0.1em] transition-colors",
                      isActive ? "text-warning" : "text-ash/75 hover:text-warning"
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
