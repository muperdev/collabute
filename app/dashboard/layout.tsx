"use client";
import {
  CircleDollarSign,
  Layers3,
  LayoutPanelLeft,
  Sparkles,
  Compass,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", icon: LayoutPanelLeft, path: "/dashboard" },
    { name: "Explore", icon: Compass, path: "/dashboard/explore" },
    { name: "Payments", icon: CircleDollarSign, path: "/dashboard/payments" },
    { name: "Projects", icon: Layers3, path: "/dashboard/projects" },
    { name: "AI tools", icon: Sparkles, path: "/dashboard/ai-tools" },
  ];

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex items-center justify-start gap-x-2 px-6 pt-4 pb-12 border-b">
            <Link
              className="flex flex-col items-center justify-center gap-x-2 w-full"
              href={"/"}
            >
              <Image src="/logo.svg" alt="logo" width={40} height={40} />
              <h1 className="text-lg font-bold">Collabute</h1>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-sm
                ${
                  pathname === item.path
                    ? "bg-primaryLowOpacity text-primary"
                    : "text-black hover:text-primary hover:bg-primaryLowOpacity"
                }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
