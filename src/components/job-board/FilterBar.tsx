import { Dispatch, SetStateAction } from "react";

interface Job {
  id: string;
  title: string;
  company: string;
  company_logo: string;
  location: string;
  job_type: string;
  work_mode: string;
  salary: string;
  industry_type: string;
  posted_date: string;
  description: string;
}

type Filters = Partial<Record<keyof Job, string[]>>;

interface FilterBarProps {
  jobs: Job[];
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

export default function FilterBar({ jobs, filters, setFilters }: FilterBarProps) {
  // Extract unique values for each filter
  const jobTypes = Array.from(new Set(jobs.map(j => j.job_type)));
  const workModes = Array.from(new Set(jobs.map(j => j.work_mode)));
  const locations = Array.from(new Set(jobs.map(j => j.location)));
  const industries = Array.from(new Set(jobs.map(j => j.industry_type)));
  const companies = Array.from(new Set(jobs.map(j => j.company)));

  // Handlers
  const handleChange = (category: keyof Job, value: string) => {
    setFilters(prev => {
      const arr = prev[category] || [];
      return {
        ...prev,
        [category]: arr.includes(value)
          ? arr.filter(v => v !== value)
          : [...arr, value],
      };
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6 border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Filters</h2>
      <div className="flex flex-col gap-4">
        <FilterSection label="Job Type" options={jobTypes} selected={filters.job_type || []} onChange={v => handleChange('job_type', v)} />
        <FilterSection label="Work Mode" options={workModes} selected={filters.work_mode || []} onChange={v => handleChange('work_mode', v)} />
        <FilterSection label="Location" options={locations} selected={filters.location || []} onChange={v => handleChange('location', v)} />
        <FilterSection label="Industry" options={industries} selected={filters.industry_type || []} onChange={v => handleChange('industry_type', v)} />
        <FilterSection label="Company" options={companies} selected={filters.company || []} onChange={v => handleChange('company', v)} />
      </div>
      <button
        className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        onClick={() => setFilters({})}
      >
        Reset Filters
      </button>
    </div>
  );
}

interface FilterSectionProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (value: string) => void;
}

function FilterSection({ label, options, selected, onChange }: FilterSectionProps) {
  return (
    <div>
      <div className="font-semibold text-gray-700 mb-1">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            className={`px-3 py-1 rounded-full border text-sm transition-all ${selected.includes(option) ? 'bg-blue-100 border-blue-400 text-blue-700 font-semibold' : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-blue-50'}`}
            onClick={e => { e.preventDefault(); onChange(option); }}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
} 