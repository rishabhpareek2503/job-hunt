"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import HeroSection from "../components/HeroSection";
import ChipsMarquee from "../components/ChipsMarquee";
import HowItWorksSection from "../components/HowItWorksSection";
import TopCompaniesSection, { Company } from "../components/TopCompaniesSection";
import FeaturedJobsSection from "../components/FeaturedJobsSection";
import Footer from "../components/Footer";

export default function HomePage() {
  const router = useRouter();
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const chips = [
    { label: "Full Stack Developer", color: "default" },
    { label: "Back-end Developer", color: "purple" },
    { label: "Graphic Designer", color: "default" },
    { label: "Senior Accountant", color: "default" },
    { label: "UI Designer", color: "default" },
    { label: "Employer Branding Associate", color: "purple-outline" },
    { label: "Lead DevOps Engineer", color: "default" },
    { label: "Employer Branding Associate", color: "default" },
    { label: "Full Stack Developer", color: "purple" },
    { label: "Back-end Developer", color: "purple-outline" },
    { label: "Graphic Designer", color: "default" },
    { label: "Senior Accountant", color: "purple-outline" },
    { label: "UI Designer", color: "default" },
  ];
  const companies: Company[] = [
    { name: "Google", logoUrl: "https://img.logo.dev/google.com?token=pk_GXHi5vUDRwm1xphnJaliqA" },
    { name: "Amazon", logoUrl: "https://img.logo.dev/amazon.com?token=pk_GXHi5vUDRwm1xphnJaliqA" },
    { name: "Microsoft", logoUrl: "https://img.logo.dev/microsoft.com?token=pk_GXHi5vUDRwm1xphnJaliqA" },
    { name: "Apple", logoUrl: "https://img.logo.dev/apple.com?token=pk_GXHi5vUDRwm1xphnJaliqA" },
    { name: "Meta", logoUrl: "https://img.logo.dev/meta.com?token=pk_GXHi5vUDRwm1xphnJaliqA" },
    { name: "Netflix", logoUrl: "https://img.logo.dev/netflix.com?token=pk_GXHi5vUDRwm1xphnJaliqA" },
    { name: "LinkedIn", logoUrl: "https://img.logo.dev/linkedin.com?token=pk_GXHi5vUDRwm1xphnJaliqA" },
    { name: "Adobe", logoUrl: "https://img.logo.dev/adobe.com?token=pk_GXHi5vUDRwm1xphnJaliqA" },
    { name: "Salesforce", logoUrl: "https://img.logo.dev/salesforce.com?token=pk_GXHi5vUDRwm1xphnJaliqA" },
    { name: "IBM", logoUrl: "https://img.logo.dev/ibm.com?token=pk_GXHi5vUDRwm1xphnJaliqA" },
    { name: "Oracle", logoUrl: "https://img.logo.dev/oracle.com?token=pk_GXHi5vUDRwm1xphnJaliqA" },
    { name: "Twitter", logoUrl: "https://img.logo.dev/twitter.com?token=pk_GXHi5vUDRwm1xphnJaliqA" },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <div className="fixed top-0 right-0 z-50 gap-4 p-6 hidden md:flex">
        <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full shadow hover:bg-blue-700 transition border-2 border-blue-700">Login</button>
        <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full shadow hover:bg-blue-700 transition border-2 border-blue-700">Register</button>
      </div>
      <HeroSection
        onHowItWorksClick={() => {
          if (howItWorksRef.current) {
            howItWorksRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onBrowseJobsClick={() => router.push('/jobs')}
      >
        <ChipsMarquee chips={chips} />
      </HeroSection>
      <div className="flex md:hidden justify-center gap-4 mt-4 px-4">
        <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full shadow hover:bg-blue-700 transition border-2 border-blue-700">Login</button>
        <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full shadow hover:bg-blue-700 transition border-2 border-blue-700">Register</button>
        </div>
      <FeaturedJobsSection onViewAll={() => router.push('/jobs')} />
      <HowItWorksSection ref={howItWorksRef} />
      <TopCompaniesSection companies={companies} />
      <Footer />
    </div>
  );
}
