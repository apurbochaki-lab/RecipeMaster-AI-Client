import Image from "next/image";

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "Home Chef",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    content: "RecipeMaster AI has completely transformed my dinner routine. The personalized recommendations are always spot on, and I love the nutrition insights!",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Fitness Enthusiast",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    content: "As someone tracking macros, this app is a lifesaver. Being able to filter recipes by protein and calories makes meal prep so much easier.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Food Blogger",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    content: "The community features are amazing! I've connected with so many great cooks and discovered recipes I never would have tried otherwise.",
    rating: 4
  }
];

export default function CustomerReviews() {
  return (
    <section className="py-16 md:py-24 bg-neutral-bg">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">What Our Users Say</h2>
          <p className="text-secondary-text text-lg">Join thousands of happy cooks who have upgraded their kitchen experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-border-light relative hover:shadow-md transition-shadow">
              <div className="text-primary mb-6 flex">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={j < review.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={j < review.rating ? "text-yellow-400" : "text-gray-300"}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className="text-secondary-text italic mb-8 relative z-10">"{review.content}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image src={review.image} alt={review.name} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-text">{review.name}</h4>
                  <p className="text-sm text-secondary-text">{review.role}</p>
                </div>
              </div>
              {/* Quote icon watermark */}
              <svg className="absolute top-6 right-6 text-neutral-bg w-16 h-16 -z-0" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
