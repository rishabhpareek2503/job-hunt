import Image from "next/image";

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

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 p-6 flex flex-col gap-4 border border-gray-100 group cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-200">
          <Image src={job.company_logo} alt={job.company} width={56} height={56} className="object-contain" />
        </div>
        <div className="flex-1">
          <div className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{job.title}</div>
          <div className="text-sm text-gray-500">{job.company} &bull; {job.industry_type}</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 text-xs text-gray-600">
        <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">{job.job_type}</span>
        <span className="bg-green-50 text-green-700 px-2 py-1 rounded-full font-medium">{job.work_mode}</span>
        <span className="bg-gray-100 px-2 py-1 rounded-full">{job.location}</span>
        <span className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full">{job.salary}</span>
      </div>
      <div className="text-gray-700 text-sm line-clamp-3 min-h-[60px]">{job.description}</div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-gray-400">Posted: {new Date(job.posted_date).toLocaleDateString()}</span>
        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">{job.industry_type}</span>
      </div>
    </div>
  );
} 