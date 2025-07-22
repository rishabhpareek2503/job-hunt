'use client';

import { useState } from "react";
import CenterContent from "./CenterContent";
import FilterBar from "./FilterBar";
import TopBar from "./TopBar";
import { Filters } from "@/lib/types";

export default function JobBoard() {
  const [filters, setFilters] = useState<Filters>({});

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#e9ecef] p-4">
      <TopBar />
      <div className="flex-1 flex flex-col lg:flex-row gap-6 mt-6">
        <main className="flex-1 flex flex-col overflow-y-hidden">
          <CenterContent filters={filters} setFilters={setFilters} />
        </main>
        <aside className="w-full lg:w-[380px] shrink-0">
          <FilterBar filters={filters} setFilters={setFilters} />
        </aside>
      </div>
    </div>
  );
} 