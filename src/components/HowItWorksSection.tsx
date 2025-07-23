"use client";
import React, { forwardRef } from "react";

const steps = [
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
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fff"/></svg>
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
      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fff"/></svg>
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
      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fff"/></svg>
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
      <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fff"/></svg>
    )
  },
];

const HowItWorksSection = forwardRef<HTMLDivElement>((props, ref) => (
  <section ref={ref} className="relative w-full flex flex-col items-center py-14 px-4 bg-gradient-to-b from-blue-50/70 to-white overflow-x-hidden">
    <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-3">
      Get Hired in <span className="text-blue-600">4 Quick Easy Steps</span>
    </h2>
    <p className="text-base md:text-lg text-gray-500 text-center max-w-xs sm:max-w-2xl mx-auto mb-8">
      The quickest and most effective way to get hired by the top firm working in your career interest areas.
    </p>
    <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0" style={{minHeight:'220px'}}>
      {/* Animated connector path */}
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
      {/* Step circles */}
      {steps.map((step, idx) => {
        // Use a fixed, deterministic delay array for hydration safety
        const delays = [0, 0.1, 0.2, 0.3];
        const animDelay = `${delays[idx % delays.length]}s`;
        return (
          <div
            key={step.title}
            className={`group relative flex flex-col items-center text-center bg-gradient-to-b from-white via-white to-white rounded-full shadow-xl px-6 py-8 w-52 h-52 transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl animate-fadein z-10`}
            style={{ animationDelay: animDelay }}
          >
          {/* Floating step badge */}
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white text-blue-600 font-bold rounded-full px-4 py-2 text-xs shadow-lg flex items-center gap-1 animate-badge-float">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" fill="none"/></svg>
            Step {idx + 1}
          </span>
          <div className="mb-2 flex items-center justify-center">
            <div className="bg-white rounded-full shadow p-4 flex items-center justify-center animate-pop">
              {step.icon}
            </div>
          </div>
          <div className="text-lg font-extrabold mb-1 text-gray-900 animate-fadein-delay" style={{ animationDelay: animDelay }}>{step.title}</div>
        </div>
        );
      })}
    </div>
    {/* Step descriptions below circles */}
    <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 mt-2">
      {steps.map((step, idx) => (
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
));
HowItWorksSection.displayName = "HowItWorksSection";
export default HowItWorksSection; 