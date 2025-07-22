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
            <span className="text-xs font-semibold bg-blue-600 text-white px-4 py-1 rounded-full mb-4 mt-2 shadow">No.1 Job Hunt Website</span>
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
