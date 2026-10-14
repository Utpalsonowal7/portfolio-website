import Link from "next/link";
import { assets } from "@/lib/assets";
import { portfolio, skills } from "@/lib/portfolio";
import type { ReactNode } from "react";

export const container = "mx-auto w-full max-w-[1024px] px-4 min-[1100px]:px-0";

export function Dots({ className = "", rows = 5 }: { className?: string; rows?: number }) {
  return <div aria-hidden="true" className={`flex flex-col justify-between ${className}`}>
    {Array.from({ length: rows }, (_, row) => <div key={row} className="flex justify-between">
      {Array.from({ length: 5 }, (_, column) => <img key={column} src={assets.dot} alt="" width={4} height={4} className="shrink-0" />)}
    </div>)}
  </div>;
}

export function SectionHeading({ children, line = false, className = "" }: { children: ReactNode; line?: boolean; className?: string }) {
  return <div className={`flex min-w-0 items-center gap-4 ${className}`}>
    <h2 className="shrink-0 text-[28px] leading-[42px] font-medium sm:text-[32px]"><span className="text-primary">#</span>{children}</h2>
    {line && <span className="hidden h-px min-w-0 flex-1 overflow-hidden sm:block" aria-hidden="true"><img src={assets.sectionLine} alt="" width={511} height={1} className="max-w-none" /></span>}
  </div>;
}

export function PageTitle({ name, description }: { name: string; description: string }) {
  return <div className="pt-[53px]">
    <h1 className="text-[32px] leading-[42px] font-semibold"><span className="text-primary">/</span>{name}</h1>
    <p className="mt-[14px] text-base leading-[21px]">{description}</p>
  </div>;
}

export function OutlineButton({ href, children, secondary = false, className = "" }: { href: string; children: ReactNode; secondary?: boolean; className?: string }) {
  return <Link href={href} className={`inline-flex min-h-[37px] items-center justify-center border px-4 py-[7px] text-base leading-[21px] font-medium transition-colors ${secondary ? "border-gray text-gray hover:bg-gray/10" : "border-primary text-white hover:bg-primary/10"} ${className}`}>{children}</Link>;
}

export function AboutCopy() {
  return <div className="max-w-[515px] space-y-6 text-base leading-[26px] text-gray">{portfolio.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>;
}

export function AboutPortrait({ className = "" }: { className?: string }) {
  return <div className={`relative mx-auto h-[508px] w-[343px] max-w-full ${className}`}>
    <img src={assets.about} alt="Developer in a dark hoodie" width={339} height={507} className="absolute top-0 left-1 h-[507px] w-[339px] max-w-[calc(100%_-_4px)] object-cover" />
    <Dots className="absolute top-[59px] left-0 h-[84px] w-[84px]" />
    <Dots rows={4} className="absolute top-[279px] right-4 h-[56px] w-[104px]" />
    <img src={assets.portraitLine} alt="" width={271} height={1} aria-hidden="true" className="absolute bottom-0 left-12 max-w-none" />
  </div>;
}

export function SkillBox({ name, extended = false }: { name: keyof typeof skills; extended?: boolean }) {
  const rows: readonly string[] = extended && name === "Tools" ? [...skills.Tools, "KDE fish"] : skills[name];
  return <div className="ring-gray ring-1 ring-inset">
    <h3 className="border-gray relative flex h-[37px] items-center overflow-hidden border-b px-2 text-base leading-[21px] font-semibold">{name}<img src="/assets/a6896.svg" alt="" aria-hidden="true" width={178} height={1} className="absolute bottom-0 left-0 max-w-none" /></h3>
    <div className="flex flex-col gap-2 px-2 py-2 text-base leading-[21px] text-gray">{rows.map(row => <p key={row}>{row}</p>)}</div>
  </div>;
}

export function SkillDecoration({ facts = false }: { facts?: boolean }) {
  return <div aria-hidden="true" className={`relative ${facts ? "h-[169px] w-[178px]" : "h-[282px] w-[349px]"}`}>
    {facts ? <>
      <Dots className="absolute top-0 left-0 h-16 w-16" rows={4} />
      <img src={assets.factsLogo} alt="" width={114} height={114} className="absolute top-14 left-[65px] max-w-none" />
    </> : <>
      <Dots className="absolute top-[38px] left-0 h-[63px] w-[63px]" rows={4} />
      <Dots className="absolute top-[143px] left-[177px] h-[63px] w-[63px]" />
      <span className="border-gray absolute top-0 left-[227px] size-[86px] border" />
      <span className="border-gray absolute top-[193px] left-[297px] size-[52px] border" />
      <img src={assets.skillLogo} alt="" width={114} height={114} className="absolute top-[169px] left-[15px] max-w-none" />
    </>}
  </div>;
}
