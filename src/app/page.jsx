import Hero from "@/components/home/Hero";
import PopularCategories from "@/components/home/PopularCategories";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CustomerReviews from "@/components/home/CustomerReviews";
import FaqSection from "@/components/home/FaqSection";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <PopularCategories />
      <FeaturedRecipes />
      <WhyChooseUs />
      <CustomerReviews />
      <FaqSection />
      <Newsletter />
    </main>
  );
}
