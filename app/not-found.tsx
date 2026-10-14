import Link from "next/link";
import { container } from "@/components/design";

export default function NotFound() {
     return (
          <main
               id="main-content"
               className={`${container} flex min-h-[65vh] flex-col items-start justify-center gap-6`}
          >
               <h1 className="text-4xl font-semibold">
                    <span className="text-primary">/</span>404
               </h1>
               <p className="text-gray">This page couldn’t be found.</p>
               <Link
                    href="/"
                    className="border-primary border px-4 py-2 hover:bg-primary/10"
               >
                    Back to home -&gt;
               </Link>
          </main>
     );
}
