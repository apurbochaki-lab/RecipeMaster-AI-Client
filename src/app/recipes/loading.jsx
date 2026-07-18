export default function Loading() {
    return (
        <div className="min-h-screen bg-[#FFF8F0] pt-20 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Heading Skeleton */}
                <div className="flex flex-col items-center justify-center mb-12 animate-pulse">
                    <div className="h-12 w-64 md:w-96 bg-[#E5E7EB] rounded-lg mb-4"></div>
                    <div className="h-6 w-3/4 md:w-1/2 bg-[#E5E7EB] rounded-lg mb-6"></div>
                    <div className="h-10 w-48 bg-[#E5E7EB] rounded-full"></div>
                </div>

                {/* Filters Skeleton */}
                <div className="flex flex-wrap justify-center gap-4 mb-12 animate-pulse">
                    <div className="h-12 w-full sm:w-64 bg-white border border-[#E5E7EB] rounded-xl"></div>
                    <div className="h-12 w-full sm:w-48 bg-white border border-[#E5E7EB] rounded-xl"></div>
                    <div className="h-12 w-full sm:w-48 bg-white border border-[#E5E7EB] rounded-xl"></div>
                </div>

                {/* Grid Skeleton */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="bg-white rounded-2xl border border-[#E5E7EB] h-96 flex flex-col overflow-hidden animate-pulse">
                            <div className="h-56 w-full bg-[#E5E7EB]"></div>
                            <div className="p-5 flex flex-col flex-grow">
                                <div className="h-6 w-3/4 bg-[#E5E7EB] rounded mb-3"></div>
                                <div className="h-4 w-full bg-[#E5E7EB] rounded mb-2"></div>
                                <div className="h-4 w-5/6 bg-[#E5E7EB] rounded mb-5"></div>
                                <div className="mt-auto h-10 w-full bg-[#E5E7EB] rounded-xl"></div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
}
