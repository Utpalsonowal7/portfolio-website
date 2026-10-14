"use client";

import { useRef } from "react";
import { assets } from "@/lib/assets";
import { portfolio } from "@/lib/portfolio";

type SocialName =
     | "github"
     | "dribbble"
     | "figma"
     | "discord"
     | "twitter"
     | "linkedin";
const labels: Record<SocialName, string> = {
     github: "GitHub",
     dribbble: "Dribbble",
     figma: "Figma",
     discord: "Discord",
     twitter: "Twitter",
     linkedin: "Linkedin",
};

export function SocialLink({
     name,
     large = false,
}: {
     name: SocialName;
     large?: boolean;
}) {
     const dialog = useRef<HTMLDialogElement>(null);
     const icon = (
          <span
               className={`flex shrink-0 items-center justify-center ${large ? "size-16" : "size-8"}`}
          >
               <img
                    src={assets[name]}
                    alt=""
                    width={30}
                    height={30}
                    className={`max-w-none ${large ? "scale-200" : ""}`}
               />
          </span>
     );
     const className =
          "inline-flex items-center text-gray transition-opacity hover:opacity-75";
     const url = portfolio.social[name];
     if (url)
          return (
               <a
                    href={url}
                    aria-label={labels[name]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
               >
                    {icon}
               </a>
          );
     return (
          <>
               <button
                    type="button"
                    aria-label={labels[name]}
                    onClick={() => dialog.current?.showModal()}
                    className={className}
               >
                    {icon}
               </button>
               <dialog
                    ref={dialog}
                    className="border-gray bg-background fixed inset-0 m-auto w-[min(420px,calc(100%_-_32px))] border p-6 text-white backdrop:bg-black/70"
               >
                    <div className="flex items-center justify-between gap-4">
                         <h2 className="text-xl font-medium">Let’s connect</h2>
                         <button
                              aria-label="Close"
                              onClick={() => dialog.current?.close()}
                              className="p-1 text-2xl text-gray"
                         >
                              ×
                         </button>
                    </div>
                    <p className="mt-4 text-gray">{portfolio.name}</p>
                    <a
                         className="mt-3 inline-block break-all text-primary underline underline-offset-4"
                         href={`mailto:${portfolio.email}`}
                    >
                         {portfolio.email}
                    </a>
               </dialog>
          </>
     );
}

export function MediaRail() {
     return (
          <aside
               aria-label="Social profiles"
               className="absolute top-0 left-[17px] z-10 hidden w-8 flex-col items-center gap-2 min-[1200px]:flex"
          >
               <div
                    aria-hidden="true"
                    className="h-[200px] w-px shrink-0 bg-white"
               />
               <SocialLink name="github" />
               <SocialLink name="linkedin" />
               <SocialLink name="twitter" />
          </aside>
     );
}
