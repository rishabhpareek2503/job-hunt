'use client';

import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import LeftBar from "../components/LeftBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showLeftBar = pathname !== "/login";
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen">
          {showLeftBar && <LeftBar />}
          <main className={`flex-1 ${showLeftBar ? 'ml-20' : ''}`}>{children}</main>
        </div>
      </body>
    </html>
  );
}
