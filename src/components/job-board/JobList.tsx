import JobCard from "./JobCard";

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

export default function JobList({ jobs }: { jobs: Job[] }) {
  if (!jobs.length) {
    return <div className="text-center text-gray-400 py-20 text-lg">No jobs found matching your filters.</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
} 