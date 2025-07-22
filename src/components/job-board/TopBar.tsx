"use client";

import { useState } from "react";
import { usePathname } from 'next/navigation'
import { Menu } from "lucide-react";
import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/jobs", label: "Fresh Jobs" },
  { href: "/jobs/saved", label: "Saved" },
  { href: "/jobs/applied", label: "Applied" },
  { href: "/jobs/interviewing", label: "Interviewing" },
  { href: "/jobs/rejected", label: "Rejected" },
  { href: "/jobs/deleted", label: "Deleted" },
];

export default function TopBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md rounded-xl p-2 md:p-3">
      <div className="md:hidden flex justify-between items-center px-4">
        <span className="font-semibold">Job Board</span>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900">
          <Menu size={24} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-start bg-white shadow-lg rounded-lg p-4 mt-2">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}
              className={`flex items-center justify-start w-full p-3 rounded-lg ${pathname === item.href ? 'bg-yellow-100 text-yellow-800' : 'hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      )}

      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.label} href={item.href}
                className={`flex flex-col items-center justify-center px-3 py-1 rounded-lg transition-all duration-200 ${isActive ? "bg-yellow-200" : "hover:bg-yellow-50"}`}
              >
                <span className={`text-sm font-medium text-center ${isActive ? 'text-yellow-800' : 'text-gray-700'}`}>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
} 