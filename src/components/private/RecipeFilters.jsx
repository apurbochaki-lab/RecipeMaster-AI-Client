"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const RecipeFilters = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [searchValue, setSearchValue] = useState(
        searchParams.get("search") || ""
    );
    // console.log("Searched Value", searchValue)

    const updateQuery = (key, value) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set("page", "1");

        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex flex-wrap gap-4 justify-center my-8">

            {/* Search */}
            <div className="relative w-full sm:w-auto">
                <input
                    type="text"
                    placeholder="Search recipe..."
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                        updateQuery("search", e.target.value);
                    }}
                    className="w-full border border-[#E5E7EB] bg-white text-[#2D2D2D] px-4 py-2.5 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent min-w-[250px] shadow-sm placeholder-[#6B7280] transition-all"
                />

                {searchValue && (
                    <button
                        type="button"
                        onClick={() => {
                            setSearchValue("");
                            updateQuery("search", "");
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500 font-bold"
                    >
                        ✕
                    </button>
                )}
            </div>

            {/* Category */}
            <select
                defaultValue={searchParams.get("category") || ""}
                onChange={(e) => updateQuery("category", e.target.value)}
                className="w-full sm:w-auto border border-[#E5E7EB] bg-white text-[#2D2D2D] px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent min-w-[180px] shadow-sm cursor-pointer transition-all"
            >
                <option value="All">All Categories</option>
                <option value="Healthy">Healthy</option>
                <option value="Bengali Food">Bengali Food</option>
                <option value="Fast Food">Fast Food</option>
                <option value="Lunch">Lunch</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
                <option value="Drinks">Drinks</option>
            </select>

            {/* Sort */}
            <select
                defaultValue={searchParams.get("sort") || ""}
                onChange={(e) => updateQuery("sort", e.target.value)}
                className="w-full sm:w-auto border border-[#E5E7EB] bg-white text-[#2D2D2D] px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent min-w-[180px] shadow-sm cursor-pointer transition-all"
            >
                <option value="">Default</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="rating">Highest Rating</option>
                <option value="cookingTime">Cooking Time</option>
            </select>
        </div>
    );
};

export default RecipeFilters;