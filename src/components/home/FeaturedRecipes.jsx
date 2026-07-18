import FeaturedCard from "@/components/common/FeaturedCard";

const placeholderRecipes = [
  {
    id: 1,
    title: "Grilled Salmon with Avocado Salsa",
    description: "A fresh and vibrant dish full of healthy omega-3 fats, perfect for a light summer dinner.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    category: "Dinner",
    time: "25 min",
    calories: 450,
    isHealthy: true
  },
  {
    id: 2,
    title: "Classic Margherita Pizza",
    description: "Traditional Italian pizza with fresh tomatoes, mozzarella, and basil leaves on a crispy crust.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    category: "Fast Food",
    time: "40 min",
    calories: 800,
    isHealthy: false
  },
  {
    id: 3,
    title: "Berry Quinoa Breakfast Bowl",
    description: "Start your day with a protein-packed breakfast bowl topped with fresh seasonal berries and honey.",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=600&auto=format&fit=crop",
    rating: 4.7,
    category: "Breakfast",
    time: "15 min",
    calories: 320,
    isHealthy: true
  },
  {
    id: 4,
    title: "Creamy Mushroom Risotto",
    description: "Rich, creamy Italian rice dish cooked to perfection with wild mushrooms and parmesan cheese.",
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=600&auto=format&fit=crop",
    rating: 4.6,
    category: "Lunch",
    time: "45 min",
    calories: 550,
    isHealthy: false
  }
];

export default function FeaturedRecipes() {
  return (
    <section className="py-16 md:py-24 bg-neutral-bg">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-10 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">Featured Recipes</h2>
            <p className="text-secondary-text text-lg">Hand-picked recipes created and reviewed by our top chefs and community members.</p>
          </div>
          <button className="text-primary font-medium hover:text-orange-600 transition-colors whitespace-nowrap flex items-center gap-2">
            View All Recipes
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placeholderRecipes.map(recipe => (
            <FeaturedCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}
