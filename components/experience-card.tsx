import type { Experience } from "@/lib/experience";

export function ExperienceCard({ experience, compact = false }: { experience: Experience; compact?: boolean }) {
  return (
    <article className="border border-gray">
      <div className="flex flex-col gap-3 border-b border-gray p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6">
        <div>
          <span className="text-sm text-gray">{experience.type}</span>
          <h3 className="mt-2 text-xl font-semibold text-white">{experience.role}</h3>
          <p className="mt-2 text-base text-primary">{experience.organization}</p>
        </div>
        <div className="shrink-0 text-sm leading-6 text-gray sm:text-right">
          <p>{experience.startDate} – {experience.endDate || "Present"}</p>
          <p>{experience.location}</p>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <p className="max-w-[850px] text-base leading-[26px] text-gray">{experience.description}</p>
        <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-[26px] text-gray marker:text-primary">
          {(compact ? experience.highlights.slice(0, 2) : experience.highlights).map(highlight => <li key={highlight}>{highlight}</li>)}
        </ul>
        <ul aria-label="Technologies used" className="mt-6 flex flex-wrap gap-2">
          {experience.technologies.map(technology => <li key={technology} className="border border-gray px-2 py-1 text-sm text-gray">{technology}</li>)}
        </ul>
      </div>
    </article>
  );
}
