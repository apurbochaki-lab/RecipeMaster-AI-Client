import Hero from "@/components/home/hero-slider/Hero";
import PopularCategories from "@/components/home/PopularCategories";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CustomerReviews from "@/components/home/CustomerReviews";
import FaqSection from "@/components/home/FaqSection";
import Newsletter from "@/components/home/Newsletter";
import HeroTwo from "@/components/home/hero-slider/HeroTwo";
import HeroThree from "@/components/home/hero-slider/HeroThree";
import HeroSlider from "@/components/home/hero-slider/HeroSlider";

export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSlider />
      <PopularCategories />
      <FeaturedRecipes />
      <WhyChooseUs />
      <CustomerReviews />
      <FaqSection />
      <Newsletter />
    </main>
  );
}
