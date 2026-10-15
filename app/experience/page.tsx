import type { Metadata } from "next";
import { Background } from "@/components/background";
import { container, OutlineButton, PageTitle } from "@/components/design";
import { ExperienceCard } from "@/components/experience-card";
import { experiences } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Utpal Sonowal’s professional experience, internships, and freelance work in full-stack development.",
};

export default function ExperiencePage() {
  return (
    <main id="main-content" className="relative">
      <Background />
      <div className={`${container} relative pb-24 md:pb-32`}>
        <PageTitle name="experience" description="Where I’ve worked and what I’ve built" />
        <section aria-labelledby="work-history-title" className="mt-12">
          <h2 id="work-history-title" className="mb-6 text-2xl font-medium"><span className="text-primary">#</span>work-history</h2>
          <div className="space-y-6">
            {experiences.map(experience => <ExperienceCard key={experience.id} experience={experience} />)}
          </div>
        </section>
        <div className="mt-12 flex flex-wrap gap-4">
          <OutlineButton href="/projects">View projects -&gt;</OutlineButton>
          <OutlineButton href="/contacts" secondary>Contact me</OutlineButton>
        </div>
      </div>
    </main>
  );
}
