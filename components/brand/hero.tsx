import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ash/10 py-section">
      <Container>
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-warning">What It Is Clothing</p>
          <h1 className="text-balance text-4xl font-black uppercase tracking-tight text-ash sm:text-5xl lg:text-6xl">
            WHAT IT IS – No Filter. No Apologies.
          </h1>
          <p className="max-w-2xl text-lg text-ash/75 sm:text-xl">Wear your energy. Control nothing.</p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="/shop" variant="primary" size="lg">
              Shop Now
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-crack/20 to-transparent lg:block" />
    </section>
  );
}
