import Link from "next/link";
import { portfolio } from "@/lib/portfolio";
import { assets } from "@/lib/assets";
import { container } from "./design";
import { SocialLink } from "./social";

export function Footer() {
     return (
          <footer className="relative pt-8 pb-8">
               <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gray"
               />
               <div className={container}>
                    <div className="flex flex-col justify-between gap-8 sm:flex-row">
                         <div>
                              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                                   <Link
                                        href="/"
                                        className="flex items-center gap-[9px] font-medium"
                                   >
                                        <img
                                             src={assets.logo}
                                             alt=""
                                             width={16}
                                             height={16}
                                        />
                                        {portfolio.name}
                                   </Link>
                                   <a
                                        href={`mailto:${portfolio.email}`}
                                        className="text-gray transition-colors hover:text-white"
                                   >
                                        {portfolio.email}
                                   </a>
                              </div>
                              <p className="mt-4 text-base leading-[21px]">
                                   {portfolio.role}
                              </p>
                         </div>
                         <div>
                              <h2 className="text-2xl leading-[31px] font-medium">
                                   Media
                              </h2>
                              <div className="mt-3 flex gap-2">
                                   <SocialLink name="github" />
                                   <SocialLink name="twitter" />
                                   <SocialLink name="discord" />
                              </div>
                         </div>
                    </div>
                    <p className="mt-12 text-center text-sm leading-[21px] text-gray sm:text-base">
                         {portfolio.copyright}
                    </p>
               </div>
          </footer>
     );
}
