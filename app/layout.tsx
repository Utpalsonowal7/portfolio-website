import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MediaRail } from "@/components/social";
import "./globals.css";

const firaCode = localFont({ src: [{ path: "../public/fonts/fira-code-400.ttf", weight: "400", style: "normal" }, { path: "../public/fonts/fira-code-500.ttf", weight: "500", style: "normal" }, { path: "../public/fonts/fira-code-600.ttf", weight: "600", style: "normal" }, { path: "../public/fonts/fira-code-700.ttf", weight: "700", style: "normal" }], variable: "--font-fira-code", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Elias — Developer Portfolio", template: "%s | Elias" },
  description: "Web designer and front-end developer. Responsive websites where technologies meet creativity.",
  robots: { index: false, follow: false },
  icons: { icon: "/assets/48112.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${firaCode.variable} relative min-h-screen overflow-x-clip`}>
    <a href="#main-content" className="bg-primary text-background absolute top-2 left-2 z-50 -translate-y-20 px-4 py-2 font-medium focus:translate-y-0">Skip to content</a>
    <MediaRail /><Header />{children}<Footer />
  </body></html>;
}
