'use client';

import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import LeftBar, { MobileMenuButton } from "../components/LeftBar";
import { useState } from "react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen">
          {showLeftBar && <LeftBar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />}
          {/* Mobile menu button (top left) - only show when drawer is closed */}
          {showLeftBar && !mobileMenuOpen && (
            <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
          )}
          <main className={`flex-1 ${showLeftBar ? 'md:ml-20' : ''}`}>{children}</main>
        </div>
      </body>
    </html>
  );
}