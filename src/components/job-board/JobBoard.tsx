'use client';

import { useState } from "react";
import CenterContent from "./CenterContent";
import FilterBar from "./FilterBar";
import { Filters } from "@/lib/types";

export default function JobBoard({ initialFilters = {} }: { initialFilters?: Filters }) {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  return (
    <div className="min-h-screen h-screen w-full flex flex-col bg-[#e9ecef] p-4">
      <div className="flex-1 flex flex-col lg:flex-row gap-6 mt-0 min-h-0">
        <main className="flex-1 flex flex-col overflow-hidden min-h-0">
          <div className="h-full min-h-0 flex-1 overflow-y-auto rounded-3xl bg-[#e9ecef] scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <CenterContent filters={filters} setFilters={setFilters} />
          </div>
        </main>
        <aside className="w-full lg:w-[380px] shrink-0 h-full min-h-0">
          <div className="h-full min-h-0 overflow-y-auto rounded-2xl bg-white shadow-sm border border-gray-200 scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <FilterBar filters={filters} setFilters={setFilters} />
          </div>
        </aside>
      </div>
      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
} 