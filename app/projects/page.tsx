import type { Metadata } from "next";
import { Background } from "@/components/background";
import { container, PageTitle, SectionHeading } from "@/components/design";
import { ProjectCard } from "@/components/project-card";
import { completeProjects, smallProjects } from "@/lib/portfolio";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
     return (
          <main id="main-content" className="relative">
               <Background />
               <div className={`${container} relative pb-24 md:pb-[187px]`}>
                    <PageTitle
                         name="projects"
                         description="List of my projects"
                    />
                    <section
                         className="mt-[68px]"
                         aria-labelledby="complete-title"
                    >
                         <SectionHeading>
                              <span id="complete-title">complete-apps</span>
                         </SectionHeading>
                         <div className="mt-8 grid items-start gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                              {completeProjects.map((project) => (
                                   <ProjectCard
                                        project={project}
                                        key={project.id}
                                   />
                              ))}
                         </div>
                    </section>
                    <section className="mt-20" aria-labelledby="small-title">
                         <SectionHeading>
                              <span id="small-title">small-projects</span>
                         </SectionHeading>
                         <div className="mt-8 grid items-start gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                              {smallProjects.map((project) => (
                                   <ProjectCard
                                        project={project}
                                        key={project.id}
                                   />
                              ))}
                         </div>
                    </section>
               </div>
          </main>
     );
}
