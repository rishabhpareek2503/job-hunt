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
          <p className="text-muted-foreground font-medium">No jobs found matching your criteria</p>
          <p className="text-muted-foreground text-sm mt-2">Try adjusting your filters or search terms</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white dark:bg-card w-full rounded-xl p-4 hover:shadow-2xl transition-shadow relative cursor-pointer border border-gray-200 dark:border-border backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-3">
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
                  <h3 className="text-lg font-bold text-blue-700 dark:text-primary leading-tight break-words">{job.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-foreground truncate">{job.company}</p>
                </div>
                <div className="flex items-center">
                  <button className="p-1 text-muted-foreground hover:text-primary">
                    <Bookmark size={20} />
                  </button>
                  <button className="p-1 text-muted-foreground hover:text-primary ml-2">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-2 gap-x-4 my-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><MapPin size={16} className="text-gray-400 dark:text-muted-foreground" /><span>{job.location}</span></div>
                <div className="flex items-center gap-2"><Briefcase size={16} className="text-gray-400 dark:text-muted-foreground" /><span>{job.job_type}</span></div>
                <div className="flex items-center gap-2"><IndianRupee size={16} className="text-gray-400 dark:text-muted-foreground" /><span>{job.salary}</span></div>
                <div className="flex items-center gap-2"><Timer size={16} className="text-gray-400 dark:text-muted-foreground" /><span>{job.experience_level}</span></div>
              </div>
              <hr className="my-3 border-border" />
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-muted-foreground bg-gray-100 dark:bg-muted px-2 py-1 rounded">
                  Posted: {new Date(job.posted_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
                <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 dark:text-primary-foreground dark:bg-primary rounded-full hover:bg-blue-700 dark:hover:bg-primary/80 transition">
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