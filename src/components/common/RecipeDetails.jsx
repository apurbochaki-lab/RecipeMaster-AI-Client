"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const RecipeDetails = ({ recipe }) => {
    const router = useRouter();

    // Format date nicely
    const formattedDate = new Date(recipe.createdAt).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    return (
        <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            
            {/* Back Button */}
            <button 
                onClick={() => router.back()}
                className="flex items-center gap-2 text-[#FF7A00] hover:text-[#e06c00] font-semibold mb-8 transition-colors duration-300 group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Previous
            </button>

            {/* Main Content Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-[#E5E7EB] overflow-hidden">
                
                {/* Header Image Section */}
                <div className="relative h-[400px] w-full overflow-hidden group">
                    <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className="bg-[#4CAF50] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                                {recipe.category}
                            </span>
                            <span className="bg-[#FF7A00] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                                {recipe.cookingTime} mins
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
                            {recipe.title}
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl max-w-2xl font-medium drop-shadow-md">
                            {recipe.shortDescription}
                        </p>
                    </div>
                </div>

                {/* Content Details */}
                <div className="p-6 md:p-10">
                    
                    {/* Author & Meta Info */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E5E7EB]">
                        
                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-[#FF7A00] shadow-sm">
                                <Image 
                                    src={recipe.author?.image || "/default-avatar.png"} 
                                    alt={recipe.author?.name || "Author"}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-sm text-[#6B7280] font-medium">Recipe by</p>
                                <p className="text-lg font-bold text-[#2D2D2D]">{recipe.author?.name || "Unknown Author"}</p>
                                <p className="text-xs text-[#6B7280] mt-0.5">{formattedDate}</p>
                            </div>
                        </div>

                        {/* Meta Stats */}
                        <div className="flex flex-wrap gap-6 items-center">
                            <div className="text-center">
                                <p className="text-sm text-[#6B7280] font-medium">Rating</p>
                                <div className="flex items-center gap-1 text-[#FF7A00]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-lg font-bold text-[#2D2D2D]">{recipe.rating || "0.0"}</span>
                                </div>
                                <p className="text-xs text-[#6B7280]">({recipe.reviewCount || 0} reviews)</p>
                            </div>
                            
                            <div className="w-px h-10 bg-[#E5E7EB] hidden md:block"></div>
                            
                            <div className="text-center">
                                <p className="text-sm text-[#6B7280] font-medium">Servings</p>
                                <div className="flex items-center justify-center gap-2 text-[#2D2D2D]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="text-lg font-bold">{recipe.servings || 1} pax</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
                        
                        {/* Main Description & Steps */}
                        <div className="lg:col-span-2 space-y-8">
                            
                            {/* Description */}
                            <section>
                                <h2 className="text-2xl font-extrabold text-[#2D2D2D] mb-4">About this recipe</h2>
                                <p className="text-[#6B7280] leading-relaxed whitespace-pre-line">
                                    {recipe.description}
                                </p>
                            </section>

                            {/* Steps */}
                            <section>
                                <h2 className="text-2xl font-extrabold text-[#2D2D2D] mb-6">Cooking Instructions</h2>
                                <div className="space-y-6">
                                    {recipe.steps && Array.isArray(recipe.steps) && recipe.steps.map((step, index) => (
                                        <div key={index} className="flex gap-4 group">
                                            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#FFF8F0] text-[#FF7A00] font-bold border border-[#FF7A00]/30 shadow-sm group-hover:bg-[#FF7A00] group-hover:text-white transition-colors duration-300">
                                                {index + 1}
                                            </div>
                                            <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 flex-1 shadow-sm group-hover:border-[#FF7A00]/50 transition-colors duration-300">
                                                <p className="text-[#2D2D2D] font-medium leading-relaxed">
                                                    {step}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar: Ingredients & Nutrition */}
                        <div className="space-y-8">
                            
                            {/* Nutrition Card */}
                            <div className="bg-[#FFF8F0] rounded-2xl p-6 border border-[#FF7A00]/20 shadow-sm">
                                <h3 className="text-xl font-bold text-[#2D2D2D] mb-5 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    Nutrition Facts
                                </h3>
                                
                                {recipe.nutrition ? (
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center pb-3 border-b border-[#E5E7EB]/50">
                                            <span className="text-[#6B7280] font-medium">Calories</span>
                                            <span className="font-bold text-[#FF7A00]">{recipe.nutrition.calories} kcal</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-3 border-b border-[#E5E7EB]/50">
                                            <span className="text-[#6B7280] font-medium">Protein</span>
                                            <span className="font-bold text-[#2D2D2D]">{recipe.nutrition.protein} g</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-3 border-b border-[#E5E7EB]/50">
                                            <span className="text-[#6B7280] font-medium">Fat</span>
                                            <span className="font-bold text-[#2D2D2D]">{recipe.nutrition.fat} g</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#6B7280] font-medium">Carbs</span>
                                            <span className="font-bold text-[#2D2D2D]">{recipe.nutrition.carbs} g</span>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-sm text-[#6B7280]">Nutrition information not available.</p>
                                )}
                            </div>

                            {/* Ingredients Card */}
                            <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm">
                                <h3 className="text-xl font-bold text-[#2D2D2D] mb-5 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF7A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    Ingredients
                                </h3>
                                <ul className="space-y-3">
                                    {recipe.ingredients && typeof recipe.ingredients === 'string' 
                                        ? recipe.ingredients.split(',').map((ingredient, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <svg className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-[#2D2D2D]">{ingredient.trim()}</span>
                                            </li>
                                        ))
                                        : recipe.ingredients && Array.isArray(recipe.ingredients) 
                                            ? recipe.ingredients.map((ingredient, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <svg className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-[#2D2D2D]">{ingredient}</span>
                                                </li>
                                            ))
                                            : <li className="text-sm text-[#6B7280]">No ingredients listed.</li>
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
