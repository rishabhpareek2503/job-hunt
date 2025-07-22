"use client";

import Image from "next/image";
import { FaUserPlus, FaSignInAlt, FaUserCircle, FaSearch, FaFileAlt, FaPaperPlane } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaBriefcase } from "react-icons/fa";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Floating Login/Signup Buttons */}
      <div className="fixed top-0 right-0 z-50 flex gap-4 p-6">
        <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full shadow hover:bg-blue-700 transition border-2 border-blue-700">Login</button>
        <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full shadow hover:bg-blue-700 transition border-2 border-blue-700">Register</button>
      </div>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-10 pb-8 px-4">
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center" style={{minHeight: '320px'}}>
          {/* Floating company logos - left (more symmetrical, spaced) */}
          <Image src="https://img.logo.dev/google.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Google" width={32} height={32} className="absolute left-[-70px] top-[40px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam1" />
          <Image src="https://img.logo.dev/linkedin.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="LinkedIn" width={32} height={32} className="absolute left-[-70px] top-[130px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam2" />
          <Image src="https://img.logo.dev/meta.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Meta" width={32} height={32} className="absolute left-[-70px] top-[220px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam3" />
          {/* Floating company logos - right (more symmetrical, spaced) */}
          <Image src="https://img.logo.dev/amazon.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Amazon" width={32} height={32} className="absolute right-[-70px] top-[40px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam4" />
          <Image src="https://img.logo.dev/netflix.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Netflix" width={32} height={32} className="absolute right-[-70px] top-[130px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam5" />
          <Image src="https://img.logo.dev/apple.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Apple" width={32} height={32} className="absolute right-[-70px] top-[220px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam6" />
          {/* Main content */}
          <div className="flex flex-col items-center z-10 relative w-full">
            {/* Center the badge above the heading with more margin */}
            <span className="inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full mb-4 mt-2 shadow-lg tracking-wide">
              <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" /></svg>
              No.1 Job Hunt Website
            </span>
            {/* Soften or remove text shadow on heading */}
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-center mb-4">
              Search,<span className="text-blue-600">Apply</span> &<br />Get Your <span className="text-blue-600">Dream Job</span>
            </h1>
            {/* Reduce vertical gap below heading */}
            <p className="text-base md:text-lg text-gray-500 text-center max-w-2xl mb-4">
              Start your hunt for the best, life-changing career opportunities from here in your selected areas conveniently and get hired quickly.
            </p>
            {/* Reduce vertical gap below subheading */}
            <div className="flex justify-center gap-3 mt-6 mb-10">
              <button
                className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 transition text-base flex items-center gap-2 border-2 border-blue-500"
                onClick={() => router.push('/jobs')}
              >
                <FaBriefcase className="w-4 h-4 mr-1" /> Browse Jobs
              </button>
              <button className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-full shadow-md hover:bg-blue-700 transition text-base flex items-center gap-2 border-2 border-blue-500">
                How it Works? <HiOutlineArrowNarrowRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            {/* Chips: lighter outline, consistent grid, gap-x-4 gap-y-3 */}
            <div className="flex flex-wrap gap-x-2 gap-y-2 justify-center">
              {chips.filter(chip => chip.label && chip.label.trim()).map((chip, idx) => (
                <span
                  key={idx}
                  className={
                    chip.color === "purple"
                      ? "px-4 py-1.5 bg-blue-600 text-white font-semibold rounded-full text-xs shadow"
                      : chip.color === "purple-outline"
                      ? "px-4 py-1.5 border-2 border-blue-200 text-blue-600 font-semibold rounded-full text-xs bg-blue-50"
                      : "px-4 py-1.5 bg-blue-100 text-blue-700 font-semibold rounded-full text-xs"
                  }
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - World-Class Polish */}
      <section className="relative w-full flex flex-col items-center py-20 px-4 bg-gradient-to-b from-blue-50/70 to-white overflow-x-hidden">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-3">
          Get Hired in <span className="text-blue-600">4 Quick Easy Steps</span>
        </h2>
        <p className="text-base md:text-lg text-gray-500 text-center max-w-2xl mb-12">
          The quickest and most effective way to get hired by the top firm working in your career interest areas.
        </p>
        <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0" style={{minHeight:'320px'}}>
          {/* Highly visible animated connector path (desktop only) - left to right */}
          <svg className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0 w-full h-48 pointer-events-none" height="192" width="100%" viewBox="0 0 1000 192" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path d="M100 96 Q 250 10 400 96 T 700 96 T 900 96" stroke="#2563eb" strokeWidth="14" filter="url(#glow)" fill="none" strokeDasharray="48 24" strokeLinecap="round">
              <animate attributeName="stroke-dashoffset" values="72;0" dur="2.5s" repeatCount="indefinite" />
            </path>
          </svg>
          {/* Steps - circular, animated, vibrant, with playful badge and icon animation */}
          {[
            {
              title: "Create Account",
              desc: "Sign up and set your profile to get started.",
              icon: (
                <svg className="w-12 h-12 text-blue-500 group-hover:animate-pulse transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="#fff"/><path d="M6 21v-2a4 4 0 014-4h0a4 4 0 014 4v2" stroke="currentColor" strokeWidth="2" fill="#fff"/></svg>
              ),
              accent: "blue",
              accentColor: "#2563eb",
              accentBg: "bg-blue-50",
              accentIcon: (
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fff"/></svg>
              )
            },
            {
              title: "Search Job",
              desc: "Find jobs that match your skills and interests.",
              icon: (
                <svg className="w-12 h-12 text-purple-500 group-hover:animate-pulse transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="#fff"/><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2"/></svg>
              ),
              accent: "purple",
              accentColor: "#a855f7",
              accentBg: "bg-purple-50",
              accentIcon: (
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fff"/></svg>
              )
            },
            {
              title: "Upload CV/Resume",
              desc: "Easily upload your CV or resume in seconds.",
              icon: (
                <svg className="w-12 h-12 text-green-500 group-hover:animate-pulse transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" fill="#fff" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="2"/></svg>
              ),
              accent: "green",
              accentColor: "#22c55e",
              accentBg: "bg-green-50",
              accentIcon: (
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fff"/></svg>
              )
            },
            {
              title: "Get Job",
              desc: "Apply and get hired by top companies!",
              icon: (
                <svg className="w-12 h-12 text-yellow-500 group-hover:animate-pulse transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" stroke="currentColor" strokeWidth="2"/><path d="M8 13l2.5 2.5L16 10" stroke="currentColor" strokeWidth="2"/></svg>
              ),
              accent: "yellow",
              accentColor: "#eab308",
              accentBg: "bg-yellow-50",
              accentIcon: (
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fff"/></svg>
              )
            },
          ].map((step, idx) => (
            <div
              key={step.title}
              className={`group relative flex flex-col items-center text-center bg-gradient-to-b from-white via-white to-white rounded-full shadow-xl px-8 py-12 w-56 h-56 transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl animate-fadein z-10`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Playful floating step badge with check icon */}
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white text-blue-600 font-bold rounded-full px-4 py-2 text-xs shadow-lg flex items-center gap-1 animate-badge-float">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" fill="none"/></svg>
                Step {idx + 1}
              </span>
              <div className="mb-2 flex items-center justify-center">
                <div className="bg-white rounded-full shadow p-4 flex items-center justify-center animate-pop">
                  {step.icon}
                </div>
              </div>
              <div className="text-lg font-extrabold mb-1 text-gray-900 animate-fadein-delay" style={{ animationDelay: `${idx * 0.2}s` }}>{step.title}</div>
            </div>
          ))}
        </div>
        {/* Step descriptions below circles, glassmorphic, compact, world-class */}
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 mt-2">
          {[
            {
              desc: "Sign up and set your profile to get started.",
              accent: "blue",
              accentColor: "#2563eb",
              accentBg: "bg-blue-50",
              accentIcon: (
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fff"/></svg>
              )
            },
            {
              desc: "Find jobs that match your skills and interests.",
              accent: "purple",
              accentColor: "#a855f7",
              accentBg: "bg-purple-50",
              accentIcon: (
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fff"/></svg>
              )
            },
            {
              desc: "Easily upload your CV or resume in seconds.",
              accent: "green",
              accentColor: "#22c55e",
              accentBg: "bg-green-50",
              accentIcon: (
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fff"/></svg>
              )
            },
            {
              desc: "Apply and get hired by top companies!",
              accent: "yellow",
              accentColor: "#eab308",
              accentBg: "bg-yellow-50",
              accentIcon: (
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fff"/></svg>
              )
            },
          ].map((step, idx) => (
            <div key={idx} className={`w-56 flex flex-col items-center`}>
              <div className={`relative flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl bg-white/60 backdrop-blur-md border-l-8`} style={{ borderColor: step.accentColor, boxShadow: `0 4px 24px 0 ${step.accentColor}22` }}>
                <span className={`absolute -left-6 -top-4 bg-white shadow-lg rounded-full p-2 border-4`} style={{ borderColor: step.accentColor }}>{step.accentIcon}</span>
                <span className="text-lg font-semibold" style={{ color: step.accentColor, lineHeight: 1.4 }}>{step.desc}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Subtle animated background shape */}
        <svg className="absolute left-0 right-0 bottom-0 -z-10 w-full h-32 opacity-20" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#3B82F6" fillOpacity="0.2" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        {/* Animations */}
        <style jsx>{`
          @keyframes fadein { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
          .animate-fadein { animation: fadein 0.8s cubic-bezier(.4,2,.6,1) both; }
          .animate-fadein-delay { animation: fadein 0.8s cubic-bezier(.4,2,.6,1) both; }
          @keyframes pop { 0% { transform: scale(0.8); } 60% { transform: scale(1.1); } 100% { transform: scale(1); } }
          .animate-pop { animation: pop 0.7s cubic-bezier(.4,2,.6,1) both; }
          @keyframes badge-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
          .animate-badge-float { animation: badge-float 2.2s ease-in-out infinite; }
        `}</style>
      </section>
    </div>
  );
}
