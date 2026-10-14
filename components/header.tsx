"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { assets } from "@/lib/assets";
import { portfolio } from "@/lib/portfolio";
import { container } from "./design";
import { SocialLink } from "./social";

const links = [
     { href: "/", label: "home" },
     { href: "/projects", label: "works" },
     { href: "/about", label: "about-me" },
     { href: "/contacts", label: "contacts" },
];

function Brand() {
     return (
          <Link href="/" className="inline-flex items-center gap-2 font-bold">
               <img src={assets.logo} width={16} height={16} alt="" />
               <span>{portfolio.name}</span>
          </Link>
     );
}

function Language() {
     return (
          <span
               aria-label="Language: English"
               className="inline-flex items-center gap-1 font-semibold text-gray"
          >
               EN
               <img src={assets.chevron} alt="" width={10} height={7} />
          </span>
     );
}

export function Header() {
     const pathname = usePathname();
     const menu = useRef<HTMLDialogElement>(null);
     const close = () => menu.current?.close();
     useEffect(() => {
          const desktop = window.matchMedia("(min-width: 768px)");
          const handleResize = () => {
               if (desktop.matches) menu.current?.close();
          };
          desktop.addEventListener("change", handleResize);
          return () => desktop.removeEventListener("change", handleResize);
     }, []);
     return (
          <>
               <header
                    className={`${container} flex h-12 items-end justify-between pb-2 text-base leading-[21px] md:h-[61px] md:pt-8`}
               >
                    <Brand />
                    <nav
                         aria-label="Main navigation"
                         className="hidden items-center gap-8 md:flex"
                    >
                         {links.map((link) => (
                              <Link
                                   key={link.href}
                                   href={link.href}
                                   aria-current={
                                        pathname === link.href
                                             ? "page"
                                             : undefined
                                   }
                                   className={`transition-colors hover:text-white ${pathname === link.href ? "font-medium text-white" : "text-gray"}`}
                              >
                                   <span className="text-primary">#</span>
                                   {link.label}
                              </Link>
                         ))}
                         <Language />
                    </nav>
                    <button
                         type="button"
                         aria-label="Open navigation"
                         aria-haspopup="dialog"
                         onClick={() => menu.current?.showModal()}
                         className="relative mb-0.5 size-6 md:hidden"
                    >
                         <span className="bg-gray absolute top-[5px] left-0 h-0.5 w-6" />
                         <span className="bg-gray absolute top-3 right-0 h-0.5 w-[15px]" />
                    </button>
               </header>
               <dialog
                    ref={menu}
                    aria-label="Navigation"
                    className="bg-background fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none p-0 text-white md:hidden"
               >
                    <div className="flex h-12 items-end justify-between px-4 pb-2">
                         <span onClick={close}>
                              <Brand />
                         </span>
                         <button
                              aria-label="Close navigation"
                              onClick={close}
                              className="relative mb-0.5 size-6"
                         >
                              <span className="bg-gray absolute top-[11px] left-0 h-0.5 w-6 rotate-45" />
                              <span className="bg-gray absolute top-[11px] left-0 h-0.5 w-6 -rotate-45" />
                         </button>
                    </div>
                    <nav
                         aria-label="Mobile navigation"
                         className="flex flex-col items-start gap-8 px-4 pt-[47px] text-[32px] leading-[42px]"
                    >
                         {links.map((link) => (
                              <Link
                                   key={link.href}
                                   href={link.href}
                                   onClick={close}
                                   aria-current={
                                        pathname === link.href
                                             ? "page"
                                             : undefined
                                   }
                                   className={
                                        pathname === link.href
                                             ? "text-white"
                                             : "text-gray"
                                   }
                              >
                                   <span className="text-primary">#</span>
                                   {link.label}
                              </Link>
                         ))}
                         <Language />
                    </nav>
                    <div className="absolute right-0 bottom-9 left-0 flex justify-center gap-2">
                         <SocialLink name="github" large />
                         <SocialLink name="dribbble" large />
                         <SocialLink name="figma" large />
                    </div>
               </dialog>
          </>
     );
}
