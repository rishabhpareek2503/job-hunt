'use client';

import { useEffect, useState } from "react";
import cloneDeep from "lodash.clonedeep";
import CenterContent from "./CenterContent";
import FilterBar from "./FilterBar";
import { Filters } from "@/lib/types";

export default function JobBoard({ initialFilters = {} }: { initialFilters?: Filters }) {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [pendingFilters, setPendingFilters] = useState<Filters>(cloneDeep(initialFilters));

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024); 
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (showMobileFilter) setPendingFilters(cloneDeep(filters));
  }, [showMobileFilter]);

  return (
    <div className="min-h-screen h-screen w-full flex flex-col bg-background text-foreground p-4">
      <div className="flex-1 flex flex-col lg:flex-row gap-6 mt-0 min-h-0">
        <main className="flex-1 flex flex-col overflow-hidden min-h-0">
          {isMobile && (
            <div className="sticky top-0 z-30 w-full flex justify-end bg-background pt-2 pb-2">
              <button
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold rounded-full shadow hover:bg-blue-700 transition text-base"
                onClick={() => setShowMobileFilter(true)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0013 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 017 17v-3.586a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z" /></svg>
                Filters
              </button>
            </div>
          )}
          <div className="h-full min-h-0 flex-1 overflow-y-auto rounded-3xl bg-background scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <CenterContent filters={filters} setFilters={setFilters} />
          </div>
        </main>
        {!isMobile && (
          <aside className="w-full lg:w-[380px] shrink-0 h-full min-h-0">
            <div className="h-full min-h-0 overflow-y-auto rounded-2xl bg-background shadow-sm border border-gray-200 scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <FilterBar filters={filters} setFilters={setFilters} />
            </div>
          </aside>
        )}
        {isMobile && showMobileFilter && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
            <div className="relative w-full max-w-md mx-auto bg-background rounded-t-3xl shadow-lg flex flex-col h-[90vh] mt-8">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 text-2xl font-bold"
                onClick={() => setShowMobileFilter(false)}
                aria-label="Close filter"
              >
                &times;
              </button>
              <div className="flex-1 min-h-0 overflow-y-auto px-2 pb-4">
                <FilterBar filters={pendingFilters} setFilters={setPendingFilters} />
              </div>
              <div className="w-full px-2 pb-4 bg-background">
                <button
                  className="w-full px-6 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition text-lg"
                  onClick={() => { setFilters(cloneDeep(pendingFilters)); setShowMobileFilter(false); }}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
} 