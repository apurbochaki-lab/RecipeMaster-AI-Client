import { getRecipeById } from "@/lib/api/recipes";
import RecipeDetails from "@/components/common/RecipeDetails";
import ReviewSection from "@/components/private/ReviewSection";
import { getUserSession } from "@/lib/session";
import { getRecentReviews } from "@/lib/api/reviews";
import { Button } from "@heroui/react";
import Link from "next/link";

const RecipeDetailsPage = async ({ params }) => {

    const { id: recipeId } = await params;
    const user = await getUserSession();
    const userId = user?.id;
    const recipe = await getRecipeById(recipeId, userId) || null;

    // Get recent reviews
    const recentReviews = await getRecentReviews(recipeId)

    if (!recipe) {
        return (
            <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">Recipe details not found!</h2>
                    <p className="text-[#6B7280]">The recipe you are looking for does not exist or has been removed.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FFF8F0] pt-24 pb-20">
            <RecipeDetails recipe={recipe} />

            {
                user && <div className="max-w-5xl mx-auto">
                    <ReviewSection
                        recipe={recipe}
                        user={user}
                        recentReviews={recentReviews}
                    />
                </div>
            }

            {
                !user && <div className="max-w-5xl mx-auto">
                    <h2 className="text-center font-bold text-amber-500 mb-5">Please login to review submit!</h2>
                    <Link href="/auth/login">
                        <Button variant="outline" className="mx-auto flex rounded-lg">
                            Login Now
                        </Button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default RecipeDetailsPage;