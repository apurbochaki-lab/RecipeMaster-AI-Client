export default function Loading() {
    return (
        <div className="min-h-screen bg-[#FFF8F0] pt-28 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header Skeleton */}
                <div className="flex flex-col items-center justify-center mb-10 animate-pulse">
                    <div className="h-12 w-64 md:w-80 bg-[#E5E7EB] rounded-lg mb-4"></div>
                    <div className="h-4 w-64 bg-[#E5E7EB] rounded"></div>
                </div>

                {/* Profile Card Skeleton */}
                <div className="bg-white rounded-3xl shadow-sm border border-[#E5E7EB] overflow-hidden animate-pulse">
                    {/* Cover Banner Skeleton */}
                    <div className="h-32 md:h-48 bg-[#E5E7EB]"></div>

                    <div className="px-6 md:px-12 pb-12 relative -mt-16 md:-mt-20">
                        {/* Avatar & Title Skeleton */}
                        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
                            <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-white bg-[#E5E7EB] shrink-0"></div>
                            <div className="pb-2 w-full max-w-sm">
                                <div className="h-8 w-48 md:w-64 bg-[#E5E7EB] rounded mb-3"></div>
                                <div className="h-4 w-32 bg-[#E5E7EB] rounded"></div>
                            </div>
                        </div>

                        {/* Details Grid Skeleton */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="bg-[#FFF8F0] rounded-2xl p-6 border border-[#E5E7EB] flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-[#E5E7EB] shrink-0"></div>
                                    <div className="w-full">
                                        <div className="h-3 w-24 bg-[#E5E7EB] rounded mb-2"></div>
                                        <div className="h-5 w-40 bg-[#E5E7EB] rounded"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
