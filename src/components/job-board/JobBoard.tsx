import { useState, useEffect } from "react";
import dummyJobs from "@/components/job-board/dummyJobs.json";
import FilterBar from "./FilterBar";
import JobList from "./JobList";

// Job type
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

export default function JobBoard() {
  const [jobs, setJobs] = useState<Job[]>(dummyJobs as Job[]);
  const [filters, setFilters] = useState<Filters>({});

  useEffect(() => {
    let filtered = dummyJobs as Job[];
    Object.entries(filters).forEach(([key, values]) => {
      if (Array.isArray(values) && values.length > 0) {
        filtered = filtered.filter(job =>
          values.some(v => String(job[key as keyof Job]).toLowerCase() === String(v).toLowerCase())
        );
      }
    });
    setJobs(filtered);
  }, [filters]);

  return (
    <div className="flex w-full h-full p-6 gap-6">
      <aside className="w-80 shrink-0">
        <FilterBar jobs={dummyJobs} filters={filters} setFilters={setFilters} />
      </aside>
      <main className="flex-1">
        <JobList jobs={jobs} />
      </main>
    </div>
  );
} 