import "../styles/index.scss";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Real Estate Platform",
  description: "A full-stack real estate platform for browsing listings, managing profiles, and handling authenticated property workflows.",
  keywords: ["real estate", "property listings", "Next.js", "TypeScript", "Express", "PostgreSQL"],
  openGraph: {
    title: "Real Estate Platform",
    description: "A full-stack real estate platform built with Next.js, TypeScript, Express, Sequelize, and PostgreSQL.",
    type: "website",
    siteName: "Real Estate Platform",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D1A1C",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="main-page-wrapper">
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}
