'use client'
import JobBoard from "@/components/job-board/JobBoard";
import { useSearchParams } from "next/navigation";
import { Filters } from "@/lib/types";

export default function JobsPage() {
  const searchParams = useSearchParams();
  const initialFilters: Filters = {};
  const title = searchParams.get('title');
  const location = searchParams.get('location');
  const company = searchParams.get('company');
  if (title) initialFilters.title = [title];
  if (location) initialFilters.location = [location];
  if (company) initialFilters.company = [company];
  return <JobBoard initialFilters={initialFilters} />;
} 
