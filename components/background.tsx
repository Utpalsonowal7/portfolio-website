import { Dots } from "./design";

export function Background({ home = false }: { home?: boolean }) {
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 hidden overflow-hidden min-[1200px]:block">
    <span className={`border-gray absolute -right-[87px] size-[155px] border ${home ? "top-[1160px]" : "top-[256px]"}`} />
    {home && <span className="border-gray absolute top-[672px] -right-[9px] size-[91px] border" />}
    <Dots className={`absolute -left-1 h-[84px] w-[84px] ${home ? "top-[955px]" : "top-[401px]"}`} />
    <Dots className={`absolute -right-[23px] h-[103px] w-[103px] ${home ? "top-[2294px]" : "top-[1390px]"}`} />
    <span className={`border-gray absolute -left-[77px] size-[155px] border ${home ? "top-[2125px]" : "top-[1221px]"}`} />
    {home && <Dots className="absolute top-[2705px] -left-[51px] h-[103px] w-[103px]" />}
  </div>;
}
