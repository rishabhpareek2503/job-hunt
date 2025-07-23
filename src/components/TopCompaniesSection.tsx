"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import Image from "next/image";

export type Company = {
  name: string;
  logoUrl: string;
  brandColor?: string;
};

const rowOffsets = [0, 16, 32, 16, 0, 32]; // px for staggered effect

// Brand color map for world-class hover effect
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

export default function TopCompaniesSection({ companies }: { companies: Company[] }) {
  // Use a fixed, deterministic array of delays for hydration safety
  const delays = React.useMemo(() =>
    companies.map((_, idx) => (0.2 + (idx % 6) * 0.13).toFixed(2)),
    [companies.length]
  );
  return (
    <section className="relative w-full flex flex-col items-center py-16 px-4 bg-gradient-to-b from-white to-blue-50 overflow-x-hidden">
      {/* Animated background shape */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="companyBg" cx="50%" cy="40%" r="80%" fx="50%" fy="40%" gradientTransform="rotate(10)">
              <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.2" />
            </radialGradient>
          </defs>
          <rect width="1440" height="320" fill="url(#companyBg)" />
        </svg>
      </div>
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-3 flex items-center justify-center gap-2">
        <FaBuilding className="text-blue-500 w-5 h-5" />
        <span className="text-black">Top Companies</span> <span className="text-blue-600">Hiring Now</span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-500 text-center max-w-xs sm:max-w-2xl mx-auto mb-8">
        Get hired by the world’s best. Explore opportunities at these leading organizations.
      </p>
      <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-6 place-items-center mb-8 md:mb-4">
        {companies.map((company, idx) => {
          const color = brandColors[company.name] || "#2563eb";
          return (
            <div
              key={company.name}
              className="group flex flex-col items-center justify-center p-4 bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer animate-company-float"
              style={{
                animationDelay: `${delays[idx]}s`,
                marginTop: rowOffsets[idx % rowOffsets.length],
                marginBottom: rowOffsets[(rowOffsets.length - idx) % rowOffsets.length],
                boxShadow: '0 6px 32px 0 #60a5fa22',
                border: `1.5px solid #e0e7ef`,
                outline: 'none',
              }}
              aria-label={`View jobs at ${company.name}`}
              tabIndex={0}
            >
              <div className="relative flex items-center justify-center w-20 h-20">
                <Image
                  src={company.logoUrl}
                  alt={company.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain rounded-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300"
                  loading="lazy"
                  style={{
                    boxShadow: '0 2px 12px 0 #e0e7ef',
                    borderRadius: 12,
                  }}
                />
                {/* Brand color ring on hover */}
                <span
                  className="absolute inset-0 rounded-xl pointer-events-none transition-all duration-300 group-hover:ring-4 group-hover:ring-opacity-60"
                  style={{
                    boxShadow: `inset 0 1.5px 8px 0 #e0e7ef${!color ? '' : `, 0 0 0 6px ${color}55`}`,
                    borderRadius: 12,
                    border: `2px solid #f3f4f6`,
                    transition: 'box-shadow 0.3s, border 0.3s',
                  }}
                />
                <span
                  className="absolute -top-2 -right-2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-80 blur-sm animate-pulse"
                  style={{ background: color }}
                ></span>
              </div>
              <span className="text-base font-bold text-gray-800 text-center mt-2 group-hover:text-blue-700 transition-all duration-300">
                {company.name}
              </span>
            </div>
          );
        })}
      </div>
      <button className="mt-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition text-base flex items-center gap-2">
        See All Companies <FaArrowRight className="ml-1 w-4 h-4" />
      </button>
      <style jsx>{`
        @keyframes company-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px) scale(1.04); }
        }
        .animate-company-float {
          animation: company-float 3.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
} 