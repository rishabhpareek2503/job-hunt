'use client';

import { useState } from "react";
import { Job, Filters } from "@/lib/types";
import { dummyJobs } from "@/lib/dummy-jobs";
import { IoFilterOutline, IoRefreshOutline, IoChevronDownOutline } from "react-icons/io5";

interface FilterBarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

interface CollapsibleSectionProps {
  title: string;
  section: string;
  openSection: string;
  setOpenSection: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
}

interface FilterSectionProps {
  title: string;
  options: string[];
  selected: string[];
  onChange: (value: string) => void;
}

export default function FilterBar({ filters, setFilters }: FilterBarProps) {
  const [openSection, setOpenSection] = useState<string>("basic");
  const getUniqueValues = (key: keyof Job) => Array.from(new Set(dummyJobs.map(job => job[key]))).filter(Boolean) as string[];

  const filterOptions = {
    job_type: getUniqueValues('job_type'),
    work_mode: getUniqueValues('work_mode'),
    location: getUniqueValues('location'),
    experience_level: getUniqueValues('experience_level'),
    company: getUniqueValues('company'),
  };

  const handleFilterChange = (category: keyof Filters, value: string) => {
    setFilters(prev => {
      const currentValues = prev[category] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v: string) => v !== value)
        : [...currentValues, value];
      const newFilters = { ...prev };
      if (newValues.length > 0) newFilters[category] = newValues;
      else delete newFilters[category];
      return newFilters;
    });
  };

  return (
    <aside className="h-full w-full p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between border-b-2 border-gray-100 pb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-blue-50 rounded-xl"><IoFilterOutline className="w-6 h-6 text-blue-600" /></div>
          <h5 className="text-xl text-gray-900 font-semibold">Filters</h5>
        </div>
        <button onClick={() => setFilters({})} className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
          <IoRefreshOutline className="w-4 h-4" /> Reset all
        </button>
      </div>

      <div className="overflow-y-auto space-y-7 mt-7 pr-2">
        <CollapsibleSection title="Basic Criteria" section="basic" openSection={openSection} setOpenSection={setOpenSection}>
          <FilterSection title="Job Type" options={filterOptions.job_type} selected={filters.job_type || []} onChange={v => handleFilterChange('job_type', v)} />
          <FilterSection title="Work Mode" options={filterOptions.work_mode} selected={filters.work_mode || []} onChange={v => handleFilterChange('work_mode', v)} />
          <FilterSection title="Location" options={filterOptions.location} selected={filters.location || []} onChange={v => handleFilterChange('location', v)} />
          <FilterSection title="Experience Level" options={filterOptions.experience_level} selected={filters.experience_level || []} onChange={v => handleFilterChange('experience_level', v)} />
        </CollapsibleSection>
        <CollapsibleSection title="Company" section="company" openSection={openSection} setOpenSection={setOpenSection}>
          <FilterSection title="Company" options={filterOptions.company} selected={filters.company || []} onChange={v => handleFilterChange('company', v)} />
        </CollapsibleSection>
      </div>
    </aside>
  );
}

function CollapsibleSection({ title, section, openSection, setOpenSection, children }: CollapsibleSectionProps) {
  const isOpen = openSection === section;
  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer p-4 rounded-lg"
        onClick={() => setOpenSection(isOpen ? "" : section)}
      >
        <h1 className="font-semibold text-lg">{title}</h1>
        <IoChevronDownOutline className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>
      {isOpen && <div className="space-y-6 mt-4">{children}</div>}
    </div>
  );
}

function FilterSection({ title, options, selected, onChange }: FilterSectionProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h6 className="text-sm font-semibold text-gray-800 mb-4">{title}</h6>
      <div className="grid grid-cols-1 gap-3">
        {options.map((option: string) => (
          <label key={option} className="flex items-center p-3 rounded-xl cursor-pointer hover:bg-blue-50">
            <input type="checkbox" checked={selected.includes(option)} onChange={() => onChange(option)}
              className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300"
            />
            <span className="ml-3 text-sm font-medium">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
} 