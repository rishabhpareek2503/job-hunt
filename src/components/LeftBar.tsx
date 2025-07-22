'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  {
    href: "/",
    label: "Home",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0h4" /></svg>
    ),
  },
  {
    href: "/jobs",
    label: "Jobs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 010 7.75" /></svg>
    ),
  },
  {
    href: "/hot-resumes",
    label: "Hot Resumes",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m6.364 1.636l-1.414 1.414M21 12h-2M17.364 17.364l-1.414-1.414M12 21v-2M6.636 17.364l1.414-1.414M3 12h2M6.636 6.636l1.414 1.414" /></svg>
    ),
  },
];

export default function LeftBar() {
  const pathname = usePathname();
  return (
    <nav className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-8 shadow-sm">
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
  );
} 