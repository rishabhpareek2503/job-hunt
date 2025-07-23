'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import React from "react";

const navItems = [
  { href: "/", label: "Home", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0h4" /></svg>) },
  { href: "/jobs", label: "Jobs", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 010 7.75" /></svg>) },
  { href: "/about", label: "About", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>) },
];

export function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="fixed top-4 left-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg border border-blue-100 md:hidden" onClick={onClick} aria-label="Open menu">
      <FaBars className="w-6 h-6 text-blue-600" />
    </button>
  );
}

function useTheme() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      // System preference fallback
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });
  // Apply theme to <html> on mount and when theme changes
  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);
  // Hydrate theme from localStorage on first client render
  React.useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);
  return [theme, setTheme] as const;
}

export default function LeftBar({ isOpen = false, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const pathname = usePathname();
  const [theme, setTheme] = useTheme();
  // Mobile drawer logic
  return (
    <>
      {/* Mobile Drawer & Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      <nav
        className={`fixed top-0 left-0 h-screen w-[90vw] max-w-xs bg-sidebar text-sidebar-foreground backdrop-blur-xl border-r border-sidebar-border flex flex-col items-center py-6 shadow-2xl z-50 transition-transform duration-300 md:hidden rounded-tr-3xl rounded-br-3xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        aria-hidden={!isOpen}
      >
        <div className="w-full flex flex-col items-center justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-card shadow-lg flex items-center justify-center mb-2 border-4 border-sidebar-border animate-pulse">
            <Image src="/logo.png" alt="Logo" width={56} height={56} className="rounded-2xl" priority />
          </div>
          <span className="text-xl font-black text-primary tracking-tight mb-2">Hirinex</span>
          <button className="absolute top-4 right-4 text-muted-foreground hover:text-primary text-3xl font-black bg-card rounded-full shadow-lg p-2 border border-sidebar-border transition-all duration-200 focus:outline-none" onClick={onClose} aria-label="Close menu">&times;</button>
        </div>
        <ul className="flex flex-col gap-2 w-full px-4">
          {navItems.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="w-full">
                <Link href={item.href} className={`flex flex-row items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-150 text-lg font-semibold ${isActive ? 'bg-primary/10 text-primary shadow-md scale-[1.03]' : 'text-muted-foreground hover:bg-muted hover:scale-[1.02]'} group relative`} onClick={onClose}>
                  <span className="w-8 h-8 flex items-center justify-center text-primary group-hover:text-primary/80 transition-all">{item.icon}</span>
                  <span className="text-base sm:text-lg font-bold tracking-tight">{item.label}</span>
                </Link>
                {idx < navItems.length - 1 && <div className="h-px bg-border my-1 mx-6" />}
              </li>
            );
          })}
        </ul>
        <div className="mt-8 flex flex-col items-center w-full">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-foreground font-bold shadow hover:bg-primary/10 transition text-base w-40 justify-center"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <FaSun className="w-5 h-5 text-yellow-400" /> : <FaMoon className="w-5 h-5 text-primary" />}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
      {/* Desktop Sidebar */}
      <nav className="fixed top-0 left-0 h-screen w-20 bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col items-center py-8 shadow-sm z-50 hidden md:flex">
        <div className="mb-10 flex justify-center w-full">
          <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" priority />
          </div>
        </div>
        <ul className="flex flex-col gap-8 w-full items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="w-full flex justify-center">
                <Link href={item.href} className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-150 ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-muted-foreground hover:bg-muted'}`}>
                  {item.icon}
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto mb-6 flex flex-col items-center w-full">
          <button
            className="flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-150 text-muted-foreground hover:bg-primary/10"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <FaSun className="w-6 h-6 mb-1 text-yellow-400" /> : <FaMoon className="w-6 h-6 mb-1 text-primary" />}
            <span className="text-xs">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </nav>
    </>
  );
} 