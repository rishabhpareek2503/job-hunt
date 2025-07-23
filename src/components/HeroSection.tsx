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
    <section className="relative flex flex-col items-center justify-center pt-6 pb-6 px-2 sm:pt-10 sm:pb-8 sm:px-4">
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[220px] sm:min-h-[320px]">
        {/* Floating company logos - hidden or smaller on mobile */}
        <Image src="https://img.logo.dev/google.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Google" width={40} height={40} className="hidden sm:block absolute left-[-70px] top-[40px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam1" />
        <Image src="https://img.logo.dev/linkedin.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="LinkedIn" width={40} height={40} className="hidden sm:block absolute left-[-70px] top-[130px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam2" />
        <Image src="https://img.logo.dev/meta.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Meta" width={40} height={40} className="hidden sm:block absolute left-[-70px] top-[220px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam3" />
        <Image src="https://img.logo.dev/amazon.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Amazon" width={40} height={40} className="hidden sm:block absolute right-[-70px] top-[40px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam4" />
        <Image src="https://img.logo.dev/netflix.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Netflix" width={40} height={40} className="hidden sm:block absolute right-[-70px] top-[130px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam5" />
        <Image src="https://img.logo.dev/apple.com?token=pk_GXHi5vUDRwm1xphnJaliqA" alt="Apple" width={40} height={40} className="hidden sm:block absolute right-[-70px] top-[220px] rounded-xl shadow-lg border-2 border-blue-100 bg-white animate-roam6" />
        <div className="flex flex-col items-center z-10 relative w-full">
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full mb-2 mt-1 shadow-lg tracking-wide">
            <svg className="w-3 h-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" /></svg>
            No.1 Job Hunt Website
          </span>
          <h1 className="font-space-grotesk text-xl sm:text-2xl md:text-4xl font-black tracking-tight leading-[1.15] text-center mb-3 sm:mb-4">
            Search,<span className="text-blue-600">Apply</span> &<br />Get Your <span className="text-blue-600">Dream Job</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 text-center max-w-xs sm:max-w-2xl mb-3 sm:mb-4">
            Start your hunt for the best, life-changing career opportunities from here in your selected areas conveniently and get hired quickly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4 mb-6 w-full max-w-xs sm:max-w-none">
            <button
              className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 transition text-base flex items-center justify-center gap-2 border-2 border-blue-500"
              onClick={onBrowseJobsClick}
            >
              <FaBriefcase className="w-4 h-4 mr-1" /> Browse Jobs
            </button>
            <button
              className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 text-white font-bold rounded-full shadow-md hover:bg-blue-700 transition text-base flex items-center justify-center gap-2 border-2 border-blue-500"
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