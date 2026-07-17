import Link from "next/link";

const categories = [
  { name: "Breakfast", desc: "Start your day right", icon: "🍳" },
  { name: "Lunch", desc: "Power through your day", icon: "🥗" },
  { name: "Dinner", desc: "End with a feast", icon: "🍝" },
  { name: "Dessert", desc: "Sweet treats for you", icon: "🍰" },
  { name: "Fast Food", desc: "Quick and delicious", icon: "🍔" },
  { name: "Healthy", desc: "Nutritious and fresh", icon: "🥑" },
];

export default function PopularCategories() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">Popular Categories</h2>
          <p className="text-secondary-text text-lg">Explore a wide variety of recipes tailored to your cravings and dietary needs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <Link href={`/categories/${cat.name.toLowerCase().replace(' ', '-')}`} key={i} className="group p-6 bg-neutral-bg border border-border-light rounded-2xl hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-text mb-1 group-hover:text-primary transition-colors">{cat.name}</h3>
                <p className="text-secondary-text text-sm">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
