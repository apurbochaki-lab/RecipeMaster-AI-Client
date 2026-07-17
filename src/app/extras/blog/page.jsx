'use client'

import Image from "next/image";

export default function BlogPage() {
  const categories = ["All Posts", "Nutrition", "Baking", "Cooking", "Meal Prep", "Guides"];

  const featuredPost = {
    title: "The Ultimate Guide to Mindful Eating & Macro Balance",
    category: "Nutrition",
    date: "July 15, 2026",
    readTime: "8 min read",
    author: "Dr. Sarah Jenkins",
    description: "Delve deep into the science of macro-nutrients and discover how structuring your daily meals can drastically improve your energy levels, cognitive performance, and overall metabolic health. Learn practical tips to build balanced plates effortlessly.",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&q=80",
  };

  const posts = [
    {
      title: "10 Nutritionist-Approved Healthy Breakfast Ideas for Busy Mornings",
      category: "Nutrition",
      date: "July 12, 2026",
      readTime: "5 min read",
      author: "Emma Watson",
      description: "Kickstart your morning with these simple, nutrient-dense breakfast recipes that take less than 15 minutes to prepare. High in fiber and lean proteins.",
      img: "https://images.unsplash.com/photo-1494390248081-4e5d1c12c293?w=800&q=80",
    },
    {
      title: "Mastering the Art of Sourdough: A Complete Step-by-Step Beginner's Guide",
      category: "Baking",
      date: "July 10, 2026",
      readTime: "12 min read",
      author: "Chef Robert Stone",
      description: "From cultivating your own wild yeast starter to mastering the stretch-and-fold technique. Get perfect oven spring and open crumb structure every single time.",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    },
    {
      title: "Quick & Easy Weeknight Dinners Ready in Under 30 Minutes",
      category: "Cooking",
      date: "July 08, 2026",
      readTime: "6 min read",
      author: "Clara Oswald",
      description: "Say goodbye to takeout. These delicious, family-friendly dinner recipes utilize pantry staples and quick-cooking techniques for stress-free evenings.",
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
    },
    {
      title: "Meal Prep 101: How to Save Hours and Eat Clean All Week Long",
      category: "Meal Prep",
      date: "July 05, 2026",
      readTime: "10 min read",
      author: "Marcus Miller",
      description: "Learn the secrets of efficient batch cooking, safe food storage practices, and smart ingredient prep that will transform your diet and schedule.",
      img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&q=80",
    },
    {
      title: "The Essential Guide to Plant-Based Proteins & Amino Acids",
      category: "Nutrition",
      date: "July 02, 2026",
      readTime: "7 min read",
      author: "Dr. Sarah Jenkins",
      description: "Are you getting complete protein sources? Discover how combining plant food elements ensures a complete profile of essential amino acids.",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    },
    {
      title: "7 Essential Knife Skills Every Home Cook Needs to Know",
      category: "Guides",
      date: "June 28, 2026",
      readTime: "9 min read",
      author: "Chef Robert Stone",
      description: "Improve your speed and safety in the kitchen. Mastering the classic julienne, dice, and chiffonade techniques will elevate your cooking immediately.",
      img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    },
  ];

  const resources = [
    { title: "Weekly Meal Planner & Grocery Checklist", type: "PDF Guide", downloadSize: "4.2 MB" },
    { title: "Macro-Nutrient & Calorie Calculator Sheet", type: "Excel Tool", downloadSize: "1.8 MB" },
    { title: "Kitchen Pantry Essentials & Expiry Tracker", type: "PDF Checklist", downloadSize: "2.5 MB" },
  ];

  return (
    <div className="py-24 bg-[#FFF8F0] min-h-screen text-[#2D2D2D]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#4CAF50] font-semibold text-sm uppercase tracking-widest px-3 py-1 bg-[#4CAF50]/10 rounded-full">
            Expert Culinary Journal
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] mt-4 mb-6 tracking-tight">
            Our Food & Nutrition Blog
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Discover a curated collection of scientifically backed nutrition guides, professional baking masterclasses, and time-saving cooking strategies.
          </p>
        </div>

        <section className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E5E7EB] mb-16 hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="relative h-64 sm:h-80 lg:h-auto lg:col-span-7">
              <Image src={featuredPost.img} alt={featuredPost.title} fill className="object-cover" priority />
            </div>
            <div className="p-8 sm:p-10 lg:p-12 lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold text-[#FF7A00] uppercase tracking-wider px-2.5 py-1 bg-[#FF7A00]/10 rounded-md">
                  {featuredPost.category}
                </span>
                <span className="text-xs text-[#6B7280]">{featuredPost.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] mb-4 hover:text-[#FF7A00] transition-colors cursor-pointer leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                {featuredPost.description}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-[#E5E7EB]">
                <div>
                  <p className="text-sm font-semibold text-[#2D2D2D]">{featuredPost.author}</p>
                  <p className="text-xs text-[#6B7280]">{featuredPost.date}</p>
                </div>
                <button className="px-5 py-2.5 bg-[#FF7A00] text-white text-sm font-semibold rounded-xl hover:bg-[#FF7A00]/90 transition-all shadow-sm">
                  Read Featured
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 pb-6 border-b border-[#E5E7EB]">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${index === 0
                  ? "bg-[#FF7A00] text-white"
                  : "bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#FF7A00] hover:text-[#FF7A00]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {posts.map((post, i) => (
            <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E5E7EB] hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="relative h-56 w-full">
                <Image src={post.img} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#FF7A00] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#6B7280]">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3 leading-snug hover:text-[#FF7A00] transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6 flex-grow">
                  {post.description}
                </p>
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <div className="text-xs">
                    <p className="font-semibold text-[#2D2D2D]">{post.author}</p>
                    <p className="text-[#6B7280]">{post.date}</p>
                  </div>
                  <button className="text-sm font-semibold text-[#FF7A00] hover:text-[#FF7A00]/80 transition-colors">
                    Read Article &rarr;
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8 bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4CAF50]"></span>
              <h3 className="text-2xl font-bold text-[#2D2D2D]">Free Downloadable Resources</h3>
            </div>
            <p className="text-sm text-[#6B7280] mb-6 leading-relaxed">
              Equip yourself with these premium downloadable tools created by our certified clinical dietitians and head culinary instructors to streamline your journey.
            </p>
            <div className="space-y-4">
              {resources.map((res, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#FFF8F0] rounded-xl border border-[#E5E7EB] hover:border-[#4CAF50] transition-colors">
                  <div className="mb-3 sm:mb-0">
                    <h4 className="font-semibold text-[#2D2D2D] text-sm sm:text-base">{res.title}</h4>
                    <span className="inline-block text-xs font-semibold text-[#4CAF50] bg-[#4CAF50]/10 px-2 py-0.5 rounded mt-1">
                      {res.type}
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-[#4CAF50] text-white text-xs font-bold rounded-lg hover:bg-[#4CAF50]/90 transition-all self-start sm:self-center">
                    Get Resource ({res.downloadSize})
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#FF7A00] rounded-2xl p-8 text-white flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-36 h-36 bg-white/10 rounded-full blur-2xl"></div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full inline-block mb-4">
                Weekly Newsletter
              </span>
              <h3 className="text-2xl font-bold mb-3 leading-tight">Get Healthy Recipes Delivered to Your Inbox</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Join our community of over 15,000 food lovers. No spam, just pure value, nutrition plans, and hot kitchen tips.
              </p>
            </div>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-xl bg-white text-[#2D2D2D] placeholder-[#6B7280] text-sm border-0 focus:ring-2 focus:ring-[#4CAF50] outline-none"
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#2D2D2D] text-white hover:bg-black/80 font-bold rounded-xl text-sm transition-all shadow-sm"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}