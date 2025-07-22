export interface Job {
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
  experience_level?: 'Entry-Level' | 'Mid Level' | 'Senior-Level' | 'Executive Level';
}

export type Filters = {
  job_type?: string[];
  work_mode?: string[];
  location?: string[];
  industry_type?: string[];
  company?: string[];
  experience_level?: string[];
}; 