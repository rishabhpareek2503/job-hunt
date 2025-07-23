'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
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

export default function LeftBar({ isOpen = false, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const pathname = usePathname();
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
        className={`fixed top-0 left-0 h-screen w-[90vw] max-w-xs bg-white/80 backdrop-blur-xl border-r border-blue-100 flex flex-col items-center py-6 shadow-2xl z-50 transition-transform duration-300 md:hidden rounded-tr-3xl rounded-br-3xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        aria-hidden={!isOpen}
      >
        <div className="w-full flex flex-col items-center justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-2 border-4 border-blue-100 animate-pulse">
            <Image src="/logo.png" alt="Logo" width={56} height={56} className="rounded-2xl" priority />
          </div>
          <span className="text-xl font-black text-blue-700 tracking-tight mb-2">JobHunt</span>
          <button className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 text-3xl font-black bg-white/80 rounded-full shadow-lg p-2 border border-blue-100 transition-all duration-200 focus:outline-none" onClick={onClose} aria-label="Close menu">&times;</button>
        </div>
        <ul className="flex flex-col gap-2 w-full px-4">
          {navItems.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="w-full">
                <Link href={item.href} className={`flex flex-row items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-150 text-lg font-semibold ${isActive ? 'bg-blue-100 text-blue-700 shadow-md scale-[1.03]' : 'text-gray-700 hover:bg-blue-50 hover:scale-[1.02]'} group relative`} onClick={onClose}>
                  <span className="w-8 h-8 flex items-center justify-center text-blue-600 group-hover:text-blue-800 transition-all">{item.icon}</span>
                  <span className="text-base sm:text-lg font-bold tracking-tight">{item.label}</span>
                </Link>
                {idx < navItems.length - 1 && <div className="h-px bg-blue-100 my-1 mx-6" />}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Desktop Sidebar */}
      <nav className="fixed top-0 left-0 h-screen w-20 bg-white border-r border-gray-200 flex flex-col items-center py-8 shadow-sm z-50 hidden md:flex">
        <div className="mb-10 flex justify-center w-full">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" priority />
          </div>
        </div>
        <ul className="flex flex-col gap-8 w-full items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="w-full flex justify-center">
                <Link href={item.href} className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-150 ${isActive ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-500 hover:bg-gray-100'}`}>
                  {item.icon}
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
} 