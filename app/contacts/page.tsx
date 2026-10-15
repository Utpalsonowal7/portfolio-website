import type { Metadata } from "next";
import { Background } from "@/components/background";
import { ContactCard } from "@/components/contact";
import { container, PageTitle, SectionHeading } from "@/components/design";
import { SocialLink } from "@/components/social";
import { portfolio } from "@/lib/portfolio";

export const metadata: Metadata = { title: "Contacts" };

export default function ContactsPage() {
     return (
          <main id="main-content" className="relative">
               <Background />
               <div className={`${container} relative min-h-[521px] pb-[83px]`}>
                    <PageTitle name="contacts" description="Who am i?" />
                    <section
                         aria-label="Contact information"
                         className="mt-[46px] flex flex-col items-start justify-between gap-8 lg:flex-row"
                    >
                         <p className="max-w-[505px] text-base leading-[26px] text-gray">
                              {portfolio.contactText}
                         </p>
                         <div className="flex flex-wrap items-start gap-[11px]">
                              
                              <ContactCard />
                         </div>
                    </section>
                    <section
                         className="mt-[25px]"
                         aria-labelledby="media-title"
                    >
                         <SectionHeading>
                              <span id="media-title">all-media</span>
                         </SectionHeading>
                         <div className="mt-4 flex flex-wrap items-center gap-5 text-gray">
                              <span className="flex items-center gap-2">
                                   <SocialLink name="linkedin" />
                                   <span>@utpal</span>
                              </span>
                              <span className="flex items-center gap-2">
                                   <SocialLink name="twitter" />
                                   <span>@utpal</span>
                              </span>
                         </div>
                    </section>
               </div>
          </main>
     );
}
