import ManageCard from "@/components/private/ManageCard";
import { myRecipes } from "@/lib/api/myRecipes";
import { getUserSession } from "@/lib/session";
import { Utensils } from "lucide-react";

const RecipesManagePage = async () => {

    const user = await getUserSession()
    const userId = user?.id;
    const myRecipesData = await myRecipes(userId);

    return (
        <div className="min-h-screen bg-[#FFF8F0] text-[#2D2D2D] pt-28 pb-30 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Part with Premium Style */}
                <div className="border-b border-[#E5E7EB] pb-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <span className="text-xs font-bold tracking-wider uppercase text-[#FF7A00] bg-[#FF7A00]/10 px-4 py-1.5 rounded-full border border-[#FF7A00]/20">
                            Chef Dashboard
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight text-[#2D2D2D]">
                            Manage your recipes
                        </h1>
                        <p className="text-[#6B7280] text-base mt-3 max-w-xl">
                            Review, optimize, or delete your published recipes. Keep your collection fresh and up-to-date.
                        </p>
                    </div>

                    <div className="bg-white border border-[#E5E7EB] px-6 py-4 rounded-2xl flex flex-col items-center justify-center min-w-[160px] shadow-sm">
                        <span className="text-xs text-[#6B7280] uppercase font-bold flex items-center gap-1.5">
                            <Utensils size={14} className="text-[#FF7A00]" />
                            Total Recipes
                        </span>
                        <span className="text-4xl font-black text-[#4CAF50] mt-2">{myRecipesData.length}</span>
                    </div>
                </div>

                {/* Empty State vs List Component Grid */}
                {myRecipesData.length === 0 ? (
                    <div className="text-center py-20 px-4 rounded-3xl bg-white border border-[#E5E7EB] max-w-md mx-auto shadow-sm">
                        <div className="bg-[#FFF8F0] h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4 border border-[#FF7A00]/20">
                            <Utensils size={30} className="text-[#FF7A00]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">No Recipes Posted Yet</h3>
                        <p className="text-[#6B7280] text-sm mb-6 px-4">You haven&apos;t shared any culinary masterpieces. Start cooking and post one today!</p>
                    </div>
                ) : (
                    <div>
                        <ManageCard myRecipesData={myRecipesData} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecipesManagePage;