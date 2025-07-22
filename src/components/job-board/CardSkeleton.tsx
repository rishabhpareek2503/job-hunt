export default function CardSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-white w-full rounded-xl p-4 border border-gray-200 animate-pulse">
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 flex-shrink-0 bg-gray-200 rounded-md"></div>
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                  <div className="h-8 w-8 bg-gray-200 rounded-full ml-2"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-2 gap-x-4 my-4">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>

              <hr className="my-3" />

              <div className="flex items-center justify-between">
                <div className="h-6 w-24 bg-gray-200 rounded"></div>
                <div className="h-10 w-32 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 