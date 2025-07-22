'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaTimes, FaBars } from "react-icons/fa";
import React from "react";

const navItems = [
  { href: "/", label: "Home", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0h4" /></svg>) },
  { href: "/about", label: "About", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>) },
  { href: "/jobs", label: "Jobs", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 010 7.75" /></svg>) },
  { href: "/services", label: "Services", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 21m6-4l.75 4M4.5 21h15M6 21V5.25A2.25 2.25 0 018.25 3h7.5A2.25 2.25 0 0118 5.25V21" /></svg>) },
  { href: "/contact", label: "Contact", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v4.5M21 10.5a2.5 2.5 0 01-5 0M21 10.5V18a2 2 0 01-2 2H5a2 2 0 01-2-2v-7.5M3 10.5a2.5 2.5 0 005 0" /></svg>) },
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
  // Mobile: show overlay and slide-in
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      {/* Sidebar */}
      <nav
        className={`fixed h-screen top-0 left-0 z-50 w-20 bg-white border-r border-gray-200 flex flex-col items-center py-8 shadow-sm transition-transform duration-300
        md:translate-x-0 md:static md:block
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:w-20 md:z-40
        hidden md:flex md:flex-col md:items-center md:py-8 md:shadow-sm md:border-r md:border-gray-200
        `}
      >
        {/* Close button for mobile */}
        <button className="absolute top-4 right-4 md:hidden" onClick={onClose} aria-label="Close menu">
          <FaTimes className="w-6 h-6 text-gray-400" />
        </button>
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
                <Link href={item.href} className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-150 ${isActive ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-500 hover:bg-gray-100'}`}
                  >
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