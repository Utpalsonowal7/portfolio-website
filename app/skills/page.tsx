import type { Metadata } from "next";
import Link from "next/link";
import { Background } from "@/components/background";
import { container, OutlineButton, PageTitle } from "@/components/design";
import { skillCategories } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Utpal Sonowal’s skills in frontend, backend, databases, authentication, AI, background jobs, cloud deployment, and development tools.",
};

export default function SkillsPage() {
  return (
    <main id="main-content" className="relative">
      <Background />
      <div className={`${container} relative pb-24 md:pb-32`}>
        <PageTitle name="skills" description="The technologies and tools I work with" />
        <p className="mt-8 max-w-[720px] text-base leading-[26px] text-gray">
          From responsive interfaces to APIs, AI features, and deployment—here’s
          the stack I use across my full-stack projects.
        </p>
        <nav aria-label="Skill categories" className="mt-8 flex flex-wrap gap-2">
          {skillCategories.map(category => (
            <a key={category.id} href={`#${category.id}`} className="border-gray border px-3 py-2 text-sm leading-5 text-gray transition-colors hover:border-primary hover:text-white">
              <span className="text-primary">#</span>{category.title}
            </a>
          ))}
        </nav>
        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-2 md:gap-6">
          {skillCategories.map((category, index) => (
            <section key={category.id} id={category.id} aria-labelledby={`${category.id}-title`} className="border-gray scroll-mt-8 border">
              <div className="border-gray flex items-center gap-4 border-b px-4 py-4 sm:px-5">
                <span aria-hidden="true" className="text-sm text-gray">{String(index + 1).padStart(2, "0")}</span>
                <h2 id={`${category.id}-title`} className="min-w-0 text-xl leading-[28px] font-medium sm:text-2xl sm:leading-[31px]">
                  <span className="text-primary">#</span>{category.title}
                </h2>
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-sm leading-6 text-gray sm:text-base">{category.description}</p>
                <ul aria-label={`${category.title} skills`} className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <li key={skill} className="border-gray/50 max-w-full border px-3 py-2 text-sm leading-5 break-words text-white">{skill}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
        <div className="border-gray mt-12 flex flex-col items-start justify-between gap-6 border p-5 sm:flex-row sm:items-center sm:p-6">
          <div><h2 className="text-xl leading-7 font-medium">See these skills in action</h2><p className="mt-2 text-sm leading-6 text-gray">Explore the applications I’ve built.</p></div>
          <OutlineButton href="/projects" className="shrink-0">View projects -&gt;</OutlineButton>
        </div>
        <Link href="/" className="mt-8 inline-block text-sm text-gray transition-colors hover:text-primary">&lt;- Back to home</Link>
      </div>
    </main>
  );
}
