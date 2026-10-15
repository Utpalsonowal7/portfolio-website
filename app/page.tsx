import { ExperienceCard } from "@/components/experience-card";
import { experiences } from "@/lib/experience";
import Link from "next/link";
import {
     AboutCopy,
     AboutPortrait,
     container,
     Dots,
     OutlineButton,
     SectionHeading,
     SkillBox,
     SkillDecoration,
} from "@/components/design";
import { Background } from "@/components/background";
import { ContactCard } from "@/components/contact";
import { ProjectCard } from "@/components/project-card";
import { assets } from "@/lib/assets";
import { featuredProjects, portfolio } from "@/lib/portfolio";

export default function Home() {
     return (
          <main id="main-content" className="relative">
               <Background home />
               <div className={`${container} relative`}>
                    <section
                         aria-label="Introduction"
                         className="grid gap-6 pt-[34px] md:grid-cols-[1.145fr_1fr] md:items-center md:gap-[18px] md:pt-[62px]"
                    >
                         <div className="md:-translate-y-6">
                              <h1 className="text-[32px] leading-[42px] font-semibold">
                                   {portfolio.name} is a{" "}
                                   <span className="text-primary">Builder</span>{" "}
                                   and{" "}
                                   <span className="text-primary">
                                        Full Stack Developer
                                   </span>
                              </h1>
                              <p className="mt-[25px] max-w-[463px] text-base leading-[21px] text-gray md:mt-8 md:leading-[25px]">
                                   He build scalable, user-friendly web
                                   applications, combining intuitive frontend
                                   experiences with powerful backend systems.
                              </p>
                              <div className="mt-6 flex flex-wrap items-center gap-4">
                                   <OutlineButton href="/contacts">
                                        Contact me!!
                                   </OutlineButton>
                                   <a
                                        href="/cv.pdf"
                                        download="Utpal-Sonowal-CV.pdf"
                                        className="inline-flex min-h-[37px] items-center justify-center border border-gray px-4 py-[7px] text-base leading-[21px] font-medium text-gray transition-colors hover:bg-gray/10"
                                   >
                                        Download CV
                                   </a>
                              </div>
                         </div>
                         <div className="mx-auto w-full max-w-[316px] md:max-w-[469px]">
                              <div className="relative aspect-[469/386]">
                                   <div
                                        aria-hidden="true"
                                        className="absolute top-[21.76%] left-0 origin-top-left scale-[1.97] md:scale-[2.925]"
                                   >
                                        <img
                                             src={assets.outlineLogo}
                                             alt=""
                                             width={53}
                                             height={53}
                                             className="max-w-none"
                                        />
                                   </div>
                                   <div className="absolute top-0 left-[2.56%] h-full w-[97.44%] overflow-hidden">
                                        <img
                                             src={assets.hero}
                                             alt="Utpal Sonowal"
                                             width={447}
                                             height={559}
                                             className="h-full w-full object-contain"
                                             fetchPriority="high"
                                        />
                                   </div>
                                   <Dots className="absolute top-[63.73%] right-[3.4%] h-[84px] w-[84px] origin-top-right scale-[0.674] md:scale-100" />
                              </div>
                              <div className="border-gray -ml-0.5 flex min-h-[65px] w-[calc(100%_+_4px)] items-center gap-[10px] border p-2 md:ml-[6.61%] md:h-[37px] md:min-h-[37px] md:w-[85.71%] md:py-0">
                                   <span
                                        aria-hidden="true"
                                        className="bg-primary size-4 shrink-0"
                                   />
                                   <p className="text-base leading-[21px] font-medium text-gray">
                                        Job hunting in a{" "}
                                        <span className="font-semibold text-white">
                                             ghost town.
                                        </span>
                                   </p>
                              </div>
                         </div>
                    </section>

                    <figure className="mx-auto mt-20 max-w-[712px] md:mt-[112px]">
                         <blockquote className="ring-gray relative p-6 text-xl leading-[31px] font-medium ring-1 ring-inset sm:p-8 sm:text-2xl">
                              With great power comes great electricity bill
                              <img
                                   src={assets.quote}
                                   alt=""
                                   width={42}
                                   height={29}
                                   aria-hidden="true"
                                   className="absolute -top-[15px] left-[10px] max-w-none"
                              />
                              <img
                                   src={assets.quote}
                                   alt=""
                                   width={42}
                                   height={29}
                                   aria-hidden="true"
                                   className="absolute right-[15px] -bottom-[15px] max-w-none"
                              />
                         </blockquote>
                         <figcaption className="flex justify-end">
                              <span className="ring-gray p-4 text-xl leading-[31px] ring-1 ring-inset sm:text-2xl">
                                   - Dr. Who
                              </span>
                         </figcaption>
                    </figure>

                    <section
                         id="projects"
                         className="mt-[74px]"
                         aria-labelledby="projects-title"
                    >
                         <div className="flex items-center justify-between gap-4">
                              <SectionHeading
                                   line
                                   className="w-full max-w-[701px]"
                              >
                                   <span id="projects-title">projects</span>
                              </SectionHeading>
                              <Link
                                   href="/projects"
                                   className="shrink-0 text-sm font-medium transition-colors hover:text-primary sm:text-base"
                              >
                                   View all ~~&gt;
                              </Link>
                         </div>
                         <div className="mt-8 grid items-start gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                              {featuredProjects.map((project) => (
                                   <ProjectCard
                                        key={project.id}
                                        project={project}
                                   />
                              ))}
                         </div>
                    </section>

                    <section
                         id="skills"
                         className="mt-20 md:mt-[106px]"
                         aria-labelledby="skills-title"
                    >
                         <SectionHeading line className="max-w-[391px]">
                              <span id="skills-title">skills</span>
                         </SectionHeading>
                         <div className="mt-8 grid gap-8 md:mt-[43px] lg:grid-cols-[408px_1fr] lg:gap-8">
                              <div className="hidden pt-0 pl-8 lg:block">
                                   <div className="-mt-[31px]">
                                        <SkillDecoration />
                                   </div>
                              </div>
                              <div className="grid items-start gap-4 sm:grid-cols-3 lg:grid-cols-[178px_178px_196px]">
                                   <SkillBox name="Languages" />
                                   <div className="flex flex-col gap-4">
                                        <SkillBox name="Databases" />
                                        <SkillBox name="Other" />
                                   </div>
                                   <div className="flex flex-col gap-4">
                                        <SkillBox name="Tools" />
                                        <SkillBox name="Frameworks" />
                                   </div>
                              </div>
                         </div>
                         <div className="mt-6 flex justify-end">
                              <OutlineButton href="/skills">View all skills -&gt;</OutlineButton>
                         </div>
                    </section>

                    <section
                         id="experience"
                         className="mt-20 scroll-mt-8 md:mt-[106px]"
                         aria-labelledby="experience-title"
                    >
                         <SectionHeading line className="max-w-[500px]">
                              <span id="experience-title">experience</span>
                         </SectionHeading>
                         <div className="mt-8 space-y-4 md:mt-12">
                              {experiences.slice(0, 1).map(experience => (
                                   <ExperienceCard key={experience.id} experience={experience} compact />
                              ))}
                         </div>
                         <div className="mt-6 flex justify-end">
                              <OutlineButton href="/experience">View all experience -&gt;</OutlineButton>
                         </div>
                    </section>

                    <section
                         id="about-me"
                         className="mt-20 grid gap-8 md:mt-[112px] md:min-h-[508px] md:grid-cols-[1.5fr_1fr] md:gap-16"
                         aria-labelledby="about-title"
                    >
                         <div>
                              <SectionHeading line>
                                   <span id="about-title">about-me</span>
                              </SectionHeading>
                              <div className="mt-[23px]">
                                   <AboutCopy />
                              </div>
                              <OutlineButton
                                   href="/about"
                                   className="mt-[27px]"
                              >
                                   Read more -&gt;
                              </OutlineButton>
                         </div>
                         <AboutPortrait className="md:mr-0" />
                    </section>

                    <section
                         id="contacts"
                         className="mt-20 pb-24 md:mt-[112px] md:pb-[145px]"
                         aria-labelledby="contact-title"
                    >
                         <SectionHeading line className="max-w-[317px]">
                              <span id="contact-title">contacts</span>
                         </SectionHeading>
                         <div className="mt-8 flex flex-col items-start justify-between gap-8 md:mt-[45px] md:flex-row">
                              <p className="max-w-[505px] text-base leading-[21px] text-gray">
                                   {portfolio.contactText}
                              </p>
                              <ContactCard home />
                         </div>
                    </section>
               </div>
          </main>
     );
}
