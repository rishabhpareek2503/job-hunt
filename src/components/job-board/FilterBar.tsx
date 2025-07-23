'use client';

import { useState, useRef, useEffect } from "react";
import { Filters } from "@/lib/types";
import { dummyJobs } from "@/lib/dummy-jobs";
import { IoFilterOutline, IoRefreshOutline, IoChevronDownOutline, IoSearchOutline, IoCloseOutline } from "react-icons/io5";

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
  const [titleInput, setTitleInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [showTitleDropdown, setShowTitleDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  // Extract unique values
  const allTitles = Array.from(new Set(dummyJobs.map(job => job.title))).sort();
  const allLocations = Array.from(new Set(dummyJobs.map(job => job.location))).sort();
  const filterOptions = {
    job_type: Array.from(new Set(dummyJobs.map(job => job.job_type))).filter(Boolean) as string[],
    work_mode: Array.from(new Set(dummyJobs.map(job => job.work_mode))).filter(Boolean) as string[],
    experience_level: Array.from(new Set(dummyJobs.map(job => job.experience_level))).filter(Boolean) as string[],
    company: Array.from(new Set(dummyJobs.map(job => job.company))).filter(Boolean) as string[],
  };

  // Dropdown filtering
  const filteredTitles = allTitles.filter(title => title.toLowerCase().includes(titleInput.toLowerCase()) && !(filters.title || []).includes(title));
  const filteredLocations = allLocations.filter(loc => loc.toLowerCase().includes(locationInput.toLowerCase()) && !(filters.location || []).includes(loc));

  // Handle click outside for dropdowns
  function useClickOutside(ref: React.RefObject<HTMLDivElement | null>, handler: () => void) {
    useEffect(() => {
      function listener(event: MouseEvent) {
        if (!ref.current || ref.current.contains(event.target as Node)) return;
        handler();
      }
      document.addEventListener("mousedown", listener);
      return () => document.removeEventListener("mousedown", listener);
    }, [ref, handler]);
  }
  useClickOutside(titleRef, () => setShowTitleDropdown(false));
  useClickOutside(locationRef, () => setShowLocationDropdown(false));

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

  // Add title/location from dropdown
  const handleAddTitle = (title: string) => {
    handleFilterChange('title', title);
    setTitleInput("");
    setShowTitleDropdown(false);
  };
  const handleAddLocation = (loc: string) => {
    handleFilterChange('location', loc);
    setLocationInput("");
    setShowLocationDropdown(false);
  };

  // Remove chip
  const handleRemoveChip = (category: keyof Filters, value: string) => {
    handleFilterChange(category, value);
  };

  return (
    <aside className="h-full w-full p-6 bg-white dark:bg-card border border-gray-200 dark:border-border">
      <div className="flex items-center justify-between border-b-2 border-gray-100 dark:border-border pb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-blue-50 dark:bg-muted rounded-xl"><IoFilterOutline className="w-6 h-6 text-blue-600 dark:text-primary" /></div>
          <h5 className="text-xl text-gray-900 dark:text-foreground font-semibold">Filters</h5>
        </div>
        <button onClick={() => setFilters({})} className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 dark:text-primary dark:hover:bg-muted rounded-xl transition-all">
          <IoRefreshOutline className="w-4 h-4" /> Reset all
        </button>
      </div>

      <div className="overflow-y-auto space-y-7 mt-7 pr-2">
        <CollapsibleSection title="Basic Criteria" section="basic" openSection={openSection} setOpenSection={setOpenSection}>
          {/* Title Search */}
          <div className="mb-4" ref={titleRef}>
            <label className="block text-sm font-semibold text-gray-800 dark:text-foreground mb-2 flex items-center gap-1.5">Job Title</label>
            <div className="relative">
              <input
                className="w-full pl-10 pr-3 py-2 bg-white dark:bg-background border-2 border-gray-100 dark:border-border rounded-xl text-sm focus:ring-4 focus:ring-blue-50 dark:focus:ring-primary/20 focus:border-blue-400 dark:focus:border-primary hover:border-blue-200 dark:hover:border-muted transition-all duration-300 shadow-sm placeholder:text-gray-400 dark:placeholder:text-muted-foreground"
                type="text"
                placeholder="Search job titles"
                value={titleInput}
                onChange={e => { setTitleInput(e.target.value); setShowTitleDropdown(true); }}
                onFocus={() => setShowTitleDropdown(true)}
              />
              <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-muted-foreground w-5 h-5" />
              {showTitleDropdown && filteredTitles.length > 0 && (
                <div className="absolute left-0 right-0 z-50 mt-2 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl shadow-lg max-h-60 overflow-y-auto">
                  {filteredTitles.map(option => (
                    <div
                      key={option}
                      className="px-4 py-3 hover:bg-blue-50 dark:hover:bg-muted cursor-pointer text-sm text-gray-700 dark:text-foreground hover:text-blue-700 dark:hover:text-primary transition-colors duration-200"
                      onClick={() => handleAddTitle(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Chips */}
            <div className="mt-2 flex flex-wrap gap-2">
              {(filters.title || []).map((value: string) => (
                <span key={value} className="flex items-center gap-1 bg-blue-100 dark:bg-primary/10 text-blue-800 dark:text-primary text-sm font-medium px-2.5 py-1 rounded-full">
                  {value}
                  <button onClick={() => handleRemoveChip('title', value)} className="text-blue-600 dark:text-primary hover:text-blue-800 dark:hover:text-primary/80"><IoCloseOutline className="w-4 h-4" /></button>
                </span>
              ))}
            </div>
          </div>
          {/* Location Search */}
          <div className="mb-4" ref={locationRef}>
            <label className="block text-sm font-semibold text-gray-800 dark:text-foreground mb-2 flex items-center gap-1.5">Location</label>
            <div className="relative">
              <input
                className="w-full pl-10 pr-3 py-2 bg-white dark:bg-background border-2 border-gray-100 dark:border-border rounded-xl text-sm focus:ring-4 focus:ring-blue-50 dark:focus:ring-primary/20 focus:border-blue-400 dark:focus:border-primary hover:border-blue-200 dark:hover:border-muted transition-all duration-300 shadow-sm placeholder:text-gray-400 dark:placeholder:text-muted-foreground"
                type="text"
                placeholder="Search locations"
                value={locationInput}
                onChange={e => { setLocationInput(e.target.value); setShowLocationDropdown(true); }}
                onFocus={() => setShowLocationDropdown(true)}
              />
              <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-muted-foreground w-5 h-5" />
              {showLocationDropdown && filteredLocations.length > 0 && (
                <div className="absolute left-0 right-0 z-50 mt-2 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl shadow-lg max-h-60 overflow-y-auto">
                  {filteredLocations.map(option => (
                    <div
                      key={option}
                      className="px-4 py-3 hover:bg-blue-50 dark:hover:bg-muted cursor-pointer text-sm text-gray-700 dark:text-foreground hover:text-blue-700 dark:hover:text-primary transition-colors duration-200"
                      onClick={() => handleAddLocation(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Chips */}
            <div className="mt-2 flex flex-wrap gap-2">
              {(filters.location || []).map((value: string) => (
                <span key={value} className="flex items-center gap-1 bg-blue-100 dark:bg-primary/10 text-blue-800 dark:text-primary text-sm font-medium px-2.5 py-1 rounded-full">
                  {value}
                  <button onClick={() => handleRemoveChip('location', value)} className="text-blue-600 dark:text-primary hover:text-blue-800 dark:hover:text-primary/80"><IoCloseOutline className="w-4 h-4" /></button>
                </span>
              ))}
            </div>
          </div>
          <FilterSection title="Job Type" options={filterOptions.job_type} selected={filters.job_type || []} onChange={v => handleFilterChange('job_type', v)} />
          <FilterSection title="Work Mode" options={filterOptions.work_mode} selected={filters.work_mode || []} onChange={v => handleFilterChange('work_mode', v)} />
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
    <div className="bg-white dark:bg-card p-6 rounded-xl shadow-lg border border-gray-200 dark:border-border backdrop-blur-md transition-all">
      <h6 className="text-sm font-semibold text-gray-900 dark:text-foreground mb-4">{title}</h6>
      <div className="grid grid-cols-1 gap-3">
        {options.map((option: string) => (
          <label key={option} className="flex items-center p-3 rounded-xl cursor-pointer hover:bg-blue-50 dark:hover:bg-muted transition-all">
            <input type="checkbox" checked={selected.includes(option)} onChange={() => onChange(option)}
              className="form-checkbox h-4 w-4 text-blue-600 dark:text-primary rounded border-gray-300 dark:border-border focus:ring-2 focus:ring-blue-600 dark:focus:ring-primary"
            />
            <span className="ml-3 text-sm font-medium text-gray-700 dark:text-muted-foreground">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
} 