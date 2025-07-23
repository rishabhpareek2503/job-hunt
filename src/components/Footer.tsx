"use client";
import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    heading: "Product",
    links: [
      { href: "/jobs", label: "Browse Jobs" },
      { href: "/", label: "How it Works" },
      { href: "/", label: "Pricing" },
      { href: "/", label: "FAQ" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },
      { href: "/", label: "Careers" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/", label: "Blog" },
      { href: "/", label: "Guides" },
      { href: "/", label: "Help Center" },
      { href: "/", label: "Community" },
    ],
  },
  {
    heading: "Support",
    links: [
      { href: "/contact", label: "Contact Support" },
      { href: "/", label: "Terms of Service" },
      { href: "/", label: "Privacy Policy" },
      { href: "/", label: "Status" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white/90 border-t border-blue-100 pt-8 pb-4 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-6 items-start">
        {/* Logo and description */}
        <div className="md:col-span-2 flex flex-col items-center md:items-start mb-6 md:mb-0">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <Image src="/logo.png" alt="Logo" width={32} height={32} className="rounded-full" />
            </div>
            <span className="font-bold text-base text-blue-700 tracking-tight">JobHunt</span>
          </div>
          <p className="text-xs text-gray-500 max-w-xs text-center md:text-left">
            The #1 platform to search, apply, and get hired by top companies. Your dream job is just a click away!
          </p>
        </div>
        {/* Footer columns */}
        {columns.map(col => (
          <div key={col.heading} className="flex flex-col gap-1 items-center md:items-start">
            <span className="font-semibold text-gray-800 mb-1 text-sm">{col.heading}</span>
            {col.links.map(link => (
              <Link key={link.href + link.label} href={link.href} className="text-xs text-gray-600 hover:text-blue-600 transition text-center md:text-left">
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} JobHunt. All rights reserved.
      </div>
    </footer>
  );
} 