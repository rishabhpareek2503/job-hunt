'use client';

import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import LeftBar, { MobileMenuButton } from "../components/LeftBar";
import { useState } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showLeftBar = pathname !== "/login";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <div className="flex min-h-screen">
          {showLeftBar && <LeftBar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />}
          {showLeftBar && !mobileMenuOpen && (
            <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
          )}
          <main className={`flex-1 ${showLeftBar ? 'md:ml-20' : ''}`}>{children}</main>
        </div>
      </body>
    </html>
  );
}