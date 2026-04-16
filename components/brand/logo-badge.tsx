import Image from "next/image";
import { siteConfig } from "@/lib/site";

interface LogoBadgeProps {
  title: string;
  description: string;
  className?: string;
}

export function LogoBadge({ title, description, className = "" }: LogoBadgeProps) {
  return (
    <aside
      className={`logo-placeholder section-frame relative overflow-hidden rounded-[1.7rem] border border-warning/22 bg-[radial-gradient(circle_at_top,rgba(247,210,30,0.16),rgba(242,92,5,0.08)_34%,rgba(9,9,13,0.96)_78%)] p-5 shadow-[0_20px_45px_rgba(0,0,0,0.38)] sm:p-6 ${className}`.trim()}
    >
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="relative mx-auto aspect-square w-28 shrink-0 rounded-[1.5rem] border border-warning/18 bg-black/25 p-3 sm:mx-0 sm:w-32">
          <Image
            src={siteConfig.logoAssetPath}
            alt="What It Is cracked-face logo badge"
            fill
            className="object-contain p-3"
            sizes="128px"
          />
        </div>
        <div className="space-y-3 text-center sm:text-left">
          <span className="eyebrow-chip">Brand mark</span>
          <p className="display-card text-ash">{title}</p>
          <p className="body-copy max-w-lg">{description}</p>
        </div>
      </div>
    </aside>
  );
}
