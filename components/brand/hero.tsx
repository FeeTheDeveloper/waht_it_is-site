import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-warning/20 py-section">
      <div className="impact-grid pointer-events-none absolute inset-0 opacity-35" />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-inferno/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-[24rem] w-[24rem] rounded-full bg-warning/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] left-1/3 h-[20rem] w-[20rem] rounded-full bg-crack/45 blur-3xl" />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.95fr] lg:gap-16">
          <div className="relative z-10 space-y-6 lg:space-y-8">
            <p className="w-fit rounded-full border border-warning/50 bg-warning/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-warning">
              What It Is Clothing
            </p>
            <h1 className="text-balance text-5xl font-black uppercase leading-[0.9] tracking-[-0.01em] text-ash sm:text-6xl lg:text-7xl xl:text-8xl">
              WHAT IT IS – No Filter. No Apologies.
            </h1>
            <p className="max-w-2xl text-lg text-ash/80 sm:text-xl">Wear your energy. Control nothing.</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/shop" variant="primary" size="lg">
                Shop Now
              </Button>
              <Button href="/about" variant="secondary" size="lg">
                Approach Cautiously
              </Button>
            </div>
          </div>

          <div className="relative z-10">
            <div className="logo-placeholder relative overflow-hidden rounded-2xl border border-warning/35 bg-[linear-gradient(160deg,rgba(247,210,30,0.1),rgba(198,61,10,0.08),rgba(11,11,15,0.95))] p-6 sm:p-8">
              <div className="absolute inset-0 opacity-60" />
              <div className="relative flex min-h-[20rem] flex-col justify-between rounded-xl border border-ash/15 bg-ink/70 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-warning/85">
                  <span>Logo Zone</span>
                  <span>Impact Ready</span>
                </div>
                <p className="max-w-xs text-3xl font-black uppercase leading-none text-ash sm:text-4xl">Drop in cracked logo asset here</p>
                <p className="text-sm uppercase tracking-[0.14em] text-ash/60">Reserved for central mark / campaign graphic</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
