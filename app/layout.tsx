import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito } from "next/font/google";
import { CabinetBadge } from "@/components/CabinetBadge";
import { HomeBadge } from "@/components/HomeBadge";
import { SvgFilters } from "@/components/SvgFilters";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Curiosity Cabinet",
  description:
    "Explore where everyday things come from — a parent-and-child journey through the stories behind ordinary objects.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F0EDE6" },
    { media: "(prefers-color-scheme: dark)", color: "#1B2433" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SvgFilters />
        {children}
        <HomeBadge />
        <CabinetBadge />
      </body>
    </html>
  );
}
