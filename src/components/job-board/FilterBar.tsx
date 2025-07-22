'use client';

export default function FilterBar() {
  return (
    <aside className="h-full w-full p-6 bg-white border border-gray-200">
      <div className="flex items-center justify-between border-b-2 border-gray-100 pb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-blue-50 rounded-xl">
            {/* Icon can be kept for visual context */}
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0h4" /></svg>
          </div>
          <h5 className="text-xl text-gray-900 font-semibold">Filters</h5>
        </div>
      </div>
      {/* Minimal content, no filters */}
      <div className="flex flex-col items-center justify-center h-full text-gray-400 text-sm mt-10">
        No filters available.
      </div>
    </aside>
  );
} 