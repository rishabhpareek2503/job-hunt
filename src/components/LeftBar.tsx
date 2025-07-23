'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaTimes, FaBars } from "react-icons/fa";
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
        className={`fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col items-center py-4 shadow-lg z-50 transition-transform duration-300 md:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{ maxWidth: 320 }}
        aria-hidden={!isOpen}
      >
        <div className="w-full flex items-center justify-between px-4 pt-2 pb-2">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <Image src="/logo.png" alt="Logo" width={32} height={32} className="rounded-full" priority />
          </div>
          <button className="text-gray-400 hover:text-blue-600 text-2xl font-bold md:hidden" onClick={onClose} aria-label="Close menu">&times;</button>
        </div>
        <ul className="flex flex-col gap-4 w-full items-center mt-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="w-full flex justify-center">
                <Link href={item.href} className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-150 ${isActive ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-500 hover:bg-gray-100'}`} onClick={onClose}>
                  {item.icon}
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
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