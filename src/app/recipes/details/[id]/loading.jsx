export default function Loading() {
    return (
        <div className="min-h-screen bg-[#FFF8F0] pt-24 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Back Button Skeleton */}
                <div className="h-6 w-32 bg-[#E5E7EB] rounded mb-8 animate-pulse"></div>

                {/* Main Content Card Skeleton */}
                <div className="bg-white rounded-3xl shadow-sm border border-[#E5E7EB] overflow-hidden animate-pulse">
                    
                    {/* Header Image Section Skeleton */}
                    <div className="h-[400px] w-full bg-[#E5E7EB]"></div>

                    {/* Content Details Skeleton */}
                    <div className="p-6 md:p-10">
                        
                        {/* Author & Meta Info Skeleton */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E5E7EB]">
                            
                            {/* Author Skeleton */}
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 rounded-full bg-[#E5E7EB]"></div>
                                <div>
                                    <div className="h-4 w-20 bg-[#E5E7EB] rounded mb-2"></div>
                                    <div className="h-6 w-32 bg-[#E5E7EB] rounded mb-2"></div>
                                    <div className="h-3 w-24 bg-[#E5E7EB] rounded"></div>
                                </div>
                            </div>

                            {/* Meta Stats Skeleton */}
                            <div className="flex gap-6">
                                <div className="h-12 w-20 bg-[#E5E7EB] rounded"></div>
                                <div className="h-12 w-20 bg-[#E5E7EB] rounded"></div>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
                            
                            {/* Main Description & Steps Skeleton */}
                            <div className="lg:col-span-2 space-y-8">
                                <div className="h-8 w-48 bg-[#E5E7EB] rounded mb-4"></div>
                                <div className="space-y-2">
                                    <div className="h-4 w-full bg-[#E5E7EB] rounded"></div>
                                    <div className="h-4 w-full bg-[#E5E7EB] rounded"></div>
                                    <div className="h-4 w-3/4 bg-[#E5E7EB] rounded"></div>
                                </div>

                                <div className="h-8 w-64 bg-[#E5E7EB] rounded mb-6 mt-10"></div>
                                <div className="space-y-4">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="flex gap-4">
                                            <div className="h-10 w-10 rounded-full bg-[#E5E7EB] shrink-0"></div>
                                            <div className="h-20 w-full bg-[#E5E7EB] rounded-xl"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sidebar: Ingredients & Nutrition Skeleton */}
                            <div className="space-y-8">
                                <div className="h-48 w-full bg-[#E5E7EB] rounded-2xl"></div>
                                <div className="h-64 w-full bg-[#E5E7EB] rounded-2xl"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
