'use client';

import { useState, useEffect } from "react";
import { Job, Filters } from "@/lib/types";
import { dummyJobs } from "@/lib/dummy-jobs";
import JobPostings from "./JobPostings";
import CardSkeleton from "./CardSkeleton";
import { IoCloseOutline } from "react-icons/io5";
import { Filter } from "lucide-react";

interface CenterContentProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export default function CenterContent({ filters, setFilters }: CenterContentProps) {
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="flex flex-col bg-[#e9ecef] dark:bg-background text-gray-900 dark:text-foreground h-full w-full rounded-3xl overflow-y-auto md:px-2 lg:px-3 scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className="sticky top-0 z-10 mb-4 w-full bg-[#e9ecef] dark:bg-background rounded-t-xl px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap gap-2 items-center">
            {Object.entries(filters).flatMap(([category, values]) =>
              (values || []).map(value => (
                <button
                  key={`${category}-${value}`}
                  onClick={() => handleRemoveFilter(category as keyof Filters, value)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-card text-blue-700 dark:text-foreground rounded-full font-medium hover:bg-blue-50 dark:hover:bg-muted shadow-sm transition-all text-sm border border-blue-200 dark:border-border"
                >
                  <span>{value}</span>
                  <IoCloseOutline className="w-4 h-4" />
                </button>
              ))
            )}
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-card text-blue-600 dark:text-primary rounded-full font-medium hover:bg-blue-50 dark:hover:bg-muted shadow-sm border border-blue-200 dark:border-border transition-all text-sm">
              <Filter size={16} />
              <span>Applied Filters</span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-2">
        {isLoading ? <CardSkeleton /> : <JobPostings jobs={filteredJobs} />}
      </div>
      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
} 