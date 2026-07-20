import { serverFetch } from "@/lib/actions/server";
import RecipeCard from "../common/RecipeCard";
import { FeaturedCardWrapper, FeaturedGrid, FeaturedHeader } from "./FeaturedAnimations";

export default async function FeaturedRecipes() {
  const featured = await serverFetch("/api/featured-recipes");

  return (
    <section className="py-16 md:py-24 bg-neutral-bg">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FeaturedHeader />

        <FeaturedGrid>
          {featured.map((recipe) => (
            <FeaturedCardWrapper key={recipe._id}>
              <RecipeCard recipe={recipe} />
            </FeaturedCardWrapper>
          ))}
        </FeaturedGrid>
      </div>
    </section>
  );
}
