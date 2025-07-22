'use client';

import { useState, useEffect } from "react";
import { Job, Filters } from "@/lib/types";
import { dummyJobs } from "@/lib/dummy-jobs";
import JobPostings from "./JobPostings";
import CardSkeleton from "./CardSkeleton";
import { IoCloseOutline } from "react-icons/io5";
import { Filter, ChevronDown } from "lucide-react";

interface CenterContentProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export default function CenterContent({ filters, setFilters }: CenterContentProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("Recommended");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleRemoveFilter = (category: keyof Filters, value: string) => {
    setFilters(prev => {
      const newValues = (prev[category] || []).filter(v => v !== value);
      const newFilters = { ...prev };
      if (newValues.length > 0) {
        newFilters[category] = newValues;
      } else {
        delete newFilters[category];
      }
      return newFilters;
    });
  };

  const filteredJobs = dummyJobs.filter(job => {
    return Object.entries(filters).every(([key, values]) => {
      if (!values || values.length === 0) return true;
      const jobValue = job[key as keyof Job];
      return values.includes(jobValue as string);
    });
  });

  return (
    <div className="flex flex-col bg-[#e9ecef] h-full w-full rounded-3xl overflow-y-auto md:px-2 lg:px-3">
      <div className="sticky top-0 z-10 mb-4 w-full bg-[#e9ecef] rounded-t-xl px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap gap-2 items-center">
            {Object.entries(filters).flatMap(([category, values]) =>
              (values || []).map(value => (
                <button
                  key={`${category}-${value}`}
                  onClick={() => handleRemoveFilter(category as keyof Filters, value)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full font-medium text-gray-700 hover:bg-gray-100 shadow-sm transition-all text-sm"
                >
                  <span>{value}</span>
                  <IoCloseOutline className="w-4 h-4" />
                </button>
              ))
            )}
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full font-medium text-blue-600 hover:bg-gray-50 shadow-sm border border-blue-200 transition-all text-sm">
              <Filter size={16} />
              <span>Filters</span>
            </button>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full font-medium text-gray-700 hover:bg-gray-100 transition-all shadow-sm text-sm"
            >
              <span>{sortOption}</span>
              <ChevronDown size={16} className={`transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
            </button>
            {showSortDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 border border-gray-100">
                {['Recommended', 'Most Recent'].map(option => (
                  <div key={option} onClick={() => { setSortOption(option); setShowSortDropdown(false); }}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-50 ${sortOption === option ? 'font-semibold text-blue-600' : ''}`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-2">
        {isLoading ? <CardSkeleton /> : <JobPostings jobs={filteredJobs} />}
      </div>
    </div>
  );
} 