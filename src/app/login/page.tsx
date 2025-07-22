"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    setTimeout(() => {
      router.push("/jobs");
    }, 400);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 via-sky-200 to-yellow-100 px-4">
      <div className="flex flex-col items-center gap-6">
        <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center mb-2 border-4 border-blue-200">
          <Image
            src="/logo.png"
            alt="Logo"
            width={110}
            height={110}
            className="rounded-full object-contain"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight drop-shadow-lg text-center">Joblytic</h1>
        <div className="relative w-full flex justify-center">
          <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 via-fuchsia-500 to-yellow-500 bg-clip-text text-transparent animate-pulse text-center max-w-2xl block px-2 py-2 rounded-xl shadow-lg">
            Unleash your <span className="underline decoration-wavy decoration-yellow-400">career potential</span>.<br />
            <span className="text-lg md:text-xl font-medium text-blue-900/90">Discover, apply, and get hired with the most delightful job portal experience.</span>
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-2">
          <button
            className="w-full md:w-48 px-6 py-3 bg-blue-700 text-white rounded-full font-bold text-lg shadow-lg hover:bg-blue-800 transition-all"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="w-full md:w-48 px-6 py-3 bg-white text-blue-700 border-2 border-blue-700 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 transition-all"
            onClick={handleLogin}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
} 