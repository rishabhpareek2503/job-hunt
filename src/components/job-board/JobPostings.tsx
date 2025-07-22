'use client'
import { Job } from "@/lib/types";
import Image from "next/image";
import { Briefcase, MapPin, IndianRupee, Bookmark, MoreHorizontal, Timer} from "lucide-react";

interface JobPostingsProps {
  jobs: Job[];
}

export default function JobPostings({ jobs }: JobPostingsProps) {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-10">
        <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
          <p className="text-gray-600 font-medium">No jobs found matching your criteria</p>
          <p className="text-gray-500 text-sm mt-2">Try adjusting your filters or search terms</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white w-full rounded-xl p-4 hover:shadow-lg transition-shadow relative cursor-pointer border border-gray-200">
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 flex-shrink-0">
                    <Image
                      className="w-full h-full object-contain rounded-md"
                      src={job.company_logo}
                      alt={`${job.company} Logo`}
                      width={56}
                      height={56}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-semibold text-[#1a2b4b] leading-tight break-words">{job.title}</h2>
                    <p className="text-sm text-gray-500 truncate">{job.company}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <Bookmark size={20} />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600 ml-2">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-2 gap-x-4 my-4 text-sm text-gray-600">
                <div className="flex items-center gap-2"><MapPin size={16} className="text-gray-400" /><span>{job.location}</span></div>
                <div className="flex items-center gap-2"><Briefcase size={16} className="text-gray-400" /><span>{job.job_type}</span></div>
                <div className="flex items-center gap-2"><IndianRupee size={16} className="text-gray-400" /><span>{job.salary}</span></div>
                <div className="flex items-center gap-2"><Timer size={16} className="text-gray-400" /><span>{job.experience_level}</span></div>
              </div>

              <hr className="my-3" />

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  Posted: {new Date(job.posted_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
                <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 