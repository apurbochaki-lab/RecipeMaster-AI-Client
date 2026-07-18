export default function Loading() {
    return (
        <div className="min-h-screen bg-[#FFF8F0] pt-28 pb-30 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Skeleton */}
                <div className="border-b border-[#E5E7EB] pb-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 animate-pulse">
                    <div>
                        <div className="h-6 w-32 bg-[#E5E7EB] rounded-full mb-4"></div>
                        <div className="h-10 w-64 md:w-96 bg-[#E5E7EB] rounded-lg mb-3"></div>
                        <div className="h-4 w-full max-w-xl bg-[#E5E7EB] rounded-lg"></div>
                    </div>

                    <div className="bg-white border border-[#E5E7EB] px-6 py-4 rounded-2xl flex flex-col items-center justify-center min-w-[160px]">
                        <div className="h-4 w-24 bg-[#E5E7EB] rounded mb-2"></div>
                        <div className="h-10 w-12 bg-[#E5E7EB] rounded"></div>
                    </div>
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="border border-[#E5E7EB] bg-white rounded-2xl h-[420px] flex flex-col overflow-hidden">
                            <div className="h-48 w-full bg-[#E5E7EB]"></div>
                            <div className="p-5 flex-grow flex flex-col space-y-3">
                                <div className="h-4 w-24 bg-[#E5E7EB] rounded"></div>
                                <div className="h-6 w-3/4 bg-[#E5E7EB] rounded"></div>
                                <div className="h-4 w-full bg-[#E5E7EB] rounded"></div>
                                <div className="h-4 w-5/6 bg-[#E5E7EB] rounded"></div>
                            </div>
                            <div className="p-5 pt-0 mt-auto">
                                <div className="h-4 w-32 bg-[#E5E7EB] rounded mb-4"></div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="h-10 w-full bg-[#E5E7EB] rounded-xl"></div>
                                    <div className="h-10 w-full bg-[#E5E7EB] rounded-xl"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
