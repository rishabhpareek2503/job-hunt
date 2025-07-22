"use client";

import Image from "next/image";
import { FaUserPlus, FaSignInAlt, FaUserCircle, FaSearch, FaFileAlt, FaPaperPlane } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaBriefcase } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import HeroSection from "../components/HeroSection";
import ChipsMarquee from "../components/ChipsMarquee";
import HowItWorksSection from "../components/HowItWorksSection";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" },
];

export default function HomePage() {
  const router = useRouter();
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const chips = [
    { label: "Full Stack Developer", color: "default" },
    { label: "Back-end Developer", color: "purple" },
    { label: "Graphic Designer", color: "default" },
    { label: "Senior Accountant", color: "default" },
    { label: "UI Designer", color: "default" },
    { label: "Employer Branding Associate", color: "purple-outline" },
    { label: "Lead DevOps Engineer", color: "default" },
    { label: "Employer Branding Associate", color: "default" },
    { label: "Full Stack Developer", color: "purple" },
    { label: "Back-end Developer", color: "purple-outline" },
    { label: "Graphic Designer", color: "default" },
    { label: "Senior Accountant", color: "purple-outline" },
    { label: "UI Designer", color: "default" },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Floating Login/Signup Buttons */}
      <div className="fixed top-0 right-0 z-50 flex gap-4 p-6">
        <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full shadow hover:bg-blue-700 transition border-2 border-blue-700">Login</button>
        <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full shadow hover:bg-blue-700 transition border-2 border-blue-700">Register</button>
      </div>
      {/* Hero Section with ChipsMarquee as children */}
      <HeroSection
        onHowItWorksClick={() => {
          if (howItWorksRef.current) {
            howItWorksRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onBrowseJobsClick={() => router.push('/jobs')}
      >
        <ChipsMarquee chips={chips} />
      </HeroSection>
      {/* How It Works Section */}
      <HowItWorksSection ref={howItWorksRef} />
    </div>
  );
}
