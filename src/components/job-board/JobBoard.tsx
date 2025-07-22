'use client';

import { useState } from "react";
import CenterContent from "./CenterContent";
import FilterBar from "./FilterBar";
import TopBar from "./TopBar";
import { Filters } from "@/lib/types";

export default function JobBoard() {
  const [filters, setFilters] = useState<Filters>({});

  return (
    <div className="min-h-screen h-screen w-full flex flex-col bg-[#e9ecef] p-4">
      <TopBar />
      <div className="flex-1 flex flex-col lg:flex-row gap-6 mt-6 min-h-0">
        <main className="flex-1 flex flex-col overflow-hidden min-h-0">
          <div className="h-full min-h-0 flex-1 overflow-y-auto rounded-3xl bg-[#e9ecef]">
            <CenterContent filters={filters} setFilters={setFilters} />
          </div>
        </main>
        <aside className="w-full lg:w-[380px] shrink-0 h-full min-h-0">
          <div className="h-full min-h-0 overflow-y-auto rounded-2xl bg-white shadow-sm border border-gray-200">
            <FilterBar filters={filters} setFilters={setFilters} />
          </div>
        </aside>
      </div>
    </div>
  );
} 