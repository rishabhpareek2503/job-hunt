"use client";
import React from "react";

export type Chip = { label: string; color: string };

function splitChips<T>(chipsArr: T[], numRows: number): T[][] {
  const rows: T[][] = Array.from({ length: numRows }, () => []);
  chipsArr.forEach((chip, i) => rows[i % numRows].push(chip));
  return rows;
}

export default function ChipsMarquee({ chips }: { chips: Chip[] }) {
  const chipRows = splitChips(chips, 3);
  return (
    <div className="w-full max-w-xs sm:max-w-2xl lg:max-w-7xl xl:max-w-none mx-auto flex flex-col gap-2 items-center mt-8 mb-2">
      {chipRows.map((row, rowIdx) => (
        <div
          key={"row-" + rowIdx}
          className="relative w-full flex overflow-x-hidden sm:overflow-x-hidden overflow-x-auto px-2 sm:px-0"
          style={{ height: '44px' }}
        >
          <div
            className={`flex gap-3 animate-marquee${rowIdx % 2 === 0 ? '' : '-reverse'}`}
            style={{ minWidth: 'max-content' }}
          >
            {row.map((chip, idx) => (
              <span
                key={chip.label + '-' + chip.color + '-' + idx}
                className={
                  chip.color === "purple"
                    ? "px-4 py-1.5 bg-blue-600 text-white font-semibold rounded-full text-base shadow hover:scale-105 transition"
                    : chip.color === "purple-outline"
                    ? "px-4 py-1.5 border-2 border-blue-200 text-blue-600 font-semibold rounded-full text-base bg-blue-50 hover:scale-105 transition"
                    : "px-4 py-1.5 bg-blue-100 text-blue-700 font-semibold rounded-full text-base hover:scale-105 transition"
                }
              >
                {chip.label}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {row.map((chip, idx) => (
              <span
                key={"dup-" + chip.label + '-' + chip.color + '-' + idx}
                className={
                  chip.color === "purple"
                    ? "px-4 py-1.5 bg-blue-600 text-white font-semibold rounded-full text-base shadow hover:scale-105 transition"
                    : chip.color === "purple-outline"
                    ? "px-4 py-1.5 border-2 border-blue-200 text-blue-600 font-semibold rounded-full text-base bg-blue-50 hover:scale-105 transition"
                    : "px-4 py-1.5 bg-blue-100 text-blue-700 font-semibold rounded-full text-base hover:scale-105 transition"
                }
              >
                {chip.label}
              </span>
            ))}
          </div>
          {/* Fade effect for mobile scroll */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white/90 to-transparent sm:hidden" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white/90 to-transparent sm:hidden" />
        </div>
      ))}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 22s linear infinite;
        }
      `}</style>
    </div>
  );
} 