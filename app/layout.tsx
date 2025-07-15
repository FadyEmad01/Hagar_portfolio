import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, League_Gothic, Crimson_Pro } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/components/provider/LenisWrapper";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const crimsonPro = Crimson_Pro({
  variable: "--font-crimsonPro",
  subsets: ["latin"],
  style: ["italic", "normal"]
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const leagueGothic = League_Gothic({
  variable: "--font-leagueGothic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hagar Elshafye",
  description: "Discover the creative world of Hagar Elshafye — a Fine Arts student specializing in animation and character design. Explore a diverse portfolio of expressive illustrations, dynamic animations, and imaginative visual storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${leagueGothic.variable} ${crimsonPro.variable} antialiased overflow-x-hidden`}
      >

        <LenisWrapper>
          {children}
        </LenisWrapper>
        <Analytics />
      </body>
    </html>
  );
}
