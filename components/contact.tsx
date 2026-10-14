"use client";

import { useState } from "react";
import { assets } from "@/lib/assets";
import { portfolio } from "@/lib/portfolio";

export function ContactCard({ home = false }: { home?: boolean }) {
     const [copied, setCopied] = useState(false);
     const discord = home ? portfolio.homeDiscord : portfolio.discord;
     const email = home ? portfolio.homeEmail : portfolio.email;
     async function copyDiscord() {
          try {
               await navigator.clipboard.writeText(discord);
               setCopied(true);
               window.setTimeout(() => setCopied(false), 1800);
          } catch {
               setCopied(false);
          }
     }
     return (
          <div className="ring-gray w-fit max-w-full p-4 ring-1 ring-inset">
               <h3 className="text-base leading-[21px] font-semibold">
                    Message me here
               </h3>
               <div className="mt-4 flex flex-col gap-2 text-gray">
                    <button
                         type="button"
                         onClick={copyDiscord}
                         aria-label={`Copy Discord username ${discord}`}
                         className="flex items-center gap-2 text-left transition-colors hover:text-white"
                    >
                         <img
                              src={assets.discord}
                              alt=""
                              width={32}
                              height={32}
                         />
                         <span aria-live="polite">
                              {copied ? "Copied!" : discord}
                         </span>
                    </button>
                    <a
                         href={`mailto:${email}`}
                         className="flex items-center gap-2 transition-colors hover:text-white"
                    >
                         <img
                              src={assets.email}
                              alt=""
                              width={32}
                              height={32}
                         />
                         <span className="break-all">{email}</span>
                    </a>
               </div>
          </div>
     );
}
