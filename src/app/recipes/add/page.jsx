import AddRecipeForm from "@/components/private/AddRecipeForm";
import { getUserSession } from "@/lib/session";

export const metadata = {
    title: "Share a Recipe | RecipeMaster",
    description: "Share your favorite recipes, cooking steps, and nutrition details with the RecipeMaster community.",
};

export default async function AddRecipe() {

    const user = await getUserSession()
    // console.log(user)

    return (
        <section className="min-h-screen bg-neutral-bg py-16 pt-25 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Eye-catching Heading Part */}
                <div className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-medium tracking-wide uppercase border border-[#FF7A00]/20">
                        🍳 Recipe Hub
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2D2D2D] tracking-tight">
                        Share Your <span className="text-[#FF7A00]">Favorite Recipe</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-base text-[#6B7280]">
                        Bring your kitchen creations to life — share ingredients, step-by-step instructions, and nutrition details with fellow food lovers.
                    </p>
                </div>

                {/* Client Recipe Form */}
                <AddRecipeForm user={user} />
            </div>
        </section>
    );
}