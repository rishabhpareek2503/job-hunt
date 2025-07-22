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
    <footer className="w-full bg-white/90 border-t border-blue-100 shadow-inner pt-12 pb-6 px-4 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-6 items-start">
        {/* Logo and description */}
        <div className="md:col-span-2 flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
            </div>
            <span className="font-bold text-lg text-blue-700 tracking-tight">JobHunt</span>
          </div>
          <p className="text-sm text-gray-500 max-w-xs text-center md:text-left">
            The #1 platform to search, apply, and get hired by top companies. Your dream job is just a click away!
          </p>
        </div>
        {/* Footer columns */}
        {columns.map(col => (
          <div key={col.heading} className="flex flex-col gap-2 items-center md:items-start">
            <span className="font-semibold text-gray-800 mb-1">{col.heading}</span>
            {col.links.map(link => (
              <Link key={link.href + link.label} href={link.href} className="text-sm text-gray-600 hover:text-blue-600 transition">
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} JobHunt. All rights reserved.
      </div>
    </footer>
  );
} 