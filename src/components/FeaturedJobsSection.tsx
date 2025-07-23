"use client";
import React, { useState, useEffect } from "react";
import { dummyJobs } from "../lib/dummy-jobs";
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa";

const brandColors: Record<string, string> = {
  Google: "#4285F4",
  Amazon: "#FF9900",
  Microsoft: "#F25022",
  Apple: "#000000",
  Meta: "#1877F3",
  Netflix: "#E50914",
  LinkedIn: "#0077B5",
  Adobe: "#FF0000",
  Salesforce: "#00A1E0",
  IBM: "#006699",
  Oracle: "#F80000",
  Twitter: "#000000",
};

const getCardsToShow = () => (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3);

export default function FeaturedJobsSection({ onViewAll }: { onViewAll: () => void }) {
  const jobs = dummyJobs;
  const [cardsToShow, setCardsToShow] = useState(3); // Always start with 3 for SSR
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    function handleResize() {
      setCardsToShow(window.innerWidth < 768 ? 1 : 3);
    }
    handleResize(); // Set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + cardsToShow) % jobs.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [jobs.length, cardsToShow]);
  const goTo = (idx: number) => setCurrent((idx + jobs.length) % jobs.length);
  // Get the jobs to show, looping if needed
  const visibleJobs = Array.from({ length: cardsToShow }, (_, i) => jobs[(current + i) % jobs.length]);
  return (
    <section className="relative w-full flex flex-col items-center py-16 px-4 bg-gradient-to-b from-blue-50/60 to-white overflow-x-hidden">
      {/* Animated background shape */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="featuredJobsBg" cx="50%" cy="60%" r="80%" fx="50%" fy="60%" gradientTransform="rotate(-10)">
              <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.2" />
            </radialGradient>
          </defs>
          <rect width="1440" height="320" fill="url(#featuredJobsBg)" />
        </svg>
      </div>
      <h2 className="text-xl md:text-2xl font-extrabold text-center flex items-center justify-center gap-2 mb-2">
        <FaStar className="text-yellow-400 w-5 h-5" />
        <span className="text-black">Featured</span> <span className="text-blue-600">Jobs</span>
      </h2>
      <p className="text-base md:text-lg text-gray-500 text-center max-w-2xl mb-8">
        Explore top opportunities handpicked for you. Apply now to get ahead in your career!
      </p>
      <div className="w-full max-w-4xl flex flex-row items-center justify-center mb-8 relative gap-6">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <button
            className="p-2 bg-white/80 rounded-full shadow hover:bg-blue-100 transition"
            onClick={() => goTo(current - cardsToShow)}
            aria-label="Previous jobs"
          >
            <FaArrowLeft className="w-5 h-5 text-blue-600" />
          </button>
        </div>
        <div key={cardsToShow} className={`flex-1 flex ${cardsToShow === 1 ? 'flex-col items-center gap-0' : 'flex-row gap-6 justify-center'}`}>
          {visibleJobs.map((job, idx) => {
            const color = brandColors[job.company] || "#2563eb";
            return (
              <div
                key={job.id}
                className={`group relative flex flex-col items-start w-full max-w-xs p-5 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer animate-job-float animate-job-fadein ${cardsToShow === 1 ? 'mx-auto' : ''}`}
                style={{
                  border: `1.5px solid #e0e7ef`,
                  boxShadow: `0 6px 32px 0 #60a5fa22, inset 0 1.5px 8px 0 #e0e7ef`,
                  outline: 'none',
                  animationDelay: '0s',
                }}
                tabIndex={0}
                aria-label={`View job: ${job.title} at ${job.company}`}
              >
                {/* Featured badge */}
                <span className="absolute -top-3 left-4 z-10 px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold rounded-full shadow-lg tracking-wide animate-badge-pop">
                  Featured
                </span>
                <div className="flex items-center gap-3 mb-3">
                  <img src={job.company_logo} alt={job.company} className="w-12 h-12 object-contain rounded-xl bg-white shadow group-hover:scale-110 transition-all duration-300" />
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-gray-900 group-hover:text-blue-700 transition-all duration-300">{job.title}</span>
                    <span className="text-sm text-gray-500">{job.company}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-2 truncate w-full">{job.location} • {job.job_type} • {job.work_mode}</div>
                <div className="text-sm text-blue-600 font-semibold mb-4">{job.salary}</div>
                <div className="flex-1 text-xs text-gray-500 mb-4 line-clamp-2">{job.description}</div>
                <button
                  className="mt-auto px-4 py-2 bg-blue-600 text-white font-bold rounded-full shadow hover:scale-105 transition text-xs flex items-center gap-2 group/button"
                  style={{ background: color }}
                  onMouseEnter={e => (e.currentTarget.style.background = color)}
                  onMouseLeave={e => (e.currentTarget.style.background = color) }
                >
                  View <FaArrowRight className="ml-1 w-3 h-3 group-hover/button:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <button
            className="p-2 bg-white/80 rounded-full shadow hover:bg-blue-100 transition"
            onClick={() => goTo(current + cardsToShow)}
            aria-label="Next jobs"
          >
            <FaArrowRight className="w-5 h-5 text-blue-600" />
          </button>
        </div>
      </div>
      <button
        className="mt-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition text-base flex items-center gap-2"
        onClick={onViewAll}
      >
        View All Jobs <FaArrowRight className="ml-1 w-4 h-4" />
      </button>
      <style jsx>{`
        @keyframes job-fadein {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: none; }
        }
        .animate-job-fadein {
          animation: job-fadein 0.7s cubic-bezier(.4,2,.6,1) both;
        }
        @keyframes job-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px) scale(1.03); }
        }
        .animate-job-float {
          animation: job-float 3.2s ease-in-out infinite;
        }
        @keyframes badge-pop {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-badge-pop {
          animation: badge-pop 0.7s cubic-bezier(.4,2,.6,1) both;
        }
      `}</style>
    </section>
  );
} 