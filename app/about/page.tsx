import type { Metadata } from "next";
import {
     AboutCopy,
     AboutPortrait,
     container,
     PageTitle,
     SectionHeading,
     SkillBox,
     SkillDecoration,
} from "@/components/design";
import { Background } from "@/components/background";
import { funFacts } from "@/lib/portfolio";

export const metadata: Metadata = { title: "About me" };

export default function AboutPage() {
     return (
          <main id="main-content" className="relative">
               <Background />
               <div className={`${container} relative pb-24 md:pb-[162px]`}>
                    <PageTitle name="about-me" description="Who am i?" />
                    <section
                         aria-label="About Elias"
                         className="mt-2 grid items-center gap-8 md:min-h-[508px] md:grid-cols-[1.5fr_1fr] md:gap-16"
                    >
                         <div className="max-w-[515px] py-8">
                              <AboutCopy />
                         </div>
                         <AboutPortrait className="md:mr-0" />
                    </section>
                    <section
                         className="mt-20 md:mt-[112px]"
                         aria-labelledby="about-skills-title"
                    >
                         <SectionHeading>
                              <span id="about-skills-title">skills</span>
                         </SectionHeading>
                         <div className="mt-8 grid items-start gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-5">
                              <SkillBox name="Languages" />
                              <SkillBox name="Other" />
                              <SkillBox name="Tools" extended />
                              <SkillBox name="Databases" />
                              <SkillBox name="Frameworks" />
                         </div>
                    </section>
                    <section
                         className="mt-20 md:mt-[83px]"
                         aria-labelledby="facts-title"
                    >
                         <SectionHeading>
                              <span id="facts-title">my-fun-facts</span>
                         </SectionHeading>
                         <div className="mt-[26px] flex items-start justify-between gap-8">
                              <div className="flex max-w-[605px] flex-wrap items-start gap-4">
                                   {funFacts.map((fact) => (
                                        <p
                                             key={fact}
                                             className="border-gray border p-2 text-base leading-[21px] text-gray"
                                        >
                                             {fact}
                                        </p>
                                   ))}
                              </div>
                              <div className="mr-[85px] hidden shrink-0 lg:block">
                                   <SkillDecoration facts />
                              </div>
                         </div>
                    </section>
               </div>
          </main>
     );
}
