"use client";
import React, { useState, useLayoutEffect, useEffect } from "react";
import { dummyJobs } from "../lib/dummy-jobs";
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { IoCloseOutline, IoArrowForward, IoLocationOutline } from "react-icons/io5";
import { FaBriefcase, FaBuilding } from "react-icons/fa";
import Image from "next/image";

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

export default function FeaturedJobsSection({ onViewAll }: { onViewAll: () => void }) {
  const jobs = dummyJobs;
  const [cardsToShow, setCardsToShow] = useState(3); // Always start with 3 for SSR
  const [current, setCurrent] = useState(0);
  useLayoutEffect(() => {
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

  const router = useRouter();
  // Search bar state
  const [titleInput, setTitleInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [companyInput, setCompanyInput] = useState("");
  const [showTitleDropdown, setShowTitleDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const titleRef = React.useRef<HTMLDivElement>(null);
  const locationRef = React.useRef<HTMLDivElement>(null);
  const companyRef = React.useRef<HTMLDivElement>(null);

  // Extract unique values
  const allTitles = Array.from(new Set(dummyJobs.map(job => job.title))).sort();
  const allLocations = Array.from(new Set(dummyJobs.map(job => job.location))).sort();
  const allCompanies = Array.from(new Set(dummyJobs.map(job => job.company))).sort();

  // Dropdown filtering
  const filteredTitles = allTitles.filter(title => title.toLowerCase().includes(titleInput.toLowerCase()));
  const filteredLocations = allLocations.filter(loc => loc.toLowerCase().includes(locationInput.toLowerCase()));
  const filteredCompanies = allCompanies.filter(comp => comp.toLowerCase().includes(companyInput.toLowerCase()));

  // Click outside logic
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (titleRef.current && !titleRef.current.contains(e.target as Node)) setShowTitleDropdown(false);
      if (locationRef.current && !locationRef.current.contains(e.target as Node)) setShowLocationDropdown(false);
      if (companyRef.current && !companyRef.current.contains(e.target as Node)) setShowCompanyDropdown(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Handle submit
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (selectedTitle) params.append("title", selectedTitle);
    if (selectedLocation) params.append("location", selectedLocation);
    if (selectedCompany) params.append("company", selectedCompany);
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <section className="relative w-full flex flex-col items-center py-16 px-4 bg-gradient-to-b from-blue-50/60 to-white dark:from-background/90 dark:to-background overflow-x-hidden">
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
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-foreground text-center mb-3 flex items-center justify-center gap-2">
        <FaStar className="text-yellow-400 w-5 h-5" />
        <span className="text-gray-900 dark:text-foreground">Featured</span> <span className="text-blue-600 dark:text-primary">Jobs</span>
      </h2>
      <p className="text-base md:text-lg text-gray-500 dark:text-muted-foreground text-center max-w-2xl mb-8">
        Explore top opportunities handpicked for you. Apply now to get ahead in your career!
      </p>
      {/* Search Bar */}
      <div className="w-full max-w-4xl mx-auto mb-10">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:bg-white dark:sm:bg-card sm:backdrop-blur-md sm:rounded-2xl sm:shadow-lg sm:p-6 sm:border sm:border-gray-200 dark:sm:border-border relative z-40 transition-all">
          {/* Title Field */}
          <div className="relative flex-1 min-w-[120px]" ref={titleRef}>
            <input
              className="w-full pl-10 pr-3 py-2 bg-white dark:bg-background border-2 border-gray-100 dark:border-border rounded-xl text-sm focus:ring-4 focus:ring-blue-50 dark:focus:ring-primary/20 focus:border-blue-400 dark:focus:border-primary hover:border-blue-200 dark:hover:border-muted transition-all duration-300 shadow-sm placeholder:text-gray-400 dark:placeholder:text-muted-foreground"
              type="text"
              placeholder="Job Title"
              value={selectedTitle || titleInput}
              onChange={e => { setTitleInput(e.target.value); setSelectedTitle(""); setShowTitleDropdown(true); }}
              onFocus={() => setShowTitleDropdown(true)}
              readOnly={!!selectedTitle}
            />
            <FaBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-muted-foreground w-5 h-5" />
            {selectedTitle && (
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600" onClick={() => { setSelectedTitle(""); setTitleInput(""); }}><IoCloseOutline className="w-4 h-4" /></button>
            )}
            {showTitleDropdown && filteredTitles.length > 0 && !selectedTitle && (
              <div className="absolute left-0 right-0 z-50 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                {filteredTitles.map(option => (
                  <div
                    key={option}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 hover:text-blue-700 transition-colors duration-200"
                    onClick={() => { setSelectedTitle(option); setTitleInput(""); setShowTitleDropdown(false); }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Location Field */}
          <div className="relative flex-1 min-w-[120px]" ref={locationRef}>
            <input
              className="w-full pl-10 pr-3 py-2 bg-white dark:bg-background border-2 border-gray-100 dark:border-border rounded-xl text-sm focus:ring-4 focus:ring-blue-50 dark:focus:ring-primary/20 focus:border-blue-400 dark:focus:border-primary hover:border-blue-200 dark:hover:border-muted transition-all duration-300 shadow-sm placeholder:text-gray-400 dark:placeholder:text-muted-foreground"
              type="text"
              placeholder="Location"
              value={selectedLocation || locationInput}
              onChange={e => { setLocationInput(e.target.value); setSelectedLocation(""); setShowLocationDropdown(true); }}
              onFocus={() => setShowLocationDropdown(true)}
              readOnly={!!selectedLocation}
            />
            <IoLocationOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            {selectedLocation && (
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600" onClick={() => { setSelectedLocation(""); setLocationInput(""); }}><IoCloseOutline className="w-4 h-4" /></button>
            )}
            {showLocationDropdown && filteredLocations.length > 0 && !selectedLocation && (
              <div className="absolute left-0 right-0 z-50 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                {filteredLocations.map(option => (
                  <div
                    key={option}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 hover:text-blue-700 transition-colors duration-200"
                    onClick={() => { setSelectedLocation(option); setLocationInput(""); setShowLocationDropdown(false); }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Company Field */}
          <div className="relative flex-1 min-w-[120px]" ref={companyRef}>
            <input
              className="w-full pl-10 pr-3 py-2 bg-white dark:bg-background border-2 border-gray-100 dark:border-border rounded-xl text-sm focus:ring-4 focus:ring-blue-50 dark:focus:ring-primary/20 focus:border-blue-400 dark:focus:border-primary hover:border-blue-200 dark:hover:border-muted transition-all duration-300 shadow-sm placeholder:text-gray-400 dark:placeholder:text-muted-foreground"
              type="text"
              placeholder="Company"
              value={selectedCompany || companyInput}
              onChange={e => { setCompanyInput(e.target.value); setSelectedCompany(""); setShowCompanyDropdown(true); }}
              onFocus={() => setShowCompanyDropdown(true)}
              readOnly={!!selectedCompany}
            />
            <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            {selectedCompany && (
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600" onClick={() => { setSelectedCompany(""); setCompanyInput(""); }}><IoCloseOutline className="w-4 h-4" /></button>
            )}
            {showCompanyDropdown && filteredCompanies.length > 0 && !selectedCompany && (
              <div className="absolute left-0 right-0 z-50 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                {filteredCompanies.map(option => (
                  <div
                    key={option}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 hover:text-blue-700 transition-colors duration-200"
                    onClick={() => { setSelectedCompany(option); setCompanyInput(""); setShowCompanyDropdown(false); }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Arrow Button */}
          <button
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition text-lg mt-1 sm:mt-0"
            onClick={handleSearch}
            aria-label="Search"
          >
            <IoArrowForward className="w-6 h-6" />
          </button>
        </div>
      </div>
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
        <div key={cardsToShow} className={`w-full flex-1 flex flex-col md:flex-row items-center md:items-stretch ${cardsToShow === 1 ? 'gap-0' : 'gap-6 md:gap-6'} justify-center`}>
          {visibleJobs.map((job, idx) => {
            // Always render all cards, but hide extra ones on mobile with CSS
            const mobileHide = idx > 0 ? 'hidden md:block' : 'block';
            const color = brandColors[job.company] || "#2563eb";
            return (
              <div
                key={job.id}
                className={`group relative flex flex-col items-start w-full max-w-xs p-5 bg-white dark:bg-card text-gray-900 dark:text-foreground backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200 dark:border-border transition-all duration-500 cursor-pointer animate-job-float animate-job-fadein mx-auto md:mx-0 ${mobileHide}`}
                style={{
                  outline: 'none',
                  animationDelay: '0s',
                }}
                tabIndex={0}
                aria-label={`View job: ${job.title} at ${job.company}`}
              >
                {/* Featured badge */}
                <span className="absolute -top-3 left-4 z-10 px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white dark:from-primary dark:to-primary/80 dark:text-primary-foreground text-xs font-bold rounded-full shadow-lg tracking-wide animate-badge-pop">
                  Featured
                </span>
                <div className="flex items-center gap-3 mb-3">
                  <Image src={job.company_logo} alt={job.company} width={48} height={48} className="w-12 h-12 object-contain rounded-xl bg-white dark:bg-background shadow group-hover:scale-110 transition-all duration-300" />
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-blue-700 dark:text-primary group-hover:text-blue-600 dark:group-hover:text-primary/80 transition-all duration-300">{job.title}</span>
                    <span className="text-sm text-gray-700 dark:text-muted-foreground">{job.company}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 dark:text-muted-foreground mb-2 truncate w-full">{job.location} • {job.job_type} • {job.work_mode}</div>
                <div className="text-sm text-blue-600 dark:text-primary font-semibold mb-4">{job.salary}</div>
                <div className="flex-1 text-xs text-gray-500 dark:text-muted-foreground mb-4 line-clamp-2">{job.description}</div>
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