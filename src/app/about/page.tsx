"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-b from-blue-50/60 to-white px-4 pt-10 pb-16">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        <div className="mb-6">
          <Image src="/logo.png" alt="Hirinex Logo" width={72} height={72} className="rounded-full mx-auto shadow-lg" />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">About <span className="text-black">Hirinex</span></h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
        Hirinex is your trusted partner in career success. We connect talented professionals with top companies, making the job search process seamless, transparent, and rewarding. Our mission is to empower you to find your dream job and help companies discover the best talent.
        </p>
        <div className="flex flex-col md:flex-row gap-8 w-full mb-10">
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-bold text-blue-600 mb-2">Our Mission</h2>
            <p className="text-gray-500 text-base">To revolutionize the job search experience by providing a platform that is fast, fair, and focused on real results for both job seekers and employers.</p>
          </div>
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-bold text-blue-600 mb-2">Our Values</h2>
            <ul className="text-gray-500 text-base list-disc list-inside text-left">
              <li>Transparency & Trust</li>
              <li>Innovation & Growth</li>
              <li>Empowerment & Inclusion</li>
              <li>Customer-First Approach</li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-white rounded-xl shadow p-5 flex flex-col items-center">
                <Image src={`https://randomuser.me/api/portraits/men/${i+20}.jpg`} alt="Team Member" width={72} height={72} className="rounded-full mb-3 shadow" />
                <div className="font-bold text-blue-700">John Doe {i}</div>
                <div className="text-sm text-gray-500 mb-1">Role: Product Manager</div>
                <p className="text-xs text-gray-400">Passionate about building world-class products and helping people grow their careers.</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-2xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl shadow-lg p-8 flex flex-col items-center mt-8">
          <h2 className="text-2xl font-bold text-white mb-2">Join Us On Our Journey!</h2>
          <p className="text-white text-base mb-4">Whether you&apos;re a job seeker or a company looking for talent, Hirinex is here to help you succeed. Explore our platform, connect with our team, and take the next step in your journey today.</p>
          <a href="/jobs" className="px-6 py-3 bg-white text-blue-700 font-bold rounded-full shadow hover:bg-blue-100 transition text-lg">Browse Jobs</a>
        </div>
      </div>
    </section>
  );
} 