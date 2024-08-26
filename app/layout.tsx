import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/header";

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Contribunation",
  description: "Shake hands with startups and earn like never before!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SpaceGrotesk.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
