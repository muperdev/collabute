import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { EmailProvider } from "./context/EmailContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--poppins",
});

export const metadata: Metadata = {
  title: `Collabute`,
  description: "Shake hands with startups and earn like never before!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <EmailProvider>{children}</EmailProvider>
        <Analytics />
      </body>
    </html>
  );
}
