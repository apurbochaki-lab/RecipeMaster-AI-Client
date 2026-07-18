import PaginationControls from "@/components/common/PaginationControls";
import RecipeFilters from "@/components/private/RecipeFilters";
import RecipeCard from "@/components/common/RecipeCard";
import { getRecipes } from "@/lib/api/recipes";

const AllRecipesPage = async ({ searchParams }) => {
    const params = await searchParams;

    const page = params.page || 1;
    const search = params.search || "";
    const category = params.category || "";
    const sort = params.sort || "";

    // Fetch data from server
    const data = await getRecipes(page, search, category, sort) || {};
    // console.log(data)

    const recipes = data?.data;
    const currentPage = data?.currentPage;
    const totalPages = data?.totalPages;
    const totalData = data?.totalItems;

    // No data found fallback
    if (!recipes || recipes.length === 0) {
        return (
            <div className="min-h-screen bg-[#FFF8F0] pt-30 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <RecipeFilters />
                    <div className="text-center font-bold text-[#2D2D2D] mt-10 text-xl">
                        No recipes found matching your criteria.
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#FFF8F0] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Heading Part */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#2D2D2D] mb-4">
                        Discover Our <span className="text-[#FF7A00]">Delicious Recipes</span>
                    </h1>
                    <p className="text-[#6B7280] max-w-2xl mx-auto mb-6 text-lg">
                        Explore our collection of mouth-watering dishes. From quick meals to gourmet delights, find the perfect recipe for any occasion.
                    </p>
                    <div className="inline-block bg-white px-6 py-2 rounded-full border border-[#E5E7EB] shadow-sm">
                        <span className="font-semibold text-[#4CAF50] text-sm">
                            {totalData} Recipes Available
                        </span>
                    </div>
                </div>

                {/* Search & Filters */}
                <RecipeFilters />

                {/* Recipe Card Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe._id} recipe={recipe} />
                    ))}
                </div>

                <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                />

            </div>
        </div>
    );
};

export default AllRecipesPage;