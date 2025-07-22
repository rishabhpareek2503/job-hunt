"use client";

import Image from "next/image";
import { FaUserPlus, FaSignInAlt, FaUserCircle, FaSearch, FaFileAlt, FaPaperPlane } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" },
];
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
const steps = [
  {
    icon: <FaUserCircle className="text-brand-orange w-8 h-8" />,
    title: "Create an Account",
    desc: "Sign up for the job-placed profile, mention your qualifications, past experiences, and expertise, and save your interests. Voila! You’re all set to find your dream jobs.",
  },
  {
    icon: <FaSearch className="text-brand-purple w-8 h-8" />,
    title: "Search Job",
    desc: "Once you set your job hunting parameters, you’ll know your openings related to your career interest on the home page and even filter out some of the best job openings.",
  },
  {
    icon: <FaFileAlt className="text-brand-purple w-8 h-8" />,
    title: "Upload CV/ Resume",
    desc: "From numerous job openings, shortlist the right-match vacancy to your profiles and apply right after by uploading your CV/ Resume and answering a couple of questions, if any.",
  },
  {
    icon: <FaPaperPlane className="text-brand-orange w-8 h-8" />,
    title: "Get Job",
    desc: "After applying, wait for some time, schedule the interviews, and if everything suits the plan, get hired more quickly than traditional hiring methods.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-12 py-6 bg-white z-30">
        <div className="flex items-center gap-2 select-none">
          <span className="text-3xl font-black tracking-tight" style={{ color: '#6C63FF' }}>Job</span>
          <span className="text-3xl font-black tracking-tight" style={{ color: '#FF6C3A' }}>hunt</span>
        </div>
        <nav className="hidden md:flex gap-8 text-gray-700 font-semibold text-base">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="hover:text-brand-purple transition">{link.label}</a>
          ))}
        </nav>
        <div className="flex gap-4">
          <button className="px-6 py-2 border-2 border-brand-purple text-brand-purple font-bold rounded-full bg-white hover:bg-brand-purple-light transition">Login</button>
          <button className="px-6 py-2 bg-brand-purple text-white font-bold rounded-full shadow hover:bg-brand-purple/90 transition">Register</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-12 pb-8 px-4 overflow-hidden">
        {/* Floating icons/logos */}
        <div className="absolute left-10 top-10 w-8 h-8 opacity-80"><Image src="https://img.logo.dev/google.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Google" width={32} height={32} /></div>
        <div className="absolute right-24 top-24 w-8 h-8 opacity-80"><Image src="https://img.logo.dev/linkedin.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="LinkedIn" width={32} height={32} /></div>
        <div className="absolute left-1/4 top-1/2 w-8 h-8 opacity-80"><Image src="https://img.logo.dev/meta.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Meta" width={32} height={32} /></div>
        <div className="absolute right-1/4 top-1/3 w-8 h-8 opacity-80"><Image src="https://img.logo.dev/microsoft.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Microsoft" width={32} height={32} /></div>
        <div className="absolute bottom-10 right-10 w-8 h-8 opacity-80"><Image src="https://img.logo.dev/amazon.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Amazon" width={32} height={32} /></div>
        <div className="absolute left-1/3 bottom-1/4 w-8 h-8 opacity-80"><Image src="https://img.logo.dev/netflix.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Netflix" width={32} height={32} /></div>
        <div className="absolute right-1/3 bottom-1/2 w-8 h-8 opacity-80"><Image src="https://img.logo.dev/apple.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Apple" width={32} height={32} /></div>
        <div className="absolute left-24 bottom-10 w-8 h-8 opacity-80"><Image src="https://img.logo.dev/spotify.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Spotify" width={32} height={32} /></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 opacity-80"><Image src="https://img.logo.dev/adobe.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Adobe" width={32} height={32} /></div>
        {/* Main content */}
        <div className="flex flex-col items-center z-10">
          <span className="text-xs font-semibold text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full mb-4">No.1 Job Hunt Website</span>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 text-center leading-tight mb-4">
            Search,<span className="text-brand-purple">Apply</span> &<br />Get Your <span className="text-brand-purple">Dream Job</span>
          </h1>
          <p className="text-base md:text-lg text-gray-500 text-center max-w-2xl mb-6">
            Start your hunt for the best, life-changing career opportunities from here in your selected areas conveniently and get hired quickly.
          </p>
          <div className="flex gap-4 mb-6">
            <button className="px-8 py-3 bg-brand-purple text-white font-bold rounded-full shadow hover:bg-brand-purple/90 transition text-lg flex items-center gap-2">Browse Jobs</button>
            <button className="px-8 py-3 border-2 border-brand-purple text-brand-purple font-bold rounded-full bg-white hover:bg-brand-purple-light transition text-lg flex items-center gap-2">How it Works? <HiOutlineArrowNarrowRight className="ml-1 w-5 h-5" /></button>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {chips.map((chip, idx) => (
              <span
                key={idx}
                className={
                  chip.color === "purple"
                    ? "px-5 py-2 bg-brand-purple text-white font-semibold rounded-full text-sm shadow"
                    : chip.color === "purple-outline"
                    ? "px-5 py-2 border-2 border-brand-purple text-brand-purple font-semibold rounded-full text-sm bg-white"
                    : "px-5 py-2 bg-gray-200 text-gray-700 font-semibold rounded-full text-sm"
                }
              >
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full flex flex-col items-center py-16 px-4 bg-white">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-3">
          Get Hired in <span className="text-brand-purple">4 Quick Easy Steps</span>
        </h2>
        <p className="text-base md:text-lg text-gray-500 text-center max-w-2xl mb-12">
          The quickest and most effective way to get hired by the top firm working in your career interest areas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center gap-4 border border-gray-200">
              <div className="w-14 h-14 flex items-center justify-center rounded-full mb-2" style={{ background: idx % 2 === 0 ? '#FFF3ED' : '#F3F2FF' }}>
                {step.icon}
              </div>
              <span className="font-bold text-lg text-gray-900 text-center">{step.title}</span>
              <span className="text-gray-500 text-sm text-center">{step.desc}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
