import Image from "next/image";

const features = [
  {
    title: "AI-Powered Recommendations",
    desc: "Get personalized recipe suggestions based on your taste and dietary preferences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    )
  },
  {
    title: "Nutrition Insights",
    desc: "Track calories, macros, and health benefits for every meal you cook.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    )
  },
  {
    title: "Vibrant Community",
    desc: "Share your own recipes, review others, and connect with food lovers worldwide.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    )
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full order-2 lg:order-1 relative">
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1556910103-1c02745a872e?q=80&w=800&auto=format&fit=crop" 
                alt="Cooking together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-neutral-bg p-6 rounded-2xl shadow-xl hidden md:block border border-border-light">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  5k+
                </div>
                <div>
                  <p className="font-bold text-primary-text">Active Users</p>
                  <p className="text-sm text-secondary-text">Cooking daily</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">Why Choose RecipeMaster AI?</h2>
            <p className="text-secondary-text text-lg mb-10">
              We make cooking simple, healthy, and fun. Whether you are a beginner or a pro chef, our platform provides everything you need to create perfect meals.
            </p>
            <div className="space-y-8">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-text mb-2">{feature.title}</h3>
                    <p className="text-secondary-text">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
