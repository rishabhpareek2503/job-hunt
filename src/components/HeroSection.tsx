"use client";
import Image from "next/image";
import { FaBriefcase } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ReactNode } from "react";

export default function HeroSection({
  onHowItWorksClick,
  onBrowseJobsClick,
  children,
}: {
  onHowItWorksClick: () => void;
  onBrowseJobsClick: () => void;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex flex-col items-center justify-center pt-10 pb-8 px-4">
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center" style={{ minHeight: '320px' }}>
        {/* Floating company logos */}
        <Image src="https://img.logo.dev/google.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Google" width={32} height={32} className="absolute left-[-70px] top-[40px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam1" />
        <Image src="https://img.logo.dev/linkedin.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="LinkedIn" width={32} height={32} className="absolute left-[-70px] top-[130px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam2" />
        <Image src="https://img.logo.dev/meta.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Meta" width={32} height={32} className="absolute left-[-70px] top-[220px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam3" />
        <Image src="https://img.logo.dev/amazon.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Amazon" width={32} height={32} className="absolute right-[-70px] top-[40px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam4" />
        <Image src="https://img.logo.dev/netflix.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Netflix" width={32} height={32} className="absolute right-[-70px] top-[130px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam5" />
        <Image src="https://img.logo.dev/apple.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Apple" width={32} height={32} className="absolute right-[-70px] top-[220px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam6" />
        <div className="flex flex-col items-center z-10 relative w-full">
          <span className="inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full mb-4 mt-2 shadow-lg tracking-wide">
            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" /></svg>
            No.1 Job Hunt Website
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-center mb-4">
            Search,<span className="text-blue-600">Apply</span> &<br />Get Your <span className="text-blue-600">Dream Job</span>
          </h1>
          <p className="text-base md:text-lg text-gray-500 text-center max-w-2xl mb-4">
            Start your hunt for the best, life-changing career opportunities from here in your selected areas conveniently and get hired quickly.
          </p>
          <div className="flex justify-center gap-3 mt-6 mb-10">
            <button
              className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 transition text-base flex items-center gap-2 border-2 border-blue-500"
              onClick={onBrowseJobsClick}
            >
              <FaBriefcase className="w-4 h-4 mr-1" /> Browse Jobs
            </button>
            <button
              className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-full shadow-md hover:bg-blue-700 transition text-base flex items-center gap-2 border-2 border-blue-500"
              onClick={onHowItWorksClick}
            >
              How it Works? <HiOutlineArrowNarrowRight className="ml-1 w-4 h-4" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
// ...existing code... (animations for floating logos remain in global CSS) 