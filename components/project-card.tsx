"use client";

import { useRef } from "react";
import type { Project, ProjectAction } from "@/lib/portfolio";

const buttonClass = "inline-flex min-h-[37px] items-center justify-center border px-4 py-[7px] text-base leading-[21px] font-medium transition-colors";
const actionText = (action: ProjectAction) => `${action.label} ${action.label === "Cached" ? ">=" : "<~>"}`;

export function ProjectCard({ project }: { project: Project }) {
  const preview = useRef<HTMLDialogElement>(null);
  return <article className="ring-gray min-w-0 ring-1 ring-inset">
    {project.image && <div className="border-gray h-[201px] border-b"><img src={project.image} alt={`${project.name} project screenshot`} width={331} height={201} className="h-full w-full object-cover" /></div>}
    <div className="border-gray border-b text-base leading-[21px] text-gray">{project.technologies.map((row, index) => <div key={index} className="flex min-h-[37px] flex-wrap items-center gap-x-2 gap-y-1 p-2">{row.map(technology => <span key={technology}>{technology}</span>)}</div>)}</div>
    <div className="flex flex-col items-start gap-4 p-4"><h3 className="text-2xl leading-[31px] font-medium">{project.name}</h3><p className="text-base leading-[21px] text-gray">{project.description}</p><div className="flex flex-wrap gap-4">{project.actions.map(action => {
      const styles = `${buttonClass} ${action.label === "Cached" ? "border-gray text-gray hover:bg-gray/10" : "border-primary text-white hover:bg-primary/10"}`;
      return action.url ? <a key={action.label} href={action.url} target="_blank" rel="noopener noreferrer" className={styles}>{actionText(action)}</a> : <button key={action.label} type="button" onClick={() => preview.current?.showModal()} className={styles}>{actionText(action)}</button>;
    })}</div></div>
    <dialog ref={preview} aria-label={`${project.name} preview`} className="border-gray bg-background fixed inset-0 m-auto max-h-[85dvh] w-[min(760px,calc(100%_-_32px))] border p-0 text-white backdrop:bg-black/75">
      <div className="border-gray flex items-center justify-between gap-4 border-b p-4"><h2 className="text-xl font-medium">{project.name}</h2><button type="button" aria-label="Close preview" onClick={() => preview.current?.close()} className="px-2 text-2xl text-gray">×</button></div>
      {project.image && <img src={project.image} alt={`${project.name} project screenshot`} width={760} height={430} className="h-auto w-full" />}
      <div className="p-5"><p className="text-gray">{project.description}</p><p className="mt-4 text-sm text-primary">{project.technologies.flat().join(" · ")}</p></div>
    </dialog>
  </article>;
}
