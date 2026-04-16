"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

export default function BigLogoSplash() {
  const reduceMotion = useReducedMotion();
  const splashRef = useRef<HTMLElement | null>(null);
  const hasEnteredRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);

  useEffect(() => {
    const splashNode = splashRef.current;

    if (!splashNode) {
      return;
    }

    const enterHome = () => {
      if (hasEnteredRef.current) {
        return;
      }

      const hero = document.getElementById("home-hero");

      if (!hero) {
        return;
      }

      hasEnteredRef.current = true;
      hero.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    };

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) > 8) {
        enterHome();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === "Enter" || event.key === " ") {
        enterHome();
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const startY = touchStartYRef.current;
      const currentY = event.touches[0]?.clientY;

      if (startY === null || currentY === undefined) {
        return;
      }

      if (Math.abs(startY - currentY) > 18) {
        enterHome();
      }
    };

    splashNode.addEventListener("wheel", handleWheel, { passive: true });
    splashNode.addEventListener("touchstart", handleTouchStart, { passive: true });
    splashNode.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      splashNode.removeEventListener("wheel", handleWheel);
      splashNode.removeEventListener("touchstart", handleTouchStart);
      splashNode.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [reduceMotion]);

  const enterHome = () => {
    if (hasEnteredRef.current) {
      return;
    }

    const hero = document.getElementById("home-hero");

    if (!hero) {
      return;
    }

    hasEnteredRef.current = true;
    hero.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <section
      ref={splashRef}
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden border-b border-warning/15 bg-[#020203] px-6 pb-20 pt-28 text-ash"
    >
      <div className="impact-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute -left-24 top-10 h-[22rem] w-[22rem] rounded-full bg-inferno/35 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6rem] top-16 h-[24rem] w-[24rem] rounded-full bg-warning/18 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-8rem] left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-crack/35 blur-3xl" />

      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92, y: 28 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.95, ease: "easeOut" }}
        className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center"
      >
        <span className="eyebrow-chip">Meet UNO</span>
        <h1 className="display-feature mt-6 max-w-4xl text-ash">I am UNO and welcome to What IT IS Clothing.</h1>
        <p className="body-lead mt-4 max-w-2xl text-center">
          Move, scroll, or tap and UNO will take you straight into the home page.
        </p>

        <div className="logo-orbit relative mt-8 w-full max-w-[min(78vw,34rem)]">
          <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(247,210,30,0.28),rgba(242,92,5,0.16)_46%,transparent_76%)] blur-3xl" />
          <div className="logo-placeholder section-frame relative overflow-hidden rounded-[2rem] border border-warning/28 bg-[radial-gradient(circle_at_top,rgba(247,210,30,0.2),rgba(242,92,5,0.12)_34%,rgba(7,7,10,0.96)_74%)] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.6)] sm:p-8">
            <div className="absolute inset-x-6 top-4 h-px bg-[linear-gradient(90deg,transparent,rgba(247,210,30,0.6),transparent)]" />
            <Image
              src={siteConfig.logoAssetPath}
              alt="UNO, the cracked-face What It Is Clothing logo"
              width={1200}
              height={1200}
              priority
              className="relative h-auto w-full object-contain"
              sizes="(max-width: 768px) 80vw, 34rem"
            />
          </div>
        </div>
      </motion.div>

      <motion.button
        type="button"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: [0, 6, 0] }}
        transition={{
          duration: reduceMotion ? 0 : 1.6,
          ease: "easeInOut",
          repeat: reduceMotion ? 0 : Infinity,
          repeatType: "loop"
        }}
        className="enter-indicator absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        onClick={enterHome}
      >
        <span>Move Into Home</span>
        <span aria-hidden className="text-lg leading-none">
          v
        </span>
      </motion.button>
    </section>
  );
}
